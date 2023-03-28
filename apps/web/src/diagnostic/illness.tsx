import { Language } from "../types";
import { i18n } from "./i18n";

type IllnessProps = {
  illness: string;
  language: Language;
};

export function Illness({ illness, language }: IllnessProps) {
  return (
    <article className="space-y-4">
      <h1>{i18n.TITLE[language]}</h1>
      <section>
        <p>{illness}</p>
      </section>
    </article>
  );
}
