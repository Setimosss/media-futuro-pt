import { useState } from "react";
import { GraduationCap, Target, Search, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Step = 1 | 2 | 3;
type ObjetivoTipo = "nota_manual" | "curso" | "nao_sei";

type Props = {
  onComplete: () => void;
};

export function OnboardingAluno({ onComplete }: Props) {
  const { user } = useAuth();
  const [step, setStep] = useState<Step>(1);
  const [anoEscolar, setAnoEscolar] = useState("");
  const [objetivoTipo, setObjetivoTipo] = useState<ObjetivoTipo | "">("");
  const [notaAlvo, setNotaAlvo] = useState("");
  const [cursoAlvoNome, setCursoAlvoNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFinish = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);

    const { error } = await (supabase as any).from("user_perfil_aluno").insert({
      user_id: user.id,
      ano_escolar: anoEscolar,
      objetivo_tipo: objetivoTipo || "nao_sei",
      nota_alvo: notaAlvo ? parseFloat(notaAlvo) : null,
      curso_alvo_nome: cursoAlvoNome || null,
    });

    setLoading(false);
    if (error) {
      setError("Erro ao guardar. Tenta novamente.");
    } else {
      onComplete();
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              s <= step ? "bg-gradient-brand" : "bg-border/40"
            }`}
          />
        ))}
      </div>

      {/* Step 1 — Ano escolar */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Em que ano estás?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Isto permite-nos personalizar o acompanhamento para ti.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["10", "11", "12"].map((ano) => (
              <button
                key={ano}
                type="button"
                onClick={() => setAnoEscolar(ano)}
                className={`rounded-2xl border p-5 text-center transition-all ${
                  anoEscolar === ano
                    ? "border-primary bg-primary/15 text-primary shadow-glow-sky"
                    : "border-border/60 glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="font-display text-3xl font-bold">{ano}º</div>
                <div className="mt-1 text-xs">ano</div>
              </button>
            ))}
          </div>

          <button
            onClick={() => anoEscolar && setStep(2)}
            disabled={!anoEscolar}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continuar <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Step 2 — Objetivo */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Qual é o teu objetivo?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Usamos isto para calcular as notas que precisas de tirar.
            </p>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setObjetivoTipo("nota_manual")}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                objetivoTipo === "nota_manual"
                  ? "border-primary bg-primary/15"
                  : "border-border/60 glass hover:border-primary/40"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Tenho uma nota alvo</p>
                <p className="text-xs text-muted-foreground">Sei a média que quero ter no final do ano</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setObjetivoTipo("curso")}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                objetivoTipo === "curso"
                  ? "border-accent bg-accent/15"
                  : "border-border/60 glass hover:border-accent/40"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Search className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Tenho um curso em mente</p>
                <p className="text-xs text-muted-foreground">Quero entrar num curso específico</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setObjetivoTipo("nao_sei")}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                objetivoTipo === "nao_sei"
                  ? "border-border bg-secondary"
                  : "border-border/60 glass hover:border-border"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground">
                <HelpCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Ainda não sei</p>
                <p className="text-xs text-muted-foreground">Só quero acompanhar as minhas notas</p>
              </div>
            </button>
          </div>

          {/* Input consoante o objetivo */}
          {objetivoTipo === "nota_manual" && (
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Que média pretendes ter? (0–20)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                step="0.1"
                value={notaAlvo}
                onChange={(e) => setNotaAlvo(e.target.value)}
                placeholder="ex: 16.5"
                className="w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-lg font-semibold outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
          )}

          {objetivoTipo === "curso" && (
            <div>
              <label className="mb-2 block text-sm font-medium text-muted-foreground">
                Que curso queres seguir?
              </label>
              <input
                type="text"
                value={cursoAlvoNome}
                onChange={(e) => setCursoAlvoNome(e.target.value)}
                placeholder="ex: Engenharia Informática"
                className="w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            <button
              onClick={() => objetivoTipo && setStep(3)}
              disabled={!objetivoTipo}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuar <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Confirmação */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Tudo pronto! 🎓</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Vamos configurar o teu acompanhamento personalizado.
            </p>
          </div>

          <div className="rounded-2xl glass border border-border/60 p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Ano escolar</span>
              <span className="font-semibold">{anoEscolar}º ano</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Objetivo</span>
              <span className="font-semibold">
                {objetivoTipo === "nota_manual" && `Média ${notaAlvo} valores`}
                {objetivoTipo === "curso" && (cursoAlvoNome || "Curso a definir")}
                {objetivoTipo === "nao_sei" && "Acompanhar notas"}
              </span>
            </div>
          </div>

          {error && (
            <p className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            <button
              onClick={handleFinish}
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-60"
            >
              <GraduationCap className="h-4 w-4" />
              {loading ? "A guardar..." : "Começar acompanhamento"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}