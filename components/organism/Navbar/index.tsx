import Link from 'next/link';
import AuthNavbar from './Auth';

const Navbar = function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link href="/">
        <a className="navbar-brand">Lucky Barbershop</a>
      </Link>
      {/* Button Small Device */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/* ./Button Small Device */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#step-reservation">
              Steps
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-us">
              About Me
            </a>
          </li>
          <AuthNavbar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
