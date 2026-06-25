import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export type Favorito = {
  id: string;
  curso_id: string;
  curso_nome: string;
  instituicao: string;
  created_at: string;
  user_id?: string;
};

export function useFavoritos() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: favoritos = [], isLoading } = useQuery({
    queryKey: ["favoritos", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_favoritos")
        .select("id, curso_id, curso_nome, instituicao, created_at, user_id")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Favorito[];
    },
  });

  const addFavorito = useMutation({
    mutationFn: async (curso: { id: string; nome: string; instituicao: string }) => {
      if (!user?.id) throw new Error("Usuário não autenticado");

      const { error } = await supabase.from("user_favoritos").insert({
        user_id: user.id,
        curso_id: curso.id,
        curso_nome: curso.nome,
        instituicao: curso.instituicao,
      });
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos", user?.id] }),
  });

  const removeFavorito = useMutation({
    mutationFn: async (cursoId: string) => {
      if (!user?.id) throw new Error("Usuário não autenticado");

      const { error } = await supabase
        .from("user_favoritos")
        .delete()
        .eq("curso_id", cursoId)
        .eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favoritos", user?.id] }),
  });

  const isFavorito = (cursoId: string) =>
    favoritos.some((f) => f.curso_id === cursoId);

  const toggleFavorito = (curso: { id: string; nome: string; instituicao: string }) => {
    if (!user) return;
    if (isFavorito(curso.id)) {
      removeFavorito.mutate(curso.id);
    } else {
      addFavorito.mutate(curso);
    }
  };

  return { favoritos, isLoading, isFavorito, toggleFavorito };
}