
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-400">
              <span className="text-lg">About Image</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600">
              Founded in 2023, our company has been dedicated to providing high-quality solutions for our customers. We believe in creating value through innovation and customer satisfaction.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experts works tirelessly to ensure that we deliver the best results for each project we undertake. With years of experience in the industry, we understand the needs of our clients.
            </p>
            <Button>Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
