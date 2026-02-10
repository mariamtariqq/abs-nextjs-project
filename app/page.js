import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section Start */}
      <div className="hero bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">#1 Rated POS for Hospitality</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Smart Restaurant POS Software
                  </h1>
                </div>

                <div className="hero-feature-list wow fadeInUp">
                  <div className="hero-feature-item">
                    <div className="icon-box">
                      <img src="/images/icon-feature-item-1-prime.svg" alt="" />
                    </div>
                    <div className="hero-feature-item-content">
                      <p>Fast &amp; Accurate Billing</p>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="icon-box">
                      <img src="/images/icon-hero-item-2-prime.svg" alt="" />
                    </div>
                    <div className="hero-feature-item-content">
                      <p>Inventory &amp; Liquor Monitoring</p>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="icon-box">
                      <img src="/images/icon-hero-feature-3.svg" alt="" />
                    </div>
                    <div className="hero-feature-item-content">
                      <p>Real-Time Reporting</p>
                    </div>
                  </div>
                </div>

                <div className="hero-btn wow fadeInUp">
                  <Link href="/contact" className="btn-default btn-highlighted">
                    Book a Demo
                  </Link>
                  <Link href="/contact" className="btn-default btn-dark">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-us-image-box wow fadeInUp">
                <div className="about-image-box-1">
                  <div className="about-us-image">
                    <figure className="image-anime reveal">
                      <img src="/images/about-us-image-1.jpg" alt="" />
                    </figure>
                  </div>
                </div>

                <div className="about-image-box-2">
                  <div className="about-us-image">
                    <figure className="image-anime reveal">
                      <img src="/images/about-us-image-2.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="about-us-image">
                    <figure className="image-anime reveal">
                      <img src="/images/about-us-image-3.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="about-us-circle">
                    <Link href="/about">
                      <img src="/images/about-us-circle.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">About Us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Powering hospitality businesses for over 35 years
                  </h2>
                  <p className="wow fadeInUp">
                    ABS Software Design Inc. delivers innovative, secure, and reliable point of sale
                    solutions that help hospitality businesses worldwide operate efficiently and reach
                    their full potential.
                  </p>
                </div>

                <div className="about-us-item-list wow fadeInUp">
                  <div className="about-us-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-us-item-1.svg" alt="" />
                    </div>
                    <div className="about-us-item-title">
                      <h3>Proven &amp; Reliable POS Technology</h3>
                    </div>
                  </div>

                  <div className="about-us-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-us-item-2.svg" alt="" />
                    </div>
                    <div className="about-us-item-title">
                      <h3>Secure &amp; Scalable Hospitality Solutions</h3>
                    </div>
                  </div>
                </div>

                <div className="about-us-footer wow fadeInUp">
                  <div className="about-support-box">
                    <div className="about-support-box-content">
                      <h3>Expert Support You Can Trust</h3>
                      <p>
                        Our experienced support team provides dependable assistance to ensure smooth
                        operations for restaurants and hospitality businesses.
                      </p>
                    </div>

                    <div className="about-us-btn">
                      <Link href="/about" className="btn-default">
                        Learn More About ABS
                      </Link>
                    </div>
                  </div>

                  <div className="about-excellence-box">
                    <div className="icon-box">
                      <img src="/images/icon-about-excellence.svg" alt="" />
                    </div>
                    <div className="about-excellence-box-title">
                      <h3>Trusted by 10,000+ Installations</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Key Feature Section Start */}
      <div className="key-features bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Our Software Solutions</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  All-in-one tools for your hospitality business
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>Guest-Flow Management</h3>
                  <p>Optimize seating charts, reservations, and waitlists to turn tables faster.</p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-1.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>HD Digital Signage</h3>
                  <p>Dynamic menu boards that update instantly to promote specials and sold-out items.</p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-2.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>Wireless Pay-at-Table</h3>
                  <p>Secure, EMV-compliant payment terminals that bring checkout to the guest.</p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-3.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>WinRest Enterprise</h3>
                  <p>Powerful backend tools for franchises, central kitchens, and data analytics.</p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-4.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>Tablet POS</h3>
                  <p>
                    Complete POS functionality on a tablet, ideal for line-busting and patio service.
                  </p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-5.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp">
                <div className="feature-item-content">
                  <h3>Custom POS Solutions</h3>
                  <p>Tailored POS configurations designed around your unique workflow.</p>
                </div>
                <div className="feature-item-body">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-6.svg" alt="" />
                  </div>
                  <div className="feature-item-btn">
                    <Link href="/contact" className="readmore-btn">
                      Contact Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text wow fadeInUp">
                <p>
                  <span>Explore</span> our complete product lineup and find the right solution.{" "}
                  <Link href="/contact">View All Products</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Feature Section End */}

      <br />
      <br />

      {/* Our Features Section Start */}
      <div className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Why Top Restaurants Choose ABS POS</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Streamline your operations with features built for speed, accuracy, and growth.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-1-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>Fast &amp; Accurate Billing</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>Process orders in seconds with a zero-error checkout flow designed for rush hours.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-2-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>Inventory Management</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>Real-time stock monitoring, recipe costing, and automated low-stock alerts.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-3-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>Multi-location Support</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>Manage menus, pricing, and reporting for all your branches from a single dashboard.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-4-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>Mobile Integration</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>Seamlessly integrate with tablets for tableside ordering and contactless payments.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text section-satisfy-img wow fadeInUp">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src="/images/author-1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <img src="/images/icon-phone-primary.svg" alt="" />
                  </div>
                </div>
                <p>
                  Let&apos;s make something great work together.{" "}
                  <a href="tel:+123456789">Get Free Quote</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Features Section End */}

      {/* What We Do Section Start */}
      <div className="what-we-do-prime">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="what-we-do-content-prime">
                <div className="section-title">
                  <h3 className="wow fadeInUp">What We Do</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Powering restaurants with WinRest&trade; POS solutions
                  </h2>
                  <p className="wow fadeInUp">
                    WinRest&trade; has been installed in over 10,000 locations worldwide, across
                    Canada, US, Europe, South Africa, Asia, and the Middle East. We provide smart
                    software solutions designed to streamline operations, improve guest experience,
                    and help restaurants scale efficiently.
                  </p>
                </div>

                <div className="what-we-item-list-prime wow fadeInUp">
                  {/* Card 2: Industry News */}
                  <div className="what-we-item-prime">
                    <div className="what-we-item-header-prime">
                      <h3>Latest Industry News</h3>
                    </div>
                    <div className="what-we-item-content-prime">
                      <ul>
                        <li>Shifting to WEB-SRM</li>
                        <li>Hero Burger Co. selects WinRest&trade; for POS</li>
                        <li>Lettieri&apos;s franchise selects WinRest&trade; for POS</li>
                        <li>Pumpernickel&apos;s franchise selects WinRest&trade;</li>
                        <li>Parents want kid-healthy options</li>
                      </ul>
                    </div>
                  </div>

                  {/* Card 1: Software Solutions */}
                  <div className="what-we-item-prime">
                    <div className="what-we-item-header-prime">
                      <h3>Latest Software Solutions</h3>
                    </div>
                    <div className="what-we-item-content-prime">
                      <ul>
                        <li>Affordable Guest-Flow Management</li>
                        <li>HD Digital Signage &amp; Menu Boards</li>
                        <li>Smartphone &amp; Tablet Integration</li>
                        <li>Upgrade to WinRest Enterprise&trade;</li>
                        <li>Wireless Pay-at-Table Solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="what-we-btn-prime wow fadeInUp">
                  <Link href="/contact" className="btn-default">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="what-we-do-image-box-prime wow fadeInUp">
                <div className="what-we-do-image-prime">
                  <figure className="image-anime">
                    <img src="/images/what-we-do-image-prime2.jpg" alt="WinRest POS" />
                  </figure>
                </div>

                <div className="what-we-do-cta-box-prime">
                  <div className="what-we-cta-box-image-prime">
                    <figure>
                      <img src="/images/what-we-cta-box-image-prime.png" alt="" />
                    </figure>
                    <div className="what-we-cta-box-counter-prime">
                      <h2>
                        <span className="counter">10,000</span>+
                      </h2>
                    </div>
                  </div>

                  <div className="what-we-cta-box-content-prime">
                    <h3>Locations Worldwide</h3>
                    <p>WinRest&trade; POS trusted by restaurants across continents for reliable operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What We Do Section End */}

      {/* Our Testimonials Section Start */}
      <div className="our-testimonials dark-section bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Testimonials</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  What our clients say about ABS POS
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider wow fadeInUp">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {/* Swiper Slide 1 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-1.jpg" alt="John Carter" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;ABS POS transformed our restaurant operations. Orders are
                              processed faster, and inventory management is a breeze. We&apos;ve seen a
                              30% increase in efficiency within the first two months.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>John Carter</h3>
                            <p>Owner, Hero Burger Co.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Swiper Slide 2 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-2.jpg" alt="Sara Khan" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;The ABS POS system makes running multiple franchises seamless.
                              Integrations with digital menus and mobile orders are smooth, and our
                              staff adapted in no time.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>Sara Khan</h3>
                            <p>Operations Manager, Lettieri&apos;s Franchise</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Swiper Slide 3 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-3.jpg" alt="Ali Raza" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;Switching to ABS POS was one of the best decisions for our bakery.
                              Payment processing, table management, and reporting have never been this
                              efficient.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>Ali Raza</h3>
                            <p>Manager, Pumpernickel&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Swiper Slide 4 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-4.jpg" alt="Maria Lopez" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;Our parents&apos; caf&eacute; chain now offers healthier options
                              thanks to ABS POS tracking and inventory management. Customers are
                              happier, and our workflow is smoother.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>Maria Lopez</h3>
                            <p>Owner, Kid-Healthy Caf&eacute;</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Swiper Slide 5 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-2.jpg" alt="Sara Khan" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;The ABS POS system makes running multiple franchises seamless.
                              Integrations with digital menus and mobile orders are smooth, and our
                              staff adapted in no time.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>Sara Khan</h3>
                            <p>Operations Manager, Lettieri&apos;s Franchise</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Swiper Slide 6 */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-item-header">
                          <div className="testimonial-author-box">
                            <div className="testimonial-item-quote">
                              <img src="/images/testimonial-item-quote.svg" alt="" />
                            </div>
                            <div className="testimonial-author-image">
                              <figure>
                                <img src="/images/author-3.jpg" alt="Ali Raza" />
                              </figure>
                            </div>
                          </div>
                          <div className="testimonial-item-rating">
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                            <i className="fa fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>
                              &ldquo;Switching to ABS POS was one of the best decisions for our bakery.
                              Payment processing, table management, and reporting have never been this
                              efficient.&rdquo;
                            </p>
                          </div>
                          <div className="testimonial-author-content">
                            <h3>Ali Raza</h3>
                            <p>Manager, Pumpernickel&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text wow fadeInUp">
                <p>
                  ABS POS is trusted by restaurants worldwide for efficiency, accuracy, and
                  scalability.
                </p>
                <ul>
                  <li>
                    <span className="counter">4.9</span>/5
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>Based on 4200+ Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonials Section End */}

      {/* Our FAQs Section Start */}
      <div className="our-faqs">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="faq-content-box">
                <div className="faq-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Frequently Asked Questions</h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Find answers to your most common questions
                    </h2>
                  </div>

                  <div className="our-faqs-btn wow fadeInUp">
                    <Link href="/faqs" className="btn-default">
                      View all FAQs
                    </Link>
                  </div>
                </div>

                <div className="faq-cta-box wow fadeInUp">
                  <div className="faq-cta-content">
                    <p>
                      Find answers to all your questions about ABS POS service options, pricing, and
                      features. Visit our YouTube channel for tutorials, updates, and tips, or chat
                      live with an ABS Expert Advisor.
                    </p>
                    <p>
                      Call us today for support:
                      <br />
                      +1 905-278-7975
                      <br />
                      +1 209-233-8846
                    </p>
                  </div>

                  <div className="faq-cta-conatct-deatils">
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image add-more">
                        <img src="/images/icon-phone-white.svg" alt="" />
                      </div>
                    </div>

                    <div className="faq-cta-contact-content">
                      <p>Call Us Now!</p>
                      <h3>
                        <a href="tel:+19052787975">+1 905-278-7975</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="faq-accordion" id="accordion">
                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      1. Should I choose a software package that was designed specifically for my
                      industry?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: Not necessarily. Our restaurant management software is being
                        implemented at many &ldquo;non-restaurant locations, such as Frabricland.
                        While there are many industry-specific software packages available, many of
                        them don&apos;t offer all of the features available in a general point of sale
                        software package. Ask yourself what features you need now and in the future.
                        Do you want a customer loyalty program? Do you need faster credit card
                        authorizations over the Internet?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      2. How much does a POS system cost?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: Like buying a car, it just depends on what you want. What features do
                        you need? How fast do you want it to go? Should you purchase an extended
                        warranty? The more features you want, the more your POS system will cost. A
                        single-user software license can cost between $795 and $2,500. Do you need new
                        POS terminals? Add $1,000 to $3,000 per workstation. What about tablets, cash
                        drawers, and printers? Extended warranties can add $200 per year, but are
                        worth it if your workstation ever goes down. Before you buy any point of sale
                        system, do the research or chat with out of our Expert Advisors. Choosing the
                        wrong POS system can cost you thousands. You&apos;ll quickly find out that our
                        software is the most affordable and yields the best ROI in the industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      3. How will I know how to choose the right POS system?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: First and foremost, take the time to understand the specific needs of
                        your restaurant, bar or entertainment complex. Establish your total technology
                        budget. If necessary, break it down into the things you need this year and
                        things that can wait until next year. Find reputable technology companies with
                        years of expertise in the restaurant industry. Ask for references and call
                        them. Many customers are happy to talk about their business challenges.
                        Consider all factors, such as restaurant software, technical support, service
                        after the sale, point of sale hardware, and integration with accounting
                        packages or other business software you use. Learn more about how to choose
                        the right bundle of hardware and software for your business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      4. Should I buy the point of sale hardware or the software first?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: The single biggest mistake restaurateurs make when choosing a new POS
                        system is buying the point of sale hardware before the restaurant software. The
                        software you choose to run your business or franchise may not be compatible
                        with your new point of sale hardware. Not all scanners, weight scales, or card
                        readers will work with all restaurant software packages. Buying both the point
                        of sale hardware and software from the same vendor can reduce or eliminate
                        compatibility issues and can often reduce your overall technology costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      5. How will ABS Software help me make more money?
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: ABS Software can help you increase your profits in many ways. Quicker,
                        more reliable checkouts mean less manpower is needed. Sales reports allow you
                        to maximize you inventory levels and control costs. Built-in loyalty programs
                        encourage higher ticket averages and repeat business from your customers. Talk,
                        chat or contact an ABS POS Expert Advisor for about other ways a POS system
                        can generate new income, reduce costs, manage an entire franchise give you more
                        of your time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      6. How can an ABS Software help me run my business more efficiently?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading6"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: A great POS system includes software that increases your efficiency by
                        eliminating unnecessary work. Instead of using separate systems for your
                        inventory, mail order, ecommerce, and wholesale divisions, choose one
                        restaurant software package that can manage your entire business. Choose an ABS
                        Restaurant POS system that increases your speed of service with faster ticket
                        entry, on-the-fly data entry, and data-driven lookups.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      7. Is my store too small to benefit from a POS system?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading7"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: More than likely, you can&apos;t afford not to have a point of sale
                        system. ABS POS systems come in all sizes and are designed to fit businesses of
                        any size—from single location mom-and-pop shops to the mega-chains with
                        thousands of locations. Distinguish your wants from your needs, and talk to
                        some technology vendors. You&apos;ll find all your software solutions for your
                        point of sale that meets your needs—and your budget! Thank you for reading our
                        general FAQ on point of sale. If you have any other questions, feel free to
                        start a chat, call or explore the rest of our site.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item wow fadeInUp">
                  <h2 className="accordion-header" id="heading8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      8. What is PCI DSS and why is it so important?
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading8"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Answer: PCI DSS, or Payment Card Industry Data Security Standards, is a strict
                        set of standards designed to protect the cardholder&apos;s data from credit
                        card fraud and misuse. The PCI Security Standards Council is an organization
                        dedicated to the development and implementation of security standards for
                        protecting credit card data. PCI Data Security Standards are developed and
                        implemented by a collaborative effort from American Express, Discover Financial
                        Services, JCB, MasterCard Worldwide, and Visa International. If your software
                        isn&apos;t compliant with PCI DSS, you may be subject to hefty fines. It&apos;s
                        critical that you choose PCI-compliant software that will protect your
                        customers&apos; credit card information as well as your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our FAQs Section End */}

      <Footer />
    </>
  );
}
