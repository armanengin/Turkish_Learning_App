import { GrammarPattern } from '../types/grammar';
import { genitiveCasePattern } from './genitiveCasePattern';
import { imperativeSubjunctivePattern } from './imperativeSubjunctivePattern';
import { complexTimeExpressionsPattern } from './complexTimeExpressions';
import { vowelHarmonyPattern } from './vowelHarmonyPattern';
import { questionFormationPattern } from './questionFormationPattern';
import { basicNegationPattern } from './basicNegationPattern';
import { personalPronounsPattern } from './personalPronounsPattern';
import { possessiveConstructionsPattern } from './possessiveConstructionsPattern';
import { presentParticiplesPattern } from './presentParticiplesPattern';
import { compoundNounsPattern } from './compoundNounsPattern';
import { evidentialDefinitePastPattern } from './evidentialDefinitePastPattern';
import { complexSubordinationPattern } from './complexSubordinationPattern';
import { passiveVoicePattern } from './passiveVoicePattern';
import { reflexiveVerbsPattern } from './reflexiveVerbsPattern';
import { causativeVerbsPattern } from './causativeVerbsPattern';
import { aoristPattern } from './aoristPattern';

export const additionalPatterns: GrammarPattern[] = [
  genitiveCasePattern,
  imperativeSubjunctivePattern,
  complexTimeExpressionsPattern,
  vowelHarmonyPattern,
  questionFormationPattern,
  basicNegationPattern,
  personalPronounsPattern,
  possessiveConstructionsPattern,
  presentParticiplesPattern,
  compoundNounsPattern,
  evidentialDefinitePastPattern,
  complexSubordinationPattern,
  passiveVoicePattern,
  reflexiveVerbsPattern,
  causativeVerbsPattern,
  aoristPattern
];
