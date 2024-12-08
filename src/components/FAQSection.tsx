import { FC, useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: {
    title: string;
    body: string;
    questions: FAQ[];
  };
}

const FAQSection: FC<FAQSectionProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle a specific question's active state
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle current card only
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-custom-blue)" }}
          >
            FAQs
          </h2>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--color-JetBlack)" }}
          >
            {faqData?.title || "Frequently Asked Questions"}
          </h3>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-dark-gray)" }}
          >
            {faqData?.body || "Default FAQ description."}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData?.questions.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-lg shadow-lg transition-all p-6 ${
                activeIndex === index ? "max-h-96" : "max-h-20"
              } overflow-hidden`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h4
                  className="text-lg font-semibold flex-1 mb-0"
                  style={{ color: "var(--color-black)" }}
                >
                  {faq.question}
                </h4>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg"
                  aria-label={activeIndex === index ? "Collapse" : "Expand"}
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              <p
                className={`mt-4 text-gray-600 leading-relaxed transition-all duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

// import { FC, useState } from "react";

// // FAQ Data
// const faqData = [
//   {
//     question: "What services/products do we offer?",
//     answer:
//       "Simply download the app from Google Play or the App Store, follow the setup guide, and start using Chatty instantly.",
//   },
//   {
//     question: "Who can benefit from our solutions?",
//     answer:
//       "Our solutions are designed for businesses of all sizes, aiming to enhance productivity and customer engagement.",
//   },
//   {
//     question: "What industries do we focus on?",
//     answer:
//       "We cater to industries such as healthcare, finance, e-commerce, and more.",
//   },
//   {
//     question: "What makes us different from others?",
//     answer:
//       "We prioritize user-friendly designs, advanced features, and exceptional customer support.",
//   },
//   {
//     question: "What technologies or frameworks do we use?",
//     answer:
//       "We leverage the latest technologies such as React, Node.js, and AI-based solutions.",
//   },
//   {
//     question: "How do we ensure the security of our solutions?",
//     answer:
//       "Our solutions include robust encryption, regular audits, and compliance with industry standards.",
//   },
//   {
//     question: "Can we customize solutions to meet specific needs?",
//     answer:
//       "Yes, we offer tailored solutions to meet your unique business requirements.",
//   },
// ];

// const FAQSection: FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   // Toggle a specific question's active state
//   const toggleQuestion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index); // Toggle current card only
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2
//             className="text-4xl font-bold mb-4"
//             style={{ color: "var(--color-custom-blue)" }}
//           >
//             FAQs
//           </h2>
//           <h3
//             className="text-2xl font-bold mb-4"
//             style={{ color: "var(--color-JetBlack)" }}
//           >
//             Have Questions?
//           </h3>
//           <p
//             className="text-lg leading-relaxed max-w-2xl mx-auto"
//             style={{ color: "var(--color-dark-gray)" }}
//           >
//             Our FAQ section covers everything you need to know about Chatty,
//             from setup and customization to troubleshooting and support. Find
//             quick, helpful answers to make integrating Chatty into your website
//             seamless and hassle-free.
//           </p>
//         </div>

//         {/* FAQ Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-lg shadow-lg transition-all p-6 ${
//                 activeIndex === index ? "max-h-96" : "max-h-20"
//               } overflow-hidden`}
//             >
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleQuestion(index)}
//               >
//                 <h4
//                   className="text-lg font-semibold flex-1 mb-0"
//                   style={{ color: "var(--color-black)" }}
//                 >
//                   {faq.question}
//                 </h4>
//                 <button
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg"
//                   aria-label={activeIndex === index ? "Collapse" : "Expand"}
//                 >
//                   {activeIndex === index ? "-" : "+"}
//                 </button>
//               </div>
//               <p
//                 className={`mt-4 text-gray-600 leading-relaxed transition-all duration-300 ${
//                   activeIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {faq.answer}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
