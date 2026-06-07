import { useEffect, useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";

type Props = {
  onMediaChange: (media: number) => void;
};

const years = [
  { key: "y10", label: "10.º ano" },
  { key: "y11", label: "11.º ano" },
  { key: "y12", label: "12.º ano" },
] as const;

type Key = (typeof years)[number]["key"];

export function SimuladorMedias({ onMediaChange }: Props) {
  const [grades, setGrades] = useState<Record<Key, string>>({
    y10: "",
    y11: "",
    y12: "",
  });

  const media = useMemo(() => {
    const vals = years
      .map((y) => parseFloat(grades[y.key].replace(",", ".")))
      .filter((v) => !isNaN(v) && v >= 0 && v <= 20);
    if (vals.length === 0) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [grades]);

  useEffect(() => {
    onMediaChange(media);
  }, [media, onMediaChange]);

  const percent = Math.min(100, (media / 20) * 100);

  return (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold">Simulador de Médias</h3>
          <p className="text-sm text-muted-foreground">Insere as tuas notas finais (0–20)</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {years.map((y) => (
          <label key={y.key} className="block">
            <span className="mb-2 block text-sm font-medium text-muted-foreground">
              {y.label}
            </span>
            <input
              inputMode="decimal"
              value={grades[y.key]}
              onChange={(e) =>
                setGrades((g) => ({ ...g, [y.key]: e.target.value }))
              }
              placeholder="0,0"
              className="w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-lg font-semibold outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
            />
          </label>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-2 flex items-end justify-between">
          <span className="text-sm font-medium text-muted-foreground">Média interna</span>
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
          Média dos anos preenchidos. Em escala 0–200: {(media * 10).toFixed(0)} pontos.
        </p>
      </div>
    </div>
  );
}
