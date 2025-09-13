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

> **EvoMap** is a cutting-edge web platform that makes evolutionary viral and bacterial outbreak data accessible to researchers, policymakers, and the general public through intuitive interactive visualizations and open dashboards.

---

## 🎯 Mission

EvoMap aims to **transform the way we understand pathogen evolution** by providing:

- **🔴 Real-time access** to genomic outbreak data from viral and bacterial pathogens worldwide  
- **📊 Interactive visualizations** of evolutionary trajectories, mutation pathways, and lineage distributions  
- **🌍 Global accessibility** with educational and public health-focused components  
- **📱 Mobile-first design** supporting responsive layouts, touch interactions, and offline capabilities for field research  

Our goal is to democratize pathogen genomic data so that researchers, public health officials, educators, and the general public can engage with complex datasets intuitively.

---

## ✨ Key Features

### 🌍 Interactive Global Map
- **Live outbreak tracking** with geographic clustering
- **Temporal visualization** with timeline sliders
- **Severity-based color coding** for quick risk assessment
- **Mobile-responsive design** with touch support
- **Hover & click events** to reveal outbreak metadata

### 🌳 Phylogenetic Tree Visualization
- Fully **D3.js-powered** trees with zoom & pan
- Mutation and lineage tracking
- Multiple tree layout algorithms (radial, rectangular, circular)
- Real-time updates from NCBI & Nextstrain
- Node/branch highlighting with metadata

### 📊 Comprehensive Dashboard
- Global & regional outbreak overview
- Trending mutations and variant monitoring
- Hotspot identification
- Data freshness indicators
- Responsive design for desktop & mobile

### 🔍 Advanced Search & Filtering
- Full-text search across genomes & metadata
- Filters by geography, date range, and mutation
- Flexible query tools for targeted analysis

### 📤 Data Contribution Platform
- Upload interface supporting CSV, JSON, FASTA, Newick, phyloXML
- Automated validation & quality checks
- Collaborative review workflows
- Version-controlled dataset management

---

## 🚀 Live Demo

🌐 **[Try EvoMap Live Demo](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app/)**  

_Screenshots in `/docs/screenshots/`_:
- `main-interface.png` – Dashboard overview  
- `global-map.png` – Interactive global outbreak map  
- `phylogenetic-tree.png` – Evolutionary tree viewer  
- `data-import.png` – Data contribution interface  

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 14+** – React framework with App Router  
- **TypeScript 5+** – Type-safe development  
- **TailwindCSS 3+** – Utility-first styling  
- **D3.js** – Phylogenetic tree visualizations  
- **Leaflet** – Interactive mapping  
- **Plotly.js** – Scientific charts  

### Backend & Data
- **MongoDB Atlas** – Genomic data storage  
- **Nextstrain API** – Real-time phylogenetic datasets  
- **NCBI GenBank & Virus** – Public genomic data  
- **Vercel** – Hosting & CI/CD  

### State Management & Utilities
- **Zustand** – Lightweight global state  
- **SWR** – Data fetching & caching  
- **BioPython** – Genomic data processing  

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap

# Install dependencies
npm install

# Copy env variables
cp .env.example .env.local

# Run dev server
npm run dev

Open http://localhost:3000

.
🧬 Supported Data Formats

Supports Newick, phyloXML, JSON, CSV, FASTA.
🗺️ Roadmap

Phase 1 (✅ Current): Map, tree, dashboards, filtering
Phase 2 (🚧 In Progress): Real-time sync, advanced analytics, offline PWA, collaboration
Phase 3 (🔮 Planned): ML-powered predictions, public API, i18n, mobile apps, real-time collab
🤝 Contributing

We welcome contributions! Please fork, branch, commit, and PR.
Follow Conventional Commits and ensure tests/docs are updated.
📊 Data Sources

    Nextstrain – real-time pathogen evolution

    NCBI Virus – viral genome data

    GISAID – global genomic data sharing

    WHO & CDC – outbreak monitoring

    Our World in Data – epidemiological stats

🏆 Recognition

Inspired by Nextstrain
, EvoLaps
, Empress
, and ggtree

.
📄 License

MIT License – see LICENSE

.
<div align="center">

Built with ❤️ for global health and open science
Making pathogen evolution data accessible to everyone, everywhere.

⭐ Star EvoMap
</div> ```
