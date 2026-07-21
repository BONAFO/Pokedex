import bcrypt from "bcrypt";
import prisma from "./prisma";




export async function login(username, password) {

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });


    if (!user) {
        return null;
    }


    const validPassword = await bcrypt.compare(
        password,
        user.password
    );


    if (!validPassword) {
        return null;
    }


    return {
        id: user.id,
        username: user.username
    };

}