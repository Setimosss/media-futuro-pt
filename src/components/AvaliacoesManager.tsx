import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, TrendingUp, Award, ClipboardList } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Avaliacao = {
  id: string;
  disciplina_id: string;
  tipo: "teste" | "trabalho" | "participacao" | "exame";
  nome: string;
  nota: number;
  peso: number;
  data: string;
};

type Disciplina = {
  id: string;
  nome: string;
  peso_testes: number;
  peso_trabalhos: number;
  peso_participacao: number;
  tem_exame: boolean;
  peso_exame_final: number;
};

type Props = {
  anoEscolar: string;
  notaAlvo?: number | null;
};

function calcularMedia(avaliacoes: Avaliacao[], disciplina: Disciplina): number | null {
  const tipos = ["teste", "trabalho", "participacao"] as const;
  let totalPonderado = 0;
  let totalPeso = 0;

  for (const tipo of tipos) {
    const avs = avaliacoes.filter((a) => a.tipo === tipo);
    if (avs.length === 0) continue;

    const mediaTipo = avs.reduce((acc, a) => acc + a.nota * (a.peso / 100), 0) /
      avs.reduce((acc, a) => acc + a.peso / 100, 0);

    const pesoDisciplina =
      tipo === "teste" ? disciplina.peso_testes :
      tipo === "trabalho" ? disciplina.peso_trabalhos :
      disciplina.peso_participacao;

    totalPonderado += mediaTipo * pesoDisciplina;
    totalPeso += pesoDisciplina;
  }

  if (totalPeso === 0) return null;
  const mediaContinua = totalPonderado / totalPeso;

  const exame = avaliacoes.find((a) => a.tipo === "exame");
  if (disciplina.tem_exame && exame) {
    const pesoExame = disciplina.peso_exame_final / 100;
    return mediaContinua * (1 - pesoExame) + exame.nota * pesoExame;
  }

  return mediaContinua;
}

