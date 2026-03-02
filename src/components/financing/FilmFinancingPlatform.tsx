'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  FileText, 
  BarChart3, 
  PieChart, 
  Calculator,
  Download,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  Award,
  Briefcase,
  Building,
  Globe,
  Calendar,
  CreditCard,
  Banknote,
  PiggyBank,
  Rocket,
  Handshake,
  Signature
} from 'lucide-react'

interface Investment {
  id: string
  investorName: string
  investorType: 'individual' | 'vc' | 'corporate' | 'angel'
  amount: number
  equityPercentage: number
  status: 'pending' | 'approved' | 'funded' | 'completed'
  date: string
  project: string
  contactInfo: {
    email: string
    phone: string
  }
  documents: {
    kyc: 'pending' | 'approved' | 'rejected'
    agreement: 'draft' | 'signed' | 'executed'
  }
  milestones: Milestone[]
}

interface Milestone {
  id: string
  description: string
  dueDate: string
  amount: number
  status: 'pending' | 'completed' | 'overdue'
  completionDate?: string
}

interface Revenue {
  id: string
  source: 'theatrical' | 'streaming' | 'tv' | 'dvd' | 'merchandise' | 'music' | 'international'
  amount: number
  date: string
  territory: string
  rights: string
  distributor: string
  status: 'reported' | 'confirmed' | 'pending'
}

interface Project {
  id: string
  title: string
  genre: string
  budget: number
  raised: number
  investors: number
  status: 'pre-production' | 'production' | 'post-production' | 'released'
  roi: number
  projectedRevenue: number
  actualRevenue: number
  releaseDate?: string
}

