![EvoMap Banner](assets/banner_2.webp)

# EvoMap 🧬🗺️ 
```[![DOI](https://zenodo.org/badge/1033557469.svg)](https://doi.org/10.5281/zenodo.19362601)```

**Democratizing Access to Evolutionary Pathogen Data Through Interactive Visualizations**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![SWR](https://img.shields.io/badge/SWR-2.3+-00CFFF?style=flat-square&logo=react)](https://swr.vercel.app/)
[![Zustand](https://img.shields.io/badge/Zustand-4+-ffb300?style=flat-square)](https://github.com/pmndrs/zustand)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=flat-square&logo=vercel)](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/Jonahnki/EvoMap?style=flat-square&logo=github)](https://github.com/Jonahnki/EvoMap/stargazers)
[![DOI](https://zenodo.org/badge/1033557469.svg)](https://doi.org/10.5281/zenodo.19362601)

> **EvoMap** is a cutting-edge web platform that makes evolutionary viral and bacterial outbreak data accessible to researchers, policymakers, and the general public through intuitive interactive visualizations and open dashboards.

---

## 📋 Table of Contents

- [🎯 Mission](#-mission)
- [✨ Key Features](#-key-features)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Technology Stack](#️-technology-stack)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🧪 Development Workflow](#-development-workflow)
- [🧬 Supported Data Formats](#-supported-data-formats)
- [🗺️ Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📊 Data Sources](#-data-sources)
- [♿ Accessibility](#-accessibility)
- [📈 Performance](#-performance)
- [🔧 Configuration](#-configuration)
- [🎯 Use Cases](#-use-cases)
- [🏆 Recognition](#-recognition)
- [🔄 Version History](#-version-history)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Contact & Support](#-contact--support)

---

## 🎯 Mission

EvoMap aims to **transform the way we understand pathogen evolution** by providing:

- **🔴 Real-time access** to genomic outbreak data from viral and bacterial pathogens worldwide.
- **📊 Interactive visualizations** of evolutionary trajectories, mutation pathways, and lineage distributions.
- **🌍 Global accessibility** with educational and public health-focused components.
- **📱 Mobile-first design** supporting responsive layouts, touch interactions, and offline capabilities for field research.

Our goal is to democratize pathogen genomic data so that researchers, public health officials, educators, and the general public can engage with complex datasets intuitively.

---

## ✨ Key Features

### 🌍 Interactive Global Map
- **Live outbreak tracking** with automatic geographic clustering
- **Temporal visualization** with adjustable timeline sliders
- **Severity-based color coding** to quickly identify high-risk areas
- **Mobile-responsive design** for touch and pinch interactions
- **Hover and click events** to reveal detailed outbreak metadata

### 🌳 Phylogenetic Tree Visualization
- Fully **D3.js-powered** trees with interactive zoom and pan
- Track mutations and lineage relationships across datasets
- Supports multiple tree layout algorithms (radial, rectangular, circular)
- Real-time updates from NCBI and Nextstrain APIs
- Highlights selected nodes and branches with detailed metadata

### 📊 Comprehensive Dashboard
- Overview of **active outbreaks** globally and regionally
- **Trending mutations** and variant monitoring
- **Hotspot identification** based on prevalence and transmission metrics
- **Data freshness indicators** for transparency on update frequency
- **Responsive design** for desktop and mobile use

### 🔍 Advanced Search & Filtering
- **Full-text search** across pathogen genomes and metadata
- Filter by **geography** (country, region, or coordinates)
- Filter by **temporal range** with flexible date selection
- Mutation-specific search and filtering for targeted analysis

### 📤 Data Contribution Platform
- **Researcher upload interface** supporting CSV, JSON, FASTA, Newick, and phyloXML
- Automated **data validation** and quality checks
- Collaborative review workflow for curating and approving new datasets
- Version-controlled dataset management for reproducibility

---

## 🚀 Live Demo

🌐 **[Try EvoMap Live Demo](https://evomap-pqsmqim0i-john-adedejis-projects.vercel.app/)** – fully interactive platform in your browser.

### Interface Preview

*Screenshots in `/docs/screenshots/`:*

- `main-interface.png` – Dashboard overview with map and analytics
- `global-map.png` – Interactive global outbreak map
- `phylogenetic-tree.png` – Detailed evolutionary tree viewer
- `data-import.png` – Data contribution interface

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 14+** – App Router, SSR, and client-side React
- **TypeScript 5+** – Type-safe and maintainable code
- **TailwindCSS 3+** – Utility-first responsive styling
- **D3.js** – Advanced phylogenetic tree visualizations
- **Leaflet** – Interactive, mobile-friendly mapping
- **Plotly.js** – Interactive scientific and statistical charts

### Backend & Data
- **MongoDB Atlas** – Cloud-hosted genomic data storage
- **Nextstrain API** – Real-time phylogenetic datasets
- **NCBI GenBank & Virus** – Public genomic data
- **Vercel** – Deployment, hosting, and CI/CD

### State Management & Utilities
- **Zustand** – Lightweight global state management
- **SWR** – Stale-While-Revalidate data fetching and caching
- **BioPython** – Genomic data processing for local utilities

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap

# Install dependencies
npm install

# Copy example environment variables
cp .env.example .env.local

# Run development server
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

```env
# Map Services
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
# OR OpenStreetMap (no token required)

# Database
MONGODB_URI=your_mongodb_connection_string

# External APIs
NCBI_API_KEY=your_ncbi_api_key
NEXTSTRAIN_API_URL=https://nextstrain.org/charon/getDataset

# Development flags
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_ANALYTICS=false
```

---

## 📁 Project Structure

```
EvoMap/
├── src/
│   ├── app/
│   │   ├── map/                    # Interactive map pages
│   │   ├── dashboard/              # Analytics dashboards
│   │   ├── tree/                   # Phylogenetic tree viewer
│   │   └── api/                    # API routes
│   ├── components/
│   │   ├── maps/                   # Map components
│   │   ├── charts/                 # Chart components
│   │   ├── dashboard/              # Dashboard widgets
│   │   ├── trees/                  # Tree visualization components
│   │   └── ui/                     # Base UI elements
│   ├── lib/
│   │   ├── data/                    # Mock & real data handling
│   │   ├── algorithms/              # Tree layout algorithms
│   │   ├── parsers/                 # Data parsers (Newick, phyloXML, JSON)
│   │   ├── utils/                   # Helper functions
│   │   └── types.ts                 # TypeScript type definitions
│   └── hooks/                        # Custom React hooks
├── public/
│   ├── data/                        # Static datasets
│   └── datasets/                     # Demo phylogenetic data
├── docs/
│   ├── screenshots/                 # Interface screenshots
│   ├── api/                         # API documentation
│   └── examples/                    # Usage examples
└── tests/                             # Unit and integration tests
```

---

## 🧪 Development Workflow

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build production version
npm run start        # Run production server
npm test             # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:a11y    # Run accessibility tests
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
npm run format       # Format code
npm run analyze      # Analyze bundle size
```

### Code Quality

```bash
npm run lint:fix    # Lint & fix
npm run format      # Format all files
npm run type-check  # Check types
npm run check-all   # Run all validations
```

### Testing

```bash
npm test
npm run test:coverage
npm run test:watch
```

---

## 🧬 Supported Data Formats

### Newick Format

```
((Human:0.006,Chimp:0.006):0.012,Gorilla:0.018);
```

### phyloXML Format

```xml
<phyloxml>
  <phylogeny rooted="true">
    <clade>
      <name>Primates</name>
      <clade>
        <name>Human</name>
        <branch_length>0.006</branch_length>
      </clade>
    </clade>
  </phylogeny>
</phyloxml>
```

### JSON Format

```json
{
  "name": "root",
  "children": [
    { "name": "Human", "branch_length": 0.006 }
  ]
}
```

---

## 🗺️ Roadmap

### Phase 1: Foundation (✅ Current)

* Interactive global outbreak map
* Basic phylogenetic tree visualization
* Responsive dashboards
* Search and filtering functionality
* Mobile-first design
* Multiple tree layout algorithms

### Phase 2: Enhanced Features (🚧 In Progress)

* Real-time data synchronization
* Advanced analytics and predictions
* Data export (PDF, CSV, SVG)
* User authentication and personalization
* Offline PWA capabilities
* Collaborative features

### Phase 3: Advanced Platform (🔮 Planned)

* ML-powered outbreak predictions
* Public API
* Multi-language support
* Advanced collaboration tools
* Mobile native apps
* Real-time collaborative editing

## 🤝 Contributing

We welcome contributions from researchers, developers, and public health professionals! Join our mission to democratize pathogen evolution data visualization.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/) specification
- Use [TypeScript best practices](https://www.typescriptlang.org/docs/)
- Add comprehensive tests for new features
- Update documentation as needed
- Ensure mobile responsiveness and accessibility
- Maintain high code coverage (90%+)

### Areas We Need Help

- **🧬 Bioinformatics expertise** for data validation and algorithms
- **🎨 UI/UX design** for improved accessibility and user experience
- **⚡ Performance optimization** for large genomic datasets
- **📚 Documentation** and educational content creation
- **🧪 Testing** and quality assurance
- **🌍 Internationalization** for global accessibility
- **📱 Mobile development** and touch interactions
- **🔒 Security** and data privacy compliance

---

## 📊 Data Sources

EvoMap integrates with leading genomic and epidemiological databases to provide comprehensive pathogen evolution tracking:

- **[Nextstrain](https://nextstrain.org/)** - Real-time pathogen evolution tracking
- **[NCBI Virus](https://www.ncbi.nlm.nih.gov/labs/virus/)** - Comprehensive viral genome database
- **[GISAID](https://gisaid.org/)** - Global genomic data sharing platform
- **[WHO Disease Outbreaks](https://www.who.int/emergencies/disease-outbreak-news)** - Global outbreak monitoring
- **[Our World in Data](https://ourworldindata.org/)** - Epidemiological statistics
- **[CDC](https://www.cdc.gov/)** - Public health surveillance data

---

## 🔧 Configuration

### Environment Variables

```bash
# Required
MONGODB_URI=mongodb://localhost:27017/evomap
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Optional - Map Services
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Optional - External APIs
NCBI_API_KEY=your_ncbi_api_key
GISAID_API_KEY=your_gisaid_api_key

# Development
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_ANALYTICS=false
NODE_ENV=development
```

### Build Configuration

- TypeScript strict mode enabled
- ESLint with accessibility and security rules
- Prettier for consistent code formatting
- Bundle optimization and tree shaking
- Progressive Web App capabilities
- Service worker for offline functionality

---

## 🎯 Use Cases

### Research Applications
- **Phylogenetic Analysis**: Visualize evolutionary relationships between pathogen strains
- **Outbreak Investigation**: Track pathogen spread and mutation patterns
- **Comparative Genomics**: Compare viral and bacterial strains across regions
- **Publication Figures**: Generate publication-ready visualizations and exports

### Educational Applications
- **Teaching Evolution**: Interactive demonstrations for students and educators
- **Public Health Training**: Outbreak response simulation and case studies
- **Data Literacy**: Learn to interpret genomic and epidemiological data
- **Curriculum Development**: Educational resource creation for institutions

### Public Health Applications
- **Surveillance**: Real-time outbreak monitoring and alert systems
- **Decision Support**: Evidence-based policy making and resource allocation
- **Risk Assessment**: Evaluate outbreak severity and transmission patterns
- **Communication**: Public-facing outbreak dashboards and reports

---

## 🏆 Recognition

EvoMap builds upon the excellent work of similar platforms in the phylogeographic visualization space:

- **[EvoLaps](https://evolaps.org/)** - Continuous phylogeographic reconstructions
- **[Nextstrain](https://nextstrain.org/)** - Real-time pathogen evolution tracking
- **[Empress](https://github.com/biocore/empress)** - Interactive phylogenetic tree viewer
- **[ggtree](https://guangchuangyu.github.io/ggtree/)** - Grammar of graphics for tree visualization in R

EvoMap focuses specifically on democratizing access through user-friendly design and real-time outbreak tracking capabilities.

---

## 🔄 Version History

- **v0.1.0** (Current) - Initial development with core visualization components
- **v0.2.0** (Next) - Enhanced data import and tree algorithms
- **v1.0.0** (Planned Q3 2025) - MVP release with full map integration and dashboard
- **v2.0.0** (Planned Q1 2026) - Advanced analytics and machine learning integration

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Nextstrain team](https://nextstrain.org/team)** for pioneering real-time pathogen tracking
- **[NCBI](https://www.ncbi.nlm.nih.gov/)** for providing open access to genomic data
- **[D3.js community](https://d3js.org/)** for powerful visualization primitives
- **[React](https://reactjs.org/) and [Next.js](https://nextjs.org/)** teams for excellent development frameworks
- **Research community** worldwide for open data sharing and collaboration
- **Public health organizations** for outbreak surveillance and data transparency

---

## 📞 Contact & Support

### Community
- **💬 Discussions**: [GitHub Discussions](https://github.com/Jonahnki/EvoMap/discussions)
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/Jonahnki/EvoMap/issues)
- **💡 Feature Requests**: [GitHub Issues](https://github.com/Jonahnki/EvoMap/issues/new?template=feature_request.md)

### Direct Contact
- **📧 General**: [evomap.project@gmail.com](mailto:evomap.project@gmail.com)
- **🔒 Security**: [security@evomap.project](mailto:security@evomap.project)
- **📊 Research Partnerships**: [research@evomap.project](mailto:research@evomap.project)

### Social Media
- **🐦 Twitter**: [@EvoMapProject](https://twitter.com/EvoMapProject)
- **💼 LinkedIn**: [EvoMap Project](https://linkedin.com/company/evomap-project)
- **📺 YouTube**: [EvoMap Tutorials](https://youtube.com/c/EvoMapProject)

---

<div align="center">

**Built with ❤️ for global health and open science**

*Making pathogen evolution data accessible to everyone, everywhere.*

---

**[⭐ Star this repository](https://github.com/Jonahnki/EvoMap)** if you find EvoMap useful for your research or public health work!

[![GitHub Stars](https://img.shields.io/github/stars/Jonahnki/EvoMap?style=for-the-badge&logo=github)](https://github.com/Jonahnki/EvoMap/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Jonahnki/EvoMap?style=for-the-badge&logo=github)](https://github.com/Jonahnki/EvoMap/network)
[![GitHub Contributors](https://img.shields.io/github/contributors/Jonahnki/EvoMap?style=for-the-badge&logo=github)](https://github.com/Jonahnki/EvoMap/graphs/contributors)

</div>
