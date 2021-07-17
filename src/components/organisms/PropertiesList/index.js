import React from 'react'
import { PropertyCard } from '../../molecules'
import { PropertiesListContainer } from './styles'

export const PropertiesList = ({ data, children }) => {
  return (
    <PropertiesListContainer
      data={data}
      renderItem={({ item }) => (
        <PropertyCard
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          price={item.community.price_max}
          imgSource={item.photos[0].href}
        />
      )}
      keyExtractor={(item) => item.property_id}
      ListHeaderComponent={children}
    />
  )
}
