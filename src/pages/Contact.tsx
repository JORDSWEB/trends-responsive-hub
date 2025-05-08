
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-tech-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-tech-light-blue max-w-3xl mx-auto">
              We're here to help. Get in touch with our team for any questions or inquiries.
            </p>
          </div>
        </section>
        
        <ContactForm />
        
        {/* Map Section */}
        <section className="py-16 bg-tech-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-dark-blue">Find Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Visit our store in Kigali City
              </p>
            </div>
            
            <GoogleMap />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
