import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    default: require("../assets/fonts/amsterdam.ttf"),
    grafittiA: require("../assets/fonts/a_another_tag.ttf"),
    grafittiB: require("../assets/fonts/adrip_one.ttf"),
    biker: require("../assets/fonts/aka_posse.ttf"),
    military: require("../assets/fonts/armalite.ttf"),
    heroic: require("../assets/fonts/bangers_regular.ttf"),
    cholo: require("../assets/fonts/canterbury.ttf"),
    warrior: require("../assets/fonts/dungeon_crawler_cb.ttf"),
    villain: require("../assets/fonts/evil_empire.otf"),
    academic: require("../assets/fonts/freshman.ttf"),
    tribal: require("../assets/fonts/guttural.ttf"),
    retro: require("../assets/fonts/park_lane_nf.ttf"),
    futuristic: require("../assets/fonts/sector_seventeen.ttf"),
    punk: require("../assets/fonts/sixty_sekuntia.ttf"),
  });
