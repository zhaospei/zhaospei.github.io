import{c as a,r as e,m as t,u as o}from"./hoisted.DwWx6ALN.js";import"./_commonjsHelpers.DyVB06ra.js";import"./hoisted.33BSnmmm.js";const s=`<h2 id="basic-syntax">Basic Syntax</h2>
<p>Markdown is a lightweight and easy-to-use syntax for styling your writing.</p>
<h3 id="headers">Headers</h3>
<p>When the content of the article is extensive, you can use headers to segment:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF;font-weight:bold;--shiki-dark-font-weight:bold"># Header 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF;font-weight:bold;--shiki-dark-font-weight:bold">## Header 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF;font-weight:bold;--shiki-dark-font-weight:bold">## Large Header</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF;font-weight:bold;--shiki-dark-font-weight:bold">### Small Header</span></span>
<span class="line"></span></code></pre>
<p>Header previews would disrupt the structure of the article, so they are not displayed here.</p>
<h3 id="bold-and-italics">Bold and Italics</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8;font-style:italic;--shiki-dark-font-style:italic">_Italic text_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8;font-weight:bold;--shiki-dark-font-weight:bold">**Bold text**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8;font-weight:bold;--shiki-dark-font-weight:bold">**</span><span style="color:#24292E;--shiki-dark:#E1E4E8;font-style:italic;--shiki-dark-font-style:italic">_Bold Italic text_</span><span style="color:#24292E;--shiki-dark:#E1E4E8;font-weight:bold;--shiki-dark-font-weight:bold">**</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p><em>Italic text</em></p>
<p><strong>Bold text</strong></p>
<p><strong><em>Bold Italic text</em></strong></p>
<h3 id="links">Links</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Text link [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">Link Name</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;--shiki-dark:#E1E4E8;text-decoration:underline;--shiki-dark-text-decoration:underline">http://link-url</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>Text link <a href="http://link-url" rel="nofollow, noopener, noreferrer" target="_blank">Link Name</a></p>
<h3 id="inline-code">Inline Code</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">This is an </span><span style="color:#005CC5;--shiki-dark:#79B8FF">\`inline code\`</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>This is an <code>inline code</code></p>
<h3 id="code-blocks">Code Blocks</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`js</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// calculate fibonacci</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">function</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n </span><span style="color:#D73A49;--shiki-dark:#F97583">&#x3C;=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\`\`\`</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="js"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">// calculate fibonacci</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">function</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#E36209;--shiki-dark:#FFAB70">n</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n </span><span style="color:#D73A49;--shiki-dark:#F97583">&#x3C;=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  return</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> fibonacci</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(n </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">}</span></span>
<span class="line"></span></code></pre>
<p>Currently using shiki as the code highlighting plugin. For supported languages, refer to <a href="https://shiki.matsu.io/languages.html" rel="nofollow, noopener, noreferrer" target="_blank">shiki / languages</a>.</p>
<h3 id="inline-formula">Inline Formula</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">This is an inline formula $e^{i\\pi} + 1 = 0$</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>This is an inline formula <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi} + 1 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></p>
<h3 id="formula-blocks">Formula Blocks</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">$$</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">$$</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>f</mi><mo>^</mo></mover><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><mi>π</mi><mi>i</mi><mi>x</mi><mi>ξ</mi></mrow></msup><mtext> </mtext><mi>d</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2079em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9579em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span><span style="top:-3.2634em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.0833em;"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3846em;vertical-align:-0.9703em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4143em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9703em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">2</span><span class="mord mathnormal mtight">πi</span><span class="mord mathnormal mtight">x</span><span class="mord mathnormal mtight" style="margin-right:0.04601em;">ξ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></span>
<p>Currently using KaTeX as the math formula plugin. For supported syntax, refer to <a href="https://katex.org/docs/supported.html" rel="nofollow, noopener, noreferrer" target="_blank">KaTeX Supported Functions</a>.</p>
<h4 id="images">Images</h4>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">![</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">CWorld</span><span style="color:#24292E;--shiki-dark:#E1E4E8">](</span><span style="color:#24292E;--shiki-dark:#E1E4E8;text-decoration:underline;--shiki-dark-text-decoration:underline">https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<img src="https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200" alt="CWorld">
<h4 id="strikethrough">Strikethrough</h4>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">~~Strikethrough~~</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p><del>Strikethrough</del></p>
<h3 id="lists">Lists</h3>
<p>Regular unordered list</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 1</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 2</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> 3</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
<p>Regular ordered list</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">1.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> GPT-4</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">2.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Claude Opus</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">3.</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> LLaMa</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<ol>
<li>GPT-4</li>
<li>Claude Opus</li>
<li>LLaMa</li>
</ol>
<p>You can continue to nest syntax within lists.</p>
<h3 id="blockquotes">Blockquotes</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Gunshot, thunder, sword rise. A scene of flowers and blood.</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<blockquote>
<p>Gunshot, thunder, sword rise. A scene of flowers and blood.</p>
</blockquote>
<p>You can continue to nest syntax within blockquotes.</p>
<h3 id="line-breaks">Line Breaks</h3>
<p>Markdown needs a blank line to separate paragraphs.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">If you don't leave a blank line</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">it will be in one paragraph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">First paragraph</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Second paragraph</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>If you don’t leave a blank line
it will be in one paragraph</p>
<p>First paragraph</p>
<p>Second paragraph</p>
<h3 id="separators">Separators</h3>
<p>If you have the habit of writing separators, you can start a new line and enter three dashes <code>---</code> or asterisks <code>***</code>. Leave a blank line before and after when there are paragraphs:</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF;font-weight:bold;--shiki-dark-font-weight:bold">---</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<hr>
<h2 id="advanced-techniques">Advanced Techniques</h2>
<h3 id="inline-html-elements">Inline HTML Elements</h3>
<p>Currently, only some inline HTML elements are supported, including <code>&#x3C;kdb> &#x3C;b> &#x3C;i> &#x3C;em> &#x3C;sup> &#x3C;sub> &#x3C;br></code>, such as</p>
<h4 id="key-display">Key Display</h4>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Use &#x3C;kbd>Ctrl&#x3C;/kbd> + &#x3C;kbd>Alt&#x3C;/kbd> + &#x3C;kbd>Del&#x3C;/kbd> to reboot the computer</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer</p>
<h4 id="bold-italics">Bold Italics</h4>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;b> Markdown also applies here, such as </span><span style="color:#24292E;--shiki-dark:#E1E4E8;font-style:italic;--shiki-dark-font-style:italic">_bold_</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> &#x3C;/b></span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p><b> Markdown also applies here, such as <em>bold</em> </b></p>
<h3 id="other-html-writing">Other HTML Writing</h3>
<h4 id="foldable-blocks">Foldable Blocks</h4>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">&#x3C;details>&#x3C;summary>Click to expand&#x3C;/summary>It is hidden&#x3C;/details></span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<details><summary>Click to expand</summary>It is hidden</details>
<h3 id="tables">Tables</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| Header1  | Header2  |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| -------- | -------- |</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">| Content1 | Content2 |</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>













<table><thead><tr><th>Header1</th><th>Header2</th></tr></thead><tbody><tr><td>Content1</td><td>Content2</td></tr></tbody></table>
<h3 id="footnotes">Footnotes</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Use [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">^footnote</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] to add a footnote at the point of reference.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">[</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">^footnote</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]: Here is the content of the footnote</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>Use <sup><a href="#user-content-fn-footnote" id="user-content-fnref-footnote" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> to add a footnote at the point of reference.</p>
<p>Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).</p>
<h3 id="to-do-lists">To-Do Lists</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [ ] Incomplete task</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#FFAB70">-</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">x</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] Completed task</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled> Incomplete task</li>
<li class="task-list-item"><input type="checkbox" checked disabled> Completed task</li>
</ul>
<h3 id="special-blockquotes">Special Blockquotes</h3>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">!NOTE</span><span style="color:#22863A;--shiki-dark:#85E89D">]</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Useful information that users should also know when browsing the content.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">!TIP</span><span style="color:#22863A;--shiki-dark:#85E89D">]</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Useful tips for doing things better or easier.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">!IMPORTANT</span><span style="color:#22863A;--shiki-dark:#85E89D">]</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Key information that users need to know.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">!WARNING</span><span style="color:#22863A;--shiki-dark:#85E89D">]</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Urgent information that requires users' immediate attention to avoid problems.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> [</span><span style="color:#032F62;--shiki-dark:#DBEDFF;text-decoration:underline;--shiki-dark-text-decoration:underline">!CAUTION</span><span style="color:#22863A;--shiki-dark:#85E89D">]</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#85E89D">> Provides advice on the risks or negative consequences of certain actions.</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<div class="markdown-alert markdown-alert-note" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>NOTE</p>
<p>Useful information that users should also know when browsing the content.</p>
</div>
<div class="markdown-alert markdown-alert-tip" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>TIP</p>
<p>Useful tips for doing things better or easier.</p>
</div>
<div class="markdown-alert markdown-alert-important" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>IMPORTANT</p>
<p>Key information that users need to know.</p>
</div>
<div class="markdown-alert markdown-alert-warning" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>WARNING</p>
<p>Urgent information that requires users’ immediate attention to avoid problems.</p>
</div>
<div class="markdown-alert markdown-alert-caution" dir="auto">
<p class="markdown-alert-title" dir="auto"><svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>CAUTION</p>
<p>Provides advice on the risks or negative consequences of certain actions.</p>
</div>
<h3 id="symbol-escaping">Symbol Escaping</h3>
<p>If you need to use markdown symbols like _ # * in your description but don’t want them to be escaped, you can add a backslash before these symbols, such as <code>\\_</code> <code>\\#</code> <code>\\*</code> to avoid it.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="markdown"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span><span style="color:#24292E;--shiki-dark:#E1E4E8">Don't want the text here to be italic</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\_</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span><span style="color:#24292E;--shiki-dark:#E1E4E8">Don't want the text here to be bold</span><span style="color:#005CC5;--shiki-dark:#79B8FF">\\*\\*</span></span>
<span class="line"></span></code></pre>
<p>Preview:</p>
<p>_Don’t want the text here to be italic_</p>
<p>**Don’t want the text here to be bold**</p>
<hr>
<h2 id="embedding-astro-components">Embedding Astro Components</h2>
<p>The source code is located in the <code>src/components</code> directory, generally not for writing, but for page customization.</p>
<p>You can add new components by following the writing style of existing components.</p>
<section data-footnotes="" class="footnotes"><h2 class="" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-footnote">
<p>Here is the content of the footnote <a href="#user-content-fnref-footnote" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,i={title:"Markdown Syntax Support",publishDate:"2024-07-26T08:00:00.000Z",description:'Markdown is a lightweight "markup language."',tags:["Markdown"],coverImage:{src:"./thumbnail.jpg",color:"#B4C6DA"},language:"English",minutesRead:"4 min read"},l="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/markdown/index.md",r=void 0;function g(){return`
## Basic Syntax

Markdown is a lightweight and easy-to-use syntax for styling your writing.

### Headers

When the content of the article is extensive, you can use headers to segment:

\`\`\`markdown
# Header 1

## Header 2

## Large Header

### Small Header
\`\`\`

Header previews would disrupt the structure of the article, so they are not displayed here.

### Bold and Italics

\`\`\`markdown
_Italic text_

**Bold text**

**_Bold Italic text_**
\`\`\`

Preview:

_Italic text_

**Bold text**

**_Bold Italic text_**

### Links

\`\`\`markdown
Text link [Link Name](http://link-url)
\`\`\`

Preview:

Text link [Link Name](http://link-url)

### Inline Code

\`\`\`markdown
This is an \`inline code\`
\`\`\`

Preview:

This is an \`inline code\`

### Code Blocks

\`\`\`\`markdown
\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`
\`\`\`\`

Preview:

\`\`\`js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`

Currently using shiki as the code highlighting plugin. For supported languages, refer to [shiki / languages](https://shiki.matsu.io/languages.html).

### Inline Formula

\`\`\`markdown
This is an inline formula $e^{i\\pi} + 1 = 0$
\`\`\`

Preview:

This is an inline formula $e^{i\\pi} + 1 = 0$

### Formula Blocks

\`\`\`markdown
$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$
\`\`\`

Preview:

$$
\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx
$$

Currently using KaTeX as the math formula plugin. For supported syntax, refer to [KaTeX Supported Functions](https://katex.org/docs/supported.html).

#### Images

\`\`\`markdown
![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)
\`\`\`

Preview:

![CWorld](https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200)

#### Strikethrough

\`\`\`markdown
~~Strikethrough~~
\`\`\`

Preview:

~~Strikethrough~~

### Lists

Regular unordered list

\`\`\`markdown
- 1
- 2
- 3
\`\`\`

Preview:

- 1
- 2
- 3

Regular ordered list

\`\`\`markdown
1. GPT-4
2. Claude Opus
3. LLaMa
\`\`\`

Preview:

1. GPT-4
2. Claude Opus
3. LLaMa

You can continue to nest syntax within lists.

### Blockquotes

\`\`\`markdown
> Gunshot, thunder, sword rise. A scene of flowers and blood.
\`\`\`

Preview:

> Gunshot, thunder, sword rise. A scene of flowers and blood.

You can continue to nest syntax within blockquotes.

### Line Breaks

Markdown needs a blank line to separate paragraphs.

\`\`\`markdown
If you don't leave a blank line
it will be in one paragraph

First paragraph

Second paragraph
\`\`\`

Preview:

If you don't leave a blank line
it will be in one paragraph

First paragraph

Second paragraph

### Separators

If you have the habit of writing separators, you can start a new line and enter three dashes \`---\` or asterisks \`***\`. Leave a blank line before and after when there are paragraphs:

\`\`\`markdown
---
\`\`\`

Preview:

---

## Advanced Techniques

### Inline HTML Elements

Currently, only some inline HTML elements are supported, including \`<kdb> <b> <i> <em> <sup> <sub> <br>\`, such as

#### Key Display

\`\`\`markdown
Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer
\`\`\`

Preview:

Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> to reboot the computer

#### Bold Italics

\`\`\`markdown
<b> Markdown also applies here, such as _bold_ </b>
\`\`\`

Preview:

<b> Markdown also applies here, such as _bold_ </b>

### Other HTML Writing

#### Foldable Blocks

\`\`\`markdown
<details><summary>Click to expand</summary>It is hidden</details>
\`\`\`

Preview:

<details><summary>Click to expand</summary>It is hidden</details>

### Tables

\`\`\`markdown
| Header1  | Header2  |
| -------- | -------- |
| Content1 | Content2 |
\`\`\`

Preview:

| Header1  | Header2  |
| -------- | -------- |
| Content1 | Content2 |

### Footnotes

\`\`\`markdown
Use [^footnote] to add a footnote at the point of reference.

Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).

[^footnote]: Here is the content of the footnote
\`\`\`

Preview:

Use [^footnote] to add a footnote at the point of reference.

Then, at the end of the document, add the content of the footnote (it will be rendered at the end of the article by default).

[^footnote]: Here is the content of the footnote

### To-Do Lists

\`\`\`markdown
- [ ] Incomplete task
- [x] Completed task
\`\`\`

Preview:

- [ ] Incomplete task
- [x] Completed task

### Special Blockquotes

\`\`\`markdown
> [!NOTE]
> Useful information that users should also know when browsing the content.

> [!TIP]
> Useful tips for doing things better or easier.

> [!IMPORTANT]
> Key information that users need to know.

> [!WARNING]
> Urgent information that requires users' immediate attention to avoid problems.

> [!CAUTION]
> Provides advice on the risks or negative consequences of certain actions.
\`\`\`

Preview:

> [!NOTE]
> Useful information that users should also know when browsing the content.

> [!TIP]
> Useful tips for doing things better or easier.

> [!IMPORTANT]
> Key information that users need to know.

> [!WARNING]
> Urgent information that requires users' immediate attention to avoid problems.

> [!CAUTION]
> Provides advice on the risks or negative consequences of certain actions.

### Symbol Escaping

If you need to use markdown symbols like \\_ # \\* in your description but don't want them to be escaped, you can add a backslash before these symbols, such as \`\\_\` \`\\#\` \`\\*\` to avoid it.

\`\`\`markdown
\\_Don't want the text here to be italic\\_

\\*\\*Don't want the text here to be bold\\*\\*
\`\`\`

Preview:

\\_Don't want the text here to be italic\\_

\\*\\*Don't want the text here to be bold\\*\\*

---

## Embedding Astro Components

The source code is located in the \`src/components\` directory, generally not for writing, but for page customization.

You can add new components by following the writing style of existing components.
`}function f(){return s}function b(){return[{depth:2,slug:"basic-syntax",text:"Basic Syntax"},{depth:3,slug:"headers",text:"Headers"},{depth:3,slug:"bold-and-italics",text:"Bold and Italics"},{depth:3,slug:"links",text:"Links"},{depth:3,slug:"inline-code",text:"Inline Code"},{depth:3,slug:"code-blocks",text:"Code Blocks"},{depth:3,slug:"inline-formula",text:"Inline Formula"},{depth:3,slug:"formula-blocks",text:"Formula Blocks"},{depth:4,slug:"images",text:"Images"},{depth:4,slug:"strikethrough",text:"Strikethrough"},{depth:3,slug:"lists",text:"Lists"},{depth:3,slug:"blockquotes",text:"Blockquotes"},{depth:3,slug:"line-breaks",text:"Line Breaks"},{depth:3,slug:"separators",text:"Separators"},{depth:2,slug:"advanced-techniques",text:"Advanced Techniques"},{depth:3,slug:"inline-html-elements",text:"Inline HTML Elements"},{depth:4,slug:"key-display",text:"Key Display"},{depth:4,slug:"bold-italics",text:"Bold Italics"},{depth:3,slug:"other-html-writing",text:"Other HTML Writing"},{depth:4,slug:"foldable-blocks",text:"Foldable Blocks"},{depth:3,slug:"tables",text:"Tables"},{depth:3,slug:"footnotes",text:"Footnotes"},{depth:3,slug:"to-do-lists",text:"To-Do Lists"},{depth:3,slug:"special-blockquotes",text:"Special Blockquotes"},{depth:3,slug:"symbol-escaping",text:"Symbol Escaping"},{depth:2,slug:"embedding-astro-components",text:"Embedding Astro Components"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const y=a((p,d,c)=>{const{layout:h,...n}=i;return n.file=l,n.url=r,e`${t()}${o(s)}`});export{y as Content,f as compiledContent,y as default,l as file,i as frontmatter,b as getHeadings,g as rawContent,r as url};
