import { getSymptoms } from "../src/symptoms/services";
import { Language } from "../src/types";
import { Examination } from "./examination";

export default function Page() {
  const language: Language = "ptBR";
  const symptoms = getSymptoms();

  return (
    <main>
      <Examination language={language} symptoms={symptoms} />
    </main>
  );
}
