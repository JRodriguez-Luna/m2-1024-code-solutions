type Props = {
  pokedex: {
    number: string;
    name: string;
  }[];
};

export function PokemonList({ pokedex }: Props) {
  const listOfPokemon = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listOfPokemon}</ul>;
}
