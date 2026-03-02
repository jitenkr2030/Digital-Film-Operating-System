'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Activity, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Eye, 
  Play, 
  Pause, 
  Square, 
  RefreshCw, 
  Download, 
  Upload, 
  Settings, 
  Plus, 
  Edit, 
  Trash, 
  Copy, 
  Share, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Send, 
  Filter, 
  Search, 
  Bell, 
  Users, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tv, 
  Radio, 
  Headphones, 
  Volume2, 
  Wifi, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  Camera, 
  Video, 
  Film, 
  Music, 
  Mic, 
  Image, 
  FileText, 
  File, 
  Folder, 
  Tag, 
  Hash, 
  Link, 
  ExternalLink, 
  ArrowRight, 
  ArrowUp, 
  ArrowDown, 
  MoreHorizontal, 
  MoreVertical
} from 'lucide-react'

interface MarketingAsset {
  id: string
  name: string
  type: 'trailer' | 'poster' | 'social_media' | 'press_kit' | 'bts' | 'email_template' | 'landing_page'
  status: 'draft' | 'generating' | 'ready' | 'published' | 'archived'
  project: string
  campaign: string
  created_at: string
  updated_at: string
  published_at?: string
  performance: {
    views: number
    engagement: number
    clicks: number
    shares: number
    conversions: number
    roi: number
  }
  content: {
    title: string
    description: string
    duration?: number
    file_url?: string
    thumbnail_url?: string
    tags: string[]
    ai_generated: boolean
    confidence_score?: number
  }
  distribution: {
    platforms: string[]
    scheduled_posts: ScheduledPost[]
    published_posts: PublishedPost[]
    performance_metrics: PerformanceMetrics[]
  }
}

interface ScheduledPost {
  id: string
  platform: string
  content: string
  scheduled_time: string
  status: 'scheduled' | 'posted' | 'failed'
  media_urls: string[]
  hashtags: string[]
  mentions: string[]
}

interface PublishedPost {
  id: string
  platform: string
  post_url: string
  published_time: string
  engagement: {
    likes: number
    comments: number
    shares: number
    views: number
  }
  performance: {
    click_through_rate: number
    conversion_rate: number
    reach: number
    impressions: number
  }
}

interface PerformanceMetrics {
  id: string
  platform: string
  metric_type: 'engagement' | 'reach' | 'impressions' | 'clicks' | 'conversions' | 'roi'
  value: number
  period: string
  benchmark: number
  change_percentage: number
}

interface Campaign {
  id: string
  name: string
  type: 'awareness' | 'engagement' | 'conversion' | 'retention'
  status: 'planning' | 'active' | 'paused' | 'completed'
  start_date: string
  end_date: string
  budget: number
  spent: number
  target_audience: string[]
  platforms: string[]
  assets: string[]
  performance: {
    reach: number
    engagement_rate: number
    click_through_rate: number
    conversion_rate: number
    roi: number
    cost_per_acquisition: number
    cost_per_impression: number
    cost_per_click: number
    cost_per_engagement: number
  }
  automation: {
    triggers: CampaignTrigger[]
    workflows: CampaignWorkflow[]
    optimization: boolean
    a_b_testing: boolean
  }
}

interface CampaignTrigger {
  id: string
  type: 'time_based' | 'event_based' | 'performance_based' | 'audience_based'
  condition: string
  action: string
  enabled: boolean
  last_triggered?: string
}

interface CampaignWorkflow {
  id: string
  name: string
  steps: WorkflowStep[]
  status: 'active' | 'paused' | 'completed'
  current_step: number
  progress: number
}

interface WorkflowStep {
  id: string
  name: string
  type: 'content_creation' | 'publication' | 'engagement' | 'analysis' | 'optimization'
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  result?: any
  error?: string
}

interface AIInsight {
  id: string
  type: 'performance_prediction' | 'audience_analysis' | 'content_optimization' | 'trend_analysis' | 'competitive_analysis'
  title: string
  description: string
  confidence: number
  data_points: number[]
  recommendations: string[]
  potential_impact: 'high' | 'medium' | 'low'
  implementation_difficulty: 'easy' | 'medium' | 'hard'
  estimated_roi: number
  timeframe: string
}

