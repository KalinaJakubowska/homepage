const colors = {
  mineShaft: "#252525",
  scienceBlue: "#0366D6",
  slateGray: "#6E7E91",
  white: "#ffffff",
  whiteLiliac: "#FBFBFE",
  mercury: "#E5E5E5",
  dodgerBlue: "#2188FF",
};

export const theme = {
  color: {
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
};

export const darkTheme = {
  color: {
    title: colors.white,
    button: colors.dodgerBlue,
    text: colors.white,
    tileBackground: "rgba(54, 54, 54, 0.72)",
    background: colors.mineShaft,
    githubTileHover: "rgba(3, 102, 214, 0.5)",
    themeSwitchBackground: "rgba(54, 54, 54, 0.72)",
    themeSwitchBorder: colors.white,
    githubTileTitle: colors.white,
  },
  colors,
};
