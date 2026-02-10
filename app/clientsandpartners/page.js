import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Clients & Partners | ABS Software for Canada United States(US) Europe",
  description:
    "WinRest with Asset Controls™ is the most powerful beverage management system engineered specifically for the hospitality industry. Monitor every ounce poured in real time online with wireless technology.",
  keywords:
    "liquor inventory, liquor control system, liquor system, liquor systems, software pubs, liquor control systems, liquor dispensing system, liquor controls, liquor inventory control, alcohol dispensers, beer inventory control, beverage management system, beer control inventory",
};

export default function ClientsAndPartnersPage() {
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
                  Clients &amp; Partners
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Clients &amp; Partners
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      {/* Page Faqs Start */}
      <div className="page-faqs">
        <div className="container-md">
          <div className="text-center w-full mb-4">
            <img
              src="/images/clientsandpartners/banner-restaurant-clients.jpg"
              alt="WinRest Asset Controls Banner"
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
                      <Link href="/winauthorize">WinAuthorize&trade; Payment Processing</Link>
                    </li>
                    <li><a href="#">WinRest Database Backup Server&trade;</a></li>
                    <li className="active">
                      <Link href="/winrest-assetcontrols">
                        WinRest with Asset Controls&trade;
                      </Link>
                    </li>
                    <li><a href="#">WinRest HD Digital Signage&trade;</a></li>
                    <li>
                      <Link href="/winrest-enterprise">WinRest Enterprise&trade;</Link>
                    </li>
                    <li><a href="#">WinRest Guest Screen&trade;</a></li>
                    <li>
                      <Link href="/winrest-lite">WinRest Lite&trade;</Link>
                    </li>
                    <li><a href="#">WinRest Mobile&trade;</a></li>
                    <li><a href="#">WinRest Professional&trade;</a></li>
                    <li><a href="#">WinRest Ultimate&trade;</a></li>
                    <li><a href="#">WinVue&trade;</a></li>

                    <li>
                      <h6>Page Tools</h6>
                    </li>
                    <li><a href="#">Share this page on Facebook</a></li>
                    <li><a href="#">Share this page on LinkedIn</a></li>
                    <li><a href="#">Share this page on Twitter</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Print</a></li>
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
                  src="/images/clientsandpartners/ribbon.gif"
                  alt="WinRest Asset Controls Software"
                  style={{ width: "30%", maxWidth: "200px" }}
                />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h4 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
                    Our Partners are apart of the world&apos;s finest network of restaurateurs in
                    the world!
                  </h4>
                  <p style={{ margin: "10px 0 0 0", fontSize: "18px", color: "#666" }}>
                    Introducing WinRest with Asset Controls&trade; for Point of Sale
                  </p>
                </div>
              </div>

              {/* Our Features Section Start */}
              <div className="our-features-prime" style={{ color: "#000" }}>
                <div className="container">
                  <div className="row section-row">
                    <div className="col-xl-12">
                      <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp" style={{ color: "#000" }}>
                          Clients &amp; Partners
                        </h3>
                        <h2
                          className="text-anime-style-3"
                          data-cursor="-opaque"
                          style={{ color: "#000" }}
                        >
                          Clients &amp; Partners
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div
                        className="feature-item-prime wow fadeInUp"
                        style={{ color: "#000" }}
                      >
                        <div className="feature-item-header-prime">
                          <div className="feature-item-title-prime">
                            <h3 style={{ color: "#000" }}>Who can become a partner?</h3>
                          </div>
                        </div>
                        <div className="feature-item-content-prime">
                          <p style={{ color: "#000" }}>
                            The ABS Software Design Inc., Partner Program provides organizations
                            with the expertise to sell, manage, integrate, plan and implement ABS
                            solutions for customers worldwide. ABS currently provides opportunities
                            for partnerships within the Channel, Technology &amp; Platform, and
                            Global Strategic Partner Porgrams.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-md-6">
                      <div
                        className="feature-item-prime wow fadeInUp"
                        style={{ color: "#000" }}
                      >
                        <div className="feature-item-header-prime">
                          <div className="feature-item-title-prime">
                            <h3 style={{ color: "#000" }}>Channel Partners</h3>
                          </div>
                        </div>
                        <div className="feature-item-content-prime">
                          <p style={{ color: "#000" }}>
                            Qualified applications to the Channel Partner Program are resellers or
                            distributors of software an/or hardware. Became a Channel Partner
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-md-6">
                      <div
                        className="feature-item-prime wow fadeInUp"
                        style={{ color: "#000" }}
                      >
                        <div className="feature-item-header-prime">
                          <div className="feature-item-title-prime">
                            <h3 style={{ color: "#000" }}>
                              Technology &amp; Platform Partners
                            </h3>
                          </div>
                        </div>
                        <div className="feature-item-content-prime">
                          <p style={{ color: "#000" }}>
                            Qualified applicants include hardware and software vendors interested in
                            integrating and/or testing their solutions with ABS Software. Become a
                            Technology &amp; Platform Partner
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 col-md-6">
                      <div
                        className="feature-item-prime wow fadeInUp"
                        style={{ color: "#000" }}
                      >
                        <div className="feature-item-header-prime">
                          <div className="feature-item-title-prime">
                            <h3 style={{ color: "#000" }}>Features Clients</h3>
                          </div>
                        </div>
                        <div className="feature-item-content-prime">
                          <p style={{ color: "#000" }}>
                            We enjoy partnering with the worlds top restaurants. We work with our
                            clients as partners, cultivating long-term relationships to ensure their
                            success. This commitment is reflected in our business and financial
                            models.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Our Features Section End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Faqs End */}

      {/* How It Work Section Start */}
      <div className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">
            <div className="text-center mt-3">
              <img
                src="/images/winrest-assetcontrols-mages/winrest-users.jpg"
                alt="WinRest Users"
                style={{ width: "100%", maxWidth: "1000px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      <Footer />
    </>
  );
}
