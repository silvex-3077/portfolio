import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'silvex-3077',
  description:
    '本サイトは astro-erudite をベースに制作されています',
  href: 'https://github.com/silvex-3077',
  author: 'silvex-3077',
  locale: 'ja',
  featuredPostCount: 5,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href:'/portfolio/',
    label: 'home',
  },
  // {
  //   href: '/portfolio/note/',
  //   label: 'note',
  // },
  // {
  //   href: '/about',
  //   label: 'about',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/silvex-3077',
    label: 'GitHub',
  },
  {
    href: 'mailto:mochizuki3106@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
