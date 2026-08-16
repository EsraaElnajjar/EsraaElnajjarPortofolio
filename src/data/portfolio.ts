import groceryImage from '../assets/projects/project-grocery.png'
import salezeusImage from '../assets/projects/project-salezeus.png'
import bytelyImage from '../assets/projects/project-bytely.png'
import sorianaImage from '../assets/projects/project-soriana.png'
import yslamoAppImage from '../assets/projects/project-yslamo-app.png'
import yslamoDeliveryImage from '../assets/projects/project-yslamo-delivery.png'
import yslamoWebImage from '../assets/projects/project-yslamo-web.png'
import ostaImage from '../assets/projects/project-osta.png'
import gtlImage from '../assets/projects/project-gtl.png'
import donutImage from '../assets/projects/project-donut.png'
import oneKadoImage from '../assets/projects/project-onekado.png'
import charcoalImage from '../assets/projects/project-charcoal.png'
import booslaaImage from '../assets/projects/project-booslaa.png'
import skincareImage from '../assets/projects/project-skincare.png'
import rawasiImage from '../assets/projects/project-rawasi.png'
import salezeusLogo from '../assets/logos/salezeus.png'
import bytelyLogo from '../assets/logos/bytely.png'
import sorianaLogo from '../assets/logos/soriana.png'
import yslamoLogo from '../assets/logos/yslamo.jpeg'
import rawasiLogo from '../assets/logos/rawasi.svg'
import charcoalLogo from '../assets/logos/charcoal.svg'
import ostaLogo from '../assets/logos/osta.png'
import gtlLogo from '../assets/logos/gtl.png'
import donutLogo from '../assets/logos/donut.png'
import oneKadoLogo from '../assets/logos/onekado.png'
import booslaaLogo from '../assets/logos/booslaa.png'
import skincareLogo from '../assets/logos/skincare.png'
import groceryLogo from '../assets/logos/grocery.png'
import icpcCertificate from '../assets/icpc-certificate.png'

export type ProjectLink = {
  label: string
  href: string
}

export type PortfolioProject = {
  title: string
  description: string
  tech: string[]
  image?: string
  imageAlt?: string
  logo?: string
  logoBg?: 'light' | 'dark'
  logoTall?: boolean
  links: ProjectLink[]
}

export type CertificateItem = {
  title: string
  event: string
  issuer: string
  date: string
  result: string
  institution: string
  team: string[]
  image: string
  imageAlt: string
}

export type ExperienceItem = {
  role?: string
  company: string
  location: string
  period?: string
  description?: string
  bullets?: string[]
}

