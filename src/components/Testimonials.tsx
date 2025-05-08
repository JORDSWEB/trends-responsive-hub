
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Bizimana",
    role: "Tech Enthusiast",
    avatar: "JB",
    testimonial: "TechTrends has the best selection of gadgets in Kigali. Their team is knowledgeable and helped me find exactly what I needed.",
  },
  {
    id: 2,
    name: "Marie Uwase",
    role: "Business Owner",
    avatar: "MU",
    testimonial: "We partnered with TechTrends for our office equipment. Their service was exceptional, and the products have been reliable.",
  },
  {
    id: 3,
    name: "David Mugabo",
    role: "Software Developer",
    avatar: "DM",
    testimonial: "As a developer, I need quality equipment. TechTrends provides cutting-edge tech with great after-sales support.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-tech-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-tech-light-blue">Hear from the people who have experienced our products and services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-14 w-14 border-2 border-tech-blue">
                    <AvatarFallback className="bg-tech-light-blue text-tech-blue">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
                
                <div className="relative">
                  <Quote className="h-6 w-6 text-tech-blue/20 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-600 text-center px-4">
                    {testimonial.testimonial}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
