"use client";

import LoginButton from "@/src/components/LoginButton";
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
            <LoginButton />
            <PokedexContainer />;
          </AuthProvider>
        </PokemonSearchProvider>
      </ScreenProvider>
    </div>
  )

}