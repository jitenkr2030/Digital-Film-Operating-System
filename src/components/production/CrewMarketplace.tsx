'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Users, 
  Star, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Search, 
  Filter,
  Mail,
  Phone,
  CheckCircle,
  Clock,
  TrendingUp,
  Award,
  Briefcase,
  Camera,
  Mic,
  Palette,
  Wrench,
  UserPlus,
  MessageSquare,
  Eye
} from 'lucide-react'

interface CrewMember {
  id: string
  name: string
  role: string
  department: string
  avatar: string
  rating: number
  reviews: number
  rate: number
  experience: string
  location: string
  availability: 'available' | 'busy' | 'unavailable'
  verified: boolean
  portfolio: string[]
  skills: string[]
  languages: string[]
  equipment: string[]
  lastActive: string
  completedProjects: number
  responseTime: string
}

interface EquipmentItem {
  id: string
  name: string
  type: string
  vendor: string
  pricePerDay: number
  pricePerWeek: number
  condition: 'excellent' | 'good' | 'fair'
  location: string
  availability: boolean
  rating: number
  specifications: Record<string, string>
  images: string[]
}

export default function CrewMarketplace() {
  const [selectedTab, setSelectedTab] = useState('crew')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedRole, setSelectedRole] = useState('all')

  const [crewMembers] = useState<CrewMember[]>([
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'Director of Photography',
      department: 'Camera',
      avatar: '/api/placeholder/100/100',
      rating: 4.9,
      reviews: 47,
      rate: 450,
      experience: '12 years',
      location: 'Los Angeles, CA',
      availability: 'available',
      verified: true,
      portfolio: ['commercial', 'narrative', 'documentary'],
      skills: ['Cinematography', 'Lighting', 'Camera Operation', 'Color Grading'],
      languages: ['English', 'Spanish'],
      equipment: ['RED Camera', 'Arri Alexa', 'Lens Kit', 'Lighting Package'],
      lastActive: '2 hours ago',
      completedProjects: 156,
      responseTime: '< 1 hour'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Production Sound Mixer',
      department: 'Audio',
      avatar: '/api/placeholder/100/100',
      rating: 4.7,
      reviews: 32,
      rate: 350,
      experience: '8 years',
      location: 'New York, NY',
      availability: 'available',
      verified: true,
      portfolio: ['feature', 'television', 'commercial'],
      skills: ['Sound Recording', 'Mixing', 'Boom Operation', 'Wireless Systems'],
      languages: ['English', 'Mandarin'],
      equipment: ['Sound Devices 633', 'Sennheiser MKH 416', 'Comtek Systems'],
      lastActive: '1 day ago',
      completedProjects: 89,
      responseTime: '< 2 hours'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Production Designer',
      department: 'Art',
      avatar: '/api/placeholder/100/100',
      rating: 4.8,
      reviews: 28,
      rate: 400,
      experience: '10 years',
      location: 'Atlanta, GA',
      availability: 'busy',
      verified: true,
      portfolio: ['feature', 'television', 'music_video'],
      skills: ['Set Design', 'Art Direction', 'Props', 'Construction Drawing'],
      languages: ['English', 'Spanish'],
      equipment: ['Design Software', 'Drafting Tools'],
      lastActive: '5 hours ago',
      completedProjects: 67,
      responseTime: '< 3 hours'
    }
  ])

  const [equipment] = useState<EquipmentItem[]>([
    {
      id: '1',
      name: 'RED Monstro 8K Camera Package',
      type: 'Camera',
      vendor: 'CineRent Pro',
      pricePerDay: 750,
      pricePerWeek: 4500,
      condition: 'excellent',
      location: 'Los Angeles, CA',
      availability: true,
      rating: 4.9,
      specifications: {
        'Sensor': '8K VV',
        'Dynamic Range': '17+ stops',
        'Recording': '8K 60fps',
        'Lens Mount': 'PL Mount'
      },
      images: ['/api/placeholder/300/200', '/api/placeholder/300/200']
    },
    {
      id: '2',
      name: 'Arri Alexa Mini LF Kit',
      type: 'Camera',
      vendor: 'ProFilm Gear',
      pricePerDay: 600,
      pricePerWeek: 3500,
      condition: 'excellent',
      location: 'New York, NY',
      availability: true,
      rating: 4.8,
      specifications: {
        'Sensor': '4.5K LF',
        'Dynamic Range': '14+ stops',
        'Recording': '4K 60fps',
        'Lens Mount': 'PL Mount'
      },
      images: ['/api/placeholder/300/200', '/api/placeholder/300/200']
    },
    {
      id: '3',
      name: 'Complete Audio Package',
      type: 'Audio',
      vendor: 'Sound Solutions',
      pricePerDay: 250,
      pricePerWeek: 1400,
      condition: 'good',
      location: 'Chicago, IL',
      availability: true,
      rating: 4.6,
      specifications: {
        'Mixer': 'Sound Devices 633',
        'Microphones': 'Sennheiser MKH 416 x2',
        'Wireless': '4x Comtek Systems',
        'Headphones': 'Sennheiser HD 280'
      },
      images: ['/api/placeholder/300/200', '/api/placeholder/300/200']
    }
  ])

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'camera', label: 'Camera' },
    { value: 'audio', label: 'Audio' },
    { value: 'art', label: 'Art' },
    { value: 'lighting', label: 'Lighting' },
    { value: 'grip', label: 'Grip' },
    { value: 'post', label: 'Post Production' }
  ]

  const roles = {
    camera: ['Director of Photography', 'Camera Operator', '1st AC', '2nd AC', 'DIT'],
    audio: ['Production Sound Mixer', 'Boom Operator', 'Utility Sound', 'Sound Designer'],
    art: ['Production Designer', 'Art Director', 'Set Decorator', 'Props Master'],
    lighting: ['Gaffer', 'Best Boy Electric', 'Lighting Technician', 'Dimmer Operator'],
    grip: ['Key Grip', 'Best Boy Grip', 'Grip', 'Dolly Grip'],
    post: ['Editor', 'Colorist', 'VFX Artist', 'Sound Designer']
  }

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'camera': return <Camera className="h-4 w-4" />
      case 'audio': return <Mic className="h-4 w-4" />
      case 'art': return <Palette className="h-4 w-4" />
      case 'lighting': return <Star className="h-4 w-4" />
      case 'grip': return <Wrench className="h-4 w-4" />
      case 'post': return <Award className="h-4 w-4" />
      default: return <Briefcase className="h-4 w-4" />
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-400 bg-green-900/20'
      case 'busy': return 'text-yellow-400 bg-yellow-900/20'
      case 'unavailable': return 'text-red-400 bg-red-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-400'
      case 'good': return 'text-blue-400'
      case 'fair': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const filteredCrew = crewMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || member.department.toLowerCase() === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Crew & Vendor Marketplace</h2>
          <p className="text-slate-400">Connect with verified professionals and equipment vendors</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            List Your Services
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search crew, equipment, or vendors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
          />
        </div>
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-full sm:w-48 bg-slate-800 border-slate-700">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem key={dept.value} value={dept.value}>
                {dept.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="crew">Crew Members</TabsTrigger>
          <TabsTrigger value="equipment">Equipment Rental</TabsTrigger>
          <TabsTrigger value="vendors">Service Providers</TabsTrigger>
        </TabsList>

        <TabsContent value="crew" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCrew.map((member) => (
              <Card key={member.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-slate-400" />
                      </div>
                      {member.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-semibold">{member.name}</h3>
                        <Badge variant="secondary" className={`text-xs ${getAvailabilityColor(member.availability)}`}>
                          {member.availability}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{member.role}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {getDepartmentIcon(member.department)}
                        <span className="text-slate-500 text-xs">{member.department}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{member.rating}</span>
                      <span className="text-slate-400 text-sm">({member.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">${member.rate}/day</p>
                      <p className="text-slate-400 text-xs">{member.experience}</p>
                    </div>
                  </div>

                  {/* Location and Availability */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">Response: {member.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">{member.completedProjects} projects</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact
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

        <TabsContent value="equipment" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-slate-400 text-sm">{item.type} • {item.vendor}</p>
                    </div>
                    <Badge variant="secondary" className={`text-xs ${getConditionColor(item.condition)}`}>
                      {item.condition}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Images */}
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <Camera className="h-12 w-12 text-slate-500" />
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">${item.pricePerDay}/day</p>
                      <p className="text-slate-400 text-sm">${item.pricePerWeek}/week</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{item.rating}</span>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm">Specifications</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(item.specifications).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-400 capitalize">{key}:</span>
                          <span className="text-slate-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location and Availability */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300">{item.location}</span>
                    </div>
                    <Badge variant={item.availability ? "secondary" : "outline"}>
                      {item.availability ? "Available" : "Rented"}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1" disabled={!item.availability}>
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.availability ? 'Book Now' : 'Unavailable'}
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

        <TabsContent value="vendors" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8 text-center">
              <Briefcase className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Service Providers</h3>
              <p className="text-slate-400 mb-4">
                Connect with post-production facilities, studios, and specialized service providers
              </p>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Browse Service Providers
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}