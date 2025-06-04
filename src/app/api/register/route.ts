import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nome, email, senha } = await req.json();

  const user = {
    nome,
    email,
    senha,
    balance: 0,
    transactions: [],
  };

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
