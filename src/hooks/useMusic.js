import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getSongs, getAlbumById, createSong } from '../MOCKS/music/service.js'

export function useSongs() {
  return useQuery({
    queryKey: ['songs'],
    queryFn: getSongs,
    suspense: true,
  })
}

export function useAlbum(id) {
  return useQuery({
    queryKey: ['album', id],
    queryFn: () => getAlbumById(id),
    suspense: true,
  })
}

export function useCreateSong() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createSong,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['songs'] }),
  })
}
