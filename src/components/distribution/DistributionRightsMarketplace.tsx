'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Globe, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users, 
  FileText, 
  Download,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Target,
  Award,
  Building,
  MapPin,
  Shield,
  Handshake,
  BarChart3,
  PieChart,
  Filter,
  Search,
  Video,
  Tv,
  Film,
  Music,
  ShoppingCart,
  Package,
  Zap,
  Star
} from 'lucide-react'

interface Right {
  id: string
  title: string
  type: 'theatrical' | 'streaming' | 'tv' | 'dvd' | 'international' | 'remake' | 'sequel' | 'merchandise' | 'music'
  territory: string
  exclusivity: boolean
  duration: number
  price: number
  status: 'available' | 'optioned' | 'sold' | 'expired'
  project: string
  holder: string
  optionDate?: string
  expiryDate?: string
  buyer?: string
  dealValue?: number
  revenueShare?: number
  restrictions: string[]
}

interface Deal {
  id: string
  title: string
  type: 'sale' | 'option' | 'license'
  rights: Right[]
  buyer: string
  seller: string
  value: number
  currency: string
  date: string
  status: 'pending' | 'negotiating' | 'signed' | 'active' | 'completed'
  territory: string
  exclusivity: boolean
  duration: number
  commission: number
  agent: string
}

interface DistributionChannel {
  id: string
  name: string
  type: 'theatrical' | 'streaming' | 'tv' | 'physical' | 'international'
  territory: string
  reach: number
  audience: string
  requirements: string[]
  revenue: {
    gross: number
    net: number
    share: number
  }
  performance: {
    views: number
    engagement: number
    conversion: number
  }
  status: 'active' | 'inactive' | 'pending'
  lastUpdated: string
}

