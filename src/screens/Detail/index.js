import React, { useEffect, useState } from 'react'
import { IconButton, DetailTitle, DetailSubTitle, DetailSectionTitle, DetailText, Loading } from '../../components'
import { getPropertyDetails } from '../../services/calls'
import { ImageBackground, ScreenContainer, BottomContainer } from './styles'

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
          <DetailSubTitle>{price != null ? formatedPrice.format(price) : ' '}</DetailSubTitle>
          <DetailText>
            {propertyDetail.address.neighborhood_name} - {propertyDetail.address.state}
          </DetailText>
          <DetailSectionTitle>Detalhes</DetailSectionTitle>
          <DetailSectionTitle>Vantagens do Imóvel</DetailSectionTitle>
        </BottomContainer>
      )}
    </ScreenContainer>
  )
}
