export type NavTab = 'inicio' | 'brujula' | 'grados' | 'manifiesto' | 'horizontes';

export interface DegreeSubject {
  name: string;
  year: number;
  credits: number;
  type: 'Básica' | 'Obligatoria' | 'Optativa';
}

export interface UnedDegree {
  id: string;
  title: string;
  faculty: string;
  duration: string;
  credits: number;
  tagline: string;
  description: string;
  curatorialQuote: string;
  authorQuote: string;
  competencies: string[];
  careerOutcomes: string[];
  featuredSubjects: DegreeSubject[];
  idealFor: string;
  colorTheme: string;
}

export interface VocationalQuestion {
  id: number;
  dimension: 'filosofia' | 'arte' | 'historia' | 'lengua' | 'antropologia';
  dimensionLabel: string;
  question: string;
  philosophicalContext: string;
  options: {
    label: string;
    description: string;
    score: Record<string, number>;
  }[];
}

export interface PurposeArchetype {
  id: string;
  title: string;
  subtitle: string;
  philosophicalMotto: string;
  description: string;
  coreStrengths: string[];
  recommendedDegrees: string[];
  contemporaryMission: string;
  seminalThinker: string;
  seminalQuote: string;
}

export interface CareerPath {
  id: string;
  title: string;
  field: string;
  tagline: string;
  description: string;
  keySkills: string[];
  degreesConnected: string[];
  futureProjection: string;
  realWorldImpact: string;
}

export interface PersonalManifesto {
  authorName: string;
  coreValues: string[];
  societalChallenge: string;
  chosenFocus: string;
  sparkDeclaration: string;
  createdAt: string;
}
