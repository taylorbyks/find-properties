import AsyncStorage from '@react-native-async-storage/async-storage'

export const FAVORITE_KEY = '@FindProperties:Favorites'

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log({ error: e })
  }
}

export async function getData(key) {
  try {
    const data = await AsyncStorage.getItem(key)
    return data != null ? JSON.parse(data) : null
  } catch (error) {
    console.log({ error: e })
  }
}

export async function savePropertyAsFavorite(propertyId) {
  const savedFavorites = await getData(FAVORITE_KEY)

  if (savedFavorites) {
    if (savedFavorites.find((property) => property == propertyId)) {
      return {
        error: 'Imóvel já é favorito',
      }
    }

    savedFavorites.push(propertyId)
    await saveData(FAVORITE_KEY, JSON.stringify(savedFavorites))
  } else {
    const savedFavorites = JSON.stringify([propertyId])
    await saveData(FAVORITE_KEY, savedFavorites)
  }
  return
}

export async function removePropertyAsFavorite(propertyId) {
  const savedFavorites = await getData(FAVORITE_KEY)

  if (savedFavorites) {
    const newSavedFavorites = savedFavorites.filter((property) => property !== propertyId)

    await saveData(FAVORITE_KEY, JSON.stringify(newSavedFavorites))
  } else {
    return {
      error: 'Imóvel não é favorito',
    }
  }
}

export async function getIfPropertyIsFavorite(propertyId) {
  const savedFavorites = await getData(FAVORITE_KEY)

  if (savedFavorites) {
    if (savedFavorites.find((property) => property == propertyId)) {
      return true
    }
  }
  return false
}
