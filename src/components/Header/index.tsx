import React from "react";

import LogoIcon from "../../icons/Logo";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <LogoIcon />
    </header>
  );
};

export default Header;
