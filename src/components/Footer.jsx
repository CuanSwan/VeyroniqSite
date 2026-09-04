import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="vq-footer-1">
      <div className="vq-div-15">
        <div>
          <div className="vq-div-16">
            <span className="vq-span-4"></span>
            <span className="vq-span-5">Veyroniq</span>
          </div>
          <p className="vq-p-8">
            Custom software and SaaS for local businesses. London, since 2017.
          </p>
          <p className="vq-p-9">© 2026 Veyroniq Ltd</p>
        </div>
        <nav className="vq-nav-2">
          <Link className="vq-a-8" to="/">Home</Link>
          <Link className="vq-a-8" to="/portfolio">Portfolio</Link>
          <Link className="vq-a-8" to="/about">About Us</Link>
          <Link className="vq-a-8" to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
