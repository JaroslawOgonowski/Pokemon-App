//export const imageAPI = (id: number) => { `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg` }

export const fetchGallery = async (limit: number, offset: number): Promise<any> => {
  const params = new URLSearchParams({ limit: String(limit), offset: String(offset) })
  return fetch(`https://pokeapi.co/api/v2/pokemon?${params}`).then(
    (response) => response.json()
  )
};

export const fetchSoloPokemonInfo = async (pokeId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`).then(
    (response) => response.json()
  )
};

export const fetchSoloPokemonEvolution = async (pokeId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokeId}/`).then(
    (response) => response.json()
  )
};

export const fetchSoloPokemon = async (pokeId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`).then(
    (response) => response.json()
  )
};