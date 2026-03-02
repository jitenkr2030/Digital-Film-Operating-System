/**
 * FilmOS - Digital Film Operating System
 * Core type definitions for the complete film production ecosystem
 */

export interface FilmProject {
  id: string;
  title: string;
  genre: string;
  status: 'pre-production' | 'production' | 'post-production' | 'distribution' | 'completed';
  budget: Budget;
  timeline: Timeline;
  team: CrewMember[];
  createdAt: Date;
  updatedAt: Date;
}

// Pre-Production Types
export interface Script {
  id: string;
  projectId: string;
  title: string;
  content: string;
  format: 'pdf' | 'doc' | 'txt';
  scenes: Scene[];
  characters: Character[];
  locations: Location[];
  metadata: ScriptMetadata;
}

export interface Scene {
  id: string;
  number: number;
  title: string;
  setting: string;
  characters: string[];
  dialogue: Dialogue[];
  action: string;
  complexity: number;
  estimatedDuration: number;
  budgetElements: BudgetElement[];
}

export interface Character {
  id: string;
  name: string;
  description: string;
  look: CharacterLook;
  dialogueCount: number;
  screenTime: number;
  casting: CastingInfo;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  type: 'interior' | 'exterior' | 'both';
  requirements: LocationRequirements;
  cost: number;
  availability: DateRange[];
}

export interface Storyboard {
  id: string;
  sceneId: string;
  panels: StoryboardPanel[];
  shotList: Shot[];
}

export interface StoryboardPanel {
  id: string;
  number: number;
  image?: string;
  description: string;
  shotType: string;
  cameraAngle: string;
  lighting: string;
  notes: string;
}

// Production Management Types
export interface ShootingSchedule {
  id: string;
  projectId: string;
  days: ShootingDay[];
  conflicts: ScheduleConflict[];
}

export interface ShootingDay {
  id: string;
  date: Date;
  scenes: string[];
  location: string;
  cast: string[];
  crew: string[];
  equipment: Equipment[];
  callTime: Date;
  wrapTime: Date;
}

export interface CrewMember {
  id: string;
  name: string;
  role: CrewRole;
  rate: number;
  availability: DateRange[];
  rating: number;
  verified: boolean;
}

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  costPerDay: number;
  availability: DateRange[];
  vendor: string;
}

// Financing Types
export interface Investment {
  id: string;
  projectId: string;
  investorId: string;
  amount: number;
  equityPercentage: number;
  status: 'pending' | 'approved' | 'funded' | 'completed';
  contractUrl: string;
  milestones: Milestone[];
}

export interface Revenue {
  id: string;
  projectId: string;
  source: RevenueSource;
  amount: number;
  date: Date;
  territory: string;
  rights: RightsType;
}

// Distribution Types
export interface Rights {
  id: string;
  projectId: string;
  type: RightsType;
  territory: string;
  exclusivity: boolean;
  duration: number;
  price: number;
  status: 'available' | 'optioned' | 'sold' | 'expired';
}

// Marketing Types
export interface Campaign {
  id: string;
  projectId: string;
  type: CampaignType;
  assets: MarketingAsset[];
  performance: CampaignPerformance;
  budget: number;
}

export interface MarketingAsset {
  id: string;
  type: 'trailer' | 'poster' | 'social' | 'press';
  url: string;
  metadata: AssetMetadata;
}

// Legal Types
export interface Contract {
  id: string;
  type: ContractType;
  parties: ContractParty[];
  terms: ContractTerms;
  status: 'draft' | 'review' | 'signed' | 'executed' | 'terminated';
  documentUrl: string;
}

// Supporting Types
export interface Budget {
  total: number;
  categories: BudgetCategory[];
  expenses: Expense[];
  contingency: number;
}

export interface BudgetElement {
  category: string;
  description: string;
  estimatedCost: number;
  actualCost?: number;
  priority: 'high' | 'medium' | 'low';
}

