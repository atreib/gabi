import { Configuration, OpenAIApi } from "openai";
import { Language } from "../../types";
import { Symptom } from "../../symptoms/types";
import { getSymptomByID } from "../../symptoms/services";
import { IDiagnoseFn } from "../contract";
import { i18n as engineI18n } from "../i18n";
import { i18n as promptI18n } from "./i18n";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

const openai = new OpenAIApi(configuration);

function makePrompt(props: { symptoms: Symptom[]; language: Language }) {
  const lastCommaRegex = /,(?=[^,]+$)/;
  const symptoms = props.symptoms
    .map((symptomID) => {
      const symptom = getSymptomByID(symptomID)["enUS"];
      return symptom.name;
    })
    .join(", ")
    .replace(lastCommaRegex, ", and");
  const translationPrompt = promptI18n.TRANSLATION_PROMPT[props.language];
  return `You are Gabi, a doctor AI. I am your patient. Given that I am feeling ${symptoms}, what are the 3 most common diseases that I may have? ${translationPrompt}`;
}

export const diagnose: IDiagnoseFn = async (props: {
  symptoms: Symptom[];
  language: Language;
}) => {
  const prompt = makePrompt({
    symptoms: props.symptoms,
    language: props.language,
  });

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt,
    temperature: 0.7,
    max_tokens: 2048,
  });

  return {
    illness:
      response.data.choices[0].text ??
      engineI18n.DIAGNOSTIC_FAILED[props.language],
  };
};
