import { NextResponse } from "next/server";
import { login } from "@/src/connection/auth";
import prisma from "@/src/connection/prisma";


export async function POST(request) {

    try {

        const { action, data } = await request.json();


        switch (action) {


            // LOGIN
            case "login": {

                const user = await login(
                    data.username,
                    data.password
                );


                if (!user) {

                    return NextResponse.json(
                        {
                            success: false,
                            message: "Credenciales incorrectas"
                        },
                        {
                            status: 401
                        }
                    );

                }


                return NextResponse.json({
                    success: true,
                    user
                });

            }



            // GUARDAR POKEMON CAPTURADO
            case "savePokemon": {


                const pokemon = await prisma.pokemons.findFirst();


                let capturados = [];


                if (pokemon?.capt) {

                    capturados = pokemon.capt
                        .split(",")
                        .filter(Boolean);

                }


                if (!capturados.includes(String(data.id))) {

                    capturados.push(String(data.id));

                }


                let result;


                if (pokemon) {

                    result = await prisma.pokemons.update({
                        where: {
                            id: pokemon.id
                        },
                        data: {
                            capt: capturados.join(",")
                        }
                    });

                } else {

                    result = await prisma.pokemons.create({
                        data: {
                            capt: capturados.join(",")
                        }
                    });

                }


                return NextResponse.json({
                    success: true,
                    data: result
                });

            }



            // TRAER POKEMON CAPTURADOS
            case "getPokemon": {


                const pokemon = await prisma.pokemons.findFirst();


                return NextResponse.json({

                    success: true,

                    capturados:
                        pokemon?.capt
                            ?
                            pokemon.capt.split(",")
                            :
                            []

                });

            }



            default:

                return NextResponse.json(
                    {
                        success: false,
                        message: "Acción desconocida"
                    },
                    {
                        status: 400
                    }
                );

        }


    } catch (error) {


        console.error(error);


        return NextResponse.json(
            {
                success: false,
                message: "Error interno"
            },
            {
                status: 500
            }
        );


    }

}