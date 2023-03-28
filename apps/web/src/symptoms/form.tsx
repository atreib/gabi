"use client";

import { Language } from "../types";
import { Symptoms, Symptom } from "./types";
import { i18n } from "./i18n";
import { useState } from "react";

type SymptomsFormProps = {
  symptoms: Symptoms;
  language: Language;
  loading: boolean;
  onSubmitCallback: (selectedSymptoms: Symptom[]) => unknown;
};

export function SymptomsForm({
  symptoms,
  language,
  loading,
  onSubmitCallback,
}: SymptomsFormProps) {
  const symptomsTranslated = Object.entries(symptoms).map(([key, symptom]) => ({
    key,
    ...symptom[language],
  }));

  async function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedSymptoms = Array.from(formData.entries())
      .filter(([, value]) => value === "on")
      .map(([key]) => key);
    await onSubmitCallback(selectedSymptoms as Symptom[]);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="symptoms">{i18n.FORM_LABEL[language]}</label>
      <div className="py-2">
        {symptomsTranslated.map(({ key, name }) => (
          <div key={key} className="pb-1">
            <input type="checkbox" id={key} name={key} />
            <label htmlFor={key}>{name}</label>
          </div>
        ))}
      </div>
      <input
        type="submit"
        value={
          loading
            ? `${i18n.FORM_LOADING_LABEL[language]}...`
            : i18n.FORM_SUBMIT_LABEL[language]
        }
      />
    </form>
  );
}
