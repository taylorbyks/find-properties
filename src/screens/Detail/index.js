import React, { useEffect, useState } from 'react'
import {
  IconButton,
  DetailTitle,
  DetailSubTitle,
  DetailSectionTitle,
  DetailText,
  Loading,
  PropertyFeatureCard,
} from '../../components'
import { getPropertyDetails } from '../../services/calls'
import { ImageBackground, ScreenContainer, BottomContainer, FeaturesContainer } from './styles'

export const Detail = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true)
  const [propertyDetail, setPropertyDetail] = useState()
  const { selectedProperty } = route.params

  const price = selectedProperty.community.price_max

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  async function callGetPropertyDetail() {
    const result = await getPropertyDetails(selectedProperty.property_id)
    setPropertyDetail(result.properties[0] ? result.properties[0] : null)
    setLoading(false)
  }

  useEffect(() => {
    callGetPropertyDetail()
  }, [])

  function onClickArrowBack() {
    navigation.goBack()
  }

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedProperty.photos[0].href }}>
        <IconButton iconName="chevron-back" onPress={onClickArrowBack} transparent />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>
      {loading ? (
        <BottomContainer>
          <Loading />
        </BottomContainer>
      ) : (
        <BottomContainer>
          <DetailTitle>{propertyDetail.address.line}</DetailTitle>
          <DetailSubTitle mt={4}>{price != null ? formatedPrice.format(price) : ' '}</DetailSubTitle>
          <DetailText mt={4}>
            {propertyDetail.address.neighborhood_name} - {propertyDetail.address.state}
          </DetailText>
          <DetailSectionTitle mt={24}>Detalhes</DetailSectionTitle>
          <FeaturesContainer>
            <PropertyFeatureCard
              iconName="expand-outline"
              featureText={`${propertyDetail.lot_size.size} ${propertyDetail.lot_size.units}`}
            />
            <PropertyFeatureCard
              iconName="bed-outline"
              featureText={`${propertyDetail.community.beds_min} - ${propertyDetail.community.beds_max} Camas`}
            />
            <PropertyFeatureCard
              iconName="home-outline"
              featureText={`${propertyDetail.community.baths_max} Banheiros`}
            />
          </FeaturesContainer>
          <DetailSectionTitle mt={24} mb={12}>Vantagens do Imóvel</DetailSectionTitle>
          {propertyDetail.features[1].text.map((item) => (
            <DetailText mb={2} key={item}>- {item}</DetailText>
          ))}
        </BottomContainer>
      )}
    </ScreenContainer>
  )
}
