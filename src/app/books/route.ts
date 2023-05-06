import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const books = await prisma.user.findMany();
  return NextResponse.json({ books });
}
