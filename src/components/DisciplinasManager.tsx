import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const DISCIPLINAS_BASE = [
  "Português", "Matemática A", "Matemática B", "Inglês", "Francês",
  "Espanhol", "Física e Química A", "Biologia e Geologia", "Química",
  "Biologia", "Física", "Geologia", "História A", "História B",
  "Geografia A", "Geografia B", "Filosofia", "Psicologia B",
  "Economia A", "Economia B", "Contabilidade e Finanças",
  "Matemáticas Aplicadas às Ciências Sociais", "Educação Física",
  "Desenho A", "Geometria Descritiva A", "História da Cultura e das Artes",
  "Informática B", "Aplicações Informáticas B",
];

type Disciplina = {
  id: string;
  nome: string;
  ano: string;
  peso_testes: number;
  peso_trabalhos: number;
  peso_participacao: number;
  tem_exame: boolean;
  peso_exame_final: number;
};

type Props = {
  anoEscolar: string;
};

export function DisciplinasManager({ anoEscolar }: Props) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [novaNome, setNovaNome] = useState("");
  const [novaNomeCustom, setNovaNomeCustom] = useState("");
  // Estado local dos pesos — só vai ao Supabase no onBlur
  const [localPesos, setLocalPesos] = useState<Record<string, Record<string, string>>>({});

  const { data: disciplinas = [], isLoading } = useQuery({
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

  const addDisciplina = useMutation({
    mutationFn: async (nome: string) => {
      const { error } = await supabase.from("user_disciplinas").insert({
        user_id: user!.id,
        nome,
        ano: anoEscolar,
        peso_testes: 70,
        peso_trabalhos: 20,
        peso_participacao: 10,
        tem_exame: false,
        peso_exame_final: 30,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["disciplinas", user?.id, anoEscolar] });
      setShowAdd(false);
      setNovaNome("");
      setNovaNomeCustom("");
    },
  });

  const updateDisciplina = useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: Partial<Disciplina> }) => {
      const { error } = await supabase
        .from("user_disciplinas")
        .update(payload)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["disciplinas", user?.id, anoEscolar] }),
  });

  const deleteDisciplina = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("user_disciplinas").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["disciplinas", user?.id, anoEscolar] }),
  });

  const handleAdd = () => {
    const nome = novaNome === "outra" ? novaNomeCustom.trim() : novaNome;
    if (!nome) return;
    addDisciplina.mutate(nome);
  };

  // Valor local do input (para não fazer request a cada tecla)
  const getLocalValue = (id: string, field: string, fallback: number) => {
    return localPesos[id]?.[field] ?? String(fallback);
  };

  const setLocalValue = (id: string, field: string, value: string) => {
    setLocalPesos((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  // Só guarda no Supabase quando o utilizador sai do campo
  const handleBlur = (id: string, field: string, value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    updateDisciplina.mutate({ id, payload: { [field]: num } });
  };

  const disciplinasDisponiveis = DISCIPLINAS_BASE.filter(
    (d) => !disciplinas.some((x) => x.nome === d)
  );

  return (
    <div className="rounded-3xl glass border border-border/60 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="font-display text-lg font-bold">As minhas disciplinas</h2>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
            {anoEscolar}º ano
          </span>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-1.5 rounded-xl bg-primary/15 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/25"
        >
          <Plus className="h-4 w-4" />
          Adicionar
        </button>
      </div>

      {showAdd && (
        <div className="mb-4 rounded-2xl border border-primary/30 bg-primary/5 p-4 space-y-3">
          <select
            value={novaNome}
            onChange={(e) => setNovaNome(e.target.value)}
            className="w-full rounded-xl border border-input bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="">Seleciona uma disciplina...</option>
            {disciplinasDisponiveis.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
            <option value="outra">Outra (escreve o nome)</option>
          </select>

          {novaNome === "outra" && (
            <input
              type="text"
              value={novaNomeCustom}
              onChange={(e) => setNovaNomeCustom(e.target.value)}
              placeholder="Nome da disciplina"
              className="w-full rounded-xl border border-input bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          )}

          <div className="flex gap-2">
            <button
              onClick={() => { setShowAdd(false); setNovaNome(""); }}
              className="rounded-xl border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Cancelar
            </button>
            <button
              onClick={handleAdd}
              disabled={!novaNome || (novaNome === "outra" && !novaNomeCustom) || addDisciplina.isPending}
              className="flex-1 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-40"
            >
              {addDisciplina.isPending ? "A adicionar..." : "Adicionar"}
            </button>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-8 text-muted-foreground text-sm">A carregar...</div>
      ) : disciplinas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <span className="text-3xl mb-2">📚</span>
          <p className="text-sm">Ainda não tens disciplinas adicionadas.</p>
          <p className="text-xs mt-1">Clica em "Adicionar" para começar.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {disciplinas.map((d) => (
            <div key={d.id} className="rounded-2xl border border-border/40 bg-background/20 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <button
                  onClick={() => setExpandedId(expandedId === d.id ? null : d.id)}
                  className="flex flex-1 items-center gap-2 text-left"
                >
                  <span className="font-semibold text-sm">{d.nome}</span>
                  <span className="text-xs text-muted-foreground">
                    T:{d.peso_testes}% Tr:{d.peso_trabalhos}% P:{d.peso_participacao}%
                    {d.tem_exame && " + Exame"}
                  </span>
                  {expandedId === d.id
                    ? <ChevronUp className="h-4 w-4 ml-auto text-muted-foreground" />
                    : <ChevronDown className="h-4 w-4 ml-auto text-muted-foreground" />
                  }
                </button>
                <button
                  onClick={() => deleteDisciplina.mutate(d.id)}
                  className="ml-2 rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {expandedId === d.id && (
                <div className="border-t border-border/40 px-4 py-4 space-y-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Pesos da avaliação contínua
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Testes", field: "peso_testes", fallback: d.peso_testes },
                      { label: "Trabalhos", field: "peso_trabalhos", fallback: d.peso_trabalhos },
                      { label: "Participação", field: "peso_participacao", fallback: d.peso_participacao },
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="mb-1 block text-xs text-muted-foreground">{item.label}</label>
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={getLocalValue(d.id, item.field, item.fallback)}
                            onChange={(e) => setLocalValue(d.id, item.field, e.target.value)}
                            onBlur={(e) => handleBlur(d.id, item.field, e.target.value)}
                            className="w-full rounded-lg border border-input bg-background/40 px-2 py-1.5 text-sm font-semibold outline-none focus:border-primary"
                          />
                          <span className="text-xs text-muted-foreground">%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateDisciplina.mutate({ id: d.id, payload: { tem_exame: !d.tem_exame } })}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition-all ${
                        d.tem_exame
                          ? "border-accent bg-accent/15 text-accent"
                          : "border-border/60 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {d.tem_exame ? "✓ Tem exame nacional" : "Tem exame nacional?"}
                    </button>
                    {d.tem_exame && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Peso do exame:</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={getLocalValue(d.id, "peso_exame_final", d.peso_exame_final)}
                          onChange={(e) => setLocalValue(d.id, "peso_exame_final", e.target.value)}
                          onBlur={(e) => handleBlur(d.id, "peso_exame_final", e.target.value)}
                          className="w-16 rounded-lg border border-input bg-background/40 px-2 py-1 text-sm font-semibold outline-none focus:border-accent"
                        />
                        <span className="text-xs text-muted-foreground">%</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}