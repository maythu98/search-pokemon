import { Pokemon } from "interfaces/pokemon-interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Wrapper from "./Ui/Wrapper";
import tw from "tailwind-styled-components";
import AttackCard from "./AttackCard";
import TagList from "./TagList";
import Link from "next/link";

interface ItemCardInterface {
  pokemon: Pokemon;
  search: Function;
}

export default function ItemCard({ pokemon, search }: ItemCardInterface) {
  console.log(pokemon);

  return (
    <div className="flex my-6">
      <div className="rounded-lg shadow-lg bg-white w-full max-w py-5">
        <div className="text-gray-900 text-3xl mb-3 font-medium mb-2 px-3">
          {pokemon.name} #{pokemon.number}
        </div>
        <hr />

        <div className="grid grid-cols-2 gap-4 m-3">
          <div className="gap-3 flex flex-col">
            <div className="w-100 flex justify-center">
              <Image
                className="rounded-t-lg"
                src={pokemon.image}
                width={400}
                height={400}
                alt={pokemon.name}
              />
            </div>

            <div className="mt-10">
              <h3 className="text-2xl my-2">Attacks</h3>
              {pokemon.attacks.fast && (
                <AttackCard attacks={pokemon.attacks.fast} title="Fast" />
              )}
              {pokemon.attacks.special && (
                <AttackCard attacks={pokemon.attacks.special} title="Special" />
              )}
            </div>
          </div>

          <div className="flex flex-col justify-start text-start gap-6">
            {pokemon.types && (
              <TagList bg="bg-indigo-500" title="Type" items={pokemon.types} />
            )}

            <div className="rounded-lg shadow-lg bg-green-500 max-w py-3">
              <Wrapper>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <BoxTitle>Height</BoxTitle>
                    <BoxBody>
                      {pokemon.height.minimum} - {pokemon.height.maximum}
                    </BoxBody>
                  </div>
                  <div>
                    <BoxTitle>Weight</BoxTitle>
                    <BoxBody>
                      {pokemon.weight.minimum} - {pokemon.weight.maximum}
                    </BoxBody>
                  </div>
                  <div>
                    <BoxTitle>Classification</BoxTitle>
                    <BoxBody>{pokemon.classification}</BoxBody>
                  </div>
                  <div>
                    <BoxTitle>Flee Rate</BoxTitle>
                    <BoxBody>{pokemon.fleeRate}</BoxBody>
                  </div>
                  <div>
                    <BoxTitle>Max CP</BoxTitle>
                    <BoxBody>{pokemon.maxCP}</BoxBody>
                  </div>
                  <div>
                    <BoxTitle>Max HP</BoxTitle>
                    <BoxBody>{pokemon.maxHP}</BoxBody>
                  </div>
                </div>
              </Wrapper>
            </div>

            <div>
              {pokemon.evolutions && (
                <h3 className="text-2xl my-2">Evolutions</h3>
              )}
              {pokemon.evolutions &&
                pokemon.evolutions.map((item) => (
                  <Link
                    href={{
                      pathname: "/",
                      query: { name: item.name },
                    }}
                    key={item.id}
                    className="mr-3 underline underline-offset-8 font-medium text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>

            {pokemon.evolutionRequirements && (
              <div>
                <h3 className="text-2xl my-2">Evolution Requirements</h3>

                <div className="grid grid-cols-2">
                  <div>
                    <h1>Name</h1>
                    <span className="font-medium">
                      {pokemon.evolutionRequirements.name}
                    </span>
                  </div>
                  <div>
                    <h1>Amount</h1>
                    <span className="font-medium">
                      {pokemon.evolutionRequirements.amount}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {pokemon.resistant && (
              <TagList
                bg="bg-red-400"
                title="Weakness"
                items={pokemon.weaknesses}
              />
            )}

            {pokemon.resistant && (
              <TagList
                bg="bg-lime-400"
                title="Resistant"
                items={pokemon.resistant}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const BoxTitle = tw.h4`
  text-white	
`;

const BoxBody = tw.p`
  text-2xl
`;
