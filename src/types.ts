export type SiteConfig = {
  author: string
  title: string
  site: string
  description: string
  lang: string
  ogLocale: string
  date: {
    locale: string | string[] | undefined
    options: Intl.DateTimeFormatOptions
  }
  pageSize: number
  registration?: {
    url: string
    text: string
  }
  walineServerUrl: string
  applyFriendTip: {
    name: string
    slogan: string
    url: string
    avatar: string
  }
}

export type MenuLinks = Array<{ link: string; label: string }>

export type PaginationLink = {
  url: string
  text?: string
  srLabel?: string
}

export type SiteMeta = {
  title: string
  description?: string
  ogImage?: string | undefined
  articleDate?: string | undefined
}

export const SocialMediaIconId: Record<string, string> = {
  coolapk: 'coolapk-line',
  telegram: 'mingcute-telegram-line',
  github: 'mingcute-github-line',
  bilibili: 'ri-bilibili-line',
  twitter: 'mingcute-twitter-line',
  zhihu: 'ri-zhihu-line',
  steam: 'ri-steam-line',
  netease_music: 'ri-netease-cloud-music-line',
}

export type SocialLink = {
  name:
    | 'coolapk'
    | 'telegram'
    | 'github'
    | 'bilibili'
    | 'twitter'
    | 'zhihu'
    | 'steam'
    | 'netease_music'
  url: string
}

export type SocialLinks = Array<SocialLink>
