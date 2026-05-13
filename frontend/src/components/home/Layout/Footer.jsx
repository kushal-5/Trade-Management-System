import instagram from "@/assets/icons/instagram.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/Twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#04181D] text-[#f3f2f2] py-8">
      <div className="container mx-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <p className="text-4xl font-bold">
              Stay Connected <br /> with SWIVT TMS.
            </p>
            <p className="mt-4 text-sm">
              We&apos;re here to assist you! Get in touch with us for any
              queries, support, or feedback.
            </p>
            <p className="mt-4 text-xs">© Copyright 2024 SWIVT TMS</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Platform</h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Features</a>
                </li>
                <li className="mb-2">
                  <a href="#">How It Works</a>
                </li>
                <li className="mb-2">
                  <a href="#">Market Insight</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">
                Contact Us
              </h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#">Address</a>
                </li>
                <li className="mb-2">
                  <a href="#">Email</a>
                </li>
                <li className="mb-2">
                  <a href="#">Phone no.</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Legals</h2>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="/guides">Guides</Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms">Terms of Services</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm">Follow Us On:</p>
          <div className="flex space-x-4">
            <a href="#">
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
            </a>{" "}
            <a href="#">
              <img src={instagram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
