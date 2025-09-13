# EvoMap

**Evolutionary Viral & Bacterial Outbreak Data Platform**

EvoMap democratizes access to evolutionary viral and bacterial outbreak data through interactive visualizations for researchers, policymakers, and the general public.

## 🚀 Project Status

### ✅ Phase 1: Project Foundation - COMPLETED

- [x] Next.js project with TypeScript and Tailwind CSS
- [x] Core dependencies installed (Leaflet, D3, Plotly, Zustand, SWR)
- [x] Project architecture and folder structure
- [x] Core TypeScript interfaces and types
- [x] Mock data generation for COVID-19, Influenza, RSV, and Norovirus
- [x] Zustand state management store
- [x] Custom hooks for data fetching (usePathogens, useOutbreaks, usePhylogeneticData, useSearch)
- [x] API routes for pathogens, outbreaks, phylogenetic data, search, and upload
- [x] Basic dashboard layout with navigation

### 🔄 Phase 2: Core Components - IN PROGRESS

- [ ] Global Map Component (Leaflet + React-Leaflet)
- [ ] Phylogenetic Tree Component (D3.js)
- [ ] Dashboard Component with metrics
- [ ] Search and Filter System

### 📋 Phase 3: Data Layer - COMPLETED

- [x] Mock data generation
- [x] API routes
- [x] Data fetching hooks

### 🔄 Phase 4: Advanced Features - IN PROGRESS

- [x] State management (Zustand)
- [ ] Timeline visualization
- [ ] Data upload interface (placeholder)

### 📋 Phase 5: UI/UX Polish - PENDING

- [ ] Layout and navigation
- [ ] Loading states and error handling
- [ ] Accessibility features

### 📋 Phase 6: Deployment Preparation - PENDING

- [ ] Environment configuration
- [ ] Build optimization
- [ ] Documentation

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: SWR
- **Maps**: Leaflet + React-Leaflet
- **Visualizations**: D3.js, Plotly.js
- **UI Components**: Headless UI, Heroicons, Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── maps/             # Map components
│   ├── charts/           # Chart components
│   ├── dashboard/        # Dashboard components
│   ├── search/           # Search components
│   └── ui/               # UI components
├── lib/                  # Utilities and types
│   ├── data/             # Mock data
│   ├── types.ts          # TypeScript interfaces
│   └── store.ts          # Zustand store
└── hooks/                # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jonahnki/EvoMap.git
cd evomap

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Data Models

### PathogenData

- Unique identifier and name
- Lineage and clade information
- Mutation list
- Geographic location
- Collection and submission dates
- Quality indicators

### OutbreakData

- Outbreak identifier
- Associated pathogen
- Geographic location
- Case count and severity
- Date information

### PhylogeneticNode

- Tree node structure
- Parent-child relationships
- Mutation information
- Branch lengths and dates

## 🔌 API Endpoints

- `GET /api/pathogens` - Fetch pathogen data
- `GET /api/outbreaks` - Fetch outbreak data
- `GET /api/phylogenetic` - Fetch phylogenetic tree data
- `POST /api/search` - Search functionality
- `POST /api/upload` - Data upload (placeholder)

## 🎯 Key Features

### Implemented

- ✅ Project foundation and architecture
- ✅ TypeScript interfaces and type safety
- ✅ Mock data generation
- ✅ State management with Zustand
- ✅ Data fetching hooks with SWR
- ✅ API routes for all data types
- ✅ Basic dashboard layout

### In Progress

- 🔄 Global interactive map
- 🔄 Phylogenetic tree visualization
- 🔄 Advanced search and filtering

### Planned

- 📋 Real-time data updates
- 📋 User authentication
- 📋 Data upload interface
- 📋 Export functionality
- 📋 Machine learning predictions

## 🤝 Contributing

This project is in active development. Please check the issues and pull requests for current development priorities.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository**: https://github.com/Jonahnki/EvoMap
- **Development**: Currently in Phase 1 (Foundation Complete)

---

**Status**: Phase 1 Complete ✅ | Phase 2 In Progress 🔄
