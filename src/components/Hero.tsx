
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to Your <span className="text-blue-600">New Website</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              A clean and modern website template ready for your content. Easy to customize and expand for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-400">
              <span className="text-lg">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
