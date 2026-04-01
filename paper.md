---
title: 'EvoMap: Interactive Geographic Visualization of Pathogen Outbreak Data'
tags:
  - pathogen surveillance
  - geographic epidemiology
  - outbreak visualization
  - public health informatics
  - TypeScript
  - Next.js
authors:
  - name: John Adeyemo Adedeji
    orcid: 0009-0004-1257-4551
    affiliation: 1
affiliations:
  - name: Osun State University, Osogbo, Nigeria
    index: 1
date: 01 April 2026
bibliography: paper.bib
---

# Summary

EvoMap is an open-source web application for browser-native geographic visualization
of pathogen outbreak data. Built on Next.js 15 and TypeScript, it renders interactive
Leaflet-based maps with automatic marker clustering, supports search and filter
operations across outbreak records, and runs without server-side infrastructure beyond
standard static file hosting. The v0.1.0 release establishes the geographic
surveillance interface and the application architecture on which phylogenetic tree
visualization, data parsers, and external API integrations are being built. EvoMap
targets researchers, public health practitioners, and educators who need accessible
outbreak visualization without the installation overhead of desktop bioinformatics
tools.

# Statement of Need

Pathogen genomic and epidemiological data is generated at scale across low- and
middle-income countries, but the infrastructure to interpret it is unevenly
distributed. Most phylogenetic and outbreak visualization workflows, including IQ-TREE
[@Nguyen2015], BEAST, and the Nextstrain augur pipeline [@Hadfield2018], require local
software installation, command-line literacy, and computational hardware unavailable to
much of the global public health workforce. A district epidemiologist tracking an
outbreak cluster in a resource-constrained setting needs to answer spatial questions
about case concentration, spread, and geographic clustering without first configuring
a pipeline to do it.

Existing browser-based platforms address parts of this gap. Nextstrain [@Hadfield2018]
combines phylogenetic inference with geographic visualization, but a custom Nextstrain
workflow requires managing augur and auspice installations with meaningful compute
overhead. Microreact [@Argimon2016] provides a polished linked tree-and-map viewer but
requires pre-computed inputs and has no integration with public sequence repositories.
iTOL [@Letunic2019] handles phylogenetic annotation well but was not built for spatial
outbreak tracking. None of these platforms is designed for rapid deployment by teams
without dedicated bioinformatics staff.

EvoMap sits between these tools: a web-native geographic visualization layer that runs
from a URL, requires no installation, and is built from the start to receive
phylogenetic and API layers as the platform grows. At v0.1.0, EvoMap delivers the
geographic map interface, the search and filter system, and the full application
scaffold. This paper describes what is functional now, what is planned, and how the
architecture supports that roadmap.

# Implementation

## Technology Stack

EvoMap is implemented in TypeScript 5.9 using the Next.js 15 App Router. The
production build outputs static assets deployable to any CDN or static host, including
free-tier services like Vercel and Netlify, which matters for research groups without
hosting budgets. TypeScript strict mode is enforced throughout to catch data ingestion
errors early, since silent failures on malformed files erode user trust faster than
almost any other class of bug.

Geographic visualization runs on Leaflet 1.9.4 via react-leaflet 5 and
react-leaflet-cluster 3.1. Leaflet was chosen over Mapbox GL because its default
OpenStreetMap configuration requires no API token, removing a setup barrier that
disproportionately affects users in institutions without managed developer accounts.
Marker clustering via react-leaflet-cluster keeps dense outbreak datasets readable.
TailwindCSS handles the responsive layout. The application starts with a standard
`npm install && npm run dev` with no environment variables required for the core
geographic interface.

![EvoMap v0.1.0 geographic interface. The Leaflet map renders outbreak markers over an
OpenStreetMap basemap with zoom and pan controls. Navigation provides access to the
map, phylogenetic, search, and dashboard routes.](fig1.png)

## Application Architecture

The repository follows the Next.js App Router convention. Route segments under
`src/app/` cover the geographic map, phylogenetic viewer (scaffolded), dashboard, and
API routes. Supporting modules in `src/lib/` handle mock data and shared types.
Custom React hooks in `src/hooks/` manage data fetching for outbreaks, pathogens,
phylogenetic data, and search. The current structure is:

```
src/
├── __tests__/
│   └── outbreak-data.test.ts
├── app/
│   └── api/
│       ├── outbreaks/
│       ├── pathogens/
│       ├── phylogenetic/
│       ├── search/
│       └── upload/
├── components/
│   ├── charts/
│   │   └── Timeline.tsx
│   ├── maps/
│   │   └── GlobalMap.tsx
│   └── upload/
│       └── DataUpload.tsx
├── data/
│   └── mockApi.ts
├── hooks/
│   ├── useOutbreaks.ts
│   ├── usePathogens.ts
│   ├── usePhylogeneticData.ts
│   └── useSearch.ts
└── lib/
    ├── data/
    │   └── mockData.ts
    ├── mongodb.ts
    ├── store.ts
    └── types.ts
```

The map, hooks, and data layers are functional in v0.1.0. The phylogenetic viewer,
parsers, and API integrations are scaffolded for v0.2.0 and v1.0.0.

## Current Functionality

The following are implemented and verified in v0.1.0: an interactive Leaflet map with
OpenStreetMap tiles, zoom and pan controls, and automatic marker clustering; a search
and filter panel for querying the loaded outbreak dataset; a responsive layout that
adapts from desktop to mobile without functional loss; a clean production build
deployable via the included `vercel.json`; a Dockerfile and `nginx.conf` for
containerised institutional deployment; and an MIT licence, `CONTRIBUTING.md` with
Conventional Commits, `CODE_OF_CONDUCT.md`, and GitHub Actions CI.

## Planned Functionality

Phase 2 (v0.2.0) covers D3.js phylogenetic tree rendering with rectangular, radial,
and circular layouts; client-side parsers for Newick, phyloXML, and FASTA; Zustand
state management; SWR data fetching; and bidirectional selection linking between the
tree and map panels.

Phase 3 (v1.0.0) covers NCBI Entrez API integration for automated sequence retrieval,
Nextstrain JSON endpoint support [@Hadfield2018], direct ingestion of GISAID-formatted
datasets [@Shu2017], replacement of mock data with live repository feeds, SVG and CSV
export, and Progressive Web App offline capability for field use.

# Limitations

Three limitations are worth stating plainly. The current map renders mock data only;
EvoMap connects to no live data source at v0.1.0, and custom data ingestion requires
manual modification of the mock data layer until the parsers planned for v0.2.0 land.
The phylogenetic tree page exists as a navigable route but renders no content yet.
The test suite covers coordinate validation and search logic but not component-level
rendering; broader coverage is a Phase 2 priority.

# Acknowledgements

The author thanks the Nextstrain and Microreact development teams for the design
precedents that shaped EvoMap's architecture, and the open-source communities behind
Next.js, React, Leaflet, and D3.js. NCBI and WHO data resources underpin the planned
real-data layer. Portions of the implementation were developed with Cursor, an
AI-powered code editor, used for boilerplate scaffolding and iterative debugging. All
research design, architectural decisions, and scientific framing were made by the
author, who takes full responsibility for all code in the repository.

# References
