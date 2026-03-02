'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Video, 
  Megaphone, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Play, 
  Download,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Award,
  Share2,
  Globe,
  Users,
  Calendar,
  Filter,
  Search,
  Music,
  Image,
  Film,
  Tv,
  Radio,
  Smartphone,
  Monitor,
  Palette,
  Edit,
  RefreshCw,
  Sparkles,
  Brain
} from 'lucide-react'

interface Campaign {
  id: string
  name: string
  type: 'theatrical_release' | 'streaming_launch' | 'festival_circuit' | 'awards_season' | 'international' | 'social_media'
  status: 'draft' | 'active' | 'paused' | 'completed'
  project: string
  budget: number
  spent: number
  startDate: string
  endDate: string
  assets: MarketingAsset[]
  performance: CampaignPerformance
  target_audience: string[]
  channels: string[]
  created_by: string
  last_modified: string
}

interface MarketingAsset {
  id: string
  type: 'trailer' | 'poster' | 'social' | 'press' | 'clip' | 'behind_scenes'
  title: string
  description: string
  url: string
  thumbnail: string
  duration?: number
  format: string
  size: number
  resolution: string
  language: string
  tags: string[]
  created_at: string
  performance: {
    views: number
    engagement: number
    shares: number
    clicks: number
    conversion_rate: number
  }
}

interface CampaignPerformance {
  impressions: number
  engagement: number
  shares: number
  clicks: number
  conversions: number
  roi: number
  cost_per_acquisition: number
  reach: number
  frequency: number
  sentiment: 'positive' | 'neutral' | 'negative'
  demographics: {
    age_groups: Record<string, number>
    genders: Record<string, number>
    locations: Record<string, number>
  }
}

interface AIInsight {
  id: string
  campaign_id: string
  type: 'optimization' | 'trend' | 'recommendation' | 'alert'
  title: string
  description: string
  confidence: number
  impact: 'high' | 'medium' | 'low'
  action_required: boolean
  suggested_actions: string[]
  potential_improvement: number
  created_at: string
}

interface SocialMediaPost {
  id: string
  platform: 'facebook' | 'twitter' | 'instagram' | 'tiktok' | 'youtube' | 'linkedin'
  content: string
  media_url?: string
  scheduled_time: string
  status: 'scheduled' | 'posted' | 'failed'
  performance: {
    likes: number
    shares: number
    comments: number
    views: number
    engagement_rate: number
  }
  hashtags: string[]
  mentions: string[]
}

