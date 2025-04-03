
import { CheckCircle, Users, Shield, Zap } from "lucide-react";

const featureItems = [
  {
    icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
    title: "Easy to Use",
    description: "Our product is designed with simplicity in mind, ensuring a smooth experience."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Team Collaboration",
    description: "Work together with your team members seamlessly on projects."
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security measures."
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick loading times and responsiveness."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform stand out from the competition with these powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
