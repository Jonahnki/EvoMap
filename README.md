# EvoMap 🌳

Interactive evolutionary tree visualization web application built with modern JavaScript/TypeScript.

## 👀 Live Demo & Screenshots

🚀 **[Try EvoMap Live Demo](https://evomap-demo.vercel.app)** - Interactive phylogenetic visualization in your browser

### Interface Preview
| Feature | Screenshot |
|---------|------------|
| **Main Interface** | ![Main Interface](./docs/screenshots/main-interface.png) |
| **Radial Tree Layout** | ![Radial Layout](./docs/screenshots/radial-layout.png) |
| **Data Import Dialog** | ![Import Dialog](./docs/screenshots/import-dialog.png) |

## ✨ Key Features
- 🌳 Multiple tree layout algorithms (rectangular, radial, circular)
- 📊 Interactive node exploration with species information
- 💾 Import/export support (Newick, phyloXML formats)
- 🎨 Customizable styling and color schemes
- 📱 Responsive design for desktop and mobile
- ♿ Accessibility features with keyboard navigation
- ⚡ Optimized for large datasets (1000+ nodes)
- 🔍 Species search and filtering capabilities
- 📈 Real-time performance monitoring
- 🧪 Built-in demo datasets for education

## 🚀 Quick Start

### Try Online
Visit [EvoMap Demo](https://evomap-demo.vercel.app) with pre-loaded sample datasets.

### Run Locally
```bash
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap
npm install
npm start
# Open http://localhost:3000
```

### Load Your Own Data
1. Prepare phylogenetic data in Newick or phyloXML format
2. Click "Import Tree" in the interface
3. Upload your file or paste tree data directly
4. Explore with different layout options and styling

## 📋 System Requirements

- **Node.js**: 16.0 or higher
- **Browser**: Modern browsers with ES6+ support
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
- **Memory**: 4GB RAM recommended for large datasets (1000+ nodes)

## 🛠️ Development

### Prerequisites
```bash
node --version  # Should be 16+
npm --version   # Should be 8+
```

### Installation
```bash
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap
npm install
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run unit tests
npm run test:a11y    # Run accessibility tests
npm run lint         # Lint code with ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run analyze      # Analyze bundle size
```

### Project Structure
```
EvoMap/
├── src/
│   ├── components/          # React components
│   │   ├── TreeVisualization/
│   │   ├── DataImport/
│   │   └── Controls/
│   ├── algorithms/          # Tree layout algorithms
│   │   ├── rectangular.ts
│   │   ├── radial.ts
│   │   └── circular.ts
│   ├── data/               # Data processing utilities
│   │   ├── mockApi.ts
│   │   └── parsers/
│   ├── types/              # TypeScript definitions
│   └── utils/              # Helper functions
├── public/
│   └── datasets/           # Demo phylogenetic data
├── docs/                   # Documentation
└── tests/                  # Test files
```

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
      </clade>
    </clade>
  </phylogeny>
</phyloxml>
```

## 🎯 Use Cases

### Research
- Visualize phylogenetic relationships
- Compare evolutionary hypotheses
- Analyze large-scale genomic data
- Publication-ready tree figures

### Education
- Teaching evolutionary biology
- Interactive classroom demonstrations
- Student assignments and projects
- Curriculum development

### Data Analysis
- Explore biodiversity patterns
- Identify evolutionary trends
- Compare tree topologies
- Performance benchmarking

## 🚀 Performance

EvoMap is optimized for various dataset sizes:

| Dataset Size | Rendering Time | Memory Usage | Recommended Use |
|--------------|----------------|--------------|-----------------|
| < 50 nodes   | < 100ms        | < 50MB       | Education, demos |
| 50-500 nodes | < 500ms        | < 200MB      | Research, analysis |
| 500-1000 nodes | < 2s         | < 500MB      | Large studies |
| 1000+ nodes  | < 5s           | < 1GB        | Genomic datasets |

## ♿ Accessibility

EvoMap follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and descriptions
- **Color Contrast**: Minimum 4.5:1 ratio
- **Focus Management**: Clear focus indicators
- **Alternative Text**: Descriptive labels for visual elements

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes following our [code style guidelines](CONTRIBUTING.md#code-style)
4. Add tests for new functionality
5. Submit a pull request

### Areas for Contribution
- 🐛 Bug fixes and performance improvements
- ✨ New visualization algorithms
- 📱 Mobile and touch enhancements
- ♿ Accessibility improvements
- 📚 Documentation and tutorials
- 🧪 Test coverage expansion

## 📊 Testing

### Running Tests
```bash
npm test                    # Unit tests
npm run test:a11y          # Accessibility tests
npm run test:performance   # Performance benchmarks
npm run test:integration   # Integration tests
```

### Test Coverage
- Unit tests: 90%+ coverage target
- Integration tests: Key user workflows
- Accessibility tests: WCAG 2.1 AA compliance
- Performance tests: Large dataset benchmarks

## 🔧 Configuration

### Environment Variables
```bash
REACT_APP_API_URL=          # API endpoint (optional)
REACT_APP_DEMO_MODE=true    # Enable demo datasets
REACT_APP_ANALYTICS=false   # Disable analytics in development
```

### Build Configuration
- TypeScript strict mode enabled
- ESLint with accessibility rules
- Prettier for code formatting
- Bundle size optimization
- Tree shaking for smaller builds

## 📈 Roadmap

### Version 2.0 (Planned)
- [ ] Real-time collaborative editing
- [ ] Advanced statistical analysis tools
- [ ] 3D tree visualization
- [ ] Plugin system for custom algorithms
- [ ] Cloud data synchronization

### Version 1.5 (In Progress)
- [ ] Mobile app companion
- [ ] Batch processing capabilities
- [ ] Advanced export options
- [ ] Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [D3.js](https://d3js.org/) for powerful visualization primitives
- [React](https://reactjs.org/) for the component architecture
- [TypeScript](https://www.typescriptlang.org/) for type safety
- The phylogenetics community for inspiration and feedback

## 📞 Support

- 📧 Email: support@evomap.dev
- 💬 Discord: [EvoMap Community](https://discord.gg/evomap)
- 🐛 Issues: [GitHub Issues](https://github.com/Jonahnki/EvoMap/issues)
- 📖 Documentation: [Wiki](https://github.com/Jonahnki/EvoMap/wiki)

---

**Made with ❤️ by the EvoMap team**

Star ⭐ this repository if you find it useful!

# EvoMap
Evomap is a web app that democratizes access to viral and bacterial evolution data through interactive maps, lineage trees, and open dashboards—built for researchers, policymakers, and the public.
