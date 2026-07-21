import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/src/connection/prisma";


export async function POST(request){

    try{

        const { password } = await request.json();


        const user = await prisma.user.findUnique({
            where:{
                id:1
            }
        });


        if(!user){

            return NextResponse.json({
                success:false
            });

        }


        const valid = await bcrypt.compare(
            password,
            user.password
        );


        return NextResponse.json({
            success:valid
        });


    }catch(error){

        console.error(error);

        return NextResponse.json(
            {
                success:false
            },
            {
                status:500
            }
        );

    }

}