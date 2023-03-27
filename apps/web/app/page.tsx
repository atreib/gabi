import { getSymptoms } from "../src/symptoms/services";
import { Examination } from "./examination";

export default function Page() {
  const language = "ptBR";
  const symptoms = getSymptoms();

  return (
    <main>
      <h1>Gabi</h1>
      <Examination language={language} symptoms={symptoms} />
    </main>
  );
}
