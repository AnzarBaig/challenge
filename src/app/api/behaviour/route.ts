import { NextResponse } from "next/server";
import Behaviour from '@/app/DummyData/SignUpLocation/signuplocation.json'


export async function GET(req: Request) {
  try {
    const Behaviours: SignUpLocation[] = Behaviour
    return NextResponse.json(Behaviours, {
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}