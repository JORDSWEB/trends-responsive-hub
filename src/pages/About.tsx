
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyInfo from "@/components/CompanyInfo";
import GoogleMap from "@/components/GoogleMap";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-tech-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TechTrends Ltd</h1>
            <p className="text-xl text-tech-light-blue max-w-3xl mx-auto">
              Learn about our story, our mission, and why we're Kigali's premier destination for electronic gadgets.
            </p>
          </div>
        </section>
        
        <CompanyInfo />
        
        {/* Team Section - Simplified for this version */}
        <section className="py-16 bg-tech-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-dark-blue">Our Leadership Team</h2>
              <p className="mt-4 text-lg text-gray-600">Meet the experienced professionals behind TechTrends</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-40 h-40 mx-auto bg-tech-light-blue rounded-full mb-4 flex items-center justify-center">
                    <img
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`}
                      alt="Team member"
                      className="w-40 h-40 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {i === 1 ? 'David Mugisha' : i === 2 ? 'Sarah Uwimana' : 'Robert Niyonzima'}
                  </h3>
                  <p className="text-tech-blue">
                    {i === 1 ? 'CEO & Founder' : i === 2 ? 'Chief Technology Officer' : 'Head of Sales'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Section with Google Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-dark-blue">Our Location</h2>
              <p className="mt-4 text-lg text-gray-600">
                Visit our store in the heart of Kigali at KG 123 St, Kigali Business Center
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

export default About;
