"use client";

import { Language } from "../types";
import { Symptoms, Symptom } from "./types";
import { i18n } from "./i18n";

type SymptomsFormProps = {
  symptoms: Symptoms;
  language: Language;
  onSubmitCallback: (selectedSymptoms: Symptom[]) => unknown;
};

export function SymptomsForm({
  symptoms,
  language,
  onSubmitCallback,
}: SymptomsFormProps) {
  const symptomsTranslated = Object.entries(symptoms).map(([key, symptom]) => ({
    key,
    ...symptom[language],
  }));

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedSymptoms = Array.from(formData.entries())
      .filter(([, value]) => value === "on")
      .map(([key]) => key);
    onSubmitCallback(selectedSymptoms as Symptom[]);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="symptoms">{i18n.FORM_LABEL[language]}</label>
      {symptomsTranslated.map(({ key, name }) => (
        <div key={key}>
          <input type="checkbox" id={key} name={key} />
          <label htmlFor={key}>{name}</label>
        </div>
      ))}
      <input type="submit" value={i18n.FORM_SUBMIT_LABEL[language]} />
    </form>
  );
}
