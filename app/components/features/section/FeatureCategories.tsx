import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle,
  Clock,
  CreditCard,
  Eye,
  Globe,
  MessageCircle,
  PiggyBank,
  Scan,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const FeatureCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Features", icon: Globe },
    { id: "mobile", name: "Mobile Banking", icon: Smartphone },
    { id: "security", name: "Security", icon: Shield },
    { id: "payments", name: "Payments", icon: CreditCard },
    { id: "savings", name: "Savings & Investment", icon: PiggyBank },
    { id: "business", name: "Business Tools", icon: BarChart3 },
  ];
  const features = [
    {
      id: 1,
      category: "mobile",
      title: "Mobile Banking App",
      description:
        "Full-featured mobile app with intuitive design and all banking functions at your fingertips.",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "iOS & Android apps",
        "Biometric login",
        "Offline access",
        "Real-time sync",
      ],
    },
    {
      id: 2,
      category: "security",
      title: "Advanced Security",
      description:
        "Multi-layer security with encryption, fraud detection, and real-time monitoring.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      benefits: [
        "256-bit encryption",
        "Fraud detection",
        "24/7 monitoring",
        "Secure authentication",
      ],
    },
    {
      id: 3,
      category: "payments",
      title: "Instant Transfers",
      description:
        "Send money instantly to anyone, anywhere with zero fees on most transactions.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "Instant transfers",
        "Zero fees",
        "QR code payments",
        "International transfers",
      ],
    },
    {
      id: 4,
      category: "savings",
      title: "Smart Savings",
      description:
        "Automated savings tools with high-yield accounts and intelligent round-up features.",
      icon: PiggyBank,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Auto round-up",
        "High-yield savings",
        "Goal tracking",
        "Smart recommendations",
      ],
    },
    {
      id: 5,
      category: "payments",
      title: "Contactless Payments",
      description:
        "Pay anywhere with your phone using NFC, QR codes, or digital wallet integration.",
      icon: Scan,
      color: "from-indigo-500 to-purple-500",
      benefits: [
        "NFC payments",
        "QR scanning",
        "Digital wallet",
        "Merchant integration",
      ],
    },
    {
      id: 6,
      category: "business",
      title: "Expense Analytics",
      description:
        "Comprehensive spending insights with categorization and budget management tools.",
      icon: BarChart3,
      color: "from-red-500 to-rose-500",
      benefits: [
        "Spending categories",
        "Budget alerts",
        "Monthly reports",
        "Trend analysis",
      ],
    },
    {
      id: 7,
      category: "savings",
      title: "Investment Platform",
      description:
        "Build wealth with our integrated investment platform featuring stocks, ETFs, and more.",
      icon: TrendingUp,
      color: "from-teal-500 to-cyan-500",
      benefits: ["Stock trading", "ETF portfolios", "Robo-advisor", "Low fees"],
    },
    {
      id: 8,
      category: "mobile",
      title: "Voice Banking",
      description:
        "Control your account with voice commands for hands-free banking experience.",
      icon: MessageCircle,
      color: "from-violet-500 to-purple-500",
      benefits: [
        "Voice commands",
        "Balance inquiries",
        "Transaction history",
        "Bill payments",
      ],
    },
    {
      id: 9,
      category: "security",
      title: "Biometric Authentication",
      description:
        "Secure access using fingerprint, face recognition, or voice authentication.",
      icon: Eye,
      color: "from-amber-500 to-orange-500",
      benefits: [
        "Fingerprint login",
        "Face recognition",
        "Voice ID",
        "Multi-factor auth",
      ],
    },
    {
      id: 10,
      category: "payments",
      title: "Bill Management",
      description:
        "Automated bill payments, scheduling, and tracking to never miss a payment.",
      icon: Clock,
      color: "from-lime-500 to-green-500",
      benefits: [
        "Auto-pay setup",
        "Bill reminders",
        "Payment history",
        "Scheduled payments",
      ],
    },
    {
      id: 11,
      category: "business",
      title: "Multi-Account Management",
      description:
        "Manage multiple accounts, cards, and family finances from one dashboard.",
      icon: Users,
      color: "from-sky-500 to-blue-500",
      benefits: [
        "Multiple accounts",
        "Family sharing",
        "User permissions",
        "Consolidated view",
      ],
    },
    {
      id: 12,
      category: "mobile",
      title: "Smart Notifications",
      description:
        "Intelligent alerts for transactions, budgets, bills, and security events.",
      icon: Bell,
      color: "from-pink-500 to-rose-500",
      benefits: [
        "Custom alerts",
        "Transaction notifications",
        "Budget warnings",
        "Security alerts",
      ],
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((feature) => feature.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Explore Our Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse through our comprehensive feature set organized by
              category. Click on any category to filter features.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-slate-100 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Feature Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Feature Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center text-sm text-slate-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCategories;
