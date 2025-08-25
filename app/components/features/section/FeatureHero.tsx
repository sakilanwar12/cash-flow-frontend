import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import React from "react";

const FeatureHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-200 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            50+ Innovative Banking Features
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Banking
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover the comprehensive suite of features designed to simplify
            your financial life. From mobile banking to investment tools, we've
            got everything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Try Features Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
