"use client";

import Image from "next/image";

import { usePokemonSearch } from "@/src/contexts/PokemonSearchContext";
import { useAuth } from "@/src/contexts/AuthContext";
import PokedexSearch from "./PokedexSearch";

export default function PokedexMobile() {
  const { displayedPokemon } = usePokemonSearch();

  const { isLoggedIn } = useAuth();

  return (
    <>
    <PokedexSearch/>
      <div className="flex flex-col gap-4">
        {displayedPokemon.length === 0 ? (
          <div
            className="
                            rounded-2xl
                            border
                            border-neutral-800
                            bg-neutral-950
                            p-8
                            text-center
                            text-neutral-400
                        "
          >
            No se encontraron Pokémon
          </div>
        ) : (
          displayedPokemon.map((pokemon) => (
            <article
              key={pokemon.id}
              className="
                            rounded-2xl
                            border
                            border-neutral-800
                            bg-neutral-950
                            p-4
                        "
            >
              {/* Header */}

              <div
                className="
                                flex
                                items-center
                                justify-between
                            "
              >
                <div>
                  <p className="text-sm text-neutral-400">{pokemon.id}</p>

                  <h2
                    className="
                                        text-xl
                                        font-bold
                                        text-white
                                    "
                  >
                    {pokemon.name}
                  </h2>
                </div>

                <Image
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={90}
                  height={90}
                  loading="lazy"
                  className="
                                    object-contain
                                "
                />
              </div>

              {/* Capturado */}

              {isLoggedIn && (
                <button
                  className="
                                        mt-4
                                        w-full
                                        rounded-xl
                                        border
                                        border-neutral-700
                                        bg-neutral-900
                                        py-2
                                        text-sm
                                        text-neutral-200
                                        transition
                                        hover:border-green-500
                                        hover:text-green-400
                                    "
                >
                  Capturado ✓
                </button>
              )}

              {/* Obtención */}

              <div className="mt-5">
                <h3
                  className="
                                    mb-3
                                    text-sm
                                    font-semibold
                                    uppercase
                                    text-red-400
                                "
                >
                  Cómo se obtiene
                </h3>

                <div className="flex flex-col gap-3">
                  {pokemon.get.map(([game, methods], index) => (
                    <div
                      key={index}
                      className="
                                                rounded-xl
                                                bg-neutral-900
                                                p-3
                                            "
                    >
                      <p
                        className="
                                                    font-semibold
                                                    text-white
                                                "
                      >
                        {game.join(", ")}
                      </p>

                      <p
                        className="
                                                    mt-1
                                                    text-sm
                                                    text-neutral-400
                                                "
                      >
                        {methods.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
