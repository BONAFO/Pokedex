"use client";

import { usePokemonSearch } from "@/src/contexts/PokemonSearchContext";

export default function PokedexSearch() {
  const { search, searchPokemon, resetSearch } = usePokemonSearch();

  return (
    <div
      className="
                flex
                w-full
                flex-col
                gap-3
                sm:flex-row
            "
    >
      <input
        type="text"
        value={search}
        onChange={(e) => searchPokemon(e.target.value)}
        placeholder="Buscar por nombre o #ID..."
        className="
                    w-full
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-950
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-neutral-500
                    focus:border-red-500
                "
      />

      {search && (
        <button
          onClick={resetSearch}
          className="
                            rounded-xl
                            border
                            border-neutral-800
                            bg-neutral-900
                            px-5
                            py-3
                            text-neutral-300
                            transition
                            hover:border-red-500
                            hover:text-white
                        "
        >
          Limpiar
        </button>
      )}
    </div>
  );
}
