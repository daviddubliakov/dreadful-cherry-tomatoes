import React from "react";
import classNames from "classnames";

import LeftChevron from "../../icons/LeftChevron";
import RightChevron from "../../icons/RightChevron";

import styles from "./styles.module.scss";

interface PaginationProps {
  totalPages: number;
  handleChangePage: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  handleChangePage,
  currentPage,
}) => {
  const PAGES = Array.from({ length: totalPages }, (v, k) => k + 1);

  return (
    <div className={styles.paginationWrapper}>
      <LeftChevron
        className={classNames({ [styles.disabledChevron]: currentPage === 1 })}
        onClick={() => handleChangePage(currentPage - 1)}
      />
      {PAGES.map((page, index) => (
        <div
          key={index}
          className={classNames(styles.circle, {
            [styles.active]: page === currentPage,
          })}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </div>
      ))}
      <RightChevron
        className={classNames({
          [styles.disabledChevron]: currentPage === totalPages,
        })}
        onClick={() => handleChangePage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
