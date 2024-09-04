import{c as o,r as i,m as s,u as a}from"./hoisted.DwWx6ALN.js";import"./_commonjsHelpers.DyVB06ra.js";import"./hoisted.33BSnmmm.js";const n=`<h2 id="site-configuration">Site Configuration</h2>
<p>Customizing this theme requires adjusting a significant amount of source code.</p>
<p>We have made efforts to centralize the configuration options in the <code>src/site.config.ts</code> file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.</p>
<p>You can globally search for the following keywords to find the text that needs to be replaced:</p>
<ul>
<li><code>Lorem ipsum</code></li>
<li><code>astro-theme-pure</code></li>
<li><code>cworld</code></li>
</ul>
<p>Next, we will introduce each aspect in detail.</p>
<h3 id="main-configuration-file-srcsiteconfigts">Main Configuration File <code>src/site.config.ts</code></h3>
<p>Please modify the corresponding configuration according to the existing <code>src/site.config.ts</code> template.</p>
<p>Some special configuration items are explained as follows:</p>
<h4 id="waline-comment-system">Waline Comment System</h4>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>Corresponds to the <code>siteConfig.walineServerUrl</code> configuration item in <code>src/site.config.ts</code>.</p>
</div>
<p>The theme’s comment, read statistics, likes, and other functionalities are all provided by <a href="https://waline.js.org/" rel="nofollow, noopener, noreferrer" target="_blank">Waline</a>.</p>
<p>You can refer to its documentation for configuration, and it is recommended to use the <a href="https://vercel.com/" rel="nofollow, noopener, noreferrer" target="_blank">Vercel</a> + <a href="https://supabase.com/" rel="nofollow, noopener, noreferrer" target="_blank">Supabase</a> combination.</p>
<p>This theme only requires providing the final backend domain name in the <code>siteConfig.walineServerUrl</code> of <code>src/site.config.ts</code>.</p>
<h4 id="footer">Footer</h4>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>Corresponds to the <code>socialLinks</code> configuration item in <code>src/site.config.ts</code>.</p>
</div>
<p>Currently supported social media include:</p>
<ul>
<li><code>coolapk</code></li>
<li><code>telegram</code></li>
<li><code>github</code></li>
<li><code>bilibili</code></li>
<li><code>twitter</code></li>
<li><code>zhihu</code></li>
<li><code>steam</code></li>
<li><code>netease_music</code></li>
</ul>
<p>If you want to add new social media, you need to modify the following files:</p>
<ul>
<li>
<p><code>src/types.ts</code>: Add a new <code>SocialLink.name</code> enum value and the icon mapping relationship for <code>SocialMediaIconId</code></p>
</li>
<li>
<p><code>public/icons/social.svg</code>: Follow the existing format and add a new icon as a symbol</p>
<p>It is recommended to find social media icons on the following websites to maintain consistency:</p>
<ul>
<li><a href="https://remixicon.com/" rel="nofollow, noopener, noreferrer" target="_blank">remixicon</a></li>
<li><a href="https://www.mingcute.com/" rel="nofollow, noopener, noreferrer" target="_blank">mingcute</a></li>
</ul>
</li>
</ul>
<h3 id="other-files-to-replace">Other Files to Replace</h3>
<ul>
<li><code>public/favicon</code>: The site’s favicon. You can generate a favicon at <a href="https://favicon.io/favicon-converter/" rel="nofollow, noopener, noreferrer" target="_blank">favicon.io</a></li>
<li><code>public/images/social-card.png</code>: The site’s social card</li>
<li><code>src/assets/</code>: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images</li>
</ul>
<h2 id="other-pages">Other Pages</h2>
<h3 id="about">About</h3>
<p>Currently supported icons can be found in the <code>src/icons</code> directory.</p>
<p>If you want to add new Tools icons, you need to add a new icon in the <code>src/icons</code> directory.</p>
<p>It is recommended to find new icons on the following websites to maintain consistency:</p>
<ul>
<li><a href="https://icon-sets.iconify.design/" rel="nofollow, noopener, noreferrer" target="_blank">iconify</a></li>
<li><a href="https://icones.js.org/" rel="nofollow, noopener, noreferrer" target="_blank">icones</a></li>
</ul>
<h2 id="deployment-mode">Deployment Mode</h2>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>Corresponds to the <code>export default defineConfig</code> configuration item in <code>astro.config.ts</code>.</p>
</div>
<p>If you are deploying with Vercel, no modification is needed.</p>
<p>If you are deploying with Node.js locally, you need to follow the comments in <code>astro.config.ts</code> and modify</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> vercel </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '@astrojs/vercel/serverless'</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">...</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> default</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> defineConfig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  adapter: </span><span style="color:#6F42C1;--shiki-dark:#B392F0">vercel</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    webAnalytics: {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      enabled: </span><span style="color:#005CC5;--shiki-dark:#79B8FF">true</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }),</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">})</span></span>
<span class="line"></span></code></pre>
<p>to</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> node </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '@astrojs/node'</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">...</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> default</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> defineConfig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  adapter: </span><span style="color:#6F42C1;--shiki-dark:#B392F0">node</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    mode: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'standalone'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }),</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">})</span></span>
<span class="line"></span></code></pre>`,t={title:"Personalized Customization Guide",publishDate:"2024-07-27T08:00:00.000Z",description:"astro-theme-pure Personalized Customization Guide",tags:["Waline","Vercel","Supabase"],coverImage:{src:"./thumbnail.jpg",color:"#64574D"},language:"English",minutesRead:"2 min read"},r="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/customize/index.md",l=void 0;function g(){return`
## Site Configuration

Customizing this theme requires adjusting a significant amount of source code. 

We have made efforts to centralize the configuration options in the \`src/site.config.ts\` file for user convenience and have integrated a variety of common social media/tools icons. If you want to add new icons, you will need to modify the source code yourself.

You can globally search for the following keywords to find the text that needs to be replaced:

- \`Lorem ipsum\`
- \`astro-theme-pure\`
- \`cworld\`

Next, we will introduce each aspect in detail.

### Main Configuration File \`src/site.config.ts\`

Please modify the corresponding configuration according to the existing \`src/site.config.ts\` template.

Some special configuration items are explained as follows:

#### Waline Comment System

> [!NOTE]
> 
> Corresponds to the \`siteConfig.walineServerUrl\` configuration item in \`src/site.config.ts\`.

The theme's comment, read statistics, likes, and other functionalities are all provided by [Waline](https://waline.js.org/).

You can refer to its documentation for configuration, and it is recommended to use the [Vercel](https://vercel.com/) + [Supabase](https://supabase.com/) combination.

This theme only requires providing the final backend domain name in the \`siteConfig.walineServerUrl\` of \`src/site.config.ts\`.

#### Footer

> [!NOTE]
> 
> Corresponds to the \`socialLinks\` configuration item in \`src/site.config.ts\`.

Currently supported social media include:

- \`coolapk\`
- \`telegram\`
- \`github\`
- \`bilibili\`
- \`twitter\`
- \`zhihu\`
- \`steam\`
- \`netease_music\`

If you want to add new social media, you need to modify the following files:

- \`src/types.ts\`: Add a new \`SocialLink.name\` enum value and the icon mapping relationship for \`SocialMediaIconId\`
- \`public/icons/social.svg\`: Follow the existing format and add a new icon as a symbol

  It is recommended to find social media icons on the following websites to maintain consistency:

  - [remixicon](https://remixicon.com/)
  - [mingcute](https://www.mingcute.com/)

### Other Files to Replace

- \`public/favicon\`: The site's favicon. You can generate a favicon at [favicon.io](https://favicon.io/favicon-converter/)
- \`public/images/social-card.png\`: The site's social card
- \`src/assets/\`: This directory contains client-rendered avatars, sponsorship QR codes, and other images. Please replace them with your own images

## Other Pages

### About

Currently supported icons can be found in the \`src/icons\` directory.

If you want to add new Tools icons, you need to add a new icon in the \`src/icons\` directory.

It is recommended to find new icons on the following websites to maintain consistency:

- [iconify](https://icon-sets.iconify.design/)
- [icones](https://icones.js.org/)

## Deployment Mode

> [!NOTE]
> 
> Corresponds to the \`export default defineConfig\` configuration item in \`astro.config.ts\`.

If you are deploying with Vercel, no modification is needed.

If you are deploying with Node.js locally, you need to follow the comments in \`astro.config.ts\` and modify

\`\`\`ts
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
\`\`\`

to

\`\`\`ts
import node from '@astrojs/node'
...
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  ...
})
\`\`\``}function y(){return n}function k(){return[{depth:2,slug:"site-configuration",text:"Site Configuration"},{depth:3,slug:"main-configuration-file-srcsiteconfigts",text:"Main Configuration File src/site.config.ts"},{depth:4,slug:"waline-comment-system",text:"Waline Comment System"},{depth:4,slug:"footer",text:"Footer"},{depth:3,slug:"other-files-to-replace",text:"Other Files to Replace"},{depth:2,slug:"other-pages",text:"Other Pages"},{depth:3,slug:"about",text:"About"},{depth:2,slug:"deployment-mode",text:"Deployment Mode"}]}const w=o((c,d,p)=>{const{layout:h,...e}=t;return e.file=r,e.url=l,i`${s()}${a(n)}`});export{w as Content,y as compiledContent,w as default,r as file,t as frontmatter,k as getHeadings,g as rawContent,l as url};
