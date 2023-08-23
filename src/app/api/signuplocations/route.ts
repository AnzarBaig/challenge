import { NextResponse } from "next/server";
import SignupLocation from '@/app/DummyData/SignUpLocation/signuplocation.json'


export async function GET(req: Request) {
  try {
    const SignupLocations: SignUpLocation[] = SignupLocation
    return NextResponse.json(SignupLocations, {
      status: 200
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}