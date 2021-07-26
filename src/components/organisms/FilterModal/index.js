import React from 'react'
import { useState } from 'react'
import { usePropertiesHooks } from '../../../services/hooks'
import { Button, InputSectionLabel } from '../../atoms'
import { Input, Modal } from '../../molecules'
import { FilterContainer, InputRowItem, InputsRowContainer } from './styles'

export const FilterModal = ({ onClose, visible }) => {
  const { onFilterPropertiesList } = usePropertiesHooks()
  const [sizeMin, setSizeMin] = useState()
  const [sizeMax, setSizeMax] = useState()
  const [priceMin, setPriceMin] = useState()
  const [priceMax, setPriceMax] = useState()
  const [bedsMin, setBedsMin] = useState()
  const [bathsMin, setBathsMin] = useState()

  function onClickApply() {
    onFilterPropertiesList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    })
    onClose()
  }

  return (
    <Modal title="Filtrar" onClose={onClose} visible={visible}>
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 77"
              value={sizeMin}
              onChangeText={(e) => setSizeMin(e)}
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Máximo"
              placeholder="Ex: 200"
              value={sizeMax}
              onChangeText={(e) => setSizeMax(e)}
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 500"
              value={priceMin}
              onChangeText={(e) => setPriceMin(e)}
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Máximo"
              placeholder="Ex: 2000"
              value={priceMax}
              onChangeText={(e) => setPriceMax(e)}
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 2"
              value={bedsMin}
              onChangeText={(e) => setBedsMin(e)}
            />
          </InputRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 1"
              value={bathsMin}
              onChangeText={(e) => setBathsMin(e)}
            />
          </InputRowItem>
        </InputsRowContainer>
      </FilterContainer>
      <Button mt={24} text="Aplicar" onPress={onClickApply} />
    </Modal>
  )
}
