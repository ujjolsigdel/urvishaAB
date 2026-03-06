import { GiGardeningShears } from 'react-icons/gi'
import {
  FaLeaf,
  FaTractor,
  FaBroom,
  FaSnowplow,
  FaTools,
  FaBuilding,
  FaTree,
} from 'react-icons/fa'

export const services = [
  {
    id: 'lawn-mowing',
    title: 'Lawn mowing',
    description:
      'Consistent, clean mowing that keeps your lawn healthy and presentable all season.',
    icon: FaTractor,
    group: 'Gardening',
  },
  {
    id: 'grass-cutting',
    title: 'Grass cutting',
    description:
      'Neat edges and even cuts for a polished look around paths, beds, and fences.',
    icon: FaLeaf,
    group: 'Gardening',
  },
  {
    id: 'garden-maintenance',
    title: 'Garden maintenance',
    description:
      'Ongoing care for beds, weeds, borders, and seasonal tasks—tailored to your property.',
    icon: FaBroom,
    group: 'Gardening',
  },
  {
    id: 'hedge-trimming',
    title: 'Hedge trimming',
    description:
      'Crisp, professional hedge shaping for privacy, safety, and curb appeal.',
    icon: GiGardeningShears,
    group: 'Gardening',
  },
  {
    id: 'tree-pruning',
    title: 'Tree pruning',
    description:
      'Selective pruning to improve structure, light, and safety while protecting tree health.',
    icon: FaTree,
    group: 'Gardening',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description:
      'Planting, bed design, gravel, and small outdoor upgrades with a clean Nordic finish.',
    icon: FaTools,
    group: 'Gardening',
  },
  {
    id: 'seasonal-cleanup',
    title: 'Seasonal yard cleanup',
    description:
      'Spring and autumn cleanups for beds, patios, and green waste—fast and thorough.',
    icon: FaBroom,
    group: 'Seasonal',
  },
  {
    id: 'leaf-removal',
    title: 'Leaf removal',
    description:
      'Keep paths and lawns tidy and safe with efficient collection and disposal.',
    icon: FaLeaf,
    group: 'Seasonal',
  },
  {
    id: 'snow-plowing',
    title: 'Snow plowing',
    description:
      'Timely plowing for driveways and access roads—reducing downtime and risks.',
    icon: FaSnowplow,
    group: 'Winter',
  },
  {
    id: 'snow-removal',
    title: 'Snow removal',
    description:
      'Snow clearing for entrances, walkways, and parking areas with safety-first routines.',
    icon: FaSnowplow,
    group: 'Winter',
  },
  {
    id: 'business-property-maintenance',
    title: 'Property maintenance for businesses',
    description:
      'Reliable outdoor maintenance for commercial sites with predictable scheduling and reporting.',
    icon: FaBuilding,
    group: 'Commercial',
  },
]

export const featuredServiceIds = [
  'lawn-mowing',
  'garden-maintenance',
  'hedge-trimming',
  'landscaping',
  'snow-removal',
  'business-property-maintenance',
]

