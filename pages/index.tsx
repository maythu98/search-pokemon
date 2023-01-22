import Header from "@/components/Layout/Header";
import HeaderTitle from "@/components/Ui/HeaderTitle";
import tw from "tailwind-styled-components";
import ItemNotFound from "@/components/ItemNotFound";
import Footer from "@/components/Footer";
import { GetServerSideProps } from "next";
import graphqlClient from "@/graphQL/graphql-client";
import { SearchPokemon } from "@/graphQL/queries";
import { Pokemon } from "@/interfaces/pokemon-interface";
import { useInput } from "@/hooks/useInput";
import { useRouter } from "next/router";
import ItemCard from "@/components/ItemCard";
import { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import Wrapper from "@/components/Ui/Wrapper";

interface HomeParamInterface {
  pokemon: Pokemon | null | undefined;
  keyword: String | null | undefined;
}

export default function Home({ pokemon, keyword }: HomeParamInterface) {
  const nameInput = useInput(keyword);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    nameInput.setValue(keyword);
  }, [keyword]);

  const search = (nameKeyword: any) => {
    router.push({ pathname: "/", query: { name: nameKeyword } });
  };

  return (
    <Wrapper>
      <Header />
      <HeaderTitle>Search Pokemon</HeaderTitle>

      <SearchBox
        nameInput={nameInput.value}
        changeNameInput={nameInput.onChange}
        search={search}
      />

      {loading && <span>Loading....</span>}

      {pokemon ? (
        <ItemCard pokemon={pokemon} search={search} />
      ) : (
        <ItemNotFound name="May Thu" />
      )}

      <Footer />
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { name },
  } = context;

  if (!name) {
    return {
      props: {
        pokemon: null,
        keyword: name ?? null,
      },
    };
  }

  const { pokemon } = await graphqlClient.request(SearchPokemon, {
    name: name,
  });

  return {
    props: {
      pokemon,
      keyword: name ?? null,
    },
  };
};
