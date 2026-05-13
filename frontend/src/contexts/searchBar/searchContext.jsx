import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const SearchBarContext = createContext(undefined);

const initialSearchBarState = {
  searchQuery: "",
  selectedSymbol: "",
};

const SearchBarProvider = React.memo(function SearchBarProvider({ children }) {
  const [searchBarState, setSearchBarState] = useState(initialSearchBarState);

  const handleSearchQueryChange = useCallback((query) => {
    setSearchBarState((prevState) => ({ ...prevState, searchQuery: query }));
  }, []);

  const handleSymbolChange = useCallback((symbol) => {
    setSearchBarState((prevState) => ({
      ...prevState,
      selectedSymbol: symbol,
    }));
  }, []);

  const value = useMemo(
    () => ({ searchBarState, handleSearchQueryChange, handleSymbolChange }),
    [searchBarState, handleSearchQueryChange, handleSymbolChange]
  );

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
});

const useSearchBar = () => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error("useSearchBar must be used within a SearchBarProvider");
  }
  return context;
};
export { SearchBarProvider, useSearchBar };
