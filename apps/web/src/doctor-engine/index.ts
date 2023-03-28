import * as OpenAI from "./implementations/openai";

export function makeDoctorEngine() {
  return OpenAI.diagnose;
}
