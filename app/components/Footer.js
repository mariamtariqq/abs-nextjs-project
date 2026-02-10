import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer-prime bg-section dark-section-prime">
      <div className="footer-header-prime">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-header-content-prime">
                <div className="section-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Power your hospitality business with smart POS solutions
                  </h2>
                </div>

                <div className="footer-newsletter-form-prime">
                  <h3>Subscribe for ABS POS Updates</h3>
                  <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                      <input
                        type="email"
                        name="mail"
                        className="form-control"
                        id="mail"
                        placeholder="* Enter your email address"
                        required
                      />
                      <button type="submit" className="btn-default btn-highlighted">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-about-prime">
              <div className="footer-logo-prime">
                <img src="/images/logo.png" alt="Company Logo" />
              </div>

              <div className="about-footer-content-prime">
                <p>
                  ABS POS delivers powerful, easy-to-use point of sale solutions designed to
                  streamline operations, increase efficiency, and maximize profits for hospitality
                  businesses.
                </p>
              </div>

              <div className="footer-social-links-prime">
                <h3>Follow Us On Socials:</h3>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/abspos" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://hosted.comm100.com/Forum/Default.aspx?siteid=104918" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-comments"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/113169091263112049449" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.linkedin.com/company/abs-point-of-sale-inc." target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/#!/abspos" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.youtube.com/user/ABSPOS" target="_blank" rel="noopener noreferrer" title="Visit the official ABS YouTube channel, your source for news about ABS consumer products and services.">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/images/winrest-flyer-restaurant-pos.jpg" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-file-pdf"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://winrest.ca/support.html" target="_blank" rel="noopener noreferrer" title="Explorer the ABS WinRest™ Online User Manual. Learn the ins and outs of our Award-Winning software.">
                      <i className="fa-solid fa-book-open"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="footer-links-box-prime">
              <div className="footer-links-prime">
                <h3>Our Company</h3>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Careers</Link></li>
                  <li><Link href="/clientsandpartners">Clients and Partners</Link></li>
                  <li><Link href="/about">Environment</Link></li>
                  <li><Link href="/contact">Events</Link></li>
                  <li><Link href="/contact">Newsletter</Link></li>
                  <li><a href="http://winrest32.no-ip.biz/" target="_blank" rel="noopener noreferrer">Reseller Portal</a></li>
                  <li><Link href="/contact">Share this page</Link></li>
                </ul>
              </div>

              <div className="footer-links-prime">
                <h3>Hospitality Software</h3>
                <ul>
                  <li><Link href="/adscreen">AdScreen&trade;</Link></li>
                  <li><Link href="/winrest-lite">WinRest Lite&trade;</Link></li>
                  <li><Link href="/pos-software">WinRest Professional&trade;</Link></li>
                  <li><Link href="/winrest-enterprise">WinRest Enterprise&trade;</Link></li>
                  <li><Link href="/software-guest-screen">WinRest Guest Screen&trade;</Link></li>
                  <li><Link href="/winauthorize">WinAuthorize&trade;</Link></li>
                  <li><Link href="/web-ordering">WinRest Mobile Pay&trade;</Link></li>
                  <li><Link href="/software-winvue">WinVue&trade;</Link></li>
                </ul>
              </div>

              <div className="footer-links-prime">
                <h3>Hospitality Systems</h3>
                <ul>
                  <li><Link href="/restaurant-point-of-sale-systems">All-In-One POS</Link></li>
                  <li><Link href="/restaurant-pos-software-winrest-assetcontrols">Asset Controls&trade;</Link></li>
                  <li><Link href="/restaurant-pos-software-digital-signage">HD Digital Signage</Link></li>
                  <li><Link href="/restaurant-pos-hd-digital-menu-board">HD Digital Menus</Link></li>
                  <li><Link href="/restaurant-pos-pay-at-table">Pay At Table</Link></li>
                  <li><Link href="/contact">Supplies</Link></li>
                  <li><Link href="/restaurant-table-point-of-sale">Tablet POS</Link></li>
                </ul>
              </div>

              <div className="footer-links-prime footer-contact-links">
                <h3>Connect With Us</h3>
                <div className="footer-contact-list-prime">
                  <p>
                    <span>Our Address:</span> ABS Software Design Inc., 482 South Service Rd., Mississauga, ON, L5G 2S5, Canada
                  </p>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:sales@abspos.com">sales@abspos.com</a>
                  </p>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:softwaresupport@abspos.com">softwaresupport@abspos.com</a>
                  </p>
                  <p>
                    <span>Phone:</span> Canada (905) 278-7975
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-copyright-text-prime">
              <p>Copyright &copy; 2026 ABS Software Design Inc. All Rights Reserved. 00000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
