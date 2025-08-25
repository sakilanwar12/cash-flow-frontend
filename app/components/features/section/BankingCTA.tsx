import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Phone, Mail, CheckCircle } from 'lucide-react';

const BankingCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-20 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/50 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 2M+ customers worldwide
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Financial Future?
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Join millions who've already made the switch to smarter banking. 
              Open your account in minutes and start experiencing the difference today.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Open Account Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Approval</h3>
              <p className="text-slate-600">Get approved in under 5 minutes with our streamlined digital process.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Bank-Grade Security</h3>
              <p className="text-slate-600">Your money and data protected by enterprise-level encryption.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-slate-600">Expert help available whenever you need it, day or night.</p>
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our banking experts are here to help you choose the right account and guide you through the setup process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-BANK
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BankingCTA;