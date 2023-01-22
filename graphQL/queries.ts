import { gql } from "graphql-request";

export const SearchPokemon = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      evolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
