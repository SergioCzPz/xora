import {
  Detail,
  FAQ,
  Feature,
  Link,
  Logo,
  Plan,
  Social,
  Testimonial,
} from '@shared/types/types';

export const features: Feature[] = [
  {
    id: '0',
    icon: 'assets/images/feature-1.png',
    caption: 'Easy integration',
    title: 'Work smarter not harder',
    text: "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    button: {
      icon: 'assets/images/magictouch.svg',
      title: 'Watch the demo',
    },
  },
  {
    id: '1',
    icon: 'assets/images/feature-2.png',
    caption: 'Secure & trustworthy',
    title: 'Sleep easy, we got your back',
    text: 'Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.',
    button: {
      icon: 'assets/images/docs.svg',
      title: 'Read the docs',
    },
  },
];

export const details: Detail[] = [
  {
    id: '0',
    icon: 'assets/images/detail-1.png',
    title: 'AI automated video editing',
  },
  {
    id: '1',
    icon: 'assets/images/detail-2.png',
    title: 'Collaborate with your team',
  },
  {
    id: '2',
    icon: 'assets/images/detail-3.png',
    title: 'Ultra fast cloud-engine',
  },
  {
    id: '3',
    icon: 'assets/images/detail-4.png',
    title: '24 / 7 Customer support',
  },
];

export const faq: FAQ[] = [
  {
    id: '0',
    question: 'How easy is it to setup Xora?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '1',
    question: 'Can I integrate Xora with other platforms?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '2',
    question: 'How often do you add new content?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '3',
    question: 'What your refund policy?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '4',
    question: 'Do you have corporate plans?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '5',
    question: 'What happens when I’m out of storage?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '6',
    question: 'Can I upgrade my plan?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '7',
    question: 'How do I invite my team?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '8',
    question: 'Do you offer training for individuals and teams?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '9',
    question: 'I’m locked out of my account what do I do?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
];

export const plans: Plan[] = [
  {
    id: '0',
    title: 'Core',
    priceMonthly: 19,
    priceYearly: 12,
    caption: 'Best for solo creators',
    features: [
      '100MB Cloud storage',
      '100+ prompt templates',
      '5 projects',
      '24/7 support',
    ],
    icon: 'assets/images/circle.svg',
    logo: 'assets/images/plan-1.png',
  },
  {
    id: '1',
    title: 'Overdrive',
    priceMonthly: 79,
    priceYearly: 59,
    caption: 'Most popular plan',
    features: [
      'All Starter features',
      '1TB additional storage',
      'Unlimited projects',
      'Analytics',
    ],
    icon: 'assets/images/triangle.svg',
    logo: 'assets/images/plan-2.png',
  },
  {
    id: '2',
    title: 'Team',
    priceMonthly: 39,
    priceYearly: 29,
    caption: 'Exclusively for teams',
    features: [
      'All Overdrive features',
      '10TB additional storage',
      '50% off per member',
      'Real-time collaboration',
    ],
    icon: 'assets/images/hexagon.svg',
    logo: 'assets/images/plan-3.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '0',
    name: 'Jessica Saunders',
    role: 'Globalnomads',
    avatarUrl: 'assets/images/testimonials/jessica-saunders.png',
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: '1',
    name: 'Mark Erixon',
    role: 'Vid capital intl',
    avatarUrl: 'assets/images/testimonials/mark-erixon.png',
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: '2',
    name: 'Melanie Hurst',
    role: 'Cyberleap',
    avatarUrl: 'assets/images/testimonials/melanie-hurst.png',
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: '3',
    name: 'Alicia Barker',
    role: 'Cyberleap',
    avatarUrl: 'assets/images/testimonials/alicia-barker.png',
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: '4',
    name: 'Becky Snider',
    role: 'Floclips',
    avatarUrl: 'assets/images/testimonials/becky-snider.png',
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: '5',
    name: 'Jim Bradley',
    role: 'Vid capital intl',
    avatarUrl: 'assets/images/testimonials/jim-bradley.png',
    comment:
      'The efficiency boost is undeniable. This platform has transformed our workflow, forever.',
  },
];

export const logos: Logo[] = [
  {
    id: '0',
    title: 'Afterpay',
    url: 'assets/images/logos/afterpay.svg',
    width: 156,
    height: 48,
  },
  {
    id: '1',
    title: 'Amplitude',
    url: 'assets/images/logos/amplitude.svg',
    width: 194,
    height: 48,
  },
  {
    id: '2',
    title: 'Sonos',
    url: 'assets/images/logos/sonos.svg',
    width: 115,
    height: 48,
  },
  {
    id: '3',
    title: 'Maze',
    url: 'assets/images/logos/maze.svg',
    width: 142,
    height: 48,
  },
  {
    id: '4',
    title: 'Drips',
    url: 'assets/images/logos/drips.svg',
    width: 77,
    height: 48,
  },
];

export const links: Link[] = [
  {
    id: '0',
    title: 'Ios',
    url: '#',
  },
  {
    id: '1',
    title: 'Android',
    url: '#',
  },
  {
    id: '2',
    title: 'Windows',
    url: '#',
  },
  {
    id: '3',
    title: 'Web',
    url: '#',
  },
];

export const socials: Social[] = [
  {
    id: '0',
    title: 'x',
    icon: 'assets/images/socials/x.svg',
    url: '#',
  },
  {
    id: '1',
    title: 'Threads',
    icon: 'assets/images/socials/threads.svg',
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    icon: 'assets/images/socials/instagram.svg',
    url: '#',
  },
  {
    id: '3',
    title: 'Discord',
    icon: 'assets/images/socials/discord.svg',
    url: '#',
  },
];
