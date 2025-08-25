import {
  Shield,
  Lock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    banking: [
      { name: "Personal Banking", href: "#" },
      { name: "Business Banking", href: "#" },
      { name: "Loans & Credit", href: "#" },
      { name: "Mortgages", href: "#" },
      { name: "Investment Services", href: "#" },
      { name: "Insurance", href: "#" },
    ],
    support: [
      { name: "Customer Service", href: "#" },
      { name: "ATM Locator", href: "#" },
      { name: "Online Banking Help", href: "#" },
      { name: "Mobile App", href: "#" },
      { name: "Security Center", href: "#" },
      { name: "Report Fraud", href: "#" },
    ],
    aboutUs: [
      { name: "About SecureBank", href: "#" },
      { name: "Leadership Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Center", href: "#" },
      { name: "Community Impact", href: "#" },
      { name: "Investor Relations", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Electronic Disclosures", href: "#" },
      { name: "Site Map", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Security Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-300" />
              <span>FDIC Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-blue-300" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Bank Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <Logo />
                <p className="text-xs text-default-400 mt-2">Member FDIC</p>
              </div>
            </div>

            <p className="text-default-300 mb-6 leading-relaxed">
              Your trusted financial partner since 1985. We're committed to
              providing secure, innovative banking solutions that help you
              achieve your financial goals.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-default-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <div>
                  <p className="font-medium">24/7 Customer Service</p>
                  <p className="text-sm">1-800-SECURE-1 (1-800-732-8731)</p>
                </div>
              </div>
              <div className="flex items-center text-default-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">support@securebank.com</span>
              </div>
              <div className="flex items-center text-default-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">
                  New York, NY | Nationwide Service
                </span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-sm font-medium text-red-400 mb-1">
                Lost or Stolen Cards:
              </p>
              <p className="text-sm text-default-300">
                Call immediately: 1-800-HELP-NOW
              </p>
            </div>
          </div>

          {/* Banking Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">
              Banking Services
            </h4>
            <ul className="space-y-3">
              {footerSections.banking.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-default-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Support</h4>
            <ul className="space-y-3">
              {footerSections.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-default-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">About Us</h4>
            <ul className="space-y-3">
              {footerSections.aboutUs.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-default-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerSections.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-default-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-slate-700" />

        {/* Newsletter and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Stay Informed
            </h4>
            <p className="text-default-300 text-sm mb-4">
              Get the latest financial insights, security updates, and bank news
              delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-800 border-slate-600 text-primary-foreground placeholder:text-default-400 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-primary-foreground px-6">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:text-right">
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Connect With Us
            </h4>
            <p className="text-default-300 text-sm mb-4">
              Follow us for financial tips, updates, and community news.
            </p>
            <div className="flex lg:justify-end space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Legal Bar */}
      <div className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-default-400 text-xs">
                © {currentYear} SecureBank. All rights reserved. |
                <span className="ml-1">Member FDIC | Equal Housing Lender</span>
              </p>
              <p className="text-slate-500 text-xs mt-1">
                NMLS ID: 12345 | Routing Number: 123456789
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-default-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-slate-600 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold">FDIC</span>
                </div>
                <span>Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-slate-600 rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold">SSL</span>
                </div>
                <span>Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
