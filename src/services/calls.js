import api from './api'

export async function getPropertiesCall() {
  try {
    const result = await api.get('properties/v2/list-for-rent', {
      params: {
        city: 'Miami',
        state_code: 'FL',
        limit: 15,
        offset: 0,
        sort: 'relevance',
      },
    })

    return result.data
  } catch (error) {
    return error
  }
}
