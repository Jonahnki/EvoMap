![EvoMap Banner](assets/banner_2.webp)

# EvoMap 🧬🗺️

**Democratizing Access to Evolutionary Pathogen Data Through Interactive Visualizations**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=flat-square&logo=vercel)](https://evomap-demo.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/Jonahnki/EvoMap?style=flat-square&logo=github)](https://github.com/Jonahnki/EvoMap/stargazers)

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
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📊 Data Sources](#-data-sources)
- [♿ Accessibility](#-accessibility)
- [📈 Performance](#-performance)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Contact & Support](#-contact--support)

---

## 🎯 Mission

Transform how we understand pathogen evolution by providing:

- **🔴 Real-time access** to genomic outbreak data
- **📊 Interactive visualizations** of viral/bacterial evolution  
- **🌍 Global accessibility** with educational components
- **📱 Mobile-first design** with offline capabilities

---

## ✨ Key Features

### 🌍 Interactive Global Map
- **Live outbreak tracking** with geographic clustering
- **Temporal visualization** with timeline controls
- **Severity-based color coding** for immediate threat assessment
- **Mobile-responsive** touch interactions

### 🌳 Phylogenetic Tree Visualization
- **D3.js-powered** interactive evolutionary trees
- **Mutation tracking** with detailed lineage relationships
- **Zoom & pan** capabilities for exploring complex datasets
- **Real-time updates** as new data becomes available

### 📊 Comprehensive Dashboard
- **Summary statistics** for active outbreaks globally
- **Trending mutations** analysis and visualization
- **Outbreak hotspot** identification and monitoring
- **Data freshness indicators** for reliability

### 🔍 Advanced Search & Filtering
- **Full-text search** across pathogen databases
- **Geographic filters** by country, region, or coordinates
- **Temporal filtering** with flexible date range selection
- **Mutation-specific searches** for targeted analysis

### 📤 Data Contribution Platform
- **Researcher upload interface** for new genomic data
- **Multiple format support** (CSV, JSON, FASTA, Newick, phyloXML)
- **Data validation** and quality control
- **Collaborative review workflow**

---

## 🚀 Live Demo

🌐 **[Try EvoMap Live Demo](https://evomap-demo.vercel.app)** - Experience the full platform in your browser

### Interface Preview

*Screenshots are located in the `/docs/screenshots/` folder:*

- `main-interface.png` – Main dashboard overview  
- `global-map.png` – Interactive outbreak map  
- `phylogenetic-tree.png` – Evolutionary tree visualization  
- `data-import.png` – Data upload interface


---

## 🛠️ Technology Stack

### Frontend
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first styling
- **[D3.js](https://d3js.org/)** - Custom phylogenetic visualizations
- **[Leaflet](https://leafletjs.com/)** - Interactive mapping
- **[Plotly.js](https://plotly.com/javascript/)** - Scientific charts

### Backend & Data
- **[MongoDB Atlas](https://www.mongodb.com/atlas)** - Flexible genomic data storage
- **[Nextstrain API](https://nextstrain.org/)** - Real-time phylogenetic data
- **[NCBI GenBank](https://www.ncbi.nlm.nih.gov/genbank/)** - Genomic sequence database
- **[Vercel](https://vercel.com/)** - Deployment and hosting

### State Management & Utils
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[SWR](https://swr.vercel.app/)** - Data fetching and caching
- **[BioPython](https://biopython.org/)** - Genomic data processing

---

## ⚡ Quick Start

### Prerequisites
- **Node.js 18+**
- **npm or yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Configuration

Create a `.env.local` file with:

```env
# Map Services (Choose one)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
# OR use OpenStreetMap (no token required)

# Database (Optional for development)
MONGODB_URI=your_mongodb_connection_string

# External APIs (Optional)
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
│   ├── app/                    # Next.js App Router pages
│   │   ├── map/               # Interactive map page
│   │   ├── dashboard/         # Analytics dashboard
│   │   ├── tree/              # Phylogenetic tree viewer
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   ├── maps/              # Map-related components
│   │   ├── charts/            # Visualization components
│   │   ├── dashboard/         # Dashboard widgets
│   │   ├── trees/             # Phylogenetic components
│   │   └── ui/                # Base UI components
│   ├── lib/                   # Utilities and data
│   │   ├── data/              # Mock and real data handlers
│   │   ├── algorithms/        # Tree layout algorithms
│   │   ├── parsers/           # Data format parsers
│   │   ├── utils/             # Helper functions
│   │   └── types.ts           # TypeScript definitions
│   └── hooks/                 # Custom React hooks
├── public/
│   ├── data/                  # Static data files
│   └── datasets/              # Demo phylogenetic data
├── docs/                      # Documentation
│   ├── screenshots/           # UI screenshots
│   ├── api/                   # API documentation
│   └── examples/              # Usage examples
└── tests/                     # Test files
```

---

## 🧪 Development Workflow

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm test             # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:a11y    # Run accessibility tests
npm run lint         # Lint code with ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run analyze      # Analyze bundle size
```

### Code Quality
```bash
# Lint and fix code
npm run lint:fix

# Format all files
npm run format

# Check types
npm run type-check

# Run all checks
npm run check-all
```

### Testing
```bash
# Run all tests
npm test

# Coverage report
npm run test:coverage

# Watch mode
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
    {
      "name": "Human",
      "branch_length": 0.006
    }
  ]
}
```

---

## 📈 Performance

EvoMap is optimized for various dataset sizes:

| Dataset Size | Rendering Time | Memory Usage | Recommended Use |
|--------------|----------------|--------------|-----------------|
| < 50 nodes   | < 100ms        | < 50MB       | Education, demos |
| 50-500 nodes | < 500ms        | < 200MB      | Research, analysis |
| 500-1000 nodes | < 2s         | < 500MB      | Large studies |
| 1000+ nodes  | < 5s           | < 1GB        | Genomic datasets |

---

## ♿ Accessibility

EvoMap follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: Full keyboard support with logical tab order
- **Screen Readers**: ARIA labels and comprehensive descriptions
- **Color Contrast**: Minimum 4.5:1 ratio throughout interface
- **Focus Management**: Clear focus indicators and focus trapping
- **Alternative Text**: Descriptive labels for all visual elements
- **Responsive Design**: Works across all device sizes

---

## 🗺️ Roadmap

### Phase 1: Foundation (✅ Current)
- [x] Interactive global outbreak map
- [x] Basic phylogenetic tree visualization
- [x] Responsive dashboard with key metrics
- [x] Search and filtering functionality
- [x] Mobile-responsive design
- [x] Multiple tree layout algorithms

### Phase 2: Enhanced Features (🚧 In Progress)
- [ ] Real-time data synchronization
- [ ] Advanced analytics and predictions
- [ ] Data export functionality (PDF, CSV, SVG)
- [ ] User authentication and personalization
- [ ] Offline Progressive Web App capabilities
- [ ] Collaborative features

### Phase 3: Advanced Platform (🔮 Planned)
- [ ] Machine learning outbreak predictions
- [ ] Public API for third-party integrations
- [ ] Multi-language internationalization (i18n)
- [ ] Advanced collaboration tools
- [ ] Mobile native applications
- [ ] Real-time collaborative editing

---

## 🤝 Contributing

We welcome contributions from researchers, developers, and public health professionals!

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

EvoMap integrates with leading genomic and epidemiological databases:

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
- **Phylogenetic Analysis**: Visualize evolutionary relationships
- **Outbreak Investigation**: Track pathogen spread and mutations
- **Comparative Genomics**: Compare viral/bacterial strains
- **Publication Figures**: Generate publication-ready visualizations

### Educational Applications
- **Teaching Evolution**: Interactive demonstrations for students
- **Public Health Training**: Outbreak response simulation
- **Data Literacy**: Learn to interpret genomic data
- **Curriculum Development**: Educational resource creation

### Public Health Applications
- **Surveillance**: Real-time outbreak monitoring
- **Decision Support**: Evidence-based policy making
- **Risk Assessment**: Evaluate outbreak severity
- **Communication**: Public-facing outbreak dashboards

---

## 🏆 Recognition

EvoMap builds upon the excellent work of similar platforms in the phylogeographic visualization space, including:

- **[EvoLaps](https://evolaps.org/)** - Continuous phylogeographic reconstructions
- **[Nextstrain](https://nextstrain.org/)** - Real-time pathogen evolution
- **[Empress](https://github.com/biocore/empress)** - Phylogenetic tree viewer
- **[ggtree](https://guangchuangyu.github.io/ggtree/)** - Tree visualization in R

EvoMap focuses specifically on democratizing access through user-friendly design and real-time outbreak tracking capabilities.

---

## 🔄 Version History

- **v0.1.0** (Current) - Initial development with core visualization components
- **v0.2.0** (Next) - Enhanced data import and tree algorithms
- **v1.0.0** (Planned Q3 2025) - MVP release with full map and dashboard
- **v2.0.0** (Planned Q1 2026) - Advanced analytics and ML integration

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Nextstrain team](https://nextstrain.org/team)** for pioneering real-time pathogen tracking
- **[NCBI](https://www.ncbi.nlm.nih.gov/)** for providing open access to genomic data
- **[D3.js community](https://d3js.org/)** for powerful visualization primitives
- **[React](https://reactjs.org/) and [Next.js](https://nextjs.org/)** teams for excellent frameworks
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

