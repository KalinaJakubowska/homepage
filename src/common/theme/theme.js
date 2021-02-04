const breakpoints = {
  mobile: "320",
  bigMobile: "480",
  ipad: "768",
  bigScreen: "1024",
};

const colors = {
  mineShaft: "#252525",
  scienceBlue: "#0366D6",
  slateGray: "#6E7E91",
  white: "#ffffff",
  whiteLiliac: "#FBFBFE",
  mercury: "#E5E5E5",
  dodgerBlue: "#2188FF",
  gray: "rgba(54, 54, 54, 0.72)",
};

export const theme = {
  elementColor: {
    bigTileTitleUnderline: "rgba(209, 213, 218, 0.3)",
    title: colors.mineShaft,
    button: colors.scienceBlue,
    text: colors.slateGray,
    tileBackground: colors.white,
    background: colors.whiteLiliac,
    githubTileHover: "rgba(3, 102, 214, 0.2)",
    themeSwitchBackground: colors.mercury,
    themeSwitchBorder: colors.slateGray,
    githubTileTitle: colors.scienceBlue,
  },
  colors,
  breakpoints,
};

export const darkTheme = {
  elementColor: {
    bigTileTitleUnderline: "rgba(209, 213, 218, 0.1)",
    title: colors.white,
    button: colors.dodgerBlue,
    text: colors.white,
    tileBackground: colors.gray,
    background: colors.mineShaft,
    githubTileHover: "rgba(3, 102, 214, 0.5)",
    themeSwitchBackground: colors.gray,
    themeSwitchBorder: colors.white,
    githubTileTitle: colors.white,
  },
  colors,
  breakpoints,
};
