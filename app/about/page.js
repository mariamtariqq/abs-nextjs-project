import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | ABS Software for Canada United States(US) Europe",
};

export default function About() {
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
                  About us
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

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
                  <h3 className="wow fadeInUp">About ABS POS</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Powering hospitality businesses with reliable POS solutions
                  </h2>
                  <p className="wow fadeInUp">
                    Our mission and values are centered on helping businesses around the world
                    realize their full potential. For over 35 years, ABS Software Design Inc. has
                    been delivering innovative, secure, simple, and dependable point-of-sale
                    solutions tailored for the hospitality industry.
                  </p>
                </div>

                <div className="about-us-item-list wow fadeInUp">
                  <div className="about-us-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-us-item-1.svg" alt="" />
                    </div>
                    <div className="about-us-item-title">
                      <h3>Proven Industry Experience</h3>
                    </div>
                  </div>

                  <div className="about-us-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-us-item-2.svg" alt="" />
                    </div>
                    <div className="about-us-item-title">
                      <h3>Secure &amp; Reliable POS Systems</h3>
                    </div>
                  </div>
                </div>

                <div className="about-us-footer wow fadeInUp">
                  <div className="about-support-box">
                    <div className="about-support-box-content">
                      <h3>Corporate Overview</h3>
                      <p>
                        Founded in 1990, ABS Software Design Inc. was the first company to introduce
                        DOS-based touchscreen software for the hospitality industry. Today, with
                        10,000+ installations worldwide, our solutions continue to set benchmarks for
                        quality, affordability, security, and performance.
                      </p>
                    </div>

                    <div className="about-us-btn">
                      <Link href="/contact" className="btn-default">
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  <div className="about-excellence-box">
                    <div className="icon-box">
                      <img src="/images/icon-about-excellence.svg" alt="" />
                    </div>
                    <div className="about-excellence-box-title">
                      <h3>Trusted Worldwide Since 1990</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Approach Section Start */}
      <div className="our-approach bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Our Approach</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Built on expertise, innovation, and trusted hospitality solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 1 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-1.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>Our Team</h3>
                    <p>
                      ABS Software Design Inc. employs a team of intelligent, creative individuals.
                      Each department plays a vital role in the success of our company, clients, and
                      partners. Our engineers, management, and support staff are highly trained,
                      experienced, and always ready to help.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-1.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-2.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>ABS Restaurant Point of Sale Software</h3>
                    <p>
                      Fast, flexible, and feature-rich, ABS POS software is renowned for simplicity,
                      reliability, and ease of use. Our award-winning WinRest&trade; and family of
                      apps provide an ultra-secure and reliable platform, continuously improved over
                      35 years of user feedback.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-2.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-3.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>ABS Restaurant Point of Sale Systems</h3>
                    <p>
                      ABS POS systems deliver powerful performance for data-intensive hospitality
                      environments, with expanded storage, ENERGY STAR&reg; efficiency, and secure,
                      future-ready software platforms. Designed to meet the needs of enterprise-level
                      operations while remaining environmentally responsible.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-3.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-2.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>ABS and the Environment</h3>
                    <p>
                      ABS is committed to sustainability and environmental responsibility. We combine
                      innovative environmental technologies with sound business practices to maximize
                      eco-efficiency, reduce pollution, and continuously improve through a global
                      environmental management system.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-2.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-1.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>ABS and NETePay</h3>
                    <p>
                      NETePay is a PA-DSS validated integrated payment solution for high-speed,
                      secure transactions. AES 128-bit encryption protects cardholder data, and
                      WinRest&trade; automatically updates encryption keys monthly for maximum
                      security.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-1.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-xl-4 col-md-6">
              <div className="approach-item wow fadeInUp">
                <div className="approach-content-box">
                  <div className="icon-box">
                    <img src="/images/icon-approach-item-3.svg" alt="" />
                  </div>
                  <div className="approach-item-content">
                    <h3>Customer Relationship Management</h3>
                    <p>
                      ABS CRM tools support Loyalty programs, Gift Cards, and Delivery, enabling
                      businesses to increase revenue, enhance customer satisfaction, and strengthen
                      long-term relationships with their clients.
                    </p>
                  </div>
                </div>
                <div className="approach-item-image">
                  <figure>
                    <img src="/images/approach-item-image-3.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="section-footer-text wow fadeInUp">
                <p>
                  Join the ABS Software Design Inc. team and be part of a legacy built on
                  innovation, reliability, and hospitality excellence.
                </p>
                <ul>
                  <li>
                    <span>35+</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>Years of Industry Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Approach Section End */}

      {/* How It Work Section Start */}
      <div className="how-it-work">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="how-it-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Our Solutions in Action</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Discover how ABS tools streamline operations and enhance customer experience
                  </h2>
                  <p className="wow fadeInUp">
                    Our platform is designed to simplify complex workflows, improve efficiency, and
                    help your business thrive with intuitive solutions.
                  </p>
                </div>

                <div className="how-work-item-list wow fadeInUp">
                  {/* How Work Item 1 */}
                  <div className="how-work-item">
                    <div className="how-work-item-header">
                      <div className="how-work-item-title">
                        <h3>Customer Relationship Management</h3>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <p>
                        ABS Customer Relationship Management (CRM) tools for Loyalty, Gift Cards, and
                        Delivery help you deliver exceptional customer experiences. Select one or all
                        to increase revenue while satisfying your customers.
                      </p>
                    </div>
                  </div>

                  {/* How Work Item 2 */}
                  <div className="how-work-item">
                    <div className="how-work-item-header">
                      <div className="how-work-item-title">
                        <h3>Enterprise Management</h3>
                      </div>
                    </div>
                    <div className="how-work-item-content">
                      <p>
                        ABS WinRest Enterprise software simplifies operations and reporting for
                        multi-location operations or franchises. Built on Microsoft .NET, it allows
                        fast configuration, menu setup, and data management while keeping customers
                        your top priority.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="how-it-work-footer wow fadeInUp">
                  <div className="how-it-work-btn">
                    <Link href="/contact" className="btn-default">
                      Contact us
                    </Link>
                  </div>

                  <div className="how-work-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-headphone-primary.svg" alt="" />
                    </div>
                    <div className="how-work-contact-box-content">
                      <p>24/7 Support!</p>
                      <h3>
                        <a href="tel:+19052787975">(905) 278-7975</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="how-it-work-image-box wow fadeInUp">
                <div className="how-it-work-image">
                  <figure className="image-anime">
                    <img src="/images/how-it-work-image2.jpeg" alt="" />
                  </figure>
                </div>

                <div className="how-it-work-cta-box">
                  <div className="how-work-cta-box-image">
                    <figure>
                      <img src="/images/how-it-work-cta-box-image.png" alt="" />
                    </figure>
                    <div className="how-work-cta-box-counter">
                      <h2>
                        <span className="counter">42</span>%
                      </h2>
                    </div>
                  </div>
                  <div className="how-work-cta-box-content">
                    <h3>Proudly Certified Excellence</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      {/* Core Features Section Start */}
      <div className="core-features bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="core-feature-image-box wow fadeInUp">
                <div className="core-feature-image">
                  <figure className="image-anime">
                    <img src="/images/core-feature-image2.jpg" alt="" />
                  </figure>
                </div>

                <div className="core-feature-cta-box">
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure>
                        <img src="/images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image add-more">
                      <img src="/images/icon-phone-primary.svg" alt="" />
                    </div>
                  </div>

                  <div className="core-feature-cta-box-content">
                    <p>Call Us Now!</p>
                    <h3>
                      <a href="tel:123456789">+(123) 456-789</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="core-feature-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Core Feature</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Our core features enhance restaurant operations and payment efficiency
                  </h2>
                  <p className="wow fadeInUp">
                    ABS Software provides powerful, user-friendly tools that simplify workflows,
                    improve customer experience, and optimize restaurant management.
                  </p>
                </div>

                <div className="core-feature-item-list wow fadeInUp">
                  <div className="core-feature-item">
                    <h3>Payment Processing</h3>
                    <p>
                      ABS integrates seamlessly with DataCap Systems, Inc. through
                      WinAuthorize&trade; and NETePay technologies. Connect to over 20 payment
                      processors effortlessly, with fast, secure, and uninterrupted transaction
                      processing.
                    </p>
                  </div>

                  <div className="core-feature-item">
                    <h3>Restaurant Point of Sale</h3>
                    <p>
                      ABS offers scalable, flexible POS solutions tailored to your restaurant&apos;s
                      unique needs. Packed with features and robust technology, it ensures smooth
                      operations, improves customer experience, and boosts loyalty across single or
                      multi-location setups.
                    </p>
                  </div>
                </div>

                <div className="core-feature-footer wow fadeInUp">
                  <div className="core-feature-btn">
                    <Link href="/contact" className="btn-default btn-highlighted">
                      Contact us
                    </Link>
                  </div>

                  <div className="how-work-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-headphone-primary.svg" alt="" />
                    </div>
                    <div className="how-work-contact-box-content">
                      <p>24/7 Support!</p>
                      <h3>
                        <a href="tel:+19052787975">(905) 278-7975</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="core-feature-counter-list wow fadeInUp">
                <div className="core-feature-counter-item">
                  <h3>
                    <span className="counter">35</span>+
                  </h3>
                  <p>Years of Hospitality Software Excellence</p>
                </div>
                <div className="core-feature-counter-item">
                  <h3>
                    <span className="counter">20</span>+
                  </h3>
                  <p>Integrated Payment Processors Supported</p>
                </div>
                <div className="core-feature-counter-item">
                  <h3>
                    <span className="counter">1000</span>+
                  </h3>
                  <p>Restaurants &amp; Businesses Served Worldwide</p>
                </div>
                <div className="core-feature-counter-item">
                  <h3>
                    <span className="counter">4.9</span>/5
                  </h3>
                  <p>Customer Satisfaction Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Core Features Section End */}

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
                        isn&apos;t compliant with PCI DSS, you may be subject to hefty fines.
                        It&apos;s critical that you choose PCI-compliant software that will protect
                        your customers&apos; credit card information as well as your business.
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
