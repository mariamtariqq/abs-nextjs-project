import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Guest Screen™ | Waitlist Management Software | ABS POS",
  description:
    "When your establishment is becomes busy, WinRest and Guest Screen™ instantly reduce overcrowded greeting areas and turn-aways. Find out how.",
};

export default function RestaurantPosSoftwareGuestScreenPage() {
  return (
    <>
      <Header />

      {/* Page Header Section Start */}
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Guest Screen&trade; Waitlist Management
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Guest Screen&trade;
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      {/* Page Content Start */}
      <div className="page-faqs">
        <div className="container-md">
          {/* Banner Image */}
          <div className="text-center w-full mb-4">
            <img
              src="/images/-software-guest-screen-images/banner-restaurant-pos-systems.jpg"
              alt="Guest Screen Banner"
              style={{ width: "100%" }}
            />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li>
                      <h6>ABS Hospitality Software Apps</h6>
                    </li>
                    <li>
                      <Link href="/adscreen">AdScreen&trade; POS Advertising</Link>
                    </li>
                    <li>
                      <Link href="/winauthorize">
                        WinAuthorize&trade; Payment Processing
                      </Link>
                    </li>
                    <li>
                      <Link href="/databasebackupserver">
                        WinRest Database Backup Server&trade;
                      </Link>
                    </li>
                    <li>
                      <Link href="/winrest-assetcontrols">
                        WinRest with Asset Controls&trade;
                      </Link>
                    </li>
                    <li>
                      <a href="#">WinRest HD Digital Signage&trade;</a>
                    </li>
                    <li>
                      <Link href="/winrest-enterprise">WinRest Enterprise&trade;</Link>
                    </li>
                    <li className="active">
                      <Link href="/software-guest-screen">
                        WinRest Guest Screen&trade;
                      </Link>
                    </li>
                    <li>
                      <Link href="/winrest-lite">WinRest Lite&trade;</Link>
                    </li>
                    <li>
                      <a href="#">WinRest Mobile&trade;</a>
                    </li>
                    <li>
                      <a href="#">WinRest Professional&trade;</a>
                    </li>
                    <li>
                      <a href="#">WinVue&trade;</a>
                    </li>

                    <li>
                      <h6>Page Tools</h6>
                    </li>
                    <li>
                      <a href="#">Share this page on Facebook</a>
                    </li>
                    <li>
                      <a href="#">Share this page on LinkedIn</a>
                    </li>
                    <li>
                      <a href="#">Share this page on Twitter</a>
                    </li>
                    <li>
                      <a href="#">Live Chat</a>
                    </li>
                    <li>
                      <a href="#">Print</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div
                className="software-main-banner"
                style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
              >
                <img
                  src="/images/-software-guest-screen-images/restaurant-pos-software-box-guestscreen.jpg"
                  alt="Guest Screen Software"
                  style={{ width: "30%", maxWidth: "200px" }}
                />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
                    Guest Screen&trade; Waitlist Management
                  </h2>
                  <p
                    style={{
                      margin: "10px 0 0 0",
                      fontSize: "18px",
                      color: "#666",
                    }}
                  >
                    Simple and Affordable Guest-Flow Management{" "}
                    <strong>Made Easy</strong>
                  </p>
                </div>
                <div className="buttons">
                  <a href="#" className="btn-default btn-sm">
                    Watch Now
                  </a>
                  <a href="#" className="btn-default btn-sm">
                    Try Now
                  </a>
                  <a href="#" className="btn-default btn-sm">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="post-tag-links">
                <div className="post-tags wow fadeInUp">
                  <span className="tag-links">
                    <a href="#">Download</a>
                    <a href="#">Buy</a>
                    <a href="#">FAQ</a>
                    <a href="#">Request a Demo</a>
                    <a href="#requirements">Requirements</a>
                    <a href="#">Read Reviews</a>
                    <a href="#">Watch Video</a>
                  </span>
                </div>
              </div>
              <br />
              <br />
              <div className="post-content">
                <div className="post-entry border-0">
                  <p className="wow fadeInUp">
                    When your restaurant or establishment is busy,{" "}
                    <strong>WinRest&trade; with Guest Screen&trade;</strong> can instantly
                    reduce walk-in turn-aways and overcrowded greeting areas with effective
                    waitlist management software and displays. Furthermore, Guest
                    Screen&trade; gives your guests wait-time information and the freedom to
                    roam your establishment while they wait for their table.
                  </p>

                  <p className="wow fadeInUp">
                    <strong>
                      If you have any questions, chat live with an Expert Advisor or call
                      905-278-7975 or 209-233-8846
                    </strong>
                  </p>

                  <blockquote className="wow fadeInUp">
                    <p>
                      This version of WinRest and Guest Screen&trade; is highly recommended
                      for general type Restaurant and/or Bar, Pizzeria, Steak House, Buffet,
                      Hotel restaurant/kitchen, Sports Arena, Pool Hall, Movie Theatre,
                      Entertainment Complex and more.
                    </p>
                  </blockquote>

                  <h6 className="wow fadeInUp">
                    Guest Screen&trade; Waitlist Management Software Key Features
                  </h6>

                  <ul className="wow fadeInUp">
                    <li>
                      Enables highly graphical guest-facing displays to communicate
                      wait-times
                    </li>
                    <li>
                      <strong>IMPROVED!</strong> Display advertisements to guests throughout
                      the restaurant
                    </li>
                    <li>
                      <strong>IMPROVED!</strong> Display seating and waiting party
                      information
                    </li>
                    <li>
                      <strong>NEW!</strong> Web-based support
                    </li>
                    <li>Multi-monitor support</li>
                    <li>Powered by Microsoft.NET technology</li>
                  </ul>

                  <h6 className="wow fadeInUp">
                    Guest Screen&trade; Benefits at a Glance
                  </h6>

                  <ul className="wow fadeInUp">
                    <li>
                      Relieves stress and workload on team members at the hostess stand
                    </li>
                    <li>Drives brand loyalty and guest satisfaction</li>
                    <li>Fully integrated with WinRest Mobile&trade;</li>
                    <li>Replaces costly legacy pager systems</li>
                  </ul>

                  <div className="text-center mt-4">
                    <img
                      src="/images/-software-guest-screen-images/btn-volume-purchasing.png"
                      alt="Volume Purchasing"
                    />
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-8">
                      <img
                        src="/images/-software-guest-screen-images/LCD-GuestScreen.jpg"
                        alt="LCD Guest Screen"
                        className="img-fluid wow fadeInUp"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/images/-software-guest-screen-images/tablet-GuestScreen.jpg"
                        alt="Tablet Guest Screen"
                        className="img-fluid wow fadeInUp"
                      />
                      <p
                        className="mt-2"
                        style={{ fontSize: "12px", color: "#666" }}
                      >
                        <strong>
                          Enter guest information on any mobile device running Windows
                          Mobile 6.0 or later.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content End */}

      {/* How Guest Screen Works Section Start */}
      <div
        className="our-features-prime bg-section"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp" style={{ color: "#333" }}>
                  How
                </h3>
                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                  style={{ color: "#333" }}
                >
                  Effective Guest Management
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Item 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-1-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Guest Flow Management</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    When your establishment reaches capacity, WinRest Mobile&trade; and Guest
                    Screen&trade; provide effective tools to any host or restaurant to
                    properly manage customer queuing to prevent overcrowded greeting areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-2-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Display Table Wait Times</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Instantly reduce walk-in turn-aways and crowded greeting areas by
                    providing guests with their table status and wait time information on
                    attractive guest-facing displays.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-1-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Seating &amp; Party Info</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Seating and Party information make it easy for your guests to know when
                    their table is ready and if their guests have arrived.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-2-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Drive Brand Loyalty</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    By providing top-notch professional front-of-house service with Guest
                    Screen&trade;, you help{" "}
                    <strong>
                      <em>drive brand loyalty, guest satisfaction</em>
                    </strong>{" "}
                    and provide a more predictable and fluid restaurant.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-1-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Quick Data Entry</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Guest information is sent instantly and automatically to Guest
                    Screen&trade; displays from your mobile device running Windows
                    Mobile&reg; and WinRest Mobile.{" "}
                    <strong>
                      <em>Entering guest information is quick</em>
                    </strong>{" "}
                    and can be performed in under 10 seconds and can be performed just about
                    anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/icon-why-choose-item-2-prime.svg"
                      alt=""
                      style={{ width: "60px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Multi-Monitor Support</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Keep your guests satisfied knowing they have highly-graphical
                    guest-facing displays showing their table status and wait time
                    information. And the built-in multi-monitor support allows for enhanced
                    marketing capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How Guest Screen Works Section End */}

      {/* Benefits Section Start */}
      <div className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Guest Screen&trade;</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Ultimate Enhancement
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Customizable Interface</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Give Guest Screen&trade; the look and feel of your
                    establishment&apos;s brand with a fully customizable interface. And for
                    ultimate customization, Guest Screen&trade; has built-in web based
                    functionality for website integration and much more.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>A Better Experience</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Great customer service builds long-lasting relationships. Enhance your
                    restaurant&apos;s toolbox with Guest Screen&trade; for wait-list
                    management. Provide{" "}
                    <strong>
                      <em>up-to-the-minute wait times</em>
                    </strong>{" "}
                    with a highly graphical interface that will keep guests informed and
                    coming back.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Eliminiate Expensive Pagers</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Replacing those costly pager systems is incredibly easy and affordable.
                    And not only are &ldquo;pagers&rdquo; a liability, they can become dirty
                    or even worse, lost. Furthermore, with{" "}
                    <strong>
                      <em>Guest Screen&trade;</em>
                    </strong>
                    , there is no need for any other costly subscription based systems or
                    applications. Guest Screen&trade; costs less, and does far more.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Empower Your Host/Hostess</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    When your establishment reaches capacity, WinRest Guest Screen&trade;
                    provides effective tools to any host or hostess station to properly{" "}
                    <strong>
                      <em>
                        manage all customer queuing to prevent overcrowded greeting areas
                      </em>
                    </strong>
                    . Furthermore, Guest Screen&trade; on any mobile device running Windows
                    Mobile 6&reg; or newer allows staff to reach customers from just about
                    anywhere in or near your establishment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Costs Less, Does More</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Put an end to expensive pager systems and subscription-based
                    applications that have reoccurring costs. Guest Screen&trade; is
                    affordable, costs less that traditional legacy paging and
                    subscription-based systems, and does far more. With{" "}
                    <strong>
                      <em>built-in multi-monitor support</em>
                    </strong>
                    , display your wait times on one screen, and your advertising
                    campaign/website on the other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits Section End */}

      {/* System Requirements Section Start */}
      <div id="requirements" className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">
            <div className="text-center mt-4">
              <img
                src="/images/-software-guest-screen-images/restaurant-pos-protection.jpg"
                alt="Restaurant POS Protection"
                style={{ width: "100%", maxWidth: "1000px" }}
              />
            </div>

            <div className="text-center mt-4">
              <img
                src="/images/-software-guest-screen-images/point-of-sale-software-guestscreen.jpg"
                alt="Point of Sale Software Guest Screen"
                style={{ width: "100%", maxWidth: "1000px" }}
              />
            </div>

            <div className="text-center mt-4">
              <img
                src="/images/-software-guest-screen-images/winrest-users.jpg"
                alt="WinRest Users"
                style={{ width: "100%", maxWidth: "1000px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* System Requirements Section End */}

      <Footer />
    </>
  );
}
