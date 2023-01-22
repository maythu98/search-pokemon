import { Pokemon } from "interfaces/pokemon-interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Wrapper from "./Ui/Wrapper";
import tw from "tailwind-styled-components";
import AttackCard from "./AttackCard";
import TagList from "./TagList";
import Link from "next/link";
import DetailBox from "./DetailBox";
import ImageBox from "./ImageBox";
import EvoReqItem from "./EvoReqItem";

interface ItemCardInterface {
  pokemon: Pokemon;
}

export default function ItemCard({ pokemon }: ItemCardInterface) {
  return (
    <MainCard>
      <CardHeader>
        {pokemon.name} #{pokemon.number}
      </CardHeader>
      <hr />

      <GridMdCol>
        <ImgCol>
          <ImageBox image={pokemon.image} alt={pokemon.name} />

          <div className="mt-10">
            <SubHeader>Attacks</SubHeader>
            {pokemon.attacks.fast && (
              <AttackCard attacks={pokemon.attacks.fast} title="Fast" />
            )}
            {pokemon.attacks.special && (
              <AttackCard attacks={pokemon.attacks.special} title="Special" />
            )}
          </div>
        </ImgCol>

        <InfoCol>
          {pokemon.types && (
            <TagList bg="bg-indigo-500" title="Type" items={pokemon.types} />
          )}

          <DetailCard>
            <Wrapper>
              <GridCol className="gap-4">
                <DetailBox
                  title="Height"
                  desc={`${pokemon.height.minimum} - ${pokemon.height.maximum}`}
                />
                <DetailBox
                  title="Weight"
                  desc={`${pokemon.weight.minimum} - ${pokemon.weight.maximum}`}
                />
                <DetailBox
                  title="Classification"
                  desc={pokemon.classification}
                />
                <DetailBox title="Flee Rate" desc={pokemon.fleeRate} />
                <DetailBox title="Max CP" desc={pokemon.maxCP} />
                <DetailBox title="Max HP" desc={pokemon.maxHP} />
              </GridCol>
            </Wrapper>
          </DetailCard>

          {pokemon.evolutions && (
            <div>
              <SubHeader>Evolutions</SubHeader>
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
          )}

          {pokemon.evolutionRequirements && (
            <div>
              <SubHeader>Evolution Requirements</SubHeader>

              <GridCol>
                <EvoReqItem
                  title="Name"
                  desc={pokemon.evolutionRequirements.name}
                />
                <EvoReqItem
                  title="Amount"
                  desc={pokemon.evolutionRequirements.amount}
                />
              </GridCol>
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
        </InfoCol>
      </GridMdCol>
    </MainCard>
  );
}

const MainCard = tw.div`
rounded-lg shadow-lg bg-white w-full max-w py-5 my-6 px-3
`;

const ImgCol = tw.div`
gap-3 flex flex-col
`;

const InfoCol = tw.div`
flex flex-col justify-start text-start gap-6
`;

const DetailCard = tw.div`
rounded-lg shadow-lg bg-green-500 max-w py-3"
`;

const CardHeader = tw.div`
text-gray-900 text-3xl mb-3 font-medium mb-2 px-3
`;

const GridMdCol = tw.div`
grid md:grid-cols-2 gap-4 m-3
`;

const GridCol = tw.div`
grid grid-cols-2
`;

const SubHeader = tw.h3`
text-2xl my-2
`;
