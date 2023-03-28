"use client";

import { Language } from "../src/types";
import { SymptomsForm } from "../src/symptoms/form";
import type { Symptom, Symptoms } from "../src/symptoms/types";
import { diagnose } from "./services";
import { useState } from "react";
import { DiagnosticResult } from "../src/diagnostic/types";
import { Illness } from "../src/diagnostic/illness";

type ExaminationProps = {
  symptoms: Symptoms;
  language: Language;
};

export function Examination({ symptoms, language }: ExaminationProps) {
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult>();
  async function onSymptomsSelected(symptoms: Symptom[]) {
    const diagnostic = await diagnose({ symptoms, language });
    setDiagnostic(diagnostic);
  }

  return (
    <section>
      <SymptomsForm
        language={language}
        symptoms={symptoms}
        onSubmitCallback={onSymptomsSelected}
      />
      {diagnostic ? (
        <Illness language={language} illness={diagnostic.illness} />
      ) : null}
    </section>
  );
}
