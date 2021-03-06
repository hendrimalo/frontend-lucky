import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { JWTTypes } from '../../../services/data-types';

const AuthNavbar = function () {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    username: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTTypes = jwtDecode(jwtToken);
      const userFromPayload = payload.user;
      setIsLogin(true);
      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    setIsLogin(false);
    window.location.reload();
    // router.reload(window.location.pathname);
  };

  if (isLogin) {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {user.username}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link href="/reservation">
            <a className="dropdown-item">Reservation</a>
          </Link>
          <Link href="/order-list">
            <a className="dropdown-item">List Transaction</a>
          </Link>
          <div className="dropdown-divider" />
          <Link href="/">
            <button type="button" onClick={onLogout} className="dropdown-item">Logout</button>
          </Link>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <Link href="/signin">
        <a className="nav-link">
          Signin / Signup
          <span className="sr-only">(current)</span>
        </a>
      </Link>
    </li>
  );
};

export default AuthNavbar;
