import React from 'react';

interface IPagination {
  onPageChange: (p: number) => void;
  currentPage: number | undefined;
  totalPages: number;
}
export const Pagination: React.FC<IPagination> = ({ onPageChange, currentPage, totalPages }) => {
  const nextPage = () => {
    onPageChange(currentPage! + 1);
  };
  const prevPage = () => {
    onPageChange(currentPage! - 1);
  };

  const pages = () => {
    const length = totalPages;
    return Array.from({ length }, (_, i) => i + 1);
  };

  return (
    <div className="flex justify-center space-x-1 text-secondaryText">
      <button
        onClick={prevPage}
        disabled={currentPage! <= 1}
        title="previous"
        type="button"
        className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md ${
          currentPage! <= 1 && 'text-gray/60'
        }`}>
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {pages().map((k) => (
        <button
          key={k}
          onClick={() => onPageChange(k)}
          type="button"
          className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
            k === currentPage && 'text-lightGray/30'
          }`}>
          {k}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={totalPages === currentPage}
        title="next"
        type="button"
        className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md ${
          totalPages === currentPage && 'text-gray/60'
        }`}>
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};
