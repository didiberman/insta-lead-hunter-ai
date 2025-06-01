
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sam's Lead Gen Bot
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              AI-Powered Instagram
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Lead Generator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Find your perfect clients in minutes, not hours. 🔍✨
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <LeadForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results-section" className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <LeadResults leads={leads} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/20 backdrop-blur-md border-t border-white/10 mt-16 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sam's Lead Generation Bot. Powered by AI 🤖✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
