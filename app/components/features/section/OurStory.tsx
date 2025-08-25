import {
  Award,
  Building2,
  Globe,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const milestones = [
  {
    year: "2018",
    event: "Founded with a vision to democratize banking",
    icon: Building2,
  },
  {
    year: "2019",
    event: "Launched mobile-first banking platform",
    icon: Zap,
  },
  { year: "2021", event: "Reached 500K satisfied customers", icon: Users },
  {
    year: "2023",
    event: "Expanded to serve 2M+ customers globally",
    icon: Globe,
  },
  {
    year: "2024",
    event: "Introduced AI-powered financial insights",
    icon: Target,
  },
];
const OurStory = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                From Vision to Reality
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2018 by a team of banking veterans and tech
                innovators, we set out to solve the fundamental problems
                plaguing traditional banking: complexity, high fees, and poor
                customer experience.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                What started as a small fintech startup has grown into a trusted
                financial institution serving millions of customers across the
                globe. We've maintained our startup agility while building the
                robust security and reliability you expect from your bank.
              </p>
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  2M+ Customers
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-500" />
                  25+ Countries
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-500" />
                  50+ Awards
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-80">
                      Total Transactions
                    </span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold">$2.4B+</div>
                  <div className="text-sm opacity-80">Processed securely</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Our Journey
            </h3>
            <div className="grid md:grid-cols-5 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-sm text-slate-600">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
