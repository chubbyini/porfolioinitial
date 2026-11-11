import type { ResearchPaper } from "@/types";

export const researchPaper: ResearchPaper = {
  id: "zero-shot-nlp-pipeline-2025",
  title: "Hybrid Zero-Shot NLP Pipeline for Text Summarization and Question Generation",
  authors: [
    "Inioluwa Daniel Osibajo",
    "Oluwaseyi Ezekiel Olorunshola",
    "Fatimah Adamu-Fika",
    "Tsentob Joy Samson",
  ],
  affiliation:
    "Department of Computer Science & Cyber Security, Faculty of Computing, Air Force Institute of Technology (AFIT), Kaduna, Nigeria",
  journal: "International Journal of Research and Innovation in Applied Science (IJRIAS)",
  publicationDetails: "RSIS International, Vol. 10, Issue 7, Pages 342–354",
  date: "July 2025",
  category: "Natural Language Processing",
  paperUrl: "https://ideas.repec.org/a/bjf/journl/v10y2025i7p342-354.html",
  abstract:
    "The rapid evolution of natural language processing (NLP) has introduced transformative opportunities in automated content synthesis and learning pedagogy. This paper formulates and evaluates a hybrid zero-shot pipeline leveraging state-of-the-art pre-trained transformer architectures to execute high-fidelity text summarization coupled with context-aware question generation without requiring domain-specific fine-tuning. Evaluated across diverse textual corpora, the pipeline demonstrates notable semantic preservation, factual fidelity, and syntactically coherent evaluative questions, validating the efficacy of zero-shot paradigms in resource-conscious computing environments.",
  keyHighlights: [
    "Parameter-efficient zero-shot architecture eliminating expensive domain fine-tuning overhead",
    "Cohesive coupling between extractive summary generation and pedagogical question formation",
    "Benchmarked using quantitative metrics (ROUGE-1, ROUGE-2, ROUGE-L, BLEU) and factual consistency checks",
    "Demonstrates viable low-latency inference pathways for automated educational software",
  ],
} as const;
