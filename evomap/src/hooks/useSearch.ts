import { useState, useCallback } from 'react';
import { SearchQuery, PathogenData, OutbreakData } from '../lib/types';
import { allPathogenData, outbreakData } from '../lib/data/mockData';

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<(PathogenData | OutbreakData)[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback(async (query: SearchQuery) => {
    setIsSearching(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const { text, filters } = query;
      const lowerText = text.toLowerCase();
      
      // Search in pathogen data
      const pathogenResults = allPathogenData.filter(pathogen => 
        pathogen.name.toLowerCase().includes(lowerText) ||
        pathogen.lineage.toLowerCase().includes(lowerText) ||
        pathogen.mutations.some(mutation => 
          mutation.toLowerCase().includes(lowerText)
        ) ||
        pathogen.location.country.toLowerCase().includes(lowerText)
      );
      
      // Search in outbreak data
      const outbreakResults = outbreakData.filter(outbreak =>
        outbreak.pathogen.toLowerCase().includes(lowerText) ||
        outbreak.location.country.toLowerCase().includes(lowerText)
      );
      
      // Apply filters
      const filteredPathogens = pathogenResults.filter(pathogen => {
        if (filters.countries.length > 0 && 
            !filters.countries.includes(pathogen.location.country)) {
          return false;
        }
        if (filters.pathogens.length > 0 && 
            !filters.pathogens.includes(pathogen.name)) {
          return false;
        }
        if (filters.mutations.length > 0 && 
            !filters.mutations.some(m => pathogen.mutations.includes(m))) {
          return false;
        }
        return true;
      });
      
      const filteredOutbreaks = outbreakResults.filter(outbreak => {
        if (filters.countries.length > 0 && 
            !filters.countries.includes(outbreak.location.country)) {
          return false;
        }
        if (filters.pathogens.length > 0 && 
            !filters.pathogens.includes(outbreak.pathogen)) {
          return false;
        }
        if (filters.severity.length > 0 && 
            !filters.severity.includes(outbreak.severity)) {
          return false;
        }
        return true;
      });
      
      setSearchResults([...filteredPathogens, ...filteredOutbreaks]);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchResults([]);
  }, []);

  return {
    searchResults,
    isSearching,
    search,
    clearSearch
  };
};