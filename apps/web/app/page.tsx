import { Metadata } from "next";
import { getSymptoms } from "../src/symptoms/services";
import { Language } from "../src/types";
import { Examination } from "./examination";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gabi",
};

export default function Page({
  searchParams,
}: {
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
