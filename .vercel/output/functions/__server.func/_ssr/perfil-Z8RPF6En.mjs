import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-XfPU3z5m.mjs";
import { u as useFavoritos, N as Navbar } from "./useFavoritos-Ca-zP4-k.mjs";
import { s as supabase } from "./client-D6qnU8Yy.mjs";
import { U as User, L as LayoutDashboard, S as Settings, a as LoaderCircle, M as Mail, C as Calendar, b as Shield, c as LogOut, A as ArrowRight, T as Target, d as Search, e as CircleQuestionMark, f as ArrowLeft, G as GraduationCap } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/vercel__analytics.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function OnboardingAluno({ onComplete }) {
  const { user } = useAuth();
  const [step, setStep] = reactExports.useState(1);
  const [anoEscolar, setAnoEscolar] = reactExports.useState("");
  const [objetivoTipo, setObjetivoTipo] = reactExports.useState("");
  const [notaAlvo, setNotaAlvo] = reactExports.useState("");
  const [cursoAlvoNome, setCursoAlvoNome] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleFinish = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    const { error: error2 } = await supabase.from("user_perfil_aluno").insert({
      user_id: user.id,
      ano_escolar: anoEscolar,
      objetivo_tipo: objetivoTipo || "nao_sei",
      nota_alvo: notaAlvo ? parseFloat(notaAlvo) : null,
      curso_alvo_nome: cursoAlvoNome || null
    });
    setLoading(false);
    if (error2) {
      setError("Erro ao guardar. Tenta novamente.");
    } else {
      onComplete();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex items-center gap-2", children: [1, 2, 3].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-gradient-brand" : "bg-border/40"}`
      },
      s
    )) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Em que ano estás?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Isto permite-nos personalizar o acompanhamento para ti." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["10", "11", "12"].map((ano) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setAnoEscolar(ano),
          className: `rounded-2xl border p-5 text-center transition-all ${anoEscolar === ano ? "border-primary bg-primary/15 text-primary shadow-glow-sky" : "border-border/60 glass text-muted-foreground hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold", children: [
              ano,
              "º"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs", children: "ano" })
          ]
        },
        ano
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => anoEscolar && setStep(2),
          disabled: !anoEscolar,
          className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed",
          children: [
            "Continuar ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Qual é o teu objetivo?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Usamos isto para calcular as notas que precisas de tirar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setObjetivoTipo("nota_manual"),
            className: `flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${objetivoTipo === "nota_manual" ? "border-primary bg-primary/15" : "border-border/60 glass hover:border-primary/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Tenho uma nota alvo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Sei a média que quero ter no final do ano" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setObjetivoTipo("curso"),
            className: `flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${objetivoTipo === "curso" ? "border-accent bg-accent/15" : "border-border/60 glass hover:border-accent/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Tenho um curso em mente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Quero entrar num curso específico" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setObjetivoTipo("nao_sei"),
            className: `flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${objetivoTipo === "nao_sei" ? "border-border bg-secondary" : "border-border/60 glass hover:border-border"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Ainda não sei" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Só quero acompanhar as minhas notas" })
              ] })
            ]
          }
        )
      ] }),
      objetivoTipo === "nota_manual" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Que média pretendes ter? (0–20)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: "0",
            max: "20",
            step: "0.1",
            value: notaAlvo,
            onChange: (e) => setNotaAlvo(e.target.value),
            placeholder: "ex: 16.5",
            className: "w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-lg font-semibold outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          }
        )
      ] }),
      objetivoTipo === "curso" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Que curso queres seguir?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: cursoAlvoNome,
            onChange: (e) => setCursoAlvoNome(e.target.value),
            placeholder: "ex: Engenharia Informática",
            className: "w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setStep(1),
            className: "flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " Voltar"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => objetivoTipo && setStep(3),
            disabled: !objetivoTipo,
            className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed",
            children: [
              "Continuar ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Tudo pronto! 🎓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Vamos configurar o teu acompanhamento personalizado." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass border border-border/60 p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Ano escolar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            anoEscolar,
            "º ano"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Objetivo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            objetivoTipo === "nota_manual" && `Média ${notaAlvo} valores`,
            objetivoTipo === "curso" && (cursoAlvoNome || "Curso a definir"),
            objetivoTipo === "nao_sei" && "Acompanhar notas"
          ] })
        ] })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setStep(2),
            className: "flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              " Voltar"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleFinish,
            disabled: loading,
            className: "flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sky transition-all hover:scale-[1.02] disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }),
              loading ? "A guardar..." : "Começar acompanhamento"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function PerfilPage() {
  const {
    user,
    loading,
    signOut
  } = useAuth();
  const {
    favoritos,
    isLoading: favLoading
  } = useFavoritos();
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState("dashboard");
  const [perfilAluno, setPerfilAluno] = reactExports.useState(null);
  const [perfilLoading, setPerfilLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/"
    });
  }, [user, loading, navigate]);
  reactExports.useEffect(() => {
    if (!user) return;
    supabase.from("user_perfil_aluno").select("*").eq("user_id", user.id).maybeSingle().then(({
      data
    }) => {
      setPerfilAluno(data);
      setPerfilLoading(false);
    });
  }, [user]);
  if (loading || !user) return null;
  const createdAt = new Date(user.created_at).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const handleSignOut = async () => {
    await signOut();
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-3xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: user.email?.split("@")[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: user.email })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex rounded-2xl glass p-1 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab("dashboard"), className: `flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${tab === "dashboard" ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "text-muted-foreground hover:text-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }),
          "Dashboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab("definicoes"), className: `flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${tab === "definicoes" ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "text-muted-foreground hover:text-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4" }),
          "Definições"
        ] })
      ] }),
      tab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: perfilLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : !perfilAluno ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl glass border border-border/60 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingAluno, { onComplete: () => {
        supabase.from("user_perfil_aluno").select("*").eq("user_id", user.id).maybeSingle().then(({
          data
        }) => setPerfilAluno(data));
      } }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-border/60 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-muted-foreground uppercase tracking-wide", children: "O teu objetivo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary", children: perfilAluno.ano_escolar ? `${perfilAluno.ano_escolar}º ano` : "Ano a definir" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Meta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-primary", children: [
              perfilAluno.objetivo_tipo === "nota_manual" && `${perfilAluno.nota_alvo ?? "—"} valores`,
              perfilAluno.objetivo_tipo === "curso" && (perfilAluno.curso_alvo_nome || "Curso a definir"),
              (perfilAluno.objetivo_tipo === "nao_sei" || !perfilAluno.objetivo_tipo) && "Acompanhar evolução"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-border/60 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4", children: "Cursos favoritos" }),
          favLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }) }) : favoritos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2", children: "🎓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Ainda não guardaste nenhum curso." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#cursos", className: "mt-3 text-sm font-semibold text-primary hover:underline", children: "Explorar cursos →" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: favoritos.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl bg-background/30 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: f.curso_nome }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: f.instituicao })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/?search=${encodeURIComponent(f.curso_nome)}#cursos`, className: "ml-4 shrink-0 text-xs font-semibold text-primary hover:underline", children: "Ver →" })
          ] }, f.id)) })
        ] })
      ] }) }),
      tab === "definicoes" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass border border-border/60 p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm text-muted-foreground uppercase tracking-wide", children: "Informações da conta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: user.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Membro desde" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: createdAt })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Estado da conta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary", children: user.email_confirmed_at ? "✓ Email confirmado" : "⚠ Email por confirmar" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSignOut, className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/40 px-4 py-3 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Terminar sessão"
        ] })
      ] })
    ] })
  ] });
}
export {
  PerfilPage as component
};
