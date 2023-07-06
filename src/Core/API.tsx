//export const imageAPI = (id: number) => { `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg` }

export const fetchGallery = async (
  limit: number,
  offset: number
): Promise<any> => {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  return fetch(`https://pokeapi.co/api/v2/pokemon?${params}`).then((response) =>
    response.json()
  );
};

export const fetchSoloPokemonInfo = async (
  pokeId: string | null
): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`).then(
    (response) => response.json()
  );
};

export const fetchSoloPokemonEvolution = async (
  evolutionChainURL: string | null
): Promise<any> => {
  return fetch(`${evolutionChainURL}`).then((response) => response.json());
};

export const fetchSoloPokemon = async (pokeId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`).then(
    (response) => response.json()
  );
};

export const fetchAbilities = async (
  limit: number,
  offset: number
): Promise<any> => {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  return fetch(`https://pokeapi.co/api/v2/ability/?${params}`).then(
    (response) => response.json()
  );
};

export const fetchAbility = async (id: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/ability/${id}/`).then((response) =>
    response.json()
  );
};

export const fetchMoves = async (
  limit: number,
  offset: number
): Promise<any> => {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  return fetch(`https://pokeapi.co/api/v2/move/?${params}`).then((response) =>
    response.json()
  );
};

export const fetchMove = async (moveURL: string | null): Promise<any> => {
  return fetch(`${moveURL}`).then((response) => response.json());
};

export const fetchMoveById = async (moveId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/move/${moveId}/`).then((response) =>
    response.json()
  );
};

 export const fetchAllTypes = async (
  limit: number,
): Promise<any> => {
  const params = new URLSearchParams({
    limit: String(limit),
  });
  return fetch(`https://pokeapi.co/api/v2/type/?${params}`).then((response) =>
    response.json()
  );
};

export const fetchTypeById = async (typeId: string | null): Promise<any> => {
  return fetch(`https://pokeapi.co/api/v2/type/${typeId}/`).then((response) =>
    response.json()
  );
};