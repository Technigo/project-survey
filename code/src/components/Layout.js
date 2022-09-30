import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">Borzoi survey</header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">Hello yes this is footer</footer>
    </div>

  );
}

export default Layout;