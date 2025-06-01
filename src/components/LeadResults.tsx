
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Lead {
  name: string;
  handle: string;
  score: number;
  reason: string;
  followers: string;
  engagement: string;
}

interface LeadResultsProps {
  leads: Lead[];
}

const LeadResults: React.FC<LeadResultsProps> = ({ leads }) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Great';
    if (score >= 70) return 'Good';
    return 'Fair';
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Your AI-Generated Leads ✅
        </h2>
        <p className="text-gray-600 text-lg">
          We found {leads.length} high-quality potential clients for you!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {leads.map((lead, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-200 border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {lead.name}
                </CardTitle>
                <Badge className={`${getScoreColor(lead.score)} text-white`}>
                  {lead.score}% {getScoreLabel(lead.score)}
                </Badge>
              </div>
              <CardDescription className="text-blue-600 font-medium">
                @{lead.handle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Followers:</span>
                <span className="font-medium">{lead.followers}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Engagement:</span>
                <span className="font-medium">{lead.engagement}</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium">Why they're a match:</span> {lead.reason}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          🔍 Want more leads? Refine your criteria and generate again!
        </p>
      </div>
    </div>
  );
};

export default LeadResults;
