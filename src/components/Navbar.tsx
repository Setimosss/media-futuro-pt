import { useState } from "react";
import { GraduationCap, Calculator, Compass, Sparkles, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";

const links = [
  { href: "#simulador", label: "Simulador", icon: Calculator },
  { href: "#candidatura", label: "Candidatura", icon: Sparkles },
  { href: "#cursos", label: "Cursos", icon: Compass },
];

export function Navbar() {
  const { user, loading, signOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl glass px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-sky">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              UniCalc <span className="text-primary">PT</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </a>
            ))}
          </nav>

          {!loading && (
            <>
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <User className="h-3.5 w-3.5" />
                    </span>
                    <span className="hidden sm:block max-w-[120px] truncate text-foreground">
                      {user.email?.split("@")[0]}
                    </span>
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-border/60 glass shadow-lg overflow-hidden">
                      <div className="px-4 py-3 border-b border-border/40">
                        <p className="text-xs text-muted-foreground">Sessão iniciada como</p>
                        <p className="text-sm font-medium truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { signOut(); setMenuOpen(false); }}
                        className="flex w-full items-center gap-2 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Terminar sessão
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className="rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-transform hover:scale-105"
                >
                  Entrar
                </button>
              )}
            </>
          )}
        </div>
      </header>

      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}