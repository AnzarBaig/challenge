import { NextResponse } from "next/server";
import TwoMonth from '@/app/DummyData/Signups/60d/TwoMonth.json'


export async function GET(req: Request) {
  try {
    const Signups: SignupWithin1Hour[] = TwoMonth
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