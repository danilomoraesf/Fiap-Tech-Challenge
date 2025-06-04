import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  const rawCookie = (await cookies()).get("user")?.value;
  if (!rawCookie) {
    return NextResponse.json(
      { error: "Nenhum usuário registrado" },
      { status: 401 }
    );
  }

  let user;
  try {
    user = JSON.parse(decodeURIComponent(rawCookie));
  } catch (e) {
    return NextResponse.json(
      { error: "Cookie de usuário inválido" },
      { status: 400 }
    );
  }

  if (user.email === email && user.senha === senha) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("user", encodeURIComponent(JSON.stringify(user)), {
      path: "/",
    });

    response.cookies.set("token", "fake-jwt-token", {
      httpOnly: true,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
