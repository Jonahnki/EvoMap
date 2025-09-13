![EvoMap Banner](assets/banner_2.webp)

# EvoMap 🧬🗺️
**Democratizing Access to Evolutionary Pathogen Data Through Interactive Visualizations**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![SWR](https://img.shields.io/badge/SWR-2.3+-00CFFF?style=flat-square&logo=react)](https://swr.vercel.app/)
[![Zustand](https://img.shields.io/badge/Zustand-4+-ffb300?style=flat-square)](https://github.com/pmndrs/zustand)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=flat-square&logo=vercel)](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/Jonahnki/EvoMap?style=flat-square&logo=github)](https://github.com/Jonahnki/EvoMap/stargazers)

> **EvoMap** is a web platform that makes evolutionary viral and bacterial outbreak data accessible to researchers, policymakers, and the public through interactive visualizations and open dashboards.

---

## 🎯 Mission
EvoMap aims to **transform how we understand pathogen evolution** by providing:

- 🔴 **Real-time access** to genomic outbreak data worldwide  
- 📊 **Interactive visualizations** of evolutionary trajectories and mutations  
- 🌍 **Global accessibility** with public health–focused tools  
- 📱 **Mobile-first design** with responsive layouts and offline capabilities  

Our goal is to **democratize pathogen genomic data**, empowering researchers, health officials, educators, and the public.

---

## ✨ Key Features

### 🌍 Interactive Global Map
- Live outbreak tracking with geographic clustering  
- Timeline sliders for temporal dynamics  
- Severity-based color coding  
- Touch support for mobile  
- Click/hover to reveal metadata  

### 🌳 Phylogenetic Tree Viewer
- D3.js-powered with zoom & pan  
- Radial, rectangular, and circular layouts  
- Mutation and lineage tracking  
- Real-time updates (NCBI & Nextstrain)  
- Node/branch metadata highlighting  

### 📊 Comprehensive Dashboard
- Global/regional outbreak overview  
- Trending mutations and variant tracking  
- Hotspot identification  
- Data freshness indicators  

### 🔍 Advanced Search & Filtering
- Full-text genome & metadata search  
- Filter by geography, date range, mutation  
- Flexible query tools  

### 📤 Data Contribution
- Upload CSV, JSON, FASTA, Newick, phyloXML  
- Automated validation & quality checks  
- Collaborative review workflows  
- Version-controlled dataset management  

---

## 🚀 Live Demo
🌐 **[Try EvoMap Live](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app/)**  

_Screenshots available in `/docs/screenshots/`:_  
- `main-interface.png` – Dashboard  
- `global-map.png` – Outbreak map  
- `phylogenetic-tree.png` – Tree viewer  
- `data-import.png` – Contribution interface  

---

## 🛠️ Technology Stack

**Frontend**  
- Next.js 14+ (React App Router)  
- TypeScript 5+  
- TailwindCSS 3+  
- D3.js (trees & visualizations)  
- Leaflet (mapping)  
- Plotly.js (charts)  

**Backend & Data**  
- MongoDB Atlas  
- Nextstrain API  
- NCBI GenBank & Virus  
- Vercel (hosting & CI/CD)  

**State Management & Utilities**  
- Zustand (global state)  
- SWR (data fetching & caching)  
- Biopython (genomic data processing)  

---

## ⚡ Quick Start

\`\`\`bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧬 Supported Data Formats
- Newick  
- phyloXML  
- JSON  
- CSV  
- FASTA  

---

## 🗺️ Roadmap
- **Phase 1 (✅ Current):** Map, tree, dashboards, filtering  
- **Phase 2 (🚧 In Progress):** Real-time sync, advanced analytics, offline PWA, collaboration  
- **Phase 3 (🔮 Planned):** ML-powered predictions, public API, i18n, mobile apps, real-time collab  

---

## 🤝 Contributing
We welcome contributions!  
- Fork → branch → commit → PR  
- Follow [Conventional Commits](https://www.conventionalcommits.org/)  
- Ensure tests & docs are updated  

---

## 📊 Data Sources
- [Nextstrain](https://nextstrain.org/) – real-time pathogen evolution  
- [NCBI Virus](https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/) – viral genome data  
- [GISAID](https://gisaid.org/) – global data sharing  
- [WHO](https://www.who.int/) & [CDC](https://www.cdc.gov/) – outbreak monitoring  
- [Our World in Data](https://ourworldindata.org/) – epidemiological stats  

---

## 🏆 Recognition
Inspired by:  
- [Nextstrain](https://nextstrain.org/)  
- [EvoLaps](https://github.com/evolbioinfo/evolaps)  
- [Empress](https://github.com/biocore/empress)  
- [ggtree](https://github.com/YuLab-SMU/ggtree)  

---

## 📄 License
MIT License – see [LICENSE](LICENSE)

---

<div align="center">
Built with ❤️ for global health and open science  
<br/>Making pathogen evolution data accessible to everyone, everywhere.  
<br/><br/>
⭐ If you find EvoMap useful, give us a star!
</div>
