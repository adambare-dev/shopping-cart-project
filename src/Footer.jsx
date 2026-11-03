import { FaHeart, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-bold text-xl tracking-tight text-gray-900">
              Shopora
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your ultimate destination for trendy items, everyday essentials,
              and exclusive deals. Shop smart, live better.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Checkout
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Socials */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-500 mb-3">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className="flex items-center gap-3 text-gray-600">
              <a
                href="https://github.com/adambare-dev"
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-black transition-colors border border-gray-200"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-black transition-colors border border-gray-200"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 hover:text-black transition-colors border border-gray-200"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Shopora. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-red-500 text-xs" /> using React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
