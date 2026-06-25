import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { User, Mail, Calendar, LogOut, Shield, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { useFavoritos } from "@/hooks/useFavoritos";

export const Route = createFileRoute("/perfil")({
  component: PerfilPage,
});

function PerfilPage() {
  const { user, loading, signOut } = useAuth();
  const { favoritos, isLoading: favLoading } = useFavoritos();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/" });
    }
  }, [user, loading, navigate]);

  if (loading || !user) return null;

  const createdAt = new Date(user.created_at).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">O meu perfil</h1>
            <p className="text-sm text-muted-foreground">Gere a tua conta UniCalc PT</p>
          </div>
        </div>

        {/* Card info */}
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

        {/* Favoritos */}
        <div className="mt-6 rounded-3xl glass border border-border/60 p-6">
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
                    className="text-xs font-semibold text-primary hover:underline shrink-0 ml-4"
                  >
                    Ver →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Terminar sessão */}
        <button
          onClick={handleSignOut}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/40 px-4 py-3 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Terminar sessão
        </button>
      </main>
    </div>
  );
}