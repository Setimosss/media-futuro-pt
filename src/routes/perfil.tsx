import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { User, Mail, Calendar, LogOut, Shield, Loader2, Settings, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { useFavoritos } from "@/hooks/useFavoritos";
import { OnboardingAluno } from "@/components/OnboardingAluno";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/perfil")({
  component: PerfilPage,
});

type PerfilAluno = {
  ano_escolar: string | null;
  objetivo_tipo: string | null;
  nota_alvo: number | null;
  curso_alvo_nome: string | null;
};

type Tab = "dashboard" | "definicoes";

function PerfilPage() {
  const { user, loading, signOut } = useAuth();
  const { favoritos, isLoading: favLoading } = useFavoritos();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("dashboard");
  const [perfilAluno, setPerfilAluno] = useState<PerfilAluno | null>(null);
  const [perfilLoading, setPerfilLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/" });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("user_perfil_aluno")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setPerfilAluno(data);
        setPerfilLoading(false);
      });
  }, [user]);

  if (loading || !user) return null;

  const createdAt = new Date(user.created_at).toLocaleDateString("pt-PT", {
    day: "numeric", month: "long", year: "numeric",
  });

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold">{user.email?.split("@")[0]}</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex rounded-2xl glass p-1 gap-1">
          <button
            onClick={() => setTab("dashboard")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              tab === "dashboard"
                ? "bg-gradient-brand text-primary-foreground shadow-glow-sky"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </button>
          <button
            onClick={() => setTab("definicoes")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              tab === "definicoes"
                ? "bg-gradient-brand text-primary-foreground shadow-glow-sky"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Settings className="h-4 w-4" />
            Definições
          </button>
        </div>

        {/* Dashboard Tab */}
        {tab === "dashboard" && (
          <>
            {perfilLoading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : !perfilAluno ? (
              <div className="rounded-3xl glass border border-border/60 p-8">
                <OnboardingAluno onComplete={() => {
                  supabase
                    .from("user_perfil_aluno")
                    .select("*")
                    .eq("user_id", user.id)
                    .maybeSingle()
                    .then(({ data }) => setPerfilAluno(data));
                }} />
              </div>
            ) : (
              <div className="space-y-4">
                {/* Resumo do objetivo */}
                <div className="rounded-3xl glass border border-border/60 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      O teu objetivo
                    </h2>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {perfilAluno.ano_escolar ? `${perfilAluno.ano_escolar}º ano` : "Ano a definir"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Meta</p>
                      <p className="text-lg font-bold text-primary">
                        {perfilAluno.objetivo_tipo === "nota_manual" && `${perfilAluno.nota_alvo ?? "—"} valores`}
                        {perfilAluno.objetivo_tipo === "curso" && (perfilAluno.curso_alvo_nome || "Curso a definir")}
                        {(perfilAluno.objetivo_tipo === "nao_sei" || !perfilAluno.objetivo_tipo) && "Acompanhar evolução"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Favoritos */}
                <div className="rounded-3xl glass border border-border/60 p-6">
                  <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
                    Cursos favoritos
                  </h2>
                  {favLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : favoritos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                      <span className="text-3xl mb-2">🎓</span>
                      <p className="text-sm">Ainda não guardaste nenhum curso.</p>
                      <a href="/#cursos" className="mt-3 text-sm font-semibold text-primary hover:underline">
                        Explorar cursos →
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {favoritos.map((f) => (
                        <div key={f.id} className="flex items-center justify-between rounded-2xl bg-background/30 px-4 py-3">
                          <div>
                            <p className="text-sm font-semibold">{f.curso_nome}</p>
                            <p className="text-xs text-muted-foreground">{f.instituicao}</p>
                          </div>

                          <a
                            href={`/?search=${encodeURIComponent(f.curso_nome)}#cursos`}
                            className="ml-4 shrink-0 text-xs font-semibold text-primary hover:underline"
                          >
                            Ver →
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Definições Tab */}
        {tab === "definicoes" && (
          <div className="space-y-4">
            <div className="rounded-3xl glass border border-border/60 p-6 space-y-4">
              <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Informações da conta
              </h2>
              <div className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Membro desde</p>
                  <p className="text-sm font-medium">{createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                <Shield className="h-4 w-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Estado da conta</p>
                  <p className="text-sm font-medium text-primary">
                    {user.email_confirmed_at ? "✓ Email confirmado" : "⚠ Email por confirmar"}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/40 px-4 py-3 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" />
              Terminar sessão
            </button>
          </div>
        )}
      </main>
    </div>
  );
}