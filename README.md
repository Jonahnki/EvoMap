# EvoMap 🧬🗺️

**Democratizing Access to Evolutionary Pathogen Data Through Interactive Visualizations**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **EvoMap** is a cutting-edge web platform that makes evolutionary viral and bacterial outbreak data accessible to researchers, policymakers, and the general public through intuitive interactive visualizations and open dashboards.

## 🎯 Mission

Transform how we understand pathogen evolution by providing:
- **Real-time access** to genomic outbreak data
- **Interactive visualizations** of viral/bacterial evolution
- **Global accessibility** with educational components
- **Mobile-first design** with offline capabilities

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
- **Multiple format support** (CSV, JSON, FASTA)
- **Data validation** and quality control
- **Collaborative review workflow**

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

## 🚀 Quick Start

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
```

## 📁 Project Structure

```
EvoMap/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── map/               # Interactive map page
│   │   ├── dashboard/         # Analytics dashboard
│   │   └── api/               # API routes
│   ├── components/            # Reusable components
│   │   ├── maps/              # Map-related components
│   │   ├── charts/            # Visualization components
│   │   ├── dashboard/         # Dashboard widgets
│   │   └── ui/                # Base UI components
│   ├── lib/                   # Utilities and data
│   │   ├── data/              # Mock and real data handlers
│   │   ├── utils/             # Helper functions
│   │   └── types.ts           # TypeScript definitions
│   └── hooks/                 # Custom React hooks
├── public/
│   └── data/                  # Static data files
└── docs/                      # Documentation
```

## 🧪 Development Workflow

### Running Tests
```bash
# Run unit tests
npm test

# Run end-to-end tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

### Building for Production
```bash
# Build application
npm run build

# Start production server
npm start
```

## 🗺️ Roadmap

### Phase 1: Foundation (✅ Current)
- [x] Interactive global outbreak map
- [x] Basic phylogenetic tree visualization
- [x] Responsive dashboard with key metrics
- [x] Search and filtering functionality
- [x] Mobile-responsive design

### Phase 2: Enhanced Features (🚧 In Progress)
- [ ] Real-time data synchronization
- [ ] Advanced analytics and predictions
- [ ] Data export functionality (PDF, CSV)
- [ ] User authentication and personalization
- [ ] Offline Progressive Web App capabilities

### Phase 3: Advanced Platform (🔮 Planned)
- [ ] Machine learning outbreak predictions
- [ ] Public API for third-party integrations
- [ ] Multi-language internationalization
- [ ] Advanced collaboration tools
- [ ] Mobile native applications

## 🤝 Contributing

We welcome contributions from researchers, developers, and public health professionals!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow [TypeScript best practices](https://www.typescriptlang.org/docs/)
- Use [Conventional Commits](https://www.conventionalcommits.org/)
- Add tests for new features
- Update documentation as needed
- Ensure mobile responsiveness

### Areas We Need Help

- **🧬 Bioinformatics expertise** for data validation
- **🎨 UI/UX design** for improved accessibility
- **⚡ Performance optimization** for large datasets
- **📚 Documentation** and educational content
- **🧪 Testing** and quality assurance
- **🌍 Internationalization** for global accessibility

## 📊 Data Sources

EvoMap integrates with leading genomic and epidemiological databases:

- **[Nextstrain](https://nextstrain.org/)** - Real-time pathogen evolution tracking
- **[NCBI Virus](https://www.ncbi.nlm.nih.gov/labs/virus/)** - Comprehensive viral genome database
- **[GISAID](https://gisaid.org/)** - Global genomic data sharing platform
- **[WHO Disease Outbreaks](https://www.who.int/emergencies/disease-outbreak-news)** - Global outbreak monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Nextstrain team](https://nextstrain.org/team)** for pioneering real-time pathogen tracking
- **[NCBI](https://www.ncbi.nlm.nih.gov/)** for providing open access to genomic data
- **Research community** worldwide for open data sharing
- **Public health organizations** for outbreak surveillance

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/Jonahnki/EvoMap/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Jonahnki/EvoMap/discussions)
- **Email**: [evomap.project@gmail.com](mailto:evomap.project@gmail.com)
- **Twitter**: [@EvoMapProject](https://twitter.com/EvoMapProject)

---

<div align="center">
  <strong>Built with ❤️ for global health and open science</strong><br>
  <em>Making pathogen evolution data accessible to everyone, everywhere.</em>
</div>

---

## 🏆 Recognition

EvoMap aims to build upon the excellent work of similar platforms in the phylogeographic visualization space, including EvoLaps, a web interface for visualizing continuous phylogeographic reconstructions, while focusing specifically on democratizing access through user-friendly design and real-time outbreak tracking capabilities.

## 🔄 Version History

- **v0.1.0** (Current) - Initial development setup with core components
- **v1.0.0** (Planned) - MVP release with full map and dashboard functionality
- **v2.0.0** (Future) - Advanced analytics and machine learning integration

---

**[⭐ Star this repository](https://github.com/Jonahnki/EvoMap)** if you find EvoMap useful for your research or public health work!