export interface Timeline {
  startDate: Date;
  endDate: Date;
  phases: ProjectPhase[];
}

export interface ScriptMetadata {
  genre: string;
  theme: string;
  tone: string;
  estimatedRuntime: number;
  locations: number;
  characters: number;
  complexity: number;
  emotionHeatmap: EmotionData[];
}

export interface EmotionData {
  scene: number;
  emotion: string;
  intensity: number;
}

export type CrewRole = 
  | 'director' | 'producer' | 'cinematographer' | 'editor' 
  | 'production_designer' | 'costume_designer' | 'sound_designer'
  | 'composer' | 'vfx_supervisor' | 'stunt_coordinator' | 'casting_director'
  | 'line_producer' | 'production_manager' | 'ad' | 'gaffer' | 'key_grip';

export type EquipmentType = 
  | 'camera' | 'lens' | 'lighting' | 'sound' | 'grip' 
  | 'electric' | 'specialty' | 'vehicle' | 'generator';

export type RevenueSource = 
  | 'theatrical' | 'streaming' | 'tv' | 'dvd' | 'merchandise' 
  | 'music' | 'international' | 'airline' | 'educational';

export type RightsType = 
  | 'theatrical' | 'streaming' | 'tv' | 'dvd' | 'international' 
  | 'remake' | 'sequel' | 'merchandise' | 'music';

export type CampaignType = 
  | 'theatrical_release' | 'streaming_launch' | 'festival_circuit'
  | 'awards_season' | 'international' | 'social_media';

export type ContractType = 
  | 'employment' | 'services' | 'rights_acquisition' | 'distribution'
  | 'investment' | 'nda' | 'location_release' | 'talent_agreement';

// Additional interfaces
export interface DateRange {
  start: Date;
  end: Date;
}

export interface CastingInfo {
  actor?: string;
  status: 'uncast' | 'auditioning' | 'offered' | 'cast';
  notes?: string;
}

export interface CharacterLook {
  age: string;
  gender: string;
  ethnicity: string;
  style: string;
  features: string;
  referenceImages?: string[];
}

export interface LocationRequirements {
  space: number;
  power: boolean;
  parking: boolean;
  facilities: string[];
  restrictions: string[];
}

export interface Shot {
  id: string;
  number: number;
  type: string;
  angle: string;
  movement: string;
  duration: number;
  description: string;
}

export interface ScheduleConflict {
  type: 'cast' | 'location' | 'equipment' | 'crew';
  description: string;
  severity: 'low' | 'medium' | 'high';
  resolution?: string;
}

export interface Milestone {
  id: string;
  description: string;
  dueDate: Date;
  amount: number;
  status: 'pending' | 'completed' | 'overdue';
}

export interface BudgetCategory {
  name: string;
  budgeted: number;
  spent: number;
  remaining: number;
  items: BudgetElement[];
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: Date;
  approvedBy: string;
  receiptUrl?: string;
}

export interface ProjectPhase {
  name: string;
  startDate: Date;
  endDate: Date;
  status: 'not_started' | 'in_progress' | 'completed' | 'delayed';
  deliverables: string[];
}

export interface CampaignPerformance {
  impressions: number;
  engagement: number;
  conversions: number;
  roi: number;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface AssetMetadata {
  duration?: number;
  resolution?: string;
  format: string;
  size: number;
  tags: string[];
}

export interface ContractParty {
  id: string;
  name: string;
  role: string;
  signed: boolean;
  signatureDate?: Date;
}

export interface ContractTerms {
  duration: DateRange;
  compensation: CompensationTerm[];
  obligations: string[];
  terminationClauses: string[];
}

export interface CompensationTerm {
  type: 'fixed' | 'percentage' | 'milestone';
  amount: number;
  conditions: string[];
}

export interface Dialogue {
  character: string;
  text: string;
  emotion?: string;
  action?: string;
}