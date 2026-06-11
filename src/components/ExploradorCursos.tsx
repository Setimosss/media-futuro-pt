import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, MapPin, Users, Compass, CheckCircle2, Target, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Curso } from "@/types/curso";

type Natureza = "all" | "Público" | "Privado";
type TipoEnsino = "all" | "Universitário" | "Politécnico";

function MiniBars({ curso }: { curso: Curso }) {
  const values = [curso.media_2022, curso.media_2023, curso.media_2024].filter(
    (v): v is number => v != null,
  );
  if (values.length === 0) return null;
  const max = Math.max(...values);
  const min = Math.min(...values) - 4;
  return (
    <div className="flex items-end gap-1" aria-hidden>
      {values.map((grade, i) => {
        const pct = ((grade - min) / (max - min || 1)) * 100;
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
  onSelect,
}: {
  onSelect?: (curso: Curso) => void;
}) {
  const [query, setQuery] = useState("");
  const [natureza, setNatureza] = useState<Natureza>("all");
  const [tipoEnsino, setTipoEnsino] = useState<TipoEnsino>("all");
  const [myGrade, setMyGrade] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const grade = parseFloat(myGrade.replace(",", ".")) || 0;
  const q = debouncedQuery;

  const { data: cursos = [], isLoading, error } = useQuery({
    queryKey: ["cursos", q, natureza, tipoEnsino],
    queryFn: async () => {
      let req = supabase
        .from("unicalc_cursos")
        .select(
          "id, codigo_instituicao, nome_instituicao, tipo_ensino, natureza, codigo_curso, nome_curso, grau, vagas_estimadas, media_2024, media_2023, media_2022",
        );

      // Filtro de pesquisa dinâmico (>= 3 letras) em snake_case
      if (q.length >= 3) {
        const safeQ = q.replace(/[%_]/g, "\\$&");
        req = req.or(`nome_curso.ilike.%${safeQ}%,nome_instituicao.ilike.%${safeQ}%`);
      }
      if (natureza !== "all") req = req.eq("natureza", natureza);
      if (tipoEnsino !== "all") req = req.eq("tipo_ensino", tipoEnsino);

      const { data, error } = await req
        .order("media_2024", { ascending: false, nullsFirst: false })
        .limit(200);

      console.log("Query term:", q, "Dados recebidos:", data);
      if (error) {
        console.error("Erro Supabase:", error);
        throw error;
      }
      return (data ?? []) as Curso[];
    },
  });

  const results = useMemo(() => cursos, [cursos]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Procura por curso ou instituição..."
            className="w-full rounded-2xl border border-input bg-background/40 py-3.5 pl-12 pr-4 text-base outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={natureza === "all"} onClick={() => setNatureza("all")}>
              Todas
            </FilterChip>
            <FilterChip active={natureza === "Público"} onClick={() => setNatureza("Público")}>
              Público
            </FilterChip>
            <FilterChip active={natureza === "Privado"} onClick={() => setNatureza("Privado")}>
              Privado
            </FilterChip>
            <span className="mx-1 self-center text-muted-foreground/40">|</span>
            <FilterChip active={tipoEnsino === "all"} onClick={() => setTipoEnsino("all")}>
              Todos
            </FilterChip>
            <FilterChip
              active={tipoEnsino === "Universitário"}
              onClick={() => setTipoEnsino("Universitário")}
            >
              Universitário
            </FilterChip>
            <FilterChip
              active={tipoEnsino === "Politécnico"}
              onClick={() => setTipoEnsino("Politécnico")}
            >
              Politécnico
            </FilterChip>
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

      {error && (
        <div className="mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Não foi possível carregar os cursos. Tenta novamente.
        </div>
      )}

      {isLoading ? (
        <div className="mt-10 flex flex-col items-center gap-2 text-center text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p>A carregar cursos…</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => {
            const lastGrade = c.media_2024 ?? c.media_2023 ?? c.media_2022 ?? 0;
            const eligible = grade > 0 && lastGrade > 0 && grade >= lastGrade;
            return (
              <button
                type="button"
                key={c.id}
                onClick={() => onSelect?.(c)}
                className={`group flex flex-col rounded-3xl glass p-5 text-left transition-all hover:-translate-y-1 ${
                  eligible ? "ring-2 ring-accent/60 shadow-glow-pink" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
                    {c.grau ?? c.tipo_ensino ?? "Curso"}
                  </span>
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
                  {c.vagas_estimadas != null && (
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {c.vagas_estimadas} vagas
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Último colocado (2024)</div>
                    <div className="font-display text-2xl font-bold text-gradient">
                      {lastGrade > 0 ? lastGrade.toFixed(1) : "—"}
                    </div>
                  </div>
                  {eligible && (
                    <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Entras!
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {!isLoading && !error && results.length === 0 && (
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
