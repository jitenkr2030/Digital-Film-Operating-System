'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
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
  Filter,
  Upload,
  Calendar,
  Users,
  Building,
  Globe,
  Lock,
  Key,
  BookOpen,
  Stamp,
  Signature,
  Gavel,
  Brain,
  TrendingUp,
  Activity,
  Database,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Mail,
  MessageSquare,
  Bell,
  Award,
  Target,
  Zap,
  RefreshCw
} from 'lucide-react'

interface Contract {
  id: string
  title: string
  type: 'talent' | 'distribution' | 'production' | 'licensing' | 'option' | 'acquisition' | 'co_production'
  status: 'draft' | 'pending_review' | 'signed' | 'active' | 'expired' | 'terminated'
  parties: ContractParty[]
  value: number
  currency: string
  start_date: string
  end_date: string
  key_terms: string[]
  obligations: ContractObligation[]
  restrictions: string[]
  signatures: DigitalSignature[]
  last_modified: string
  expiry_reminder: boolean
  auto_renewal: boolean
  created_by: string
  documents: ContractDocument[]
}

interface ContractParty {
  id: string
  name: string
  type: 'individual' | 'company' | 'llc' | 'partnership'
  role: 'producer' | 'director' | 'actor' | 'distributor' | 'licensor' | 'licensee'
  contact: {
    email: string
    phone: string
    address: string
  }
  legal_representative: string
}

interface ContractObligation {
  id: string
  party: string
  description: string
  due_date: string
  status: 'pending' | 'completed' | 'overdue' | 'breached'
  priority: 'high' | 'medium' | 'low'
  value?: number
  evidence: string[]
  reminders: ContractReminder[]
}

interface ContractReminder {
  id: string
  type: 'expiry' | 'obligation' | 'payment' | 'renewal'
  scheduled_date: string
  sent: boolean
  acknowledged: boolean
  message: string
}

interface ContractDocument {
  id: string
  name: string
  type: 'main' | 'amendment' | 'attachment' | 'exhibit'
  url: string
  size: number
  format: string
  version: string
  upload_date: string
  checksum: string
}

interface DigitalSignature {
  id: string
  party_id: string
  party_name: string
  signature_date: string
  signature_ip: string
  signature_device: string
  verification_status: 'pending' | 'verified' | 'invalid'
  certificate_url: string
  biometric_data?: string
}

interface ComplianceRequirement {
  id: string
  name: string
  category: 'data_protection' | 'intellectual_property' | 'labor_law' | 'environmental' | 'financial' | 'content_rating' | 'accessibility'
  jurisdiction: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  due_date: string
  status: 'compliant' | 'non_compliant' | 'pending_review' | 'exempt'
  evidence: ComplianceEvidence[]
  assigned_to: string
  last_audit: string
  next_audit: string
  risk_level: 'low' | 'medium' | 'high' | 'critical'
}

interface ComplianceEvidence {
  id: string
  type: 'document' | 'audit_report' | 'certification' | 'test_result' | 'policy' | 'procedure'
  title: string
  description: string
  url: string
  upload_date: string
  expiry_date?: string
  verified: boolean
  verified_by: string
  verification_date: string
}

interface DataIntelligence {
  id: string
  type: 'market_trend' | 'audience_insight' | 'performance_prediction' | 'risk_analysis' | 'competitive_analysis'
  title: string
  description: string
  confidence: number
  data_source: string[]
  methodology: string
  findings: {
    key_insights: string[]
    recommendations: string[]
    predictions: Array<{
      metric: string
      value: number
      timeframe: string
      probability: number
    }>
    risk_factors: Array<{
      factor: string
      impact: 'low' | 'medium' | 'high' | 'critical'
      probability: number
      mitigation: string[]
    }>
  }
  created_at: string
  updated_at: string
  last_analyzed: string
  next_analysis: string
}

