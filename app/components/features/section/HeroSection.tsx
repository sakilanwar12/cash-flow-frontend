import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Smartphone,
  TrendingUp,
  CreditCard,
  Zap,
  Star,
  Users,
  Award,
  Play,
  CheckCircle,
  Globe,
  Lock,
  Wallet,
} from "lucide-react";

const HomeSection = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "2M+", label: "Happy Customers", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "$2.4B+", label: "Transactions", icon: TrendingUp },
    { value: "50+", label: "Countries", icon: Globe },
  ];

  const features = [
    { icon: Shield, text: "Bank-grade security" },
    { icon: Zap, text: "Instant transfers" },
    { icon: Smartphone, text: "Mobile-first design" },
    { icon: Award, text: "Award-winning support" },
  ];

  // Auto-cycle through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 mt-16 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="heroGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Transaction notification */}
        <div className="absolute top-32 right-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl animate-bounce delay-300 max-w-xs">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white text-sm font-medium">Payment Sent</div>
              <div className="text-white/70 text-xs">$2,500 to John Smith</div>
            </div>
          </div>
        </div>

        {/* Investment card */}
        <div className="absolute bottom-40 left-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl animate-bounce delay-700 max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white/80 text-sm">Portfolio</div>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-white text-xl font-bold">+12.5%</div>
          <div className="text-green-400 text-xs">↗ $1,250 this month</div>
        </div>

        {/* Security badge */}
        <div className="absolute top-1/2 right-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl animate-bounce delay-1000">
          <div className="flex items-center space-x-2">
            <Lock className="w-6 h-6 text-blue-400" />
            <div>
              <div className="text-white text-sm font-medium">Secured</div>
              <div className="text-white/70 text-xs">256-bit encryption</div>
            </div>
          </div>
        </div>

        {/* Credit card visual */}
        <div className="absolute bottom-32 right-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl animate-bounce delay-1500 w-64 h-40 transform rotate-12 hover:rotate-0 transition-transform duration-500">
          <div className="flex justify-between items-start mb-8">
            <Wallet className="w-8 h-8 text-white/80" />
            <div className="text-white/60 text-xs">VISA</div>
          </div>
          <div className="text-white text-lg font-mono">
            •••• •••• •••• 1234
          </div>
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="text-white/60 text-xs">CARDHOLDER</div>
              <div className="text-white text-sm">ALEX JOHNSON</div>
            </div>
            <div>
              <div className="text-white/60 text-xs">EXPIRES</div>
              <div className="text-white text-sm">12/28</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-blue-200 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                FDIC Insured
              </div>
              <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 text-green-200 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Digital Bank 2024
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Banking is Here
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Experience seamless digital banking with zero fees, instant
                transfers, and intelligent money management tools designed for
                the modern world.
              </p>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-slate-300"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                Open Account Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-sm font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-slate-300">
                  <div className="flex items-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm">Trusted by 2M+ customers worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Phone mockup container */}
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-gradient-to-br from-slate-100 to-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-slate-900">
                      <div className="text-sm font-semibold">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-slate-900 rounded-sm"></div>
                        <div className="w-1 h-2 bg-slate-900 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-slate-900 font-bold text-lg">
                            Good morning, Alex
                          </h3>
                          <p className="text-slate-600 text-sm">
                            Welcome back!
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Balance card */}
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white mb-6 shadow-lg">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-blue-200 text-sm">
                              Total Balance
                            </p>
                            <h4 className="text-2xl font-bold">$24,580.50</h4>
                          </div>
                          <CreditCard className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="flex justify-between text-sm text-blue-200">
                          <span>**** 1234</span>
                          <span>+2.5% this month</span>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                          </div>
                          <p className="text-xs text-slate-600">Send</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <div className="w-8 h-8 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </div>
                          <p className="text-xs text-slate-600">Invest</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <Wallet className="w-4 h-4 text-purple-600" />
                          </div>
                          <p className="text-xs text-slate-600">Pay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-b-2xl"></div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -right-8 top-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-pulse">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${
                      currentStat === 0
                        ? "from-blue-500 to-cyan-500"
                        : currentStat === 1
                        ? "from-green-500 to-emerald-500"
                        : currentStat === 2
                        ? "from-purple-500 to-pink-500"
                        : "from-orange-500 to-red-500"
                    } rounded-xl flex items-center justify-center transition-all duration-500`}
                  >
                    {React.createElement(stats[currentStat].icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-lg">
                      {stats[currentStat].value}
                    </div>
                    <div className="text-slate-600 text-xs">
                      {stats[currentStat].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-xs mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HomeSection;
