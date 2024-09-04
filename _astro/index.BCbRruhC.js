import{c as s,r as o,m as a,u as i}from"./hoisted.DwWx6ALN.js";import"./_commonjsHelpers.DyVB06ra.js";import"./hoisted.33BSnmmm.js";const e=`<h2 id="站点配置">站点配置</h2>
<p>客制化本主题需要调整较多的源代码。</p>
<p>我们已经尽力将配置项集中在 <code>src/site.config.ts</code> 文件中，以方便用户进行修改，并集成了较多常见的社交媒体/工具 icon，如果你想要添加新的 icon，你需要自行修改源代码。</p>
<p>你可以在全局搜索如下关键字来找到需要替换的文本：</p>
<ul>
<li><code>Lorem ipsum</code></li>
<li><code>astro-theme-pure</code></li>
<li><code>cworld</code></li>
</ul>
<p>接下来我们逐一展开介绍。</p>
<h3 id="主配置文件-srcsiteconfigts">主配置文件 <code>src/site.config.ts</code></h3>
<p>请根据现有 <code>src/site.config.ts</code> 模板修改对应配置。</p>
<p>一些特殊配置项的说明如下：</p>
<h4 id="waline-评论系统">Waline 评论系统</h4>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>对应 <code>src/site.config.ts</code> 中的 <code>siteConfig.walineServerUrl</code> 配置项。</p>
</div>
<p>主题的评论、阅读统计、点赞等功能均由 <a href="https://waline.js.org/" rel="nofollow, noopener, noreferrer" target="_blank">Waline</a> 提供。</p>
<p>你可以参照其文档进行配置，推荐使用 <a href="https://vercel.com/" rel="nofollow, noopener, noreferrer" target="_blank">Vercel</a> + <a href="https://supabase.com/" rel="nofollow, noopener, noreferrer" target="_blank">Supabase</a> 的组合。</p>
<p>本主题只需要在 <code>src/site.config.ts</code> 中的 <code>siteConfig.walineServerUrl</code> 提供最终的后端域名即可。</p>
<h4 id="footer">Footer</h4>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>对应 <code>src/site.config.ts</code> 中的 <code>socialLinks</code> 配置项。</p>
</div>
<p>目前支持的社交媒体包括：</p>
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
<p>如果你想要添加新的社交媒体，你需要修改如下文件：</p>
<ul>
<li>
<p><code>src/types.ts</code>：添加新的 <code>SocialLink.name</code> 枚举值以及 <code>SocialMediaIconId</code> 的 icon 映射关系</p>
</li>
<li>
<p><code>public/icons/social.svg</code>：遵循现有格式，以 symbol 方式添加新的 icon</p>
<p>推荐在如下网站寻找社交媒体的 icon，以保持一致性：</p>
<ul>
<li><a href="https://remixicon.com/" rel="nofollow, noopener, noreferrer" target="_blank">remixicon</a></li>
<li><a href="https://www.mingcute.com/" rel="nofollow, noopener, noreferrer" target="_blank">mingcute</a></li>
</ul>
</li>
</ul>
<h3 id="其他需要替换的文件">其他需要替换的文件</h3>
<ul>
<li><code>public/favicon</code>：网站的 favicon，你可以在 <a href="https://favicon.io/favicon-converter/" rel="nofollow, noopener, noreferrer" target="_blank">favicon.io</a> 生成 favicon</li>
<li><code>public/images/social-card.png</code>：网站的社交卡片</li>
<li><code>src/assets/</code>：此目录下包含客户端渲染的头像、赞助二维码等图片，请替换为你自己的图片</li>
</ul>
<h2 id="其他页面">其他页面</h2>
<h3 id="about">About</h3>
<p>目前支持的 icon 可在 <code>src/icons</code> 目录下找到。</p>
<p>如果你想要添加新的 Tools 图标，你需要在 <code>src/icons</code> 目录下添加新的 icon。</p>
<p>推荐在如下网站寻找新的 icon，以保持一致性：</p>
<ul>
<li><a href="https://icon-sets.iconify.design/" rel="nofollow, noopener, noreferrer" target="_blank">iconify</a></li>
<li><a href="https://icones.js.org/" rel="nofollow, noopener, noreferrer" target="_blank">icones</a></li>
</ul>
<h2 id="部署模式">部署模式</h2>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p></p>
<p>对应 <code>astro.config.ts</code> 中的 <code>export default defineConfig</code> 配置项。</p>
</div>
<p>如果你采用 Vercel 部署，你无需修改。</p>
<p>如果你采用 Node.js 本地部署，你需要依照 <code>astro.config.ts</code> 中的注释，修改</p>
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
<p>为</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="ts"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> node </span><span style="color:#D73A49;--shiki-dark:#F97583">from</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '@astrojs/node'</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">...</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">export</span><span style="color:#D73A49;--shiki-dark:#F97583"> default</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> defineConfig</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  adapter: </span><span style="color:#6F42C1;--shiki-dark:#B392F0">node</span><span style="color:#24292E;--shiki-dark:#E1E4E8">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    mode: </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'standalone'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">  }),</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">})</span></span>
<span class="line"></span></code></pre>`,t={title:"个人定制化指南",publishDate:"2024-07-27T08:00:00.000Z",description:"astro-theme-pure 个人定制化指南",tags:["Waline","Vercel","Supabase"],coverImage:{src:"./thumbnail.jpg",color:"#64574D"},language:"中文",minutesRead:"3 min read"},r="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/customize-zh/index.md",l=void 0;function g(){return`
## 站点配置

客制化本主题需要调整较多的源代码。

我们已经尽力将配置项集中在 \`src/site.config.ts\` 文件中，以方便用户进行修改，并集成了较多常见的社交媒体/工具 icon，如果你想要添加新的 icon，你需要自行修改源代码。

你可以在全局搜索如下关键字来找到需要替换的文本：

- \`Lorem ipsum\`
- \`astro-theme-pure\`
- \`cworld\`

接下来我们逐一展开介绍。

### 主配置文件 \`src/site.config.ts\`

请根据现有 \`src/site.config.ts\` 模板修改对应配置。

一些特殊配置项的说明如下：

#### Waline 评论系统

> [!NOTE]
>
> 对应 \`src/site.config.ts\` 中的 \`siteConfig.walineServerUrl\` 配置项。

主题的评论、阅读统计、点赞等功能均由 [Waline](https://waline.js.org/) 提供。

你可以参照其文档进行配置，推荐使用 [Vercel](https://vercel.com/) + [Supabase](https://supabase.com/) 的组合。

本主题只需要在 \`src/site.config.ts\` 中的 \`siteConfig.walineServerUrl\` 提供最终的后端域名即可。

#### Footer

> [!NOTE]
>
> 对应 \`src/site.config.ts\` 中的 \`socialLinks\` 配置项。

目前支持的社交媒体包括：

- \`coolapk\`
- \`telegram\`
- \`github\`
- \`bilibili\`
- \`twitter\`
- \`zhihu\`
- \`steam\`
- \`netease_music\`

如果你想要添加新的社交媒体，你需要修改如下文件：

- \`src/types.ts\`：添加新的 \`SocialLink.name\` 枚举值以及 \`SocialMediaIconId\` 的 icon 映射关系
- \`public/icons/social.svg\`：遵循现有格式，以 symbol 方式添加新的 icon

  推荐在如下网站寻找社交媒体的 icon，以保持一致性：

  - [remixicon](https://remixicon.com/)
  - [mingcute](https://www.mingcute.com/)

### 其他需要替换的文件

- \`public/favicon\`：网站的 favicon，你可以在 [favicon.io](https://favicon.io/favicon-converter/) 生成 favicon
- \`public/images/social-card.png\`：网站的社交卡片
- \`src/assets/\`：此目录下包含客户端渲染的头像、赞助二维码等图片，请替换为你自己的图片

## 其他页面

### About

目前支持的 icon 可在 \`src/icons\` 目录下找到。

如果你想要添加新的 Tools 图标，你需要在 \`src/icons\` 目录下添加新的 icon。

推荐在如下网站寻找新的 icon，以保持一致性：

- [iconify](https://icon-sets.iconify.design/)
- [icones](https://icones.js.org/)

## 部署模式

> [!NOTE]
>
> 对应 \`astro.config.ts\` 中的 \`export default defineConfig\` 配置项。

如果你采用 Vercel 部署，你无需修改。

如果你采用 Node.js 本地部署，你需要依照 \`astro.config.ts\` 中的注释，修改

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

为

\`\`\`ts
import node from '@astrojs/node'
...
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  ...
})
\`\`\`
`}function m(){return e}function E(){return[{depth:2,slug:"站点配置",text:"站点配置"},{depth:3,slug:"主配置文件-srcsiteconfigts",text:"主配置文件 src/site.config.ts"},{depth:4,slug:"waline-评论系统",text:"Waline 评论系统"},{depth:4,slug:"footer",text:"Footer"},{depth:3,slug:"其他需要替换的文件",text:"其他需要替换的文件"},{depth:2,slug:"其他页面",text:"其他页面"},{depth:3,slug:"about",text:"About"},{depth:2,slug:"部署模式",text:"部署模式"}]}const v=s((c,p,d)=>{const{layout:h,...n}=t;return n.file=r,n.url=l,o`${a()}${i(e)}`});export{v as Content,m as compiledContent,v as default,r as file,t as frontmatter,E as getHeadings,g as rawContent,l as url};
