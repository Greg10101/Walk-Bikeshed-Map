# Walkable Transit

A set of interactive maps showing precomputed walking shed polygons around transit stations, starting with the Washington DC Metro (WMATA). Select an agency from the main map and then one or more stations from the agency map to visualize how far you can walk in 5, 10, 15, or 20 minutes from a station.

**[View the live map →](https://greg10101.github.io/Walk-Bikeshed-Map/)**

---

## About

"What's The Walkshed" is a growing project that maps pedestrian accessibility around public transit stations. Rather than straight-line ("as the crow flies") distance, walking sheds trace the actual street network — giving a realistic picture of what's reachable on foot from any given station.

All walkshed polygons are precomputed and served as static GeoJSON, so the map loads instantly with no routing API calls at runtime.

### Agencies

| Agency | Region | Status |
|--------|--------|--------|
| [WMATA](https://www.wmata.com/) | Washington, DC | ✅ Live |
| [RTD](https://www.rtd-denver.com/) | Denver, CO | 🔜 Coming soon |

---

## Features

- Walking shed polygons at 5, 10, 15, and 20-minute intervals
- Select stations by clicking the map or searching by name
- Multi-station selection — compare walkability across multiple stations at once
- Selected stations shown as a dismissible chip list with individual or bulk removal
- Floating, collapsible sidebar — works on desktop and mobile
- Station markers styled after each agency's official line colors

## Screenshots

![WMATA Screencapture](Screenshots/2026-3-27%20WMATA%20Screencapture.png?raw=true)

---

## Data

### Station data (`stations.geojson`)

Station locations, names, and line assignments sourced from each agency's public API or open data portal. Each feature includes:

- `code` — Station code (primary key)
- `name` — Official station name
- `lines` — Array of line codes (e.g. `["RD", "BL"]`)

Multi-platform stations that share a physical location are merged by name so they appear as a single marker on the map.

### Walkshed data (`walksheds.geojson`)

Walking isochrone polygons generated using ArcGIS network analysis tools against the local pedestrian street network. Each feature includes:

- `station_id` — Station code, matched to `stations.geojson` via the `code` field
- `minutes` — Walk time interval (5, 10, 15, or 20)

---

## Project Structure

```
Walk-Bikeshed-Map/
├── index.html          # Map application (GitHub Pages entry point)
├── methodology.html    # Methodology page for overall and agency specific map methodology
├── README.md   
└── "Agency Code"/      # Folder for EACH individual agency
    ├── stations.geojson    # Station locations and metadata
    ├── walksheds.geojson   # Precomputed walking shed polygons
    └── index.html          # Agency map page
```

The map is hosted directly via [GitHub Pages](https://pages.github.com/) — no server or build step required.

---

## Roadmap

- [ ] **RTD (Denver)** — Walking sheds for the Denver light rail and commuter rail network
- [ ] **Nearest Station Walksheds** — Show nearest station when mutiple station walksheds overlap (prevent overlap)
- [ ] **Additional agencies** — Open to suggestions

---

## Built With

- [Leaflet.js](https://leafletjs.com/) — interactive map rendering
- [Esri Light Gray Canvas](https://www.arcgis.com/) — basemap tiles
- ArcGIS Network Analyst — walkshed polygon generation
- Agency open data / APIs for station locations

---

## License

This project is open source. See [LICENSE](LICENSE) for details.

---

*Not affiliated with or endorsed by WMATA, RTD, or any other transit agency.*
