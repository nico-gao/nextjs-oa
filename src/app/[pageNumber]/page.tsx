import { getCharacterData } from "@/api/characters";
import CharacterList from "@/components/CharacterList";

import { Character } from "@/types";
import React from "react";

interface CharactersPageProps {
  params: {
    pageNumber: string;
  };
}
export default async function CharactersPage({
  params: { pageNumber },
}: CharactersPageProps) {
  const res = await getCharacterData(pageNumber.toString());
  const maxPage = res.info.pages - 1;
  const characters: Character[] = res.results;
  console.log(res);
  return (
    <div>
      <h1 className="my-5 text-center text-xl">Rick and Morty Characters</h1>
      <CharacterList
        characters={characters}
        pageNumber={+pageNumber}
        maxPage={maxPage}
      />
      {/* <Pagination currentPage={+pageNumber} maxPage={maxPage} /> */}
    </div>
  );
}
