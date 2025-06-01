
import React, { useState } from 'react';
import LeadForm from '@/components/LeadForm';
import LeadResults from '@/components/LeadResults';

interface FormData {
  businessTitle: string;
  idealClient: string;
  keyChallenges: string;
  desiredResults: string;
  extraInfo: string;
}

interface Lead {
  name: string;
  handle: string;
  score: number;
  reason: string;
  followers: string;
  engagement: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  // Mock data for demonstration
  const generateMockLeads = (formData: FormData): Lead[] => {
    const mockLeads = [
      {
        name: "Sarah Johnson",
        handle: "sarahbizgrowth",
        score: 92,
        reason: "Perfect match for business growth services. Posts about scaling challenges daily.",
        followers: "15.2K",
        engagement: "4.8%"
      },
      {
        name: "Mike Chen",
        handle: "mikesmarketingpro",
        score: 88,
        reason: "Marketing agency owner looking for automation tools. High engagement audience.",
        followers: "23.7K",
        engagement: "5.2%"
      },
      {
        name: "Emily Rodriguez",
        handle: "emilyecommerce",
        score: 85,
        reason: "E-commerce entrepreneur with growing business. Matches your ideal client profile.",
        followers: "8.9K",
        engagement: "6.1%"
      },
      {
        name: "David Park",
        handle: "daviddigitalstrategy",
        score: 81,
        reason: "Digital strategist seeking lead generation solutions. Active in business communities.",
        followers: "12.4K",
        engagement: "4.3%"
      },
      {
        name: "Jessica Williams",
        handle: "jessicacoachingbiz",
        score: 79,
        reason: "Business coach looking to scale her practice. Regularly posts about client acquisition.",
        followers: "19.1K",
        engagement: "5.7%"
      },
      {
        name: "Alex Thompson",
        handle: "alexstartuplife",
        score: 76,
        reason: "Startup founder in growth phase. Matches your target demographic perfectly.",
        followers: "6.8K",
        engagement: "7.2%"
      }
    ];

    return mockLeads;
  };

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    console.log('Processing form data:', formData);

    // Simulate API call
    setTimeout(() => {
      const generatedLeads = generateMockLeads(formData);
      setLeads(generatedLeads);
      setIsLoading(false);
      setShowResults(true);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 100);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Sam's Lead Gen Bot</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            AI-Powered Instagram
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Lead Generator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Find your perfect clients in minutes, not hours. 🔍
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <LeadForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results-section" className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-50/50">
          <div className="container mx-auto">
            <LeadResults leads={leads} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-100 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Sam's Lead Generation Bot. Powered by AI 🤖
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
