import { symptoms } from "./data";
import { Symptom } from "./types";

export function getSymptoms() {
  return symptoms;
}

export function getSymptomByID(id: Symptom) {
  return symptoms[id];
}
