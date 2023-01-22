import { Pokemon } from "@/interfaces/pokemon-interface";

export const BulbasaurPokemon: Pokemon = {
  id: "UG9rZW1vbjowMDE=",
  number: "001",
  name: "Bulbasaur",
  classification: "Seed Pokémon",
  types: ["Grass", "Poison"],
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  weight: {
    minimum: "6.04kg",
    maximum: "7.76kg",
  },
  height: {
    minimum: "0.61m",
    maximum: "0.79m",
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      name: "Ivysaur",
    },
    {
      id: "UG9rZW1vbjowMDM=",
      name: "Venusaur",
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Bulbasaur candies",
  },
  attacks: {
    fast: [
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
      {
        name: "Vine Whip",
        type: "Grass",
        damage: 7,
      },
    ],
    special: [
      {
        name: "Power Whip",
        type: "Grass",
        damage: 70,
      },
      {
        name: "Seed Bomb",
        type: "Grass",
        damage: 40,
      },
      {
        name: "Sludge Bomb",
        type: "Poison",
        damage: 55,
      },
    ],
  },
};

export const CharmanderPokemon: Pokemon = {
  id: "UG9rZW1vbjowMDQ=",
  number: "004",
  name: "Charmander",
  classification: "Lizard Pokémon",
  types: ["Fire"],
  resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
  weaknesses: ["Water", "Ground", "Rock"],
  fleeRate: 0.1,
  maxCP: 841,
  maxHP: 955,
  image: "https://img.pokemondb.net/artwork/charmander.jpg",
  weight: {
    minimum: "7.44kg",
    maximum: "9.56kg",
  },
  height: {
    minimum: "0.53m",
    maximum: "0.68m",
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDU=",
      name: "Charmeleon",
    },
    {
      id: "UG9rZW1vbjowMDY=",
      name: "Charizard",
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Charmander candies",
  },
  attacks: {
    fast: [
      {
        name: "Ember",
        type: "Fire",
        damage: 10,
      },
      {
        name: "Scratch",
        type: "Normal",
        damage: 6,
      },
    ],
    special: [
      {
        name: "Flame Burst",
        type: "Fire",
        damage: 30,
      },
      {
        name: "Flame Charge",
        type: "Fire",
        damage: 25,
      },
      {
        name: "Flamethrower",
        type: "Fire",
        damage: 55,
      },
    ],
  },
};

export const SquirtlePokemon: Pokemon = {
  id: "UG9rZW1vbjowMDc=",
  number: "007",
  name: "Squirtle",
  classification: "Tiny Turtle Pokémon",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  weaknesses: ["Electric", "Grass"],
  fleeRate: 0.1,
  maxCP: 891,
  maxHP: 1008,
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  weight: {
    minimum: "7.88kg",
    maximum: "10.13kg",
  },
  height: {
    minimum: "0.44m",
    maximum: "0.56m",
  },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      name: "Wartortle",
    },
    {
      id: "UG9rZW1vbjowMDk=",
      name: "Blastoise",
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Squirtle candies",
  },
  attacks: {
    fast: [
      {
        name: "Bubble",
        type: "Water",
        damage: 25,
      },
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
    ],
    special: [
      {
        name: "Aqua Jet",
        type: "Water",
        damage: 25,
      },
      {
        name: "Aqua Tail",
        type: "Water",
        damage: 45,
      },
      {
        name: "Water Pulse",
        type: "Water",
        damage: 35,
      },
    ],
  },
};
