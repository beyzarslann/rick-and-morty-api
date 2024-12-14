import React from "react";

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
  // sayfa numarasını arttırma
  const next = () => {
    if (pageNumber < totalPages) {
      setPageNumber((x) => x + 1);
    }
  };

  // sayfa numarasını azaltma
  const prev = () => {
    if (pageNumber > 1) {
      setPageNumber((x) => x - 1);
    }
  };

  const createPageNumbers = () => {
    let pageNumbers = [];

    // İlk 3 sayfa
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(i);
    }

    if (pageNumber > 4) {
      pageNumbers.push("...");
    }

    const middleStart = Math.max(pageNumber - 1, 4);
    const middleEnd = Math.min(pageNumber + 1, totalPages - 1); // sayfa numarasından sonraki 2 sayfa
    for (let i = middleStart; i <= middleEnd; i++) {
      pageNumbers.push(i);
    }

    if (pageNumber < totalPages - 3) {
      pageNumbers.push("...");
    }

    for (let i = totalPages - 2; i <= totalPages; i++) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = createPageNumbers();

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${pageNumber === 1 ? "disabled" : ""}`}>
            <span
              className="page-link"
              onClick={prev}
              style={{ cursor: pageNumber === 1 ? "not-allowed" : "pointer" }}
            >
              Previous
            </span>
          </li>

          {pageNumbers.map((num, index) => (
            <li
              key={index}
              className={`page-item ${pageNumber === num ? "active" : ""} ${
                num === "..." ? "disabled" : ""
              }`}
            >
              {num === "..." ? (
                <span className="page-link">...</span>
              ) : (
                <span
                  className="page-link"
                  onClick={() => setPageNumber(num)}
                  style={{ cursor: "pointer" }}
                >
                  {num}
                </span>
              )}
            </li>
          ))}

          <li
            className={`page-item ${
              pageNumber === totalPages ? "disabled" : ""
            }`}
          >
            <span
              className="page-link"
              onClick={next}
              style={{
                cursor: pageNumber === totalPages ? "not-allowed" : "pointer",
              }}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