export default function LegalComplianceHub() {
  const [selectedTab, setSelectedTab] = useState('contracts')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [contracts] = useState<Contract[]>([
    {
      id: '1',
      title: 'Lead Actor Agreement - Sarah Mitchell',
      type: 'talent',
      status: 'active',
      parties: [
        {
          id: '1',
          name: 'Sarah Mitchell',
          type: 'individual',
          role: 'actor',
          contact: {
            email: 'sarah.mitchell@agency.com',
            phone: '+1 (555) 123-4567',
            address: '123 Hollywood Blvd, Los Angeles, CA 90028'
          },
          legal_representative: 'CAA Talent Agency'
        }
      ],
      value: 2500000,
      currency: 'USD',
      start_date: '2024-01-01',
      end_date: '2026-12-31',
      key_terms: ['exclusivity', 'promotion obligations', 'image rights', 'royalty structure'],
      obligations: [
        {
          id: '1-1',
          party: 'Sarah Mitchell',
          description: 'Provide exclusive acting services for the production',
          due_date: '2024-06-15',
          status: 'completed',
          priority: 'high',
          value: 1250000,
          evidence: ['Production Schedule', 'Daily Call Sheets'],
          reminders: []
        }
      ],
      restrictions: ['No competing projects', 'Approval required for public appearances', 'Social media content guidelines'],
      signatures: [
        {
          id: '1-1',
          party_id: '1',
          party_name: 'Sarah Mitchell',
          signature_date: '2024-01-15',
          signature_ip: '192.168.1.100',
          signature_device: 'iPhone 14 Pro',
          verification_status: 'verified',
          certificate_url: '/api/placeholder/certificate'
        }
      ],
      last_modified: '2024-03-20',
      expiry_reminder: true,
      auto_renewal: false,
      created_by: 'Legal Team',
      documents: [
        {
          id: '1-1',
          name: 'Main Agreement',
          type: 'main',
          url: '/api/placeholder/contract',
          size: 2500000,
          format: 'PDF',
          version: '1.0',
          upload_date: '2024-01-15',
          checksum: 'abc123def456'
        }
      ]
    },
    {
      id: '2',
      title: 'Distribution Agreement - Netflix',
      type: 'distribution',
      status: 'signed',
      parties: [
        {
          id: '2-1',
          name: 'Netflix, Inc.',
          type: 'company',
          role: 'distributor',
          contact: {
            email: 'legal@netflix.com',
            phone: '+1 (408) 540-8000',
            address: '100 Winchester Way, Los Gatos, CA 95032'
          },
          legal_representative: 'Netflix Legal Department'
        }
      ],
      value: 5000000,
      currency: 'USD',
      start_date: '2024-03-15',
      end_date: '2027-03-14',
      key_terms: ['exclusive streaming rights', 'territory restrictions', 'revenue sharing', 'marketing obligations'],
      obligations: [
        {
          id: '2-1',
          party: 'Netflix, Inc.',
          description: 'Pay guaranteed minimum revenue quarterly',
          due_date: '2024-06-30',
          status: 'pending',
          priority: 'high',
          value: 1250000,
          evidence: [],
          reminders: [
            {
              id: '2-1-1',
              type: 'payment',
              scheduled_date: '2024-06-30',
              sent: false,
              acknowledged: false,
              message: 'Q2 2024 guaranteed minimum payment due'
            }
          ]
        }
      ],
      restrictions: ['No theatrical release within 90 days', 'Territory exclusivity', 'Content approval rights'],
      signatures: [
        {
          id: '2-1',
          party_id: '2-1',
          party_name: 'Netflix, Inc.',
          signature_date: '2024-03-15',
          signature_ip: '203.0.113.10',
          signature_device: 'Corporate Laptop',
          verification_status: 'verified',
          certificate_url: '/api/placeholder/certificate'
        }
      ],
      last_modified: '2024-03-15',
      expiry_reminder: true,
      auto_renewal: true,
      created_by: 'Distribution Team',
      documents: []
    },
    {
      id: '3',
      title: 'Music Licensing Agreement - Universal Music',
      type: 'licensing',
      status: 'active',
      parties: [
        {
          id: '3-1',
          name: 'Universal Music Publishing Group',
          type: 'company',
          role: 'licensor',
          contact: {
            email: 'licensing@umusic.com',
            phone: '+1 (310) 865-4000',
            address: '2220 Colorado Avenue, Santa Monica, CA 90404'
          },
          legal_representative: 'Universal Music Legal'
        }
      ],
      value: 750000,
      currency: 'USD',
      start_date: '2024-01-01',
      end_date: '2027-12-31',
      key_terms: ['synchronization rights', 'mechanical royalties', 'performance rights', 'territory'],
      obligations: [
        {
          id: '3-1',
          party: 'Universal Music Publishing Group',
          description: 'Provide monthly royalty statements',
          due_date: '2024-02-15',
          status: 'completed',
          priority: 'medium',
          value: 125000,
          evidence: ['Royalty Statement Q1 2024'],
          reminders: []
        }
      ],
      restrictions: ['Territory restrictions', 'No unauthorized adaptations', 'Credit requirements'],
      signatures: [],
      last_modified: '2024-03-18',
      expiry_reminder: true,
      auto_renewal: false,
      created_by: 'Music Supervisor',
      documents: []
    }
  ])

  const [complianceRequirements] = useState<ComplianceRequirement[]>([
    {
      id: '1',
      name: 'GDPR Compliance',
      category: 'data_protection',
      jurisdiction: 'EU',
      description: 'General Data Protection Regulation compliance for EU user data',
      priority: 'critical',
      due_date: '2024-06-30',
      status: 'compliant',
      evidence: [
        {
          id: '1-1',
          type: 'certification',
          title: 'GDPR Compliance Certificate',
          description: 'Official GDPR compliance certification',
          url: '/api/placeholder/certificate',
          upload_date: '2024-01-15',
          verified: true,
          verified_by: 'External Auditor',
          verification_date: '2024-01-20'
        }
      ],
      assigned_to: 'Data Protection Officer',
      last_audit: '2024-01-15',
      next_audit: '2024-07-15',
      risk_level: 'low'
    },
    {
      id: '2',
      name: 'Copyright Registration',
      category: 'intellectual_property',
      jurisdiction: 'US',
      description: 'US Copyright Office registration for original works',
      priority: 'high',
      due_date: '2024-04-30',
      status: 'compliant',
      evidence: [
        {
          id: '2-1',
          type: 'document',
          title: 'Copyright Registration Certificate',
          description: 'Official US Copyright Office registration',
          url: '/api/placeholder/certificate',
          upload_date: '2024-02-01',
          verified: true,
          verified_by: 'Legal Team',
          verification_date: '2024-02-05'
        }
      ],
      assigned_to: 'IP Counsel',
      last_audit: '2024-02-01',
      next_audit: '2025-02-01',
      risk_level: 'medium'
    },
    {
      id: '3',
      name: 'Content Rating System',
      category: 'content_rating',
      jurisdiction: 'US',
      description: 'MPAA rating compliance for theatrical distribution',
      priority: 'high',
      due_date: '2024-05-15',
      status: 'pending_review',
      evidence: [],
      assigned_to: 'Content Compliance Team',
      last_audit: '2024-03-01',
      next_audit: '2024-06-01',
      risk_level: 'medium'
    },
    {
      id: '4',
      name: 'Accessibility Standards',
      category: 'accessibility',
      jurisdiction: 'US',
      description: 'WCAG 2.1 AA compliance for digital platforms',
      priority: 'medium',
      due_date: '2024-08-31',
      status: 'compliant',
      evidence: [
        {
          id: '4-1',
          type: 'test_result',
          title: 'WCAG 2.1 AA Compliance Report',
          description: 'Third-party accessibility audit results',
          url: '/api/placeholder/report',
          upload_date: '2024-03-10',
          verified: true,
          verified_by: 'Accessibility Consultant',
          verification_date: '2024-03-15'
        }
      ],
      assigned_to: 'Accessibility Team',
      last_audit: '2024-03-10',
      next_audit: '2024-09-10',
      risk_level: 'low'
    }
  ])

  const [dataIntelligence] = useState<DataIntelligence[]>([
    {
      id: '1',
      type: 'market_trend',
      title: 'Sci-Fi Genre Performance Analysis',
      description: 'Comprehensive analysis of sci-fi film market trends and performance',
      confidence: 92,
      data_source: ['box_office_mojo', 'rotten_tomatoes', 'social_media_sentiment', 'streaming_data'],
      methodology: 'Machine learning analysis of 10 years of market data',
      findings: {
        key_insights: [
          'Sci-fi films with AI themes perform 35% better at box office',
          'Streaming platforms show 45% higher engagement for AI content',
          'International markets growing 25% for sci-fi content'
        ],
        recommendations: [
          'Increase marketing budget for AI-themed content',
          'Focus on streaming platforms for sci-fi distribution',
          'Expand international distribution for sci-fi projects'
        ],
        predictions: [
          {
            metric: 'box_office_revenue',
            value: 125000000,
            timeframe: 'Q3 2024',
            probability: 0.85
          },
          {
            metric: 'streaming_hours',
            value: 25000000,
            timeframe: 'Q4 2024',
            probability: 0.78
          }
        ],
        risk_factors: [
          {
            factor: 'Market saturation',
            impact: 'medium',
            probability: 0.3,
            mitigation: ['Diversify content themes', 'Focus on emerging markets']
          },
          {
            factor: 'Competition',
            impact: 'high',
            probability: 0.6,
            mitigation: ['Unique selling propositions', 'Strong IP protection']
          }
        ]
      },
      created_at: '2024-03-20',
      updated_at: '2024-03-20',
      last_analyzed: '2024-03-20',
      next_analysis: '2024-04-20'
    },
    {
      id: '2',
      type: 'audience_insight',
      title: 'Gen Z Viewer Behavior Analysis',
      description: 'Deep analysis of Gen Z audience preferences and viewing patterns',
      confidence: 88,
      data_source: ['social_media_analytics', 'viewing_data', 'survey_responses', 'focus_groups'],
      methodology: 'Mixed-methods research combining quantitative and qualitative data',
      findings: {
        key_insights: [
          'Gen Z prefers mobile-first content consumption',
          'Interactive and immersive content shows 40% higher engagement',
          'Social media integration drives 60% of content discovery'
        ],
        recommendations: [
          'Optimize for mobile viewing experience',
          'Create interactive and immersive content elements',
          'Integrate social sharing features throughout platforms'
        ],
        predictions: [
          {
            metric: 'mobile_engagement',
            value: 0.75,
            timeframe: 'Q2 2024',
            probability: 0.82
          },
          {
            metric: 'social_shares',
            value: 2500000,
            timeframe: 'Q2 2024',
            probability: 0.76
          }
        ],
        risk_factors: [
          {
            factor: 'Platform fragmentation',
            impact: 'medium',
            probability: 0.4,
            mitigation: ['Multi-platform strategy', 'Responsive design']
          },
          {
            factor: 'Attention span',
            impact: 'medium',
            probability: 0.5,
            mitigation: ['Short-form content', 'Interactive elements']
          }
        ]
      },
      created_at: '2024-03-19',
      updated_at: '2024-03-19',
      last_analyzed: '2024-03-19',
      next_analysis: '2024-04-19'
    },
    {
      id: '3',
      type: 'risk_analysis',
      title: 'Production Risk Assessment',
      description: 'Comprehensive risk analysis for film production operations',
      confidence: 95,
      data_source: ['historical_data', 'industry_reports', 'weather_data', 'market_conditions'],
      methodology: 'Monte Carlo simulation with expert validation',
      findings: {
        key_insights: [
          'Weather delays have 25% probability during outdoor shoots',
          'Budget overruns average 15% for complex productions',
          'Cast availability issues affect 10% of productions'
        ],
        recommendations: [
          'Build weather contingency into production schedules',
          'Include 20% buffer in budget estimates',
          'Secure backup options for key cast members'
        ],
        predictions: [
          {
            metric: 'delay_probability',
            value: 0.25,
            timeframe: 'Q3 2024',
            probability: 0.75
          },
          {
            metric: 'budget_variance',
            value: 0.15,
            timeframe: 'Q3 2024',
            probability: 0.80
          }
        ],
        risk_factors: [
          {
            factor: 'Weather disruptions',
            impact: 'high',
            probability: 0.3,
            mitigation: ['Weather insurance', 'Indoor backup locations', 'Flexible scheduling']
          },
          {
            factor: 'Cast availability',
            impact: 'medium',
            probability: 0.15,
            mitigation: ['Multi-option casting', 'Schedule flexibility', 'Contractual penalties']
          }
        ]
      },
      created_at: '2024-03-18',
      updated_at: '2024-03-18',
      last_analyzed: '2024-03-18',
      next_analysis: '2024-04-18'
    }
  ])

  const totalContracts = contracts.length
  const activeContracts = contracts.filter(c => c.status === 'active' || c.status === 'signed').length
  const pendingObligations = contracts.reduce((sum, contract) => 
    sum + contract.obligations.filter(o => o.status === 'pending' || o.status === 'overdue').length, 0
  )
  const compliantRequirements = complianceRequirements.filter(r => r.status === 'compliant').length
  const highRiskRequirements = complianceRequirements.filter(r => r.risk_level === 'high' || r.risk_level === 'critical').length

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Zap className="h-4 w-4" />
      case 'signed': return <CheckCircle className="h-4 w-4" />
      case 'completed': return <Award className="h-4 w-4" />
      case 'draft': return <Edit className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'expired': return <AlertTriangle className="h-4 w-4" />
      case 'terminated': return <XCircle className="h-4 w-4" />
      case 'verified': return <Shield className="h-4 w-4" />
      case 'compliant': return <CheckCircle className="h-4 w-4" />
      case 'overdue': return <AlertTriangle className="h-4 w-4" />
      case 'breached': return <XCircle className="h-4 w-4" />
      case 'non_compliant': return <AlertTriangle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getContractTypeIcon = (type: string) => {
    switch (type) {
      case 'talent': return <Users className="h-4 w-4" />
      case 'distribution': return <Globe className="h-4 w-4" />
      case 'production': return <Film className="h-4 w-4" />
      case 'licensing': return <Music className="h-4 w-4" />
      case 'option': return <Target className="h-4 w-4" />
      case 'acquisition': return <TrendingUp className="h-4 w-4" />
      case 'co_production': return <Building className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getComplianceCategoryIcon = (category: string) => {
    switch (category) {
      case 'data_protection': return <Shield className="h-4 w-4" />
      case 'intellectual_property': return <Key className="h-4 w-4" />
      case 'labor_law': return <Users className="h-4 w-4" />
      case 'environmental': return <Leaf className="h-4 w-4" />
      case 'financial': return <DollarSign className="h-4 w-4" />
      case 'content_rating': return <Star className="h-4 w-4" />
      case 'accessibility': return <Eye className="h-4 w-4" />
      default: return <Scale className="h-4 w-4" />
    }
  }

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-900/20'
      case 'high': return 'text-orange-400 bg-orange-900/20'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20'
      case 'low': return 'text-green-400 bg-green-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.parties.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType === 'all' || contract.type === selectedType
    return matchesSearch && matchesType
  })

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
                <p className="text-white font-semibold text-lg">{totalContracts}</p>
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
                <p className="text-white font-semibold text-lg">{activeContracts}</p>
              </div>
              <Zap className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Pending Obligations</p>
                <p className="text-white font-semibold text-lg">{pendingObligations}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Compliance Rate</p>
                <p className="text-white font-semibold text-lg">
                  {Math.round((compliantRequirements / complianceRequirements.length) * 100)}%
                </p>
              </div>
              <Shield className="h-8 w-8 text-purple-400" />
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
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search contracts, parties, or terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg"
            >
              <option value="all">All Types</option>
              <option value="talent">Talent</option>
              <option value="distribution">Distribution</option>
              <option value="production">Production</option>
              <option value="licensing">Licensing</option>
              <option value="option">Option</option>
              <option value="acquisition">Acquisition</option>
              <option value="co_production">Co-production</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredContracts.map((contract) => (
              <Card key={contract.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getContractTypeIcon(contract.type)}
                        <h3 className="text-white font-semibold">{contract.title}</h3>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(contract.status)}`}>
                          {contract.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Value:</span>
                        <span className="text-white font-medium">
                          ${(contract.value / 1000000).toFixed(1)}M {contract.currency}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{contract.parties.length} parties</p>
                      <p className="text-slate-400 text-sm">
                        {contract.start_date} - {contract.end_date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Contract Parties */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Parties</p>
                    <div className="space-y-2">
                      {contract.parties.slice(0, 2).map((party) => (
                        <div key={party.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-3 w-3 text-slate-500" />
                            <span className="text-white">{party.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {party.role}
                          </Badge>
                        </div>
                      ))}
                      {contract.parties.length > 2 && (
                        <p className="text-slate-400 text-xs">+{contract.parties.length - 2} more</p>
                      )}
                    </div>
                  </div>

                  {/* Key Terms */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Key Terms</p>
                    <div className="flex flex-wrap gap-1">
                      {contract.key_terms.slice(0, 3).map((term, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {term}
                        </Badge>
                      ))}
                      {contract.key_terms.length > 3 && (
                        <p className="text-slate-400 text-xs">+{contract.key_terms.length - 3} more</p>
                      )}
                    </div>
                  </div>

                  {/* Obligations */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-slate-400 text-sm">Obligations</p>
                      <Badge variant="outline" className="text-xs">
                        {contract.obligations.length} total
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {contract.obligations.slice(0, 2).map((obligation) => (
                        <div key={obligation.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                          <div className="flex-1">
                            <p className="text-white text-sm">{obligation.description}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-slate-400 text-xs">Due:</span>
                              <span className="text-white text-xs">{obligation.due_date}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={obligation.status === 'completed' ? 'secondary' : 'outline'} className="text-xs">
                              {obligation.status}
                            </Badge>
                            <Badge variant={obligation.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                              {obligation.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
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
            {/* Compliance Requirements */}
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
                              {getComplianceCategoryIcon(requirement.category)}
                              <h3 className="text-white font-semibold">{requirement.name}</h3>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(requirement.status)}`}>
                                {requirement.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{requirement.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={getRiskLevelColor(requirement.risk_level)} className="text-xs">
                              {requirement.risk_level}
                            </Badge>
                            <p className="text-slate-400 text-sm">{requirement.jurisdiction}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">Priority</p>
                            <p className="text-white font-medium capitalize">{requirement.priority}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Next Audit</p>
                            <p className="text-white font-medium">{requirement.next_audit}</p>
                          </div>
                        </div>

                        {requirement.evidence.length > 0 && (
                          <div>
                            <p className="text-slate-400 text-sm mb-2">Evidence</p>
                            <div className="space-y-1">
                              {requirement.evidence.map((evidence, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                                  <div className="flex-1">
                                    <p className="text-white text-sm">{evidence.title}</p>
                                    <p className="text-slate-400 text-xs">{evidence.type}</p>
                                  </div>
                                  <div className="text-right">
                                    {evidence.verified ? (
                                      <CheckCircle className="h-3 w-3 text-green-400" />
                                    ) : (
                                      <Clock className="h-3 w-3 text-yellow-400" />
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

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

            {/* Risk Assessment */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Risk Assessment</CardTitle>
                <CardDescription>High-priority compliance risks and mitigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceRequirements
                    .filter(r => r.risk_level === 'high' || r.risk_level === 'critical')
                    .map((requirement) => (
                      <div key={requirement.id} className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-red-400 font-medium">{requirement.name}</span>
                          <Badge variant="destructive" className="text-xs">
                            {requirement.risk_level.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{requirement.description}</p>
                        
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-slate-400">Assigned to:</span>
                          <span className="text-white font-medium">{requirement.assigned_to}</span>
                        </div>

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
            {/* Market Insights */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-orange-400" />
                  AI Data Intelligence
                </CardTitle>
                <CardDescription>AI-powered market analysis and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {dataIntelligence.map((intelligence) => (
                      <div key={intelligence.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="secondary" className="text-xs">
                                {intelligence.type}
                              </Badge>
                              <h3 className="text-white font-semibold">{intelligence.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm">{intelligence.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{intelligence.confidence}% confidence</p>
                            <p className="text-slate-400 text-sm">Last analyzed: {intelligence.last_analyzed}</p>
                          </div>
                        </div>

                        {/* Key Insights */}
                        <div className="mb-3">
                          <p className="text-slate-400 text-sm mb-2">Key Insights</p>
                          <div className="space-y-1">
                            {intelligence.findings.key_insights.slice(0, 2).map((insight, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-slate-300 text-sm">{insight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Predictions */}
                        <div className="mb-3">
                          <p className="text-slate-400 text-sm mb-2">Predictions</p>
                          <div className="space-y-2">
                            {intelligence.findings.predictions.slice(0, 2).map((prediction, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                                <div className="flex-1">
                                  <p className="text-white text-sm">{prediction.metric}</p>
                                  <p className="text-slate-400 text-xs">{prediction.value} ({prediction.timeframe})</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-white font-medium">{(prediction.probability * 100).toFixed(0)}%</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-3 w-3" />
                            Full Analysis
                          </Button>
                          <Button size="sm">
                            <RefreshCw className="h-3 w-3" />
                            Update
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Risk Analysis</CardTitle>
                <CardDescription>AI-powered risk assessment and mitigation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dataIntelligence
                    .filter(intel => intel.type === 'risk_analysis')
                    .map((intel) => (
                      <div key={intel.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{intel.title}</h3>
                            <p className="text-slate-300 text-sm">{intel.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{intel.confidence}% confidence</p>
                          </div>
                        </div>

                        {/* Risk Factors */}
                        <div className="space-y-3">
                          {intel.findings.risk_factors.map((risk, index) => (
                            <div key={index} className="p-3 bg-slate-700/50 rounded">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-medium">{risk.factor}</span>
                                <Badge variant={getRiskLevelColor(risk.impact)} className="text-xs">
                                  {risk.impact}
                                </Badge>
                              </div>
                              <p className="text-slate-300 text-sm mb-2">
                                Probability: {(risk.probability * 100).toFixed(0)}%
                              </p>
                              <div className="space-y-1">
                                <p className="text-slate-400 text-xs">Mitigation:</p>
                                {risk.mitigation.map((mitigation, idx) => (
                                  <p key={idx} className="text-slate-300 text-xs">• {mitigation}</p>
                                ))}
                              </div>
                            </div>
                            </div>
                          ))}
                        </div>

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
                    ))}
                  </div>
                </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contract Analytics */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contract Analytics</CardTitle>
                <CardDescription>Contract performance and obligation tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['talent', 'distribution', 'licensing', 'production'].map((type) => {
                    const typeContracts = contracts.filter(c => c.type === type)
                    const totalValue = typeContracts.reduce((sum, contract) => sum + contract.value, 0)
                    const activeCount = typeContracts.filter(c => c.status === 'active' || c.status === 'signed').length
                    return (
                      <div key={type} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          {getContractTypeIcon(type)}
                          <span className="text-white font-medium capitalize">{type}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{(totalValue / 1000000).toFixed(1)}M</p>
                          <p className="text-slate-400 text-sm">{activeCount} active</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Compliance Analytics */}
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
                    const highRiskCount = categoryRequirements.filter(r => r.risk_level === 'high' || r.risk_level === 'critical').length
                    return (
                      <div key={category} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          {getComplianceCategoryIcon(category)}
                          <span className="text-white font-medium capitalize">{category.replace('_', ' ')}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{compliantCount}/{categoryRequirements.length}</p>
                          <p className="text-slate-400 text-sm">{highRiskCount} high risk</p>
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