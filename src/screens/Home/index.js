import React, { useEffect, useState } from 'react'
import { IconButton, Input, Title, PropertiesList, Loading } from '../../components'
import { ScreenContainer, TopContainer, TitleContainer, ContentContainer, LoadingContainer } from './styles'
import { getPropertiesCall } from '../../services/calls'

export const HomeScreen = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  async function callGetProperties() {
    const result = await getPropertiesCall()
    setProperties(result.properties ? result.properties : [])
    setLoading(false)
  }

  useEffect(() => {
    callGetProperties()
  }, [])

  return (
    <ScreenContainer>
      <PropertiesList data={properties}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && <Loading />}
        </ContentContainer>
      </PropertiesList>
    </ScreenContainer>
  )
}
