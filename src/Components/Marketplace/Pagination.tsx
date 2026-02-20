import Caret_Left from "../../assets/Icons/Caret_Left";
import Caret_Right from "../../assets/Icons/Caret_Right";
import type { PaginationProps } from "../../Utils/Types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4 text-white">
      {/* Previous */}
      <button
        className="cursor-pointer text-custom-beige-200 hover:text-custom-teal-500 transition-colors px-2 py-1 rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Caret_Left width={25} height={25} />
      </button>

      {/* Dynamische Seitenzahlen */}
      {Array.from({ length: lastPage }, (_, i) => i + 1)
        .filter((page) => {
          if (page === 1 || page === lastPage) return true;
          if (page >= currentPage - 1 && page <= currentPage + 1) return true;
          return false;
        })
        .map((page, idx, arr) => {
          const nextPage = arr[idx + 1];
          const showDots = nextPage && nextPage - page > 1;

          return (
            <span key={page} className="flex items-center gap-1">
              <button
                className={`px-3 py-1 transition-opacity cursor-pointer ${
                  page === currentPage
                    ? "opacity-100"
                    : "opacity-70 hover:text-custom-teal-500 transition-colors"
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
              {showDots && <span className="px-1">...</span>}
            </span>
          );
        })}

      {/* Next */}
      <button
        className="cursor-pointer text-custom-beige-200 hover:text-custom-teal-500 transition-colors px-2 py-1 rounded disabled:opacity-50"
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Caret_Right width={25} height={25} />
      </button>
    </div>
  );
};

export default Pagination;
