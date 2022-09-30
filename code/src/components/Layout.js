import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">Borzoi survey</header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer"><a href="https://www.amandas.dev" className="footer-link">© amandas.dev 2023</a></footer>
    </div>

  );
}

export default Layout;