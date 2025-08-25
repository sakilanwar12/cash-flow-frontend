import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const FeatureCta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Calculator className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join millions who've already discovered the power of comprehensive
            digital banking. Get access to all features with your free account.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Open Free Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCta;
