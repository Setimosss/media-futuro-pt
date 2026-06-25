import { useState } from "react";
import { LogIn, Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "register";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function AuthModal({ open, onClose }: Props) {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!open) return null;

  const reset = () => {
    setError(null);
    setSuccess(null);
    setEmail("");
    setPassword("");
  };

  const switchMode = (m: Mode) => {
    reset();
    setMode(m);
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);

    if (!email || !password) {
      setError("Preenche o email e a password.");
      return;
    }

    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Email ou password incorretos.");
      } else {
        onClose();
        reset();
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError("Erro ao criar conta. Tenta novamente.");
      } else {
        setSuccess("Conta criada! Verifica o teu email para confirmar.");
      }
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl glass border border-border/60 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <LogIn className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-bold">
              {mode === "login" ? "Entrar na conta" : "Criar conta"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {mode === "login" ? "Bem-vindo de volta!" : "Começa a guardar os teus cursos"}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex rounded-2xl bg-secondary/60 p-1 mb-6">
          {(["login", "register"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold transition-all ${
                mode === m
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "login" ? "Entrar" : "Registar"}
            </button>
          ))}
        </div>

        {/* Campos */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="o.teu@email.com"
                className="w-full rounded-2xl border border-input bg-background/40 pl-10 pr-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-input bg-background/40 pl-10 pr-12 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Erro / Sucesso */}
        {error && (
          <p className="mt-4 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-sm text-primary">
            {success}
          </p>
        )}

        {/* Botão */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "A processar..." : mode === "login" ? "Entrar" : "Criar conta"}
        </button>
      </div>
    </div>
  );
}