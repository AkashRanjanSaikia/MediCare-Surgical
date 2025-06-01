import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
const Terms = () => {
  return (
    <div className="min-h-screen bg-white mt-15">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using MediCare Surgical's services, you accept and agree to be bound
                  by the terms and provision of this agreement. These terms apply to all visitors, users,
                  and others who access or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may use our services only for lawful purposes and in accordance with these terms:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You must be a licensed healthcare professional or authorized representative</li>
                  <li>You agree to provide accurate and complete information</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree not to use our services for any unlawful purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to provide accurate product information, but we do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Product descriptions or other content is accurate, complete, or error-free</li>
                  <li>Products will meet your specific requirements</li>
                  <li>Products will be available when ordered</li>
                  <li>All products are suitable for every medical application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Orders and Payment</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All orders are subject to our acceptance and product availability:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We reserve the right to refuse or cancel orders at any time</li>
                  <li>Payment is due upon order confirmation</li>
                  <li>Prices are subject to change without notice</li>
                  <li>All transactions are processed securely</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Use Only</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our products are intended for use by qualified healthcare professionals only.
                  Users must have appropriate training, certification, and licensing to use medical
                  equipment safely and effectively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, MediCare Surgical shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages arising from
                  your use of our services or products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India, specifically under the jurisdiction of the courts of Guwahati, Assam.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700">
                    Email: legal@medicaresurgical.com<br />
                    Phone: +91 98765 43210<br />
                    Address: 123 Medical Plaza, Bhangagarh, Guwahati, Assam 781005, India
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

export default Terms;
