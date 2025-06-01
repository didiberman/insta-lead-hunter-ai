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
    if (score >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-600';
    if (score >= 80) return 'bg-gradient-to-r from-blue-500 to-cyan-600';
    if (score >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-orange-500 to-red-500';
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Your AI-Generated Leads ✅
        </h2>
        <p className="text-gray-300 text-lg">
          We found {leads.length} high-quality potential clients for you! ✨
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {leads.map((lead, index) => (
          <Card 
            key={index} 
            className="hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-white/20 bg-black/40 backdrop-blur-xl hover:scale-105 relative overflow-hidden group"
          >
            {/* Shiny card overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg font-semibold text-white">
                  {lead.name}
                </CardTitle>
                <Badge className={`${getScoreColor(lead.score)} text-white border-0 shadow-lg`}>
                  {lead.score}% {getScoreLabel(lead.score)}
                </Badge>
              </div>
              <CardDescription className="text-cyan-400 font-medium">
                @{lead.handle}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3 relative z-10">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Followers:</span>
                <span className="font-medium text-white">{lead.followers}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Engagement:</span>
                <span className="font-medium text-white">{lead.engagement}</span>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-medium text-white">Why they're a match:</span> {lead.reason}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          🔍 Want more leads? Refine your criteria and generate again! ✨
        </p>
      </div>
    </div>
  );
};

export default LeadResults;
