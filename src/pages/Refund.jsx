import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'

const Refund = () => {
  return (
    <div className="min-h-screen bg-white mt-15">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Refund Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We want you to be completely satisfied with your purchase. Items may be returned 
                  within 30 days of delivery if they meet the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Items are in original, unopened packaging</li>
                  <li>Items are in new, unused condition</li>
                  <li>Items are not expired or near expiration</li>
                  <li>Items have not been contaminated or compromised</li>
                  <li>Original invoice or receipt is provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Returnable Items</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For safety and regulatory reasons, the following items cannot be returned:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Single-use or disposable medical products</li>
                  <li>Opened or used sterile products</li>
                  <li>Customized or specially ordered items</li>
                  <li>Controlled substances or medications</li>
                  <li>Items damaged by misuse or normal wear</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To initiate a return, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>Contact our customer service team at returns@medicaresurgical.com</li>
                  <li>Provide your order number and reason for return</li>
                  <li>Receive a Return Merchandise Authorization (RMA) number</li>
                  <li>Package items securely with RMA number clearly marked</li>
                  <li>Ship items to our returns processing center</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Timeline</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once we receive your returned items:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Inspection and processing: 3-5 business days</li>
                  <li>Refund approval notification: 1-2 business days</li>
                  <li>Credit to original payment method: 5-10 business days</li>
                  <li>Store credit (if requested): Immediate upon approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Costs</h2>
                <p className="text-gray-700 leading-relaxed">
                  Original shipping costs are non-refundable unless the return is due to our error 
                  (defective or wrong item sent). Customers are responsible for return shipping costs 
                  unless otherwise specified.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Defective Products</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you receive a defective product:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contact us immediately upon discovery</li>
                  <li>Do not use the defective product</li>
                  <li>We will provide a prepaid return label</li>
                  <li>Full refund or replacement will be provided</li>
                  <li>We may request photos or additional information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exchanges</h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer exchanges for items of equal or lesser value. Price differences for 
                  higher-value items must be paid separately. Exchange requests follow the same 
                  process as returns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about returns or refunds, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    Email: returns@medicaresurgical.com<br />
                    Phone: +91 98765 43210<br />
                    Returns Department<br />
                    123 Medical Plaza, Bhangagarh, Guwahati, Assam 781005, India
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refund;
