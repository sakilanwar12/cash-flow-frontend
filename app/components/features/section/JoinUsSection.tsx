import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const JoinUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision
            of making banking better for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
