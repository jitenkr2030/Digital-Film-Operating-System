'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  DollarSign, 
  Calendar, 
  Users, 
  MapPin, 
  Camera, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Calculator,
  FileText,
  Download,
  Settings,
  Plus,
  Minus,
  Edit,
  Save
} from 'lucide-react'

interface BudgetCategory {
  id: string
  name: string
  budgeted: number
  spent: number
  remaining: number
  items: BudgetItem[]
  color: string
}

interface BudgetItem {
  id: string
  description: string
  estimatedCost: number
  actualCost?: number
  priority: 'high' | 'medium' | 'low'
  category: string
  notes?: string
}

interface ShootingDay {
  id: string
  date: string
  scenes: number
  location: string
  cast: number
  crew: number
  estimatedCost: number
}

export default function SmartBudgetPlanner() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [isCalculating, setIsCalculating] = useState(false)
  const [totalBudget, setTotalBudget] = useState(2500000)
  const [contingency, setContingency] = useState(10)

  const [budgetCategories, setBudgetCategories] = useState<BudgetCategory[]>([
    {
      id: '1',
      name: 'Pre-Production',
      budgeted: 250000,
      spent: 125000,
      remaining: 125000,
      color: 'bg-blue-500',
      items: [
        {
          id: '1-1',
          description: 'Script Development',
          estimatedCost: 50000,
          actualCost: 45000,
          priority: 'high',
          category: 'Pre-Production'
        },
        {
          id: '1-2',
          description: 'Location Scouting',
          estimatedCost: 75000,
          actualCost: 80000,
          priority: 'high',
          category: 'Pre-Production'
        }
      ]
    },
    {
      id: '2',
      name: 'Production',
      budgeted: 1500000,
      spent: 625000,
      remaining: 875000,
      color: 'bg-green-500',
      items: [
        {
          id: '2-1',
          description: 'Cast Salaries',
          estimatedCost: 500000,
          actualCost: 350000,
          priority: 'high',
          category: 'Production'
        },
        {
          id: '2-2',
          description: 'Crew Salaries',
          estimatedCost: 375000,
          actualCost: 275000,
          priority: 'high',
          category: 'Production'
        }
      ]
    },
    {
      id: '3',
      name: 'Post-Production',
      budgeted: 500000,
      spent: 0,
      remaining: 500000,
      color: 'bg-purple-500',
      items: [
        {
          id: '3-1',
          description: 'Editing',
          estimatedCost: 150000,
          priority: 'high',
          category: 'Post-Production'
        },
        {
          id: '3-2',
          description: 'Visual Effects',
          estimatedCost: 200000,
          priority: 'medium',
          category: 'Post-Production'
        }
      ]
    },
    {
      id: '4',
      name: 'Equipment',
      budgeted: 250000,
      spent: 87500,
      remaining: 162500,
      color: 'bg-yellow-500',
      items: [
        {
          id: '4-1',
          description: 'Camera Package',
          estimatedCost: 100000,
          actualCost: 87500,
          priority: 'high',
          category: 'Equipment'
        }
      ]
    }
  ])

  const [shootingDays] = useState<ShootingDay[]>([
    {
      id: '1',
      date: '2024-03-15',
      scenes: 4,
      location: 'Warehouse District',
      cast: 8,
      crew: 12,
      estimatedCost: 45000
    },
    {
      id: '2',
      date: '2024-03-16',
      scenes: 3,
      location: 'Downtown Apartment',
      cast: 4,
      crew: 8,
      estimatedCost: 28000
    }
  ])

  const calculateTotalBudget = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
    }, 2000)
  }

  const getTotalSpent = () => {
    return budgetCategories.reduce((total, category) => total + category.spent, 0)
  }

  const getTotalBudgeted = () => {
    return budgetCategories.reduce((total, category) => total + category.budgeted, 0)
  }

  const getTotalRemaining = () => {
    return budgetCategories.reduce((total, category) => total + category.remaining, 0)
  }

  const getBudgetStatus = () => {
    const spent = getTotalSpent()
    const budgeted = getTotalBudgeted()
    const percentage = (spent / budgeted) * 100
    
    if (percentage > 90) return { status: 'danger', color: 'text-red-400', icon: AlertTriangle }
    if (percentage > 75) return { status: 'warning', color: 'text-yellow-400', icon: TrendingUp }
    return { status: 'good', color: 'text-green-400', icon: TrendingDown }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const budgetStatus = getBudgetStatus()
  const StatusIcon = budgetStatus.icon

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Smart Budget Planner</h2>
          <p className="text-slate-400">AI-powered budget estimation and tracking</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Budget Settings
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Budget</p>
                <p className="text-white font-semibold text-lg">${(totalBudget / 1000000).toFixed(2)}M</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Spent</p>
                <p className="text-white font-semibold text-lg">${(getTotalSpent() / 1000000).toFixed(2)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Remaining</p>
                <p className="text-white font-semibold text-lg">${(getTotalRemaining() / 1000000).toFixed(2)}M</p>
              </div>
              <TrendingDown className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Status</p>
                <p className={`font-semibold text-lg ${budgetStatus.color}`}>
                  {budgetStatus.status.charAt(0).toUpperCase() + budgetStatus.status.slice(1)}
                </p>
              </div>
              <StatusIcon className={`h-8 w-8 ${budgetStatus.color}`} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calculation Progress */}
      {isCalculating && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Calculator className="h-6 w-6 text-purple-400 animate-pulse" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">AI Calculating Budget...</span>
                  <span className="text-slate-400 text-sm">Analyzing requirements</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="schedule">Shooting Days</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Budget Progress */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Budget Progress</CardTitle>
              <CardDescription>Overall budget utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Total Budget Used</span>
                    <span className="text-slate-300">
                      ${getTotalSpent().toLocaleString()} / ${getTotalBudgeted().toLocaleString()}
                    </span>
                  </div>
                  <Progress 
                    value={(getTotalSpent() / getTotalBudgeted()) * 100} 
                    className="h-3"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetCategories.map((category) => (
                    <div key={category.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="text-white text-sm">{category.name}</span>
                        </div>
                        <span className="text-slate-300 text-sm">
                          ${category.spent.toLocaleString()} / ${category.budgeted.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={(category.spent / category.budgeted) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-8 w-8 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Shooting Days</p>
                    <p className="text-white font-semibold">32 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Cast & Crew</p>
                    <p className="text-white font-semibold">45 people</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-8 w-8 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Locations</p>
                    <p className="text-white font-semibold">12 locations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {budgetCategories.map((category) => (
              <Card key={category.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                      <CardTitle className="text-white">{category.name}</CardTitle>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">${category.budgeted.toLocaleString()}</p>
                      <p className="text-slate-400 text-sm">Budgeted</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Spent</span>
                      <span className="text-white">${category.spent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Remaining</span>
                      <span className="text-green-400">${category.remaining.toLocaleString()}</span>
                    </div>
                    <Progress value={(category.spent / category.budgeted) * 100} className="h-2" />
                    
                    <div className="space-y-2 pt-2">
                      <p className="text-slate-400 text-sm font-medium">Budget Items</p>
                      <ScrollArea className="h-32">
                        <div className="space-y-2">
                          {category.items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                              <div className="flex-1">
                                <p className="text-white text-sm">{item.description}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`}></div>
                                  <span className="text-slate-400 text-xs capitalize">{item.priority}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-white text-sm">
                                  ${item.actualCost || item.estimatedCost}
                                </p>
                                {item.actualCost && (
                                  <p className="text-slate-400 text-xs">
                                    est: ${item.estimatedCost}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Shooting Day Calculator</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Day
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {shootingDays.map((day) => (
                    <div key={day.id} className="border border-slate-700 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="text-blue-400 border-blue-400">
                              {day.date}
                            </Badge>
                            <h4 className="text-white font-medium">{day.location}</h4>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Camera className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-300">{day.scenes} scenes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-300">{day.cast} cast</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-300">{day.crew} crew</span>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-medium">${day.estimatedCost.toLocaleString()}</p>
                              <p className="text-slate-400 text-xs">estimated</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Budget Analysis</CardTitle>
                <CardDescription>AI-powered insights and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingDown className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-medium">On Track</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Your production is currently 15% under budget. Consider allocating 
                      additional resources to post-production for better quality.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">Watch List</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Equipment costs are 8% over estimate. Monitor rental agreements 
                      and consider alternative vendors.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Recommendations</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• Increase contingency buffer to 12% for complex scenes</li>
                      <li>• Negotiate bulk rates for equipment rental packages</li>
                      <li>• Consider digital location scouting to reduce travel costs</li>
                      <li>• Allocate 5% more budget to VFX for complex sequences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contingency Planning</CardTitle>
                <CardDescription>Risk assessment and buffer allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Contingency Buffer</span>
                      <span className="text-slate-300">{contingency}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      value={contingency}
                      onChange={(e) => setContingency(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm">Contingency Amount</span>
                      <span className="text-white font-medium">
                        ${((totalBudget * contingency) / 100).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm">Available Buffer</span>
                      <span className="text-green-400 font-medium">
                        ${((totalBudget * contingency) / 100 - getTotalSpent()).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Button onClick={calculateTotalBudget} className="w-full" disabled={isCalculating}>
                    <Calculator className="h-4 w-4 mr-2" />
                    {isCalculating ? 'Calculating...' : 'Recalculate Budget'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}