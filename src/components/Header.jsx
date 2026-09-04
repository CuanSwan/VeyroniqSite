import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="vq-header-1">
      <div className="vq-div-2">
        <NavLink to="/" className="vq-a-1">
          <span className="vq-span-1"></span>
          <span className="vq-span-2">Veyroniq</span>
        </NavLink>
        <nav className="vq-nav-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'vq-a-3' : 'vq-a-2')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
