'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Calendar } from '@/components/ui/calendar'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Camera, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Filter,
  Download,
  Eye,
  Bell,
  Cloud,
  Sun,
  CloudRain,
  Wind
} from 'lucide-react'

interface ShootingDay {
  id: string
  date: Date
  scenes: Scene[]
  location: Location
  cast: CastMember[]
  crew: CrewMember[]
  equipment: Equipment[]
  callTime: string
  wrapTime: string
  status: 'scheduled' | 'in-progress' | 'completed' | 'delayed' | 'cancelled'
  weather: WeatherInfo
  notes: string
}

interface Scene {
  id: string
  number: number
  title: string
  duration: number
  complexity: 'low' | 'medium' | 'high'
  setupTime: number
}

interface Location {
  id: string
  name: string
  address: string
  type: 'interior' | 'exterior' | 'both'
  contact: string
  cost: number
  confirmed: boolean
}

interface CastMember {
  id: string
  name: string
  role: string
  callTime: string
  scenes: string[]
  confirmed: boolean
}

interface CrewMember {
  id: string
  name: string
  role: string
  department: string
  callTime: string
  confirmed: boolean
}

interface Equipment {
  id: string
  name: string
  type: string
  quantity: number
  vendor: string
  confirmed: boolean
}

interface WeatherInfo {
  forecast: 'sunny' | 'cloudy' | 'rainy' | 'windy'
  temperature: number
  humidity: number
  windSpeed: number
  risk: 'low' | 'medium' | 'high'
}

