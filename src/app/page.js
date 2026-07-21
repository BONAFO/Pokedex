"use client";

import PokedexContainer from "@/src/containers/PokedexContainer";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { PokemonSearchProvider } from "@/src/contexts/PokemonSearchContext";
import { ScreenProvider } from "@/src/contexts/ScreenContext";

export default function Home() {

  return (
    <div>
      <ScreenProvider>
        <PokemonSearchProvider>
          <AuthProvider>
            <PokedexContainer />;
          </AuthProvider>
        </PokemonSearchProvider>
      </ScreenProvider>
    </div>
  )

}