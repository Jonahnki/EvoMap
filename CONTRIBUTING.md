# Contributing to EvoMap

## 🌟 Quick Start for Contributors
```bash
git clone https://github.com/Jonahnki/EvoMap.git
cd EvoMap
npm install
npm run dev
# Open http://localhost:3000
```

## 🐛 Reporting Bugs
Use our issue templates and include:
- Browser version and OS
- Dataset size (number of species)
- Steps to reproduce
- Expected vs actual behavior

## 🎨 Contributing Code  
- Fork the repository
- Create feature branch: `git checkout -b feature/amazing-feature`
- Follow existing code style (ESLint + Prettier)
- Add tests for new functionality
- Update documentation as needed
- Submit pull request with clear description

## 🧬 Project Structure
- `/src/components/` - React components for tree visualization
- `/src/algorithms/` - Tree layout and analysis algorithms  
- `/src/data/` - Sample datasets and data processing
- `/src/types/` - TypeScript type definitions
- `/public/datasets/` - Demo phylogenetic data files

## 🔬 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write descriptive variable and function names
- Add JSDoc comments for public APIs

### Testing
- Write unit tests for algorithms and utilities
- Add integration tests for React components
- Include accessibility tests for UI changes
- Test with various dataset sizes (small: <50 nodes, medium: 50-500 nodes, large: 500+ nodes)

### Performance Considerations
- Optimize for trees with 1000+ nodes
- Use React.memo and useMemo for expensive computations
- Implement virtualization for large datasets
- Profile rendering performance with browser dev tools

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Add ARIA labels and descriptions
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## 🚀 Getting Started with Development

### Prerequisites
- Node.js 16+ and npm
- Modern browser with ES6+ support
- Basic understanding of React and TypeScript

### First Contribution
1. Look for issues labeled `good first issue` or `help wanted`
2. Comment on the issue to express interest
3. Fork and create your feature branch
4. Make your changes following the guidelines above
5. Test thoroughly with demo datasets
6. Submit a pull request

## 📚 Useful Resources
- [Phylogenetic Tree Formats](https://en.wikipedia.org/wiki/Newick_format)
- [D3.js Tree Layouts](https://observablehq.com/@d3/tree)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💬 Community
- Use GitHub Discussions for questions and ideas
- Join our Discord server for real-time chat
- Follow our Twitter for updates

Thank you for contributing to EvoMap! 🌳
