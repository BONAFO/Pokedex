import PokedexDesktop from "@/src/components/PokedexDesktop";
import { useScreen } from "../contexts/ScreenContext";
import PokedexMobile from "../components/PokedexMobile";


export default function PokedexContainer() {
  // SIMULAMOS TU LOGIN
  const  {isMobile} = useScreen();

  return (
    <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">Pokédex</h1>

            {isMobile ? <PokedexMobile/> : <PokedexDesktop />}
          
    </div>
  );
}