export default function ShootingScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTab, setSelectedTab] = useState('calendar')
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const [shootingDays] = useState<ShootingDay[]>([
    {
      id: '1',
      date: new Date('2024-03-15'),
      scenes: [
        { id: '1', number: 12, title: 'Warehouse Confrontation', duration: 45, complexity: 'high', setupTime: 30 },
        { id: '2', number: 13, title: 'Chase Sequence', duration: 30, complexity: 'high', setupTime: 45 }
      ],
      location: {
        id: '1',
        name: 'Abandoned Warehouse',
        address: '123 Industrial Ave, District 5',
        type: 'interior',
        contact: 'John Smith (555-0123)',
        cost: 5000,
        confirmed: true
      },
      cast: [
        { id: '1', name: 'John Actor', role: 'Protagonist', callTime: '06:00', scenes: ['12', '13'], confirmed: true },
        { id: '2', name: 'Jane Actress', role: 'Antagonist', callTime: '07:00', scenes: ['12'], confirmed: true }
      ],
      crew: [
        { id: '1', name: 'Director Name', role: 'Director', department: 'Creative', callTime: '05:30', confirmed: true },
        { id: '2', name: 'DP Name', role: 'Director of Photography', department: 'Camera', callTime: '05:30', confirmed: true }
      ],
      equipment: [
        { id: '1', name: 'Camera Package A', type: 'Camera', quantity: 1, vendor: 'RentCo', confirmed: true },
        { id: '2', name: 'Lighting Kit', type: 'Lighting', quantity: 3, vendor: 'LightPro', confirmed: true }
      ],
      callTime: '06:00',
      wrapTime: '18:00',
      status: 'scheduled',
      weather: {
        forecast: 'cloudy',
        temperature: 18,
        humidity: 65,
        windSpeed: 12,
        risk: 'low'
      },
      notes: 'Complex stunt scene requires safety coordinator on set'
    },
    {
      id: '2',
      date: new Date('2024-03-16'),
      scenes: [
        { id: '3', number: 14, title: 'Apartment Scene', duration: 25, complexity: 'low', setupTime: 15 }
      ],
      location: {
        id: '2',
        name: 'Downtown Apartment',
        address: '456 Main St, Suite 8B',
        type: 'interior',
        contact: 'Property Manager (555-0456)',
        cost: 2000,
        confirmed: true
      },
      cast: [
        { id: '1', name: 'John Actor', role: 'Protagonist', callTime: '09:00', scenes: ['14'], confirmed: true }
      ],
      crew: [
        { id: '1', name: 'Director Name', role: 'Director', department: 'Creative', callTime: '08:00', confirmed: true }
      ],
      equipment: [
        { id: '1', name: 'Camera Package B', type: 'Camera', quantity: 1, vendor: 'RentCo', confirmed: true }
      ],
      callTime: '09:00',
      wrapTime: '17:00',
      status: 'scheduled',
      weather: {
        forecast: 'rainy',
        temperature: 15,
        humidity: 80,
        windSpeed: 20,
        risk: 'medium'
      },
      notes: 'Indoor location - weather not a concern'
    }
  ])

  const getWeatherIcon = (forecast: string) => {
    switch (forecast) {
      case 'sunny': return <Sun className="h-4 w-4 text-yellow-400" />
      case 'cloudy': return <Cloud className="h-4 w-4 text-gray-400" />
      case 'rainy': return <CloudRain className="h-4 w-4 text-blue-400" />
      case 'windy': return <Wind className="h-4 w-4 text-gray-300" />
      default: return <Sun className="h-4 w-4 text-yellow-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'scheduled': return 'bg-yellow-500'
      case 'delayed': return 'bg-orange-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-400" />
      case 'in-progress': return <Clock className="h-4 w-4 text-blue-400" />
      case 'scheduled': return <CalendarIcon className="h-4 w-4 text-yellow-400" />
      case 'delayed': return <AlertTriangle className="h-4 w-4 text-orange-400" />
      case 'cancelled': return <XCircle className="h-4 w-4 text-red-400" />
      default: return <CalendarIcon className="h-4 w-4 text-gray-400" />
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-yellow-400'
      case 'low': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  const filteredShootingDays = shootingDays.filter(day => 
    filterStatus === 'all' || day.status === filterStatus
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Shooting Scheduler</h2>
          <p className="text-slate-400">Calendar-based production scheduling and management</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Schedule
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Shooting Day
          </Button>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-white">Production Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="bg-slate-900 rounded-md"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Scheduled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Day Details */}
            <div className="lg:col-span-2 space-y-4">
              {selectedDate && (
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {shootingDays
                      .filter(day => day.date.toDateString() === selectedDate?.toDateString())
                      .map(day => (
                        <div key={day.id} className="space-y-4">
                          {/* Status and Weather */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {getStatusIcon(day.status)}
                              <span className="text-white font-medium capitalize">{day.status}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              {getWeatherIcon(day.weather.forecast)}
                              <span className="text-slate-300 text-sm">
                                {day.weather.temperature}°C - {day.weather.forecast}
                              </span>
                              <Badge 
                                variant="outline" 
                                className={`${getRiskColor(day.weather.risk)} border-current`}
                              >
                                {day.weather.risk} risk
                              </Badge>
                            </div>
                          </div>

                          {/* Location */}
                          <div className="bg-slate-700/50 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                              <div className="flex-1">
                                <h4 className="text-white font-semibold">{day.location.name}</h4>
                                <p className="text-slate-400 text-sm">{day.location.address}</p>
                                <div className="flex items-center space-x-4 mt-2 text-sm">
                                  <span className="text-slate-300">
                                    Contact: {day.location.contact}
                                  </span>
                                  <span className="text-slate-300">
                                    Cost: ${day.location.cost}
                                  </span>
                                  {day.location.confirmed ? (
                                    <Badge variant="secondary" className="text-green-400">
                                      Confirmed
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="text-yellow-400">
                                      Pending
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Scenes */}
                          <div>
                            <h4 className="text-white font-semibold mb-2">Scenes</h4>
                            <div className="space-y-2">
                              {day.scenes.map(scene => (
                                <div key={scene.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                                  <div className="flex items-center space-x-3">
                                    <Badge variant="outline">Scene {scene.number}</Badge>
                                    <span className="text-white">{scene.title}</span>
                                  </div>
                                  <div className="flex items-center space-x-4 text-sm">
                                    <span className="text-slate-300">{scene.duration} min</span>
                                    <span className={getComplexityColor(scene.complexity)}>
                                      {scene.complexity}
                                    </span>
                                    <span className="text-slate-300">Setup: {scene.setupTime} min</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Call Times */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-700/50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Clock className="h-4 w-4 text-yellow-400" />
                                <span className="text-slate-300 text-sm">Call Time</span>
                              </div>
                              <p className="text-white font-semibold">{day.callTime}</p>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Clock className="h-4 w-4 text-blue-400" />
                                <span className="text-slate-300 text-sm">Wrap Time</span>
                              </div>
                              <p className="text-white font-semibold">{day.wrapTime}</p>
                            </div>
                          </div>

                          {/* Cast & Crew Summary */}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-white font-medium mb-2">Cast ({day.cast.length})</h5>
                              <div className="space-y-1">
                                {day.cast.slice(0, 3).map(member => (
                                  <div key={member.id} className="flex items-center justify-between text-sm">
                                    <span className="text-slate-300">{member.name}</span>
                                    <span className="text-slate-400">{member.callTime}</span>
                                  </div>
                                ))}
                                {day.cast.length > 3 && (
                                  <p className="text-slate-400 text-xs">+{day.cast.length - 3} more</p>
                                )}
                              </div>
                            </div>
                            <div>
                              <h5 className="text-white font-medium mb-2">Crew ({day.crew.length})</h5>
                              <div className="space-y-1">
                                {day.crew.slice(0, 3).map(member => (
                                  <div key={member.id} className="flex items-center justify-between text-sm">
                                    <span className="text-slate-300">{member.name}</span>
                                    <span className="text-slate-400 text-xs">{member.role}</span>
                                  </div>
                                ))}
                                {day.crew.length > 3 && (
                                  <p className="text-slate-400 text-xs">+{day.crew.length - 3} more</p>
                                )}
                              </div>
                            </div>
                          </div>

                          {day.notes && (
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3">
                              <p className="text-blue-300 text-sm">{day.notes}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    
                    {!shootingDays.some(day => day.date.toDateString() === selectedDate?.toDateString()) && (
                      <div className="text-center py-8">
                        <CalendarIcon className="h-12 w-12 text-slate-500 mx-auto mb-3" />
                        <p className="text-slate-400">No shooting scheduled for this date</p>
                        <Button size="sm" className="mt-3">
                          <Plus className="h-4 w-4 mr-2" />
                          Schedule Shooting Day
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              {['all', 'scheduled', 'in-progress', 'completed', 'delayed', 'cancelled'].map(status => (
                <Button
                  key={status}
                  size="sm"
                  variant={filterStatus === status ? 'default' : 'outline'}
                  onClick={() => setFilterStatus(status)}
                  className="capitalize"
                >
                  {status.replace('-', ' ')}
                </Button>
              ))}
            </div>
            <Button size="sm" variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Weather Alerts
            </Button>
          </div>

          <ScrollArea className="h-96">
            <div className="space-y-4">
              {filteredShootingDays.map(day => (
                <Card key={day.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getStatusIcon(day.status)}
                          <h3 className="text-white font-semibold">
                            {day.date.toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </h3>
                          <Badge variant="outline" className="capitalize">
                            {day.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-slate-500" />
                            <span className="text-slate-300">{day.location.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-slate-500" />
                            <span className="text-slate-300">
                              {day.cast.length} cast, {day.crew.length} crew
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getWeatherIcon(day.weather.forecast)}
                            <span className="text-slate-300">
                              {day.weather.temperature}°C - {day.weather.forecast}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-slate-400 text-sm mb-1">
                            Scenes: {day.scenes.map(s => `#${s.number}`).join(', ')}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {day.scenes.reduce((total, scene) => total + scene.duration, 0)} minutes total
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="conflicts" className="space-y-4">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-400" />
                Schedule Conflicts & Risks
              </CardTitle>
              <CardDescription>AI-detected conflicts and weather risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <CloudRain className="h-5 w-5 text-blue-400" />
                    <h4 className="text-white font-semibold">Weather Risk - March 16</h4>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      Medium Risk
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">
                    Rain forecasted for outdoor shooting at Downtown location.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="outline">
                      Book Indoor Backup
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <h4 className="text-white font-semibold">Cast Availability - March 17</h4>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      Attention Needed
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">
                    Jane Actress has scheduling conflict for scenes 15-17.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Contact Agent
                    </Button>
                    <Button size="sm" variant="outline">
                      Adjust Schedule
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <h4 className="text-white font-semibold">Equipment Confirmed</h4>
                    <Badge variant="secondary" className="text-green-400">
                      Resolved
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    All equipment for next week has been confirmed and delivered to set.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}