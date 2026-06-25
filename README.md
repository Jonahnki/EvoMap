# EvoMap 🧬🗺️

**A browser-based open-source platform for geographic visualization of pathogen outbreak data in resource-constrained settings**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=flat-square&logo=vercel)](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app) [![GitHub Stars](https://img.shields.io/github/stars/Jonahnki/EvoMap?style=flat-square&logo=github)](https://github.com/Jonahnki/EvoMap/stargazers) [![DOI](https://zenodo.org/badge/1033557469.svg)](https://doi.org/10.5281/zenodo.19362602)

> EvoMap is an open-source web application for geographic outbreak visualization, built to run entirely in the browser with no server-side computation, API tokens, or environment configuration required. It targets public health teams without dedicated bioinformatics infrastructure.

---

## 📋 Table of Contents

- [Why EvoMap](#why-evomap)
- [What Works Today (v0.1.0)](#what-works-today-v010)
- [What Doesn't Work Yet](#what-doesnt-work-yet)
- [Live Demo](#-live-demo)
- [Technology Stack](#️-technology-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Roadmap](#️-roadmap)
- [Comparison to Existing Tools](#comparison-to-existing-tools)
- [Contributing](#-contributing)
- [Citation](#citation)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## Why EvoMap

Standard outbreak visualization tools (Nextstrain, BEAST, IQ-TREE) assume infrastructure most low- and middle-income country public health teams don't have: local installation, command-line fluency, and dedicated compute. EvoMap closes part of that gap with a zero-installation, zero-token geographic surveillance interface that runs from a URL in any modern browser, including on mobile devices, with a self-hostable Docker path for teams that can't put outbreak data on a public cloud.

This is a working architectural foundation, not a finished platform. It is **honest about what is and isn't built yet** — see below.

---

## What Works Today (v0.1.0)

- **Geographic map interface** — interactive Leaflet map, OpenStreetMap base tiles, zoom/pan, automatic marker clustering via react-leaflet-cluster
- **Search and filter** — text search and filtering by pathogen name, geographic region, and date range
- **Responsive layout** — TailwindCSS layout adapts desktop to mobile without functional degradation
- **Clean build and deployment** — builds without errors, deploys to Vercel via included `vercel.json`
- **Docker support** — `Dockerfile` and `nginx.conf` included for self-hosted, containerized institutional deployment
- **Open-source infrastructure** — MIT license, `CONTRIBUTING.md` (Conventional Commits), `CODE_OF_CONDUCT.md`, GitHub Actions CI (lint + build)

The application runs entirely on **mock data** bundled with the repository. No database, no API keys, no environment variables are required to start it: `npm install && npm run dev` is the full setup.

## What Doesn't Work Yet

Stated plainly, because a scaffolded-but-empty feature disclosed in advance is a roadmap item, and the same thing discovered by a user is a broken feature:

- **`/tree` (phylogenetic viewer)** — route exists and is reachable from navigation, renders no content. Implementation targeted for v0.2.0.
- **No live data integration** — there is no connection to NCBI, Nextstrain, GISAID, or any other repository. All data shown is local mock data. Real-data handlers are planned for v1.0.0.
- **No file upload** — loading your own outbreak dataset currently requires editing `src/lib/data/` directly and rebuilding. CSV/TSV upload is the highest-priority item for v0.2.0.
- **No automated tests** — `npm test` exits cleanly but exercises no test cases. A baseline test suite is a stated precondition for v0.2.0, not yet delivered.
- **No backend / no database** — this is by design, not a gap. EvoMap is client-side only in v0.1.0; server-side API routes are scaffolded in `src/app/api/` for future use but not yet implemented.
- **No formal performance benchmarking** — qualitative testing only so far (build time, perceived responsiveness on the bundled dataset). A quantitative benchmark across dataset sizes and device classes is scoped for v0.2.0.

---

## 🚀 Live Demo

🌐 **[Try EvoMap](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app/)** — the geographic map, search, and filter interface, running on bundled mock data.

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** (App Router) — static export, hybrid rendering
- **TypeScript 5.9** (strict mode enforced) — 96.4% of codebase
- **TailwindCSS** — responsive layout
- **Leaflet 1.9.4** via react-leaflet 5 and react-leaflet-cluster 3.1 — chosen over Mapbox GL specifically because OpenStreetMap tiles require no API token

### State Management
- React built-in state (`useState`, `useContext`) — sufficient for the current single-map-view scope
- **Zustand** is planned for v0.2.0, when cross-component state (tree panel ↔ map panel selection sync) becomes structurally necessary. Not yet a dependency.

### Deployment
- **Vercel / Netlify** — static export, free-tier compatible
- **Docker + nginx** — for institutional self-hosting behind a firewall, no external dependency beyond the OpenStreetMap tile service

No MongoDB, no external database, no third-party API keys are used or required in v0.1.0.

---

## ⚡ Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm
- Git

### Installation

```bash
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap
npm install
npm run dev
```

Open <http://localhost:3000>. No `.env` file, API key, or database connection is required for the core geographic interface.

---

## 📁 Project Structure

```
EvoMap/
├── src/
│   ├── app/
│   │   ├── map/          ✓ functional
│   │   ├── dashboard/    ✓ functional
│   │   ├── search-filter/✓ functional
│   │   ├── tree/         ✗ scaffolded — v0.2.0
│   │   └── api/          ✗ scaffolded — v0.2.0
│   ├── lib/
│   │   ├── parsers/      ✗ scaffolded — v0.2.0 (Newick, phyloXML, FASTA)
│   │   ├── algorithms/   ✗ scaffolded — v0.2.0 (tree layout)
│   │   ├── data/         ✓ mock data active
│   │   └── utils/        ✓ functional
│   └── hooks/             ✓ functional
```

This structure gives every planned feature a predefined home in the codebase from the first commit, so v0.2.0 development doesn't require moving or renaming existing modules.

---

## 🧪 Development Workflow

```bash
npm run dev          # development server
npm run build        # production build
npm run start         # production server
npm run lint          # lint
npm test              # runs, but no test cases populated yet
```

Build pipeline runs through GitHub Actions CI on every push (lint + production build). Each feature is currently verified by manual testing against a clean local environment and a production Vercel deployment — automated coverage is a v0.2.0 precondition, not yet in place.

---

## 🗺️ Roadmap

### v0.1.0 — Current
Geographic map, search/filter, responsive layout, Docker self-hosting, open-source governance infrastructure.

### v0.2.0 — In active development
- Phylogenetic tree visualization (D3.js, rectangular/radial/circular layouts, metadata-driven node colouring)
- Client-side parsers: Newick (.nwk/.tree), phyloXML, FASTA, CSV/TSV metadata ingestion
- Zustand for cross-component state; SWR for async data fetching
- Linked tree-map view (bidirectional selection)
- Baseline automated test suite
- Measured bundle-size and dataset-size/device-class performance benchmarks

### v1.0.0 — Planned
- NCBI Entrez API integration (E-utilities: esearch, efetch)
- Nextstrain JSON endpoint ingestion
- Real data layer replacing mock data, with configurable refresh
- SVG export (trees), CSV export (filtered map datasets)
- Progressive Web App / offline support for field use

---

## Comparison to Existing Tools

| Dimension | Nextstrain | Microreact | iTOL | EvoMap (v0.1.0) |
|---|---|---|---|---|
| Installation required | Yes (augur/auspice) | No | No | No |
| API token/account required | No (self-hosted) | No | Account for some features | No |
| Pre-computed phylogenetic input required | No (computes inline) | Yes | Yes | N/A (geography only, current release) |
| Live sequence repository integration | Yes (built in) | No | No | Planned, v1.0.0 |
| Self-hosted/offline-capable | Yes, with effort | No | No | Yes, via Docker |
| Geographic clustering at scale | Limited | Limited | No | Yes |
| Open-source/forkable | Yes | No | No | Yes |

EvoMap does not compete on feature parity with Nextstrain or Microreact. Its contribution is a lower floor: zero-installation geographic clustering with a self-hostable path, for teams that need outbreak tracking today and don't have deployable bioinformatics infrastructure.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push and open a Pull Request

See `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`. Areas where help is especially useful right now: Newick/phyloXML parser implementation, D3.js tree rendering, automated test coverage, and bundle-size/performance benchmarking.

---

## Citation

If you use EvoMap, please cite the archived release:

```
Adedeji, J.A. (2026). EvoMap v0.1.0. Zenodo. https://doi.org/10.5281/zenodo.19362602
```

A peer-reviewed manuscript describing the design and architecture is under review at *Informatics for Health and Social Care*.

---

## 📄 License

MIT — see [LICENSE](https://github.com/Jonahnki/EvoMap/blob/main/LICENSE).

---

## 🙏 Acknowledgments

Thanks to the Nextstrain and Microreact teams for setting design standards that informed EvoMap's architecture, and to the open-source communities behind Next.js, React, Leaflet, and D3.js, which provide the technical foundation EvoMap is built on.

---

## 📞 Contact

- **Issues / bugs**: [GitHub Issues](https://github.com/Jonahnki/EvoMap/issues)
- **Author**: John Adeyemo Adedeji — john.adedeji@chs.uniosun.edu.ng
- **ORCID**: [0009-0004-1257-4551](https://orcid.org/0009-0004-1257-4551)

---

**Built for low-resource public health surveillance.**
