export type Treatment = {
  name: string;
  description: string;
  duration: string;
  suitable: string;
  price: string;
};

export type Product = {
  name: string;
  category: string;
  suitable: string;
  description: string;
  price: string;
};

export type Dimension = 'DO' | 'SR' | 'PN' | 'WT';

export type QuizQuestion = {
  id: number;
  dimension: Dimension;
  question: string;
  a: string;
  b: string;
};

export type SkinTypeCode =
  | 'DSPW'
  | 'DSPT'
  | 'DSNW'
  | 'DSNT'
  | 'DRPW'
  | 'DRPT'
  | 'DRNW'
  | 'DRNT'
  | 'OSPW'
  | 'OSPT'
  | 'OSNW'
  | 'OSNT'
  | 'ORPW'
  | 'ORPT'
  | 'ORNW'
  | 'ORNT';

export type SkinTypeResult = {
  code: SkinTypeCode;
  name: string;
  personality: string;
  explanation: string;
  concerns: string[];
  treatments: string[];
  products: string[];
  routine: string[];
};
