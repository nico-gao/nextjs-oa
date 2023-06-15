export async function getCharacterData(page: string | null) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page ? page : 1}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch character data");
  }
  return res.json();
}
