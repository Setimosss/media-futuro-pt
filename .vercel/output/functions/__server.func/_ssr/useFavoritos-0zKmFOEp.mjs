import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useAuth } from "./router-Cn2cnVyu.mjs";
import { s as supabase } from "./client-D6qnU8Yy.mjs";
import { u as useQueryClient, a as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { G as GraduationCap, b as Calculator, c as Sparkles, d as Compass, U as User, a as LogOut, X, e as LogIn, M as Mail, f as Lock, E as EyeOff, g as Eye } from "../_libs/lucide-react.mjs";
function AuthModal({ open, onClose }) {
  const [mode, setMode] = reactExports.useState("login");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [success, setSuccess] = reactExports.useState(null);
  if (!open) return null;
  const reset = () => {
    setError(null);
    setSuccess(null);
    setEmail("");
    setPassword("");
  };
  const switchMode = (m) => {
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
      const { error: error2 } = await supabase.auth.signInWithPassword({ email, password });
      if (error2) {
        if (error2.message.includes("Invalid login credentials")) {
          setError("Email ou password incorretos. Verifica os teus dados.");
        } else if (error2.message.includes("Email not confirmed")) {
          setError("O teu email ainda não foi confirmado. Verifica a tua caixa de entrada.");
        } else if (error2.message.includes("Too many requests")) {
          setError("Demasiadas tentativas. Aguarda alguns minutos e tenta novamente.");
        } else {
          setError("Erro ao entrar. Tenta novamente.");
        }
      } else {
        onClose();
        reset();
      }
    } else {
      const { error: error2 } = await supabase.auth.signUp({ email, password });
      if (error2) {
        if (error2.message.includes("User already registered")) {
          setError("Já existe uma conta com este email. Tenta entrar.");
        } else if (error2.message.includes("Password should be at least")) {
          setError("A password deve ter pelo menos 6 caracteres.");
        } else if (error2.message.includes("Unable to validate email")) {
          setError("Email inválido. Verifica o endereço introduzido.");
        } else {
          setError("Erro ao criar conta. Tenta novamente.");
        }
      } else {
        setSuccess("Conta criada! Verifica o teu email para confirmar.");
      }
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full max-w-md rounded-3xl glass border border-border/60 p-8 shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute right-4 top-4 rounded-xl p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold", children: mode === "login" ? "Entrar na conta" : "Criar conta" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: mode === "login" ? "Bem-vindo de volta!" : "Começa a guardar os teus cursos" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-2xl bg-secondary/60 p-1 mb-6", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => switchMode(m),
                className: `flex-1 rounded-xl py-2 text-sm font-semibold transition-all ${mode === m ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                children: m === "login" ? "Entrar" : "Registar"
              },
              m
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      placeholder: "o.teu@email.com",
                      className: "w-full rounded-2xl border border-input bg-background/40 pl-10 pr-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: showPassword ? "text" : "password",
                      value: password,
                      onChange: (e) => setPassword(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && handleSubmit(),
                      placeholder: "••••••••",
                      className: "w-full rounded-2xl border border-input bg-background/40 pl-10 pr-12 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] })
            ] }),
            mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: async () => {
                  if (!email) {
                    setError("Introduz o teu email primeiro.");
                    return;
                  }
                  setLoading(true);
                  const { error: error2 } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: `${window.location.origin}/perfil`
                  });
                  setLoading(false);
                  if (error2) {
                    setError("Erro ao enviar email. Verifica o endereço.");
                  } else {
                    setSuccess("Email de recuperação enviado! Verifica a tua caixa de entrada.");
                  }
                },
                className: "text-xs text-muted-foreground hover:text-primary transition-colors",
                children: "Esqueci-me da password"
              }
            ) }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive", children: error }),
            success && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-sm text-primary", children: success }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleSubmit,
                disabled: loading,
                className: "mt-6 w-full rounded-2xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed",
                children: loading ? "A processar..." : mode === "login" ? "Entrar" : "Criar conta"
              }
            )
          ]
        }
      )
    }
  );
}
const links = [
  { href: "#simulador", label: "Simulador", icon: Calculator },
  { href: "#candidatura", label: "Candidatura", icon: Sparkles },
  { href: "#cursos", label: "Cursos", icon: Compass }
];
function Navbar() {
  const { user, loading, signOut } = useAuth();
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const menuRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl glass px-4 py-3 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-sky", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold tracking-tight", children: [
          "UniCalc ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "PT" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: l.href,
          className: "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(l.icon, { className: "h-4 w-4" }),
            l.label
          ]
        },
        l.href
      )) }),
      !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: menuRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setMenuOpen(!menuOpen),
            className: "flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block max-w-[120px] truncate text-foreground", children: user.email?.split("@")[0] })
            ]
          }
        ),
        menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-48 rounded-2xl border border-border/60 glass shadow-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Sessão iniciada como" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: user.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/perfil",
              onClick: () => setMenuOpen(false),
              className: "flex w-full items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                "O meu perfil"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                signOut();
                setMenuOpen(false);
              },
              className: "flex w-full items-center gap-2 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                "Terminar sessão"
              ]
            }
          )
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setModalOpen(true),
          className: "rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-transform hover:scale-105",
          children: "Entrar"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthModal, { open: modalOpen, onClose: () => setModalOpen(false) })
  ] });
}
function useFavoritos() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { data: favoritos = [], isLoading } = useQuery({
    queryKey: ["favoritos", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("user_favoritos").select("id, curso_id, curso_nome, instituicao, created_at, user_id").order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    }
  });
  const addFavorito = useMutation({
    mutationFn: async (curso) => {
      if (!user?.id) throw new Error("Usuário não autenticado");
      const { error } = await supabase.from("user_favoritos").insert({
        user_id: user.id,
        curso_id: curso.id,
        curso_nome: curso.nome,
        instituicao: curso.instituicao
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos", user?.id] })
  });
  const removeFavorito = useMutation({
    mutationFn: async (cursoId) => {
      if (!user?.id) throw new Error("Usuário não autenticado");
      const { error } = await supabase.from("user_favoritos").delete().eq("curso_id", cursoId).eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos", user?.id] })
  });
  const isFavorito = (cursoId) => favoritos.some((f) => f.curso_id === cursoId);
  const toggleFavorito = (curso) => {
    if (!user) return;
    if (isFavorito(curso.id)) {
      removeFavorito.mutate(curso.id);
    } else {
      addFavorito.mutate(curso);
    }
  };
  return { favoritos, isLoading, isFavorito, toggleFavorito };
}
export {
  Navbar as N,
  useFavoritos as u
};