export default function AIMarketingAutomationSuite() {
  const [selectedTab, setSelectedTab] = useState('campaigns')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [isGenerating, setIsGenerating] = useState(false)

  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Digital Revolution - Theatrical Release',
      type: 'theatrical_release',
      status: 'active',
      project: 'Digital Revolution',
      budget: 500000,
      spent: 325000,
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      target_audience: ['sci-fi fans', 'tech enthusiasts', 'general audience'],
      channels: ['theatrical', 'social_media', 'press', 'online_ads'],
      created_by: 'Marketing Team',
      last_modified: '2024-03-20',
      performance: {
        impressions: 25000000,
        engagement: 8500000,
        shares: 125000,
        clicks: 875000,
        conversions: 12500,
        roi: 185,
        cost_per_acquisition: 26.00,
        reach: 15000000,
        frequency: 3.2,
        sentiment: 'positive',
        demographics: {
          age_groups: { '18-24': 15, '25-34': 35, '35-44': 30, '45+': 20 },
          genders: { 'male': 52, 'female': 46, 'other': 2 },
          locations: { 'North America': 60, 'Europe': 25, 'Asia': 15 }
        }
      }
    },
    {
      id: '2',
      name: 'Mystery Thriller - Streaming Launch',
      type: 'streaming_launch',
      status: 'draft',
      project: 'Mystery Thriller',
      budget: 300000,
      spent: 0,
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      target_audience: ['crime drama fans', 'thriller enthusiasts', 'streaming subscribers'],
      channels: ['streaming', 'social_media', 'influencer'],
      created_by: 'Marketing Team',
      last_modified: '2024-03-19',
      performance: {
        impressions: 0,
        engagement: 0,
        shares: 0,
        clicks: 0,
        conversions: 0,
        roi: 0,
        cost_per_acquisition: 0,
        reach: 0,
        frequency: 0,
        sentiment: 'neutral',
        demographics: {
          age_groups: { '18-24': 20, '25-34': 40, '35-44': 30, '45+': 10 },
          genders: { 'male': 55, 'female': 43, 'other': 2 },
          locations: { 'North America': 70, 'Europe': 20, 'Asia': 10 }
        }
      }
    },
    {
      id: '3',
      name: 'Romantic Comedy - Festival Circuit',
      type: 'festival_circuit',
      status: 'completed',
      project: 'Romantic Comedy',
      budget: 150000,
      spent: 142000,
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      target_audience: ['rom-com fans', 'festival attendees', 'critics'],
      channels: ['festivals', 'social_media', 'press'],
      created_by: 'Marketing Team',
      last_modified: '2024-04-16',
      performance: {
        impressions: 8500000,
        engagement: 2100000,
        shares: 45000,
        clicks: 320000,
        conversions: 3200,
        roi: 225,
        cost_per_acquisition: 44.38,
        reach: 5000000,
        frequency: 1.7,
        sentiment: 'positive',
        demographics: {
          age_groups: { '18-24': 25, '25-34': 45, '35-44': 25, '45+': 5 },
          genders: { 'male': 40, 'female': 58, 'other': 2 },
          locations: { 'North America': 80, 'Europe': 15, 'Asia': 5 }
        }
      }
  ])

  const [assets] = useState<MarketingAsset[]>([
    {
      id: '1',
      type: 'trailer',
      title: 'Digital Revolution - Official Trailer',
      description: '2:30 theatrical trailer with AI-enhanced visuals',
      url: '/api/placeholder/trailer',
      thumbnail: '/api/placeholder/400/225',
      duration: 150,
      format: 'mp4',
      size: 125000000,
      resolution: '4K',
      language: 'en',
      tags: ['trailer', 'official', '4k', 'ai-enhanced'],
      created_at: '2024-11-15',
      performance: {
        views: 8500000,
        engagement: 425000,
        shares: 25000,
        clicks: 125000,
        conversion_rate: 1.47
      }
    },
    {
      id: '2',
      type: 'poster',
      title: 'Digital Revolution - Main Poster',
      description: 'AI-generated theatrical poster with dynamic elements',
      url: '/api/placeholder/poster',
      thumbnail: '/api/placeholder/300/450',
      format: 'jpg',
      size: 2500000,
      resolution: '300 DPI',
      language: 'en',
      tags: ['poster', 'theatrical', 'ai-generated'],
      created_at: '2024-11-10',
      performance: {
        views: 2500000,
        engagement: 125000,
        shares: 15000,
        clicks: 75000,
        conversion_rate: 3.0
      }
    },
    {
      id: '3',
      type: 'social',
      title: 'Behind the Scenes - AI Technology',
      description: 'Short documentary on AI technology used in production',
      url: '/api/placeholder/behind-scenes',
      thumbnail: '/api/placeholder/400/225',
      duration: 300,
      format: 'mp4',
      size: 85000000,
      resolution: '1080p',
      language: 'en',
      tags: ['behind-scenes', 'technology', 'ai', 'documentary'],
      created_at: '2024-11-20',
      performance: {
        views: 1500000,
        engagement: 125000,
        shares: 8000,
        clicks: 25000,
        conversion_rate: 1.67
      }
    }
  ])

  const [aiInsights] = useState<AIInsight[]>([
    {
      id: '1',
      campaign_id: '1',
      type: 'optimization',
      title: 'Increase Instagram Ad Spend',
      description: 'AI analysis shows Instagram ads have 25% higher conversion rate than Facebook',
      confidence: 92,
      impact: 'high',
      action_required: true,
      suggested_actions: [
        'Increase Instagram ad budget by 20%',
        'Create Instagram-specific ad creative',
        'Optimize posting times for Instagram audience'
      ],
      potential_improvement: 15,
      created_at: '2024-03-20'
    },
    {
      id: '2',
      campaign_id: '1',
      type: 'trend',
      title: 'TikTok Engagement Rising',
      description: 'TikTok engagement increased 40% in the last week for sci-fi content',
      confidence: 88,
      impact: 'medium',
      action_required: false,
      suggested_actions: [
        'Create more TikTok-specific content',
        'Engage with trending TikTok challenges',
        'Partner with sci-fi influencers on TikTok'
      ],
      potential_improvement: 12,
      created_at: '2024-03-19'
    },
    {
      id: '3',
      campaign_id: '2',
      type: 'recommendation',
      title: 'Launch Behind-the-Scenes Series',
      description: 'Audience engagement increases 35% with behind-the-scenes content',
      confidence: 85,
      impact: 'medium',
      action_required: true,
      suggested_actions: [
        'Create weekly behind-the-scenes episodes',
        'Feature cast and crew interviews',
        'Showcase production technology and process'
      ],
      potential_improvement: 20,
      created_at: '2024-03-18'
    }
  ])

  const [socialPosts] = useState<SocialMediaPost[]>([
    {
      id: '1',
      platform: 'twitter',
      content: '🎬 The future is here! Digital Revolution hits theaters this December. Experience the AI-enhanced visuals that will change cinema forever. #DigitalRevolution #SciFi #AI',
      scheduled_time: '2024-03-21 14:00:00',
      status: 'scheduled',
      performance: {
        likes: 1250,
        shares: 340,
        comments: 89,
        views: 0,
        engagement_rate: 13.2
      },
      hashtags: ['DigitalRevolution', 'SciFi', 'AI'],
      mentions: ['@Netflix', '@@wired']
    },
    {
      id: '2',
      platform: 'instagram',
      content: 'Behind the scenes magic ✨ Our AI technology creates stunning visuals that will blow your mind. See how we made the impossible possible in Digital Revolution. Link in bio! #BTS #FilmTech #VFX',
      media_url: '/api/placeholder/instagram',
      scheduled_time: '2024-03-21 16:00:00',
      status: 'posted',
      performance: {
        likes: 5600,
        shares: 890,
        comments: 234,
        views: 0,
        engagement_rate: 8.5
      },
      hashtags: ['BTS', 'FilmTech', 'VFX'],
      mentions: ['@adobe', '@@nvidia']
    },
    {
      id: '3',
      platform: 'tiktok',
      content: 'POV: You\'re the AI that brings a sci-fi world to life 🤖✨ Watch our team create movie magic with cutting-edge technology. #DigitalRevolution #BehindTheScenes #FilmMaking',
      media_url: '/api/placeholder/tiktok',
      scheduled_time: '2024-03-21 18:00:00',
      status: 'posted',
      performance: {
        likes: 12500,
        shares: 3400,
        comments: 567,
        views: 0,
        engagement_rate: 12.8
      },
      hashtags: ['DigitalRevolution', 'BehindTheScenes', 'FilmMaking'],
      mentions: ['@openai', '@@nvidia']
    }
  ])

  const totalBudget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0)
  const totalSpent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0)
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length
  const totalROI = campaigns.reduce((sum, campaign) => sum + campaign.performance.roi, 0) / campaigns.length

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'completed': case 'posted': 
        return 'text-green-400 bg-green-900/20'
      case 'draft': case 'scheduled': 
        return 'text-yellow-400 bg-yellow-900/20'
      case 'paused': case 'failed': 
        return 'text-red-400 bg-red-900/20'
      default: 
        return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Zap className="h-4 w-4" />
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'draft': return <Edit className="h-4 w-4" />
      case 'paused': return <Clock className="h-4 w-4" />
      case 'scheduled': return <Calendar className="h-4 w-4" />
      case 'posted': return <Share2 className="h-4 w-4" />
      case 'failed': return <AlertTriangle className="h-4 w-4" />
      default: return <Megaphone className="h-4 w-4" />
    }
  }

  const getAssetTypeIcon = (type: string) => {
    switch (type) {
      case 'trailer': return <Video className="h-4 w-4" />
      case 'poster': return <Image className="h-4 w-4" />
      case 'social': return <Smartphone className="h-4 w-4" />
      case 'clip': return <Film className="h-4 w-4" />
      case 'behind_scenes': return <Monitor className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return <div className="w-4 h-4 bg-blue-600 rounded" />
      case 'twitter': return <div className="w-4 h-4 bg-sky-500 rounded" />
      case 'instagram': return <div className="w-4 h-4 bg-pink-600 rounded" />
      case 'tiktok': return <div className="w-4 h-4 bg-black rounded" />
      case 'youtube': return <div className="w-4 h-4 bg-red-600 rounded" />
      case 'linkedin': return <div className="w-4 h-4 bg-blue-700 rounded" />
      default: return <Globe className="h-4 w-4" />
    }
  }

  const getCampaignTypeIcon = (type: string) => {
    switch (type) {
      case 'theatrical_release': return <Film className="h-4 w-4" />
      case 'streaming_launch': return <Tv className="h-4 w-4" />
      case 'festival_circuit': return <Award className="h-4 w-4" />
      case 'awards_season': return <Trophy className="h-4 w-4" />
      case 'international': return <Globe className="h-4 w-4" />
      case 'social_media': return <Smartphone className="h-4 w-4" />
      default: return <Megaphone className="h-4 w-4" />
    }
  }

  const generateTrailer = async () => {
    setIsGenerating(true)
    // Simulate AI trailer generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Marketing Automation Suite</h2>
          <p className="text-slate-400">Automated trailer generation and campaign analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Budget</p>
                <p className="text-white font-semibold text-lg">${(totalBudget / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Campaigns</p>
                <p className="text-white font-semibold text-lg">{activeCampaigns}</p>
              </div>
              <Zap className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Average ROI</p>
                <p className="text-white font-semibold text-lg">{totalROI.toFixed(0)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">AI Insights</p>
                <p className="text-white font-semibold text-lg">{aiInsights.length}</p>
              </div>
              <Brain className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="assets">Marketing Assets</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

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
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{campaign.project}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">${(campaign.budget / 1000).toFixed(0)}K</p>
                      <p className="text-slate-400 text-sm">{campaign.performance.roi}% ROI</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Campaign Progress */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-400 text-sm">Budget Used</span>
                      <span className="text-white text-sm">
                        ${campaign.spent.toLocaleString()} / ${(campaign.budget / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Impressions</p>
                      <p className="text-white font-medium">{(campaign.performance.impressions / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Engagement</p>
                      <p className="text-white font-medium">{(campaign.performance.engagement / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Conversions</p>
                      <p className="text-white font-medium">{campaign.performance.conversions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">ROI</p>
                      <p className="text-white font-medium">{campaign.performance.roi}%</p>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">{campaign.startDate}</span>
                    </div>
                    <span className="text-slate-400">to</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-300">{campaign.endDate}</span>
                    </div>
                  </div>

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

        <TabsContent value="assets" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Marketing Assets</h3>
            <Button size="sm" onClick={generateTrailer} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  AI Generate Trailer
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <Card key={asset.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getAssetTypeIcon(asset.type)}
                        <h3 className="text-white font-semibold">{asset.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {asset.type}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{asset.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{asset.views.toLocaleString()}</p>
                      <p className="text-slate-400 text-sm">views</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Asset Preview */}
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    {asset.type === 'trailer' || asset.type === 'social' || asset.type === 'behind_scenes' ? (
                      <Video className="h-12 w-12 text-slate-500" />
                    ) : (
                      <Image className="h-12 w-12 text-slate-500" />
                    )}
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Engagement</p>
                      <p className="text-white font-medium">{asset.performance.engagement.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Conversion Rate</p>
                      <p className="text-white font-medium">{asset.performance.conversion_rate}%</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Shares</p>
                      <p className="text-white font-medium">{asset.performance.shares.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Format</p>
                      <p className="text-white font-medium">{asset.format.toUpperCase()}</p>
                    </div>
                  </div>

                  {/* Asset Details */}
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">{asset.duration ? `${asset.duration}s` : 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Resolution:</span>
                      <span className="text-white">{asset.resolution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Language:</span>
                      <span className="text-white">{asset.language}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
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

        <TabsContent value="social" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scheduled Posts */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Scheduled Posts</CardTitle>
                <CardDescription>Upcoming social media content</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {socialPosts.filter(post => post.status === 'scheduled').map((post) => (
                      <div key={post.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              {getPlatformIcon(post.platform)}
                              <span className="text-white font-medium capitalize">{post.platform}</span>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(post.status)}`}>
                                {post.status}
                              </Badge>
                            </div>
                            <p className="text-slate-300 text-sm">{post.content}</p>
                            {post.hashtags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {post.hashtags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-white text-sm">{post.scheduled_time}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex space-x-4">
                            <span className="text-slate-400">Mentions: {post.mentions.length}</span>
                            <span className="text-slate-400">Hashtags: {post.hashtags.length}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Posted Content */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Posted Content</CardTitle>
                <CardDescription>Published social media posts with performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {socialPosts.filter(post => post.status === 'posted').map((post) => (
                      <div key={post.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              {getPlatformIcon(post.platform)}
                              <span className="text-white font-medium capitalize">{post.platform}</span>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(post.status)}`}>
                                {post.status}
                              </Badge>
                            </div>
                            <p className="text-slate-300 text-sm">{post.content}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{post.performance.likes.toLocaleString()} likes</p>
                            <p className="text-slate-400 text-sm">{post.performance.engagement_rate}% engagement</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">Likes</p>
                            <p className="text-white font-medium">{post.performance.likes.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Shares</p>
                            <p className="text-white font-medium">{post.performance.shares.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Comments</p>
                            <p className="text-white font-medium">{post.performance.comments.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Engagement</p>
                            <p className="text-white font-medium">{post.performance.engagement_rate}%</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-3 w-3" />
                          </Button>
                          <Button size="sm">
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Insights */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-orange-400" />
                  AI Insights
                </CardTitle>
                <CardDescription>AI-generated marketing recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {aiInsights.map((insight) => (
                      <div key={insight.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`text-white font-medium ${
                                insight.impact === 'high' ? 'text-red-400' :
                                insight.impact === 'medium' ? 'text-yellow-400' :
                                'text-green-400'
                              }`}>
                                {insight.impact.toUpperCase()}
                              </span>
                              <Badge variant="secondary" className={`text-xs ${
                                insight.action_required ? 'text-red-400' : 'text-blue-400'
                              }`}>
                                {insight.type}
                              </Badge>
                            </div>
                            <h3 className="text-white font-semibold">{insight.title}</h3>
                            <p className="text-slate-300 text-sm">{insight.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{insight.confidence}% confidence</p>
                            <p className="text-slate-400 text-sm">
                              +{insight.potential_improvement}% improvement
                            </p>
                          </div>
                        </div>
                        
                        {insight.suggested_actions.length > 0 && (
                          <div className="mt-3">
                            <p className="text-slate-400 text-sm mb-2">Suggested Actions:</p>
                            <div className="space-y-1">
                              {insight.suggested_actions.map((action, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">{action}</span>
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
                          {insight.action_required && (
                            <Button size="sm">
                              <Target className="h-3 w-3" />
                              Apply
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">AI Recommendations</CardTitle>
                <CardDescription>Automated optimization suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 font-medium">High Priority</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">
                      Increase Instagram ad spend by 20% for 15% ROI improvement
                    </p>
                    <Button size="sm" className="mt-2">
                      Apply Recommendation
                    </Button>
                  </div>

                  <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-medium">Medium Priority</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">
                      Launch behind-the-scenes series for 20% engagement increase
                    </p>
                    <Button size="sm" className="mt-2" variant="outline">
                      View Details
                    </Button>
                  </div>

                  <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">Trend Alert</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">
                      TikTok engagement rising 40% for sci-fi content
                    </p>
                    <Button size="sm" className="mt-2" variant="outline">
                      Monitor Trend
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Performance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Campaign Performance</CardTitle>
                <CardDescription>ROI and conversion metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{campaign.name}</span>
                        <span className={`font-semibold ${
                          campaign.performance.roi > 100 ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {campaign.performance.roi}% ROI
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-slate-400">Impressions</p>
                          <p className="text-white">{(campaign.performance.impressions / 1000000).toFixed(1)}M</p>
                        </div>
                        <div>
                          <p className="text-slate-400">Conversions</p>
                          <p className="text-white">{campaign.performance.conversions.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">CPA</p>
                          <p className="text-white">${campaign.performance.cost_per_acquisition.toFixed(2)}</p>
                        </div>
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
                <CardDescription>Marketing asset engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['trailer', 'poster', 'social', 'behind_scenes'].map((type) => {
                    const typeAssets = assets.filter(a => a.type === type)
                    const totalViews = typeAssets.reduce((sum, asset) => sum + asset.views, 0)
                    const totalEngagement = typeAssets.reduce((sum, asset) => sum + asset.performance.engagement, 0)
                    return (
                      <div key={type} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          {getAssetTypeIcon(type)}
                          <span className="text-white font-medium capitalize">{type}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{(totalViews / 1000000).toFixed(1)}M views</p>
                          <p className="text-slate-400 text-sm">{(totalEngagement / 1000).toFixed(0)}K engagement</p>
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