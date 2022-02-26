import { Audio } from "expo-av";

import soundLibrary from "../assets/sounds/soundLibrary";

const soundObjects = {};

class Player {
  constructor() {
    // super();
    this.state = {
      muted: true,
    };
  }

  static load(library) {
    const promisedSoundObjects = [];

    for (const name in library) {
      const sound = library[name];

      soundObjects[name] = new Audio.Sound();

      promisedSoundObjects.push(soundObjects[name].loadAsync(sound));
    }

    return promisedSoundObjects;
  }

  static async playSound(name) {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].replayAsync();
      }
    } catch (error) {
      console.warn(error);
    }
  }

  static async setMutedState(isMuted) {
    try {
      for (const name in soundLibrary) {
        await soundObjects[name].setIsMutedAsync(isMuted);
      }
      // await soundObjects[name].setIsMutedAsync(true);
    } catch (error) {
      console.warn(error);
    }
  }
}

export default Player;
