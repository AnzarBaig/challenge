import { NextResponse } from "next/server";
import OneDay from '@/app/DummyData/Signups/24h/OneDay.json'


export async function GET(req: Request) {
  try {
    const Signups: SignupWithin1Hour[] = OneDay
    return NextResponse.json(Signups, {
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}