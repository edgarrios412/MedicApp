import React, { useEffect } from 'react';
import { Audio } from 'expo-av';
// import respuestaCorrecta from "../../assets/respuestaCorrecta.m4a"

const EjecutarSonido = ({ uri }) => {
  useEffect(() => {
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require(uri),
        { shouldPlay: true }
      );
      await sound.playAsync();
    };

    playSound();

    return () => {
      // Limpia el sonido cuando el componente se desmonta
      sound.unloadAsync();
    };
  }, [uri]);

  return null; // El componente no renderiza nada visualmente
};

export default EjecutarSonido;