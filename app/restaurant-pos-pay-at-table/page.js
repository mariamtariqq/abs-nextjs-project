import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title:
    "WinRest™ Pay at Table | Restaurant Systems for Canada United States(US) Europe",
  description:
    "WinRest Mobile Ordering and Web Ordering Apps. Branded mobile apps for restaurants. Order and pay from smartphones. Customer loyalty and rewards programs.",
};

export default function RestaurantPosPayAtTablePage() {
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
                  WinRest&trade; and Pay At Table&trade;
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      WinRest&trade; and Pay At Table&trade;
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
              src="/images/web-ordering-images/APPS.png"
              alt="Mobile Ordering Apps"
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
                    <li>
                      <a href="#">WinRest Guest Screen&trade;</a>
                    </li>
                    <li>
                      <Link href="/winrest-lite">WinRest Lite&trade;</Link>
                    </li>
                    <li className="active">
                      <Link href="/web-ordering">
                        WinRest Mobile Ordering&trade;
                      </Link>
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
                  src="/images/restaurant-pos-pay-at-table/Capture.JPG"
                  alt="Mobile Ordering App"
                  style={{ width: "30%", maxWidth: "200px" }}
                />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
                    Introducing WinRest&trade; and Pay At Table&trade;
                  </h2>
                  <p
                    style={{
                      margin: "10px 0 0 0",
                      fontSize: "18px",
                      color: "#666",
                    }}
                  >
                    Accept payments quickly and easily. You will appreciate the power and
                    simplicity.
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
                    <a href="#benefits">Benefits</a>
                    <a href="#">Price</a>
                    <a href="#faq">FAQ</a>
                    <a href="#requirements">Requirements</a>
                    <a href="#quotes">Read Reviews</a>
                    <a href="#">Watch Video</a>
                  </span>
                </div>
              </div>
              <br />
              <br />
              <div className="post-content">
                <div className="post-entry border-0">
                  <h6 className="wow fadeInUp">
                    Accept payments quickly and easily. You will appreciate the power and
                    simplicity.
                  </h6>

                  <p className="wow fadeInUp">
                    Ultra-Secure, fast, and portable. If you already have or are thinking
                    about using WinRest&trade;, now is the time because together with Pay at
                    Table&trade;, customers will know that their credit card data is safer,
                    and they can pay for their bill much faster, keeping them loyal with
                    excellent service.
                  </p>

                  <p className="wow fadeInUp">
                    As the final point of contact with patrons, payments remain a critical
                    part of outstanding customer service. If this is important to you, then
                    read on or contact your authorized WinRest&trade; Reseller today to learn
                    how to get started by calling 905-278-7975.
                  </p>
                  <div
                    className="images-2small"
                    style={{ display: "flex", alignItems: "center", gap: "3rem" }}
                  >
                    <img
                      src="/images/restaurant-pos-pay-at-table/download1.png"
                      alt=""
                    />
                    <img
                      src="/images/restaurant-pos-pay-at-table/download2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content End */}

      {/* Extend Your Reach Section Start */}
      <div
        className="why-choose-us-prime bg-section"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="section-title">
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
              style={{ color: "#4B1C40" }}
            >
              How WinRest Pay at Table&trade; Will Benefit Your Establishment.
            </h2>
          </div>

          <div className="text-center">
            <img
              src="/images/restaurant-pos-pay-at-table/PAT-COMBO1.png"
              alt="Mobile Pay Receipt"
              className="img-fluid wow fadeInUp"
              style={{ width: "100%" }}
            />
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="why-choose-content-prime">
                <img
                  src="/images/restaurant-pos-pay-at-table/PAY-HIG1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="why-choose-content-prime">
                <img
                  src="/images/restaurant-pos-pay-at-table/PAY-HIG2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="why-choose-content-prime">
                <img
                  src="/images/restaurant-pos-pay-at-table/PAY-HIG3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Extend Your Reach Section End */}

      {/* FAQ Section Start */}
      <div id="faq" className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">FAQ</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Item 1 */}
            <div className="col-xl-6 col-md-6">
              <div
                className="feature-item-prime wow fadeInUp"
                style={{ color: "#fff" }}
              >
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/web-ordering-images/315.png"
                      alt="Security"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>
                      Q. Will WinRest Pay at Table&trade; help increase revenue?
                    </h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    A. With faster table turnovers, happier customers, and less liability of
                    credit card fraud, WinRes Pay at Table&trade; will help keep customers
                    coming back for more. All of this translates into loyal customers, who in
                    turn, spend more with you.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-xl-6 col-md-6">
              <div
                className="feature-item-prime wow fadeInUp"
                style={{ color: "#fff" }}
              >
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/web-ordering-images/1047.png"
                      alt="Customizable"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>
                      Q. Can I process cards that have Chip &amp; Pin technology? And what
                      is it?
                    </h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    A. Yes. And with EMV (Global standard for Integrated circuit cards)
                    coming to the US, the time to get started is now. EMV is a security
                    framework that defines payment interactions at the physical, electrical,
                    data and application levels for an increased level of security. This
                    technology will be required in the US as of October 2016.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-xl-6 col-md-6">
              <div
                className="feature-item-prime wow fadeInUp"
                style={{ color: "#fff" }}
              >
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/web-ordering-images/46633.png"
                      alt="Loyalty"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>
                      Q. How many PinPads with WinRest Pay at Table&trade; can I implement
                      in my establishment?
                    </h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    A. There is virtually no limit to how many devices you can connect to
                    WinRest&trade;. You can start with as many as is required, and if
                    necessary, you always have the ability to add more payment terminals to
                    your system.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-xl-6 col-md-6">
              <div
                className="feature-item-prime wow fadeInUp"
                style={{ color: "#fff" }}
              >
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img
                      src="/images/web-ordering-images/46997.png"
                      alt="Feature Rich"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>
                      Q. Apart from EMV, how else does WinRest Pay at Table&trade; enhance
                      an establishment?
                    </h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    A. Giving staff the ability to retrieve their tables/transactions right
                    from the Pin Pads without having to access the point of sale, leaves the
                    machines available for order entry, reporting or anything else for that
                    matter. Furthermore, customers never lose sight of their debit card
                    during the payment process, taking away that uncomfortable feeling.
                    Contact your authorized WinRest&trade; Reseller today to learn how to
                    get started by calling <strong>905-278-7975.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section End */}

      {/* System Requirements Section Start */}
      <div id="requirements" className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">
            <div id="quotes" className="text-center mt-2">
              <img
                src="/images/restaurant-pos-pay-at-table/point-of-sale-software-winauthorize.jpg"
                alt="WinRest Users"
                style={{ width: "100%", maxWidth: "1000px" }}
              />
            </div>
            <div className="text-center mt-5">
              <img
                src="/images/web-ordering-images/winrest-users.jpg"
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
