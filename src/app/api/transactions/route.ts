import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("user");

  if (!userCookie) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  const user = JSON.parse(decodeURIComponent(userCookie.value));
  const { tipo, valor } = await req.json();

  if (
    !["deposito", "transferencia"].includes(tipo) ||
    typeof valor !== "number"
  ) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  user.balance = user.balance || 0;

  if (tipo === "deposito") {
    user.balance += valor;
  } else if (tipo === "transferencia") {
    if (user.balance < valor) {
      return NextResponse.json(
        { error: "Saldo insuficiente para transferência" },
        { status: 400 }
      );
    }
    user.balance -= valor;
  }

  const novaTransacao = {
    tipo,
    valor,
    data: new Date().toISOString(),
  };

  user.transactions = [...(user.transactions || []), novaTransacao];

  const response = NextResponse.json({ success: true });
  response.cookies.set("user", encodeURIComponent(JSON.stringify(user)), {
    httpOnly: true,
    path: "/",
  });

  return response;
}

export async function GET() {
  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("user");

  if (!userCookie) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  const user = JSON.parse(decodeURIComponent(userCookie.value));
  const transactions = user.transactions || [];

  return NextResponse.json({ transactions });
}

export async function DELETE(req: Request) {
  const { index } = await req.json();

  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("user");

  if (!userCookie) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  const user = JSON.parse(decodeURIComponent(userCookie.value));
  if (
    !Array.isArray(user.transactions) ||
    index < 0 ||
    index >= user.transactions.length
  ) {
    return NextResponse.json({ error: "Transação inválida" }, { status: 400 });
  }

  const transacaoRemovida = user.transactions[index];
  if (transacaoRemovida.tipo === "deposito") {
    user.balance -= transacaoRemovida.valor;
  } else {
    user.balance += transacaoRemovida.valor;
  }

  user.transactions.splice(index, 1);

  const response = NextResponse.json({ success: true });
  response.cookies.set("user", encodeURIComponent(JSON.stringify(user)), {
    httpOnly: true,
    path: "/",
  });

  return response;
}

export async function PUT(req: Request) {
  const { index, valor } = await req.json();

  const cookieStore = cookies();
  const userCookie = (await cookieStore).get("user");

  if (!userCookie) {
    return NextResponse.json(
      { error: "Usuário não autenticado" },
      { status: 401 }
    );
  }

  const user = JSON.parse(decodeURIComponent(userCookie.value));
  if (
    !Array.isArray(user.transactions) ||
    index < 0 ||
    index >= user.transactions.length
  ) {
    return NextResponse.json({ error: "Transação inválida" }, { status: 400 });
  }

  const transacaoAntiga = user.transactions[index];
  const diferenca = valor - transacaoAntiga.valor;

  if (transacaoAntiga.tipo === "deposito") {
    user.balance += diferenca;
  } else {
    if (user.balance < diferenca) {
      return NextResponse.json(
        { error: "Saldo insuficiente" },
        { status: 400 }
      );
    }
    user.balance -= diferenca;
  }

  user.transactions[index].valor = valor;

  const response = NextResponse.json({ success: true });
  response.cookies.set("user", encodeURIComponent(JSON.stringify(user)), {
    httpOnly: true,
    path: "/",
  });

  return response;
}
