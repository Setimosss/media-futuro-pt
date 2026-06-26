import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, u as useFavoritos } from "./useFavoritos-Ca-zP4-k.mjs";
import { D as Dialog$1, a as DialogTrigger$1, b as DialogPortal$1, c as DialogContent$1, d as DialogClose, e as DialogTitle$1, f as DialogDescription$1, g as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-D6qnU8Yy.mjs";
import { u as useAuth } from "./router-XfPU3z5m.mjs";
import { G as GraduationCap, h as Sparkles, A as ArrowRight, B as BookOpen, m as TrendingUp, g as Calculator, T as Target, f as ArrowLeft, P as Plus, I as Info, n as Trophy, o as Check, p as Share2, q as ChartLine, r as MousePointerClick, s as TrendingDown, t as Minus, d as Search, u as MapPin, a as LoaderCircle, H as Heart, X, v as Users, w as CircleCheck, i as Compass, x as ChevronDown, y as Trash2, z as GitCompare, D as Grid3x3 } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, a as ReferenceLine, T as Tooltip, b as Area } from "../_libs/recharts.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/vercel__analytics.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const stats = [
  { value: "2.500+", label: "Cursos & notas" },
  { value: "3 anos", label: "Histórico de médias" },
  { value: "100%", label: "Gratuito" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden bg-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow [animation-delay:-3s]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-accent" }),
          "Acesso ao Ensino Superior 2025"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl", children: [
          "O teu futuro na ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Universidade" }),
          " começa aqui"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg", children: "Simula a tua média interna, calcula a nota de candidatura com o peso dos exames nacionais e descobre em que cursos entras — tudo num só lugar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#simulador",
              className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow-sky transition-transform hover:scale-105",
              children: [
                "Calcular a minha média",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#cursos",
              className: "inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-primary" }),
                "Explorar cursos"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-4 text-center sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary sm:text-3xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground sm:text-sm", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-accent" }),
        "Notas dos últimos colocados baseadas em dados ilustrativos de anos anteriores"
      ] })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Dialog$1;
