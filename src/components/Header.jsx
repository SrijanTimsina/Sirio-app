import Logo from "../assets/BrandingAssets-main/Brand/Logo.svg";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img
        className='logo'
        src={Logo}
        alt='sirio'
      />
      <nav>
        <button>
          <NavLink to='/app'>Dashboard</NavLink>
        </button>
        <button>
          <NavLink to='markets'>Markets</NavLink>
        </button>
        <button>
          <NavLink to='vote'>Vote</NavLink>
        </button>
      </nav>

      <div className='button'>
        <button
          id='connect-wallet-btn'
          className='primary-btn'
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
