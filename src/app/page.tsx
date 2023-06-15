import { getCharacterData } from "@/api/characters";
import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/MyPagination";
import { Character } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  // const currentPage = 1;
  // const maxPage = 1;
  // const res = await getCharacterData(currentPage);
  // const characters: Character[] = res.results;
  // console.log(characters);
  // return (
  //   <div>
  //     <h1 className="my-5 text-center text-xl">Rick and Morty Characters</h1>
  //     <CharacterList characters={characters} />
  //     <button
  //       onClick={() => {
  //         router.push("/?page=2");
  //       }}
  //     >
  //       Go
  //     </button>
  //     {/* <Pagination
  //       currentPage={1}
  //       maxPage={5}
  //       nextPageHandler={nextPageHandler}
  //       prevPageHandler={prevPageHandler}
  //       pageClickHandler={pageClickHandler}
  //     /> */}
  //   </div>
  // );
}
