import graphqlClient from "../graphQL/graphql-client";
import { SearchPokemon } from "../graphQL/queries";
import {
  BulbasaurPokemon,
  CharmanderPokemon,
  SquirtlePokemon,
} from "./sample-json";
import Home, { getServerSideProps } from "../pages/index";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Pokemon Main Page Test", () => {
  // Bulbasaur Test Case
  it("When user search the Bulbasaur, types should be Grass and Poison", async () => {
    const testName = "Bulbasaur";

    const response = await getServerSideProps({
      query: {
        name: testName,
      },
    } as any);

    // jest.spyOn(graphqlClient, "request");

    // expect(
    //   graphqlClient.request(SearchPokemon, { name: testName })
    // ).toHaveBeenCalled();

    expect(response).toEqual({
      props: {
        pokemon: BulbasaurPokemon,
        keyword: testName,
      },
    });
  });

  it("Home Page renders the Bulbasaur got correct types", () => {
    const testName = "Bulbasaur";
    useRouter.mockImplementationOnce(() => ({
      query: { name: testName },
    }));
    const { getByTestId, debug } = render(
      <Home pokemon={BulbasaurPokemon} keyword={testName} />
    );

    BulbasaurPokemon.types.forEach((type) => {
      const typeItem = getByTestId(`type-${type}`);

      expect(typeItem.textContent).toContain(type);
    });
  });

  // Charmander Test Case
  it("When user search the Charmander, types should be Fire", async () => {
    const testName = "Charmander";

    const response = await getServerSideProps({
      query: {
        name: testName,
      },
    } as any);

    expect(response).toEqual({
      props: {
        pokemon: CharmanderPokemon,
        keyword: testName,
      },
    });
  });

  it("Home Page renders the Charmander got correct types", () => {
    const testName = "Charmander";
    useRouter.mockImplementationOnce(() => ({
      query: { name: testName },
    }));
    const { getByTestId, debug } = render(
      <Home pokemon={CharmanderPokemon} keyword={testName} />
    );

    CharmanderPokemon.types.forEach((type) => {
      const typeItem = getByTestId(`type-${type}`);

      expect(typeItem.textContent).toContain(type);
    });
  });

  // Squirtle Test Case
  it("When user search the Squirtle, types should be Water", async () => {
    const testName = "Squirtle";

    const response = await getServerSideProps({
      query: {
        name: testName,
      },
    } as any);

    expect(response).toEqual({
      props: {
        pokemon: SquirtlePokemon,
        keyword: testName,
      },
    });
  });

  it("Home Page renders the Squirtle got correct types", () => {
    const testName = "Squirtle";
    useRouter.mockImplementationOnce(() => ({
      query: { name: testName },
    }));
    const { getByTestId, debug } = render(
      <Home pokemon={BulbasaurPokemon} keyword={testName} />
    );

    BulbasaurPokemon.types.forEach((type) => {
      const typeItem = getByTestId(`type-${type}`);

      expect(typeItem.textContent).toContain(type);
    });
  });
});
