import create from 'zustand'

export const usePropertiesStore = create(set => ({
  properties: [],
  setProperties: properties => set({ properties }),

  selectedProperty: null,
  setSelectedProperty: selectedProperty => set({ selectedProperty }),
}))
