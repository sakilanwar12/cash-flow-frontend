import { Award, CheckCircle, MessageCircle, Lock } from "lucide-react";

const stats = [
  { number: "50+", label: "Powerful Features", icon: Award },
  { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
  { number: "24/7", label: "Customer Support", icon: MessageCircle },
  { number: "256-bit", label: "Bank-Grade Security", icon: Lock },
];

const StatSection = () => {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
