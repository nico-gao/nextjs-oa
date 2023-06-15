{
  /* <button onClick={() => router.push("/1")}>1</button>
        {currentPage <= 4 ? (
          <button onClick={() => router.push("/2")}>2</button>
        ) : (
          <div>...</div>
        )}
        {currentPage <= 4 ? (
          <button onClick={() => router.push("/3")}>3</button>
        ) : (
          <button onClick={() => router.push("/" + (currentPage - 1))}>
            {currentPage - 1}
          </button>
        )}

        {currentPage <= 4 ? (
          <button onClick={() => router.push("/4")}>4</button>
        ) : (
          <button onClick={() => router.push("/" + (currentPage))}>
            {currentPage}
          </button>
        )}
        {currentPage <= 4 ? (
          <button onClick={() => router.push("/5")}>5</button>
        ) : (
          <button onClick={() => router.push("/" + (currentPage + 1))}>
            {currentPage + 1}
          </button>
        )}
        {currentPage >= maxPage -4 ?:} */
}

("use client");
import { useRouter } from "next/navigation";
import "./Pagination.css";
interface PaginationProps {
  currentPage: number;
  maxPage: number;
}

export default function Pagination({ currentPage, maxPage }: PaginationProps) {
  const router = useRouter();
  return (
    <div className="pagination__container">
      <button
        className={currentPage <= 1 ? "btn-disabled" : ""}
        onClick={() => {
          router.push(`/${currentPage - 1}`);
        }}
      >
        &lt;
      </button>
      <div className="pagination__pages">
        {currentPage > 2 && (
          <button onClick={() => router.push("/1")}>1</button>
        )}

        {currentPage >= 4 && <p>...</p>}
        {currentPage >= 2 && (
          <button onClick={() => router.push(`/${currentPage - 1}`)}>
            {currentPage - 1}
          </button>
        )}
        <button id="page-current">{currentPage}</button>
        {currentPage < maxPage && (
          <button onClick={() => router.push(`/${currentPage + 1}`)}>
            {currentPage + 1}
          </button>
        )}
        {currentPage <= maxPage - 3 && <p>...</p>}

        {currentPage < maxPage - 1 && (
          <button onClick={() => router.push(`/${maxPage}`)}>{maxPage}</button>
        )}
      </div>
      <button
        className={currentPage >= maxPage ? "btn-disabled" : ""}
        onClick={() => {
          router.push(`/${currentPage + 1}`);
        }}
      >
        &gt;
      </button>
    </div>
  );
}
