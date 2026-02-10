import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "FAQs | ABS Software for Canada United States(US) Europe",
};

export default function FaqsPage() {
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
                  Frequently asked questions
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      FAQ&apos;s
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
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="page-category-list wow fadeInUp">
                  <ul>
                    <li>
                      <h4>Page Tools</h4>
                    </li>
                    <li><a href="#share_facebook">Share this page on Facebook</a></li>
                    <li><a href="#share_linkedin">Share this page on LinkedIn</a></li>
                    <li><a href="#share_twitter">Share this page on Twitter</a></li>
                    <li><a href="#live_chat">Live Chat Software for Website</a></li>
                    <li><a href="#print_page">Print</a></li>
                  </ul>
                </div>

                <div className="sidebar-cta-box wow fadeInUp">
                  <div className="sidebar-cta-image">
                    <figure>
                      <img src="/images/sidebar-cta-image.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="sidebar-cta-body">
                    <div className="sidebar-cta-content">
                      <h3>Still have questions? Talk to an ABS POS Expert</h3>
                    </div>

                    <div className="sidebar-cta-btn">
                      <Link href="/contact" className="btn-default btn-highlighted">
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="page-faqs-catagery">
                <div className="page-single-faqs" id="faq_1">
                  <div className="section-title">
                    <h3 className="text-anime-style-3" data-cursor="-opaque">
                      Have Questions? We have you covered!
                    </h3>
                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                      Frequently Asked Questions - FAQ&apos;s
                    </h2>
                    <p>
                      Find Answers to all your questions about service options, pricing and other
                      processes. Or visit the ABS YouTube channel for all the latest updates,
                      videos and much more. And you can always chat live with an ABS Expert
                      Advisor or call 905-278-7975 or 209-233-8846 today.
                    </p>
                  </div>

                  <div className="faq-accordion our-faq-accordion" id="accordion">
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                        >
                          Q. Should I choose a software package that was designed specifically
                          for my industry?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> Not necessarily. Our restaurant management
                            software is being implemented at many &quot;non-restaurant locations,
                            such as Frabricland. While there are many industry-specific software
                            packages available, many of them don&apos;t offer all of the features
                            available in a general point of sale software package. Ask yourself
                            what features you need now and in the future. Do you want a customer
                            loyalty program? Do you need faster credit card authorizations over
                            the Internet?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                        >
                          Q. How much does a POS system cost?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> Like buying a car, it just depends on what
                            you want. What features do you need? How fast do you want it to go?
                            Should you purchase an extended warranty? The more features you want,
                            the more your POS system will cost. A single-user software license
                            can cost between $795 and $2,500. Do you need new POS terminals? Add
                            $1,000 to $3,000 per workstation. What about tablets, cash drawers,
                            and printers? Extended warranties can add $200 per year, but are
                            worth it if your workstation ever goes down.
                          </p>
                          <p>
                            Before you buy any point of sale system, do the research or chat with
                            out of our Expert Advisors. Choosing the wrong POS system can cost
                            you thousands. You&apos;ll quickly find out that our software is the
                            most affordable and yields the best ROI in the industry.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                        >
                          Q. There are so many different POS systems out there. How will I know
                          how to choose the right one?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> First and foremost, take the time to
                            understand the specific needs of your restaurant, bar or
                            entertainment complex. Establish your total technology budget. If
                            necessary, break it down into the things you need this year and
                            things that can wait until next year. Find reputable technology
                            companies with years of expertise in the restaurant industry. Ask for
                            references and call them. Many customers are happy to talk about
                            their business challenges.
                          </p>
                          <p>
                            Consider all factors, such as restaurant software, technical support,
                            service after the sale, point of sale hardware, and integration with
                            accounting packages or other business software you use. Learn more
                            about how to choose the right bundle of hardware and software for
                            your business.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                        >
                          Q. Should I buy the point of sale hardware or the software first?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> The single biggest mistake restaurateurs
                            make when choosing a new POS system is buying the point of sale
                            hardware before the restaurant software. The software you choose to
                            run your business or franchise may not be compatible with your new
                            point of sale hardware. Not all scanners, weight scales, or card
                            readers will work with all restaurant software packages. Buying both
                            the point of sale hardware and software from the same vendor can
                            reduce or eliminate compatibility issues and can often reduce your
                            overall technology costs.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                        >
                          Q. How will ABS Software help me make more money?
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> ABS Software can help you increase your
                            profits in many ways. Quicker, more reliable checkouts mean less
                            manpower is needed. Sales reports allow you to maximize you inventory
                            levels and control costs. Built-in loyalty programs encourage higher
                            ticket averages and repeat business from your customers. And if you
                            are
                          </p>
                          <p>
                            Talk, chat or contact an ABS POS Expert Advisor for about other ways
                            a POS system can generate new income, reduce costs, manage an entire
                            franchise give you more of your time.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                        >
                          Q. How can an ABS Software help me run my business more efficiently?
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> A great POS system includes software that
                            increases your efficiency by eliminating unnecessary work. Instead of
                            using separate systems for your inventory, mail order, ecommerce, and
                            wholesale divisions, choose one restaurant software package that can
                            manage your entire business. Choose an ABS Restaurant POS system that
                            increases your speed of service with faster ticket entry, on-the-fly
                            data entry, and data-driven lookups.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 7 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                        >
                          Q. Is my store too small to benefit from a POS system?
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> More than likely, you can&apos;t afford not
                            to have a point of sale system. ABS POS systems come in all sizes and
                            are designed to fit businesses of any size—from single location
                            mom-and-pop shops to the mega-chains with thousands of locations.
                          </p>
                          <p>
                            Distinguish your wants from your needs, and talk to some technology
                            vendors. You&apos;ll find all your software solutions for your point
                            of sale that meets your needs—and your budget!
                          </p>
                          <p>
                            Thank you for reading our general FAQ on point of sale. If you have
                            any other questions, feel free to start a chat, call or explore the
                            rest of our site.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 8 */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                        >
                          Q. What is PCI DSS and why is it so important?
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Answer:</strong> PCI DSS, or Payment Card Industry Data
                            Security Standards, is a strict set of standards designed to protect
                            the cardholder&apos;s data from credit card fraud and misuse. The PCI
                            Security Standards Council is an organization dedicated to the
                            development and implementation of security standards for protecting
                            credit card data. PCI Data Security Standards are developed and
                            implemented by a collaborative effort from American Express, Discover
                            Financial Services, JCB, MasterCard Worldwide, and Visa
                            International.
                          </p>
                          <p>
                            If your software isn&apos;t compliant with PCI DSS, you may be
                            subject to hefty fines. It&apos;s critical that you choose
                            PCI-compliant software that will protect your customers&apos; credit
                            card information as well as your business.
                          </p>
                        </div>
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

      <Footer />
    </>
  );
}
