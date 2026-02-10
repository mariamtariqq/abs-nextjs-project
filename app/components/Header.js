import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Preloader Start */}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="/images/favicon.ico" alt="" />
          </div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky bg-section">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo */}
              <Link className="navbar-brand" href="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>

              {/* Main Menu */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    {/* Restaurant POS Software */}
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Restaurant POS Software
                      </a>
                      <ul>
                        <li>
                          <Link className="nav-link" href="/pos-software">
                            WinRest Professional&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/winrest-lite">
                            WinRest Lite&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/winrest-enterprise">
                            WinRest Enterprise&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/adscreen">
                            AdScreen&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/winauthorize">
                            WinAuthorize&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/winrest-assetcontrols">
                            WinRest with Asset Controls&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/databasebackupserver">
                            WinRest Database Backup&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/web-ordering">
                            WinRest Mobile Pay&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/software-guest-screen">
                            WinRest Guest Screen&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/software-digital-signage">
                            WinRest HD Digital Signage&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/software-winvue">
                            WinVue&trade;
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Restaurant POS Systems */}
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Restaurant POS Systems
                      </a>
                      <ul>
                        <li>
                          <Link className="nav-link" href="/restaurant-point-of-sale-systems">
                            All-In-One POS
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-pos-software-winrest-assetcontrols">
                            Asset Controls&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-pos-software-guest-screen">
                            Guest Screen&trade;
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-pos-software-digital-signage">
                            HD Digital Signage Systems
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-pos-hd-digital-menu-board">
                            HD Digital Menu Boards
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-pos-pay-at-table">
                            Pay-at-Table Solutions
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/restaurant-table-point-of-sale">
                            Tablet POS
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Clients & Partners */}
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="/clientsandpartners">
                        Clients &amp; Partners
                      </Link>
                      <ul>
                        <li>
                          <Link className="nav-link" href="/contact">
                            Become a Partner
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/contact">
                            Become a Reseller
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Services & Support */}
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Services &amp; Support
                      </a>
                      <ul>
                        <li>
                          <Link className="nav-link" href="/contact">
                            Extend Your Warranty
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/contact">
                            POS Tune-Up
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/contact">
                            Parts &amp; Upgrades
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/faqs">
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="https://www.youtube.com/user/ABSPOS"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WinRest&trade; Resource Centre
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="#">
                            WinRest&trade; Online User Manual
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* About Us */}
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="/about">
                        About Us
                      </Link>
                      <ul>
                        <li>
                          <Link className="nav-link" href="/clientsandpartners">
                            Clients
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/about">
                            Environment
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/clientsandpartners">
                            Partners
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-link" href="/about">
                            ABS POS Labs
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Contact */}
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Header Button */}
                <div className="header-btn">
                  <a
                    href="http://winrest32.no-ip.biz/"
                    target="_blank"
                    className="btn-default btn-highlighted"
                  >
                    Reseller Login
                  </a>
                </div>
              </div>

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
