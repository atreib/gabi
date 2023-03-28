import { DiagnosticResult } from "../src/diagnostic/types";
import { Symptom } from "../src/symptoms/types";
import { Language } from "../src/types";

export async function diagnose(props: {
  symptoms: Symptom[];
  language: Language;
}) {
  const response = await fetch("/api/diagnose", {
    method: "POST",
    body: JSON.stringify({
      symptoms: props.symptoms,
      language: props.language,
    }),
  });
  return response.json() as Promise<DiagnosticResult>;
}
