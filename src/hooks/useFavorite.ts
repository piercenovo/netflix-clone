import axios from 'axios'
import { useCallback, useMemo } from 'react'
import { useCurrentUser } from './useCurrentUser'
import { useFavorites } from './useFavorites'

export function useFavorite ({ movieId }: { movieId: string}) {
  const { mutate: mutateFavorites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let response

    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId } })
    } else {
      response = await axios.post('/api/favorite', { movieId })
    }

    const updatedFavoriteIds = response?.data?.favoriteIds

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    })

    mutateFavorites()
  }, [currentUser, movieId, isFavorite, mutate, mutateFavorites])

  return { isFavorite, toggleFavorites }
}
