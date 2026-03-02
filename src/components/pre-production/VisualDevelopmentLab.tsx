'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Palette, 
  Camera, 
  Users, 
  Lightbulb, 
  Image, 
  Video, 
  Download,
  Eye,
  Wand2,
  Settings,
  Grid3X3,
  Film,
  Sun,
  Moon,
  Cloud,
  Zap
} from 'lucide-react'

interface StoryboardPanel {
  id: string
  number: number
  image?: string
  description: string
  shotType: string
  cameraAngle: string
  lighting: string
  notes: string
  generated: boolean
}

interface CharacterLook {
  name: string
  age: string
  gender: string
  ethnicity: string
  style: string
  features: string
  referenceImages: string[]
  generated: boolean
}

interface MoodBoard {
  id: string
  title: string
  theme: string
  images: string[]
  colorPalette: string[]
  keywords: string[]
  generated: boolean
}

export default function VisualDevelopmentLab() {
  const [selectedTab, setSelectedTab] = useState('storyboard')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)

  const [storyboardPanels, setStoryboardPanels] = useState<StoryboardPanel[]>([
    {
      id: '1',
      number: 1,
      description: 'Opening shot - protagonist wakes up in unfamiliar room',
      shotType: 'Wide Shot',
      cameraAngle: 'Eye Level',
      lighting: 'Dim, mysterious',
      notes: 'Establish sense of confusion and mystery',
      generated: true
    },
    {
      id: '2',
      number: 2,
      description: 'Close-up on protagonist\'s face showing confusion',
      shotType: 'Close-Up',
      cameraAngle: 'Low Angle',
      lighting: 'Single source',
      notes: 'Emphasize emotional state',
      generated: false
    }
  ])

  const [characterLooks, setCharacterLooks] = useState<CharacterLook[]>([
    {
      name: 'PROTAGONIST',
      age: '28-35',
      gender: 'Male',
      ethnicity: 'Mixed',
      style: 'Casual, worn clothing',
      features: 'Tired eyes, determined jawline',
      referenceImages: [],
      generated: true
    },
    {
      name: 'MYSTERIOUS FIGURE',
      age: '40-50',
      gender: 'Female',
      ethnicity: 'Asian',
      style: 'Elegant, dark clothing',
      features: 'Sharp features, intense gaze',
      referenceImages: [],
      generated: false
    }
  ])

  const [moodBoards, setMoodBoards] = useState<MoodBoard[]>([
    {
      id: '1',
      title: 'Opening Sequence',
      theme: 'Mystery & Tension',
      images: [],
      colorPalette: ['#1a1a2e', '#16213e', '#0f3460', '#e94560'],
      keywords: ['dark', 'mysterious', 'tense', 'atmospheric'],
      generated: true
    }
  ])

  const generateStoryboard = async (panelId: string) => {
    setIsGenerating(true)
    setGenerationProgress(0)
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    setTimeout(() => {
      setStoryboardPanels(prev => 
        prev.map(panel => 
          panel.id === panelId 
            ? { ...panel, generated: true, image: '/api/placeholder/400/225' }
            : panel
        )
      )
      setIsGenerating(false)
      setGenerationProgress(0)
    }, 2000)
  }

  const generateCharacterLook = async (characterName: string) => {
    setIsGenerating(true)
    setGenerationProgress(0)
    
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    setTimeout(() => {
      setCharacterLooks(prev => 
        prev.map(char => 
          char.name === characterName 
            ? { 
                ...char, 
                generated: true, 
                referenceImages: [
                  '/api/placeholder/200/300',
                  '/api/placeholder/200/300',
                  '/api/placeholder/200/300'
                ]
              }
            : char
        )
      )
      setIsGenerating(false)
      setGenerationProgress(0)
    }, 2000)
  }

  const generateMoodBoard = async (boardId: string) => {
    setIsGenerating(true)
    setGenerationProgress(0)
    
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    setTimeout(() => {
      setMoodBoards(prev => 
        prev.map(board => 
          board.id === boardId 
            ? { 
                ...board, 
                generated: true, 
                images: [
                  '/api/placeholder/150/150',
                  '/api/placeholder/150/150',
                  '/api/placeholder/150/150',
                  '/api/placeholder/150/150'
                ]
              }
            : board
        )
      )
      setIsGenerating(false)
      setGenerationProgress(0)
    }, 2000)
  }

  const getLightingIcon = (lighting: string) => {
    if (lighting.toLowerCase().includes('dim') || lighting.toLowerCase().includes('dark')) {
      return <Moon className="h-4 w-4" />
    }
    if (lighting.toLowerCase().includes('bright')) {
      return <Sun className="h-4 w-4" />
    }
    return <Cloud className="h-4 w-4" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Visual Development Lab</h2>
          <p className="text-slate-400">AI-powered visual pre-production tools</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            AI Settings
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Package
          </Button>
        </div>
      </div>

      {/* Generation Progress */}
      {isGenerating && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Wand2 className="h-6 w-6 text-purple-400 animate-pulse" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Generating Visuals...</span>
                  <span className="text-slate-400 text-sm">{generationProgress}%</span>
                </div>
                <Progress value={generationProgress} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="storyboard">Storyboard</TabsTrigger>
          <TabsTrigger value="characters">Characters</TabsTrigger>
          <TabsTrigger value="moodboard">Mood Board</TabsTrigger>
          <TabsTrigger value="cinematic">Cinematic</TabsTrigger>
        </TabsList>

        <TabsContent value="storyboard" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">AI Storyboard Generator</h3>
            <Button size="sm">
              <Grid3X3 className="h-4 w-4 mr-2" />
              Generate All Panels
            </Button>
          </div>

          <ScrollArea className="h-96">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {storyboardPanels.map((panel) => (
                <Card key={panel.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          Panel {panel.number}
                        </Badge>
                        <h4 className="text-white font-medium">{panel.shotType}</h4>
                      </div>
                      {panel.generated ? (
                        <Badge variant="secondary" className="text-green-400">
                          Generated
                        </Badge>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => generateStoryboard(panel.id)}
                          disabled={isGenerating}
                        >
                          <Wand2 className="h-4 w-4 mr-1" />
                          Generate
                        </Button>
                      )}
                    </div>

                    {panel.generated ? (
                      <div className="space-y-3">
                        <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                          <Image className="h-12 w-12 text-slate-500" />
                        </div>
                        <p className="text-slate-300 text-sm">{panel.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Camera className="h-4 w-4 text-slate-500" />
                            <span className="text-slate-300">{panel.cameraAngle}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getLightingIcon(panel.lighting)}
                            <span className="text-slate-300">{panel.lighting}</span>
                          </div>
                        </div>
                        {panel.notes && (
                          <div className="bg-slate-700/50 rounded p-2">
                            <p className="text-slate-400 text-xs">{panel.notes}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                          <div className="text-center">
                            <Image className="h-12 w-12 text-slate-500 mx-auto mb-2" />
                            <p className="text-slate-400 text-sm">Not generated yet</p>
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm">{panel.description}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="characters" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Character Look Development</h3>
            <Button size="sm">
              <Users className="h-4 w-4 mr-2" />
              Generate All Characters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {characterLooks.map((character) => (
              <Card key={character.name} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{character.name}</CardTitle>
                    {character.generated ? (
                      <Badge variant="secondary" className="text-green-400">
                        Generated
                      </Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => generateCharacterLook(character.name)}
                        disabled={isGenerating}
                      >
                        <Wand2 className="h-4 w-4 mr-1" />
                        Generate
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Age Range</p>
                        <p className="text-white">{character.age}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Gender</p>
                        <p className="text-white">{character.gender}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Ethnicity</p>
                        <p className="text-white">{character.ethnicity}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-slate-400 text-sm">Style</p>
                        <p className="text-white">{character.style}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Features</p>
                        <p className="text-white text-sm">{character.features}</p>
                      </div>
                    </div>
                  </div>

                  {character.generated && (
                    <div className="mt-4">
                      <p className="text-slate-400 text-sm mb-2">Reference Images</p>
                      <div className="flex space-x-2">
                        {character.referenceImages.map((img, index) => (
                          <div key={index} className="w-20 h-24 bg-slate-700 rounded flex items-center justify-center">
                            <Users className="h-8 w-8 text-slate-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="moodboard" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Mood Board Builder</h3>
            <Button size="sm">
              <Palette className="h-4 w-4 mr-2" />
              Create New Board
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {moodBoards.map((board) => (
              <Card key={board.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">{board.title}</CardTitle>
                      <CardDescription>{board.theme}</CardDescription>
                    </div>
                    {board.generated ? (
                      <Badge variant="secondary" className="text-green-400">
                        Generated
                      </Badge>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => generateMoodBoard(board.id)}
                        disabled={isGenerating}
                      >
                        <Wand2 className="h-4 w-4 mr-1" />
                        Generate
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {board.generated && (
                      <div>
                        <p className="text-slate-400 text-sm mb-2">Reference Images</p>
                        <div className="grid grid-cols-4 gap-2">
                          {board.images.map((img, index) => (
                            <div key={index} className="aspect-square bg-slate-700 rounded flex items-center justify-center">
                              <Image className="h-6 w-6 text-slate-500" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-slate-400 text-sm mb-2">Color Palette</p>
                      <div className="flex space-x-2">
                        {board.colorPalette.map((color, index) => (
                          <div 
                            key={index}
                            className="w-12 h-12 rounded border-2 border-slate-600"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm mb-2">Keywords</p>
                      <div className="flex flex-wrap gap-1">
                        {board.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {keyword}
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

        <TabsContent value="cinematic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Film className="h-5 w-5 mr-2 text-blue-400" />
                  Cinematic Shot Preview
                </CardTitle>
                <CardDescription>AI-generated cinematic previews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 mb-1">Shot Type</p>
                      <select className="w-full bg-slate-700 text-white rounded px-3 py-2">
                        <option>Wide Shot</option>
                        <option>Medium Shot</option>
                        <option>Close-Up</option>
                        <option>Extreme Close-Up</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Camera Movement</p>
                      <select className="w-full bg-slate-700 text-white rounded px-3 py-2">
                        <option>Static</option>
                        <option>Pan</option>
                        <option>Tilt</option>
                        <option>Dolly</option>
                        <option>Handheld</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-400" />
                  Lighting Style Simulator
                </CardTitle>
                <CardDescription>Preview different lighting setups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                    <Sun className="h-12 w-12 text-slate-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 mb-1">Lighting Style</p>
                      <select className="w-full bg-slate-700 text-white rounded px-3 py-2">
                        <option>Natural Daylight</option>
                        <option>Golden Hour</option>
                        <option>Blue Hour</option>
                        <option>Dramatic High Contrast</option>
                        <option>Soft Studio Light</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">Time of Day</p>
                      <select className="w-full bg-slate-700 text-white rounded px-3 py-2">
                        <option>Dawn</option>
                        <option>Morning</option>
                        <option>Noon</option>
                        <option>Afternoon</option>
                        <option>Golden Hour</option>
                        <option>Dusk</option>
                        <option>Night</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Lighting
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