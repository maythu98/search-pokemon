import { MinMax } from "./generics";

export interface Pokemon {
  id: string;
  name: string;
  number: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  weight: MinMax;
  height: MinMax;
  fleeRate: number;
  image: string;
  evolutionRequirements: {
    amount: number;
    name: string;
  };
  evolutions: Evolution[];
  maxCP: number;
  maxHP: number;
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  id: string;
  name: string;
}
