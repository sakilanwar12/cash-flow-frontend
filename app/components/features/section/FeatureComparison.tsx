import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Globe, Zap } from "lucide-react";

const FeatureComparison = () => {
  return (
    <section className="py-24 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Compare our feature-rich platform with traditional banking
            solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-100 rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-6">
                Traditional Banking
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Limited branch hours
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  High fees and charges
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Slow transaction processing
                </li>
                <li className="flex items-center text-slate-600">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Limited digital features
                </li>
              </ul>
            </div>

            {/* Our Platform */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Digital Platform</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  24/7 availability
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  Zero to low fees
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  Instant transactions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  50+ digital features
                </li>
              </ul>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Using All Features Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
