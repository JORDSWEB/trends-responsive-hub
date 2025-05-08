
import { Award, Clock, Users, Briefcase } from "lucide-react";

const stats = [
  { id: 1, icon: Clock, value: "5+", label: "Years of Experience" },
  { id: 2, icon: Users, value: "1000+", label: "Satisfied Customers" },
  { id: 3, icon: Award, value: "25+", label: "Industry Awards" },
  { id: 4, icon: Briefcase, value: "150+", label: "Projects Completed" },
];

const CompanyInfo = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-tech-blue font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tech-dark-blue sm:text-4xl">
            Leading Technology Provider in Kigali
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At TechTrends Ltd, we bring the latest electronic gadgets and innovative solutions to Rwanda.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <h3 className="text-xl font-bold text-tech-dark-blue">Our Story</h3>
              <p className="mt-3 text-base text-gray-500">
                Founded in 2018, TechTrends Ltd was established with a vision to transform the electronic gadget market in Rwanda. 
                We started as a small shop in Kigali with a handful of employees passionate about technology. Today, we've grown into 
                one of the leading tech companies in the region, serving both individual consumers and businesses.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold text-tech-dark-blue">Our Mission</h3>
              <p className="mt-3 text-base text-gray-500">
                Our mission is to provide cutting-edge electronic gadgets and tech solutions that enhance people's lives and 
                businesses. We strive to offer excellent customer service, expert advice, and quality products at competitive prices.
                We're committed to being at the forefront of technological innovation in Rwanda.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold text-tech-dark-blue">Our Values</h3>
              <p className="mt-3 text-base text-gray-500">
                <strong>Innovation:</strong> We constantly seek new and better ways to serve our customers.<br />
                <strong>Quality:</strong> We provide only the best products and services.<br />
                <strong>Integrity:</strong> We conduct our business with honesty and transparency.<br />
                <strong>Customer Focus:</strong> Our customers' needs drive everything we do.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold text-tech-dark-blue">Our Team</h3>
              <p className="mt-3 text-base text-gray-500">
                Our team consists of tech enthusiasts, industry experts, and customer service professionals who share a passion for technology. 
                From our knowledgeable sales staff to our skilled technicians, everyone at TechTrends is dedicated to providing 
                an exceptional experience for our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-tech-light-blue rounded-lg p-6 text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-tech-blue"/>
                </div>
                <p className="mt-4 text-4xl font-extrabold text-tech-dark-blue">{stat.value}</p>
                <p className="mt-1 text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
