'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScriptIntelligenceEngine from './ScriptIntelligenceEngine'
import VisualDevelopmentLab from './VisualDevelopmentLab'
import SmartBudgetPlanner from './SmartBudgetPlanner'
import { 
  FileText, 
  Palette, 
  DollarSign, 
  Brain, 
  Camera, 
  TrendingUp,
  ArrowRight,
  Zap,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'

interface ProjectProgress {
  scriptAnalysis: number
  storyboard: number
  characterDesign: number
  budgetPlanning: number
  overall: number
}

export default function PreProductionSuite() {
  const [activeModule, setActiveModule] = useState('script')
  const [projectProgress, setProjectProgress] = useState<ProjectProgress>({
    scriptAnalysis: 100,
    storyboard: 65,
    characterDesign: 80,
    budgetPlanning: 90,
    overall: 84
  })

  const handleBackToDashboard = () => {
    window.location.href = '/'
  }

  const modules = [
    {
      id: 'script',
      name: 'Script Intelligence',
      description: 'AI-powered script analysis and breakdown',
      icon: FileText,
      color: 'bg-blue-500',
      progress: projectProgress.scriptAnalysis,
      features: ['Scene Analysis', 'Character Extraction', 'Location Mapping', 'Emotion Heatmap']
    },
    {
      id: 'visual',
      name: 'Visual Development',
      description: 'Storyboard and character design tools',
      icon: Palette,
      color: 'bg-purple-500',
      progress: projectProgress.storyboard,
      features: ['AI Storyboard', 'Character Looks', 'Mood Boards', 'Cinematic Preview']
    },
    {
      id: 'budget',
      name: 'Smart Budget',
      description: 'Intelligent budget planning and tracking',
      icon: DollarSign,
      color: 'bg-green-500',
      progress: projectProgress.budgetPlanning,
      features: ['Auto Estimates', 'Shooting Days', 'Contingency', 'Risk Analysis']
    }
  ]

  const getModuleStatus = (progress: number) => {
    if (progress === 100) return { status: 'completed', color: 'text-green-400', badge: 'Completed' }
    if (progress >= 75) return { status: 'in-progress', color: 'text-blue-400', badge: 'In Progress' }
    if (progress >= 25) return { status: 'started', color: 'text-yellow-400', badge: 'Started' }
    return { status: 'not-started', color: 'text-slate-400', badge: 'Not Started' }
  }

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'script':
        return <ScriptIntelligenceEngine />
      case 'visual':
        return <VisualDevelopmentLab />
      case 'budget':
        return <SmartBudgetPlanner />
      default:
        return <ScriptIntelligenceEngine />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Brain className="h-10 w-10 text-blue-400" />
                <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Pre-Production Suite</h1>
                <p className="text-slate-400 text-sm">AI-powered creative development tools</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleBackToDashboard}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Overall Progress</p>
                <p className="text-white font-semibold">{projectProgress.overall}%</p>
              </div>
              <Badge variant="outline" className="text-green-400 border-green-400">
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 sticky top-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Overall Progress */}
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Overall Progress</span>
                    <span className="text-blue-400 font-bold">{projectProgress.overall}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{width: `${projectProgress.overall}%`}}
                    ></div>
                  </div>
                </div>

                {/* Module List */}
                <div className="space-y-3">
                  <p className="text-slate-400 text-sm font-medium">Modules</p>
                  {modules.map((module) => {
                    const status = getModuleStatus(module.progress)
                    const ModuleIcon = module.icon
                    return (
                      <div
                        key={module.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          activeModule === module.id 
                            ? 'bg-slate-700 border-blue-500' 
                            : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50'
                        }`}
                        onClick={() => setActiveModule(module.id)}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg ${module.color} flex items-center justify-center`}>
                            <ModuleIcon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{module.name}</h4>
                            <p className="text-slate-400 text-xs">{module.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-2">
                            <div className="w-full bg-slate-600 rounded-full h-1">
                              <div 
                                className={`${module.color} h-1 rounded-full transition-all duration-300`}
                                style={{width: `${module.progress}%`}}
                              ></div>
                            </div>
                          </div>
                          <span className={`text-xs font-medium ${status.color}`}>
                            {module.progress}%
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Quick Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-700">
                  <p className="text-slate-400 text-sm font-medium">Quick Actions</p>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Next Module
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Review Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderActiveModule()}
          </div>
        </div>

        {/* Module Features Overview */}
        <div className="mt-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Suite Capabilities</CardTitle>
              <CardDescription>Complete pre-production workflow tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.map((module) => {
                  const ModuleIcon = module.icon
                  return (
                    <div key={module.id} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${module.color} flex items-center justify-center`}>
                          <ModuleIcon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{module.name}</h3>
                          <p className="text-slate-400 text-sm">{module.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {module.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}