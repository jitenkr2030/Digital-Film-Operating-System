'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Upload, 
  FileText, 
  Brain, 
  MapPin, 
  Users, 
  BarChart3, 
  Heart,
  Camera,
  Clock,
  DollarSign,
  TrendingUp,
  Eye,
  Download,
  Zap
} from 'lucide-react'

interface ScriptAnalysis {
  genre: string
  theme: string
  tone: string
  estimatedRuntime: number
  sceneCount: number
  characterCount: number
  locationCount: number
  complexity: number
  budget: number
  emotionHeatmap: Array<{scene: number, emotion: string, intensity: number}>
}

interface Scene {
  number: number
  title: string
  setting: string
  characters: string[]
  complexity: number
  estimatedDuration: number
  budgetElements: Array<{category: string, estimatedCost: number}>
}

interface Character {
  name: string
  dialogueCount: number
  screenTime: number
  emotionalArc: string[]
  relationships: string[]
}

interface Location {
  name: string
  type: 'interior' | 'exterior' | 'both'
  sceneCount: number
  requirements: string[]
  estimatedCost: number
}

export default function ScriptIntelligenceEngine() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<ScriptAnalysis | null>(null)
  const [scenes, setScenes] = useState<Scene[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      // Simulate analysis
      setTimeout(() => {
        setAnalysis({
          genre: 'Psychological Thriller',
          theme: 'Identity and Memory',
          tone: 'Dark, Introspective',
          estimatedRuntime: 118,
          sceneCount: 42,
          characterCount: 8,
          locationCount: 12,
          complexity: 78,
          budget: 2500000,
          emotionHeatmap: [
            {scene: 1, emotion: 'tension', intensity: 65},
            {scene: 2, emotion: 'mystery', intensity: 80},
            {scene: 3, emotion: 'fear', intensity: 90},
            {scene: 4, emotion: 'hope', intensity: 45},
            {scene: 5, emotion: 'despair', intensity: 85}
          ]
        })
        
        setScenes([
          {
            number: 1,
            title: 'Opening Nightmare',
            setting: 'Abandoned Warehouse - Night',
            characters: ['PROTAGONIST', 'MYSTERIOUS FIGURE'],
            complexity: 65,
            estimatedDuration: 4,
            budgetElements: [
              {category: 'Lighting', estimatedCost: 2500},
              {category: 'Special Effects', estimatedCost: 5000}
            ]
          },
          {
            number: 2,
            title: 'Morning After',
            setting: 'Apartment - Day',
            characters: ['PROTAGONIST'],
            complexity: 35,
            estimatedDuration: 3,
            budgetElements: [
              {category: 'Location Rental', estimatedCost: 1500}
            ]
          }
        ])

        setCharacters([
          {
            name: 'PROTAGONIST',
            dialogueCount: 145,
            screenTime: 45,
            emotionalArc: ['confused', 'determined', 'triumphant'],
            relationships: ['MYSTERIOUS FIGURE', 'MENTOR']
          },
          {
            name: 'MYSTERIOUS FIGURE',
            dialogueCount: 67,
            screenTime: 22,
            emotionalArc: ['enigmatic', 'threatening', 'revealed'],
            relationships: ['PROTAGONIST']
          }
        ])

        setLocations([
          {
            name: 'Abandoned Warehouse',
            type: 'interior',
            sceneCount: 8,
            requirements: ['Industrial lighting', 'Smoke effects', 'Large space'],
            estimatedCost: 15000
          },
          {
            name: 'City Rooftop',
            type: 'exterior',
            sceneCount: 3,
            requirements: ['Helicopter access', 'Night shooting permit'],
            estimatedCost: 25000
          }
        ])
        
        setIsAnalyzing(false)
      }, 3000)
      setIsAnalyzing(true)
    }
  }

  const getComplexityColor = (complexity: number) => {
    if (complexity < 40) return 'text-green-400'
    if (complexity < 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getEmotionColor = (emotion: string) => {
    const colors: Record<string, string> = {
      tension: 'bg-orange-500',
      mystery: 'bg-purple-500',
      fear: 'bg-red-500',
      hope: 'bg-green-500',
      despair: 'bg-gray-500'
    }
    return colors[emotion] || 'bg-blue-500'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Script Intelligence Engine</h2>
          <p className="text-slate-400">AI-powered script analysis and breakdown</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview Mode
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Upload Section */}
      {!uploadedFile && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <div className="mx-auto w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mb-6">
              <Upload className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Upload Your Script</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Upload your script in PDF, DOC, or TXT format to get instant AI analysis and breakdown
            </p>
            <div className="flex justify-center space-x-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              </label>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Use Sample Script
              </Button>
            </div>
            <div className="mt-6 flex justify-center space-x-6 text-sm text-slate-500">
              <span>PDF</span>
              <span>DOC</span>
              <span>DOCX</span>
              <span>TXT</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-blue-400 animate-pulse" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Analyzing Script...</span>
                  <span className="text-slate-400 text-sm">AI Processing</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-slate-300">Extracting scenes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-400" />
                <span className="text-slate-300">Identifying characters</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-slate-300">Mapping locations</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {analysis && !isAnalyzing && (
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scenes">Scenes</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Genre</p>
                      <p className="text-white font-semibold">{analysis.genre}</p>
                    </div>
                    <FileText className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Runtime</p>
                      <p className="text-white font-semibold">{analysis.estimatedRuntime} min</p>
                    </div>
                    <Clock className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Complexity</p>
                      <p className={`font-semibold ${getComplexityColor(analysis.complexity)}`}>
                        {analysis.complexity}%
                      </p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Est. Budget</p>
                      <p className="text-white font-semibold">${(analysis.budget / 1000000).toFixed(1)}M</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Script Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Script Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Theme</span>
                    <span className="text-white">{analysis.theme}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tone</span>
                    <span className="text-white">{analysis.tone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Scenes</span>
                    <span className="text-white">{analysis.sceneCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Main Characters</span>
                    <span className="text-white">{analysis.characterCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Locations</span>
                    <span className="text-white">{analysis.locationCount}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-400" />
                    Emotion Heatmap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysis.emotionHeatmap.map((emotion, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-slate-400 text-sm w-12">Scene {emotion.scene}</span>
                        <div className="flex-1 bg-slate-700 rounded-full h-6 relative overflow-hidden">
                          <div 
                            className={`h-full ${getEmotionColor(emotion.emotion)} transition-all duration-500`}
                            style={{width: `${emotion.intensity}%`}}
                          ></div>
                        </div>
                        <div className="flex items-center space-x-2 w-24">
                          <div className={`w-3 h-3 rounded-full ${getEmotionColor(emotion.emotion)}`}></div>
                          <span className="text-white text-sm capitalize">{emotion.emotion}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenes" className="space-y-4">
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {scenes.map((scene) => (
                  <Card key={scene.number} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="text-blue-400 border-blue-400">
                              Scene {scene.number}
                            </Badge>
                            <h3 className="text-white font-semibold">{scene.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {scene.estimatedDuration} min
                            </Badge>
                          </div>
                          <p className="text-slate-400 text-sm mb-2">{scene.setting}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-300">{scene.characters.join(', ')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BarChart3 className="h-4 w-4 text-slate-500" />
                              <span className={getComplexityColor(scene.complexity)}>
                                Complexity: {scene.complexity}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-400 text-sm mb-1">Est. Cost</p>
                          <p className="text-white font-semibold">
                            ${scene.budgetElements.reduce((sum, el) => sum + el.estimatedCost, 0).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="characters" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {characters.map((character, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white font-semibold text-lg">{character.name}</h3>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        Main Character
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400 mb-1">Dialogue Count</p>
                        <p className="text-white font-medium">{character.dialogueCount} lines</p>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1">Screen Time</p>
                        <p className="text-white font-medium">{character.screenTime} minutes</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-slate-400 text-sm mb-2">Emotional Arc</p>
                      <div className="flex flex-wrap gap-1">
                        {character.emotionalArc.map((emotion, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {emotion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-slate-400 text-sm mb-2">Relationships</p>
                      <div className="flex flex-wrap gap-1">
                        {character.relationships.map((rel, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {rel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{location.name}</h3>
                        <Badge 
                          variant={location.type === 'interior' ? 'default' : 'secondary'}
                          className="mt-1"
                        >
                          {location.type}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 text-sm">Est. Cost</p>
                        <p className="text-white font-semibold">${location.estimatedCost.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Scene Count</span>
                        <span className="text-white">{location.sceneCount} scenes</span>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-2">Requirements</p>
                        <div className="flex flex-wrap gap-1">
                          {location.requirements.map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Budget Breakdown</CardTitle>
                <CardDescription>AI-estimated budget by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {category: 'Locations', amount: 850000, percentage: 34},
                    {category: 'Cast & Crew', amount: 625000, percentage: 25},
                    {category: 'Equipment', amount: 375000, percentage: 15},
                    {category: 'Post-Production', amount: 312500, percentage: 12.5},
                    {category: 'Contingency', amount: 250000, percentage: 10},
                    {category: 'Other', amount: 87500, percentage: 3.5}
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-32">
                        <p className="text-white text-sm font-medium">{item.category}</p>
                      </div>
                      <div className="flex-1 bg-slate-700 rounded-full h-6 relative overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                          style={{width: `${item.percentage}%`}}
                        ></div>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-white font-semibold">${(item.amount / 1000).toFixed(0)}K</p>
                        <p className="text-slate-400 text-xs">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">Total Estimated Budget</span>
                    <span className="text-green-400 font-bold text-xl">
                      ${(analysis.budget / 1000000).toFixed(2)}M
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}