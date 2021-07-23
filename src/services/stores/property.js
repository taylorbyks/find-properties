import create from 'zustand'

export const usePropertiesStore = create(set => ({
  propertiesList: [],
  setPropertiesList: propertiesList => set({ propertiesList }),

  selectedProperty: null,
  setSelectedProperty: selectedProperty => set({ selectedProperty }),
}))
