import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Add Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore.",
  },
  {
    title: "Send Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore.",
  },
  {
    title: "Withdraw Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore.",
  },
];
const Services = () => {
  return (
    <section className="py-16 lg:py-28">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold">Our Services</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {services?.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
