import { NextRequest, NextResponse } from "next/server";
import { makeDoctorEngine } from "../../../src/doctor-engine";
import { Symptom } from "../../../src/symptoms/types";
import { Language } from "../../../src/types";

export async function POST(request: NextRequest) {
  const { symptoms, language } = (await request.json()) as {
    symptoms: Symptom[];
    language: Language;
  };

  const diagnose = makeDoctorEngine();
  const diagnostic = await diagnose({ symptoms, language });

  return NextResponse.json(diagnostic);
}
