import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/IBM3-Logo.png" 
                  alt="IBM3ENG Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-display font-bold">IBM3ENG</div>
                <div className="text-xs text-primary-400 tracking-wider">ENGINEERING SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for machinery repairs, maintenance services, manpower solutions, 
              and professional accounting services. Excellence in every project.
            </p>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="font-semibold text-white mb-2">ibm3eng.com</p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                House No. 1203, Sonia Nagar, Sector-31<br/>
                Near Police Station, Faridabad, Haryana
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+919871358409" className="hover:text-primary-400">+91 98713 58409</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🔧</span>
                Technical: <a href="tel:+919540653396" className="hover:text-primary-400 ml-1">+91 95406 53396</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-primary-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} IBM3ENG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}