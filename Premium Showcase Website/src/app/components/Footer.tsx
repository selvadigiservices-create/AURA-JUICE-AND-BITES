import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Aura</h3>
                <p className="text-xs text-gray-400 -mt-1">Juice & Bites</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting freshness daily with premium ingredients and passion for quality.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-primary transition-colors rounded-full flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fresh Juices</li>
              <li>Milkshakes</li>
              <li>Mojitos</li>
              <li>Lassi</li>
              <li>Pani Puri</li>
              <li>Burgers & Momos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>info@aurajuice.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your Location Here</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aura Juice & Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