export default function FilmFinancingPlatform() {
  const [selectedTab, setSelectedTab] = useState('investors')

  const [investments] = useState<Investment[]>([
    {
      id: '1',
      investorName: 'TechVentures Capital',
      investorType: 'vc',
      amount: 500000,
      equityPercentage: 15,
      status: 'funded',
      date: '2024-03-01',
      project: 'Digital Revolution',
      contactInfo: {
        email: 'partner@techventures.com',
        phone: '+1 (555) 123-4567'
      },
      documents: {
        kyc: 'approved',
        agreement: 'signed'
      },
      milestones: [
        {
          id: '1-1',
          description: 'Pre-production completion',
          dueDate: '2024-04-15',
          amount: 250000,
          status: 'completed',
          completionDate: '2024-04-12'
        },
        {
          id: '1-2',
          description: 'Principal photography completion',
          dueDate: '2024-06-30',
          amount: 250000,
          status: 'pending'
        }
      ]
    },
    {
      id: '2',
      investorName: 'Sarah Mitchell',
      investorType: 'angel',
      amount: 100000,
      equityPercentage: 5,
      status: 'approved',
      date: '2024-03-05',
      project: 'Digital Revolution',
      contactInfo: {
        email: 'sarah.mitchell@email.com',
        phone: '+1 (555) 987-6543'
      },
      documents: {
        kyc: 'approved',
        agreement: 'draft'
      },
      milestones: [
        {
          id: '2-1',
          description: 'First draft delivery',
          dueDate: '2024-04-01',
          amount: 50000,
          status: 'completed',
          completionDate: '2024-03-28'
        }
      ]
    },
    {
      id: '3',
      investorName: 'Global Entertainment Fund',
      investorType: 'corporate',
      amount: 750000,
      equityPercentage: 20,
      status: 'pending',
      date: '2024-03-10',
      project: 'Mystery Thriller',
      contactInfo: {
        email: 'investments@globalent.com',
        phone: '+1 (555) 246-8135'
      },
      documents: {
        kyc: 'pending',
        agreement: 'draft'
      },
      milestones: []
    }
  ])

  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Digital Revolution',
      genre: 'Sci-Fi Thriller',
      budget: 2500000,
      raised: 1850000,
      investors: 8,
      status: 'production',
      roi: 125,
      projectedRevenue: 8750000,
      actualRevenue: 0,
      releaseDate: '2024-12-15'
    },
    {
      id: '2',
      title: 'Mystery Thriller',
      genre: 'Crime Drama',
      budget: 1800000,
      raised: 450000,
      investors: 3,
      status: 'pre-production',
      roi: 95,
      projectedRevenue: 5200000,
      actualRevenue: 0
    },
    {
      id: '3',
      title: 'Romantic Comedy',
      genre: 'Romance',
      budget: 1200000,
      raised: 1200000,
      investors: 12,
      status: 'released',
      roi: 185,
      projectedRevenue: 3200000,
      actualRevenue: 4100000,
      releaseDate: '2024-02-14'
    }
  ])

  const [revenue] = useState<Revenue[]>([
    {
      id: '1',
      source: 'theatrical',
      amount: 2500000,
      date: '2024-02-16',
      territory: 'North America',
      rights: 'theatrical',
      distributor: 'Warner Bros',
      status: 'confirmed'
    },
    {
      id: '2',
      source: 'streaming',
      amount: 1200000,
      date: '2024-03-01',
      territory: 'Global',
      rights: 'streaming',
      distributor: 'Netflix',
      status: 'reported'
    },
    {
      id: '3',
      source: 'international',
      amount: 400000,
      date: '2024-02-20',
      territory: 'Europe',
      rights: 'theatrical',
      distributor: 'Universal Pictures',
      status: 'confirmed'
    }
  ])

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0)
  const totalRaised = projects.reduce((sum, proj) => sum + proj.raised, 0)
  const totalRevenue = revenue.reduce((sum, rev) => sum + rev.amount, 0)
  const totalProjectedRevenue = projects.reduce((sum, proj) => sum + proj.projectedRevenue, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': case 'funded': case 'completed': case 'confirmed': 
        return 'text-green-400 bg-green-900/20'
      case 'pending': case 'reported': 
        return 'text-yellow-400 bg-yellow-900/20'
      case 'rejected': case 'overdue': 
        return 'text-red-400 bg-red-900/20'
      default: 
        return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': case 'funded': case 'completed': case 'confirmed': 
        return <CheckCircle className="h-4 w-4" />
      case 'pending': case 'reported': 
        return <Clock className="h-4 w-4" />
      case 'rejected': case 'overdue': 
        return <AlertTriangle className="h-4 w-4" />
      default: 
        return <FileText className="h-4 w-4" />
    }
  }

  const getInvestorTypeColor = (type: string) => {
    switch (type) {
      case 'vc': return 'text-blue-400 bg-blue-900/20'
      case 'angel': return 'text-purple-400 bg-purple-900/20'
      case 'corporate': return 'text-orange-400 bg-orange-900/20'
      case 'individual': return 'text-green-400 bg-green-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Film Financing Platform</h2>
          <p className="text-slate-400">Investor portal, ROI projections, and revenue tracking</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Investor
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Invested</p>
                <p className="text-white font-semibold text-lg">${(totalInvested / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Raised</p>
                <p className="text-white font-semibold text-lg">${(totalRaised / 1000000).toFixed(1)}M</p>
              </div>
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Revenue</p>
                <p className="text-white font-semibold text-lg">${(totalRevenue / 1000000).toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Projects</p>
                <p className="text-white font-semibold text-lg">{projects.length}</p>
              </div>
              <Building className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="investors">Investor Portal</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Tracking</TabsTrigger>
          <TabsTrigger value="analytics">ROI Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="investors" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Investor List */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Investors</CardTitle>
                <CardDescription>Manage investor relationships and commitments</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {investments.map((investment) => (
                      <div key={investment.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-white font-semibold">{investment.investorName}</h3>
                              <Badge variant="secondary" className={`text-xs ${getInvestorTypeColor(investment.investorType)}`}>
                                {investment.investorType}
                              </Badge>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(investment.status)}`}>
                                {investment.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{investment.project}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${investment.amount.toLocaleString()}</p>
                            <p className="text-slate-400 text-sm">{investment.equityPercentage}% equity</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">Contact</p>
                            <p className="text-slate-300">{investment.contactInfo.email}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Investment Date</p>
                            <p className="text-slate-300">{investment.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex space-x-4">
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(investment.documents.kyc)}
                              <span className="text-slate-300">KYC: {investment.documents.kyc}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(investment.documents.agreement)}
                              <span className="text-slate-300">Agreement: {investment.documents.agreement}</span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm">
                              <Handshake className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Investment Pipeline */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Investment Pipeline</CardTitle>
                <CardDescription>Track investment stages and conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-medium">Pending Approval</span>
                      <span className="text-white font-semibold">
                        {investments.filter(i => i.status === 'pending').length}
                      </span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-400 font-medium">Approved</span>
                      <span className="text-white font-semibold">
                        {investments.filter(i => i.status === 'approved').length}
                      </span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-medium">Funded</span>
                      <span className="text-white font-semibold">
                        {investments.filter(i => i.status === 'funded').length}
                      </span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{project.title}</h3>
                      <p className="text-slate-400 text-sm">{project.genre}</p>
                    </div>
                    <Badge variant="secondary" className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Funding Progress */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400 text-sm">Funding Progress</span>
                      <span className="text-white text-sm">
                        ${(project.raised / 1000000).toFixed(1)}M / ${(project.budget / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    <Progress value={(project.raised / project.budget) * 100} className="h-2" />
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Investors</p>
                      <p className="text-white font-medium">{project.investors}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">ROI</p>
                      <p className="text-white font-medium">{project.roi}%</p>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Projected</p>
                      <p className="text-white font-medium">${(project.projectedRevenue / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Actual</p>
                      <p className="text-white font-medium">
                        ${(project.actualRevenue / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>

                  {/* Release Date */}
                  {project.releaseDate && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">Release: {project.releaseDate}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue by Source */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Source</CardTitle>
                <CardDescription>Track income across different channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['theatrical', 'streaming', 'international', 'merchandise'].map((source) => {
                    const sourceRevenue = revenue.filter(r => r.source === source)
                    const total = sourceRevenue.reduce((sum, r) => sum + r.amount, 0)
                    return (
                      <div key={source} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium capitalize">{source}</p>
                          <p className="text-slate-400 text-sm">{sourceRevenue.length} transactions</p>
                        </div>
                        <p className="text-white font-semibold">${total.toLocaleString()}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Transactions</CardTitle>
                <CardDescription>Latest revenue reports</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {revenue.slice(0, 5).map((rev) => (
                      <div key={rev.id} className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <p className="text-white font-medium capitalize">{rev.source}</p>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(rev.status)}`}>
                                {rev.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{rev.distributor}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-slate-400 text-xs">{rev.territory}</span>
                              <span className="text-slate-400 text-xs">{rev.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${rev.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ROI Performance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">ROI Performance</CardTitle>
                <CardDescription>Return on investment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{project.title}</span>
                        <span className={`font-semibold ${project.roi > 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {project.roi}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Invested: ${(project.budget / 1000000).toFixed(1)}M</span>
                        <span className="text-slate-400">Revenue: ${(project.actualRevenue / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Risk Assessment</CardTitle>
                <CardDescription>Investment risk analysis and scoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-medium">Low Risk</span>
                    </div>
                    <p className="text-slate-300 text-sm">Digital Revolution - Strong ROI and diversified revenue streams</p>
                  </div>
                  
                  <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">Medium Risk</span>
                    </div>
                    <p className="text-slate-300 text-sm">Mystery Thriller - Moderate ROI, dependent on market reception</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 font-medium">High Reward</span>
                    </div>
                    <p className="text-slate-300 text-sm">Romantic Comedy - Exceeded projections, strong performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}