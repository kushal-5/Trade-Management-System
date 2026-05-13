import { useState } from "react";
import { Plus } from "lucide-react";
import image from "@/assets/images/image.png";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  const images = [image, image1, image2];
  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "What is SWIVT TMS?",
      answer:
        "SWIVT TMS is a comprehensive Trade Management System designed to streamline logistics operations, enhance visibility, and improve efficiency in supply chain management.",
    },
    {
      id: 2,
      question: "Is my data secure?",
      answer:
        "Yes, we implement enterprise-grade security measures including encryption, secure data centers, and regular security audits to protect your information.",
    },
    {
      id: 3,
      question: "Can I use SWIVT TMS for free?",
      answer:
        "We offer various pricing plans including a trial version. Contact our sales team for detailed pricing information.",
    },
    {
      id: 4,
      question: "How do I reset my password?",
      answer:
        'You can reset your password through the login page by clicking "Forgot Password" and following the instructions sent to your registered email.',
    },
    {
      id: 5,
      question: "Can I integrate SWIVT TMS with other tools?",
      answer:
        "Yes, SWIVT TMS offers robust API integration capabilities and can be integrated with various third-party tools and systems.",
    },
    {
      id: 6,
      question: "Is SWIVT TMS available on mobile?",
      answer:
        "Yes, SWIVT TMS is accessible via mobile devices through our responsive web interface and dedicated mobile apps.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#f3f2f2] text-sm uppercase mb-2">FAQ</p>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#f3f510] ">Frequently Asked</span>
            <span className="text-white"> Questions</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Everything You Want To Know About SWIVT TMS.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`border border-gray-800 rounded-lg overflow-hidden
                ${openItem === item.id ? "bg-opacity-10" : ""}`}
            >
              <button
                onClick={() =>
                  setOpenItem(openItem === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex items-center justify-start text-left"
              >
                <Plus
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 mr-4
                    ${openItem === item.id ? "rotate-45" : ""}`}
                />
                <span className="text-[#f3f2f2] text-base">
                  {item.question}
                </span>
              </button>

              {openItem === item.id && (
                <div className="px-6 pb-4 text-gray-400">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-900/50 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`members ${i + 1}`}
                  className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-800"
                />
              ))}
            </div>
          </div>
          <h3 className="text-white text-lg font-medium mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <button className="bg-[#f3f510] text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
