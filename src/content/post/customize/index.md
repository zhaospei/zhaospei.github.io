---
title: Personalized Customization Guide
publishDate: 2024-07-27 08:00:00
description: 'astro-theme-pure Personalized Customization Guide'
tags:
  - Waline
  - Vercel
  - Supabase
coverImage: { src: './thumbnail.jpg', color: '#64574D' }
language: 'English'
---

## Site Configuration

Customizing this theme requires adjusting a significant amount of source code. 

We have made efforts to centralize the configuration options in the `src/site.config.ts` file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.

You can globally search for the following keywords to find the text that needs to be replaced:

- `Lorem ipsum`
- `astro-theme-pure`
- `cworld`

Next, we will introduce each aspect in detail.

### Main Configuration File `src/site.config.ts`

Please modify the corresponding configuration according to the existing `src/site.config.ts` template.

Some special configuration items are explained as follows:

#### Waline Comment System

> [!NOTE]
> 
> Corresponds to the `siteConfig.walineServerUrl` configuration item in `src/site.config.ts`.

The theme's comment, read statistics, likes, and other functionalities are all provided by [Waline](https://waline.js.org/).

You can refer to its documentation for configuration, and it is recommended to use the [Vercel](https://vercel.com/) + [Supabase](https://supabase.com/) combination.

This theme only requires providing the final backend domain name in the `siteConfig.walineServerUrl` of `src/site.config.ts`.

#### Footer

> [!NOTE]
> 
> Corresponds to the `socialLinks` configuration item in `src/site.config.ts`.

Currently supported social media include:

- `coolapk`
- `telegram`
- `github`
- `bilibili`
- `twitter`
- `zhihu`
- `steam`
- `netease_music`

If you want to add new social media, you need to modify the following files:

- `src/types.ts`: Add a new `SocialLink.name` enum value and the icon mapping relationship for `SocialMediaIconId`
- `public/icons/social.svg`: Follow the existing format and add a new icon as a symbol

  It is recommended to find social media icons on the following websites to maintain consistency:

  - [remixicon](https://remixicon.com/)
  - [mingcute](https://www.mingcute.com/)

### Other Files to Replace

- `public/favicon`: The site's favicon. You can generate a favicon at [favicon.io](https://favicon.io/favicon-converter/)
- `public/images/social-card.png`: The site's social card
- `src/assets/`: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images

## Other Pages

### About

Currently supported icons can be found in the `src/icons` directory.

If you want to add new Tools icons, you need to add a new icon in the `src/icons` directory.

It is recommended to find new icons on the following websites to maintain consistency:

- [iconify](https://icon-sets.iconify.design/)
- [icones](https://icones.js.org/)

## Deployment Mode

> [!NOTE]
> 
> Corresponds to the `export default defineConfig` configuration item in `astro.config.ts`.

If you are deploying with Vercel, no modification is needed.

If you are deploying with Node.js locally, you need to follow the comments in `astro.config.ts` and modify

```ts
import vercel from '@astrojs/vercel/serverless'
...
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  ...
})
```

to

```ts
import node from '@astrojs/node'
...
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  ...
})
```