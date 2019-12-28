// @flow strict
import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
};

const Layout = ({ children, title, description, socialImage }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className={styles.themeToggle}>
            <input
              className={styles.toggle}
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
              checked={theme === "light"}
            />{" "}
          </div>
        )}
      </ThemeToggler>
      {children}
    </div>
  );
};

export default Layout;
