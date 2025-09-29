import { Link } from 'wouter';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Account' link in the top right corner of any page and select 'Register'. Fill in your details and verify your email address to complete the registration process."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, net banking, UPI, and digital wallets like Paytm, PhonePe, and Google Pay."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery times vary based on your location and the shipping method selected. Standard delivery typically takes 3-5 business days, while express delivery is available in select cities for next-day delivery."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy on most items. Items must be in new, unused condition with all original packaging. Some categories like personal care items and perishables are non-returnable."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you'll receive a confirmation email with tracking information. You can also track your order status in the 'My Orders' section of your account."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Currently, we only ship within India. We're working on expanding our services to international destinations in the future."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach our customer support team via email at support@surefindings.com, by phone at +91 98765 43210, or through our live chat feature available on our website during business hours."
        },
        {
            question: "Are there any membership fees?",
            answer: "Our Prime membership program is optional and offers benefits like free delivery, exclusive deals, and priority customer support. There's no mandatory membership fee to shop with us."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <div className="bg-[#131A22] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Find answers to common questions about shopping, accounts, payments, and more.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md border border-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                                <button
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-medium text-[#131A22]">{faq.question}</h3>
                                    <svg
                                        className={`w-5 h-5 text-[#FF9900] transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Still Need Help */}
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#131A22]">Still Need Help?</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our customer support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-[#FF9900] hover:bg-[#E68A00] text-[#131A22] font-bold px-6 py-3 rounded-lg">
                                Contact Support
                            </Button>
                            <Button className="bg-transparent border-2 border-[#FF9900] text-[#FF9900] hover:bg-[#FF9900] hover:text-[#131A22] font-bold px-6 py-3 rounded-lg">
                                Live Chat
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Help Topics */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#131A22]">Browse Help Topics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                            <div className="text-[#FF9900] text-3xl mb-4">📦</div>
                            <h3 className="text-lg font-bold mb-2 text-[#131A22]">Ordering</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                How to place orders, payment options, and order confirmation
                            </p>
                            <Button className="bg-transparent text-[#FF9900] hover:text-[#E68A00] font-medium p-0 h-auto">
                                Learn More →
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                            <div className="text-[#FF9900] text-3xl mb-4">🚚</div>
                            <h3 className="text-lg font-bold mb-2 text-[#131A22]">Shipping</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Delivery times, tracking, and shipping options
                            </p>
                            <Button className="bg-transparent text-[#FF9900] hover:text-[#E68A00] font-medium p-0 h-auto">
                                Learn More →
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                            <div className="text-[#FF9900] text-3xl mb-4">🔄</div>
                            <h3 className="text-lg font-bold mb-2 text-[#131A22]">Returns</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Return policy, process, and refunds
                            </p>
                            <Button className="bg-transparent text-[#FF9900] hover:text-[#E68A00] font-medium p-0 h-auto">
                                Learn More →
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                            <div className="text-[#FF9900] text-3xl mb-4">💳</div>
                            <h3 className="text-lg font-bold mb-2 text-[#131A22]">Payments</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Payment methods, security, and billing
                            </p>
                            <Button className="bg-transparent text-[#FF9900] hover:text-[#E68A00] font-medium p-0 h-auto">
                                Learn More →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;