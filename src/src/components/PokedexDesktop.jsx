"use client";

import { usePokemonSearch } from "@/src/contexts/PokemonSearchContext";
import { useAuth } from "@/src/contexts/AuthContext";
import PokedexSearch from "./PokedexSearch";

export default function PokedexDesktop() {
  const { displayedPokemon } = usePokemonSearch();

  const { isLoggedIn } = useAuth();

  return (
    <>
    <PokedexSearch/>
    <div className="overflow-hidden rounded-2xl border border-neutral-800">
      <table className="min-w-full divide-y divide-neutral-800">
        <thead className="bg-neutral-900">
          <tr>
            <th className="px-4 py-3 w-32">Capturado</th>

            <th className="px-4 py-3 w-24">ID</th>

            <th className="px-4 py-3 w-28">Imagen</th>

            <th className="px-4 py-3 w-48">Nombre</th>

            <th className="px-4 py-3 min-w-[420px]">Cómo se obtiene</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
          {displayedPokemon.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-10 text-center text-neutral-400">
                No se encontraron Pokémon
              </td>
            </tr>
          ) : (
            displayedPokemon.map((pokemon) => (
              <tr
                key={pokemon.id}
                className="
                                    hover:bg-neutral-900
                                    transition-colors
                                "
              >
                <td className="px-4 py-3 text-center">
                  {isLoggedIn && (
                    <button
                      className="
                                                    rounded-lg
                                                    border
                                                    border-neutral-700
                                                    px-3
                                                    py-1
                                                    text-sm
                                                    hover:border-green-500
                                                    hover:text-green-400
                                                "
                    >
                      ✓
                    </button>
                  )}
                </td>

                <td className="px-4 py-3 font-mono">{pokemon.id}</td>

                <td className="px-4 py-3">
                  <img
                    src={pokemon.img}
                    alt={pokemon.name}
                    loading="lazy"
                    className="h-16 w-16 object-contain"
                  />
                </td>

                <td className="px-4 py-3 font-semibold">{pokemon.name}</td>

                <td className="px-4 py-3">
                  <div className="flex flex-col gap-3">
                    {pokemon.get.map(([game, methods], index) => (
                      <div
                        key={index}
                        className="
                                                        grid
                                                        grid-cols-[120px_1fr]
                                                        gap-3
                                                    "
                      >
                        <span className="font-semibold text-red-400">
                          {game.join(", ")}
                        </span>

                        <span className="text-neutral-300">
                          {methods.join(" • ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}
