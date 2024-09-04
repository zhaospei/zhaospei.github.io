# Theme Astro Pure

[English](./README.md) | [简体中文](./README-zh-CN.md)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/cworld1/theme-astro-pure?label=commits&style=flat-square)](https://github.com/cworld1/theme-astro-pure/commits)
[![GitHub stars](https://img.shields.io/github/stars/cworld1/theme-astro-pure?style=flat-square)](https://github.com/cworld1/theme-astro-pure/stargazers)
[![GitHub license](https://img.shields.io/github/license/cworld1/theme-astro-pure?style=flat-square)](https://github.com/cworld1/theme-astro-pure/blob/main/LICENSE)

A simple, clean but powerful blog theme build by astro.

## Introduction / Deployment

For more information, please visit the [cworld site](https://cworld.top/blog/theme-resume) and [deployment instructions](https://theme-astro-pure.vercel.app/blog/customize)

## Local development

Environment requirements:

- [Nodejs](https://nodejs.org/): 18.0.0+
- [Bun](https://bun.sh/): 1.0.0+

Clone the repository:

```shell
git clone https://github.com/cworld1/theme-astro-pure.git
```

Install dependencies:

```shell
cd theme-astro-pure
bun install
```

Start the development server:

```shell
bun dev
# Background task is bad for windows user. Use below instead:
# bun start
```

Or build (you may need to use node.js SSR firstly):

```shell
bun run build
```

Preview:

```shell
bun preview
```

## Contributions

To spend more time coding and less time fiddling with whitespace, this project uses code conventions and styles to encourage consistency. Code with a consistent style is easier (and less error-prone!) to review, maintain, and understand.

## Thanks

- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [Astro Resume](https://github.com/srleom/astro-theme-resume)

## License

This project is licensed under the GPL 3.0 License.
