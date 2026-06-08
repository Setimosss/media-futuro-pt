import { Grid3x3 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  subjectName: string;
  trigger: React.ReactNode;
};

// Cenários de notas possíveis para o 1.º e 2.º teste (escala 0–20)
const SCALE = [8, 10, 12, 14, 16, 18, 20];

function toneFor(value: number) {
  if (value >= 16) return "text-primary";
  if (value >= 12) return "text-foreground";
  if (value >= 10) return "text-accent";
  return "text-destructive";
}

export function MatrizCenarios({ subjectName, trigger }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl rounded-3xl glass border-border/60">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Grid3x3 className="h-4 w-4" />
            </span>
            Matriz de cenários — {subjectName || "disciplina"}
          </DialogTitle>
          <DialogDescription>
            Cruza a nota do 1.º teste (linhas) com a do 2.º teste (colunas) para veres a média
            final resultante em cada cenário.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 overflow-x-auto">
          <table className="w-full border-separate border-spacing-1 text-center text-sm">
            <thead>
              <tr>
                <th className="rounded-lg bg-secondary/60 px-2 py-2 text-xs font-semibold text-muted-foreground">
                  1.º ↓ / 2.º →
                </th>
                {SCALE.map((t2) => (
                  <th
                    key={t2}
                    className="rounded-lg bg-accent/15 px-2 py-2 text-xs font-bold text-accent"
                  >
                    {t2}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCALE.map((t1) => (
                <tr key={t1}>
                  <th className="rounded-lg bg-primary/15 px-2 py-2 text-xs font-bold text-primary">
                    {t1}
                  </th>
                  {SCALE.map((t2) => {
                    const media = (t1 + t2) / 2;
                    return (
                      <td
                        key={t2}
                        className="rounded-lg bg-background/40 px-2 py-2 font-semibold tabular-nums"
                      >
                        <span className={toneFor(media)}>{media.toFixed(1)}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-1 text-xs text-muted-foreground">
          Cálculo: média final = (1.º teste + 2.º teste) ÷ 2.
        </p>
      </DialogContent>
    </Dialog>
  );
}
