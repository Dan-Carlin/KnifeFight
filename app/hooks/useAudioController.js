import { Audio } from "expo-av";

import soundLibrary from "../assets/sounds/soundLibrary";

const soundObjects = {};

const useAudioController = () => {
  const load = (library) => {
    const promisedSoundObjects = [];

    for (const name in library) {
      const sound = library[name];

      soundObjects[name] = new Audio.Sound();

      promisedSoundObjects.push(soundObjects[name].loadAsync(sound));
    }

    return promisedSoundObjects;
  };

  const playSound = async (name) => {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].replayAsync();
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const enableSounds = async (enabled) => {
    try {
      for (const name in soundLibrary) {
        await soundObjects[name].setIsMutedAsync(!enabled);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    load,
    playSound,
    enableSounds,
  };
};

export default useAudioController;
