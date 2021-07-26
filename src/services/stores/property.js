import create from 'zustand'

export const usePropertiesStore = create(set => ({
  offset: 0,
  setOffset: offset => set({ offset }),

  query: null,
  setQuery: query => set({ query }),

  loadingProperties: true,
  setLoadingProperties: loadingProperties => set({ loadingProperties }),

  properties: [],
  setProperties: properties => set({ properties }),

  selectedProperty: null,
  setSelectedProperty: selectedProperty => set({ selectedProperty }),
}))
