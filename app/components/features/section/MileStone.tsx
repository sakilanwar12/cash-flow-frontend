import { Heart, Shield, Target, TrendingUp, Users } from "lucide-react";
 const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the safety and security of your financial data with bank-grade encryption and multi-layer protection.",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description:
        "Every decision we make is guided by what's best for our customers and their financial wellbeing.",
    },
    {
      icon: Heart,
      title: "Financial Inclusion",
      description:
        "We believe everyone deserves access to modern banking services, regardless of their background.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in digital banking and financial technology.",
    },
  ];
const MileStone = () => {
  return (
    <section className="py-24 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're guided by core principles that shape every product we build
              and every interaction we have with our customers.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-center mb-16 shadow-2xl">
            <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              "To democratize access to modern banking services and empower
              individuals and businesses to achieve their financial goals
              through innovative, secure, and user-friendly solutions."
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MileStone;
