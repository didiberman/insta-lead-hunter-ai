
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FormData {
  businessTitle: string;
  idealClient: string;
  keyChallenges: string;
  desiredResults: string;
  extraInfo: string;
}

interface LeadFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    businessTitle: '',
    idealClient: '',
    keyChallenges: '',
    desiredResults: '',
    extraInfo: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    onSubmit(formData);
  };

  const isFormValid = formData.businessTitle && formData.idealClient && formData.keyChallenges && formData.desiredResults;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border border-white/20 bg-black/40 backdrop-blur-xl relative overflow-hidden">
      {/* Shiny overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <CardHeader className="text-center pb-6 relative z-10">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Tell us about your business 🏢
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Answer a few quick questions and let AI do the lead hunting for you.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="businessTitle" className="text-sm font-medium text-gray-200">
              Business title/niche ✨
            </Label>
            <Input
              id="businessTitle"
              value={formData.businessTitle}
              onChange={(e) => handleInputChange('businessTitle', e.target.value)}
              placeholder="e.g., Digital Marketing Agency, Fitness Coach, E-commerce Store"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 backdrop-blur-sm transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="idealClient" className="text-sm font-medium text-gray-200">
              Ideal client description 🎯
            </Label>
            <Input
              id="idealClient"
              value={formData.idealClient}
              onChange={(e) => handleInputChange('idealClient', e.target.value)}
              placeholder="e.g., Small business owners with 10-50 employees looking to scale"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 backdrop-blur-sm transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyChallenges" className="text-sm font-medium text-gray-200">
              Key challenges you solve 🔧
            </Label>
            <Input
              id="keyChallenges"
              value={formData.keyChallenges}
              onChange={(e) => handleInputChange('keyChallenges', e.target.value)}
              placeholder="e.g., Increase online visibility, automate marketing, improve conversion rates"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 backdrop-blur-sm transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desiredResults" className="text-sm font-medium text-gray-200">
              Desired results 📈
            </Label>
            <Input
              id="desiredResults"
              value={formData.desiredResults}
              onChange={(e) => handleInputChange('desiredResults', e.target.value)}
              placeholder="e.g., 50% more qualified leads, double social media engagement"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 backdrop-blur-sm transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="extraInfo" className="text-sm font-medium text-gray-200">
              Extra info / keywords (optional) 💡
            </Label>
            <Textarea
              id="extraInfo"
              value={formData.extraInfo}
              onChange={(e) => handleInputChange('extraInfo', e.target.value)}
              placeholder="Any additional details that might help us find better leads..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 backdrop-blur-sm transition-all duration-200 min-h-[80px]"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 disabled:opacity-50 border-0 relative overflow-hidden"
          >
            {/* Shiny button overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
            {isLoading ? (
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating Leads...
              </div>
            ) : (
              <span className="relative z-10">Generate Leads 🚀</span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
