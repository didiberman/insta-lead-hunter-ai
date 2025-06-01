
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
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
          Tell us about your business 🏢
        </CardTitle>
        <CardDescription className="text-gray-600 text-lg">
          Answer a few quick questions and let AI do the lead hunting for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="businessTitle" className="text-sm font-medium text-gray-700">
              Business title/niche ✨
            </Label>
            <Input
              id="businessTitle"
              value={formData.businessTitle}
              onChange={(e) => handleInputChange('businessTitle', e.target.value)}
              placeholder="e.g., Digital Marketing Agency, Fitness Coach, E-commerce Store"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="idealClient" className="text-sm font-medium text-gray-700">
              Ideal client description 🎯
            </Label>
            <Input
              id="idealClient"
              value={formData.idealClient}
              onChange={(e) => handleInputChange('idealClient', e.target.value)}
              placeholder="e.g., Small business owners with 10-50 employees looking to scale"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyChallenges" className="text-sm font-medium text-gray-700">
              Key challenges you solve 🔧
            </Label>
            <Input
              id="keyChallenges"
              value={formData.keyChallenges}
              onChange={(e) => handleInputChange('keyChallenges', e.target.value)}
              placeholder="e.g., Increase online visibility, automate marketing, improve conversion rates"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desiredResults" className="text-sm font-medium text-gray-700">
              Desired results 📈
            </Label>
            <Input
              id="desiredResults"
              value={formData.desiredResults}
              onChange={(e) => handleInputChange('desiredResults', e.target.value)}
              placeholder="e.g., 50% more qualified leads, double social media engagement"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="extraInfo" className="text-sm font-medium text-gray-700">
              Extra info / keywords (optional) 💡
            </Label>
            <Textarea
              id="extraInfo"
              value={formData.extraInfo}
              onChange={(e) => handleInputChange('extraInfo', e.target.value)}
              placeholder="Any additional details that might help us find better leads..."
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px]"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating Leads...
              </div>
            ) : (
              'Generate Leads 🚀'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
