import React, { useEffect, useState } from 'react'
import { IconButton, Input, Title, PropertiesList, Loading, FilterModal } from '../../components'
import { ScreenContainer, TopContainer, TitleContainer, ContentContainer } from './styles'
import { usePropertiesStore } from '../../services/stores'
import { usePropertiesHooks } from '../../services/hooks'

export const HomeScreen = () => {
  const { onGetProperties } = usePropertiesHooks()
  const { properties, loadingProperties } = usePropertiesStore()
  const [filterModalVisible, setFilterModalVisible] = useState(false)

  function toggleFilterModal() {
    setFilterModalVisible(!filterModalVisible)
  }

  useEffect(() => {
    onGetProperties()
  }, [])

  return (
    <ScreenContainer>
      <PropertiesList data={properties} loading={loadingProperties} onEndReached={onGetProperties}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" onPress={toggleFilterModal} />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loadingProperties && <Loading />}
        </ContentContainer>
      </PropertiesList>
      <FilterModal visible={filterModalVisible} onClose={toggleFilterModal} />
    </ScreenContainer>
  )
}
