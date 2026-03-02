'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Shield, 
  Users, 
  Lock, 
  Key, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Database, 
  Cloud, 
  Server, 
  Smartphone,
  Monitor,
  Globe,
  Building,
  Crown,
  Zap,
  TrendingUp,
  Activity,
  DollarSign,
  CreditCard,
  FileText,
  Settings,
  RefreshCw,
  Download,
  Plus,
  Search,
  Filter,
  UserPlus,
  UserMinus,
  ShieldAlert,
  ShieldCheck,
  KeyRound,
  Fingerprint,
  Bell,
  Mail,
  MessageSquare,
  Award,
  Target,
  Brain,
  BarChart3,
  PieChart,
  Calendar,
  MapPin,
  Camera,
  Video,
  Film,
  Tv,
  Radio,
  Headphones,
  Volume2,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Trash2,
  Archive,
  Upload,
  Save,
  Copy,
  Edit,
  Trash,
  LogOut,
  User,
  UserCheck,
  UserX,
  Ban,
  ShieldOff,
  Unlock,
  LockOpen,
  KeyOff,
  EyeOff,
  EyeClosed
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  role: 'super_admin' | 'admin' | 'producer' | 'director' | 'crew' | 'viewer' | 'external'
  department: string
  avatar: string
  status: 'active' | 'inactive' | 'suspended' | 'pending'
  last_login: string
  created_at: string
  permissions: Permission[]
  sessions: UserSession[]
  mfa_enabled: boolean
  mfa_methods: ('sms' | 'email' | 'authenticator' | 'biometric')[]
  password_expires: string
  account_locked: boolean
  lock_reason?: string
  two_factor_recovery: string
  security_score: number
  risk_level: 'low' | 'medium' | 'high' | 'critical'
}

interface Permission {
  id: string
  name: string
  resource: string
  action: 'create' | 'read' | 'update' | 'delete' | 'execute' | 'admin'
  scope: 'global' | 'department' | 'project' | 'personal'
  conditions?: PermissionCondition[]
}

interface PermissionCondition {
  field: string
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than'
  value: any
}

interface UserSession {
  id: string
  user_id: string
  ip_address: string
  device: string
  browser: string
  location: string
  login_time: string
  last_activity: string
  status: 'active' | 'expired' | 'terminated'
  session_duration: number
  security_flags: string[]
  risk_score: number
}

interface SecurityEvent {
  id: string
  type: 'login' | 'logout' | 'password_change' | 'mfa_setup' | 'mfa_verification' | 'permission_denied' | 'data_access' | 'security_violation' | 'malware_detected' | 'unauthorized_access'
  severity: 'low' | 'medium' | 'high' | 'critical'
  user_id?: string
  user_email?: string
  ip_address: string
  device: string
  location: string
  timestamp: string
  description: string
  details: Record<string, any>
  resolved: boolean
  resolved_by?: string
  resolved_at?: string
  mitigation_actions: string[]
}

interface MonetizationPlan {
  id: string
  name: string
  tier: 'starter' | 'pro' | 'studio' | 'enterprise'
  price: number
  billing_cycle: 'monthly' | 'annual'
  currency: string
  features: PlanFeature[]
  limits: PlanLimit[]
  add_ons: AddOn[]
  discounts: Discount[]
  trial_days: number
  setup_fee: number
  support_level: 'basic' | 'priority' | 'premium' | 'dedicated'
  sla_guarantee: string
  custom_pricing: boolean
}

interface PlanFeature {
  id: string
  name: string
  description: string
  included: boolean
  limit?: number
  tier_required?: string
}

interface PlanLimit {
  resource: string
  limit: number
  unit: string
  overage_rate?: number
}

interface AddOn {
  id: string
  name: string
  description: string
  price: number
  billing_cycle: 'monthly' | 'annual'
  features: string[]
  compatible_tiers: string[]
}

interface Discount {
  id: string
  name: string
  type: 'percentage' | 'fixed' | 'volume'
  value: number
  conditions: DiscountCondition[]
  valid_until?: string
  usage_based: boolean
}

interface DiscountCondition {
  field: string
  operator: 'greater_than' | 'less_than' | 'equals'
  value: any
}

interface Subscription {
  id: string
  user_id: string
  plan_id: string
  status: 'active' | 'trial' | 'expired' | 'cancelled' | 'suspended'
  start_date: string
  end_date: string
  billing_cycle: 'monthly' | 'annual'
  amount: number
  currency: string
  auto_renew: boolean
  usage: SubscriptionUsage[]
  add_ons: SubscriptionAddOn[]
  payment_method: PaymentMethod
  next_billing_date: string
  trial_ends_at?: string
  cancelled_at?: string
  cancellation_reason?: string
}

