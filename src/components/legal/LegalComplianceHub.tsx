'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Scale, 
  Shield, 
  FileText, 
  Eye, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Download,
  Plus,
  Search,
  Users,
  Building,
  Globe,
  Lock,
  Key,
  Star,
  Leaf,
  Edit,
  BarChart3,
  Brain,
  Target,
  Zap,
  Award,
  Film,
  Music,
  DollarSign,
  XCircle,
  TrendingUp
} from 'lucide-react'

export default function LegalComplianceHub() {
  const [selectedTab, setSelectedTab] = useState('contracts')

  const contracts = [
    {
      id: '1',
      title: 'Lead Actor Agreement - Sarah Mitchell',
      type: 'talent',
      status: 'active',
      value: 2500000,
      parties: ['Sarah Mitchell'],
      nextAudit: '2024-06-15'
    },
    {
      id: '2',
      title: 'Distribution Agreement - Netflix',
      type: 'distribution',
      status: 'signed',
      value: 5000000,
      parties: ['Netflix, Inc.'],
      nextAudit: '2024-06-30'
    },
    {
      id: '3',
      title: 'Music Licensing Agreement - Universal Music',
      type: 'licensing',
      status: 'active',
      value: 750000,
      parties: ['Universal Music Publishing Group'],
      nextAudit: '2024-07-15'
    }
  ]

  const complianceRequirements = [
    {
      id: '1',
      name: 'GDPR Compliance',
      category: 'data_protection',
      status: 'compliant',
      riskLevel: 'low',
      nextAudit: '2024-07-15'
    },
    {
      id: '2',
      name: 'Copyright Registration',
      category: 'intellectual_property',
      status: 'compliant',
      riskLevel: 'medium',
      nextAudit: '2024-08-01'
    },
    {
      id: '3',
      name: 'Content Rating System',
      category: 'content_rating',
      status: 'pending_review',
      riskLevel: 'medium',
      nextAudit: '2024-06-01'
    },
    {
      id: '4',
      name: 'Accessibility Standards',
      category: 'accessibility',
      status: 'compliant',
      riskLevel: 'low',
      nextAudit: '2024-09-10'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'signed': case 'completed': case 'verified': case 'compliant':
        return 'text-green-400 bg-green-900/20'
      case 'draft': case 'pending': case 'pending_review':
        return 'text-yellow-400 bg-yellow-900/20'
      case 'expired': case 'terminated': case 'overdue': case 'breached': case 'non_compliant':
        return 'text-red-400 bg-red-900/20'
      default:
        return 'text-gray-400 bg-gray-900/20'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Legal & Compliance Hub</h2>
          <p className="text-slate-400">Contract management and compliance tracking with AI intelligence</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Contract
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Contracts</p>
                <p className="text-white font-semibold text-lg">{contracts.length}</p>
              </div>
              <Scale className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Contracts</p>
                <p className="text-white font-semibold text-lg">
                  {contracts.filter(c => c.status === 'active' || c.status === 'signed').length}
                </p>
              </div>
              <Zap className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Compliance Rate</p>
                <p className="text-white font-semibold text-lg">
                  {Math.round((complianceRequirements.filter(r => r.status === 'compliant').length / complianceRequirements.length) * 100)}%
                </p>
              </div>
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">High Risk Items</p>
                <p className="text-white font-semibold text-lg">
                  {complianceRequirements.filter(r => r.riskLevel === 'high' || r.riskLevel === 'critical').length}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="intelligence">AI Intelligence</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="contracts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {contracts.map((contract) => (
              <Card key={contract.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-semibold">{contract.title}</h3>
                        <Badge variant={getStatusColor(contract.status)} className="text-xs">
                          {contract.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Value:</span>
                        <span className="text-white font-medium">
                          ${(contract.value / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{contract.parties.length} parties</p>
                      <p className="text-slate-400 text-sm">Next Audit: {contract.nextAudit}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Compliance Requirements</CardTitle>
                <CardDescription>Regulatory and internal compliance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {complianceRequirements.map((requirement) => (
                      <div key={requirement.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-white font-semibold">{requirement.name}</h3>
                              <Badge variant={getStatusColor(requirement.status)} className="text-xs">
                                {requirement.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{requirement.category}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={
                              requirement.riskLevel === 'critical' ? 'destructive' :
                              requirement.riskLevel === 'high' ? 'destructive' :
                              'secondary'
                            } className="text-xs">
                              {requirement.riskLevel}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                            Details
                          </Button>
                          {requirement.status === 'non_compliant' && (
                            <Button size="sm">
                              <Target className="h-3 w-3" />
                              Remediate
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Risk Assessment</CardTitle>
                <CardDescription>High-priority compliance risks and mitigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceRequirements
                    .filter(r => r.riskLevel === 'high' || r.riskLevel === 'critical')
                    .map((requirement) => (
                      <div key={requirement.id} className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-red-400 font-medium">{requirement.name}</span>
                          <Badge variant="destructive" className="text-xs">
                            {requirement.riskLevel.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{requirement.category}</p>
                        
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                            Review
                          </Button>
                          <Button size="sm">
                            <Target className="h-3 w-3" />
                            Mitigate
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-orange-400" />
                  AI Data Intelligence
                </CardTitle>
                <CardDescription>AI-powered market analysis and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">Market Trend Analysis</h3>
                        <p className="text-slate-300 text-sm">Sci-fi genre performance prediction</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">92% confidence</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">AI predicts 15% increase in engagement with optimized content</p>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-3 w-3" />
                        Full Analysis
                      </Button>
                      <Button size="sm">
                        <Target className="h-3 w-3" />
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Risk Analysis</CardTitle>
                <CardDescription>AI-powered risk assessment and mitigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">Production Risk Assessment</h3>
                        <p className="text-slate-300 text-sm">Comprehensive risk analysis for film production</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">95% confidence</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">Weather delays have 25% probability during outdoor shoots</p>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                        Details
                      </Button>
                      <Button size="sm">
                        <Target className="h-3 w-3" />
                        Action Plan
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contract Analytics</CardTitle>
                <CardDescription>Contract performance and obligation tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['talent', 'distribution', 'licensing', 'production'].map((type) => (
                    <div key={type} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span className="text-white font-medium capitalize">{type}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">
                          ${(contracts.filter(c => c.type === type).reduce((sum, c) => sum + c.value, 0) / 1000000).toFixed(1)}M
                        </p>
                        <p className="text-slate-400 text-sm">total value</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Compliance Analytics</CardTitle>
                <CardDescription>Regulatory compliance metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['data_protection', 'intellectual_property', 'labor_law', 'financial'].map((category) => {
                    const categoryRequirements = complianceRequirements.filter(r => r.category === category)
                    const compliantCount = categoryRequirements.filter(r => r.status === 'compliant').length
                    return (
                      <div key={category} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4" />
                          <span className="text-white font-medium capitalize">{category.replace('_', ' ')}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{compliantCount}/{categoryRequirements.length}</p>
                          <p className="text-slate-400 text-sm">compliant</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}