import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "WinRest Mobile Ordering™ | Web Ordering Apps | ABS POS",
  description: "WinRest Mobile Ordering and Web Ordering Apps. Branded mobile apps for restaurants. Order and pay from smartphones. Customer loyalty and rewards programs.",
};

export default function WebOrdering() {
  return (
    <>
      <Header />

      {/* Page Header Section Start */}
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">WinRest Mobile Ordering&trade;</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">WinRest Mobile Ordering&trade;</li>
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
            <img src="/images/web-ordering-images/APPS.png" alt="Mobile Ordering Apps" style={{ width: "100%" }} />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li><h6>ABS Hospitality Software Apps</h6></li>
                    <li><Link href="/adscreen">AdScreen&trade; POS Advertising</Link></li>
                    <li><Link href="/winauthorize">WinAuthorize&trade; Payment Processing</Link></li>
                    <li><Link href="/databasebackupserver">WinRest Database Backup Server&trade;</Link></li>
                    <li><Link href="/winrest-assetcontrols">WinRest with Asset Controls&trade;</Link></li>
                    <li><a href="#">WinRest HD Digital Signage&trade;</a></li>
                    <li><Link href="/winrest-enterprise">WinRest Enterprise&trade;</Link></li>
                    <li><a href="#">WinRest Guest Screen&trade;</a></li>
                    <li><Link href="/winrest-lite">WinRest Lite&trade;</Link></li>
                    <li className="active"><Link href="/web-ordering">WinRest Mobile Ordering&trade;</Link></li>
                    <li><a href="#">WinRest Professional&trade;</a></li>
                    <li><a href="#">WinVue&trade;</a></li>

                    <li><h6>Page Tools</h6></li>
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

              <div className="software-main-banner" style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <img src="/images/web-ordering-images/MOBILE-APP-MENU.png" alt="Mobile Ordering App" style={{ width: "30%", maxWidth: "200px" }} />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>Branded Mobile Ordering Apps + You</h2>
                  <p style={{ margin: "10px 0 0 0", fontSize: "18px", color: "#666" }}>ABS Software Design Inc., helps franchise chains drive loyalty with customized Apps.</p>
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
                    <a href="#benefits">Benefits</a>
                    <a href="#">Price</a>
                    <a href="#faq">FAQ</a>
                    <a href="#requirements">Requirements</a>
                    <a href="#quotes">Read Reviews</a>
                    <a href="#">Watch Video</a>
                  </span>
                </div>
              </div>

              <br /><br />

              <div className="post-content">
                <div className="post-entry border-0">

                  <h6 className="wow fadeInUp">Web Ordering and Rewards Through Your Very Own Branded App</h6>

                  <p className="wow fadeInUp">
                    How visible is your business on the mobile market? Take your business mobile fast and easy with ABS Software Design Inc., and push ahead of your competitors because customer remote ordering and customer loyalty may be the only marketing tool you need.
                  </p>

                  <p className="wow fadeInUp">
                    Imagine clients <strong><em>ordering and paying for their meal right from their Apple or Android smartphone!</em></strong> It is possible with WinRest Mobile Pay&trade;. Less waiting in line, and more grab and go.
                  </p>

                  <p className="wow fadeInUp">
                    <strong>If you have any questions, chat live with an Expert Advisor or call 905-278-7975</strong>
                  </p>

                  <blockquote className="wow fadeInUp">
                    <p>
                      Data has revealed that customers who order on their mobile devices spend an average of 15-20% more than they would in-store.
                    </p>
                  </blockquote>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content End */}

      {/* Extend Your Reach Section Start */}
      <div className="why-choose-us-prime bg-section" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="section-title">
            <h3 className="wow fadeInUp" style={{ color: "#333" }}>Extend Your Reach to</h3>
            <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ color: "#4B1C40" }}>Extend Your Reach to 2.5+ Billion Devices with an App from ABS Software Design Inc.</h2>
          </div>

          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-content-prime">
                <p className="wow fadeInUp" style={{ color: "#333", fontSize: "18px" }}>
                  You already have fans of your business, so a great mobile app can help reinforce their positive feelings. ABS makes it possible to reach your loyal customers and connect like never before.
                </p>
              </div>
            </div>
            <div className="col-xl-5 text-center">
              <img src="/images/web-ordering-images/mobilepay-recipet-block.png" alt="Mobile Pay Receipt" className="img-fluid wow fadeInUp img-mobile-small" style={{ maxWidth: "400px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Extend Your Reach Section End */}

      {/* Benefits Section Start */}
      <div id="benefits" className="our-features-prime" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp" style={{ color: "#333" }}>App</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ color: "#333" }}>BENEFITS</h2>
              </div>
            </div>
          </div>

          {/* Benefit 1: Point of Sale Like Never Before */}
          <div className="row align-items-center mb-5">
            <div className="col-xl-5">
              <div className="wow fadeInUp">
                <img src="/images/web-ordering-images/Screenshot_2014-11-25-12-06-23.png" alt="Mobile App Screenshot" className="img-fluid" style={{ maxWidth: "300px" }} />
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <img src="/images/web-ordering-images/Screenshot_8small.png" alt="Screenshot" className="img-fluid" />
                </div>
                <div className="col-4">
                  <img src="/images/web-ordering-images/Screenshot_3small.png" alt="Screenshot" className="img-fluid" />
                </div>
                <div className="col-4">
                  <img src="/images/web-ordering-images/Screenshot_4small.png" alt="Screenshot" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Point of Sale Like Never Before</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Want to get into your current and potential customers smartphone? Make them lifelong customers with your very own branded app from ABS Software Design Inc., that allows them to place orders, load, manage and pay using their credit card or electronic gift card, send electronic coupons, search for stores on the map, and much more.
                  </p>
                  <p style={{ color: "#555" }}>
                    Our developers have been hard at work to create an easy-to-use, intelligent and secure mobile order experience that will encourage lifelong relationships with your customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2: Generate Revenue Like Never Before */}
          <div className="row align-items-center mb-5">
            <div className="col-xl-7">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Generate Revenue Like Never Before</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Having a branded app for your establishment will likely attract more new customers and potentially have existing clients spending even more than they normally do versus face-to-face and phone in orders.
                  </p>
                  <p style={{ color: "#555" }}>
                    And with the demand for mobile ordering options on the rise, having the most efficient, affordable and robust point of sale system that is integrated to your branded app is essential to operating a profitable restaurant.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="wow fadeInUp">
                <img src="/images/web-ordering-images/Screenshot_2014-11-25-12-06-55.png" alt="Revenue Screenshot" className="img-fluid" style={{ maxWidth: "300px" }} />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <img src="/images/web-ordering-images/ss-egiftcard-small.png" alt="eGift Card" className="img-fluid" />
                </div>
                <div className="col-6">
                  <img src="/images/web-ordering-images/ss-coupon-small.png" alt="Coupon" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 3: Web Ordering and Much More */}
          <div className="row align-items-center mb-5">
            <div className="col-xl-5">
              <div className="wow fadeInUp">
                <img src="/images/web-ordering-images/PUSH-NOTIFICATIONS.png" alt="Push Notifications" className="img-fluid" style={{ maxWidth: "300px" }} />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#333" }}>Web Ordering and Much More</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#555" }}>
                    Give your customers the ability to place their order from any web-enabled device. So even if, for whatever reason, their mobile device is unavailable, they can still place an order via the web.
                  </p>
                  <p style={{ color: "#555" }}>
                    Furthermore, push-back notifications will notify the user if there is an issue or changes to their mobile order. The user will get a push-notification and an email indicating any changes to the desired pickup time, or if the order cannot be processed. Get started right away by contacting your authorized WinRest&trade; Reseller or call 905-278-7975 today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-4 text-center">
              <img src="/images/web-ordering-images/SF-PLAYSTORE-QR.png" alt="QR Code" className="img-fluid" style={{ maxWidth: "200px" }} />
              <p className="mt-2" style={{ color: "#555" }}>Scan the QR Code with your Android device to download the App.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/images/web-ordering-images/download.jpg" alt="Download" className="img-fluid" style={{ maxWidth: "225px" }} />
            </div>
          </div>

        </div>
      </div>
      {/* Benefits Section End */}

      {/* Why ABS Makes Amazing Apps Section Start */}
      <div id="faq" className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Why ABS Software Design Inc.</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">MAKES AMAZING APPS</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Item 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/315.png" alt="Security" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Ultra-Secure Technology</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    WinRest Mobile Order and Pay&trade; data is protected with the latest technologies that utilize a combination of hardware authentication and end-to-end ultra-secure 128-bit SSL encryption.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/1047.png" alt="Customizable" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Fully Customizable</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    WinRest Mobile Pay&trade; for your establishment is fully customizable, with your branding, menu, gift card and loyalty management. Click here to learn more about how we have helped existing customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/46633.png" alt="Loyalty" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Customer Loyalty</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    A branded App from ABS Software Design Inc., helps engage current and would-be customers to create life-long relationships. Data reveals that loyalty campaigns pay off, ranking No.1 in mobile marketing effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/46997.png" alt="Feature Rich" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Feature-Rich Apps</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    Our team of developers focus on your goals, requirements and success to provide feature-rich mobile apps that integrate right into WinRest&trade;. Get your business in high-gear today with solutions from ABS Software Design Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/15846.png" alt="Mobile Menu" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Mobile Menu Access</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    ABS Software Design Inc., can put your menu into the hands of your customers on the go. Mobile ordering can accommodate up to 20% more guests.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-prime wow fadeInUp" style={{ color: "#fff" }}>
                <div className="feature-item-header-prime">
                  <div className="icon-box text-center mb-3">
                    <img src="/images/web-ordering-images/2233.png" alt="POS Integration" style={{ width: "80px" }} />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3 style={{ color: "#fff" }}>Direct POS Integration</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p style={{ color: "#ccc" }}>
                    Our developers can help make the most out every second during business hours with a mobile ordering app that has direct integration with WinRest&trade;. This means more time, less errors, and an outstanding customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why ABS Makes Amazing Apps Section End */}

      {/* System Requirements Section Start */}
      <div id="requirements" className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">
            <div className="section-title">
              <h3 className="wow fadeInUp">Mobile Ordering</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                System Requirements
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="how-work-item-list wow fadeInUp">
                  <div className="how-work-item">
                    <div className="how-work-item-header">
                      <div className="how-work-item-title">
                        <h3>Hardware Requirements</h3>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <ul>
                        <li>1 GHz or faster Intel processor</li>
                        <li>2 GB of RAM for 32-bit OS (4GB if running on a virtual machine or 64-bit OS)</li>
                        <li>600 MB of available hard disk space</li>
                        <li>Android device running WinRest eWallet&trade;</li>
                        <li>Magnetic Card Reader</li>
                        <li>Pin Pad for accepting payments with WinAuthorize&trade; (Optional)</li>
                        <li>Second LCD/LED Monitor/Display for Customer Facing Display</li>
                      </ul>
                    </div>
                  </div>

                  <div className="how-work-item">
                    <div className="how-work-item-header">
                      <div className="how-work-item-title">
                        <h3>Software Requirements</h3>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <ul>
                        <li>Microsoft .NET Frameworks 3.5</li>
                        <li>Firebird SQL 2.0</li>
                        <li>Windows POS Ready 2009 or above, 7, 8, 8.1, 10</li>
                        <li>AdScreen&trade; for WinRest&trade;</li>
                        <li>WinRest 1.96 Professional&trade; or above</li>
                        <li>WinRest Enterprise&trade; 3.5 or above</li>
                      </ul>
                    </div>
                  </div>

                  <div className="how-work-item">
                    <div className="how-work-item-header">
                      <div className="how-work-item-title">
                        <h3>Additional Requirements</h3>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <ul>
                        <li>Internet Access from an ISP *</li>
                        <li>Subscription to WinRest Enterprise&trade; **</li>
                      </ul>
                      <p className="mt-3" style={{ fontSize: "12px" }}>
                        * User is responsible for Internet service provider account, all Internet access fees, and phone charges.<br />
                        ** User is responsible for an Enterprise subscription account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src="/images/web-ordering-images/download.jpg" alt="Download App" className="img-fluid mb-4" style={{ maxWidth: "250px" }} />
                  <br />
                  <img src="/images/web-ordering-images/SF-PLAYSTORE-QR.png" alt="QR Code" className="img-fluid" style={{ maxWidth: "200px" }} />
                  <p className="mt-2">Scan the QR Code with your Android device to download the App.</p>
                </div>
              </div>
            </div>

            <div id="quotes" className="text-center mt-5">
              <img src="/images/web-ordering-images/winrest-users.jpg" alt="WinRest Users" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>

          </div>
        </div>
      </div>
      {/* System Requirements Section End */}

      <Footer />
    </>
  );
}