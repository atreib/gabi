import { DiagnosticResult } from "../diagnostic/types";
import { Symptom } from "./../symptoms/types";
import { Language } from "../types";

export type IDiagnoseFn = (props: {
  symptoms: Symptom[];
  language: Language;
}) => Promise<DiagnosticResult>;
