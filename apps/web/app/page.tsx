import { getSymptoms } from "../src/symptoms/services";
import { Language } from "../src/types";
import { Examination } from "./examination";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { lang } = searchParams;
  const language: Language = lang === "pt-br" ? "ptBR" : "enUS";
  const symptoms = getSymptoms();

  return (
    <main>
      <Examination language={language} symptoms={symptoms} />
    </main>
  );
}
