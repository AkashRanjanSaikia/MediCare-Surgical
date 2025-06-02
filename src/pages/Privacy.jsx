import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
const Privacy = () => {
    return (
        <div className="min-h-screen bg-white mt-15">
            <Header />
            <section className="py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-semibold text-gray-900 mb-8">Privacy Policy</h1>
                        <p className="text-gray-600 mb-8">Last updated: January 2025</p>
                        <p className="text-gray-600 mb-8">At MediCare Surgical, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, share, and protect your information in accordance with the Digital Personal Data Protection Act, 2023 of India.</p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We collect information you provide directly to us, such as when you create an account,
                                    make a purchase, subscribe to our newsletter, or contact us for support.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Personal information (name, email address, phone number)</li>
                                    <li>Business information (company name, role, healthcare facility details)</li>
                                    <li>Order and transaction history</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We use the information we collect to provide, maintain, and improve our services:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Process and fulfill your orders</li>
                                    <li>Provide customer support and respond to inquiries</li>
                                    <li>Send important updates about products and services</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties,
                                    except as described in this policy:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>With trusted service providers assisting in our operations (e.g., shipping, payment processing)</li>
                                    <li>When required by law or to protect our rights</li>
                                    <li>In connection with a business transfer or merger</li>
                                    <li>With your consent</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We implement appropriate security measures to protect your personal information against
                                    unauthorized access, alteration, disclosure, or destruction. However, no method of
                                    transmission over the internet is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Access and update your personal information</li>
                                    <li>Request deletion of your data</li>
                                    <li>Opt out of marketing communications</li>
                                    <li>Request a copy of your data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                    <p className="text-gray-700">
                                        Email: privacy@medicaresurgical.com<br />
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
    )
}

export default Privacy