import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | ABS Software for Canada United States(US) Europe",
};

export default function ContactPage() {
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
                  Contact us
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="contact-us-content wow fadeInUp">
                <div className="contact-us-body">
                  <div className="contact-newsletter-form footer-newsletter-form">
                    <h3>CONTACT US</h3>
                    <div className="contact-newsletter-form-content">
                      <p>
                        Should you have any questions, commentaries or suggestions regarding our
                        Point of Sale Software and Systems, feel free to contact us! E-mail us
                        your question or non-technical issue and an ABS Customer Service
                        Representative will respond within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="contact-social-media-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contact-info-list">
                  <h4>Pre-purchase Assistance, Licensing &amp; Warranty</h4>
                  <p>
                    Talk to an ABS Expert Advisor anytime during business hours:
                    <br />
                    9am to 5:30pm EST, Monday to Friday.
                  </p>

                  {/* Phone & Hours */}
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src="/images/icon-headphone-primary.svg" alt="" />
                    </div>
                    <div className="contact-info-item-content">
                      <h3>
                        Phone: <br /> (905) 278-7975 <small>Canada</small> <br />
                      </h3>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src="/images/icon-location-primary.svg" alt="" />
                    </div>
                    <div className="contact-info-item-content">
                      <h3>
                        <a href="mailto:sales@abspos.com">sales@abspos.com</a>
                        <br />
                        <a href="mailto:softwaresupport@abspos.com">
                          softwaresupport@abspos.com
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="contact-us-form">
                <div className="contact-us-form-title wow fadeInUp">
                  <h3>Get In Touch With Us:</h3>
                </div>

                <div className="contact-form">
                  <form
                    id="contactForm"
                    action="#"
                    method="POST"
                    data-toggle="validator"
                    className="wow fadeInUp"
                  >
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="fname"
                          className="form-control"
                          id="fname"
                          placeholder="First name"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="lname"
                          className="form-control"
                          id="lname"
                          placeholder="Last name"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="E-mail Address"
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          rows="5"
                          placeholder="Write Message..."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Features Section Start */}
      <div className="our-features-prime bg-section dark-section-prime">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Require Technical Support?</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Please read this first..
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Feature 1 */}
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-1-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>Contact Your Computer Manufacturer</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    If your point of sale system or product was installed on your computer when
                    you purchased it, support is provided by your computer manufacturer.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-2-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>ABS Partner Network</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    ABS Partners can access unlimited online support via the ABS Partner Network.
                    If you are not already a member, you can register here.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-3-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>ABS Helps on Facebook and Twitter</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    The official ABS Customer Service Support page on Facebook and Twitter,
                    helping you find the answers for your questions on ABS products and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-xl-3 col-md-6">
              <div className="feature-item-prime wow fadeInUp">
                <div className="feature-item-header-prime">
                  <div className="icon-box">
                    <img src="/images/icon-feature-item-4-prime.svg" alt="" />
                  </div>
                  <div className="feature-item-title-prime">
                    <h3>ABS Helps on YouTube</h3>
                  </div>
                </div>
                <div className="feature-item-content-prime">
                  <p>
                    The official ABS Customer Service Support page on YouTube, helping you find
                    the answers for your questions on ABS products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Features Section End */}

      {/* Google Map Start */}
      <div className="google-map">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Our Location</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Get in touch with our experts and power your business with ABS POS Solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe wow fadeInUp">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map End */}

      <Footer />
    </>
  );
}
