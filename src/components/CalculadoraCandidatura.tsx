import { useMemo, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";

type Props = {
  internalMedia: number; // 0–20
};

const weightOptions = [
  { id: "60-40", label: "60 / 40", internal: 0.6, exam: 0.4 },
  { id: "50-50", label: "50 / 50", internal: 0.5, exam: 0.5 },
  { id: "65-35", label: "65 / 35", internal: 0.65, exam: 0.35 },
] as const;

export function CalculadoraCandidatura({ internalMedia }: Props) {
  const [weightId, setWeightId] = useState<(typeof weightOptions)[number]["id"]>("60-40");
  const [exam, setExam] = useState("");

  const weight = weightOptions.find((w) => w.id === weightId)!;
  const internal200 = internalMedia * 10;
  const examNum = parseFloat(exam.replace(",", ".")) || 0;

  const finalGrade = useMemo(() => {
    const g = internal200 * weight.internal + examNum * weight.exam;
    return Math.max(0, Math.min(200, g));
  }, [internal200, examNum, weight]);

  return (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold">Calculadora de Candidatura</h3>
          <p className="text-sm text-muted-foreground">Nota final de candidatura (0–200)</p>
        </div>
      </div>

      <div className="mt-6">
        <span className="mb-2 block text-sm font-medium text-muted-foreground">
          Peso (Secundário / Exames)
        </span>
        <div className="grid grid-cols-3 gap-2">
          {weightOptions.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setWeightId(w.id)}
              className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all ${
                weightId === w.id
                  ? "border-accent bg-accent/15 text-accent shadow-glow-pink"
                  : "border-input bg-background/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted-foreground">
            Média interna (0–200)
          </span>
          <div className="w-full rounded-2xl border border-input bg-background/20 px-4 py-3 text-lg font-semibold text-primary">
            {internal200.toFixed(0)}
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-muted-foreground">
            Nota dos exames (0–200)
          </span>
          <input
            inputMode="decimal"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            placeholder="0"
            className="w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-lg font-semibold outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40"
          />
        </label>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-brand p-6 text-primary-foreground shadow-glow-sky">
        <div className="flex items-center gap-3">
          <Trophy className="h-7 w-7" />
          <span className="font-display text-base font-semibold">Nota de Candidatura</span>
        </div>
        <span className="font-display text-4xl font-extrabold">{finalGrade.toFixed(1)}</span>
      </div>

      {internalMedia === 0 && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Preenche o simulador acima para usar a tua média interna automaticamente.
        </p>
      )}
    </div>
  );
}
