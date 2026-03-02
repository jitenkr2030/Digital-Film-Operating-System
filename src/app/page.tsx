'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Film, 
  Users, 
  Calendar, 
  DollarSign, 
  Scale, 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Building, 
  Award,
  TrendingUp,
  Play,
  FileText,
  Eye,
  BarChart3,
  Activity,
  Target,
  CheckCircle,
  Clock,
  AlertTriangle,
  Settings,
  Monitor,
  Smartphone,
  Tv,
  Radio,
  Headphones,
  Volume2,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Trash2,
  Archive,
  Upload,
  Save,
  Copy,
  Edit,
  Trash,
  LogOut,
  User,
  UserCheck,
  UserX,
  Ban,
  Crown,
  Star,
  Trophy,
  Rocket,
  Sparkles,
  Command,
  Palette,
  Camera,
  Video,
  Music,
  Mic,
  FileVideo,
  FilmIcon,
  Clapperboard,
  Popcorn,
  Ticket,
  CreditCard,
  PiggyBank,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Youtube
} from 'lucide-react'

// Import all the components
import PreProductionSuite from '@/components/pre-production/PreProductionSuite'
import FilmFinancingPlatform from '@/components/financing/FilmFinancingPlatform'
import DistributionRightsMarketplace from '@/components/distribution/DistributionRightsMarketplace'
import AIMarketingAutomationSuite from '@/components/marketing/AIMarketingAutomationSuite'
import LegalComplianceHub from '@/components/legal/LegalComplianceHub'
import EnterpriseSecurityLayer from '@/components/security/EnterpriseSecurityLayer'

export default function FilmOSApp() {
  const [activeModule, setActiveModule] = useState('overview')

  const modules = [
    {
      id: 'pre-production',
      name: 'Pre-Production Suite',
      description: 'Script Intelligence, Visual Development, Budget Planning',
      icon: <FileText className="h-5 w-5" />,
      color: 'text-blue-400',
      component: <PreProductionSuite />
    },
    {
      id: 'financing',
      name: 'Film Financing Platform',
      description: 'Investor Portal, Revenue Tracking, Deal Management',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'text-purple-400',
      component: <FilmFinancingPlatform />
    },
    {
      id: 'distribution',
      name: 'Distribution & Rights',
      description: 'Rights Marketplace, Deal Management, Channel Analytics',
      icon: <Globe className="h-5 w-5" />,
      color: 'text-orange-400',
      component: <DistributionRightsMarketplace />
    },
    {
      id: 'marketing',
      name: 'AI Marketing Automation',
      description: 'Campaign Management, Asset Generation, Social Media',
      icon: <Brain className="h-5 w-5" />,
      color: 'text-pink-400',
      component: <AIMarketingAutomationSuite />
    },
    {
      id: 'legal',
      name: 'Legal & Compliance Hub',
      description: 'Contract Management, Compliance Tracking, AI Intelligence',
      icon: <Scale className="h-5 w-5" />,
      color: 'text-red-400',
      component: <LegalComplianceHub />
    },
    {
      id: 'security',
      name: 'Enterprise Security Layer',
      description: 'User Management, Security Monitoring, Monetization Platform',
      icon: <Shield className="h-5 w-5" />,
      color: 'text-indigo-400',
      component: <EnterpriseSecurityLayer />
    }
  ]

  const stats = {
    totalProjects: 127,
    activeUsers: 15420,
    totalRevenue: 45800000,
    completedProjects: 89,
    activeCampaigns: 23,
    complianceRate: 94,
    securityScore: 92,
    monthlyGrowth: 23
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Film className="h-8 w-8 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">FilmOS</h1>
              </div>
              <Badge variant="secondary" className="bg-blue-900/20 text-blue-400 border-blue-700">
                Digital Film Operating System
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeModule === 'overview' ? (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Welcome to FilmOS
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                The complete Digital Film Operating System that transforms film production from concept to distribution
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Projects</p>
                      <p className="text-3xl font-bold text-white">{stats.totalProjects}</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded-lg">
                      <Film className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Active Users</p>
                      <p className="text-3xl font-bold text-white">{stats.activeUsers.toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-green-900/20 rounded-lg">
                      <Users className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Revenue</p>
                      <p className="text-3xl font-bold text-white">${(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="p-3 bg-purple-900/20 rounded-lg">
                      <DollarSign className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Completion Rate</p>
                      <p className="text-3xl font-bold text-white">{Math.round((stats.completedProjects / stats.totalProjects) * 100)}%</p>
                    </div>
                    <div className="p-3 bg-orange-900/20 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Module Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <Card 
                  key={module.id}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer"
                  onClick={() => setActiveModule(module.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${module.color} bg-opacity-20`}>
                        {module.icon}
                      </div>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h3 className="text-lg font-semibold text-white mb-2">{module.name}</h3>
                    <p className="text-slate-400 text-sm">{module.description}</p>
                    <div className="mt-4 flex items-center text-blue-400">
                      <span className="text-sm">Explore module</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-slate-400">Latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Project "Quantum Dreams" Completed</p>
                        <p className="text-slate-400 text-sm">Production finished successfully</p>
                      </div>
                      <span className="text-slate-400 text-sm">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <Brain className="h-5 w-5 text-blue-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">AI Marketing Campaign Launched</p>
                        <p className="text-slate-400 text-sm">Automated campaign for "Neon Nights"</p>
                      </div>
                      <span className="text-slate-400 text-sm">5 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <DollarSign className="h-5 w-5 text-purple-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">New Investment Secured</p>
                        <p className="text-slate-400 text-sm">$2.5M for "Space Odyssey" sequel</p>
                      </div>
                      <span className="text-slate-400 text-sm">1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <Scale className="h-5 w-5 text-red-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Contract Renewal Required</p>
                        <p className="text-slate-400 text-sm">Distribution agreement expires in 30 days</p>
                      </div>
                      <span className="text-slate-400 text-sm">2 days ago</span>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Module Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setActiveModule('overview')}
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Back to Overview
                </Button>
                <div className={`p-2 rounded-lg ${modules.find(m => m.id === activeModule)?.color} bg-opacity-20`}>
                  {modules.find(m => m.id === activeModule)?.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{modules.find(m => m.id === activeModule)?.name}</h2>
                  <p className="text-slate-400">{modules.find(m => m.id === activeModule)?.description}</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                {modules.find(m => m.id === activeModule)?.id.toUpperCase()}
              </Badge>
            </div>

            {/* Module Content */}
            <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
              {modules.find(m => m.id === activeModule)?.component}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">FilmOS</span>
              </div>
              <p className="text-slate-400 text-sm">
                The complete Digital Film Operating System for modern film production.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                © 2024 FilmOS. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}