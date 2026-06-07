import { useMemo, useState } from "react";
import { Search, MapPin, Users, Compass, CheckCircle2, Target } from "lucide-react";
import { COURSES, AREAS, type Course } from "@/data/courses";

function MiniBars({ history }: { history: Course["history"] }) {
  const max = Math.max(...history.map((h) => h.grade));
  const min = Math.min(...history.map((h) => h.grade)) - 4;
  return (
    <div className="flex items-end gap-1" aria-hidden>
      {history.map((h) => {
        const pct = ((h.grade - min) / (max - min)) * 100;
        return (
          <div
            key={h.year}
            className="w-1.5 rounded-full bg-gradient-brand"
            style={{ height: `${Math.max(20, pct)}%` }}
          />
        );
      })}
    </div>
  );
}

export function ExploradorCursos() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<"all" | Course["area"]>("all");
  const [myGrade, setMyGrade] = useState("");

  const grade = parseFloat(myGrade.replace(",", ".")) || 0;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.university.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q);
      const matchArea = area === "all" || c.area === area;
      return matchQ && matchArea;
    }).sort((a, b) => b.lastGrade - a.lastGrade);
  }, [query, area]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Procura por curso, universidade ou cidade..."
            className="w-full rounded-2xl border border-input bg-background/40 py-3.5 pl-12 pr-4 text-base outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={area === "all"} onClick={() => setArea("all")}>
              Todas
            </FilterChip>
            {AREAS.map((a) => (
              <FilterChip key={a} active={area === a} onClick={() => setArea(a)}>
                {a}
              </FilterChip>
            ))}
          </div>

          <label className="flex items-center gap-2 rounded-2xl glass px-3 py-2">
            <Target className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">A minha nota</span>
            <input
              inputMode="decimal"
              value={myGrade}
              onChange={(e) => setMyGrade(e.target.value)}
              placeholder="0–200"
              className="w-20 rounded-lg border border-input bg-background/40 px-2 py-1 text-sm font-semibold outline-none focus:border-accent"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => {
          const eligible = grade > 0 && grade >= c.lastGrade;
          return (
            <article
              key={c.id}
              className={`group flex flex-col rounded-3xl glass p-5 transition-all hover:-translate-y-1 ${
                eligible ? "ring-2 ring-accent/60 shadow-glow-pink" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                  {c.area}
                </span>
                <MiniBars history={c.history} />
              </div>

              <h3 className="mt-3 font-display text-lg font-bold leading-snug">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.university}</p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.city}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {c.vacancies} vagas
                </span>
              </div>

              <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <div className="text-xs text-muted-foreground">Último colocado</div>
                  <div className="font-display text-2xl font-bold text-gradient">
                    {c.lastGrade.toFixed(1)}
                  </div>
                </div>
                {eligible && (
                  <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Entras!
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {results.length === 0 && (
        <div className="mt-10 flex flex-col items-center gap-2 text-center text-muted-foreground">
          <Compass className="h-8 w-8" />
          <p>Nenhum curso encontrado. Tenta outra pesquisa.</p>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
        active
          ? "bg-gradient-brand text-primary-foreground shadow-glow-sky"
          : "glass text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
