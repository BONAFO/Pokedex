// import PokedexDesktop from "@/src/components/PokedexDesktop";
// import { useScreen } from "../contexts/ScreenContext";
// import PokedexMobile from "../components/PokedexMobile";


// export default function PokedexContainer() {
//   // SIMULAMOS TU LOGIN
//   const  {isMobile} = useScreen();

//   return (
//     <div className="p-6">

//             <h1 className="text-3xl font-bold mb-6">Pokédex</h1>

//             {isMobile ? <PokedexMobile/> : <PokedexDesktop />}
          
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import axios from "axios";

import PokedexDesktop from "@/src/components/PokedexDesktop";
import { useScreen } from "../contexts/ScreenContext";
import PokedexMobile from "../components/PokedexMobile";


export default function PokedexContainer() {

  const { isMobile } = useScreen();


  useEffect(() => {


    async function testRoutes() {

      try {


        const userResponse = await axios.get("/api", {
          params:{
            action:"user"
          }
        });


        console.log(
          "USER RESPONSE:",
          userResponse.data
        );



        const pokemonResponse = await axios.get("/api", {
          params:{
            action:"pokemon"
          }
        });


        console.log(
          "POKEMON RESPONSE:",
          pokemonResponse.data
        );



      } catch(error) {

        console.error(
          "API ERROR:",
          error.response?.data || error.message
        );

      }

    }


    testRoutes();


  }, []);



  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Pokédex
      </h1>


      {isMobile 
        ? <PokedexMobile/> 
        : <PokedexDesktop />
      }

    </div>
  );
}