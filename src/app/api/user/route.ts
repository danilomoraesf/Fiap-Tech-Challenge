import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const userCookie = (await cookies()).get("user");

  if (!userCookie) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  try {
    const user = JSON.parse(decodeURIComponent(userCookie.value));
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { error: "Cookie de usuário inválido" },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, senha } = body;

    const userCookie = (await cookies()).get("user");

    if (!userCookie) {
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const currentUser = JSON.parse(decodeURIComponent(userCookie.value));

    const updatedUser = {
      ...currentUser,
      nome: nome ?? currentUser.nome,
      email: email ?? currentUser.email,
      senha: senha ? senha : currentUser.senha,
    };

    const response = NextResponse.json({ success: true, user: updatedUser });

    response.cookies.set(
      "user",
      encodeURIComponent(JSON.stringify(updatedUser)),
      {
        path: "/",
      }
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar os dados do usuário" },
      { status: 400 }
    );
  }
}
