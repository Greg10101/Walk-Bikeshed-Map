const AGENCIES = {

  wmata: {
    name: "WMATA Rail Station Walksheds",
    mapCenter: [38.905, -77.036],
    mapZoom: 12,
    sidebarColor: "#4679b0",
    buttonColor: "#3e3e3e",
    devMode: false,
    hasLinesToggle: true,
    markerStyle: "pie",
    lines: {
      RD: { color: "#E5262E", abbr: "R" },
      BL: { color: "#1574C4", abbr: "B" },
      OR: { color: "#F7941D", abbr: "O" },
      SV: { color: "#A0A2A0", abbr: "S" },
      GR: { color: "#00A65C", abbr: "G" },
      YL: { color: "#FFD32A", abbr: "Y" },
    }
  },

  rtd: {
    name: "RTD Denver Rail Walksheds",
    mapCenter: [39.7392, -104.9903],
    mapZoom: 11,
    sidebarColor: "#FFFFFF",
    buttonColor: "#CE0E2D",
    devMode: true,
    hasLinesToggle: false,
    markerStyle: "dumbbell",
    lines: {
      // Add RTD line codes, colors, and abbreviations here
      // e.g. w: { color: "#FFD700", abbr: "W" },
    }
  },

};
