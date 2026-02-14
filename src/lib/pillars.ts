export const PILLARS = {
  clarity: {
    name: 'Clarity',
    quote: "People can't steward what they can't see.",
    description: 'See where your money actually goes.',
    colors: { light: 'blue-50', accent: 'blue-600', border: 'blue-500' },
  },
  order: {
    name: 'Order',
    quote: 'The order you assign your dollars reveals the order you assign your values.',
    description: 'Put first things first.',
    colors: { light: 'purple-50', accent: 'purple-600', border: 'purple-500' },
  },
  margin: {
    name: 'Margin',
    quote: "Margin isn't what's left over. It's what you protect on purpose.",
    description: 'Build financial breathing room.',
    colors: { light: 'storehouse-50', accent: 'storehouse-600', border: 'storehouse-500' },
  },
  peace: {
    name: 'Peace',
    quote: "Financial peace isn't the absence of problems. It's the presence of a plan.",
    description: 'Replace anxiety with confidence.',
    colors: { light: 'cyan-50', accent: 'cyan-600', border: 'cyan-500' },
  },
} as const;

export type PillarKey = keyof typeof PILLARS;
export const PILLAR_ORDER: PillarKey[] = ['margin', 'clarity', 'order', 'peace'];
