
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Services />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-tech-dark-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Tech?</h2>
            <p className="text-lg text-tech-light-blue mb-8 max-w-3xl mx-auto">
              Visit our store in Kigali or contact us online to explore our wide range of electronic gadgets and tech solutions.
            </p>
            <Button className="bg-white text-tech-dark-blue hover:bg-tech-light-blue border-2 border-white">
              <Link to="/contact" className="flex items-center">
                Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
