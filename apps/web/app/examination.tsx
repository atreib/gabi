"use client";

import { Language } from "../src/types";
import { SymptomsForm } from "../src/symptoms/form";
import type { Symptom, Symptoms } from "../src/symptoms/types";

type ExaminationProps = {
  symptoms: Symptoms;
  language: Language;
};

export function Examination({ symptoms, language }: ExaminationProps) {
  function onSymptomsSelected(symptoms: Symptom[]) {
    console.log(symptoms);
  }

  return (
    <SymptomsForm
      language={language}
      symptoms={symptoms}
      onSubmitCallback={onSymptomsSelected}
    />
  );
}