export function AvaliacoesManager({ anoEscolar, notaAlvo }: Props) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [selectedDisciplina, setSelectedDisciplina] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [novaAvaliacao, setNovaAvaliacao] = useState({
    tipo: "teste" as Avaliacao["tipo"],
    nome: "",
    nota: "",
    peso: "100",
    data: new Date().toISOString().split("T")[0],
  });

  const { data: disciplinas = [] } = useQuery({
    queryKey: ["disciplinas", user?.id, anoEscolar],
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_disciplinas")
        .select("*")
        .eq("user_id", user!.id)
        .eq("ano", anoEscolar)
        .order("nome");
      if (error) throw error;
      return data as Disciplina[];
    },
  });

  const { data: avaliacoes = [] } = useQuery({
    queryKey: ["avaliacoes", user?.id, anoEscolar],
    enabled: !!user,
    staleTime: 1000 * 60 * 2,
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("user_avaliacoes")
        .select("*")
        .eq("user_id", user!.id)
        .order("data", { ascending: false });
      if (error) throw error;
      return data as unknown as Avaliacao[];
    },
  });

  const addAvaliacao = useMutation({
    mutationFn: async () => {
      if (!selectedDisciplina) return;
      const { error } = await (supabase as any).from("user_avaliacoes").insert({
        user_id: user!.id,
        disciplina_id: selectedDisciplina,
        tipo: novaAvaliacao.tipo,
        nome: novaAvaliacao.nome || `${novaAvaliacao.tipo} ${new Date(novaAvaliacao.data).toLocaleDateString("pt-PT")}`,
        nota: parseFloat(novaAvaliacao.nota),
        peso: parseFloat(novaAvaliacao.peso),
        data: novaAvaliacao.data,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avaliacoes", user?.id, anoEscolar] });
      setShowAdd(false);
      setNovaAvaliacao({ tipo: "teste", nome: "", nota: "", peso: "100", data: new Date().toISOString().split("T")[0] });
    },
  });

  const deleteAvaliacao = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await (supabase as any).from("user_avaliacoes").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["avaliacoes", user?.id, anoEscolar] }),
  });

  const disciplinaAtual = disciplinas.find((d) => d.id === selectedDisciplina);
  const avaliacoesDisciplina = avaliacoes.filter((a) => a.disciplina_id === selectedDisciplina);
  const mediaAtual = disciplinaAtual ? calcularMedia(avaliacoesDisciplina, disciplinaAtual) : null;

  if (disciplinas.length === 0) return null;

  return (
    <div className="rounded-3xl glass border border-border/60 p-6">
      <div className="flex items-center gap-2 mb-5">
        <ClipboardList className="h-5 w-5 text-accent" />
        <h2 className="font-display text-lg font-bold">As minhas notas</h2>
      </div>

      {/* Selector de disciplina */}
      <div className="flex flex-wrap gap-2 mb-5">
        {disciplinas.map((d) => {
          const avs = avaliacoes.filter((a) => a.disciplina_id === d.id);
          const media = calcularMedia(avs, d);
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDisciplina(d.id)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all ${
                selectedDisciplina === d.id
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border/60 glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {d.nome}
              {media !== null && (
                <span className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${
                  media >= (notaAlvo ?? 10) ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
                }`}>
                  {media.toFixed(1)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selectedDisciplina && disciplinaAtual && (
        <>
          {/* Média atual */}
          <div className="mb-5 rounded-2xl bg-background/30 px-4 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Média atual em {disciplinaAtual.nome}</p>
              <p className={`font-display text-3xl font-bold ${
                mediaAtual !== null
                  ? mediaAtual >= (notaAlvo ?? 10) ? "text-primary" : "text-destructive"
                  : "text-muted-foreground"
              }`}>
                {mediaAtual !== null ? mediaAtual.toFixed(1) : "—"}
              </p>
            </div>
            {notaAlvo && mediaAtual !== null && (
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Meta</p>
                <p className="font-display text-xl font-bold text-accent">{notaAlvo}</p>
                <p className={`text-xs font-semibold ${mediaAtual >= notaAlvo ? "text-primary" : "text-destructive"}`}>
                  {mediaAtual >= notaAlvo ? "✓ No caminho certo!" : `Faltam ${(notaAlvo - mediaAtual).toFixed(1)} pts`}
                </p>
              </div>
            )}
            <button
              onClick={() => setShowAdd(!showAdd)}
              className="flex items-center gap-1.5 rounded-xl bg-accent/15 px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/25 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Adicionar nota
            </button>
          </div>

          {/* Formulário de nova avaliação */}
          {showAdd && (
            <div className="mb-4 rounded-2xl border border-accent/30 bg-accent/5 p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Tipo</label>
                  <select
                    value={novaAvaliacao.tipo}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, tipo: e.target.value as Avaliacao["tipo"] })}
                    className="w-full rounded-xl border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:border-accent"
                  >
                    <option value="teste">Teste</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="participacao">Participação</option>
                    {disciplinaAtual.tem_exame && <option value="exame">Exame Nacional</option>}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Nota (0–20)</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.1"
                    value={novaAvaliacao.nota}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, nota: e.target.value })}
                    placeholder="ex: 15.5"
                    className="w-full rounded-xl border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Nome (opcional)</label>
                  <input
                    type="text"
                    value={novaAvaliacao.nome}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, nome: e.target.value })}
                    placeholder="ex: Teste 1"
                    className="w-full rounded-xl border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">Data</label>
                  <input
                    type="date"
                    value={novaAvaliacao.data}
                    onChange={(e) => setNovaAvaliacao({ ...novaAvaliacao, data: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background/40 px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowAdd(false)}
                  className="rounded-xl border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => addAvaliacao.mutate()}
                  disabled={!novaAvaliacao.nota || addAvaliacao.isPending}
                  className="flex-1 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-40"
                >
                  {addAvaliacao.isPending ? "A guardar..." : "Guardar nota"}
                </button>
              </div>
            </div>
          )}

          {/* Lista de avaliações */}
          {avaliacoesDisciplina.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
              <Award className="h-8 w-8 mb-2" />
              <p className="text-sm">Ainda não tens notas em {disciplinaAtual.nome}.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {avaliacoesDisciplina.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-2xl bg-background/20 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-lg px-2 py-1 text-xs font-semibold ${
                      a.tipo === "teste" ? "bg-primary/15 text-primary" :
                      a.tipo === "trabalho" ? "bg-accent/15 text-accent" :
                      a.tipo === "exame" ? "bg-destructive/15 text-destructive" :
                      "bg-secondary text-muted-foreground"
                    }`}>
                      {a.tipo === "teste" ? "Teste" :
                       a.tipo === "trabalho" ? "Trabalho" :
                       a.tipo === "exame" ? "Exame" : "Participação"}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{a.nome}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(a.data).toLocaleDateString("pt-PT")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-display text-xl font-bold ${
                      a.nota >= 10 ? "text-primary" : "text-destructive"
                    }`}>
                      {a.nota.toFixed(1)}
                    </span>
                    <button
                      onClick={() => deleteAvaliacao.mutate(a.id)}
                      className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {!selectedDisciplina && (
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <TrendingUp className="h-8 w-8 mb-2" />
          <p className="text-sm">Seleciona uma disciplina para ver e adicionar notas.</p>
        </div>
      )}
    </div>
  );
}