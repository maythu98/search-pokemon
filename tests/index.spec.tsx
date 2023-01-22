import graphqlClient from "../graphQL/graphql-client";
import { SearchPokemon } from "../graphQL/queries";
import { Pokemon } from "@/interfaces/pokemon-interface";
import { BulbasaurPokemon } from "./sample-json";
import { getServerSideProps } from "../pages/index";

describe("Pokemon Main Page Test", () => {
  // Bulbasaur Test Case
  it("When user search the Bulbasaur, types should be Grass and Poison", async () => {
    const testName = "Bulbasaur";

    const response = await getServerSideProps({
      query: {
        name: testName,
      },
    } as any);

    expect(
      graphqlClient.request(SearchPokemon, { name: testName })
    ).toHaveBeenCalled();

    expect(response).toEqual({
      props: {
        pokemon: BulbasaurPokemon,
        keyword: testName,
      },
    });
  });
});
