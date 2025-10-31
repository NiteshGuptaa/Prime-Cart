import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You will find real-time updates and tracking details there.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on most items. Please ensure the product is in its original condition and packaging. Visit our Returns page for more details.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship internationally! Shipping rates and delivery times vary based on your location. Check our Shipping Information page for more details.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, Apple Pay, Google Pay, and more for a seamless checkout experience.',
    },
    {
      question: 'Can I change or cancel my order after placing it?',
      answer: 'Orders can be modified or canceled within 1 hour of placing them. After that, we begin processing, and changes may not be possible. Contact our support team for assistance.',
    },
    {
      question: 'How do I apply a discount code?',
      answer: 'You can apply your discount code at checkout. Enter the code in the "Promo Code" field and click "Apply" to see the updated total.',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard encryption to protect your payment details. Your information is processed securely, ensuring a safe shopping experience.',
    },
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* FAQ Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* FAQ Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <span>{faq.question}</span>
            {openIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </button>
          {/* FAQ Answer */}
          {openIndex === index && (
            <div className="p-4 bg-gray-50 text-gray-700 rounded-lg border-t">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
