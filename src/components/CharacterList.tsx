"use client";

import { Character } from "@/types";
import CharacterCard from "./CharacterCard";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

interface CharacterListPros {
  characters: Character[];
  pageNumber: number;
  maxPage: number;
}

export default function CharacterList({
  characters,
  pageNumber,
  maxPage,
}: CharacterListPros) {
  const router = useRouter();

  console.log(characters);
  return (
    <div>
      <ul className="flex flex-wrap ">
        {characters.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}
      </ul>
      <Pagination
        page={pageNumber}
        onChange={(e, newPage) => {
          router.push(`/${newPage}`);
        }}
        count={maxPage}
      />
    </div>
  );
}
