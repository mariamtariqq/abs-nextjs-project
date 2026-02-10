import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "WinAuthorize™ | Payment Processing Software for Point of Sale",
};

export default function Winauthorize() {
  return (
    <>
      <Header />

      {/* Page Header Section Start */}
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque"> WinAuthorize&trade; for Point of Sale</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> WinAuthorize&trade; for Payment Processing</li>
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
            <img src="/images/winauthorize-images/banner-payment-processing.jpg" alt="WinAuthorize Payment Processing" style={{ width: "100%" }} />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li><h6>ABS Hospitality Software Apps</h6></li>
                    <li><a href="#">AdScreen&trade; POS Advertising</a></li>
                    <li><a href="#">WinAuthorize&trade; Payment Processing</a></li>
                    <li><a href="#">WinRest Database Backup Server&trade;</a></li>
                    <li><a href="#">WinRest with Asset Controls&trade;</a></li>
                    <li><a href="#">WinRest HD Digital Signage&trade;</a></li>
                    <li><a href="#">WinRest Enterprise&trade;</a></li>
                    <li><a href="#">WinRest Guest Screen&trade;</a></li>
                    <li><a href="#">WinRest Lite&trade;</a></li>
                    <li><a href="#">WinRest Mobile&trade;</a></li>
                    <li><a href="#">WinRest Professional&trade;</a></li>
                    <li><a href="#">WinVue&trade;</a></li>

                    <li><h6>Page Tools</h6></li>
                    <li><a href="#">Share this page on Facebook</a></li>
                    <li><a href="#">Share this page on LinkedIn</a></li>
                    <li><a href="#">Share this page on Twitter</a></li>
                    <li><a href="#">Live Chat Software for Website</a></li>
                    <li><a href="#">Print</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9">

              <div className="software-main-banner" style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <img src="/images/winauthorize-images/bd-header-winauthorize.jpg" alt="WinAuthorize Payment Processing" style={{ width: "30%", maxWidth: "500px" }} />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>WinAuthorize&trade; for Point of Sale</h2>
                  <p style={{ margin: "10px 0 0 0", fontSize: "18px", color: "#666" }}>Are you paying too much for payment processing?</p>
                  <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#888", fontStyle: "italic" }}>Everyone has a reason to switch to WinAuthorize&trade;</p>
                </div>
                <div className="buttons">
                  <a href="#" className="btn-default btn-sm">Watch Now</a>
                  <a href="#" className="btn-default btn-sm">Try Now</a>
                  <a href="#" className="btn-default btn-sm">Buy Now</a>
                </div>
              </div>

              <div className="post-tag-links">
                <div className="post-tags wow fadeInUp">
                  <span className="tag-links">
                    <a href="#">Download</a>
                    <a href="#">Buy</a>
                    <a href="#">FAQ</a>
                    <a href="#">Request a Demo</a>
                    <a href="#">Requirements</a>
                    <a href="#">Read Reviews</a>
                    <a href="#">Watch Video</a>
                  </span>
                </div>
              </div>

              <br /><br />

              <div className="post-content">
                <div className="post-entry border-0">
                  <p className="wow fadeInUp">
                    Are you paying too much for your debit and credit card transactions? <strong>WinAuthorize&trade;</strong> is a certified payment authorization solution that processes credit, debit, gift card and check transactions through all major payment networks. Designed to save you time and money by providing powerful features and reliability at the point of sale. WinAuthorize&trade; is an affordable solution for all business types.
                  </p>

                  <p className="wow fadeInUp">
                    <strong>You can always chat live with an ABS Expert Advisor or call 905-278-7975 or 209-233-8846 today.</strong>
                  </p>

                  <blockquote className="wow fadeInUp">
                    <p>This version of WinAuthorize&trade; is highly recommended for general type Restaurant and/or Bar, Sandwich Shop, Pizzeria, Steak House, Cafe Shop, Deli, Buffet, Catering business, Doughnut or Pastry Shop, Hotel restaurant/kitchen, Sports Arena, Pool Hall, Movie Theatre, Entertainment Complex and more.</p>
                  </blockquote>

                  <h6 className="wow fadeInUp">WinAuthorize&trade; for Payment Processing Key Features at a Glance</h6>

                  <ul className="wow fadeInUp">
                    <li>NEW! NetePay and DSI ClientX integration from DataCap Systems Inc.</li>
                    <li>NEW! Connect to over 20 different payment processors seamlessly</li>
                    <li>Full support for Cash, Tips, Gift Cards, Visa&reg;, MasterCard&reg; and Interac&reg; EMV</li>
                    <li>Full support for Contactless Payment</li>
                    <li>Automatic switch to dialup if internet connection is lost</li>
                    <li>Automatic switch back to high-speed payment gateway</li>
                    <li>Certified with major credit / debit / gift card processors</li>
                  </ul>

                  <h6 className="wow fadeInUp">WinAuthorize&trade; for Payment Processing Key Benefits at a Glance</h6>

                  <ul className="wow fadeInUp">
                    <li>Certified for multiple connectivity methods, including Dial-up Modem, TCP/IP</li>
                    <li>Customizable reporting features</li>
                    <li>Multiple payment types accepted: All major Credit Cards, Debit Cards, EBT</li>
                    <li>PA-DSS Validated</li>
                    <li>Powered by Microsoft.NET technology</li>
                    <li><img src="/images/winauthorize-images/btn-volume-purchasing.png" alt="Volume Purchasing" /></li>
                  </ul>

                  <h4 className="wow fadeInUp">Pay-at-Home</h4>
                  <p className="wow fadeInUp">
                    If your business takes you to your customers home, the freedom of WinRest&trade; and WinAuthorize&trade; provides a convenient and secure way for patrons to pay with credit and/or debit cards. WinRest&trade; wireless POS terminals are ideal for delivery persons, and anyone else who needs to collect payment while on the go.
                  </p>

                  <h4 className="wow fadeInUp">Pay-at-Table</h4>
                  <p className="wow fadeInUp">
                    Provide faster service for customers directly at their table. WinAuthorize&trade; and WinRest Ultimate&trade; offer patrons the <strong><em>increased privacy and total convenience</em></strong> of settling payment right at the table. <a href="#">For more information, click here.</a>
                  </p>

                  <h4 className="wow fadeInUp">Choice of Payment Processors</h4>
                  <p className="wow fadeInUp">
                    WinAuthorize is now seamlessly integrated to DataCap&apos;s DSI ClientX and NETePay technologies. Click here to learn more.</p>
                  <p className="wow fadeInUp">WinAuthorize&trade; users now have the ability to connect to over 20 different payment processors seamlessly. More importantly, if the merchant wants to switch payment processor at any time, this can be done quickly and easily without any interruption to business operations.
                  </p>

                  <h4 className="wow fadeInUp">Merchants</h4>
                  <p className="wow fadeInUp">
                    Merchants - WinAuthorize software offers a secure, scalable solution that can be used in virtually any setting for your payment processing needs. Eliminate the need for costly 3rd party gateways and offer more payment options to your customers.
                  </p>

                  <h4 className="wow fadeInUp">Partners</h4>
                  <p className="wow fadeInUp">
                    Partners - WinAuthorize gives you the ability to integrate payments into your existing products and services. This adds value to your offering and will give you multiple revenue streams.
                  </p>

                  <h4 className="wow fadeInUp">Ultra Secure</h4>
                  <p className="wow fadeInUp">
                    All versions of WinRest&trade; seamlessly integrate all aspects of hospitality and restaurant management with ultra-secure communication based on AES(256 Bit) encoding; technology based on the same standards as https/SSL, and used by nearly all financial institutions.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Faqs End */}

      {/* How It Work Section Start */}
      <div className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">
            <div className="section-title">
              <h3 className="wow fadeInUp">Support</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                The power of Support
              </h2>
            </div>

            <div className="how-work-item-list wow fadeInUp">
              <div className="how-work-item">
                <div className="how-work-item-header">
                  <div className="how-work-item-title">
                    <h3>24/7 Support</h3>
                  </div>
                </div>
                <div className="how-work-item-content">
                  <p>
                    We know that many of your customers are servicing all day and often late at night, very early in the morning, holidays or on weekends. Our applications are proven to be reliable and easy to use, but it&apos;s always good to know that an expert is only a call away, 24 hrs/day, 7 days a week with our Premium Tech Support Program.
                  </p>
                </div>
              </div>

              <div className="how-work-item">
                <div className="how-work-item-header">
                  <div className="how-work-item-title">
                    <h3>Unmatched Infrastructure</h3>
                  </div>
                </div>
                <div className="how-work-item-content">
                  <p>
                    Allow us to host your enterprise server and enjoy piece of mind by using the latest in hardware and server technology, our systems are sock solid. Our enterprise hosting solutions reside on only the lest, most powerful and most reliable servers available. We are constantly upgrading our infrastructure to increase reliability and decrease downtime.
                  </p>
                </div>
              </div>

              <div className="how-work-item">
                <div className="how-work-item-header">
                  <div className="how-work-item-title">
                    <h3>ABS EasyEquip Protection Plan</h3>
                  </div>
                </div>
                <div className="how-work-item-content">
                  <p>
                    All ABS hardware comes with a one-year limited warranty and up to 100 days of complimentary telephone support. To extend your coverage further, purchase the ABS EasyEquip Protection Plan.
                  </p>
                </div>
              </div>

              <div className="how-work-item">
                <div className="how-work-item-header">
                  <div className="how-work-item-title">
                    <h3>Complete Training via ABS EasyEquip</h3>
                  </div>
                </div>
                <div className="how-work-item-content">
                  <p>
                    Our ABS engineers and technical experts address the technology challenges you face today, such as proactive problem avoidance services to help ensure you achieve maximum uptime and receive rapid response-times to technical issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <img src="/images/winauthorize-images/red-ribbon-winauthorize.jpg" alt="WinAuthorize" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
            <div className="text-center mt-3">
              <img src="/images/winauthorize-images/point-of-sale-software-winrest-ultimate.jpg" alt="WinAuthorize Software" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
            <div className="text-center mt-3">
              <img src="/images/winauthorize-images/winrest-users.jpg" alt="WinRest Users" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      <Footer />
    </>
  );
}