export const portfolio = {
  name: 'Esraa Elnajjar',
  fullName: 'ESRAA ELKHADRY MOHAMMED ELNAJJAR',
  title: 'Super Full Stack Developer (Web & Mobile)',
  tagline:
    'I ship full-stack web apps, mobile products, and interfaces — pharmacy systems, Zakah tools, grocery apps, and university platforms built end to end.',
  email: 'israaelnajjar664@gmail.com',
  phone: '(+20) 120 576 2157',
  whatsapp: 'https://wa.me/201205762157',
  location: 'Egypt — Cairo & Menoufia',
  availability: 'Open to new opportunities',
  profileAlt: 'Esraa Elkhadry — Full Stack Developer portrait',
  yearsExperience: '5+',

  social: {
    github: 'https://github.com/esraaelnajjar',
    linkedin: 'https://linkedin.com/in/esraaelnajjar',
  },

  about: {
    intro:
      'Three years in, I still care most about how things feel when someone actually uses them. I work across React and NestJS, Flutter and Android, and Figma — usually on the same project.',
    highlights: [
      'React, NestJS, and Node.js — frontend through API',
      'Figma-first UI/UX for mobile and web',
      'Flutter, Android Java, and JavaFX when the product needs it',
      'Led a 4-person graduation team at Menoufia University',
    ],
  },

  education: {
    degree: "Bachelor's degree in Computers and Information",
    school: 'Menoufia University — CS Department',
    period: '2020 — 2024',
    focus: 'Software Engineering & Computer Science',
  },

  skills: [
    {
      category: 'Technical Skills',
      items: [
        'React.js',
        'NestJS / Node.js',
        'UI/UX Design',
        'Flutter',
        'Android Java',
        'JavaScript',
        'TypeScript',
        'HTML & CSS',
        'Bootstrap',
        'Java',
        'C++',
        'Python',
        'PHP',
        'JavaFX',
        'Full Stack Development',
        'Database Management',
        'Graphic Design',
        'Animation',
        'AI / Jade',
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        'Communication',
        'Adaptability',
        'Teamwork',
        'Leadership',
        'Creativity',
        'Problem Solving',
        'Teaching',
        'Troubleshooting',
        'Software Documentation',
        'Active Listening',
        'Integrity',
        'Self-Direction',
      ],
    },
  ],

  projects: [
    {
      title: 'Salezeus',
      description:
        'Agency website for Salezeus — a bilingual brand experience with 3D team characters, services, portfolio, and conversion-focused pages.',
      tech: ['Web', 'UI/UX', 'Frontend'],
      image: salezeusImage,
      imageAlt: 'Salezeus website team section with 3D characters',
      logo: salezeusLogo,
      logoBg: 'light',
      links: [
        {
          label: 'Live site',
          href: 'https://salezeus.com',
        },
      ],
    },
    {
      title: 'Bytely - Cybersecurity Agency',
      description:
        'Bytely business development platform — a dark, command-center web experience for digital intelligence, cybersecurity, and national-scale investigations.',
      tech: ['Web', 'Frontend', 'Cybersecurity'],
      image: bytelyImage,
      imageAlt: 'Bytely 2026 business development and digital intelligence landing preview',
      logo: bytelyLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://bytely-liard.vercel.app/',
        },
      ],
    },
    {
      title: 'Soriana Al-Aqeeq',
      description:
        'Hospitality website for Soriana Al Aqeeq Hotel in Old Damascus — Arabic-first booking experience with rooms, gallery, and WhatsApp conversion.',
      tech: ['Web', 'UI/UX', 'Hospitality'],
      image: sorianaImage,
      imageAlt: 'Soriana Al Aqeeq Hotel homepage with traditional Damascene interior',
      logo: sorianaLogo,
      logoTall: true,
      links: [
        {
          label: 'Live site',
          href: 'https://sorianaaqeeq.com/',
        },
      ],
    },
    {
      title: 'Yslamo App',
      description:
        'Yslamo customer app — food and grocery delivery in one basket, with restaurants, nearby markets, offers, and live order tracking.',
      tech: ['Mobile', 'Delivery', 'Android'],
      image: yslamoAppImage,
      imageAlt: 'Yslamo app promotional collage with rabbit mascot and order screens',
      logo: yslamoLogo,
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.yslamo.myapp',
        },
      ],
    },
    {
      title: 'Rawasi',
      description:
        'Arabic bilingual website for Rawasi — real estate development and construction in Syria, with services, portfolio, and consultation CTAs.',
      tech: ['Web', 'UI/UX', 'Frontend'],
      image: rawasiImage,
      imageAlt: 'Rawasi homepage hero with luxury villa and Arabic headline',
      logo: rawasiLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://rawasi-syria.com/',
        },
      ],
    },
    {
      title: 'Yslamo Delivery',
      description:
        'Yslamo Captain app — live orders, route history, earnings wallet, and notifications for delivery riders in the field.',
      tech: ['Mobile', 'Delivery', 'Android'],
      image: yslamoDeliveryImage,
      imageAlt: 'Yslamo Delivery captain app collage with order, wallet, and ride screens',
      logo: yslamoLogo,
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.yslamo.delivery',
        },
      ],
    },
    {
      title: 'Türkiye Charcoal Directories - سلسلة مصانع الفحم فى تركيا ',
      description:
        'Commercial charcoal sites in Turkey, including Doğa Group — multilingual catalog, product shapes, and a conversion-focused industrial storefront.',
      tech: ['Web', 'E-commerce', 'SEO'],
      image: charcoalImage,
      imageAlt: 'Doğa Kömürcülük landing with glowing charcoal, factory visit, and worldwide delivery',
      logo: charcoalLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://dogakomurculuk.com/',
        },
      ],
    },
    {
      title: 'Yslamo Website',
      description:
        'Yslamo web platform — restaurant directory, categories, orders, and a unified basket for food and grocery delivery.',
      tech: ['Web', 'Frontend', 'Delivery'],
      image: yslamoWebImage,
      imageAlt: 'Yslamo login screen with delivery courier and phone sign-in form',
      logo: yslamoLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://yslamo.com/',
        },
      ],
    },
    {
      title: 'Osta',
      description:
        'Osta mobile app — book local craftsmen for plumbing, electricity, maintenance, and more, with nearby providers and request flows.',
      tech: ['Mobile', 'UI/UX', 'Services'],
      image: ostaImage,
      imageAlt: 'Osta app screens for creating a request, discovering providers, and branding',
      logo: ostaLogo,
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/ayasalezeus/Osta-App',
        },
      ],
    },
    {
      title: 'Gaza Talent — GTL',
      description:
        'GTL platform for Gaza Talent — connecting talented people with jobs, training, grants, and support through a bilingual web experience.',
      tech: ['Web', 'Frontend', 'Platform'],
      image: gtlImage,
      imageAlt: 'GTL landing page with globe graphic and Arabic talent-support hero',
      logo: gtlLogo,
      logoBg: 'light',
      links: [
        {
          label: 'Live site',
          href: 'https://gtl.link/',
        },
      ],
    },
    {
      title: 'Donut Sweets',
      description:
        'DONUT DONUT brand website — menu, flavors, booking a box, and a photography-led storefront for hand-fried donuts.',
      tech: ['Web', 'UI/UX', 'Frontend'],
      image: donutImage,
      imageAlt: 'DONUT DONUT landing page with hero, box offer, and flavor cards',
      logo: donutLogo,
      logoBg: 'light',
      links: [
        {
          label: 'Live site',
          href: 'https://donut-donut-eaz9ijk42-esraaeng14-1075s-projects.vercel.app/',
        },
      ],
    },
    {
      title: 'One Kado',
      description:
        'Turkish e-commerce store for One Kado — skincare, travel organizers, and home gifts with catalog, checkout, and conversion-focused pages.',
      tech: ['Web', 'E-commerce', 'Frontend'],
      image: oneKadoImage,
      imageAlt: 'One Kado landing page with hero collage, product cards, and shopping CTAs',
      logo: oneKadoLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://www.onekado.com/',
        },
      ],
    },
    {
      title: 'Booslaa',
      description:
        'بوصلة المعلم — Arabic training platform for geography teachers using the TPACK model, with lessons, tests, videos, and classroom-ready plans.',
      tech: ['Web', 'Education', 'Frontend'],
      image: booslaaImage,
      imageAlt: 'Booslaa teacher compass homepage with TPACK lesson flow card',
      logo: booslaaLogo,
      links: [
        {
          label: 'Live site',
          href: 'https://booslaa.vercel.app/',
        },
      ],
    },
    {
      title: 'Glow Secret',
      description:
        'Arabic skincare e-commerce for Glow Secret — product grid, promotions, cart, and a pastel storefront for kits and bestsellers.',
      tech: ['Web', 'E-commerce', 'UI/UX'],
      image: skincareImage,
      imageAlt: 'Glow Secret skincare products page with kit cards and discounted prices',
      logo: skincareLogo,
      logoBg: 'light',
      logoTall: true,
      links: [
        {
          label: 'Live site',
          href: 'https://skin-care-5ibj.vercel.app/skincare',
        },
      ],
    },
    {
      title: 'Flutter Grocery App',
      description:
        'Full-featured online grocery app with Hive, Cubits, and Firebase — shopping cart, catalog, and polished mobile UI.',
      tech: ['Flutter', 'Firebase', 'Hive', 'Cubit'],
      image: groceryImage,
      imageAlt: 'Flutter Grocery App splash, onboarding, and sign-in screens',
      logo: groceryLogo,
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/esraaelnajjar/flutter-grocery-app',
        },
      ],
    },
  ],

  certificates: [
    {
      title: 'ICPC Certificate of Achievement',
      event: 'The 2021 ICPC Menofia University Collegiate Programming Contest',
      issuer: 'ICPC — International Collegiate Programming Contest',
      date: '24 August 2021',
      result: '35th Place',
      institution: 'Menofia University',
      team: [
        'Alaa Adel Hathout',
        'Aya Adel Hathout',
        'Israa Elkhadry Elnajjar',
      ],
      image: icpcCertificate,
      imageAlt:
        'ICPC 2021 Menofia University Certificate of Achievement for Israa Elkhadry Elnajjar',
    },
  ] as CertificateItem[],

  experience: [
    {
      company: 'Dalilak',
      location: 'Zagazig, Egypt',
      period: 'May 2024 — Dec 2024',
    },
    {
      company: 'Coding Developer',
      location: 'Benha, Egypt',
      period: 'Jan 2025 — Jun 2025',
    },
    {
      company: 'Together',
      location: 'Nasr City, Egypt',
      period: 'Apr 2025 — Aug 2025',
    },
    {
      company: 'Salezeus',
      location: 'Turkey / Syria',
      period: 'Aug 2025 — Present',
    },
  ] as ExperienceItem[],
}
