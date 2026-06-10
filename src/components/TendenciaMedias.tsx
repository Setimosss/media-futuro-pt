import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { LineChart as LineChartIcon, TrendingUp, MousePointerClick } from "lucide-react";
import type { Curso } from "@/types/curso";

export function TendenciaMedias({ curso }: { curso?: Curso | null }) {
  if (!curso) {
    return (
      <div className="rounded-3xl glass p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <LineChartIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold">Tendência das médias</h3>
            <p className="text-sm text-muted-foreground">Último colocado — 3 anos</p>
          </div>
        </div>
        <div className="mt-8 flex h-64 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
          <MousePointerClick className="h-8 w-8" />
          <p>Seleciona um curso no explorador para veres a evolução das notas.</p>
        </div>
      </div>
    );
  }

  const history = [
    { year: "2022", grade: curso.media_2022 },
    { year: "2023", grade: curso.media_2023 },
    { year: "2024", grade: curso.media_2024 },
  ].filter((h): h is { year: string; grade: number } => h.grade != null);

  const first = history[0]?.grade ?? 0;
  const last = history[history.length - 1]?.grade ?? 0;
  const delta = last - first;

  return (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <LineChartIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold">{curso.nome_curso}</h3>
            <p className="text-sm text-muted-foreground">{curso.nome_instituicao}</p>
          </div>
        </div>

        {history.length > 1 && (
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold ${
                delta >= 0 ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              {delta >= 0 ? "+" : ""}
              {delta.toFixed(1)} pts
            </span>
            <span className="text-muted-foreground">desde {history[0].year}</span>
          </div>
        )}
      </div>

      {history.length === 0 ? (
        <div className="mt-8 flex h-48 items-center justify-center text-center text-muted-foreground">
          <p>Sem dados históricos para este curso.</p>
        </div>
      ) : (
        <div className="mt-6 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history} margin={{ left: -16, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="gradMedia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="var(--color-muted-foreground)"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <YAxis
                domain={["dataMin - 4", "dataMax + 4"]}
                stroke="var(--color-muted-foreground)"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <Tooltip
                cursor={{ stroke: "var(--color-accent)", strokeWidth: 1 }}
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  color: "var(--color-foreground)",
                }}
                formatter={(v: number) => [`${v} pts`, "Último colocado"]}
              />
              <Area
                type="monotone"
                dataKey="grade"
                stroke="var(--color-primary)"
                strokeWidth={3}
                fill="url(#gradMedia)"
                dot={{ r: 4, fill: "var(--color-primary)" }}
                activeDot={{ r: 6, fill: "var(--color-accent)" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
