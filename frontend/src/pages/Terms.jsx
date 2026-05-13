const Terms = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "Welcome to SWIVT TMS. By accessing or using our website, services, or platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue using SWIVT TMS.",
    },
    {
      id: "accounts",
      title: "User Accounts and Responsibilities",
      content:
        "To access certain features of SWIVT TMS, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
    },
    {
      id: "platform",
      title: "Use of the Platform",
      content:
        "SWIVT TMS provides a task management system designed to help individuals and teams organize, collaborate, and streamline workflows. You agree to use the platform in compliance with applicable laws and regulations.",
    },
    {
      id: "subscription",
      title: "Subscription and Payments",
      content:
        "Certain features of SWIVT TMS may require a subscription or one-time payment. By subscribing, you agree to the payment terms, billing cycle, and any applicable fees.",
    },
    {
      id: "privacy",
      title: "Data Privacy and Security",
      content:
        "We are committed to protecting your privacy and data security. By using SWIVT TMS, you consent to our data collection, storage, and processing practices as outlined in our Privacy Policy.",
    },
    {
      id: "intellectual",
      title: "Intellectual Property Rights",
      content:
        "All content, trademarks, and software associated with SWIVT TMS are the exclusive property of SWIVT TMS or its licensors. Users are granted a limited, non-transferable, and revocable license to use the platform.",
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      content:
        "SWIVT TMS is provided on an &qout;as-is&quot; basis, without warranties of any kind. We do not guarantee uninterrupted service, error-free performance, or compatibility with all devices and systems. SWIVT TMS shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the platform, including but not limited to data loss, financial loss, or disruptions in service. Users assume all risks associated with using the platform.",
    },
    {
      id: "termination",
      title: "Termination and Suspension",
      content:
        "SWIVT TMS reserves the right to suspend or terminate accounts that violate these Terms and Conditions, engage in prohibited activities, or pose security risks. Users may also terminate their accounts at any time. Upon termination, access to SWIVT TMS services and stored data may be revoked, and SWIVT TMS is not responsible for data retrieval beyond the termination period.",
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content:
        "SWIVT TMS may update or modify these Terms and Conditions at any time. Users will be notified of significant changes, and continued use of the platform after updates constitutes acceptance of the revised terms. It is the user's responsibility to review these terms periodically for any changes.",
    },
    {
      id: "contact",
      title: "Contact Information",
      content:
        "For any questions or concerns regarding these Terms and Conditions, users can contact us through our support team at swivttms@gmail.com.",
    },
  ];

  return (
    <div className="m-15 mx-50 bg-[#001824] border rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#f3f2f2] mb-2">T&S</p>
          <h1 className="text-3xl font-bold text-[#f3f510] mb-2">
            Terms <span className="text-[#f3f2f2]">&</span> Services
          </h1>

          <div className="flex flex-row">
            <p className="text-gray-400 text-xs mt-4 items-center justify-center text-center">
              Updated On 2025-01-29
            </p>
            <div className="flex-grow"></div>
            <p className="flex items-center justify-center text-center text-gray-400 text-sm mr-125">
              User Agreement And Responsibilities
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Navigation Sidebar */}
          <nav className="space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-gray-400 hover:text-[#f3f510] transition-colors text-2xl gap-6 border-b border-gray-500 mr-5 mt-10 px-10 pb-5">
                {section.title}
              </a>
            ))}
          </nav>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8 border-l border-gray-500 pl-8 mr-5">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="">
                <h2 className="text-lg font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
