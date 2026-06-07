import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { LineChart as LineChartIcon, TrendingUp } from "lucide-react";
import { COURSES } from "@/data/courses";

export function TendenciaMedias() {
  const [courseId, setCourseId] = useState(COURSES[0].id);
  const course = COURSES.find((c) => c.id === courseId)!;

  const first = course.history[0].grade;
  const last = course.history[course.history.length - 1].grade;
  const delta = last - first;

  return (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <LineChartIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold">Tendência das médias</h3>
            <p className="text-sm text-muted-foreground">Último colocado — 3 anos</p>
          </div>
        </div>

        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="rounded-2xl border border-input bg-background/60 px-4 py-2.5 text-sm font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
        >
          {COURSES.map((c) => (
            <option key={c.id} value={c.id} className="bg-popover">
              {c.name} — {c.university}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold ${
            delta >= 0 ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
          }`}
        >
          <TrendingUp className="h-3.5 w-3.5" />
          {delta >= 0 ? "+" : ""}
          {delta.toFixed(1)} pts
        </span>
        <span className="text-muted-foreground">desde {course.history[0].year}</span>
      </div>

      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={course.history} margin={{ left: -16, right: 8, top: 8 }}>
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
    </div>
  );
}