interface SubscriptionUsage {
  resource: string
  used: number
  limit: number
  unit: string
  period: string
  overage_charges: number
}

interface SubscriptionAddOn {
  add_on_id: string
  name: string
  price: number
  billing_cycle: 'monthly' | 'annual'
  active: boolean
  start_date: string
  end_date: string
}

interface PaymentMethod {
  id: string
  type: 'credit_card' | 'bank_transfer' | 'paypal' | 'stripe' | 'wire'
  provider: string
  last_four?: string
  expiry_date?: string
  is_default: boolean
  status: 'active' | 'expired' | 'failed'
  created_at: string
}

interface Revenue {
  id: string
  source: 'subscription' | 'usage' | 'add_on' | 'setup_fee' | 'custom' | 'commission' | 'marketplace'
  amount: number
  currency: string
  period: string
  user_id?: string
  subscription_id?: string
  project_id?: string
  status: 'pending' | 'confirmed' | 'failed' | 'refunded'
  payment_method: string
  transaction_id: string
  created_at: string
  metadata: Record<string, any>
}

export default function EnterpriseSecurityLayer() {
  const [selectedTab, setSelectedTab] = useState('users')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')
  const [selectedTier, setSelectedTier] = useState('all')

  const [users] = useState<User[]>([
    {
      id: '1',
      email: 'admin@filmos.com',
      name: 'System Administrator',
      role: 'super_admin',
      department: 'IT',
      avatar: '/api/placeholder/100/100',
      status: 'active',
      last_login: '2024-03-20T14:30:00Z',
      created_at: '2024-01-01T00:00:00Z',
      permissions: [],
      sessions: [
        {
          id: '1-1',
          user_id: '1',
          ip_address: '192.168.1.100',
          device: 'MacBook Pro',
          browser: 'Chrome 120',
          location: 'San Francisco, CA',
          login_time: '2024-03-20T14:30:00Z',
          last_activity: '2024-03-20T16:45:00Z',
          status: 'active',
          session_duration: 8100,
          security_flags: [],
          risk_score: 5
        }
      ],
      mfa_enabled: true,
      mfa_methods: ['authenticator', 'sms'],
      password_expires: '2024-04-20T00:00:00Z',
      account_locked: false,
      two_factor_recovery: 'admin@filmos.com',
      security_score: 95,
      risk_level: 'low'
    },
    {
      id: '2',
      email: 'producer@filmos.com',
      name: 'John Producer',
      role: 'producer',
      department: 'Production',
      avatar: '/api/placeholder/100/100',
      status: 'active',
      last_login: '2024-03-20T12:15:00Z',
      created_at: '2024-01-15T00:00:00Z',
      permissions: [],
      sessions: [
        {
          id: '2-1',
          user_id: '2',
          ip_address: '203.0.113.10',
          device: 'iPhone 14 Pro',
          browser: 'Safari 17',
          location: 'Los Angeles, CA',
          login_time: '2024-03-20T12:15:00Z',
          last_activity: '2024-03-20T15:30:00Z',
          status: 'active',
          session_duration: 11700,
          security_flags: ['new_device'],
          risk_score: 15
        }
      ],
      mfa_enabled: true,
      mfa_methods: ['sms', 'authenticator'],
      password_expires: '2024-04-15T00:00:00Z',
      account_locked: false,
      two_factor_recovery: 'producer@filmos.com',
      security_score: 85,
      risk_level: 'medium'
    },
    {
      id: '3',
      email: 'director@filmos.com',
      name: 'Jane Director',
      role: 'director',
      department: 'Creative',
      avatar: '/api/placeholder/100/100',
      status: 'active',
      last_login: '2024-03-19T18:45:00Z',
      created_at: '2024-02-01T00:00:00Z',
      permissions: [],
      sessions: [
        {
          id: '3-1',
          user_id: '3',
          ip_address: '198.51.100.10',
          device: 'Dell XPS 15',
          browser: 'Firefox 123',
          location: 'New York, NY',
          login_time: '2024-03-19T18:45:00Z',
          last_activity: '2024-03-19T22:30:00Z',
          status: 'active',
          session_duration: 13500,
          security_flags: [],
          risk_score: 10
        }
      ],
      mfa_enabled: false,
      mfa_methods: ['email'],
      password_expires: '2024-04-10T00:00:00Z',
      account_locked: false,
      two_factor_recovery: 'director@filmos.com',
      security_score: 75,
      risk_level: 'medium'
    }
  ])

  const [securityEvents] = useState<SecurityEvent[]>([
    {
      id: '1',
      type: 'login',
      severity: 'low',
      user_id: '1',
      user_email: 'admin@filmos.com',
      ip_address: '192.168.1.100',
      device: 'MacBook Pro',
      browser: 'Chrome 120',
      location: 'San Francisco, CA',
      timestamp: '2024-03-20T14:30:00Z',
      description: 'Successful login from known device',
      details: { device_trusted: true, location_known: true },
      resolved: true,
      resolved_by: 'system',
      resolved_at: '2024-03-20T14:30:00Z',
      mitigation_actions: []
    },
    {
      id: '2',
      type: 'login',
      severity: 'medium',
      user_id: '2',
      user_email: 'producer@filmos.com',
      ip_address: '203.0.113.10',
      device: 'iPhone 14 Pro',
      browser: 'Safari 17',
      location: 'Los Angeles, CA',
      timestamp: '2024-03-20T12:15:00Z',
      description: 'Login from new device - iPhone 14 Pro',
      details: { 
        first_time_device: true, 
        device_type: 'mobile' 
      },
      resolved: true,
      resolved_by: 'system',
      resolved_at: '2024-03-20T12:15:00Z',
      mitigation_actions: ['sent_security_alert', 'required_mfa_verification']
    },
    {
      id: '3',
      type: 'security_violation',
      severity: 'high',
      ip_address: '185.220.101.10',
      device: 'Unknown',
      browser: 'Unknown',
      location: 'Unknown',
      timestamp: '2024-03-20T10:30:00Z',
      description: 'Multiple failed login attempts detected',
      details: { 
        failed_attempts: 5,
        target_user: 'admin@filmos.com',
        source_ip: '185.220.101.10',
        attack_pattern: 'brute_force'
      },
      resolved: true,
      resolved_by: 'security_team',
      resolved_at: '2024-03-20T11:00:00Z',
      mitigation_actions: ['ip_blocked', 'account_locked_temporarily', 'security_alert_sent']
    }
  ])

  const [plans] = useState<MonetizationPlan[]>([
    {
      id: '1',
      name: 'Starter',
      tier: 'starter',
      price: 99,
      billing_cycle: 'monthly',
      currency: 'USD',
      features: [
        { id: '1-1', name: 'Basic Project Management', description: 'Up to 3 projects', included: true, limit: 3 },
        { id: '1-2', name: 'Script Analysis', description: 'AI-powered script analysis', included: true, limit: 10 },
        { id: '1-3', name: 'Budget Planning', description: 'Smart budget calculator', included: true, limit: 5 },
        { id: '1-4', name: 'Crew Marketplace', description: 'Access to crew database', included: true },
        { id: '1-5', name: 'Basic Support', description: 'Email support during business hours', included: true }
      ],
      limits: [
        { resource: 'projects', limit: 3, unit: 'projects' },
        { resource: 'users', limit: 5, unit: 'users' },
        { resource: 'storage', limit: 10, unit: 'GB', overage_rate: 0.10 },
        { resource: 'api_calls', limit: 1000, unit: 'calls/month', overage_rate: 0.05 }
      ],
      add_ons: [],
      discounts: [],
      trial_days: 14,
      setup_fee: 0,
      support_level: 'basic',
      sla_guarantee: '99% uptime',
      custom_pricing: false
    },
    {
      id: '2',
      name: 'Professional',
      tier: 'pro',
      price: 499,
      billing_cycle: 'monthly',
      currency: 'USD',
      features: [
        { id: '2-1', name: 'Advanced Project Management', description: 'Unlimited projects', included: true },
        { id: '2-2', name: 'Complete Pre-Production Suite', description: 'All AI tools included', included: true },
        { id: '2-3', name: 'Production Management', description: 'Full production tools', included: true },
        { id: '2-4', name: 'Financing Platform', description: 'Investor portal and tracking', included: true },
        { id: '2-5', name: 'Distribution Marketplace', description: 'Rights management', included: true },
        { id: '2-6', name: 'AI Marketing Suite', description: 'Automated marketing tools', included: true },
        { id: '2-7', name: 'Priority Support', description: '24/7 phone and email support', included: true }
      ],
      limits: [
        { resource: 'projects', limit: 20, unit: 'projects' },
        { resource: 'users', limit: 25, unit: 'users' },
        { resource: 'storage', limit: 100, unit: 'GB', overage_rate: 0.08 },
        { resource: 'api_calls', limit: 10000, unit: 'calls/month', overage_rate: 0.03 }
      ],
      add_ons: [
        {
          id: '2-add-1',
          name: 'Additional Storage',
          price: 50,
          billing_cycle: 'monthly',
          features: ['100GB additional storage'],
          compatible_tiers: ['pro', 'studio', 'enterprise']
        }
      ],
      discounts: [
        {
          id: '2-dis-1',
          name: 'Annual Discount',
          type: 'percentage',
          value: 20,
          conditions: [
            { field: 'billing_cycle', operator: 'equals', value: 'annual' }
          ],
          usage_based: false,
          valid_until: '2024-12-31'
        }
      ],
      trial_days: 30,
      setup_fee: 500,
      support_level: 'priority',
      sla_guarantee: '99.9% uptime',
      custom_pricing: false
    },
    {
      id: '3',
      name: 'Studio',
      tier: 'studio',
      price: 1999,
      billing_cycle: 'monthly',
      currency: 'USD',
      features: [
        { id: '3-1', name: 'Complete Platform Access', description: 'All features included', included: true },
        { id: '3-2', name: 'Enterprise Security', description: 'Advanced security features', included: true },
        { id: '3-3', name: 'Custom Integrations', description: 'API access and integrations', included: true },
        { id: '3-4', name: 'White-Label Options', description: 'Custom branding available', included: true },
        { id: '3-5', name: 'Dedicated Account Manager', description: 'Personalized support', included: true },
        { id: '3-6', name: 'Premium Support', description: '24/7 dedicated support', included: true }
      ],
      limits: [
        { resource: 'projects', limit: 100, unit: 'projects' },
        { resource: 'users', limit: 100, unit: 'users' },
        { resource: 'storage', limit: 1000, unit: 'GB', overage_rate: 0.05 },
        { resource: 'api_calls', limit: 100000, unit: 'calls/month', overage_rate: 0.02 }
      ],
      add_ons: [
        {
          id: '3-add-1',
          name: 'Additional Users',
          price: 25,
          billing_cycle: 'monthly',
          features: ['5 additional user licenses'],
          compatible_tiers: ['studio', 'enterprise']
        },
        {
          id: '3-add-2',
          name: 'Advanced Analytics',
          price: 200,
          billing_cycle: 'monthly',
          features: ['Custom analytics reports', 'Predictive insights'],
          compatible_tiers: ['studio', 'enterprise']
        }
      ],
      discounts: [
        {
          id: '3-dis-1',
          name: 'Volume Discount',
          type: 'percentage',
          value: 15,
          conditions: [
            { field: 'billing_cycle', operator: 'equals', value: 'annual' },
            { field: 'user_count', operator: 'greater_than', value: 50 }
          ],
          usage_based: true,
          valid_until: '2024-12-31'
        }
      ],
      trial_days: 60,
      setup_fee: 1000,
      support_level: 'premium',
      sla_guarantee: '99.95% uptime',
      custom_pricing: true
    },
    {
      id: '4',
      name: 'Enterprise',
      tier: 'enterprise',
      price: 0,
      billing_cycle: 'monthly',
      currency: 'USD',
      features: [
        { id: '4-1', name: 'Unlimited Everything', description: 'No limits on any feature', included: true },
        { id: '4-2', name: 'Custom Development', description: 'Tailored features and integrations', included: true },
        { id: '4-3', name: 'On-Premise Deployment', description: 'Self-hosted option available', included: true },
        { id: '4-4', name: 'Enterprise Support', description: '24/7 dedicated support team', included: true },
        { id: '4-5', name: 'Custom SLA', description: 'Tailored service level agreements', included: true }
      ],
      limits: [
        { resource: 'projects', limit: -1, unit: 'unlimited' },
        { resource: 'users', limit: -1, unit: 'unlimited' },
        { resource: 'storage', limit: -1, unit: 'unlimited' },
        { resource: 'api_calls', limit: -1, unit: 'unlimited' }
      ],
      add_ons: [],
      discounts: [],
      trial_days: 90,
      setup_fee: 5000,
      support_level: 'dedicated',
      sla_guarantee: '99.99% uptime',
      custom_pricing: true
    }
  ])

  const [subscriptions] = useState<Subscription[]>([
    {
      id: '1',
      user_id: '1',
      plan_id: '3',
      status: 'active',
      start_date: '2024-01-01T00:00:00Z',
      end_date: '2024-12-31T00:00:00Z',
      billing_cycle: 'annual',
      amount: 19190,
      currency: 'USD',
      auto_renew: true,
      usage: [
        { resource: 'projects', used: 45, limit: 100, unit: 'projects', period: 'monthly', overage_charges: 0 },
        { resource: 'users', used: 78, limit: 100, unit: 'users', period: 'monthly', overage_charges: 0 },
        { resource: 'storage', used: 850, limit: 1000, unit: 'GB', period: 'monthly', overage_charges: 0 }
      ],
      add_ons: [
        {
          add_on_id: '3-add-1',
          name: 'Additional Users',
          price: 25,
          billing_cycle: 'monthly',
          active: true,
          start_date: '2024-02-01T00:00:00Z',
          end_date: '2024-12-31T00:00:00Z'
        }
      ],
      payment_method: {
        id: '1',
        type: 'credit_card',
        provider: 'Stripe',
        last_four: '4242',
        expiry_date: '2025-12-31',
        is_default: true,
        status: 'active',
        created_at: '2024-01-01T00:00:00Z'
      },
      next_billing_date: '2024-12-31T00:00:00Z'
    },
    {
      id: '2',
      user_id: '2',
      plan_id: '2',
      status: 'active',
      start_date: '2024-02-15T00:00:00Z',
      end_date: '2024-08-15T00:00:00Z',
      billing_cycle: 'monthly',
      amount: 499,
      currency: 'USD',
      auto_renew: true,
      usage: [
        { resource: 'projects', used: 8, limit: 20, unit: 'projects', period: 'monthly', overage_charges: 0 },
        { resource: 'users', used: 12, limit: 25, unit: 'users', period: 'monthly', overage_charges: 0 },
        { resource: 'storage', used: 45, limit: 100, unit: 'GB', period: 'monthly', overage_charges: 0 }
      ],
      add_ons: [],
      payment_method: {
        id: '2',
        type: 'credit_card',
        provider: 'Stripe',
        last_four: '5555',
        expiry_date: '2024-11-30',
        is_default: true,
        status: 'active',
        created_at: '2024-02-15T00:00:00Z'
      },
      next_billing_date: '2024-04-15T00:00:00Z'
    }
  ])

  const [revenue] = useState<Revenue[]>([
    {
      id: '1',
      source: 'subscription',
      amount: 19190,
      currency: 'USD',
      period: '2024-03',
      user_id: '1',
      subscription_id: '1',
      status: 'confirmed',
      payment_method: 'Stripe',
      transaction_id: 'txn_123456789',
      created_at: '2024-03-01T00:00:00Z',
      metadata: { plan: 'Studio', billing_cycle: 'annual' }
    },
    {
      id: '2',
      source: 'subscription',
      amount: 499,
      currency: 'USD',
      period: '2024-03',
      user_id: '2',
      subscription_id: '2',
      status: 'confirmed',
      payment_method: 'Stripe',
      transaction_id: 'txn_123456790',
      created_at: '2024-03-15T00:00:00Z',
      metadata: { plan: 'Professional', billing_cycle: 'monthly' }
    },
    {
      id: '3',
      source: 'add_on',
      amount: 25,
      currency: 'USD',
      period: '2024-03',
      user_id: '1',
      subscription_id: '1',
      status: 'confirmed',
      payment_method: 'Stripe',
      transaction_id: 'txn_123456791',
      created_at: '2024-03-01T00:00:00Z',
      metadata: { add_on: 'Additional Users', billing_cycle: 'monthly' }
    },
    {
      id: '4',
      source: 'setup_fee',
      amount: 500,
      currency: 'USD',
      period: '2024-02',
      user_id: '2',
      status: 'confirmed',
      payment_method: 'Wire Transfer',
      transaction_id: 'wire_123456789',
      created_at: '2024-02-15T00:00:00Z',
      metadata: { plan: 'Professional', type: 'setup_fee' }
    }
  ])

  const totalUsers = users.length
  const activeUsers = users.filter(u => u.status === 'active').length
  const highRiskUsers = users.filter(u => u.risk_level === 'high' || u.risk_level === 'critical').length
  const totalSecurityEvents = securityEvents.length
  const criticalEvents = securityEvents.filter(e => e.severity === 'critical').length
  const totalRevenue = revenue.reduce((sum, rev) => sum + rev.amount, 0)
  const activeSubscriptions = subscriptions.filter(s => s.status === 'active').length
  const mrr = subscriptions
    .filter(s => s.status === 'active')
    .reduce((sum, sub) => sum + (sub.billing_cycle === 'monthly' ? sub.amount : sub.amount / 12), 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'confirmed': case 'resolved': case 'verified':
        return 'text-green-400 bg-green-900/20'
      case 'pending': case 'warning':
        return 'text-yellow-400 bg-yellow-900/20'
      case 'inactive': case 'suspended': case 'expired': case 'failed': case 'cancelled':
        return 'text-red-400 bg-red-900/20'
      default:
        return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-900/20'
      case 'high': return 'text-orange-400 bg-orange-900/20'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20'
      case 'low': return 'text-green-400 bg-green-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin': return <Crown className="h-4 w-4" />
      case 'admin': return <Shield className="h-4 w-4" />
      case 'producer': return <Film className="h-4 w-4" />
      case 'director': return <Camera className="h-4 w-4" />
      case 'crew': return <Users className="h-4 w-4" />
      case 'viewer': return <Eye className="h-4 w-4" />
      case 'external': return <Globe className="h-4 w-4" />
      default: return <User className="h-4 w-4" />
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'login': return <LogIn className="h-4 w-4" />
      case 'logout': return <LogOut className="h-4 w-4" />
      case 'password_change': return <Key className="h-4 w-4" />
      case 'mfa_setup': return <Shield className="h-4 w-4" />
      case 'mfa_verification': return <ShieldCheck className="h-4 w-4" />
      case 'permission_denied': return <Ban className="h-4 w-4" />
      case 'data_access': return <Database className="h-4 w-4" />
      case 'security_violation': return <ShieldAlert className="h-4 w-4" />
      case 'malware_detected': return <AlertTriangle className="h-4 w-4" />
      case 'unauthorized_access': return <ShieldOff className="h-4 w-4" />
      default: return <Bell className="h-4 w-4" />
    }
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return 'text-blue-400 bg-blue-900/20'
      case 'pro': return 'text-purple-400 bg-purple-900/20'
      case 'studio': return 'text-orange-400 bg-orange-900/20'
      case 'enterprise': return 'text-red-400 bg-red-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-900/20'
      case 'high': return 'text-orange-400 bg-orange-900/20'
      case 'medium': return 'text-yellow-400 bg-yellow-900/20'
      case 'low': return 'text-green-400 bg-green-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'all' || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  const handleCreateUser = () => {
    // Handle user creation
    console.log('Create user')
  }

  const handleSecurityAction = (eventId: string, action: string) => {
    // Handle security event actions
    console.log('Security action:', eventId, action)
  }

  const handleUpgradePlan = (userId: string, newPlanId: string) => {
    // Handle plan upgrade
    console.log('Upgrade plan:', userId, newPlanId)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Enterprise Security & Monetization</h2>
          <p className="text-slate-400">Advanced security controls and flexible pricing plans</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Users</p>
                <p className="text-white font-semibold text-lg">{totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Users</p>
                <p className="text-white font-semibold text-lg">{activeUsers}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Monthly Revenue</p>
                <p className="text-white font-semibold text-lg">${(mrr / 1000).toFixed(1)}K</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Security Score</p>
                <p className="text-white font-semibold">92%</p>
              </div>
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="plans">Pricing Plans</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          {/* User Management */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">User Management</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button size="sm" onClick={handleCreateUser}>
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Card key={user.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {getRoleIcon(user.role)}
                        <h3 className="text-white font-semibold">{user.name}</h3>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(user.status)}`}>
                          {user.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">{user.email}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-slate-400">{user.department}</span>
                        <Badge variant={getRiskLevelColor(user.risk_level)} className="text-xs">
                          {user.risk_level}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{user.security_score}%</p>
                      <p className="text-slate-400 text-sm">Security Score</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* User Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Last Login</p>
                      <p className="text-white">{new Date(user.last_login).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Created</p>
                      <p className="text-white">{new Date(user.created_at).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">MFA</p>
                      <p className="text-white">
                        {user.mfa_enabled ? (
                          <span className="text-green-400">Enabled</span>
                        ) : (
                          <span className="text-red-400">Disabled</span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400">Sessions</p>
                      <p className="text-white">{user.sessions.length} active</p>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  {user.sessions.length > 0 && (
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Active Sessions</p>
                      <div className="space-y-2">
                        {user.sessions.slice(0, 2).map((session) => (
                          <div key={session.id} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                            <div className="flex-1">
                              <p className="text-white text-sm">{session.device}</p>
                              <p className="text-slate-400 text-xs">{session.location}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white text-sm">{Math.floor(session.session_duration / 60)}m</p>
                              <p className="text-slate-400 text-xs">{session.risk_score} risk</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {user.status === 'active' ? (
                      <Button size="sm" variant="outline">
                        <Lock className="h-4 w-4 mr-2" />
                        Lock
                      </Button>
                    ) : (
                      <Button size="sm">
                        <Unlock className="h-4 w-4 mr-2" />
                        Unlock
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Events */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Security Events</CardTitle>
                <CardDescription>Real-time security monitoring and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {securityEvents.map((event) => (
                      <div key={event.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              {getEventTypeIcon(event.type)}
                              <h3 className="text-white font-semibold capitalize">{event.type}</h3>
                              <Badge variant={getSeverityColor(event.severity)} className="text-xs">
                                {event.severity}
                              </Badge>
                            </div>
                            <p className="text-slate-300 text-sm">{event.description}</p>
                            {event.user_email && (
                              <p className="text-slate-400 text-xs">User: {event.user_email}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{new Date(event.timestamp).toLocaleString()}</p>
                            <p className="text-slate-400 text-sm">{event.location}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">IP Address</p>
                            <p className="text-white font-medium">{event.ip_address}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Device</p>
                            <p className="text-white font-medium">{event.device}</p>
                          </div>
                        </div>

                        {event.details && Object.keys(event.details).length > 0 && (
                          <div className="mb-3">
                            <p className="text-slate-400 text-sm mb-2">Details</p>
                            <div className="space-y-1">
                              {Object.entries(event.details).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-sm">
                                  <span className="text-slate-400 capitalize">{key}:</span>
                                  <span className="text-white">{JSON.stringify(value)}</span>
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
                          {!event.resolved && (
                            <Button size="sm">
                              <Shield className="h-3 w-3" />
                              Resolve
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Security Policies */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Security Policies</CardTitle>
                <CardDescription>Active security policies and enforcement rules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <ShieldCheck className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-medium">Password Policy</span>
                      <Badge variant="secondary" className="text-xs">Active</Badge>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">Strong password requirements with MFA enforcement</p>
                    <div className="text-sm space-y-1">
                      <p className="text-white">• Minimum 12 characters with complexity</p>
                      <p className="text-white">• MFA required for all admin users</p>
                      <p className="text-white">• Password expires every 90 days</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400 font-medium">Session Policy</span>
                      <Badge variant="secondary" className="text-xs">Active</Badge>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">Session timeout and concurrent session limits</p>
                    <div className="text-sm space-y-1">
                      <p className="text-white">• 8-hour session timeout</p>
                      <p className="text-white">• Maximum 3 concurrent sessions per user</p>
                      <p className="text-white">• Automatic logout on inactivity</p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <ShieldAlert className="h-4 w-4 text-orange-400" />
                      <span className="text-orange-400 font-medium">Access Policy</span>
                      <Badge variant="secondary" className="text-xs">Active</Badge>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">Role-based access control with least privilege</p>
                    <div className="text-sm space-y-1">
                      <p className="text-white">• Role-based permissions enforced</p>
                      <p className="text-white">• Regular access reviews required</p>
                      <p className="text-white">• Emergency access procedures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant={getTierColor(plan.tier)} className="text-xs">
                          {plan.tier.toUpperCase()}
                        </Badge>
                        <h3 className="text-white font-semibold">{plan.name}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-lg">${plan.price}</span>
                        <span className="text-slate-400 text-sm">/{plan.billing_cycle}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">
                        {plan.custom_pricing ? 'Custom' : `$${plan.price * 12}`}
                      </p>
                      <p className="text-slate-400 text-sm">Annual</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Plan Features */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Features</p>
                    <div className="space-y-2">
                      {plan.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                          <div className="flex-1">
                            <p className="text-white text-sm">{feature.name}</p>
                            <p className="text-slate-400 text-xs">{feature.description}</p>
                          </div>
                          <div className="text-right">
                            {feature.included ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <X className="h-4 w-4 text-red-400" />
                            )}
                          </div>
                        </div>
                      ))}
                      {plan.features.length > 4 && (
                        <p className="text-slate-400 text-xs">+{plan.features.length - 4} more features</p>
                      )}
                    </div>
                  </div>

                  {/* Plan Limits */}
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Limits</p>
                    <div className="space-y-2">
                      {plan.limits.map((limit, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-white capitalize">{limit.resource}</span>
                          <span className="text-white">
                            {limit.limit === -1 ? 'Unlimited' : `${limit.limit} ${limit.unit}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  {plan.add_ons.length > 0 && (
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Available Add-ons</p>
                      <div className="space-y-2">
                        {plan.add_ons.slice(0, 2).map((addOn, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                            <div className="flex-1">
                              <p className="text-white text-sm">{addOn.name}</p>
                              <p className="text-slate-400 text-xs">${addOn.price}/{addOn.billing_cycle}</p>
                            </div>
                            <Button size="sm" variant="outline">
                              <Plus className="h-3 w-3" />
                              Add
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Target className="h-4 w-4 mr-2" />
                      {plan.custom_pricing ? 'Contact Sales' : 'Choose Plan'}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                      Compare
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subscriptions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Active Subscriptions</CardTitle>
                <CardDescription>Current subscription status and billing information</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {subscriptions.map((subscription) => (
                      <div key={subscription.id} className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant={getTierColor(plans.find(p => p.id === subscription.plan_id)?.tier || 'starter')} className="text-xs">
                                {plans.find(p => p.id === subscription.plan_id)?.name}
                              </Badge>
                              <Badge variant={getStatusColor(subscription.status)} className="text-xs">
                                {subscription.status}
                              </Badge>
                            </div>
                            <p className="text-white font-semibold">
                              ${subscription.amount}/{subscription.billing_cycle}
                            </p>
                            <p className="text-slate-400 text-sm">
                              Next billing: {new Date(subscription.next_billing_date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">
                              {new Date(subscription.end_date).toLocaleDateString()}
                            </p>
                            <p className="text-slate-400 text-sm">End Date</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-slate-400">Billing Cycle</p>
                            <p className="text-white capitalize">{subscription.billing_cycle}</p>
                          </div>
                          <div>
                            <p className="text-slate-400">Auto Renew</p>
                            <p className="text-white">{subscription.auto_renew ? 'Yes' : 'No'}</p>
                          </div>
                        </div>

                        {/* Usage */}
                        <div className="mb-3">
                          <p className="text-slate-400 text-sm mb-2">Usage</p>
                          <div className="space-y-2">
                            {subscription.usage.map((usage, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                                <div className="flex-1">
                                  <p className="text-white text-sm">{usage.resource}</p>
                                  <p className="text-slate-400 text-xs">{usage.used}/{usage.limit} {usage.unit}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-white font-medium">
                                    {Math.round((usage.used / usage.limit) * 100)}%
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Add-ons */}
                        {subscription.add_ons.length > 0 && (
                          <div className="mb-3">
                            <p className="text-slate-400 text-sm mb-2">Add-ons</p>
                            <div className="space-y-2">
                              {subscription.add_ons.map((addOn, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-slate-700/50 rounded">
                                  <div className="flex-1">
                                    <p className="text-white text-sm">{addOn.name}</p>
                                    <p className="text-slate-400 text-xs">${addOn.price}/{addOn.billing_cycle}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-white font-medium">
                                      {addOn.active ? 'Active' : 'Inactive'}
                                    </p>
                                  </div>
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
                          <Button size="sm">
                            <Edit className="h-3 w-3" />
                            Modify
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Revenue */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue Overview</CardTitle>
                <CardDescription>Subscription revenue and payment tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-medium">Monthly Recurring Revenue (MRR)</span>
                      <span className="text-white font-semibold">${(mrr / 1000).toFixed(1)}K</span>
                    </div>
                    <p className="text-slate-300 text-sm">From {activeSubscriptions} active subscriptions</p>
                  </div>

                  <div className="space-y-3">
                    {['subscription', 'add_on', 'setup_fee', 'custom'].map((source) => {
                      const sourceRevenue = revenue.filter(r => r.source === source)
                      const total = sourceRevenue.reduce((sum, rev) => sum + rev.amount, 0)
                      return (
                        <div key={source} className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-white font-medium capitalize">{source}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">${(total / 1000).toFixed(1)}K</p>
                            <p className="text-slate-400 text-sm">{sourceRevenue.length} transactions</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Analytics */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">User Analytics</CardTitle>
                <CardDescription>User growth, engagement, and security metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <span className="text-white font-medium">User Growth</span>
                    <span className="text-white font-semibold">+15% this month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <span className="text-white font-medium">Security Score</span>
                    <span className="text-white font-semibold">92% average</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <span className="text-white font-medium">MFA Adoption</span>
                    <span className="text-white font-semibold">78% enabled</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded">
                    <span className="text-white font-medium">Session Duration</span>
                    <span className="text-white font-semibold">4.2 hours average</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Analytics */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Financial Analytics</CardTitle>
                <CardDescription>Revenue, churn, and financial health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-700/50 rounded">
                    <span className="text-green-400 font-medium">Churn Rate</span>
                    <span className="text-white font-semibold">2.3% monthly</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                    <span className="text-blue-400 font-medium">Customer Lifetime Value</span>
                    <span className="text-white font-semibold">$24,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                    <span className="text-purple-400 font-medium">Annual Contract Value</span>
                    <span className="text-white font-semibold">$23,988</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-900/20 border border-orange-700/50 rounded">
                    <span className="text-orange-400 font-medium">Revenue Growth</span>
                    <span className="text-white font-semibold">+23% YoY</span>
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