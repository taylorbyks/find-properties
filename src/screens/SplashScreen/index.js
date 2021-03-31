import React from "react"

import { SectionImage, SectionView } from './styles'
import SplashLogo from '../../assets/Logo.png'
import { StatusBar } from "react-native";

export const SplashScreen = () => {
  return (
      <SectionView>
        <StatusBar translucent backgroundColor="transparent" />
        <SectionImage source={ SplashLogo } resizeMode="contain"/>
      </SectionView>
  );
}
