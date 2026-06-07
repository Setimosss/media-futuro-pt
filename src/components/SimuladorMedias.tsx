import { useEffect, useMemo, useState } from "react";
import { Calculator, Info, Plus, Trash2, GripVertical } from "lucide-react";

type Props = {
  onMediaChange: (media: number) => void;
};

type Subject = {
  id: string;
  name: string;
  year: "10" | "11" | "12";
  grade: string; // 0–20
  weight: string; // peso relativo (ex.: nº de tempos / créditos)
};

const yearOptions: Subject["year"][] = ["10", "11", "12"];

let counter = 0;
const newId = () => `s${++counter}`;

const initialSubjects: Subject[] = [
  { id: newId(), name: "Português", year: "10", grade: "", weight: "1" },
  { id: newId(), name: "Matemática", year: "11", grade: "", weight: "1.5" },
  { id: newId(), name: "Disciplina específica", year: "12", grade: "", weight: "2" },
];

export function SimuladorMedias({ onMediaChange }: Props) {
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects);

  const { media, totalWeight } = useMemo(() => {
    let sumGW = 0;
    let sumW = 0;
    for (const s of subjects) {
      const g = parseFloat(s.grade.replace(",", "."));
      const w = parseFloat(s.weight.replace(",", "."));
      if (isNaN(g) || g < 0 || g > 20) continue;
      const weight = isNaN(w) || w <= 0 ? 1 : w;
      sumGW += g * weight;
      sumW += weight;
    }
    return { media: sumW === 0 ? 0 : sumGW / sumW, totalWeight: sumW };
  }, [subjects]);

  useEffect(() => {
    onMediaChange(media);
  }, [media, onMediaChange]);

  const percent = Math.min(100, (media / 20) * 100);

  const update = (id: string, patch: Partial<Subject>) =>
    setSubjects((list) => list.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const remove = (id: string) =>
    setSubjects((list) => (list.length > 1 ? list.filter((s) => s.id !== id) : list));

  const add = () =>
    setSubjects((list) => [
      ...list,
      { id: newId(), name: "", year: "10", grade: "", weight: "1" },
    ]);

  return (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold">Simulador de Médias</h3>
          <p className="text-sm text-muted-foreground">
            Adiciona cada disciplina e define o peso de cada uma
          </p>
        </div>
      </div>

      {/* header labels (desktop) */}
      <div className="mt-6 hidden grid-cols-[1fr_5rem_5rem_5rem_2rem] gap-3 px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:grid">
        <span>Disciplina</span>
        <span>Ano</span>
        <span>Nota</span>
        <span>Peso</span>
        <span />
      </div>

      <div className="mt-2 space-y-3">
        {subjects.map((s) => (
          <div
            key={s.id}
            className="grid grid-cols-2 gap-3 rounded-2xl border border-border/60 bg-background/30 p-3 sm:grid-cols-[1fr_5rem_5rem_5rem_2rem] sm:items-center sm:border-0 sm:bg-transparent sm:p-1"
          >
            <input
              value={s.name}
              onChange={(e) => update(s.id, { name: e.target.value })}
              placeholder="Nome da disciplina"
              className="col-span-2 rounded-xl border border-input bg-background/40 px-3 py-2.5 text-sm font-medium outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40 sm:col-span-1"
            />

            <select
              value={s.year}
              onChange={(e) => update(s.id, { year: e.target.value as Subject["year"] })}
              className="rounded-xl border border-input bg-background/40 px-2 py-2.5 text-sm font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y} className="bg-popover">
                  {y}.º
                </option>
              ))}
            </select>

            <input
              inputMode="decimal"
              value={s.grade}
              onChange={(e) => update(s.id, { grade: e.target.value })}
              placeholder="0–20"
              className="rounded-xl border border-input bg-background/40 px-2 py-2.5 text-sm font-semibold outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
            />

            <input
              inputMode="decimal"
              value={s.weight}
              onChange={(e) => update(s.id, { weight: e.target.value })}
              placeholder="1"
              className="rounded-xl border border-input bg-background/40 px-2 py-2.5 text-sm font-semibold text-accent outline-none placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40"
            />

            <button
              type="button"
              onClick={() => remove(s.id)}
              aria-label="Remover disciplina"
              className="flex items-center justify-center justify-self-end rounded-xl p-2 text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive disabled:opacity-30"
              disabled={subjects.length <= 1}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={add}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Plus className="h-4 w-4" />
        Adicionar disciplina
      </button>

      <div className="mt-8">
        <div className="mb-2 flex items-end justify-between">
          <span className="text-sm font-medium text-muted-foreground">Média ponderada</span>
          <span className="font-display text-3xl font-bold text-gradient">
            {media.toFixed(2)}
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gradient-brand transition-[width] duration-700 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" />
          Cada nota é multiplicada pelo seu peso. Em escala 0–200:{" "}
          {(media * 10).toFixed(0)} pontos · peso total {totalWeight.toFixed(1)}.
        </p>
      </div>
    </div>
  );
}