export default function AIMarketingAutomationSuite() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [selectedCampaign, setSelectedCampaign] = useState<string>('')
  const [selectedAsset, setSelectedAsset] = useState<string>('')

  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Summer Blockbuster Campaign',
      type: 'awareness',
      status: 'active',
      start_date: '2024-06-01',
      end_date: '2024-08-31',
      budget: 500000,
      spent: 275000,
      target_audience: ['18-35', 'action_movie_fans', 'sci-fi_enthusiasts'],
      platforms: ['facebook', 'instagram', 'twitter', 'youtube', 'tiktok'],
      assets: ['trailer_1', 'poster_1', 'social_media_1'],
      performance: {
        reach: 2500000,
        engagement_rate: 0.085,
        click_through_rate: 0.032,
        conversion_rate: 0.015,
        roi: 2.45,
        cost_per_acquisition: 12.50,
        cost_per_impression: 0.11,
        cost_per_click: 0.89,
        cost_per_engagement: 10.45
      },
      automation: {
        triggers: [
          {
            id: '1-1',
            type: 'performance_based',
            condition: 'engagement_rate < 0.05',
            action: 'optimize_content',
            enabled: true,
            last_triggered: '2024-06-15'
          }
        ],
        workflows: [
          {
            id: '1-1',
            name: 'Content Publication Workflow',
            steps: [
              {
                id: '1-1-1',
                name: 'Create Social Media Posts',
                type: 'content_creation',
                status: 'completed'
              },
              {
                id: '1-1-2',
                name: 'Schedule Posts',
                type: 'publication',
                status: 'completed'
              },
              {
                id: '1-1-3',
                name: 'Monitor Performance',
                type: 'analysis',
                status: 'in_progress'
              }
            ],
            status: 'active',
            current_step: 3,
            progress: 66
          }
        ],
        optimization: true,
        a_b_testing: true
      }
    },
    {
      id: '2',
      name: 'Indie Film Festival Push',
      type: 'engagement',
      status: 'planning',
      start_date: '2024-09-01',
      end_date: '2024-10-15',
      budget: 250000,
      spent: 0,
      target_audience: ['25-45', 'independent_film_lovers', 'festival_attendees'],
      platforms: ['instagram', 'twitter', 'facebook', 'linkedin'],
      assets: ['festival_trailer', 'press_kit', 'email_template'],
      performance: {
        reach: 0,
        engagement_rate: 0,
        click_through_rate: 0,
        conversion_rate: 0,
        roi: 0,
        cost_per_acquisition: 0,
        cost_per_impression: 0,
        cost_per_click: 0,
        cost_per_engagement: 0
      },
      automation: {
        triggers: [],
        workflows: [],
        optimization: false,
        a_b_testing: false
      }
    }
  ])

  const [assets] = useState<MarketingAsset[]>([
    {
      id: 'trailer_1',
      name: 'Quantum Dreams Official Trailer',
      type: 'trailer',
      status: 'published',
      project: 'Quantum Dreams',
      campaign: 'Summer Blockbuster Campaign',
      created_at: '2024-06-01',
      updated_at: '2024-06-15',
      published_at: '2024-06-10',
      performance: {
        views: 1500000,
        engagement: 0.089,
        clicks: 45000,
        shares: 12000,
        conversions: 675,
        roi: 3.25
      },
      content: {
        title: 'Quantum Dreams - Official Trailer',
        description: 'Experience the future in this mind-bending sci-fi thriller',
        duration: 145,
        file_url: '/api/placeholder/trailer',
        thumbnail_url: '/api/placeholder/thumbnail',
        tags: ['sci-fi', 'thriller', 'action', 'summer_blockbuster'],
        ai_generated: false,
        confidence_score: 0
      },
      distribution: {
        platforms: ['youtube', 'facebook', 'instagram', 'tiktok'],
        scheduled_posts: [
          {
            id: '1-1',
            platform: 'youtube',
            content: 'Experience the future in #QuantumDreams - Official Trailer',
            scheduled_time: '2024-06-10T10:00:00Z',
            status: 'posted',
            media_urls: ['/api/placeholder/trailer'],
            hashtags: ['#QuantumDreams', '#SciFi', '#MovieTrailer', '#SummerBlockbuster'],
            mentions: ['@QuantumDreamsMovie', '@DirectorSmith']
          }
        ],
        published_posts: [
          {
            id: '1-1',
            platform: 'youtube',
            post_url: 'https://youtube.com/watch?v=example',
            published_time: '2024-06-10T10:00:00Z',
            engagement: {
              likes: 45000,
              comments: 1200,
              shares: 800,
              views: 1500000
            },
            performance: {
              click_through_rate: 0.03,
              conversion_rate: 0.00045,
              reach: 2500000,
              impressions: 5000000
            }
          }
        ],
        performance_metrics: []
      }
    },
    {
      id: 'poster_1',
      name: 'Quantum Dreams Theatrical Poster',
      type: 'poster',
      status: 'published',
      project: 'Quantum Dreams',
      campaign: 'Summer Blockbuster Campaign',
      created_at: '2024-05-15',
      updated_at: '2024-05-20',
      published_at: '2024-06-01',
      performance: {
        views: 850000,
        engagement: 0.092,
        clicks: 28000,
        shares: 8500,
        conversions: 420,
        roi: 2.85
      },
      content: {
        title: 'Quantum Dreams',
        description: 'The future is closer than you think',
        file_url: '/api/placeholder/poster',
        thumbnail_url: '/api/placeholder/poster_thumb',
        tags: ['poster', 'theatrical', 'sci-fi', 'thriller'],
        ai_generated: false,
        confidence_score: 0
      },
      distribution: {
        platforms: ['facebook', 'instagram', 'twitter', 'linkedin'],
        scheduled_posts: [],
        published_posts: [],
        performance_metrics: []
      }
    },
    {
      id: 'social_media_1',
      name: 'Quantum Dreams Social Media Kit',
      type: 'social_media',
      status: 'ready',
      project: 'Quantum Dreams',
      campaign: 'Summer Blockbuster Campaign',
      created_at: '2024-05-20',
      updated_at: '2024-06-12',
      performance: {
        views: 1200000,
        engagement: 0.078,
        clicks: 35000,
        shares: 15000,
        conversions: 525,
        roi: 2.95
      },
      content: {
        title: 'Quantum Dreams Social Media Campaign',
        description: 'Complete social media kit with images, videos, and copy',
        tags: ['social_media', 'campaign', 'marketing', 'promotion'],
        ai_generated: true,
        confidence_score: 0.92
      },
      distribution: {
        platforms: ['instagram', 'facebook', 'twitter', 'tiktok'],
        scheduled_posts: [
          {
            id: '1-2',
            platform: 'instagram',
            content: 'Dream bigger. #QuantumDreams coming soon! 🚀',
            scheduled_time: '2024-06-12T14:00:00Z',
            status: 'scheduled',
            media_urls: ['/api/placeholder/ig_post1', '/api/placeholder/ig_post2'],
            hashtags: ['#QuantumDreams', '#ComingSoon', '#Movie', '#SciFi'],
            mentions: ['@QuantumDreamsMovie']
          }
        ],
        published_posts: [],
        performance_metrics: []
      }
    }
  ])

  const [aiInsights] = useState<AIInsight[]>([
    {
      id: '1',
      type: 'performance_prediction',
      title: 'Trailer Performance Prediction',
      description: 'AI analysis predicts 15% increase in engagement with optimized thumbnail',
      confidence: 0.89,
      data_points: [0.085, 0.092, 0.088, 0.095, 0.091],
      recommendations: [
        'Use A/B testing for thumbnail optimization',
        'Post at peak engagement times (2-4 PM)',
        'Include more action-oriented copy'
      ],
      potential_impact: 'high',
      implementation_difficulty: 'easy',
      estimated_roi: 0.15,
      timeframe: '2 weeks'
    },
    {
      id: '2',
      type: 'audience_analysis',
      title: 'Sci-Fi Audience Behavior Analysis',
      description: 'Deep analysis reveals strong engagement with behind-the-scenes content',
      confidence: 0.94,
      data_points: [0.078, 0.085, 0.092, 0.088, 0.091],
      recommendations: [
        'Create more behind-the-scenes content',
        'Focus on technical aspects and world-building',
        'Engage with fan theories and discussions'
      ],
      potential_impact: 'medium',
      implementation_difficulty: 'medium',
      estimated_roi: 0.12,
      timeframe: '4 weeks'
    },
    {
      id: '3',
      type: 'content_optimization',
      title: 'Social Media Content Optimization',
      description: 'AI suggests optimal posting times and content mix for maximum engagement',
      confidence: 0.91,
      data_points: [0.065, 0.072, 0.078, 0.085, 0.082],
      recommendations: [
        'Post video content on Tuesdays and Thursdays',
        'Mix promotional with organic content (70/30 ratio)',
        'Use Instagram Stories for real-time updates'
      ],
      potential_impact: 'high',
      implementation_difficulty: 'easy',
      estimated_roi: 0.18,
      timeframe: '1 week'
    }
  ])

  const totalCampaigns = campaigns.length
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length
  const totalBudget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0)
  const totalSpent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0)
  const averageROI = campaigns.reduce((sum, campaign) => sum + campaign.performance.roi, 0) / campaigns.length
  const totalAssets = assets.length
  const publishedAssets = assets.filter(a => a.status === 'published').length

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'published': case 'completed': case 'ready':
        return 'text-green-400 bg-green-900/20'
      case 'planning': case 'generating':
        return 'text-yellow-400 bg-yellow-900/20'
      case 'paused': case 'draft': case 'archived':
        return 'text-orange-400 bg-orange-900/20'
      default:
        return 'text-slate-400 bg-slate-900/20'
    }
  }

  const getCampaignTypeIcon = (type: string) => {
    switch (type) {
      case 'awareness': return <Eye className="h-4 w-4" />
      case 'engagement': return <Users className="h-4 w-4" />
      case 'conversion': return <Target className="h-4 w-4" />
      case 'retention': return <RefreshCw className="h-4 w-4" />
      default: return <TrendingUp className="h-4 w-4" />
    }
  }

  const getAssetTypeIcon = (type: string) => {
    switch (type) {
      case 'trailer': return <Video className="h-4 w-4" />
      case 'poster': return <Image className="h-4 w-4" />
      case 'social_media': return <Share className="h-4 w-4" />
      case 'press_kit': return <FileText className="h-4 w-4" />
      case 'bts': return <Mail className="h-4 w-4" />
      case 'email_template': return <MessageSquare className="h-4 w-4" />
      case 'landing_page': return <Globe className="h-4 w-4" />
      default: return <File className="h-4 w-4" />
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return <Facebook className="h-4 w-4" />
      case 'twitter': return <Twitter className="h-4 w-4" />
      case 'instagram': return <Instagram className="h-4 w-4" />
      case 'youtube': return <Youtube className="h-4 w-4" />
      case 'linkedin': return <Linkedin className="h-4 w-4" />
      case 'tiktok': return <Music className="h-4 w-4" />
      default: return <Globe className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Marketing Automation Suite</h2>
          <p className="text-slate-400">AI-powered campaign management and automated content generation</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Campaigns</p>
                <p className="text-white font-semibold text-lg">{activeCampaigns}</p>
              </div>
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Budget</p>
                <p className="text-white font-semibold text-lg">${(totalBudget / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Average ROI</p>
                <p className="text-white font-semibold text-lg">{(averageROI * 100).toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Published Assets</p>
                <p className="text-white font-semibold text-lg">{publishedAssets}/{totalAssets}</p>
              </div>
              <Share className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Performance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Campaign Performance</CardTitle>
                <CardDescription>Real-time campaign metrics and ROI tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {getCampaignTypeIcon(campaign.type)}
                          <h4 className="text-white font-medium">{campaign.name}</h4>
                          <Badge variant={getStatusColor(campaign.status)} className="text-xs">
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-slate-400">ROI:</span>
                          <span className="text-white font-medium">{(campaign.performance.roi * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">${(campaign.spent / 1000).toFixed(1)}k</p>
                        <p className="text-slate-400 text-xs">of ${(campaign.budget / 1000).toFixed(1)}k</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Asset Performance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Asset Performance</CardTitle>
                <CardDescription>Marketing asset engagement and distribution metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assets.slice(0, 3).map((asset) => (
                    <div key={asset.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {getAssetTypeIcon(asset.type)}
                          <h4 className="text-white font-medium">{asset.name}</h4>
                          <Badge variant={getStatusColor(asset.status)} className="text-xs">
                            {asset.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-slate-400">Views:</span>
                          <span className="text-white font-medium">{asset.performance.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{(asset.performance.engagement * 100).toFixed(1)}%</p>
                        <p className="text-slate-400 text-xs">engagement</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="h-5 w-5 mr-2 text-blue-400" />
                AI Marketing Insights
              </CardTitle>
              <CardDescription>AI-powered recommendations and performance predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.id} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {insight.type}
                          </Badge>
                          <h4 className="text-white font-semibold">{insight.title}</h4>
                        </div>
                        <p className="text-slate-300 text-sm">{insight.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{(insight.confidence * 100).toFixed(0)}%</p>
                        <p className="text-slate-400 text-xs">confidence</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-slate-400">Potential Impact</p>
                        <p className="text-white font-medium capitalize">{insight.potential_impact}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Estimated ROI</p>
                        <p className="text-white font-medium">{(insight.estimated_roi * 100).toFixed(1)}%</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-slate-400 text-sm mb-2">Recommendations:</p>
                      {insight.recommendations.slice(0, 2).map((rec, index) => (
                        <p key={index} className="text-slate-300 text-sm">• {rec}</p>
                      ))}
                    </div>

                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                        View Details
                      </Button>
                      <Button size="sm">
                        <Target className="h-3 w-3" />
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getCampaignTypeIcon(campaign.type)}
                        <h3 className="text-white font-semibold">{campaign.name}</h3>
                        <Badge variant={getStatusColor(campaign.status)} className="text-xs">
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Budget:</span>
                        <span className="text-white font-medium">${(campaign.budget / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{(campaign.performance.roi * 100).toFixed(1)}%</p>
                      <p className="text-slate-400 text-sm">ROI</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Reach</p>
                      <p className="text-white font-medium">{campaign.performance.reach.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Engagement Rate</p>
                      <p className="text-white font-medium">{(campaign.performance.engagement_rate * 100).toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Conversion Rate</p>
                      <p className="text-white font-medium">{(campaign.performance.conversion_rate * 100).toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-slate-400">CPA</p>
                      <p className="text-white font-medium">${campaign.performance.cost_per_acquisition.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Automation Status */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-slate-400 text-sm">Automation</p>
                      <div className="flex space-x-1">
                        {campaign.automation.optimization && (
                          <Badge variant="secondary" className="text-xs">Optimization</Badge>
                        )}
                        {campaign.automation.a_b_testing && (
                          <Badge variant="secondary" className="text-xs">A/B Testing</Badge>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {campaign.automation.workflows.map((workflow) => (
                        <div key={workflow.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                          <div className="flex-1">
                            <p className="text-white text-sm">{workflow.name}</p>
                            <p className="text-slate-400 text-xs">{workflow.steps.length} steps</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">{workflow.progress}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {campaign.status === 'active' ? (
                      <Button size="sm" variant="outline">
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                    ) : (
                      <Button size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        {campaign.status === 'planning' ? 'Launch' : 'Resume'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assets" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <Card key={asset.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getAssetTypeIcon(asset.type)}
                        <h3 className="text-white font-semibold">{asset.name}</h3>
                        <Badge variant={getStatusColor(asset.status)} className="text-xs">
                          {asset.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Project:</span>
                        <span className="text-white font-medium">{asset.project}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{(asset.performance.engagement * 100).toFixed(1)}%</p>
                      <p className="text-slate-400 text-xs">engagement</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Asset Performance */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Views</p>
                      <p className="text-white font-medium">{asset.performance.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Clicks</p>
                      <p className="text-white font-medium">{asset.performance.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Shares</p>
                      <p className="text-white font-medium">{asset.performance.shares.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Conversions</p>
                      <p className="text-white font-medium">{asset.performance.conversions}</p>
                    </div>
                  </div>

                  {/* AI Generation Status */}
                  {asset.content.ai_generated && (
                    <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 font-medium">AI Generated</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-2">
                        Confidence: {(asset.content.confidence_score! * 100).toFixed(1)}%
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Regenerate
                        </Button>
                        <Button size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Distribution */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-slate-400 text-sm">Distribution</p>
                      <div className="flex space-x-1">
                        {asset.distribution.platforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {asset.distribution.scheduled_posts.map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              {getPlatformIcon(post.platform)}
                              <span className="text-white text-sm">{post.platform}</span>
                            </div>
                            <p className="text-slate-400 text-xs">{post.scheduled_time}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={post.status === 'posted' ? 'secondary' : 'outline'} className="text-xs">
                              {post.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      Distribute
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aiInsights.map((insight) => (
              <Card key={insight.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {insight.type}
                        </Badge>
                        <h3 className="text-white font-semibold">{insight.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">Confidence:</span>
                        <span className="text-white font-medium">{(insight.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={insight.potential_impact === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                        {insight.potential_impact}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm mb-4">{insight.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-slate-400">Timeframe</p>
                      <p className="text-white font-medium">{insight.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Difficulty</p>
                      <p className="text-white font-medium capitalize">{insight.implementation_difficulty}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm mb-2">Key Recommendations:</p>
                    {insight.recommendations.map((rec, index) => (
                      <p key={index} className="text-slate-300 text-sm">• {rec}</p>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-3 w-3 mr-2" />
                      Full Analysis
                    </Button>
                    <Button size="sm">
                      <Target className="h-3 w-3 mr-2" />
                      Implement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}