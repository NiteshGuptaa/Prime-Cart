import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Array of notification messages
const massageArr = [
    { massage: "Apply promo code SAVE10 to get flat 10% discount" },
    { massage: "Apply promo code SAVE20 to get flat 20% discount" },
    { massage: "Apply promo code SAVE30 to get flat 30% discount" },
];

const Notifications = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of a notification message
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-40 my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Notifications Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Notifications</h1>
      {massageArr.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Notification Header */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <span>Notification({index + 1})</span>
            {openIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </button>
          {/* Notification Message */}
          {openIndex === index && (
            <div className="p-4 bg-gray-50 text-gray-700 rounded-lg border-t">
              {faq.massage}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notifications;

