import graphqlClient from "@/graphQL/graphql-client";
import { SearchPokemon } from "@/graphQL/queries";
import { Pokemon } from "@/interfaces/pokemon-interface";
import { getServerSideProps } from "@/pages";
import { describe, it } from "node:test";

describe("Pokemon Main Page Test", () => {
  it("When user search the Bulbasaur, types should be Grass and Poison", async () => {
    const BulbasaurPokemon: Pokemon = {
      id: "UG9rZW1vbjowMDE=",
      number: "001",
      name: "Bulbasaur",
      classification: "Seed Pokémon",
      types: ["Grass", "Poison"],
      resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      fleeRate: 0.1,
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
      maxCP: 951,
      maxHP: 1071,
      image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    };

    const testName = "Bulbasaur";

    const response = await getServerSideProps({
      query: {
        name: testName,
      },
    } as any);

    graphqlClient.request(SearchPokemon, { name: testName });
  });
});
