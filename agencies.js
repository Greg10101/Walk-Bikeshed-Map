const AGENCIES = {

  wmata: {
    createdBy: 'Greg Thivierge, Emma Knisley', //Optional: Add author(s) of the map here to give them credit in the footer
    lastUpdated: 'April 2026', // Optional but please include to give map users a sense of how current the data is
    name: "WMATA Rail Station Walksheds",
    mapCenter: [38.905, -77.036],
    mapZoom: 12,
    sidebarColor: "#4679b0",
    buttonColor: "#3e3e3e",
    font: "Helvetica, Arial, Inter, sans-serif", // Always have Inter and sans-serif as backups to primary agency font(s)
    sidebarTextDark: false, // Flage TRUE if the sidebar text should be dark (for light backgrounds) or false if it should be light (for dark backgrounds)
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
    createdBy: 'Greg Thivierge, Emma Knisely', //Optional: Add author(s) of the map here to give them credit in the footer
    lastUpdated: 'April 2026', // Optional but please include to give map users a sense of how current the data is
    name: "RTD Denver Rail Walksheds",
    mapCenter: [39.7392, -104.9903],
    mapZoom: 11,
    sidebarColor: "#FFFFFF", // Used white becuase either primary color (red or blue) is too much for the menu
    buttonColor: "#CE0E2D",
    font: "Inter, sans-serif", // Always have Inter and sans-serif as backups to primary agency font(s)
    sidebarTextDark: true, // Flage TRUE if the sidebar text should be dark (for light backgrounds) or false if it should be light (for dark backgrounds)
    devMode: true,
    hasLinesToggle: false,
    markerStyle: "dumbbell",
    lines: {
      // Add RTD line codes, colors, and abbreviations here
      // e.g. w: { color: "#FFD700", abbr: "W" },
    }
  },

};
