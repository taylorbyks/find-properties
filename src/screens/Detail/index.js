import React, { useEffect, useState } from 'react'
import { usePropertiesStore } from '../../services/stores'
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
import { getIfPropertyIsFavorite, savePropertyAsFavorite, removePropertyAsFavorite } from '../../services/db'

export const Detail = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [favorite, setFavorite] = useState(false)
  const { selectedProperty } = usePropertiesStore()
  const [propertyDetail, setPropertyDetail] = useState()

  const price = selectedProperty.community && selectedProperty.community.price_max

  const formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  async function callGetPropertyDetail() {
    const result = await getPropertyDetails(selectedProperty.property_id)
    setPropertyDetail(result.properties[0] ? result.properties[0] : null)
    setLoading(false)
  }

  async function checkIfPropertyIsFavorite() {
    const isFavorite = await getIfPropertyIsFavorite(selectedProperty.property_id)
    setFavorite(isFavorite)
  }

  async function handleFavorite() {
    if (favorite) {
      await removePropertyAsFavorite(selectedProperty.property_id)
      setFavorite(false)
    } else {
      await savePropertyAsFavorite(selectedProperty.property_id)
      setFavorite(true)
    }
  }

  useEffect(() => {
    callGetPropertyDetail()
    checkIfPropertyIsFavorite()
  }, [])

  function onClickArrowBack() {
    navigation.goBack()
  }

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedProperty.photos[0].href }}>
        <IconButton iconName="chevron-back" onPress={onClickArrowBack} transparent />
        <IconButton
          iconName={favorite ? 'star' : 'star-outline'}
          onPress={handleFavorite}
          fill={favorite}
          transparent
        />
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
          <DetailSectionTitle mt={20} mb={12}>Detalhes</DetailSectionTitle>
          <FeaturesContainer>
            <PropertyFeatureCard
              iconName="expand-outline"
              featureText={`${propertyDetail.lot_size.size} ${propertyDetail.lot_size.units}`}
            />
            <PropertyFeatureCard
              iconName="bed-outline"
              featureText={`${selectedProperty.community ? propertyDetail.community.beds_min+ "-"+ propertyDetail.community.beds_max + " Camas": ""}`}
            />
            <PropertyFeatureCard
              iconName="home-outline"
              featureText={`${selectedProperty.community ? propertyDetail.community.baths_max + " Toaletes": ""}`}
            />
          </FeaturesContainer>
          <DetailSectionTitle mt={20} mb={12}>
            Vantagens do Imóvel
          </DetailSectionTitle>
          {propertyDetail.features[1] && propertyDetail.features[1].text.map((item) => (
            <DetailText mb={2} key={item}>
              - {item}
            </DetailText>
          ))}
        </BottomContainer>
      )}
    </ScreenContainer>
  )
}
