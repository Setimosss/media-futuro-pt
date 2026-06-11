export interface Curso {
  id: number;
  codigo_instituicao: string | null;
  nome_instituicao: string | null;
  tipo_ensino: string | null;
  natureza: string | null;
  codigo_curso: string | null;
  nome_curso: string | null;
  grau: string | null;
  vagas_estimadas: number | null;
  media_2024: number | null;
  media_2023: number | null;
  media_2022: number | null;
}
