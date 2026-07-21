"use client";

import pokedex from "@/pokedex";
import { createContext, useContext, useState } from "react";
const pokedexData = pokedex;
const PokemonSearchContext = createContext();

export function PokemonSearchProvider({ children }) {
  const [pokedex] = useState(() => [...pokedexData]);

  const [displayedPokemon, setDisplayedPokemon] = useState(() => [
    ...pokedexData,
  ]);

  const [search, setSearch] = useState("");

  const resetSearch = () => {
    setSearch("");
    setDisplayedPokemon([...pokedex]);
  };

  const searchPokemon = (value) => {
    setSearch(value);

    const text = value.trim();

    if (!text) {
      resetSearch();
      return;
    }

    const idSearch = text.replace("#", "");

    if (!isNaN(idSearch)) {
      const formattedId = "#" + idSearch.padStart(4, "0");

      setDisplayedPokemon(
        pokedex.filter((pokemon) => pokemon.id === formattedId),
      );

      return;
    }

    setDisplayedPokemon(
      pokedex.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <PokemonSearchContext.Provider
      value={{
        pokedex,
        displayedPokemon,
        search,
        searchPokemon,
        resetSearch,
      }}
    >
      {children}
    </PokemonSearchContext.Provider>
  );
}

export function usePokemonSearch() {
  return useContext(PokemonSearchContext);
}
