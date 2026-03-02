'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Film, 
  FileText, 
  DollarSign, 
  Calendar, 
  Users, 
  TrendingUp, 
  Target, 
  Shield,
  Zap,
  Globe,
  BarChart3,
  Camera,
  Video,
  Megaphone,
  Scale,
  Brain,
  ArrowRight
} from 'lucide-react'
import PreProductionSuite from '@/components/pre-production/PreProductionSuite'

const modules = [
  {
    id: 'pre-production',
    title: 'Pre-Production Suite',
    description: 'Script intelligence, visual development, and smart budget planning',
    icon: FileText,
    color: 'bg-blue-500',
    features: ['Script Analysis', 'Storyboard AI', 'Budget Planner', 'Character Development']
  },
  {
    id: 'production',
    title: 'Production Management',
    description: 'Shooting scheduler, crew marketplace, and expense tracking',
    icon: Camera,
    color: 'bg-green-500',
    features: ['Shooting Schedule', 'Crew Marketplace', 'Equipment Rental', 'Expense Dashboard']
  },
  {
    id: 'financing',
    title: 'Film Financing Platform',
    description: 'Investor portal, ROI projections, and revenue tracking',
    icon: DollarSign,
    color: 'bg-yellow-500',
    features: ['Investor Portal', 'ROI Dashboard', 'Revenue Tracking', 'Risk Analysis']
  },
  {
    id: 'distribution',
    title: 'Distribution & Rights',
    description: 'Rights marketplace and distribution analytics',
    icon: Globe,
    color: 'bg-purple-500',
    features: ['Rights Exchange', 'Distribution Analytics', 'Deal Tracking', 'Revenue Sharing']
  },
  {
    id: 'marketing',
    title: 'AI Marketing Suite',
    description: 'Automated trailer generation and campaign analytics',
    icon: Megaphone,
    color: 'bg-red-500',
    features: ['Trailer Generator', 'Campaign Analytics', 'Social Media', 'Performance Tracking']
  },
  {
    id: 'legal',
    title: 'Legal & Compliance',
    description: 'Contract management and compliance tracking',
    icon: Scale,
    color: 'bg-indigo-500',
    features: ['Contract Library', 'Digital Signatures', 'Compliance Hub', 'Document Storage']
  },
  {
    id: 'intelligence',
    title: 'AI Data Intelligence',
    description: 'Predictive analytics and market insights',
    icon: Brain,
    color: 'bg-pink-500',
    features: ['Genre Analytics', 'Audience Insights', 'Success Prediction', 'Market Forecasting']
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Advanced security and access control',
    icon: Shield,
    color: 'bg-gray-500',
    features: ['Role-Based Access', 'Data Encryption', 'Audit Logs', 'Leak Detection']
  }
]

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [showPreProduction, setShowPreProduction] = useState(false)

  if (showPreProduction) {
    return <PreProductionSuite />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Film className="h-10 w-10 text-blue-400" />
                <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">FilmOS</h1>
                <p className="text-slate-400 text-sm">Digital Film Operating System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-400">
                Enterprise Ready
              </Badge>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            The Complete Film Production
            <span className="text-blue-400"> Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From script to screen, FilmOS powers every aspect of modern film production with AI-driven intelligence 
            and enterprise-grade infrastructure.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-white border-slate-600">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Projects Managed', value: '10,000+', icon: Film },
            { label: 'Funding Raised', value: '$500M+', icon: DollarSign },
            { label: 'Active Users', value: '50,000+', icon: Users },
            { label: 'Countries', value: '120+', icon: Globe }
          ].map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modules Grid */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Detailed Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module) => (
                <Card 
                  key={module.id}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all cursor-pointer group"
                  onClick={() => {
                    setSelectedModule(module.id)
                    if (module.id === 'pre-production') {
                      setShowPreProduction(true)
                    }
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                    <CardDescription className="text-slate-400 text-sm">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {module.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {modules.map((module) => (
                <Card key={module.id} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl ${module.color} flex items-center justify-center`}>
                        <module.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {module.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Production Workflow?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of production companies that have already streamlined their operations with FilmOS.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 FilmOS. Digital Film Operating System.</p>
            <p className="text-sm mt-2">Powering the future of film production.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}