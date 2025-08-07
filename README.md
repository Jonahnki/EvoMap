# EvoMap 🧬🗺️

**Democratizing Access to Evolutionary Pathogen Data Through Interactive Visualizations**

**Tech Stack**: Next.js · TypeScript · TailwindCSS  
**License**: MIT

EvoMap is a cutting-edge web platform that makes viral and bacterial outbreak evolution data accessible to researchers, policymakers, and the public through intuitive visualizations and open dashboards.

---

## 🎯 Mission

Transform how we understand pathogen evolution by providing:

- Real-time access to genomic outbreak data  
- Interactive visualizations of viral/bacterial evolution  
- Global accessibility with educational components  
- Mobile-first design with offline capabilities

---

## ✨ Key Features

### 🌍 Interactive Global Map

- Live outbreak tracking with geographic clustering  
- Temporal visualization with timeline controls  
- Severity-based color coding for immediate threat assessment  
- Mobile-responsive touch interactions  

### 🌳 Phylogenetic Tree Visualization

- D3.js-powered interactive trees  
- Mutation tracking and lineage relationships  
- Zoom & pan for exploring complex data  
- Real-time updates as data becomes available  

### 📊 Comprehensive Dashboard

- Summary statistics for global outbreaks  
- Trending mutation analysis  
- Outbreak hotspot identification  
- Data freshness indicators  

### 🔍 Advanced Search & Filtering

- Full-text search across pathogen databases  
- Geographic filters by country/region  
- Temporal filtering with flexible ranges  
- Mutation-specific search tools  

### 📤 Data Contribution Platform

- Upload interface for new genomic data  
- Support for CSV, JSON, FASTA formats  
- Data validation and quality control  
- Collaborative review workflow  

---

## 🛠️ Technology Stack

### Frontend
- Next.js 14+  
- TypeScript  
- TailwindCSS  
- D3.js (phylogenetic visualizations)  
- Leaflet (interactive mapping)  
- Plotly.js (scientific charts)

### Backend & Data
- MongoDB Atlas  
- Nextstrain API  
- NCBI GenBank  
- Vercel

### State & Utilities
- Zustand (state management)  
- SWR (data fetching)  
- BioPython (genomic parsing)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+  
- npm or yarn  
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap

# Install dependencies
npm install

# Create environment config
cp .env.example .env.local

# Start development server
npm run dev
