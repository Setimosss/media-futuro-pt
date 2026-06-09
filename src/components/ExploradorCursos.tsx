import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Search,
  MapPin,
  Users,
  Compass,
  CheckCircle2,
  Target,
  Loader2,
  GraduationCap,
  Building2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export type Curso = {
  id: string;
  nome_curso: string;
  nome_instituicao: string;
  cidade: string | null;
  area: string | null;
  tipo_ensino: string | null;
  natureza: string | null;
  vagas: number | null;
  media_2024: number | null;
  media_2023: number | null;
  media_2022: number | null;
};

const TIPOS = ["Universitário", "Politécnico"] as const;
const NATUREZAS = ["Público", "Privado"] as const;

function MiniBars({ curso }: { curso: Curso }) {
  const vals = [curso.media_2022, curso.media_2023, curso.media_2024].filter(
    (v): v is number => v != null,
  );
  if (vals.length === 0) return null;
  const max = Math.max(...vals);
  const min = Math.min(...vals) - 4;
  return (
    <div className="flex items-end gap-1" aria-hidden>
      {vals.map((v, i) => {
        const pct = ((v - min) / (max - min)) * 100;
        return (
          <div
            key={i}
            className="w-1.5 rounded-full bg-gradient-brand"
            style={{ height: `${Math.max(20, pct)}%` }}
          />
        );
      })}
    </div>
  );
}

export function ExploradorCursos({
  selectedId,
  onSelectCourse,
}: {
  selectedId?: string;
  onSelectCourse?: (curso: Curso) => void;
}) {
  const [query, setQuery] = useState("");
  const [tipo, setTipo] = useState<"all" | (typeof TIPOS)[number]>("all");
  const [natureza, setNatureza] = useState<"all" | (typeof NATUREZAS)[number]>("all");
  const [myGrade, setMyGrade] = useState("");

  const grade = parseFloat(myGrade.replace(",", ".")) || 0;
  const term = query.trim();
  const hasSearch = term.length >= 3;

  const { data, isFetching, error } = useQuery({
    queryKey: ["cursos", hasSearch ? term.toLowerCase() : "", tipo, natureza],
    queryFn: async () => {
      let q = supabase
        .from("unicalc_cursos")
        .select(
          "id, nome_curso, nome_instituicao, cidade, area, tipo_ensino, natureza, vagas, media_2024, media_2023, media_2022",
        );

      if (hasSearch) {
        q = q.or(`nome_curso.ilike.%${term}%,nome_instituicao.ilike.%${term}%`);
      }
      if (tipo !== "all") q = q.eq("tipo_ensino", tipo);
      if (natureza !== "all") q = q.eq("natureza", natureza);

      const { data, error } = await q.order("media_2024", {
        ascending: false,
        nullsFirst: false,
      });
      if (error) throw error;
      return (data ?? []) as Curso[];
    },
  });

  const results = data ?? [];
  const showHint = query.trim().length > 0 && query.trim().length < 3;

  const counts = useMemo(() => results.length, [results]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Procura por curso ou instituição (mín. 3 letras)..."
            className="w-full rounded-2xl border border-input bg-background/40 py-3.5 pl-12 pr-4 text-base outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
          {isFetching && (
            <Loader2 className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-primary" />
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-3.5 w-3.5" />
              Ensino
            </span>
            <FilterChip active={tipo === "all"} onClick={() => setTipo("all")}>
              Todos
            </FilterChip>
            {TIPOS.map((t) => (
              <FilterChip key={t} active={tipo === t} onClick={() => setTipo(t)}>
                {t}
              </FilterChip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              Natureza
            </span>
            <FilterChip active={natureza === "all"} onClick={() => setNatureza("all")}>
              Todas
            </FilterChip>
            {NATUREZAS.map((n) => (
              <FilterChip key={n} active={natureza === n} onClick={() => setNatureza(n)}>
                {n}
              </FilterChip>
            ))}
          </div>
        </div>

        <label className="flex w-fit items-center gap-2 rounded-2xl glass px-3 py-2">
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

      {showHint && (
        <p className="mt-4 text-sm text-muted-foreground">
          Escreve pelo menos 3 letras para pesquisar.
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-destructive">
          Não foi possível carregar os cursos. Tenta novamente.
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => {
          const last = c.media_2024 ?? c.media_2023 ?? c.media_2022 ?? 0;
          const eligible = grade > 0 && last > 0 && grade >= last;
          const isSelected = c.id === selectedId;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelectCourse?.(c)}
              className={`group flex flex-col rounded-3xl glass p-5 text-left transition-all hover:-translate-y-1 ${
                isSelected ? "ring-2 ring-primary/70 shadow-glow-sky" : ""
              } ${eligible && !isSelected ? "ring-2 ring-accent/60 shadow-glow-pink" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {c.area && (
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                      {c.area}
                    </span>
                  )}
                  {c.natureza && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                      {c.natureza}
                    </span>
                  )}
                </div>
                <MiniBars curso={c} />
              </div>

              <h3 className="mt-3 font-display text-lg font-bold leading-snug">{c.nome_curso}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.nome_instituicao}</p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                {c.cidade && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {c.cidade}
                  </span>
                )}
                {c.tipo_ensino && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {c.tipo_ensino}
                  </span>
                )}
                {c.vagas != null && (
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {c.vagas} vagas
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <div className="text-xs text-muted-foreground">Último colocado (2024)</div>
                  <div className="font-display text-2xl font-bold text-gradient">
                    {last > 0 ? last.toFixed(1) : "—"}
                  </div>
                </div>
                {eligible && (
                  <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Entras!
                  </span>
                )}
              </div>

              <div className="mt-3 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {isSelected ? "Selecionado — vê a tendência ↓" : "Clica para ver a tendência ↓"}
              </div>
            </button>
          );
        })}
      </div>

      {!isFetching && counts === 0 && !showHint && (
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
