import { getPropertiesCall } from '../calls'
import { usePropertiesStore } from '../stores'

export function usePropertiesHooks() {
  const { setProperties, setLoadingProperties, offset, setOffset, properties, query, setQuery } = usePropertiesStore()

  async function onGetProperties() {
    const result = await getPropertiesCall({...query, offset})
    if(offset > 0){
      setProperties(result.properties ? [...properties, ...result.properties] : properties)
    } else {
      setProperties(result.properties ? result.properties : properties)
    }
    setLoadingProperties(false)
    setOffset(offset + 15)
  }

  async function onFilterPropertiesList(recivedQuery) {
    setLoadingProperties(true)
    if(recivedQuery != query){
      setProperties([])
      setOffset(0)
    }
    setQuery(recivedQuery)
    const result = await getPropertiesCall({...query, offset})
    setProperties(result.properties ? result.properties : [])
    setLoadingProperties(false)
  }

  return {
    onGetProperties,
    onFilterPropertiesList
  }
}
