import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 bg-gray-200 rounded disabled:hidden disabled:opacity-50"
      >
        <GrFormPrevious />
      </button>
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => {
            onPageChange(page)
            window.scrollTo({ top: 0 });
          }}
          className={`px-3 py-1.5 rounded ${page === currentPage
            ? "bg-main-color text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 bg-gray-200 rounded disabled:hidden hover:bg-main-color hover:text-white duration-500 disabled:opacity-50"
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};
