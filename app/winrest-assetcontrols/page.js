"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WinrestAssetControls() {
  const [drinkPrice, setDrinkPrice] = useState(5);
  const [shotsLost, setShotsLost] = useState(5);
  const [bottlesPerDay, setBottlesPerDay] = useState(5);
  const [daysPerYear, setDaysPerYear] = useState(30);

  const totalCost = drinkPrice * shotsLost * bottlesPerDay * daysPerYear;

  return (
    <>
      <Header />

      {/* Page Header Section Start */}
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">WinRest with Asset Controls&trade;</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">WinRest with Asset Controls&trade;</li>
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
            <img src="/images/winrest-assetcontrols-mages/banner-restaurant-pos-software-asset-controls.jpg" alt="WinRest Asset Controls Banner" style={{ width: "100%" }} />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li><h6>ABS Hospitality Software Apps</h6></li>
                    <li><Link href="/adscreen">AdScreen&trade; POS Advertising</Link></li>
                    <li><Link href="/winauthorize">WinAuthorize&trade; Payment Processing</Link></li>
                    <li><a href="#">WinRest Database Backup Server&trade;</a></li>
                    <li className="active"><Link href="/winrest-assetcontrols">WinRest with Asset Controls&trade;</Link></li>
                    <li><a href="#">WinRest HD Digital Signage&trade;</a></li>
                    <li><Link href="/winrest-enterprise">WinRest Enterprise&trade;</Link></li>
                    <li><a href="#">WinRest Guest Screen&trade;</a></li>
                    <li><Link href="/winrest-lite">WinRest Lite&trade;</Link></li>
                    <li><a href="#">WinRest Mobile&trade;</a></li>
                    <li><a href="#">WinRest Professional&trade;</a></li>
                    <li><a href="#">WinRest Ultimate&trade;</a></li>
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
                <img src="/images/winrest-assetcontrols-mages/WinRestAssetControlsBox.jpg" alt="WinRest Asset Controls Software" style={{ width: "30%", maxWidth: "200px" }} />
                <div className="banner-text" style={{ marginTop: "45px" }}>
                  <h2 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>An End to the Industry Problem is Here...</h2>
                  <p style={{ margin: "10px 0 0 0", fontSize: "18px", color: "#666" }}>Introducing WinRest with Asset Controls&trade; for Point of Sale</p>
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
                    <a href="#cost-calculator">Cost Calculator</a>
                    <a href="#protection">Protection</a>
                    <a href="#requirements">Requirements</a>
                    <a href="#">Read Reviews</a>
                  </span>
                </div>
              </div>

              <br /><br />

              <div className="post-content">
                <div className="post-entry border-0">

                  <p className="wow fadeInUp">
                    Does your current software monitor your draft and liquor pours? If not, please read why you must switch to WinRest with Asset Controls&trade;, <strong>the easiest and most powerful beverage management system</strong> engineered for the hospitality industry. The Hospitality Industry, historically has been plagued by slippage problems that far exceeds any other business sector. A lack of employee responsibility and accountability results in the average establishment losing up to 25% of it&apos;s draft and liquor revenues. That all ends when you implement WinRest with Asset Controls&trade;!
                  </p>

                  <p className="wow fadeInUp">
                    <strong>If you have any questions, chat live with an Expert Advisor or feel free to call 905-278-7975.</strong>
                  </p>

                  <blockquote className="wow fadeInUp">
                    <p>
                      This version of WinRest with Asset Controls&trade; is highly recommended for general type Restaurant and/or Bar, Pizzeria, Steak House, Hotel restaurant/kitchen, Sports Arena, Pool Hall, Movie Theatre, Entertainment Complex and more.
                    </p>
                  </blockquote>

                  <h6 className="wow fadeInUp">WinRest with Asset Controls&trade; Key Features</h6>

                  <ul className="wow fadeInUp">
                    <li>Monitor all your draft and liquor pours in real time from just about anywhere</li>
                    <li>Biometric security options for bartender identification integrity</li>
                    <li>Four portion sizes provides accuracy and consistency for pouring</li>
                    <li>Identify over pours, under pours, substitutions and giveaways</li>
                    <li>IMPROVED! Multiple &ldquo;user levels&rdquo; allow varying degrees of access</li>
                    <li>Variance reports by Bartender, Drink, and Liquor and Draft Brand</li>
                    <li>Powered by Microsoft.NET technology</li>
                  </ul>

                  <h6 className="wow fadeInUp">WinRest with Asset Controls&trade; Benefits</h6>

                  <ul className="wow fadeInUp">
                    <li>Engineered to make point of sale extremely easy to learn, teach &amp; use</li>
                    <li>NEW! Backup options protects your important files from loss - back up to your Blu-ray Disc, HD-DVD, Blackberry, iPod and online storage</li>
                    <li>PCIDSS compliant &ndash; assures your guests&apos; privacy and security</li>
                    <li>Advanced Power Tools for your X and Z reports</li>
                    <li>Fast and flexible Employee management</li>
                    <li>Fast and flexible Menu management</li>
                    <li>Fast and flawless inventory levels and costs</li>
                    <li>Graphing tools track changes in customer purchasing trends</li>
                    <li>Compatible with multiple hardware platforms</li>
                    <li>Scalable to fit any sized operation</li>
                    <li>Fully accessible via the web</li>
                  </ul>

                  <div className="text-center mt-4">
                    <img src="/images/winrest-assetcontrols-mages/btn-volume-purchasing.png" alt="Volume Purchasing" />
                  </div>

                  <div className="text-center mt-4">
                    <img src="/images/winrest-assetcontrols-mages/winrest-tablet.jpg" alt="WinRest Tablet" style={{ maxWidth: "100%" }} />
                  </div>

                  {/* Testimonial Section */}
                  <div className="testimonial-box mt-5 wow fadeInUp" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "10px", position: "relative" }}>
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <img src="/images/winrest-assetcontrols-mages/quotation-mark.png" alt="" style={{ width: "60px", marginBottom: "15px" }} />
                        <p style={{ fontStyle: "italic" }}>
                          &ldquo;WinRest with Asset controls has been a complete success from concept to it&apos;s implementation. We&apos;ve been able to expand our restaurant locations and have started to generate more income from our draft and liquor pours! We are proud to say that Asset Controls was a pivotal factor in why.&rdquo;
                        </p>
                        <div className="mt-3">
                          <strong>Alice Nightengale</strong><br />
                          <span>The Ridge Bar &amp; Grill, LLC., Aspen, Colorado</span>
                        </div>
                      </div>
                      <div className="col-md-4 text-center">
                        <img src="/images/winrest-assetcontrols-mages/happy-abs-restaurant-pos-client-alice.jpg" alt="Alice Nightengale" style={{ maxWidth: "100%", borderRadius: "10px" }} />
                      </div>
                    </div>
                  </div>

                  {/* Cost Calculator Section */}
                  <div id="cost-calculator" className="cost-calculator-section mt-5 wow fadeInUp" style={{ background: "#fff", padding: "30px", border: "1px solid #ddd", borderRadius: "10px" }}>
                    <h4 style={{ color: "#4B1C40" }}>Want to Calculate The Cost of Operating Your Establishment WITHOUT WinRest Asset Controls&trade;?</h4>
                    <p>Move the sliders to best match what your business does.</p>

                    <div className="calculator-form mt-4">
                      <div className="form-group mb-4">
                        <label style={{ fontWeight: "bold" }}>What is your average drink price?</label>
                        <div className="d-flex align-items-center mt-2">
                          <input
                            type="range"
                            id="drinkPrice"
                            min="3"
                            max="15"
                            value={drinkPrice}
                            className="form-range"
                            style={{ flex: 1 }}
                            onChange={(e) => setDrinkPrice(Number(e.target.value))}
                          />
                          <span id="drinkPriceValue" style={{ fontSize: "24px", color: "#cc0001", fontWeight: "bold", marginLeft: "20px", minWidth: "60px" }}>${drinkPrice}</span>
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label style={{ fontWeight: "bold" }}>Number of shots you are losing per bottle?</label>
                        <p style={{ fontStyle: "italic", fontSize: "12px", margin: "5px 0" }}>*U.S. National Average = 5 shots per bottle</p>
                        <div className="d-flex align-items-center mt-2">
                          <input
                            type="range"
                            id="shotsLost"
                            min="1"
                            max="15"
                            value={shotsLost}
                            className="form-range"
                            style={{ flex: 1 }}
                            onChange={(e) => setShotsLost(Number(e.target.value))}
                          />
                          <span id="shotsLostValue" style={{ fontSize: "24px", color: "#cc0001", fontWeight: "bold", marginLeft: "20px", minWidth: "100px" }}>{shotsLost} Shots</span>
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label style={{ fontWeight: "bold" }}>How many bottles are you selling a day?</label>
                        <p style={{ fontStyle: "italic", fontSize: "12px", margin: "5px 0" }}>If you have 5 locations, you may want to take that into consideration.</p>
                        <div className="d-flex align-items-center mt-2">
                          <input
                            type="range"
                            id="bottlesPerDay"
                            min="1"
                            max="100"
                            value={bottlesPerDay}
                            className="form-range"
                            style={{ flex: 1 }}
                            onChange={(e) => setBottlesPerDay(Number(e.target.value))}
                          />
                          <span id="bottlesPerDayValue" style={{ fontSize: "24px", color: "#cc0001", fontWeight: "bold", marginLeft: "20px", minWidth: "60px" }}>{bottlesPerDay}</span>
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label style={{ fontWeight: "bold", color: "#cc0001" }}>Pick how many days in a year to quickly calculate the potential earnings you could be making!</label>
                        <div className="d-flex align-items-center mt-2">
                          <input
                            type="range"
                            id="daysPerYear"
                            min="1"
                            max="365"
                            value={daysPerYear}
                            className="form-range"
                            style={{ flex: 1 }}
                            onChange={(e) => setDaysPerYear(Number(e.target.value))}
                          />
                          <span id="daysPerYearValue" style={{ fontSize: "24px", color: "#cc0001", fontWeight: "bold", marginLeft: "20px", minWidth: "100px" }}>{daysPerYear} Days</span>
                        </div>
                      </div>

                      <div className="result-box mt-4 p-4" style={{ background: "#f8f9fa", borderRadius: "10px", textAlign: "center" }}>
                        <p style={{ fontSize: "14px", marginBottom: "10px" }}>This is how much it can cost WITHOUT the use of WinRest with Asset Controls:</p>
                        <span id="totalCost" style={{ fontSize: "48px", color: "#cc0001", fontWeight: "bold" }}>-${totalCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Faqs End */}

      {/* Why Choose Us Section Start */}
      <div id="protection" className="why-choose-us-prime bg-section">
        <div className="container">
          <div className="section-title">
            <h3 className="wow fadeInUp">Protection</h3>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Ultimate Protection</h2>
          </div>

          <div className="row">
            <div className="col-xl-6 d-flex align-items-center justify-content-center">
              <div className="why-choose-image-box-prime wow fadeInUp">
                <figure className="image-anime">
                  <img src="/images/winrest-assetcontrols-mages/winrest-asset-controls-system.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="why-choose-content-prime">
                <div className="why-choose-item-list-prime wow fadeInUp">

                  {/* Item 1 */}
                  <div className="why-choose-item-prime">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-item-1-prime.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content-prime">
                      <h3>Biometric Integrity</h3>
                      <p>
                        Are you currently using biometrics in your establishment? If not, it&apos;s time to start. Not only is biometric technology affordable, WinRest&trade; has built-in support for such fraud-prevention measures that immediately deter and in many cases, ends fraudulent activity.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="why-choose-item-prime">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-item-2-prime.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content-prime">
                      <h3>Setup and Use Easily</h3>
                      <p>
                        This version on WinRest&trade; was designed for easy installation so you can know your bar inside and out. Furthermore, once completed the rapid installation, your staff will be able to server your patrons faster and more accurate than ever!
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="why-choose-item-prime">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-item-1-prime.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content-prime">
                      <h3>Investment Protection</h3>
                      <p>
                        A great return on investment (ROI) is one of your primary concerns when operating a restaurant. And having technology that provides that protection will ensure that your enterprise can continue to run smoothly and is ready for anything. Take advantage of WinRest with Asset Controls&trade; to protect your liquor and draft pours.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="why-choose-item-prime">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-item-2-prime.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content-prime">
                      <h3>Ultra-Secure</h3>
                      <p>
                        All versions of WinRest&trade; seamlessly integrate all aspects of hospitality and restaurant management with ultra-secure communication based on AES(256 Bit) encoding; technology based on the same standards as https/SSL, and used by nearly all financial institutions.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Our Features Section Start */}
      <div className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Monitoring</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Real-Time Beverage Monitoring
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Full System Checks</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    What makes Asset Controls&trade; so reliable? In a word: intelligence. The software continuously checks itself to ensure it is working properly - so you can relax knowing your your inventory is thoroughly protected.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>24/7 Real-Time Monitoring</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Know what happens - the minute it happens. Every workstation that distributes alcohol can be securely monitored in real-time, 24/7 and can be viewed locally or remotely from anywhere in the world with Internet access. No more staff giveaways!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Identify Over/Under Pours</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    WinRest&trade; enabled workstations provide by-the-minute variance reports and can be customized to provide alerts through email or smartphones if reported pours exceed normal.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="feature-item-title-prime">
                    <h3>Real-Time Alerts Notifications</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    Choose what alerts you would like to receive and how often. ABS software combines several trusted technologies to deliver real-time results and provide business owners with real-time sales information directly into their inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Features Section End */}

      {/* How It Work Section Start */}
      <div className="how-it-work pb-0">
        <div className="container">
          <div className="how-it-work-content">

            <div className="text-center mt-5">
              <img src="/images/winrest-assetcontrols-mages/winrest-asset-controls-system.jpg" alt="WinRest Asset Controls System" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
            <div id="requirements" className="text-center mt-3">
              <img src="/images/winrest-assetcontrols-mages/restaurant-pos-protection.jpg" alt="Restaurant POS Protection" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
            <div className="text-center mt-3">
              <img src="/images/winrest-assetcontrols-mages/point-of-sale-software-winrest-ultimate.jpg" alt="Point of Sale Software" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>
            <div className="text-center mt-3">
              <img src="/images/winrest-assetcontrols-mages/winrest-users.jpg" alt="WinRest Users" style={{ width: "100%", maxWidth: "1000px" }} />
            </div>

          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      <Footer />
    </>
  );
}