const DialogTrigger = DialogTrigger$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
const FIRST_TESTS = [10, 12, 14, 16, 18];
function toneFor(value) {
  if (value >= 16) return "text-primary";
  if (value >= 12) return "text-foreground";
  if (value >= 9.5) return "text-accent";
  return "text-destructive";
}
function MatrizCenarios({ subjectName, goal, trigger }) {
  const meta = goal && goal >= 0 && goal <= 20 ? goal : 14;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg rounded-3xl glass border-border/60 backdrop-blur-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 font-display", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "h-4 w-4" }) }),
          "Matriz de cenários — ",
          subjectName || "disciplina"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3.5 w-3.5 text-accent" }),
          "Simulações para uma meta de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: meta }),
          " ",
          "valores na disciplina."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 overflow-hidden rounded-2xl border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-xs font-semibold text-muted-foreground", children: "Se tirares no 1.º Teste" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-xs font-semibold text-accent", children: "Precisas no 2.º Teste" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-xs font-semibold text-primary", children: "Média Final" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: FIRST_TESTS.map((t1) => {
          const needed = meta * 2 - t1;
          const impossible = needed > 20;
          const achieved = needed <= 0;
          const final = impossible ? (t1 + 20) / 2 : meta;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold tabular-nums text-foreground", children: t1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold tabular-nums", children: impossible ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "Impossível" }) : achieved ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Qualquer nota" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: needed.toFixed(1) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold tabular-nums", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: toneFor(final), children: final.toFixed(1) }) })
          ] }, t1);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Cálculo: nota necessária = (meta × 2) − nota do 1.º teste. Se for superior a 20, a meta é inalcançável apenas com estes dois testes." })
    ] })
  ] });
}
const years = ["10", "11", "12"];
let counter = 0;
const newId = () => `id${++counter}`;
const makeTests = () => [
  { id: newId(), label: "1.º Teste", grade: "" },
  { id: newId(), label: "2.º Teste", grade: "" }
];
const makeSubject = (name) => ({
  id: newId(),
  name,
  goal: "",
  tests: makeTests()
});
const initialYears = {
  "10": [makeSubject("Português"), makeSubject("Matemática A"), makeSubject("Inglês")],
  "11": [makeSubject("Português"), makeSubject("Matemática A"), makeSubject("Biologia e Geologia")],
  "12": [makeSubject("Português"), makeSubject("Matemática A")]
};
const examCatalog = [
  "Matemática A",
  "Português",
  "Biologia e Geologia",
  "Física e Química A",
  "História A",
  "Geografia A",
  "Economia A",
  "Matemática B",
  "Desenho A"
];
const num = (s) => parseFloat(s.replace(",", "."));
function subjectAverage(s) {
  const filled = s.tests.map((t) => num(t.grade)).filter((g) => !isNaN(g) && g >= 0 && g <= 20);
  if (filled.length === 0) return null;
  return filled.reduce((a, b) => a + b, 0) / filled.length;
}
function SimuladorMedias({ onMediaChange, onExamChange }) {
  const [yearsData, setYearsData] = reactExports.useState(initialYears);
  const [activeYear, setActiveYear] = reactExports.useState("10");
  const [openSubject, setOpenSubject] = reactExports.useState(null);
  const [quickGrades, setQuickGrades] = reactExports.useState({
    "10": "",
    "11": "",
    "12": ""
  });
  const [flipped, setFlipped] = reactExports.useState(false);
  const [exams, setExams] = reactExports.useState(
    examCatalog.map((name) => ({ id: newId(), name, selected: false, grade: "" }))
  );
  const quickMedia = reactExports.useMemo(() => {
    const vals = years.map((y) => num(quickGrades[y])).filter((g) => !isNaN(g) && g >= 0 && g <= 20);
    if (vals.length === 0) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [quickGrades]);
  const advancedMedia = reactExports.useMemo(() => {
    const all = years.flatMap((y) => yearsData[y]);
    const avgs = all.map(subjectAverage).filter((v) => v !== null);
    if (avgs.length === 0) return 0;
    return avgs.reduce((a, b) => a + b, 0) / avgs.length;
  }, [yearsData]);
  const media = flipped ? advancedMedia : quickMedia;
  const selectedExams = exams.filter((e) => e.selected);
  const examAverage = reactExports.useMemo(() => {
    const vals = selectedExams.map((e) => parseFloat(e.grade.replace(",", "."))).filter((g) => !isNaN(g) && g >= 0 && g <= 200);
    if (vals.length === 0) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [selectedExams]);
  reactExports.useEffect(() => {
    onMediaChange(media);
  }, [media, onMediaChange]);
  reactExports.useEffect(() => {
    onExamChange?.(examAverage);
  }, [examAverage, onExamChange]);
  const percent = Math.min(100, media / 20 * 100);
  const updateSubject = (year, id, patch) => setYearsData((d) => ({
    ...d,
    [year]: d[year].map((s) => s.id === id ? { ...s, ...patch } : s)
  }));
  const updateTest = (year, sid, tid, grade) => setYearsData((d) => ({
    ...d,
    [year]: d[year].map(
      (s) => s.id === sid ? { ...s, tests: s.tests.map((t) => t.id === tid ? { ...t, grade } : t) } : s
    )
  }));
  const addTest = (year, sid) => setYearsData((d) => ({
    ...d,
    [year]: d[year].map(
      (s) => s.id === sid ? { ...s, tests: [...s.tests, { id: newId(), label: `${s.tests.length + 1}.º Teste`, grade: "" }] } : s
    )
  }));
  const removeSubject = (year, id) => setYearsData((d) => ({ ...d, [year]: d[year].filter((s) => s.id !== id) }));
  const addSubject = (year) => setYearsData((d) => ({ ...d, [year]: [...d[year], makeSubject("")] }));
  const toggleExam = (id) => setExams((list) => list.map((e) => e.id === id ? { ...e, selected: !e.selected } : e));
  const updateExamGrade = (id, grade) => setExams((list) => list.map((e) => e.id === id ? { ...e, grade } : e));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-5 sm:p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Simulador de Médias" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Gere exames nacionais e o progresso de cada ano por testes" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/60 bg-background/30 p-4 sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Exames Nacionais" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Seleciona os exames que precisas (escala 0–200)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: exams.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => toggleExam(e.id),
            className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${e.selected ? "border-accent bg-accent/15 text-accent shadow-glow-pink" : "border-input bg-background/40 text-muted-foreground hover:text-foreground"}`,
            children: e.name
          },
          e.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-2", children: selectedExams.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-2xl border border-dashed border-border py-6 text-center text-xs text-muted-foreground", children: "Escolhe um ou mais exames acima para inserires as notas." }) : selectedExams.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-3 py-2.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: e.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  inputMode: "decimal",
                  value: e.grade,
                  onChange: (ev) => updateExamGrade(e.id, ev.target.value),
                  placeholder: "0–200",
                  className: "w-20 rounded-xl border border-input bg-background/60 px-2 py-1.5 text-center text-sm font-bold text-accent outline-none placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40"
                }
              )
            ]
          },
          e.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flip-perspective", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flip-inner ${flipped ? "is-flipped" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flip-face rounded-3xl border border-border/60 bg-background/30 p-4 sm:p-5 ${flipped ? "absolute inset-0" : "relative"}`,
            "aria-hidden": flipped,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Média Direta" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFlipped(true),
                    className: "flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-glow-sky transition-transform hover:scale-105",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
                      "Acompanhar por Testes"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Introduz a média final de cada ano (escala 0–20)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
                      y,
                      ".º Ano"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        inputMode: "decimal",
                        value: quickGrades[y],
                        onChange: (e) => setQuickGrades((g) => ({ ...g, [y]: e.target.value })),
                        placeholder: "0–20",
                        className: "w-20 rounded-xl border border-input bg-background/60 px-2 py-2 text-center text-base font-bold text-primary outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
                      }
                    )
                  ]
                },
                y
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flip-face flip-face-back rounded-3xl border border-border/60 bg-background/30 p-4 sm:p-5 ${flipped ? "relative" : "absolute inset-0"}`,
            "aria-hidden": !flipped,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setFlipped(false),
                    className: "flex items-center gap-1.5 rounded-full border border-input bg-background/40 px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                      "Média Direta"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Anos & Progresso" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveYear(y),
                  className: `rounded-2xl border px-3 py-2 text-sm font-semibold transition-all ${activeYear === y ? "border-primary bg-primary/15 text-primary shadow-glow-sky" : "border-input bg-background/40 text-muted-foreground hover:text-foreground"}`,
                  children: [
                    y,
                    ".º Ano"
                  ]
                },
                y
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2.5", children: yearsData[activeYear].map((s) => {
                const avg = subjectAverage(s);
                const open = openSubject === s.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SubjectCard,
                  {
                    subject: s,
                    average: avg,
                    open,
                    onToggleOpen: () => setOpenSubject(open ? null : s.id),
                    onName: (name) => updateSubject(activeYear, s.id, { name }),
                    onGoal: (goal) => updateSubject(activeYear, s.id, { goal }),
                    onTest: (tid, grade) => updateTest(activeYear, s.id, tid, grade),
                    onAddTest: () => addTest(activeYear, s.id),
                    onRemove: () => removeSubject(activeYear, s.id)
                  },
                  s.id
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => addSubject(activeYear),
                  className: "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                    "Adicionar disciplina ao ",
                    activeYear,
                    ".º ano"
                  ]
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Média interna global" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-gradient", children: media.toFixed(2) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full bg-gradient-brand transition-[width] duration-700 ease-out",
          style: { width: `${percent}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" }),
        flipped ? "Média das disciplinas com notas" : "Média direta dos 3 anos",
        " · em escala 0–200:",
        " ",
        (media * 10).toFixed(0),
        " pontos."
      ] })
    ] })
  ] });
}
function SubjectCard({
  subject,
  average,
  open,
  onToggleOpen,
  onName,
  onGoal,
  onTest,
  onAddTest,
  onRemove
}) {
  const goal = num(subject.goal);
  const hasGoal = !isNaN(goal) && goal >= 0 && goal <= 20;
  const filled = subject.tests.filter((t) => {
    const g = num(t.grade);
    return !isNaN(g) && g >= 0 && g <= 20;
  });
  const remaining = subject.tests.length - filled.length;
  const sumFilled = filled.reduce((a, t) => a + num(t.grade), 0);
  let prediction = null;
  if (hasGoal && remaining > 0 && filled.length > 0) {
    const needed = (goal * subject.tests.length - sumFilled) / remaining;
    prediction = {
      needed,
      impossible: needed > 20,
      achieved: needed <= 0
    };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: subject.name,
          onChange: (e) => onName(e.target.value),
          placeholder: "Nome da disciplina",
          className: "min-w-0 flex-1 rounded-xl border border-input bg-background/40 px-3 py-2 text-sm font-medium outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `w-12 shrink-0 rounded-lg px-1 py-1.5 text-center text-sm font-bold tabular-nums ${average === null ? "text-muted-foreground/50" : "text-primary"}`,
          children: average === null ? "–" : average.toFixed(1)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onToggleOpen,
          "aria-label": "Gerir testes",
          className: "flex shrink-0 items-center justify-center rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}` })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onRemove,
          "aria-label": "Remover disciplina",
          className: "flex shrink-0 items-center justify-center rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-t border-border/60 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3.5 w-3.5 text-accent" }),
          "Nota Meta"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            inputMode: "decimal",
            value: subject.goal,
            onChange: (e) => onGoal(e.target.value),
            placeholder: "ex.: 15",
            className: "w-16 rounded-lg border border-input bg-background/40 px-2 py-1.5 text-center text-sm font-bold text-accent outline-none placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/ 20" }),
        filled.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          MatrizCenarios,
          {
            subjectName: subject.name,
            goal: hasGoal ? goal : void 0,
            trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Ver matriz de cenários",
                className: "ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary/15",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: subject.tests.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between gap-2 rounded-xl border border-border/60 bg-background/30 px-3 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: t.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                inputMode: "decimal",
                value: t.grade,
                onChange: (e) => onTest(t.id, e.target.value),
                placeholder: "0–20",
                className: "w-16 rounded-lg border border-input bg-background/40 px-2 py-1.5 text-center text-sm font-semibold outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
              }
            )
          ]
        },
        t.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onAddTest,
          className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            "Adicionar teste"
          ]
        }
      ),
      prediction && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `rounded-xl border px-3 py-2.5 text-xs font-medium ${prediction.impossible ? "border-destructive/40 bg-destructive/10 text-destructive" : prediction.achieved ? "border-primary/40 bg-primary/10 text-primary" : "border-accent/40 bg-accent/10 text-accent"}`,
          children: prediction.achieved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "🎉 Meta já garantida! Mesmo com 0 no(s) teste(s) restante(s) atinges os ",
            goal,
            "."
          ] }) : prediction.impossible ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "⚠️ Meta inalcançável: precisarias de ",
            prediction.needed.toFixed(1),
            " (máx. 20). Tenta ajustar a tua meta."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "🎯 Precisas de tirar no mínimo",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold", children: prediction.needed.toFixed(1) }),
            " ",
            "valores ",
            remaining > 1 ? "em cada teste restante" : "no 2.º Teste",
            " para atingires a tua meta!"
          ] })
        }
      )
    ] })
  ] });
}
const weightOptions = [
  { id: "60-40", label: "60 / 40", internal: 0.6, exam: 0.4 },
  { id: "50-50", label: "50 / 50", internal: 0.5, exam: 0.5 },
  { id: "65-35", label: "65 / 35", internal: 0.65, exam: 0.35 }
];
function CalculadoraCandidatura({ internalMedia, examGrade }) {
  const [weightId, setWeightId] = reactExports.useState("60-40");
  const [exam, setExam] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (examGrade !== void 0 && examGrade > 0) {
      setExam(examGrade.toFixed(0));
    } else if (examGrade === 0) {
      setExam("");
    }
  }, [examGrade]);
  const weight = weightOptions.find((w) => w.id === weightId);
  const internal200 = internalMedia * 10;
  const examNum = parseFloat(exam.replace(",", ".")) || 0;
  const finalGrade = reactExports.useMemo(() => {
    const g = internal200 * weight.internal + examNum * weight.exam;
    return Math.max(0, Math.min(200, g));
  }, [internal200, examNum, weight]);
  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("nota", finalGrade.toFixed(1));
    url.searchParams.set("interna", internal200.toFixed(0));
    url.searchParams.set("exame", examNum.toFixed(0));
    url.searchParams.set("peso", weightId);
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Calculadora de Candidatura" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nota final de candidatura (0–200)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Peso (Secundário / Exames)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: weightOptions.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setWeightId(w.id),
          className: `rounded-2xl border px-3 py-3 text-sm font-semibold transition-all ${weightId === w.id ? "border-accent bg-accent/15 text-accent shadow-glow-pink" : "border-input bg-background/40 text-muted-foreground hover:text-foreground"}`,
          children: w.label
        },
        w.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: "Média interna (0–200)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-2xl border border-input bg-background/20 px-4 py-3 text-lg font-semibold text-primary", children: internal200.toFixed(0) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-2 flex items-center justify-between text-sm font-medium text-muted-foreground", children: [
          "Nota dos exames (0–200)",
          examGrade !== void 0 && examGrade > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-accent", children: "↑ do simulador" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            inputMode: "decimal",
            value: exam,
            onChange: (e) => setExam(e.target.value),
            placeholder: "0",
            className: "w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-lg font-semibold outline-none transition-shadow placeholder:text-muted-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/40"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between rounded-2xl bg-gradient-brand p-6 text-primary-foreground shadow-glow-sky", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-7 w-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-semibold", children: "Nota de Candidatura" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-extrabold", children: finalGrade.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleShare,
            disabled: finalGrade === 0,
            title: "Copiar link para partilhar",
            className: `flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition-all ${copied ? "bg-white/20 text-white" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"}`,
            children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
              "Copiado!"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }),
              "Partilhar"
            ] })
          }
        )
      ] })
    ] }),
    internalMedia === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Preenche o simulador acima para usar a tua média interna automaticamente." })
  ] });
}
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "var(--color-popover)",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: "10px 16px",
        color: "var(--color-foreground)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: 0, fontSize: 11, color: "var(--color-muted-foreground)" }, children: [
          "Último colocado ",
          label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "4px 0 0", fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }, children: [
          val.toFixed(1),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, fontWeight: 400, marginLeft: 4, color: "var(--color-muted-foreground)" }, children: "pts" })
        ] })
      ]
    }
  );
}
function CustomDot(props) {
  const { cx, cy, value, index, data } = props;
  const dataLength = data?.length ?? 0;
  const isFirst = index === 0;
  const isLast = index === dataLength - 1;
  const showLabel = isFirst || isLast;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 8, fill: "var(--color-primary)", opacity: 0.15 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx, cy, r: 5, fill: "var(--color-primary)", stroke: "var(--color-background)", strokeWidth: 2 }),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: cx,
        y: cy - 14,
        textAnchor: "middle",
        fontSize: 11,
        fontWeight: 700,
        fill: "var(--color-primary)",
        children: typeof value === "number" ? value.toFixed(1) : ""
      }
    )
  ] }, `dot-${index}`);
}
function TendenciaMedias({ curso }) {
  if (!curso) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Tendência das médias" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Último colocado — 3 anos" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex h-64 flex-col items-center justify-center gap-2 text-center text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointerClick, { className: "h-8 w-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Seleciona um curso no explorador para veres a evolução das notas." })
      ] })
    ] });
  }
  const isCtesp = curso.media_2022 == null && curso.media_2023 == null && curso.media_2024 == null;
  if (isCtesp) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: curso.nome_curso }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: curso.nome_instituicao })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex h-48 flex-col items-center justify-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📝" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Acesso por concurso local" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-sm text-sm text-muted-foreground", children: "Os CTeSPs não fazem parte do Concurso Nacional de Acesso. A candidatura é feita diretamente em cada instituição através de currículo, provas ou entrevista." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.dges.gov.pt/pt/pagina/ctesp",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-1 rounded-xl bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/20",
            children: "Saber mais na DGES →"
          }
        )
      ] })
    ] });
  }
  const history = [
    { year: "2022", grade: curso.media_2022 },
    { year: "2023", grade: curso.media_2023 },
    { year: "2024", grade: curso.media_2024 }
  ].filter((h) => h.grade != null);
  const first = history[0]?.grade ?? 0;
  const last = history[history.length - 1]?.grade ?? 0;
  const delta = last - first;
  const grades = history.map((h) => h.grade);
  const minGrade = Math.min(...grades);
  const maxGrade = Math.max(...grades);
  const spread = maxGrade - minGrade;
  const padding = Math.max(spread * 0.8, 3);
  const yMin = Math.max(0, Math.floor(minGrade - padding));
  const yMax = Math.min(200, Math.ceil(maxGrade + padding));
  const isUp = delta > 0.5;
  const isDown = delta < -0.5;
  const deltaColor = isUp ? "bg-destructive/15 text-destructive" : isDown ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground";
  const DeltaIcon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
  const avg = grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
  const maxYear = history.find((h) => h.grade === maxGrade);
  const minYear = history.find((h) => h.grade === minGrade);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: curso.nome_curso }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: curso.nome_instituicao })
        ] })
      ] }),
      history.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold ${deltaColor}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DeltaIcon, { className: "h-3.5 w-3.5" }),
          delta >= 0 ? "+" : "",
          delta.toFixed(1),
          " pts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "desde ",
          history[0].year
        ] })
      ] })
    ] }),
    history.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/40 bg-background/20 px-3 py-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Máximo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold text-primary", children: maxGrade.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground/60", children: maxYear?.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/40 bg-background/20 px-3 py-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Média" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: avg.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground/60", children: "3 anos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/40 bg-background/20 px-3 py-2.5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Mínimo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold text-accent", children: minGrade.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground/60", children: minYear?.year })
      ] })
    ] }),
    history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex h-48 items-center justify-center text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sem dados históricos para este curso." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: history, margin: { left: -16, right: 8, top: 24, bottom: 4 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gradMedia", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-primary)", stopOpacity: 0.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-primary)", stopOpacity: 0.02 })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--color-border)", vertical: false, opacity: 0.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        XAxis,
        {
          dataKey: "year",
          stroke: "var(--color-muted-foreground)",
          tickLine: false,
          axisLine: false,
          fontSize: 12
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        YAxis,
        {
          domain: [yMin, yMax],
          stroke: "var(--color-muted-foreground)",
          tickLine: false,
          axisLine: false,
          fontSize: 11,
          tickCount: 4
        }
      ),
      history.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReferenceLine,
        {
          y: avg,
          stroke: "var(--color-muted-foreground)",
          strokeDasharray: "4 4",
          strokeOpacity: 0.4,
          label: {
            value: `média ${avg.toFixed(1)}`,
            position: "insideTopRight",
            fontSize: 10,
            fill: "var(--color-muted-foreground)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}), cursor: { stroke: "var(--color-accent)", strokeWidth: 1 } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Area,
        {
          type: "monotone",
          dataKey: "grade",
          stroke: "var(--color-primary)",
          strokeWidth: 2.5,
          fill: "url(#gradMedia)",
          dot: (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomDot, { ...props }, `dot-${props.index}`),
          activeDot: { r: 7, fill: "var(--color-accent)", stroke: "var(--color-background)", strokeWidth: 2 }
        }
      )
    ] }) }) })
  ] });
}
const PAGE_SIZE = 15;
const MAX_COMPARE = 3;
const DISTRITOS = [
  "Aveiro",
  "Beja",
  "Braga",
  "Bragança",
  "Castelo Branco",
  "Coimbra",
  "Évora",
  "Faro",
  "Guarda",
  "Leiria",
  "Lisboa",
  "Portalegre",
  "Porto",
  "Santarém",
  "Setúbal",
  "Viana do Castelo",
  "Vila Real",
  "Viseu",
  "Açores",
  "Madeira"
];
function MiniBars({ curso }) {
  const values = [curso.media_2022, curso.media_2023, curso.media_2024].filter(
    (v) => v != null
  );
  if (values.length === 0) return null;
  const max = Math.max(...values);
  const min = Math.min(...values) - 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1", "aria-hidden": true, children: values.map((grade, i) => {
    const pct = (grade - min) / (max - min || 1) * 100;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 rounded-full bg-gradient-brand", style: { height: `${Math.max(20, pct)}%` } }, i);
  }) });
}
function TrendAlert({ curso }) {
  const v2022 = curso.media_2022;
  const v2024 = curso.media_2024;
  if (v2022 == null || v2024 == null) return null;
  const delta = v2024 - v2022;
  if (Math.abs(delta) < 2) return null;
  const isUp = delta > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${isUp ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`, children: [
    isUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3" }),
    isUp ? `+${delta.toFixed(1)} pts em 3 anos` : `${delta.toFixed(1)} pts em 3 anos`
  ] });
}
function ComparadorBar({
  cursos,
  onRemove,
  onClear,
  onOpen
}) {
  if (cursos.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl rounded-2xl glass border border-border/60 shadow-2xl backdrop-blur-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Comparador" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-sm font-bold", children: [
        cursos.length,
        "/",
        MAX_COMPARE
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border/60 shrink-0 hidden sm:block" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-wrap items-center gap-2", children: Array.from({ length: MAX_COMPARE }).map((_, i) => {
      const c = cursos[i];
      return c ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[160px] truncate text-xs font-semibold", children: c.nome_curso }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onRemove(c.id), className: "shrink-0 rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
      ] }, c.id) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex h-8 w-28 items-center justify-center rounded-xl border border-dashed border-border/40 text-xs text-muted-foreground/40", children: "+ curso" }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClear, className: "rounded-xl px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: "Limpar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onOpen,
          disabled: cursos.length < 2,
          className: "flex items-center gap-1.5 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow-sky transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "h-4 w-4" }),
            "Comparar"
          ]
        }
      )
    ] })
  ] }) }) });
}
function ComparadorModal({
  cursos,
  onRemove,
  onClose,
  myGrade
}) {
  const rows = [
    { label: "Instituição", render: (c) => c.nome_instituicao ?? "—" },
    { label: "Tipo", render: (c) => c.grau ?? c.tipo_ensino ?? "—" },
    { label: "Natureza", render: (c) => c.natureza ?? "—" },
    { label: "Vagas", render: (c) => c.vagas_estimadas != null ? `${c.vagas_estimadas}` : "—" },
    { label: "2022", render: (c) => c.media_2022 != null ? c.media_2022.toFixed(1) : "—" },
    { label: "2023", render: (c) => c.media_2023 != null ? c.media_2023.toFixed(1) : "—" },
    { label: "2024", render: (c) => c.media_2024 != null ? c.media_2024.toFixed(1) : "—" }
  ];
  const numericRows = ["2022", "2023", "2024", "Vagas"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl mx-4 mb-4 rounded-3xl glass border border-border/60 shadow-2xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: "Comparador" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary", children: [
          cursos.length,
          "/",
          MAX_COMPARE
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "rounded-xl p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-28 px-5 py-4 text-left text-xs font-semibold text-muted-foreground" }),
        cursos.map((c) => {
          const lastGrade = c.media_2024 ?? c.media_2023 ?? c.media_2022 ?? 0;
          const eligible = myGrade > 0 && lastGrade > 0 && myGrade >= lastGrade;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-left align-top", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold leading-snug", children: c.nome_curso }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: c.nome_instituicao }),
              eligible && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1.5 inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3 w-3" }),
                "Entras!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onRemove(c.id), className: "shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }) }, c.id);
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row) => {
        const isNumeric = numericRows.includes(row.label);
        const values = cursos.map((c) => {
          const raw = row.render(c);
          return raw !== "—" ? parseFloat(raw) : null;
        });
        const validVals = values.filter((v) => v !== null);
        const minVal = validVals.length > 0 ? Math.min(...validVals) : null;
        const maxVal = validVals.length > 0 ? Math.max(...validVals) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-2.5 text-xs font-semibold text-muted-foreground", children: row.label }),
          cursos.map((c) => {
            const val = row.render(c);
            const numVal = val !== "—" ? parseFloat(val) : null;
            const isBest = isNumeric && numVal !== null && validVals.length > 1 && (row.label === "Vagas" ? numVal === maxVal : numVal === minVal);
            const isWorst = isNumeric && numVal !== null && validVals.length > 1 && (row.label === "Vagas" ? numVal === minVal : numVal === maxVal);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-5 py-2.5 font-medium tabular-nums ${isBest ? "font-bold text-primary" : isWorst ? "text-destructive/70" : "text-foreground"}`, children: val }, c.id);
          })
        ] }, row.label);
      }) })
    ] }) }),
    cursos.length < MAX_COMPARE && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-5 py-3 text-xs text-muted-foreground/60", children: [
      "Podes adicionar mais ",
      MAX_COMPARE - cursos.length,
      " curso",
      MAX_COMPARE - cursos.length !== 1 ? "s" : "",
      ' — clica em "+" nos cards acima.'
    ] })
  ] }) });
}
function ExploradorCursos({
  onSelect
}) {
  const [query, setQuery] = reactExports.useState("");
  const [natureza, setNatureza] = reactExports.useState("all");
  const [tipoEnsino, setTipoEnsino] = reactExports.useState("all");
  const [distrito, setDistrito] = reactExports.useState("all");
  const [myGrade, setMyGrade] = reactExports.useState("");
  const [debouncedQuery, setDebouncedQuery] = reactExports.useState("");
  const [visibleCount, setVisibleCount] = reactExports.useState(PAGE_SIZE);
  const [comparar, setComparar] = reactExports.useState([]);
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [modo, setModo] = reactExports.useState("licenciaturas");
  const { user } = useAuth();
  const { isFavorito, toggleFavorito } = useFavoritos();
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(timer);
  }, [query]);
  reactExports.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [debouncedQuery, natureza, tipoEnsino, distrito, modo]);
  reactExports.useEffect(() => {
    setComparar([]);
    setDistrito("all");
  }, [modo]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      setQuery(search);
      window.history.replaceState({}, "", window.location.pathname + "#cursos");
    }
  }, []);
  const grade = parseFloat(myGrade.replace(",", ".")) || 0;
  const q = debouncedQuery;
  const isSearching = q.length >= 2 || natureza !== "all" || tipoEnsino !== "all" || distrito !== "all";
  const isCtesp = modo === "ctesps";
  const { data: cursos = [], isLoading, error } = useQuery({
    queryKey: ["cursos", q, natureza, tipoEnsino, distrito, modo],
    staleTime: 1e3 * 60 * 5,
    // 5 minutos de cache
    queryFn: async () => {
      const columns = "id, nome_instituicao, tipo_ensino, natureza, nome_curso, grau, vagas_estimadas, media_2024, media_2023, media_2022";
      const columnsWithDistrito = `${columns}, distrito`;
      if (isCtesp) {
        let data, error2;
        if (q.length >= 2) {
          ({ data, error: error2 } = await supabase.rpc("search_ctesps", { search_term: q }).select(columns).order("nome_curso", { ascending: true }).limit(200));
        } else {
          ({ data, error: error2 } = await supabase.from("unicalc_ctesps").select(columns).order("nome_curso", { ascending: true }).limit(200));
        }
        if (error2) throw error2;
        return data ?? [];
      } else {
        let data, error2;
        if (q.length >= 2) {
          let req = supabase.rpc("search_cursos", { search_term: q }).select(columnsWithDistrito);
          if (natureza !== "all") req = req.eq("natureza", natureza);
          if (tipoEnsino !== "all") req = req.eq("tipo_ensino", tipoEnsino);
          if (distrito !== "all") req = req.eq("distrito", distrito);
          ({ data, error: error2 } = await req.order("nome_curso", { ascending: true }).limit(300));
        } else {
          let req = supabase.from("unicalc_cursos").select(columnsWithDistrito).not("media_2024", "is", null);
          if (natureza !== "all") req = req.eq("natureza", natureza);
          if (tipoEnsino !== "all") req = req.eq("tipo_ensino", tipoEnsino);
          if (distrito !== "all") req = req.eq("distrito", distrito);
          ({ data, error: error2 } = await req.limit(100));
        }
        if (error2) throw error2;
        return data ?? [];
      }
    }
  });
  const visibleCursos = reactExports.useMemo(() => cursos.slice(0, visibleCount), [cursos, visibleCount]);
  const hasMore = visibleCount < cursos.length;
  const toggleComparar = (curso, e) => {
    e.stopPropagation();
    setComparar((prev) => {
      const exists = prev.find((c) => c.id === curso.id);
      if (exists) return prev.filter((c) => c.id !== curso.id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, curso];
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: comparar.length > 0 ? "pb-24" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-2xl glass p-1 gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setModo("licenciaturas"),
          className: `flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${modo === "licenciaturas" ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "text-muted-foreground hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }),
            "Licenciaturas & Mestrados"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setModo("ctesps"),
          className: `flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${modo === "ctesps" ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "text-muted-foreground hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
            "CTeSPs"
          ]
        }
      )
    ] }) }),
    isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "ℹ️ Acesso local" }),
      " — Os CTeSPs não fazem parte do Concurso Nacional de Acesso. A candidatura é feita diretamente em cada instituição (currículo, provas ou entrevista)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: isCtesp ? "Procura por CTeSP ou instituição..." : "Procura por curso ou instituição...",
            className: "w-full rounded-2xl border border-input bg-background/40 py-3.5 pl-12 pr-4 text-base outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/40"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
        !isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: natureza === "all", onClick: () => setNatureza("all"), children: "Todas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: natureza === "Público", onClick: () => setNatureza("Público"), children: "Público" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: natureza === "Privado", onClick: () => setNatureza("Privado"), children: "Privado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 self-center text-muted-foreground/40", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: tipoEnsino === "all", onClick: () => setTipoEnsino("all"), children: "Todos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: tipoEnsino === "Universitário", onClick: () => setTipoEnsino("Universitário"), children: "Universitário" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilterChip, { active: tipoEnsino === "Politécnico", onClick: () => setTipoEnsino("Politécnico"), children: "Politécnico" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 self-center text-muted-foreground/40", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: distrito,
                onChange: (e) => setDistrito(e.target.value),
                className: `rounded-full py-1.5 pl-7 pr-3 text-sm font-medium transition-all outline-none cursor-pointer ${distrito !== "all" ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "glass text-muted-foreground hover:text-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Distrito" }),
                  DISTRITOS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d, children: d }, d))
                ]
              }
            )
          ] })
        ] }),
        isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        !isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 rounded-2xl glass px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "A minha nota" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              inputMode: "decimal",
              value: myGrade,
              onChange: (e) => setMyGrade(e.target.value),
              placeholder: "0–200",
              className: "w-20 rounded-lg border border-input bg-background/40 px-2 py-1 text-sm font-semibold outline-none focus:border-accent"
            }
          )
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive", children: "Não foi possível carregar os cursos. Tenta novamente." }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-2 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "A carregar ",
        isCtesp ? "CTeSPs" : "cursos",
        "…"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !error && cursos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground/60", children: isSearching ? `${cursos.length} ${isCtesp ? "CTeSP" : "curso"}${cursos.length !== 1 ? "s" : ""} encontrado${cursos.length !== 1 ? "s" : ""}${distrito !== "all" ? ` em ${distrito}` : ""}` : `A mostrar ${isCtesp ? "CTeSPs" : "cursos"} em destaque` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: visibleCursos.map((c) => {
        const lastGrade = c.media_2024 ?? c.media_2023 ?? c.media_2022 ?? 0;
        const eligible = !isCtesp && grade > 0 && lastGrade > 0 && grade >= lastGrade;
        const isInComparar = comparar.some((x) => x.id === c.id);
        const compareFull = comparar.length >= MAX_COMPARE && !isInComparar;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onSelect?.(c),
            className: `group relative flex flex-col rounded-3xl glass p-5 text-left transition-all hover:-translate-y-1 ${eligible ? "ring-2 ring-accent/60 shadow-glow-pink" : ""} ${isInComparar ? "ring-2 ring-primary/60 shadow-glow-sky" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary", children: c.grau ?? c.tipo_ensino ?? "Curso" }),
                  isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent", children: "📝 Acesso Local" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  !isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsx(MiniBars, { curso: c }),
                  user && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        toggleFavorito({ id: c.id, nome: c.nome_curso ?? "", instituicao: c.nome_instituicao ?? "" });
                      },
                      title: isFavorito(c.id) ? "Remover dos favoritos" : "Guardar nos favoritos",
                      className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${isFavorito(c.id) ? "border-accent bg-accent/20 text-accent" : "border-border/60 text-muted-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-3.5 w-3.5 ${isFavorito(c.id) ? "fill-current" : ""}` })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => toggleComparar(c, e),
                      disabled: compareFull,
                      title: isInComparar ? "Remover do comparador" : "Adicionar ao comparador",
                      className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${isInComparar ? "border-primary bg-primary/20 text-primary" : compareFull ? "border-border/30 text-muted-foreground/30 cursor-not-allowed" : "border-border/60 text-muted-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"}`,
                      children: isInComparar ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-bold leading-snug", children: c.nome_curso }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.nome_instituicao }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
                c.vagas_estimadas != null && c.vagas_estimadas > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
                  c.vagas_estimadas,
                  " vagas"
                ] }),
                !isCtesp && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendAlert, { curso: c })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-end justify-between border-t border-border pt-4", children: isCtesp ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Admissão" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-semibold text-muted-foreground", children: "Concurso local" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Último colocado (2024)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-gradient", children: lastGrade > 0 ? lastGrade.toFixed(1) : "—" })
                ] }),
                eligible && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                  "Entras!"
                ] })
              ] }) })
            ]
          },
          c.id
        );
      }) }),
      hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setVisibleCount((prev) => prev + PAGE_SIZE),
          className: "flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:shadow-glow-sky",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            "Ver mais ",
            Math.min(PAGE_SIZE, cursos.length - visibleCount),
            " ",
            isCtesp ? "CTeSPs" : "cursos"
          ]
        }
      ) })
    ] }),
    !isLoading && !error && cursos.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-2 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-8 w-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Nenhum ",
        isCtesp ? "CTeSP" : "curso",
        " encontrado. Tenta outra pesquisa."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ComparadorBar,
      {
        cursos: comparar,
        onRemove: (id) => setComparar((prev) => prev.filter((c) => c.id !== id)),
        onClear: () => setComparar([]),
        onOpen: () => setModalOpen(true)
      }
    ),
    modalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ComparadorModal,
      {
        cursos: comparar,
        onRemove: (id) => setComparar((prev) => prev.filter((c) => c.id !== id)),
        onClose: () => setModalOpen(false),
        myGrade: grade
      }
    )
  ] });
}
function FilterChip({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: `rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${active ? "bg-gradient-brand text-primary-foreground shadow-glow-sky" : "glass text-muted-foreground hover:text-foreground"}`,
      children
    }
  );
}
function SectionHeader({
  badge,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: badge }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-bold sm:text-4xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: subtitle })
  ] });
}
function Index() {
  const [media, setMedia] = reactExports.useState(0);
  const [examGrade, setExamGrade] = reactExports.useState(0);
  const [selectedCurso, setSelectedCurso] = reactExports.useState(null);
  const handleSelectCurso = (curso) => {
    setSelectedCurso(curso);
    document.getElementById("tendencia")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-6xl space-y-24 px-4 py-20 sm:px-6 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "simulador", className: "scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Passo 1", title: "Calcula a tua média", subtitle: "Simula a média interna e descobre a tua nota final de candidatura em segundos." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SimuladorMedias, { onMediaChange: setMedia, onExamChange: setExamGrade }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "candidatura", className: "mx-auto max-w-2xl scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalculadoraCandidatura, { internalMedia: media, examGrade }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "tendencia", className: "scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Dados", title: "Como evoluem as notas", subtitle: "Tendência do último colocado nos últimos 3 anos para planeares com confiança." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TendenciaMedias, { curso: selectedCurso }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cursos", className: "scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { badge: "Passo 2", title: "Explora os cursos", subtitle: "Pesquisa, filtra por área e descobre em que cursos entras com a tua nota." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExploradorCursos, { onSelect: handleSelectCurso }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 font-display text-lg font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }) }),
        "UniCalc ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "PT" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm text-muted-foreground", children: "Ferramenta de apoio à candidatura ao Ensino Superior. Dados ilustrativos — confirma sempre as notas oficiais na DGES." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/70", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " UniCalc PT. Feito para estudantes portugueses."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-light tracking-wide text-slate-400", children: [
        "Criado com ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "♥" }),
        " por MADS"
      ] }) })
    ] }) })
  ] });
}
export {
  Index as component
};
