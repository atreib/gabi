import { symptoms } from "./data";

export type Symptoms = typeof symptoms;
export type Symptom = keyof Symptoms;
