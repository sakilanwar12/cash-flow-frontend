import { Button } from "@/components/ui/button";
import { Mail, Star, Twitter } from "lucide-react";

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in fintech leadership, former VP at Goldman Sachs",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Tech innovator with expertise in blockchain and digital security",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Customer-centric leader passionate about financial accessibility",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Park",
      role: "Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic finance expert with deep regulatory compliance knowledge",
      linkedin: "#",
      twitter: "#",
    },
  ];
const TeamSection = () => {
  return (
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Meet Our Leadership
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our diverse team of industry veterans and innovative thinkers is
                dedicated to revolutionizing your banking experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-slate-100">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {member.name}
                      </h4>
                      <div className="text-blue-600 font-medium text-sm mb-3">
                        {member.role}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-10 h-10 rounded-full p-0 border-slate-300 hover:border-blue-500 hover:bg-blue-50"
                      >
                        <Twitter className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-10 h-10 rounded-full p-0 border-slate-300 hover:border-blue-500 hover:bg-blue-50"
                      >
                        <Mail className="w-4 h-4 text-slate-600 hover:text-blue-600" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  )
}

export default TeamSection