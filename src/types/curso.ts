export interface Curso {
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
}
