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
    title: 'Gräsklippning',
    description:
      'Konsekvent, ren klippning som håller din gräsmatta frisk och presentabel hela säsongen.',
    icon: FaTractor,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'grass-cutting',
    title: 'Gräsklippning med kanter',
    description:
      'Rena kanter och jämna klipp för ett polerat utseende runt stigar, rabatter och staket.',
    icon: FaLeaf,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'garden-maintenance',
    title: 'Trädgårdsunderhåll',
    description:
      'Löpande vård av rabatter, ogräs, kanter och säsongsuppgifter—anpassat till din fastighet.',
    icon: FaBroom,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'hedge-trimming',
    title: 'Häckklippning',
    description:
      'Krispig, professionell häckformning för integritet, säkerhet och fastighetens värde.',
    icon: GiGardeningShears,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'tree-pruning',
    title: 'Trädbeskärning',
    description:
      'Selektiv beskärning för att förbättra struktur, ljus och säkerhet samtidigt som trädens hälsa skyddas.',
    icon: FaTree,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'landscaping',
    title: 'Trädgårdsdesign',
    description:
      'Plantering, rabattdesign, grus och små utomhusuppgraderingar med en ren nordisk finish.',
    icon: FaTools,
    group: 'Trädgårdsskötsel',
  },
  {
    id: 'seasonal-cleanup',
    title: 'Säsongs trädgårdsrensning',
    description:
      'Vår- och höstrensningar för rabatter, terrasser och grönt avfall—snabbt och grundligt.',
    icon: FaBroom,
    group: 'Säsongsarbete',
  },
  {
    id: 'leaf-removal',
    title: 'Lövborttagning',
    description:
      'Håll stigar och gräsmattor rena och säkra med effektiv insamling och bortskaffande.',
    icon: FaLeaf,
    group: 'Säsongsarbete',
  },
  {
    id: 'snow-plowing',
    title: 'Snöplogning',
    description:
      'Tidsenlig plogning för uppfarter och tillfartsvägar—minskar stillestånd och risker.',
    icon: FaSnowplow,
    group: 'Vinter',
  },
  {
    id: 'snow-removal',
    title: 'Snöröjning',
    description:
      'Snöröjning för entréer, gångvägar och parkeringsområden med säkerhetsförsta rutiner.',
    icon: FaSnowplow,
    group: 'Vinter',
  },
  {
    id: 'business-property-maintenance',
    title: 'Fastighetsunderhåll för företag',
    description:
      'Pålitligt utomhusunderhåll för kommersiella platser med förutsägbara scheman och rapportering.',
    icon: FaBuilding,
    group: 'Kommersiellt',
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

