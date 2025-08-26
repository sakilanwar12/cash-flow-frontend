import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CreditCard,
  PiggyBank,
  TrendingUp,
  Building2,
  Smartphone,
  Shield,
  Users,
  Globe,
  Calculator,
  Briefcase,
  Home,
  GraduationCap,
  Car,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Award,
  Phone,
  Mail
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Personal Banking',
      subtitle: 'Everyday banking made simple',
      description: 'Complete personal banking solutions designed for your daily financial needs with zero monthly fees and premium features.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Zero-fee checking accounts',
        'High-yield savings accounts',
        'Mobile check deposit',
        'ATM fee reimbursement',
        '24/7 customer support'
      ],
      benefits: 'Perfect for individuals and families looking for hassle-free banking',
      image: 'personal'
    },
    {
      id: 2,
      title: 'Business Banking',
      subtitle: 'Grow your business with confidence',
      description: 'Comprehensive business banking services with advanced tools, merchant services, and dedicated support for entrepreneurs.',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Business checking & savings',
        'Merchant services',
        'Payroll management',
        'Business loans & credit',
        'Cash flow analytics'
      ],
      benefits: 'Ideal for small businesses to large enterprises',
      image: 'business'
    },
    {
      id: 3,
      title: 'Investment Services',
      subtitle: 'Build wealth for your future',
      description: 'Professional investment management with robo-advisors, retirement planning, and personalized portfolio strategies.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Automated investing',
        'Retirement accounts (401k, IRA)',
        'Stock & ETF trading',
        'Financial planning',
        'Tax optimization'
      ],
      benefits: 'Start investing with as little as $1',
      image: 'investment'
    },
    {
      id: 4,
      title: 'Credit & Loans',
      subtitle: 'Flexible financing solutions',
      description: 'Competitive rates on personal loans, mortgages, auto loans, and credit cards with fast approval and flexible terms.',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      features: [
        'Personal & auto loans',
        'Home mortgages',
        'Credit cards with rewards',
        'Line of credit',
        'Fast pre-approval'
      ],
      benefits: 'Rates as low as 3.99% APR with excellent credit',
      image: 'credit'
    }
  ];

  const specialServices = [
    {
      title: 'Student Banking',
      description: 'Special accounts and services designed for students with no minimum balance requirements.',
      icon: GraduationCap,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Home Loans',
      description: 'Competitive mortgage rates and first-time homebuyer programs to help you achieve homeownership.',
      icon: Home,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Auto Financing',
      description: 'Low-rate auto loans for new and used vehicles with flexible payment terms.',
      icon: Car,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Insurance Services',
      description: 'Protect what matters most with life, auto, home, and health insurance options.',
      icon: Heart,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your money and data are protected by enterprise-level encryption and fraud monitoring.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant transfers, real-time notifications, and immediate account access 24/7.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the #1 digital bank for customer satisfaction and innovation.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access your money anywhere in the world with our international banking network.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 text-blue-700 text-sm font-medium mb-8">
            <Target className="w-4 h-4 mr-2" />
            Complete Banking Solutions
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Banking Services
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Built for You
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From everyday banking to wealth management, discover comprehensive financial services 
            designed to support your goals at every stage of life.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-24">
          
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <Button
                key={service.id}
                onClick={() => setActiveService(index)}
                variant={activeService === index ? "default" : "outline"}
                className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeService === index 
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105` 
                    : 'hover:bg-blue-50 hover:border-blue-300 hover:scale-105'
                }`}
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
              </Button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left Content */}
              <div className="p-12 lg:p-16">
                <div className={`w-16 h-16 bg-gradient-to-br ${services[activeService].color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    {services[activeService].subtitle}
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h4>
                  <div className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Perfect Match</div>
                      <div className="text-sm text-slate-600">{services[activeService].benefits}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r ${services[activeService].color} hover:shadow-xl text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 group`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Visual */}
              <div className={`bg-gradient-to-br ${services[activeService].color} p-12 lg:p-16 flex items-center justify-center relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="serviceGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#serviceGrid)" />
                  </svg>
                </div>

                {/* Service Visualization */}
                <div className="relative z-10 text-center text-white">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
                    {React.createElement(services[activeService].icon, { className: "w-16 h-16 text-white" })}
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">{services[activeService].title}</h4>
                  <p className="text-white/80 text-lg">
                    {services[activeService].subtitle}
                  </p>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce delay-300">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce delay-700">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Specialized Services</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Additional services tailored to meet your specific life stages and financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-slate-100 group">
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Services?</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our customer-first approach and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-center shadow-2xl">
          <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Speak with one of our banking specialists to find the perfect services for your needs. 
            Free consultation and personalized recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;