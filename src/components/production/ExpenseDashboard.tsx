'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Users, 
  FileText, 
  Download,
  Plus,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  Receipt,
  CreditCard,
  Building,
  User,
  Filter,
  Search
} from 'lucide-react'

interface Expense {
  id: string
  category: string
  description: string
  amount: number
  date: string
  status: 'pending' | 'approved' | 'paid' | 'rejected'
  approvedBy?: string
  receiptUrl?: string
  project: string
  vendor: string
  paymentMethod: string
  tags: string[]
}

interface PayrollEntry {
  id: string
  employeeName: string
  role: string
  department: string
  rate: number
  hours: number
  overtime: number
  grossPay: number
  deductions: number
  netPay: number
  payPeriod: string
  status: 'draft' | 'submitted' | 'approved' | 'paid'
  bankAccount: string
}

interface BudgetCategory {
  name: string
  budgeted: number
  spent: number
  remaining: number
  percentage: number
  trend: 'up' | 'down' | 'stable'
  expenses: Expense[]
}

export default function ExpenseDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('current')

  const [expenses] = useState<Expense[]>([
    {
      id: '1',
      category: 'Equipment Rental',
      description: 'RED Camera Package - Week 1',
      amount: 4500,
      date: '2024-03-15',
      status: 'approved',
      approvedBy: 'John Producer',
      receiptUrl: '/api/placeholder/200/300',
      project: 'Feature Film A',
      vendor: 'CineRent Pro',
      paymentMethod: 'Credit Card',
      tags: ['camera', 'equipment', 'week1']
    },
    {
      id: '2',
      category: 'Crew Salaries',
      description: 'DP - Sarah Mitchell (10 days)',
      amount: 4500,
      date: '2024-03-14',
      status: 'pending',
      project: 'Feature Film A',
      vendor: 'Sarah Mitchell',
      paymentMethod: 'Bank Transfer',
      tags: ['crew', 'salary', 'dp']
    },
    {
      id: '3',
      category: 'Location Fees',
      description: 'Warehouse District - Day Rental',
      amount: 2500,
      date: '2024-03-13',
      status: 'paid',
      approvedBy: 'Jane Producer',
      receiptUrl: '/api/placeholder/200/300',
      project: 'Feature Film A',
      vendor: 'City Properties',
      paymentMethod: 'Check',
      tags: ['location', 'rental', 'warehouse']
    },
    {
      id: '4',
      category: 'Catering',
      description: 'Craft Services - Week 1',
      amount: 1200,
      date: '2024-03-12',
      status: 'rejected',
      project: 'Feature Film A',
      vendor: 'Gourmet Catering Co',
      paymentMethod: 'Cash',
      tags: ['catering', 'craft', 'food']
    }
  ])

  const [payroll] = useState<PayrollEntry[]>([
    {
      id: '1',
      employeeName: 'Sarah Mitchell',
      role: 'Director of Photography',
      department: 'Camera',
      rate: 450,
      hours: 40,
      overtime: 8,
      grossPay: 22500,
      deductions: 6750,
      netPay: 15750,
      payPeriod: 'March 1-15, 2024',
      status: 'approved',
      bankAccount: '****1234'
    },
    {
      id: '2',
      employeeName: 'Michael Chen',
      role: 'Production Sound Mixer',
      department: 'Audio',
      rate: 350,
      hours: 45,
      overtime: 5,
      grossPay: 17500,
      deductions: 5250,
      netPay: 12250,
      payPeriod: 'March 1-15, 2024',
      status: 'pending',
      bankAccount: '****5678'
    },
    {
      id: '3',
      employeeName: 'Emma Rodriguez',
      role: 'Production Designer',
      department: 'Art',
      rate: 400,
      hours: 35,
      overtime: 0,
      grossPay: 14000,
      deductions: 4200,
      netPay: 9800,
      payPeriod: 'March 1-15, 2024',
      status: 'draft',
      bankAccount: '****9012'
    }
  ])

  const [budgetCategories] = useState<BudgetCategory[]>([
    {
      name: 'Equipment',
      budgeted: 50000,
      spent: 32000,
      remaining: 18000,
      percentage: 64,
      trend: 'up',
      expenses: expenses.filter(e => e.category === 'Equipment Rental')
    },
    {
      name: 'Crew Salaries',
      budgeted: 150000,
      spent: 87500,
      remaining: 62500,
      percentage: 58,
      trend: 'stable',
      expenses: expenses.filter(e => e.category === 'Crew Salaries')
    },
    {
      name: 'Locations',
      budgeted: 25000,
      spent: 18000,
      remaining: 7000,
      percentage: 72,
      trend: 'down',
      expenses: expenses.filter(e => e.category === 'Location Fees')
    },
    {
      name: 'Catering',
      budgeted: 15000,
      spent: 8000,
      remaining: 7000,
      percentage: 53,
      trend: 'stable',
      expenses: expenses.filter(e => e.category === 'Catering')
    }
  ])

  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0)
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0)
  const totalRemaining = totalBudget - totalSpent
  const overallPercentage = (totalSpent / totalBudget) * 100

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-900/20'
      case 'pending': return 'text-yellow-400 bg-yellow-900/20'
      case 'paid': return 'text-blue-400 bg-blue-900/20'
      case 'rejected': return 'text-red-400 bg-red-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'paid': return <DollarSign className="h-4 w-4" />
      case 'rejected': return <XCircle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-400" />
      case 'down': return <TrendingDown className="h-4 w-4 text-green-400" />
      default: return <div className="h-4 w-4" />
    }
  }

  const pendingExpenses = expenses.filter(e => e.status === 'pending').length
  const pendingPayroll = payroll.filter(p => p.status === 'pending' || p.status === 'draft').length
  const totalPendingPayroll = payroll
    .filter(p => p.status === 'pending' || p.status === 'draft')
    .reduce((sum, p) => sum + p.netPay, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Expense & Payroll Dashboard</h2>
          <p className="text-slate-400">Real-time expense tracking and automated payroll processing</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
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
                <p className="text-white font-semibold text-lg">${(totalBudget / 1000).toFixed(0)}K</p>
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
                <p className="text-white font-semibold text-lg">${(totalSpent / 1000).toFixed(0)}K</p>
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
                <p className="text-white font-semibold text-lg">${(totalRemaining / 1000).toFixed(0)}K</p>
              </div>
              <TrendingDown className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Pending Items</p>
                <p className="text-white font-semibold text-lg">{pendingExpenses + pendingPayroll}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Budget Overview */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Budget Overview</CardTitle>
              <CardDescription>Spending by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Overall Progress</span>
                  <span className="text-slate-300">
                    ${totalSpent.toLocaleString()} / ${totalBudget.toLocaleString()}
                  </span>
                </div>
                <Progress value={overallPercentage} className="h-3" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {budgetCategories.map((category) => (
                    <div key={category.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getTrendIcon(category.trend)}
                          <span className="text-white font-medium">{category.name}</span>
                        </div>
                        <span className="text-slate-300">
                          ${category.spent.toLocaleString()} / ${category.budgeted.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">{category.percentage}% used</span>
                        <span className="text-slate-400">
                          ${category.remaining.toLocaleString()} remaining
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription>Latest expenses and payroll updates</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-3">
                  {[...expenses.slice(0, 3), ...payroll.slice(0, 2)].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {'grossPay' in item ? (
                          <User className="h-8 w-8 text-blue-400" />
                        ) : (
                          <Receipt className="h-8 w-8 text-green-400" />
                        )}
                        <div>
                          <p className="text-white font-medium">
                            {'grossPay' in item ? item.employeeName : item.description}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {'grossPay' in item ? item.role : item.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">
                          ${('grossPay' in item ? item.netPay : item.amount).toLocaleString()}
                        </p>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor('grossPay' in item ? item.status : item.status)}`}>
                          {'grossPay' in item ? item.status : item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Expense Management</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Expenses */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                  Pending Approval
                  <Badge variant="secondary" className="ml-2">
                    {expenses.filter(e => e.status === 'pending').length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {expenses.filter(e => e.status === 'pending').map((expense) => (
                      <div key={expense.id} className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-white font-medium">{expense.description}</p>
                            <p className="text-slate-400 text-sm">{expense.vendor}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {expense.category}
                              </Badge>
                              <span className="text-slate-400 text-xs">{expense.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${expense.amount}</p>
                            <div className="flex space-x-1 mt-1">
                              <Button size="sm" variant="outline">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button size="sm">
                                <CheckCircle className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* All Expenses */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">All Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-3">
                    {expenses.map((expense) => (
                      <div key={expense.id} className="p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              {getStatusIcon(expense.status)}
                              <p className="text-white font-medium">{expense.description}</p>
                              <Badge variant="secondary" className={`text-xs ${getStatusColor(expense.status)}`}>
                                {expense.status}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm">{expense.vendor}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {expense.category}
                              </Badge>
                              <span className="text-slate-400 text-xs">{expense.date}</span>
                              {expense.paymentMethod && (
                                <span className="text-slate-400 text-xs">{expense.paymentMethod}</span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${expense.amount}</p>
                            {expense.receiptUrl && (
                              <Button size="sm" variant="outline" className="mt-1">
                                <Receipt className="h-3 w-3" />
                              </Button>
                            )}
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

        <TabsContent value="payroll" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Payroll Management</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Payroll
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Run Payroll
              </Button>
            </div>
          </div>

          {/* Payroll Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Total Payroll</p>
                    <p className="text-white font-semibold text-lg">
                      ${payroll.reduce((sum, p) => sum + p.grossPay, 0).toLocaleString()}
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Net Pay</p>
                    <p className="text-white font-semibold text-lg">
                      ${payroll.reduce((sum, p) => sum + p.netPay, 0).toLocaleString()}
                    </p>
                  </div>
                  <CreditCard className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">Pending Payment</p>
                    <p className="text-white font-semibold text-lg">
                      ${totalPendingPayroll.toLocaleString()}
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payroll Details */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Payroll Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-3">
                  {payroll.map((entry) => (
                    <div key={entry.id} className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <p className="text-white font-semibold">{entry.employeeName}</p>
                            <Badge variant="secondary" className={`text-xs ${getStatusColor(entry.status)}`}>
                              {entry.status}
                            </Badge>
                          </div>
                          <p className="text-slate-400 text-sm">{entry.role} • {entry.department}</p>
                          <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                            <div>
                              <p className="text-slate-400">Hours: {entry.hours} (OT: {entry.overtime})</p>
                              <p className="text-slate-400">Rate: ${entry.rate}/hr</p>
                            </div>
                            <div>
                              <p className="text-slate-400">Gross: ${entry.grossPay}</p>
                              <p className="text-slate-400">Net: ${entry.netPay}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-slate-400 text-xs">{entry.payPeriod}</span>
                            <span className="text-slate-400 text-xs">****{entry.bankAccount.slice(-4)}</span>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          {entry.status === 'draft' && (
                            <Button size="sm">
                              <CheckCircle className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Spending Trends</CardTitle>
                <CardDescription>Monthly expense analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">This Month</span>
                    <span className="text-white font-semibold">$12,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Last Month</span>
                    <span className="text-white font-semibold">$10,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Change</span>
                    <span className="text-green-400 font-semibold">+21.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Budget Health</CardTitle>
                <CardDescription>Financial risk assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-medium">On Track</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Overall spending is within budget limits
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">Watch List</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Equipment category approaching budget limit
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}