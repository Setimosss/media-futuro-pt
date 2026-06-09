CREATE TABLE public.unicalc_cursos (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome_curso text NOT NULL,
  nome_instituicao text NOT NULL,
  cidade text,
  area text,
  tipo_ensino text,
  natureza text,
  vagas integer,
  media_2024 numeric,
  media_2023 numeric,
  media_2022 numeric,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.unicalc_cursos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.unicalc_cursos TO authenticated;
GRANT ALL ON public.unicalc_cursos TO service_role;

ALTER TABLE public.unicalc_cursos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Course list is publicly readable"
  ON public.unicalc_cursos FOR SELECT
  USING (true);

INSERT INTO public.unicalc_cursos
  (nome_curso, nome_instituicao, cidade, area, tipo_ensino, natureza, vagas, media_2024, media_2023, media_2022)
VALUES
  ('Medicina', 'Universidade de Lisboa', 'Lisboa', 'Saúde', 'Universitário', 'Público', 343, 189.5, 188.9, 188.2),
  ('Medicina', 'Universidade do Porto', 'Porto', 'Saúde', 'Universitário', 'Público', 320, 190.1, 189.6, 189.0),
  ('Engenharia Informática e de Computadores', 'Instituto Superior Técnico', 'Lisboa', 'Engenharia', 'Universitário', 'Público', 280, 178.4, 176.2, 174.0),
  ('Engenharia Aeroespacial', 'Instituto Superior Técnico', 'Lisboa', 'Engenharia', 'Universitário', 'Público', 95, 182.7, 181.5, 180.3),
  ('Direito', 'Universidade de Lisboa', 'Lisboa', 'Direito', 'Universitário', 'Público', 410, 164.8, 163.4, 162.1),
  ('Gestão', 'Nova SBE', 'Lisboa', 'Economia', 'Universitário', 'Privado', 230, 171.2, 169.9, 168.5),
  ('Economia', 'Universidade do Porto', 'Porto', 'Economia', 'Universitário', 'Público', 290, 158.3, 156.8, 155.0),
  ('Psicologia', 'Universidade de Coimbra', 'Coimbra', 'Saúde', 'Universitário', 'Público', 180, 160.4, 158.9, 157.2),
  ('Arquitetura', 'Universidade do Porto', 'Porto', 'Artes', 'Universitário', 'Público', 110, 166.9, 165.5, 164.0),
  ('Biologia', 'Universidade de Coimbra', 'Coimbra', 'Ciências', 'Universitário', 'Público', 150, 148.6, 146.8, 145.1),
  ('Relações Internacionais', 'Universidade do Minho', 'Braga', 'Humanidades', 'Universitário', 'Público', 120, 152.0, 150.7, 149.4),
  ('Design', 'Universidade de Aveiro', 'Aveiro', 'Artes', 'Politécnico', 'Público', 90, 144.3, 142.7, 141.0),
  ('Enfermagem', 'Escola Superior de Enfermagem de Lisboa', 'Lisboa', 'Saúde', 'Politécnico', 'Público', 200, 156.7, 154.9, 153.2),
  ('Marketing', 'IPAM Porto', 'Porto', 'Economia', 'Politécnico', 'Privado', 80, 132.4, 130.8, 129.1),
  ('Engenharia Civil', 'Instituto Politécnico de Leiria', 'Leiria', 'Engenharia', 'Politécnico', 'Público', 70, 128.9, 127.0, 125.5);