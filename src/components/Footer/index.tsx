import React from "react";

import AppStore from "../../icons/AppStore";
import GooglePlay from "../../icons/GooglePlay";
import Logo from "../../icons/Logo";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <Logo width="206px" />
      <div className={styles.actionsContainer}>
        <a
          href="https://apps.apple.com/ua/app/megogo-%D1%82%D0%B2-%D0%BA%D0%B8%D0%BD%D0%BE-%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8/id565967395?l=ru"
          target="_blank"
        >
          <AppStore />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.megogo.application&hl=ru&gl=US&pli=1"
          target="_blank"
        >
          <GooglePlay />
        </a>
      </div>
      <p className={styles.description}>
        © Copyright 2022 Dreadful Tomatoes. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
