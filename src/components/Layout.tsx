import { NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <header className="site-shell site-header">
        <NavLink to="/" className="brand" end>
          Still <span>Rendering</span>
        </NavLink>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer className="site-shell site-footer">
        <p>
          <strong>Still Rendering</strong> is a fictional blog by Tony — frontend
          notes tangled with figuring himself out. 2023–2026.
        </p>
      </footer>
    </>
  )
}
