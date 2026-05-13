const Privacy = () => {
  const navItems = [
    { id: "intro", label: "Introduction" },
    { id: "collect", label: "Information We Collect" },
    { id: "use", label: "How We Use Your Information" },
    { id: "sharing", label: "Data Sharing and Third-Party Services" },
    { id: "security", label: "Security Measures" },
    { id: "rights", label: "User Rights and Data Retention" },
    { id: "changes", label: "Changes to This Policy" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="m-15 mx-50 bg-[#001824] border rounded-2xl">
      {" "}
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-[#f3f510] text-3xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Your Privacy Matters: Understanding Our Commitment To Data
            Protection
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar navigation */}
          <nav className="col-span-3">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block items-start text-xl ${
                      item.active
                        ? "text-yellow-500 border-l-2"
                        : "text-gray-400 hover:text-[#f3f510] pl-4"
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main content sections */}
          <div className="col-span-9 text-white border-l-1 border-gray-100 px-5 ">
            <section id="intro" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                SWIV TMS is committed to protecting your privacy and ensuring
                the security of your personal information. This policy explains
                what data we collect, how we use it, and how we safeguard your
                information. By using SWIV TMS, you agree to the practices
                outlined here.
              </p>
            </section>

            <section id="collect" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We collect personal details such as your name, email, and
                contact information when you create an account. If you use
                premium services, payment details are processed securely through
                third-party providers. Additionally, we gather technical and
                usage data such as IP addresses, browser types, and interaction
                history to improve user experience. Cookies and tracking
                technologies help us analyze platform performance and remember
                user preferences.
              </p>
            </section>

            <section id="use" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your data is used to provide and improve our services,
                personalize your experience, process transactions, and ensure
                platform security. We may also use your information to send
                service updates, notifications, and customer support responses.
                Analytics help us understand user behavior, optimize
                performance, and enhance functionality.
              </p>
            </section>

            <section id="sharing" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Data Sharing and Third-Party Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                SWIV TMS does not sell your data. However, we may share your
                information with trusted third-party providers for payment
                processing, analytics, cloud storage, and customer support.
                These providers are obligated to protect your data and use it
                only for necessary services. In some cases, we may disclose
                information if required by law or to prevent fraud and security
                threats.
              </p>
            </section>

            <section id="security" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Security Measures</h2>
              <p className="text-gray-300 leading-relaxed">
                We take appropriate security measures, including encryption and
                access controls, to protect your data from unauthorized access
                or misuse. While we strive to maintain a secure system, no
                online service is entirely risk-free. Users are encouraged to
                use strong passwords and enable additional security measures
                where possible.
              </p>
            </section>

            <section id="rights" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                User Rights and Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, modify, or delete your personal
                information within SWIV TMS. If you wish to remove your data
                permanently, you can request account deletion. We retain only
                the information necessary for legal compliance and business
                operations.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                SWIVT TMS may update this Privacy Policy as needed. Significant
                changes will be communicated through notifications or platform
                updates. Continued use of our services after updates constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions or concerns regarding this policy, please contact
                our support team at swivttms@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
