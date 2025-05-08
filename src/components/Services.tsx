
import { CheckCircle, Shield, Settings, Smartphone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Smartphone,
    title: "Device Repair",
    description: "Professional repair services for smartphones, laptops, and other electronic gadgets."
  },
  {
    icon: Zap,
    title: "Smart Home Setup",
    description: "Installation and configuration of smart home systems to automate your living space."
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored tech solutions designed specifically for your business or personal needs."
  },
  {
    icon: Shield,
    title: "Data Recovery",
    description: "Recovery of lost data from damaged or corrupted storage devices."
  },
  {
    icon: CheckCircle,
    title: "Tech Consultation",
    description: "Expert advice on choosing the right technology products for your specific requirements."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-dark-blue">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive technology solutions for all your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 rounded-lg transition-all duration-300 hover:shadow-md",
                index % 2 === 0 ? "bg-tech-light-blue" : "bg-tech-gray"
              )}
            >
              <div className="inline-flex items-center justify-center p-3 bg-tech-blue rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
