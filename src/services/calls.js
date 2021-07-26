import api from './api'

export async function getPropertiesCall(query) {
  const { sizeMin, sizeMax, priceMin, priceMax, bedsMin, bathsMin, offset } = query
  var params = {
    city: 'Miami',
    state_code: 'FL',
    limit: 15,
    offset,
    sort: 'relevance',
  }

  if (sizeMin) {
    params['sqft_min'] = sizeMin
  }

  if (sizeMax) {
    params['sqft_max'] = sizeMax
  }

  if (priceMin) {
    params['price_min'] = priceMin
  }

  if (priceMax) {
    params['price_max'] = priceMax
  }

  if (bathsMin) {
    params['beds_min'] = bathsMin
  }

  if (bedsMin) {
    params['baths_min'] = bedsMin
  }

  try {
    const result = await api.get('properties/v2/list-for-rent', {
      params,
    })

    return result.data
  } catch (error) {
    return error
  }
}

export async function getPropertyDetails(property_id) {
  try {
    const result = await api.get(`properties/v2/detail?property_id=${property_id}`)

    return result.data
  } catch (error) {
    return error
  }
}