export default function DistributionRightsMarketplace() {
  const [selectedTab, setSelectedTab] = useState('rights')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedTerritory, setSelectedTerritory] = useState('all')

  const [rights] = useState<Right[]>([
    {
      id: '1',
      title: 'Digital Revolution - North America Theatrical',
      type: 'theatrical',
      territory: 'North America',
      exclusivity: true,
      duration: 36,
      price: 2500000,
      status: 'available',
      project: 'Digital Revolution',
      holder: 'FilmOS Productions',
      restrictions: ['No streaming release within 90 days', 'Minimum 2000 screens'],
      revenueShare: 15
    },
    {
      id: '2',
      title: 'Digital Revolution - Global Streaming',
      type: 'streaming',
      territory: 'Global',
      exclusivity: false,
      duration: 120,
      price: 5000000,
      status: 'optioned',
      project: 'Digital Revolution',
      holder: 'FilmOS Productions',
      optionDate: '2024-03-15',
      expiryDate: '2024-06-15',
      buyer: 'Netflix',
      dealValue: 4500000,
      revenueShare: 20
    },
    {
      id: '3',
      title: 'Mystery Thriller - European Distribution',
      type: 'international',
      territory: 'Europe',
      exclusivity: true,
      duration: 24,
      price: 1200000,
      status: 'sold',
      project: 'Mystery Thriller',
      holder: 'FilmOS Productions',
      buyer: 'Universal Pictures',
      dealValue: 1150000,
      restrictions: ['Theatrical exclusive', 'No streaming for 6 months']
    },
    {
      id: '4',
      title: 'Romantic Comedy - Merchandise Rights',
      type: 'merchandise',
      territory: 'Global',
      exclusivity: false,
      duration: 60,
      price: 250000,
      status: 'available',
      project: 'Romantic Comedy',
      holder: 'FilmOS Productions',
      restrictions: ['Quality approval required', 'No adult content']
    }
  ])

  const [deals] = useState<Deal[]>([
    {
      id: '1',
      title: 'Digital Revolution Streaming Deal',
      type: 'license',
      rights: [rights[1]],
      buyer: 'Netflix',
      seller: 'FilmOS Productions',
      value: 4500000,
      currency: 'USD',
      date: '2024-03-15',
      status: 'signed',
      territory: 'Global',
      exclusivity: false,
      duration: 120,
      commission: 5,
      agent: 'CAA'
    },
    {
      id: '2',
      title: 'Mystery Thriller European Deal',
      type: 'sale',
      rights: [rights[2]],
      buyer: 'Universal Pictures',
      seller: 'FilmOS Productions',
      value: 1150000,
      currency: 'USD',
      date: '2024-03-10',
      status: 'active',
      territory: 'Europe',
      exclusivity: true,
      duration: 24,
      commission: 3,
      agent: 'WME'
    },
    {
      id: '3',
      title: 'Romantic Comedy TV Rights',
      type: 'option',
      rights: [
        {
          id: '3-1',
          title: 'Romantic Comedy - TV Rights',
          type: 'tv',
          territory: 'North America',
          exclusivity: true,
          duration: 12,
          price: 750000,
          status: 'pending',
          project: 'Romantic Comedy',
          holder: 'FilmOS Productions',
          restrictions: []
        }
      ],
      buyer: 'HBO',
      seller: 'FilmOS Productions',
      value: 750000,
      currency: 'USD',
      date: '2024-03-20',
      status: 'negotiating',
      territory: 'North America',
      exclusivity: true,
      duration: 12,
      commission: 4,
      agent: 'UTA'
    }
  ])

  const [channels] = useState<DistributionChannel[]>([
    {
      id: '1',
      name: 'Netflix Global',
      type: 'streaming',
      territory: 'Global',
      reach: 250000000,
      audience: 'General',
      requirements: ['4K content', 'Multiple subtitles', 'Original content preference'],
      revenue: { gross: 5000000, net: 4500000, share: 10 },
      performance: { views: 50000000, engagement: 85, conversion: 12 },
      status: 'active',
      lastUpdated: '2024-03-20'
    },
    {
      id: '2',
      name: 'Warner Bros Theatrical',
      type: 'theatrical',
      territory: 'North America',
      reach: 5000,
      audience: 'General',
      requirements: ['Wide release', 'Marketing support', 'P&A minimum'],
      revenue: { gross: 2500000, net: 2000000, share: 20 },
      performance: { views: 1000000, engagement: 90, conversion: 15 },
      status: 'active',
      lastUpdated: '2024-03-19'
    },
    {
      id: '3',
      name: 'HBO Premium',
      type: 'tv',
      territory: 'North America',
      reach: 30000000,
      audience: 'Premium',
      requirements: ['Exclusive content', 'High production value', 'Award potential'],
      revenue: { gross: 3000000, net: 2700000, share: 10 },
      performance: { views: 20000000, engagement: 88, conversion: 8 },
      status: 'active',
      lastUpdated: '2024-03-18'
    }
  ])

  const totalRightsValue = rights.reduce((sum, right) => sum + right.price, 0)
  const totalDealValue = deals.reduce((sum, deal) => sum + deal.value, 0)
  const activeDeals = deals.filter(deal => deal.status === 'signed' || deal.status === 'active').length
  const availableRights = rights.filter(right => right.status === 'available').length

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': case 'active': case 'signed': case 'completed': 
        return 'text-green-400 bg-green-900/20'
      case 'optioned': case 'pending': case 'negotiating': 
        return 'text-yellow-400 bg-yellow-900/20'
      case 'sold': case 'expired': 
        return 'text-red-400 bg-red-900/20'
      default: 
        return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <Package className="h-4 w-4" />
      case 'optioned': return <Clock className="h-4 w-4" />
      case 'sold': return <CheckCircle className="h-4 w-4" />
      case 'expired': return <AlertTriangle className="h-4 w-4" />
      case 'signed': return <Handshake className="h-4 w-4" />
      case 'active': return <Zap className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'negotiating': return <BarChart3 className="h-4 w-4" />
      case 'completed': return <Award className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getRightTypeIcon = (type: string) => {
    switch (type) {
      case 'theatrical': return <Film className="h-4 w-4" />
      case 'streaming': return <Video className="h-4 w-4" />
      case 'tv': return <Tv className="h-4 w-4" />
      case 'music': return <Music className="h-4 w-4" />
      case 'merchandise': return <ShoppingCart className="h-4 w-4" />
      default: return <Globe className="h-4 w-4" />
    }
  }

  const getChannelTypeIcon = (type: string) => {
    switch (type) {
      case 'theatrical': return <Film className="h-4 w-4" />
      case 'streaming': return <Video className="h-4 w-4" />
      case 'tv': return <Tv className="h-4 w-4" />
      case 'physical': return <Package className="h-4 w-4" />
      case 'international': return <Globe className="h-4 w-4" />
      default: return <Building className="h-4 w-4" />
    }
  }

  const filteredRights = rights.filter(right => {
    const matchesSearch = right.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         right.project.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || right.type === selectedType
    const matchesTerritory = selectedTerritory === 'all' || right.territory === selectedTerritory
    return matchesSearch && matchesType && matchesTerritory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Distribution & Rights Marketplace</h2>
          <p className="text-slate-400">Rights marketplace and distribution analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            List Rights
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Rights Value</p>
                <p className="text-white font-semibold text-lg">${(totalRightsValue / 1000000).toFixed(1)}M</p>
              </div>
              <Package className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Deals</p>
                <p className="text-white font-semibold text-lg">{activeDeals}</p>
              </div>
              <Handshake className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Available Rights</p>
                <p className="text-white font-semibold text-lg">{availableRights}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Deal Pipeline</p>
                <p className="text-white font-semibold text-lg">${(totalDealValue / 1000000).toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search rights, deals, or projects..."
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
          <option value="theatrical">Theatrical</option>
          <option value="streaming">Streaming</option>
          <option value="tv">TV</option>
          <option value="international">International</option>
          <option value="merchandise">Merchandise</option>
        </select>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rights">Rights Marketplace</TabsTrigger>
          <TabsTrigger value="deals">Deal Management</TabsTrigger>
          <TabsTrigger value="channels">Distribution Channels</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="rights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRights.map((right) => (
              <Card key={right.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getRightTypeIcon(right.type)}
                        <h3 className="text-white font-semibold">{right.title}</h3>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(right.status)}`}>
                          {right.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{right.project}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">${(right.price / 1000000).toFixed(1)}M</p>
                      <p className="text-slate-400 text-sm">{right.duration} months</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Territory and Exclusivity */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">{right.territory}</span>
                    </div>
                    <Badge variant={right.exclusivity ? "default" : "secondary"}>
                      {right.exclusivity ? 'Exclusive' : 'Non-Exclusive'}
                    </Badge>
                  </div>

                  {/* Restrictions */}
                  {right.restrictions.length > 0 && (
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Restrictions</p>
                      <div className="space-y-1">
                        {right.restrictions.slice(0, 2).map((restriction, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Shield className="h-3 w-3 text-slate-500" />
                            <span className="text-slate-300 text-xs">{restriction}</span>
                          </div>
                        ))}
                        {right.restrictions.length > 2 && (
                          <p className="text-slate-400 text-xs">+{right.restrictions.length - 2} more</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Deal Information */}
                  {(right.buyer || right.dealValue) && (
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Deal Value</span>
                        <span className="text-white font-semibold">
                          ${right.dealValue ? (right.dealValue / 1000000).toFixed(1) : 'TBD'}M
                        </span>
                      </div>
                      {right.buyer && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-sm">Buyer</span>
                          <span className="text-white text-sm">{right.buyer}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1" disabled={right.status !== 'available'}>
                      {right.status === 'available' ? 'Make Offer' : 'View Details'}
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

        <TabsContent value="deals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Deals */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Active Deals</CardTitle>
                <CardDescription>Currently signed and active agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {deals.filter(deal => deal.status === 'signed' || deal.status === 'active').map((deal) => (
                      <div key={deal.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-white font-semibold">{deal.title}</h3>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(deal.status)}`}>
                                {deal.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{deal.buyer} ↔ {deal.seller}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${(deal.value / 1000000).toFixed(1)}M</p>
                            <p className="text-slate-400 text-sm">{deal.commission}% commission</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">Territory</p>
                            <p className="text-slate-300">{deal.territory}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Duration</p>
                            <p className="text-slate-300">{deal.duration} months</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400">Agent:</span>
                            <span className="text-slate-300">{deal.agent}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm">
                              <BarChart3 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Pipeline */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Deal Pipeline</CardTitle>
                <CardDescription>Negotiations and pending agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {deals.filter(deal => deal.status === 'pending' || deal.status === 'negotiating').map((deal) => (
                      <div key={deal.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-white font-semibold">{deal.title}</h3>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(deal.status)}`}>
                                {deal.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{deal.buyer} ↔ {deal.seller}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${(deal.value / 1000000).toFixed(1)}M</p>
                            <p className="text-slate-400 text-sm">{deal.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400">Type:</span>
                            <span className="text-slate-300 capitalize">{deal.type}</span>
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
          </div>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <Card key={channel.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getChannelTypeIcon(channel.type)}
                        <h3 className="text-white font-semibold">{channel.name}</h3>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(channel.status)}`}>
                          {channel.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{channel.audience} audience</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{(channel.reach / 1000000).toFixed(1)}M</p>
                      <p className="text-slate-400 text-sm">reach</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-slate-400">Views</p>
                      <p className="text-white font-medium">{(channel.performance.views / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400">Engagement</p>
                      <p className="text-white font-medium">{channel.performance.engagement}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400">Conversion</p>
                      <p className="text-white font-medium">{channel.performance.conversion}%</p>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Gross Revenue</span>
                      <span className="text-white font-medium">${(channel.revenue.gross / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Net Revenue</span>
                      <span className="text-white font-medium">${(channel.revenue.net / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Share</span>
                      <span className="text-white font-medium">{channel.revenue.share}%</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Requirements</p>
                    <div className="space-y-1">
                      {channel.requirements.slice(0, 2).map((req, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-slate-300 text-xs">{req}</span>
                        </div>
                      ))}
                      {channel.requirements.length > 2 && (
                        <p className="text-slate-400 text-xs">+{channel.requirements.length - 2} more</p>
                      )}
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

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Analytics */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Channel</CardTitle>
                <CardDescription>Distribution channel performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['theatrical', 'streaming', 'tv', 'international', 'merchandise'].map((type) => {
                    const typeRevenue = rights.filter(r => r.type === type && r.status === 'sold')
                      .reduce((sum, r) => sum + (r.dealValue || 0), 0)
                    return (
                      <div key={type} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          {getRightTypeIcon(type)}
                          <span className="text-white font-medium capitalize">{type}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">${(typeRevenue / 1000000).toFixed(1)}M</p>
                          <p className="text-slate-400 text-sm">{typeRevenue > 0 ? 'Active' : 'Pending'}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Territory Performance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Territory Performance</CardTitle>
                <CardDescription>Regional distribution success rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['North America', 'Europe', 'Asia', 'Global'].map((territory) => {
                    const territoryRevenue = deals.filter(d => d.territory === territory)
                      .reduce((sum, d) => sum + d.value, 0)
                    return (
                      <div key={territory} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-slate-400" />
                          <span className="text-white font-medium">{territory}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">${(territoryRevenue / 1000000).toFixed(1)}M</p>
                          <p className="text-slate-400 text-sm">{deals.filter(d => d.territory === territory).length} deals</p>
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