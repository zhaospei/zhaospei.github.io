import{s as h,g as r}from"./_astro_assets.Bv-XFc5j.js";import{c as k,r as d,m as E,u as y}from"./hoisted.BH1iQ6Yg.js";import"./astro/assets-service.DxDlkXph.js";import"./_commonjsHelpers.C4iS2aBk.js";import"./hoisted.33BSnmmm.js";const _={src:"/_astro/seq2seq.nelT3ab3.png",width:510,height:230,format:"png"},u={src:"/_astro/LSTM_Encoder.D6UmMi3N.png",width:812,height:437,format:"png"},m={src:"/_astro/gFRVkq.BUXnM1zJ.png",width:1057,height:574,format:"png"},F={src:"/_astro/gFR1B9.CNoz-lw-.png",width:904,height:574,format:"png"},g={src:"/_astro/gFRGA1.CFQ-UonV.png",width:1082,height:626,format:"png"},D=async function(t){const i={};{const p=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/seq2seq\\.png[^"]*)"',"g");let n,s=0;for(;(n=p.exec(t))!==null;){const a="src/assets/media/post/seq2seq.png_"+s,l=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:o,...e}=l;i[a]=await r({src:_,...e}),s++}}{const p=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/LSTM_Encoder\\.png[^"]*)"',"g");let n,s=0;for(;(n=p.exec(t))!==null;){const a="src/assets/media/post/LSTM_Encoder.png_"+s,l=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:o,...e}=l;i[a]=await r({src:u,...e}),s++}}{const p=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/gFRVkq\\.png[^"]*)"',"g");let n,s=0;for(;(n=p.exec(t))!==null;){const a="src/assets/media/post/gFRVkq.png_"+s,l=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:o,...e}=l;i[a]=await r({src:m,...e}),s++}}{const p=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/gFR1B9\\.png[^"]*)"',"g");let n,s=0;for(;(n=p.exec(t))!==null;){const a="src/assets/media/post/gFR1B9.png_"+s,l=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:o,...e}=l;i[a]=await r({src:F,...e}),s++}}{const p=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/gFRGA1\\.png[^"]*)"',"g");let n,s=0;for(;(n=p.exec(t))!==null;){const a="src/assets/media/post/gFRGA1.png_"+s,l=JSON.parse(n[1].replace(/&#x22;/g,'"')),{src:o,...e}=l;i[a]=await r({src:g,...e}),s++}}return i};async function A(t){return D(t).then(i=>t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(p,n)=>{const s=JSON.parse(n.replace(/&#x22;/g,'"')),a=s.src+"_"+s.index;i[a].srcSet&&i[a].srcSet.values.length>0&&(i[a].attributes.srcset=i[a].srcSet.attribute);const{index:l,...o}=i[a].attributes;return h({src:i[a].src,...o})}))}const c=await A(`<p>Bài viết này giới thiệu cách sử dụng <code>Pytorch</code> để xây dựng mô hình seq2seq và triển khai một ứng dụng dịch máy đơn giản, vui lòng đọc sơ qua bài báo sau trước, <a href="https://arxiv.org/pdf/1406.1078.pdf" rel="nofollow, noopener, noreferrer" target="_blank">Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation(2014)</a>, để hiểu rõ cấu trúc seq2seq hoạt động như thế nào, sau đó đọc bài viết này để đạt được hiệu quả gấp đôi chỉ với một nửa công sức.</p>
<p>Tôi đã thấy rất nhiều sơ đồ cấu trúc mạng seq2seq và tôi cảm thấy sơ đồ này do Pytorch cung cấp là dễ hiểu nhất.</p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/seq2seq.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}">
<p>Trước hết, từ hình trên ta có thể thấy rõ ràng, seq2seq cần hoạt động trên ba “biến”, khác với tất cả các cấu trúc mạng mà tôi đã tiếp xúc trước đây. Chúng ta gọi đầu vào cho Encoder là <code>enc_input</code>, đầu vào cho Decoder là <code>dec_input</code> và đầu ra của Decoder là <code>dec_output</code>. Phần sau đây sử dụng một ví dụ cụ thể để minh họa cho toàn bộ quy trình thực hiện của seq2seq.</p>
<p>Hình bên dưới là cấu trúc Encoder cấu tạo từ LTSM, đầu vào là từng chữ cái (bao gồm cả dấu cách) trong “go away”, chúng ta cần thông tin của <code>hidden state</code> ở thời điểm cuối cùng, bao gồm <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">h_{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">c_{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>.</p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/LSTM_Encoder.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}">
<p>Sau đó sử dụng đầu ra gồm <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">h_{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">c_{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> làm đầu vào cho hidden state đầu tiên của Decoder là <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mn>0</mn></msub><mo separator="true">,</mo><msub><mi>c</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">h_{0}, c_{0}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>, như hình bên dưới. Đồng thời, lớp đầu vào (<code>input layer</code>) đầu của Decoder sẽ được nhập một ký tự đại diện cho phần đầu của câu (Do người dùng tự định nghĩa có thể là “&#x3C;SOS>”, “\\t”, “S”, … đều được chấp nhận. Ở đây, tôi lấy “\\t” làm ví dụ), và sau đó nhận đầu ra “m”, và một hidden state mới <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">h_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">c_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/gFRVkq.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}">
<p>Sau đó lấy <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">h_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">c_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và “m” làm đầu vào, nhận đầu ra là “a”, và một hidden state mới <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">h_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">c_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/gFR1B9.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}">
<p>Lặp lại các bước trên cho đến khi ký tự kết thúc của câu cuối cùng được xuất ra (do người dùng xác định, “&#x3C;EOS>”, “\\n”, “E”, … ở đây tôi lấy “\\n” làm ví dụ).</p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/gFRGA1.png&#x22;,&#x22;alt&#x22;:&#x22;&#x22;,&#x22;index&#x22;:0}">
<p>Trong phần Decoder, bạn sẽ có thể có những câu hỏi sau và tôi sẽ trả lời chúng theo hiểu biết cá nhân.</p>
<ul>
<li>Tôi phài làm như thế nào nếu Decoder không thể dừng lại trong quá trình đào tạo? Tức là ký tự kết thúc của câu không bao giờ được đưa ra.
<ul>
<li>Đầu tiên, trong quá trình huấn luyện, <strong>độ dài của câu mà Decoder sẽ xuất ra sẽ được biết</strong>. Giả sử thời điểm hiện tại đã đến ký tự cuối cùng của độ dài câu và dự đoán không phải là ký tự kết thúc thì cũng không sao, chỉ dừng lại ở đây và tính toán tổn thất.</li>
</ul>
</li>
<li>Tôi phải làm như thế nào nếu Decocder không thể dừng lại trong quá trình kiểm tra? Ví dụ, dự đoán là “wasd s w \\n sdsw \\n … (tiếp tục sinh từ)”
<ul>
<li>Nó sẽ không dừng lại, vì trong quá trình kiểm tra, Decoder cũng có đầu vào, nhưng đầu vào này có rất nhiều placeholder vô nghĩa, chẳng hạn rất nhiều “&#x3C;pad>“. Vì Decoder phải có đầu ra có độ dài hữu hạn. Khi đó bạn chỉ lấy tất cả các ký tự trước ký tự kết thúc đầu tiên. Ví dụ trên kết quả dự đoán cuối cùng là “wasd s w”.</li>
</ul>
</li>
<li>Mối quan hệ giữa đầu vào và đầu ra của Decoder, tức là <code>dec_input</code> và <code>dec_output</code> là gì?
<ul>
<li>Trong quá trình huấn luyện, bất kể Decoder sinh ra kí tự nào tại thời điểm hiện tại, Decoder tại thời điểm tiếp theo sẽ nhập theo “kế hoạch” ban đầu. Ví dụ: giả sử <code>dec_input = "\\twasted"</code>, sau khi nhập “\\t” lần đầu, Decoder sẽ xuất ra chữ “m”, ghi lại thôi, nó sẽ không ảnh hưởng đến thời điểm tiếp theo khi Decoder tiếp tục nhập chữ “w”.</li>
<li>Trong quá trình valid và testing, đầu ra của Decoder tại mỗi thời điểm sẽ ảnh hưởng đến đầu vào, vì trong quá trình valid và testing, mạng không thể nhìn thấy kết quả nên chỉ tiến hành theo vòng lặp. Ví dụ, bây giờ tôi muốn dịch từ “wasted” trong tiếng anh sang tiếng “lãng phí” trong tiếng việt. Sau đó, Decoder bắt đầu với việc nhập ký tự “\\t”, nhận kết quả đầu ra nếu là “m”, tại thời điểm tiếp theo, Decoder sẽ nhập “m”, nhận đầu ra, nếu là “a”, sau đó nhận “a” là đầu vào, nhận đầu ra, … và cứ thế cho đến khi gặp kí tự cuối cùng hoặc đạt độ dài tối đa. Mặc dù từ sinh ra không đúng nhưng mong đợi nhưng phải chấp nhận thôi :smiley:.</li>
</ul>
</li>
</ul>
<p>Hơi lạc đề một chút, cá nhân tôi nghĩ seq2seq rất giống với AutoEncoder.</p>
<h2 id="hãy-bắt-đầu-giải-thích-mã">Hãy bắt đầu giải thích mã</h2>
<p>Đầu tiên, import thư viện, ở đây tôi dùng ‘S’ làm ký tự bắt đầu và ‘E’ làm ký tự kết thúc, nếu đầu vào hoặc đầu ra quá ngắn, tôi sẽ padding nó bằng ký tự ’?‘.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># code by Tae Hwan Jung(Jeff Jung) @graykode, modify by zhaospei</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> numpy </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> np</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.nn </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.utils.data </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">device </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.device(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'cuda'</span><span style="color:#D73A49;--shiki-dark:#F97583"> if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.cuda.is_available() </span><span style="color:#D73A49;--shiki-dark:#F97583">else</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'cpu'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># S: Symbol that shows starting of decoding input</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># E: Symbol that shows starting of decoding output</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># ?: Symbol that will fill in blank sequence if current batch data size is short than n_step</span></span>
<span class="line"></span></code></pre>
<p>Xác định tập dữ liệu và các tham số tập dữ liệu ở đây rất đơn giản, có thể coi như một công việc dịch thuật, chỉ là dịch tiếng Anh sang tiếng Anh.
\`n_step“ là độ dài của từ dài nhất, tất cả các từ khác không đủ dài sẽ được padding bằng ’?‘.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">letter </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [c </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> c </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'SE?abcdefghijklmnopqrstuvwxyz'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">letter2idx </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {n: i </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i, n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> enumerate</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(letter)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">seq_data </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [[</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'women'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'white'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'queen'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'girl'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'boy'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'down'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'high'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'low'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Seq2Seq Parameter</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_step </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> max</span><span style="color:#24292E;--shiki-dark:#E1E4E8">([</span><span style="color:#005CC5;--shiki-dark:#79B8FF">max</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(i), </span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(j)) </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i, j </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq_data]) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># max_len(=5)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 128</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(letter2idx) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># classfication problem</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">batch_size </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 3</span></span>
<span class="line"></span></code></pre>
<p>Sau đây là xử lý dữ liệu, trước tên là xử lý các từ không đủ độ dài, sử dụng ký tự ’?’ để padding; Sau đó thêm flag kết thúc ‘E’ vào cuối dữ liệu đầu vào của Encoder, thêm flag bắt đầu ‘S’ vào đầu dữ liệu đầu vào của Decoder và flag kết thúc ‘E’ vào cuối dữ liệu đầu ra của Decoder. Xem hình phía dưới để hiểu rõ hơn.</p>
<p>{% include image.html url=“/assets/media/post/gFRU1O.png” %}</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> make_data</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(seq_data):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input_all, dec_input_all, dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [], [], []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq_data:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">            seq[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '?'</span><span style="color:#D73A49;--shiki-dark:#F97583"> *</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n_step </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(seq[i])) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># 'man??', 'women'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['m', 'a', 'n', '?', '?', 'E']</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'S'</span><span style="color:#D73A49;--shiki-dark:#F97583"> +</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">])] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['S', 'w', 'o', 'm', 'e', 'n']</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_output </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['w', 'o', 'm', 'e', 'n', 'E']</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input_all.append(np.eye(n_class)[enc_input])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input_all.append(np.eye(n_class)[dec_input])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_output_all.append(dec_output) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># not one-hot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # make tensor</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.Tensor(enc_input_all), torch.Tensor(dec_input_all), torch.LongTensor(dec_output_all)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">'''</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">enc_input_all: [6, n_step+1 (because of 'E'), n_class]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">dec_input_all: [6, n_step+1 (because of 'S'), n_class]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">dec_output_all: [6, n_step+1 (because of 'E')]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">'''</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">enc_input_all, dec_input_all, dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> make_data(seq_data)</span></span>
<span class="line"></span></code></pre>
<p>Ví có ba dữ liệu trả về ở đây, vì vậy cần tùy chỉnh Dataset, cụ thể là kế thừa lớp <code>torch.utils.data.Dataset</code>, sau đó triển khai các phương thức <code>__len__</code> và <code>__getitem__</code> bên trong.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> TranslateDataSet</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Data</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Dataset</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, enc_input_all, dec_input_all, dec_output_all):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input_all</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_input_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_input_all</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_output_all</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __len__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self): </span><span style="color:#6A737D;--shiki-dark:#6A737D"># return dataset size</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __getitem__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, idx):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all[idx], </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_input_all[idx], </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_output_all[idx]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">loader </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Data.DataLoader(TranslateDataSet(enc_input_all, dec_input_all, dec_output_all), batch_size, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">True</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre>
<p>Xác định mô hình seq2seq bên dưới, tôi sử dụng RNN đơn giản làm Encoder và Decoder. Nếu bạn đã quen thuộc với RNN thì thực sự không có gì phải nói về việc xác định cấu trúc mạng, tôi cũng đã viết nhận xét rất rõ ràng, bao gồm cả những thay đổi về kích thước dữ liệu.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Model</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Seq2Seq</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">nn</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Module</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(Seq2Seq, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).</span><span style="color:#005CC5;--shiki-dark:#79B8FF">__init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">()</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.encoder </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.RNN(</span><span style="color:#E36209;--shiki-dark:#FFAB70">input_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class, </span><span style="color:#E36209;--shiki-dark:#FFAB70">hidden_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden, </span><span style="color:#E36209;--shiki-dark:#FFAB70">dropout</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.5</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># encoder</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.decoder </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.RNN(</span><span style="color:#E36209;--shiki-dark:#FFAB70">input_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class, </span><span style="color:#E36209;--shiki-dark:#FFAB70">hidden_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden, </span><span style="color:#E36209;--shiki-dark:#FFAB70">dropout</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.5</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># decoder</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.fc </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.Linear(n_hidden, n_class)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> forward</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, enc_input, enc_hidden, dec_input):</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # enc_input(=input_batch): [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # dec_inpu(=output_batch): [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># enc_input: [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_input.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># dec_input: [n_step+1, batch_size, n_class]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # h_t : [num_layers(=1) * num_directions(=1), batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        _, h_t </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.encoder(enc_input, enc_hidden)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # outputs : [n_step+1, batch_size, num_directions(=1) * n_hidden(=128)]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        outputs, _ </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.decoder(dec_input, h_t)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        model </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.fc(outputs) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># model : [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">model </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Seq2Seq().to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">criterion </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.CrossEntropyLoss().to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">optimizer </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.optim.Adam(model.parameters(), </span><span style="color:#E36209;--shiki-dark:#FFAB70">lr</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.001</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span></code></pre>
<p>Sau đây là phần training. Vì giá trị đầu ra là dữ liệu ba chiều nên việc tính toán loss đòi hỏi phải tính toán từng mẫu riêng biệt, do đó có mã vòng for sau đây.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">5000</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input_batch, dec_input_batch, dec_output_batch </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> loader:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # make hidden shape [num_layers * num_directions, batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      h_0 </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.zeros(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, batch_size, n_hidden).to(device)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      (enc_input_batch, dec_intput_batch, dec_output_batch) </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (enc_input_batch.to(device), dec_input_batch.to(device), dec_output_batch.to(device))</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # enc_input_batch : [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # dec_intput_batch : [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # dec_output_batch : [batch_size, n_step+1], not one-hot</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      pred </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model(enc_input_batch, h_0, dec_intput_batch)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # pred : [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      pred </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> pred.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># [batch_size, n_step+1(=6), n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      loss </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">      for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(dec_output_batch)):</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">          # pred[i] : [n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">          # dec_output_batch[i] : [n_step+1]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">          loss </span><span style="color:#D73A49;--shiki-dark:#F97583">+=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> criterion(pred[i], dec_output_batch[i])</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">      if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">%</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1000</span><span style="color:#D73A49;--shiki-dark:#F97583"> ==</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">          print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'Epoch:'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#005CC5;--shiki-dark:#79B8FF">%04d</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#D73A49;--shiki-dark:#F97583"> %</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">), </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'cost ='</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#D73A49;--shiki-dark:#F97583">:.6f</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.format(loss))</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">          </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      loss.backward()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      optimizer.step()</span></span>
<span class="line"></span></code></pre>
<p>Như có thể thấy từ mã testing bên dưới, trong quá trình testing, đầu vào của Decoder là một phần giữ chỗ vô nghĩa và độ dài của vị trí bị chiếm giữ là độ dài tối đa <code>n_step</code>. Và tìm vị trí của dấu kết thúc đầu tiên ở đầu ra, chặn tất cả các ký tự trước nó.</p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Test</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> translate</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(word):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input, dec_input, _ </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> make_data([[word, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'?'</span><span style="color:#D73A49;--shiki-dark:#F97583"> *</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n_step]])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input, dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input.to(device), dec_input.to(device)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # make hidden shape [num_layers * num_directions, batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    hidden </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.zeros(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, n_hidden).to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    output </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model(enc_input, hidden, dec_input)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # output : [n_step+1, batch_size, n_class]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    predict </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> output.data.max(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">keepdim</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">True</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># select n_class dimension</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    decoded </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> predict]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    translated </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.join(decoded[:decoded.index(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> translated.replace(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'?'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">''</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'test'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'mans ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'mans'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"></span></code></pre>
<h2 id="mã-hoàn-chỉnh-như-sau">Mã hoàn chỉnh như sau</h2>
<p>Phần thực thi bạn có thể xem tại notebook trên kaggle tại <a href="https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925" rel="nofollow, noopener, noreferrer" target="_blank">https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925</a></p>
<pre class="astro-code astro-code-themes github-light github-dark" style="background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="python"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># code by Tae Hwan Jung(Jeff Jung) @graykode, modify by zhaospei</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> numpy </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> np</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.nn </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">import</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.utils.data </span><span style="color:#D73A49;--shiki-dark:#F97583">as</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">device </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.device(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'cuda'</span><span style="color:#D73A49;--shiki-dark:#F97583"> if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.cuda.is_available() </span><span style="color:#D73A49;--shiki-dark:#F97583">else</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'cpu'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># S: Symbol that shows starting of decoding input</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># E: Symbol that shows starting of decoding output</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># ?: Symbol that will fill in blank sequence if current batch data size is short than n_step</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">letter </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [c </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> c </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'SE?abcdefghijklmnopqrstuvwxyz'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">letter2idx </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> {n: i </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i, n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> enumerate</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(letter)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">seq_data </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [[</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'women'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'white'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'queen'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'girl'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'boy'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'down'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">], [</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'high'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'low'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Seq2Seq Parameter</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_step </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> max</span><span style="color:#24292E;--shiki-dark:#E1E4E8">([</span><span style="color:#005CC5;--shiki-dark:#79B8FF">max</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(i), </span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(j)) </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i, j </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq_data]) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># max_len(=5)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 128</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(letter2idx) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># classfication problem</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">batch_size </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> make_data</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(seq_data):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input_all, dec_input_all, dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [], [], []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq_data:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">            seq[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> '?'</span><span style="color:#D73A49;--shiki-dark:#F97583"> *</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (n_step </span><span style="color:#D73A49;--shiki-dark:#F97583">-</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(seq[i])) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># 'man??', 'women'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['m', 'a', 'n', '?', '?', 'E']</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'S'</span><span style="color:#D73A49;--shiki-dark:#F97583"> +</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">])] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['S', 'w', 'o', 'm', 'e', 'n']</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_output </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter2idx[n] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (seq[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> 'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># ['w', 'o', 'm', 'e', 'n', 'E']</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input_all.append(np.eye(n_class)[enc_input])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input_all.append(np.eye(n_class)[dec_input])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_output_all.append(dec_output) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># not one-hot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # make tensor</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.Tensor(enc_input_all), torch.Tensor(dec_input_all), torch.LongTensor(dec_output_all)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">'''</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">enc_input_all: [6, n_step+1 (because of 'E'), n_class]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">dec_input_all: [6, n_step+1 (because of 'S'), n_class]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">dec_output_all: [6, n_step+1 (because of 'E')]</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#9ECBFF">'''</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">enc_input_all, dec_input_all, dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> make_data(seq_data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> TranslateDataSet</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Data</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Dataset</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, enc_input_all, dec_input_all, dec_output_all):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input_all</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_input_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_input_all</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_output_all </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_output_all</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __len__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self): </span><span style="color:#6A737D;--shiki-dark:#6A737D"># return dataset size</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __getitem__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, idx):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.enc_input_all[idx], </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_input_all[idx], </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.dec_output_all[idx]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">loader </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Data.DataLoader(TranslateDataSet(enc_input_all, dec_input_all, dec_output_all), batch_size, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">True</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Model</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">class</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> Seq2Seq</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#6F42C1;--shiki-dark:#B392F0">nn</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.</span><span style="color:#6F42C1;--shiki-dark:#B392F0">Module</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> __init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self):</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        super</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(Seq2Seq, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">).</span><span style="color:#005CC5;--shiki-dark:#79B8FF">__init__</span><span style="color:#24292E;--shiki-dark:#E1E4E8">()</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.encoder </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.RNN(</span><span style="color:#E36209;--shiki-dark:#FFAB70">input_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class, </span><span style="color:#E36209;--shiki-dark:#FFAB70">hidden_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden, </span><span style="color:#E36209;--shiki-dark:#FFAB70">dropout</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.5</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># encoder</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.decoder </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.RNN(</span><span style="color:#E36209;--shiki-dark:#FFAB70">input_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_class, </span><span style="color:#E36209;--shiki-dark:#FFAB70">hidden_size</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8">n_hidden, </span><span style="color:#E36209;--shiki-dark:#FFAB70">dropout</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.5</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># decoder</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">        self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.fc </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.Linear(n_hidden, n_class)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> forward</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(self, enc_input, enc_hidden, dec_input):</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # enc_input(=input_batch): [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # dec_inpu(=output_batch): [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        enc_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># enc_input: [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> dec_input.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># dec_input: [n_step+1, batch_size, n_class]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # h_t : [num_layers(=1) * num_directions(=1), batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        _, h_t </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.encoder(enc_input, enc_hidden)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">        # outputs : [n_step+1, batch_size, num_directions(=1) * n_hidden(=128)]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        outputs, _ </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.decoder(dec_input, h_t)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">        model </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> self</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.fc(outputs) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># model : [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">        return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">model </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> Seq2Seq().to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">criterion </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> nn.CrossEntropyLoss().to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">optimizer </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.optim.Adam(model.parameters(), </span><span style="color:#E36209;--shiki-dark:#FFAB70">lr</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0.001</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">5000</span><span style="color:#24292E;--shiki-dark:#E1E4E8">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">  for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input_batch, dec_input_batch, dec_output_batch </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> loader:</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # make hidden shape [num_layers * num_directions, batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      h_0 </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.zeros(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, batch_size, n_hidden).to(device)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      (enc_input_batch, dec_intput_batch, dec_output_batch) </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (enc_input_batch.to(device), dec_input_batch.to(device), dec_output_batch.to(device))</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # enc_input_batch : [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # dec_intput_batch : [batch_size, n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # dec_output_batch : [batch_size, n_step+1], not one-hot</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      pred </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model(enc_input_batch, h_0, dec_intput_batch)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">      # pred : [n_step+1, batch_size, n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      pred </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> pred.transpose(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#6A737D;--shiki-dark:#6A737D"># [batch_size, n_step+1(=6), n_class]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      loss </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">      for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> range</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">len</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(dec_output_batch)):</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">          # pred[i] : [n_step+1, n_class]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">          # dec_output_batch[i] : [n_step+1]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">          loss </span><span style="color:#D73A49;--shiki-dark:#F97583">+=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> criterion(pred[i], dec_output_batch[i])</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">      if</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">) </span><span style="color:#D73A49;--shiki-dark:#F97583">%</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1000</span><span style="color:#D73A49;--shiki-dark:#F97583"> ==</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 0</span><span style="color:#24292E;--shiki-dark:#E1E4E8">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">          print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'Epoch:'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#005CC5;--shiki-dark:#79B8FF">%04d</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#D73A49;--shiki-dark:#F97583"> %</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> (epoch </span><span style="color:#D73A49;--shiki-dark:#F97583">+</span><span style="color:#005CC5;--shiki-dark:#79B8FF"> 1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">), </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'cost ='</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#005CC5;--shiki-dark:#79B8FF">{</span><span style="color:#D73A49;--shiki-dark:#F97583">:.6f</span><span style="color:#005CC5;--shiki-dark:#79B8FF">}</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.format(loss))</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">          </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      loss.backward()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">      optimizer.step()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    </span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D"># Test</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">def</span><span style="color:#6F42C1;--shiki-dark:#B392F0"> translate</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(word):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input, dec_input, _ </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> make_data([[word, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">'?'</span><span style="color:#D73A49;--shiki-dark:#F97583"> *</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> n_step]])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    enc_input, dec_input </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> enc_input.to(device), dec_input.to(device)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # make hidden shape [num_layers * num_directions, batch_size, n_hidden]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    hidden </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> torch.zeros(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, n_hidden).to(device)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    output </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> model(enc_input, hidden, dec_input)</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A737D">    # output : [n_step+1, batch_size, n_class]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    predict </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> output.data.max(</span><span style="color:#005CC5;--shiki-dark:#79B8FF">2</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#E36209;--shiki-dark:#FFAB70">keepdim</span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#005CC5;--shiki-dark:#79B8FF">True</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)[</span><span style="color:#005CC5;--shiki-dark:#79B8FF">1</span><span style="color:#24292E;--shiki-dark:#E1E4E8">] </span><span style="color:#6A737D;--shiki-dark:#6A737D"># select n_class dimension</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    decoded </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> [letter[i] </span><span style="color:#D73A49;--shiki-dark:#F97583">for</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> i </span><span style="color:#D73A49;--shiki-dark:#F97583">in</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> predict]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E1E4E8">    translated </span><span style="color:#D73A49;--shiki-dark:#F97583">=</span><span style="color:#032F62;--shiki-dark:#9ECBFF"> ''</span><span style="color:#24292E;--shiki-dark:#E1E4E8">.join(decoded[:decoded.index(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'E'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#F97583">    return</span><span style="color:#24292E;--shiki-dark:#E1E4E8"> translated.replace(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'?'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, </span><span style="color:#032F62;--shiki-dark:#9ECBFF">''</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'test'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'man'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'mans ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'mans'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'king'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'black'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#79B8FF">print</span><span style="color:#24292E;--shiki-dark:#E1E4E8">(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up ->'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">, translate(</span><span style="color:#032F62;--shiki-dark:#9ECBFF">'up'</span><span style="color:#24292E;--shiki-dark:#E1E4E8">))</span></span>
<span class="line"></span></code></pre>
<h2 id="tham-khảo">Tham khảo</h2>
<p>[1] <a href="https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925" rel="nofollow, noopener, noreferrer" target="_blank">https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925</a></p>`),C={title:"Triển khai seq2seq với Pytorch",publishDate:"2023-10-20T08:00:00.000Z",description:"Bài viết này giới thiệu cách sử dụng Pytorch để xây dựng mô hình seq2seq và triển khai một ứng dụng dịch máy đơn giản",tags:["NLP","Pytorch","Model"],coverImage:{src:"src//assets/media/feature/pytorch.png",color:"#64574D"},language:"Vietnamese",minutesRead:"12 min read"},b="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/seq2seq-pytorch/index.md",v=void 0;function z(){return`
Bài viết này giới thiệu cách sử dụng \`Pytorch\` để xây dựng mô hình seq2seq và triển khai một ứng dụng dịch máy đơn giản, vui lòng đọc sơ qua bài báo sau trước, [Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation(2014)](https://arxiv.org/pdf/1406.1078.pdf), để hiểu rõ cấu trúc seq2seq hoạt động như thế nào, sau đó đọc bài viết này để đạt được hiệu quả gấp đôi chỉ với một nửa công sức.

Tôi đã thấy rất nhiều sơ đồ cấu trúc mạng seq2seq và tôi cảm thấy sơ đồ này do Pytorch cung cấp là dễ hiểu nhất.

![](src/assets/media/post/seq2seq.png)

Trước hết, từ hình trên ta có thể thấy rõ ràng, seq2seq cần hoạt động trên ba "biến", khác với tất cả các cấu trúc mạng mà tôi đã tiếp xúc trước đây. Chúng ta gọi đầu vào cho Encoder là \`enc_input\`, đầu vào cho Decoder là \`dec_input\` và đầu ra của Decoder là \`dec_output\`. Phần sau đây sử dụng một ví dụ cụ thể để minh họa cho toàn bộ quy trình thực hiện của seq2seq.

Hình bên dưới là cấu trúc Encoder cấu tạo từ LTSM, đầu vào là từng chữ cái (bao gồm cả dấu cách) trong "go away", chúng ta cần thông tin của \`hidden state\` ở thời điểm cuối cùng, bao gồm $$h_{t}$$ và $$c_{t}$$.

![](src/assets/media/post/LSTM_Encoder.png)

Sau đó sử dụng đầu ra gồm $$h_{t}$$ và $$c_{t}$$ làm đầu vào cho hidden state đầu tiên của Decoder là $$h_{0}, c_{0}$$, như hình bên dưới. Đồng thời, lớp đầu vào (\`input layer\`) đầu của Decoder sẽ được nhập một ký tự đại diện cho phần đầu của câu (Do người dùng tự định nghĩa có thể là "\\<SOS\\>", "\\t", "S", .... đều được chấp nhận. Ở đây, tôi lấy "\\t" làm ví dụ), và sau đó nhận đầu ra "m", và một hidden state mới $$h_{1}$$ và $$c_{1}$$

![](src/assets/media/post/gFRVkq.png)

Sau đó lấy $$h_{1}$$, $$c_{1}$$ và "m" làm đầu vào, nhận đầu ra là "a", và một hidden state mới $$h_{2}$$ và $$c_{2}$$

![](src/assets/media/post/gFR1B9.png)

Lặp lại các bước trên cho đến khi ký tự kết thúc của câu cuối cùng được xuất ra (do người dùng xác định, "\\<EOS\\>", "\\n", "E", ... ở đây tôi lấy "\\n" làm ví dụ).

![](src/assets/media/post/gFRGA1.png)

Trong phần Decoder, bạn sẽ có thể có những câu hỏi sau và tôi sẽ trả lời chúng theo hiểu biết cá nhân.

- Tôi phài làm như thế nào nếu Decoder không thể dừng lại trong quá trình đào tạo? Tức là ký tự kết thúc của câu không bao giờ được đưa ra.
    - Đầu tiên, trong quá trình huấn luyện, **độ dài của câu mà Decoder sẽ xuất ra sẽ được biết**. Giả sử thời điểm hiện tại đã đến ký tự cuối cùng của độ dài câu và dự đoán không phải là ký tự kết thúc thì cũng không sao, chỉ dừng lại ở đây và tính toán tổn thất.
- Tôi phải làm như thế nào nếu Decocder không thể dừng lại trong quá trình kiểm tra? Ví dụ, dự đoán là "wasd s w \\n sdsw \\n ...... (tiếp tục sinh từ)" 
    - Nó sẽ không dừng lại, vì trong quá trình kiểm tra, Decoder cũng có đầu vào, nhưng đầu vào này có rất nhiều placeholder vô nghĩa, chẳng hạn rất nhiều "\\<pad\\>". Vì Decoder phải có đầu ra có độ dài hữu hạn. Khi đó bạn chỉ lấy tất cả các ký tự trước ký tự kết thúc đầu tiên. Ví dụ trên kết quả dự đoán cuối cùng là "wasd s w".
- Mối quan hệ giữa đầu vào và đầu ra của Decoder, tức là \`dec_input\` và \`dec_output\` là gì?
    - Trong quá trình huấn luyện, bất kể Decoder sinh ra kí tự nào tại thời điểm hiện tại, Decoder tại thời điểm tiếp theo sẽ nhập theo "kế hoạch" ban đầu. Ví dụ: giả sử \`dec_input = "\\twasted"\`, sau khi nhập "\\t" lần đầu, Decoder sẽ xuất ra chữ "m", ghi lại thôi, nó sẽ không ảnh hưởng đến thời điểm tiếp theo khi Decoder tiếp tục nhập chữ "w".
    - Trong quá trình valid và testing, đầu ra của Decoder tại mỗi thời điểm sẽ ảnh hưởng đến đầu vào, vì trong quá trình valid và testing, mạng không thể nhìn thấy kết quả nên chỉ tiến hành theo vòng lặp. Ví dụ, bây giờ tôi muốn dịch từ "wasted" trong tiếng anh sang tiếng "lãng phí" trong tiếng việt. Sau đó, Decoder bắt đầu với việc nhập ký tự "\\t", nhận kết quả đầu ra nếu là "m", tại thời điểm tiếp theo, Decoder sẽ nhập "m", nhận đầu ra, nếu là "a", sau đó nhận "a" là đầu vào, nhận đầu ra, ... và cứ thế cho đến khi gặp kí tự cuối cùng hoặc đạt độ dài tối đa. Mặc dù từ sinh ra không đúng nhưng mong đợi nhưng phải chấp nhận thôi :smiley:.

Hơi lạc đề một chút, cá nhân tôi nghĩ seq2seq rất giống với AutoEncoder.

## Hãy bắt đầu giải thích mã

Đầu tiên, import thư viện, ở đây tôi dùng 'S' làm ký tự bắt đầu và 'E' làm ký tự kết thúc, nếu đầu vào hoặc đầu ra quá ngắn, tôi sẽ padding nó bằng ký tự '?'.

\`\`\`python
# code by Tae Hwan Jung(Jeff Jung) @graykode, modify by zhaospei
import torch
import numpy as np
import torch.nn as nn
import torch.utils.data as Data

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# S: Symbol that shows starting of decoding input
# E: Symbol that shows starting of decoding output
# ?: Symbol that will fill in blank sequence if current batch data size is short than n_step
\`\`\`

Xác định tập dữ liệu và các tham số tập dữ liệu ở đây rất đơn giản, có thể coi như một công việc dịch thuật, chỉ là dịch tiếng Anh sang tiếng Anh.
\`n_step\`\` là độ dài của từ dài nhất, tất cả các từ khác không đủ dài sẽ được padding bằng '?'.

\`\`\`python
letter = [c for c in 'SE?abcdefghijklmnopqrstuvwxyz']
letter2idx = {n: i for i, n in enumerate(letter)}

seq_data = [['man', 'women'], ['black', 'white'], ['king', 'queen'], ['girl', 'boy'], ['up', 'down'], ['high', 'low']]

# Seq2Seq Parameter
n_step = max([max(len(i), len(j)) for i, j in seq_data]) # max_len(=5)
n_hidden = 128
n_class = len(letter2idx) # classfication problem
batch_size = 3
\`\`\`

Sau đây là xử lý dữ liệu, trước tên là xử lý các từ không đủ độ dài, sử dụng ký tự '?' để padding; Sau đó thêm flag kết thúc 'E' vào cuối dữ liệu đầu vào của Encoder, thêm flag bắt đầu 'S' vào đầu dữ liệu đầu vào của Decoder và flag kết thúc 'E' vào cuối dữ liệu đầu ra của Decoder. Xem hình phía dưới để hiểu rõ hơn.

{% include image.html url="/assets/media/post/gFRU1O.png" %}

\`\`\`python
def make_data(seq_data):
    enc_input_all, dec_input_all, dec_output_all = [], [], []

    for seq in seq_data:
        for i in range(2):
            seq[i] = seq[i] + '?' * (n_step - len(seq[i])) # 'man??', 'women'

        enc_input = [letter2idx[n] for n in (seq[0] + 'E')] # ['m', 'a', 'n', '?', '?', 'E']
        dec_input = [letter2idx[n] for n in ('S' + seq[1])] # ['S', 'w', 'o', 'm', 'e', 'n']
        dec_output = [letter2idx[n] for n in (seq[1] + 'E')] # ['w', 'o', 'm', 'e', 'n', 'E']

        enc_input_all.append(np.eye(n_class)[enc_input])
        dec_input_all.append(np.eye(n_class)[dec_input])
        dec_output_all.append(dec_output) # not one-hot

    # make tensor
    return torch.Tensor(enc_input_all), torch.Tensor(dec_input_all), torch.LongTensor(dec_output_all)

'''
enc_input_all: [6, n_step+1 (because of 'E'), n_class]
dec_input_all: [6, n_step+1 (because of 'S'), n_class]
dec_output_all: [6, n_step+1 (because of 'E')]
'''
enc_input_all, dec_input_all, dec_output_all = make_data(seq_data)
\`\`\`

Ví có ba dữ liệu trả về ở đây, vì vậy cần tùy chỉnh Dataset, cụ thể là kế thừa lớp \`torch.utils.data.Dataset\`, sau đó triển khai các phương thức \`__len__\` và \`__getitem__\` bên trong.

\`\`\`python
class TranslateDataSet(Data.Dataset):
    def __init__(self, enc_input_all, dec_input_all, dec_output_all):
        self.enc_input_all = enc_input_all
        self.dec_input_all = dec_input_all
        self.dec_output_all = dec_output_all
    
    def __len__(self): # return dataset size
        return len(self.enc_input_all)
    
    def __getitem__(self, idx):
        return self.enc_input_all[idx], self.dec_input_all[idx], self.dec_output_all[idx]

loader = Data.DataLoader(TranslateDataSet(enc_input_all, dec_input_all, dec_output_all), batch_size, True)
\`\`\`

Xác định mô hình seq2seq bên dưới, tôi sử dụng RNN đơn giản làm Encoder và Decoder. Nếu bạn đã quen thuộc với RNN thì thực sự không có gì phải nói về việc xác định cấu trúc mạng, tôi cũng đã viết nhận xét rất rõ ràng, bao gồm cả những thay đổi về kích thước dữ liệu.

\`\`\`python
# Model
class Seq2Seq(nn.Module):
    def __init__(self):
        super(Seq2Seq, self).__init__()
        self.encoder = nn.RNN(input_size=n_class, hidden_size=n_hidden, dropout=0.5) # encoder
        self.decoder = nn.RNN(input_size=n_class, hidden_size=n_hidden, dropout=0.5) # decoder
        self.fc = nn.Linear(n_hidden, n_class)

    def forward(self, enc_input, enc_hidden, dec_input):
        # enc_input(=input_batch): [batch_size, n_step+1, n_class]
        # dec_inpu(=output_batch): [batch_size, n_step+1, n_class]
        enc_input = enc_input.transpose(0, 1) # enc_input: [n_step+1, batch_size, n_class]
        dec_input = dec_input.transpose(0, 1) # dec_input: [n_step+1, batch_size, n_class]

        # h_t : [num_layers(=1) * num_directions(=1), batch_size, n_hidden]
        _, h_t = self.encoder(enc_input, enc_hidden)
        # outputs : [n_step+1, batch_size, num_directions(=1) * n_hidden(=128)]
        outputs, _ = self.decoder(dec_input, h_t)

        model = self.fc(outputs) # model : [n_step+1, batch_size, n_class]
        return model

model = Seq2Seq().to(device)
criterion = nn.CrossEntropyLoss().to(device)
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
\`\`\`

Sau đây là phần training. Vì giá trị đầu ra là dữ liệu ba chiều nên việc tính toán loss đòi hỏi phải tính toán từng mẫu riêng biệt, do đó có mã vòng for sau đây.

\`\`\`python
for epoch in range(5000):
  for enc_input_batch, dec_input_batch, dec_output_batch in loader:
      # make hidden shape [num_layers * num_directions, batch_size, n_hidden]
      h_0 = torch.zeros(1, batch_size, n_hidden).to(device)

      (enc_input_batch, dec_intput_batch, dec_output_batch) = (enc_input_batch.to(device), dec_input_batch.to(device), dec_output_batch.to(device))
      # enc_input_batch : [batch_size, n_step+1, n_class]
      # dec_intput_batch : [batch_size, n_step+1, n_class]
      # dec_output_batch : [batch_size, n_step+1], not one-hot
      pred = model(enc_input_batch, h_0, dec_intput_batch)
      # pred : [n_step+1, batch_size, n_class]
      pred = pred.transpose(0, 1) # [batch_size, n_step+1(=6), n_class]
      loss = 0
      for i in range(len(dec_output_batch)):
          # pred[i] : [n_step+1, n_class]
          # dec_output_batch[i] : [n_step+1]
          loss += criterion(pred[i], dec_output_batch[i])
      if (epoch + 1) % 1000 == 0:
          print('Epoch:', '%04d' % (epoch + 1), 'cost =', '{:.6f}'.format(loss))
          
      optimizer.zero_grad()
      loss.backward()
      optimizer.step()
\`\`\`
Như có thể thấy từ mã testing bên dưới, trong quá trình testing, đầu vào của Decoder là một phần giữ chỗ vô nghĩa và độ dài của vị trí bị chiếm giữ là độ dài tối đa \`n_step\`. Và tìm vị trí của dấu kết thúc đầu tiên ở đầu ra, chặn tất cả các ký tự trước nó.

\`\`\`python
# Test
def translate(word):
    enc_input, dec_input, _ = make_data([[word, '?' * n_step]])
    enc_input, dec_input = enc_input.to(device), dec_input.to(device)
    # make hidden shape [num_layers * num_directions, batch_size, n_hidden]
    hidden = torch.zeros(1, 1, n_hidden).to(device)
    output = model(enc_input, hidden, dec_input)
    # output : [n_step+1, batch_size, n_class]

    predict = output.data.max(2, keepdim=True)[1] # select n_class dimension
    decoded = [letter[i] for i in predict]
    translated = ''.join(decoded[:decoded.index('E')])

    return translated.replace('?', '')

print('test')
print('man ->', translate('man'))
print('mans ->', translate('mans'))
print('king ->', translate('king'))
print('black ->', translate('black'))
print('up ->', translate('up'))
\`\`\`

## Mã hoàn chỉnh như sau

Phần thực thi bạn có thể xem tại notebook trên kaggle tại [https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925](https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925)

\`\`\`python
# code by Tae Hwan Jung(Jeff Jung) @graykode, modify by zhaospei
import torch
import numpy as np
import torch.nn as nn
import torch.utils.data as Data

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
# S: Symbol that shows starting of decoding input
# E: Symbol that shows starting of decoding output
# ?: Symbol that will fill in blank sequence if current batch data size is short than n_step

letter = [c for c in 'SE?abcdefghijklmnopqrstuvwxyz']
letter2idx = {n: i for i, n in enumerate(letter)}

seq_data = [['man', 'women'], ['black', 'white'], ['king', 'queen'], ['girl', 'boy'], ['up', 'down'], ['high', 'low']]

# Seq2Seq Parameter
n_step = max([max(len(i), len(j)) for i, j in seq_data]) # max_len(=5)
n_hidden = 128
n_class = len(letter2idx) # classfication problem
batch_size = 3

def make_data(seq_data):
    enc_input_all, dec_input_all, dec_output_all = [], [], []

    for seq in seq_data:
        for i in range(2):
            seq[i] = seq[i] + '?' * (n_step - len(seq[i])) # 'man??', 'women'

        enc_input = [letter2idx[n] for n in (seq[0] + 'E')] # ['m', 'a', 'n', '?', '?', 'E']
        dec_input = [letter2idx[n] for n in ('S' + seq[1])] # ['S', 'w', 'o', 'm', 'e', 'n']
        dec_output = [letter2idx[n] for n in (seq[1] + 'E')] # ['w', 'o', 'm', 'e', 'n', 'E']

        enc_input_all.append(np.eye(n_class)[enc_input])
        dec_input_all.append(np.eye(n_class)[dec_input])
        dec_output_all.append(dec_output) # not one-hot

    # make tensor
    return torch.Tensor(enc_input_all), torch.Tensor(dec_input_all), torch.LongTensor(dec_output_all)

'''
enc_input_all: [6, n_step+1 (because of 'E'), n_class]
dec_input_all: [6, n_step+1 (because of 'S'), n_class]
dec_output_all: [6, n_step+1 (because of 'E')]
'''
enc_input_all, dec_input_all, dec_output_all = make_data(seq_data)

class TranslateDataSet(Data.Dataset):
    def __init__(self, enc_input_all, dec_input_all, dec_output_all):
        self.enc_input_all = enc_input_all
        self.dec_input_all = dec_input_all
        self.dec_output_all = dec_output_all
    
    def __len__(self): # return dataset size
        return len(self.enc_input_all)
    
    def __getitem__(self, idx):
        return self.enc_input_all[idx], self.dec_input_all[idx], self.dec_output_all[idx]

loader = Data.DataLoader(TranslateDataSet(enc_input_all, dec_input_all, dec_output_all), batch_size, True)

# Model
class Seq2Seq(nn.Module):
    def __init__(self):
        super(Seq2Seq, self).__init__()
        self.encoder = nn.RNN(input_size=n_class, hidden_size=n_hidden, dropout=0.5) # encoder
        self.decoder = nn.RNN(input_size=n_class, hidden_size=n_hidden, dropout=0.5) # decoder
        self.fc = nn.Linear(n_hidden, n_class)

    def forward(self, enc_input, enc_hidden, dec_input):
        # enc_input(=input_batch): [batch_size, n_step+1, n_class]
        # dec_inpu(=output_batch): [batch_size, n_step+1, n_class]
        enc_input = enc_input.transpose(0, 1) # enc_input: [n_step+1, batch_size, n_class]
        dec_input = dec_input.transpose(0, 1) # dec_input: [n_step+1, batch_size, n_class]

        # h_t : [num_layers(=1) * num_directions(=1), batch_size, n_hidden]
        _, h_t = self.encoder(enc_input, enc_hidden)
        # outputs : [n_step+1, batch_size, num_directions(=1) * n_hidden(=128)]
        outputs, _ = self.decoder(dec_input, h_t)

        model = self.fc(outputs) # model : [n_step+1, batch_size, n_class]
        return model

model = Seq2Seq().to(device)
criterion = nn.CrossEntropyLoss().to(device)
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(5000):
  for enc_input_batch, dec_input_batch, dec_output_batch in loader:
      # make hidden shape [num_layers * num_directions, batch_size, n_hidden]
      h_0 = torch.zeros(1, batch_size, n_hidden).to(device)

      (enc_input_batch, dec_intput_batch, dec_output_batch) = (enc_input_batch.to(device), dec_input_batch.to(device), dec_output_batch.to(device))
      # enc_input_batch : [batch_size, n_step+1, n_class]
      # dec_intput_batch : [batch_size, n_step+1, n_class]
      # dec_output_batch : [batch_size, n_step+1], not one-hot
      pred = model(enc_input_batch, h_0, dec_intput_batch)
      # pred : [n_step+1, batch_size, n_class]
      pred = pred.transpose(0, 1) # [batch_size, n_step+1(=6), n_class]
      loss = 0
      for i in range(len(dec_output_batch)):
          # pred[i] : [n_step+1, n_class]
          # dec_output_batch[i] : [n_step+1]
          loss += criterion(pred[i], dec_output_batch[i])
      if (epoch + 1) % 1000 == 0:
          print('Epoch:', '%04d' % (epoch + 1), 'cost =', '{:.6f}'.format(loss))
          
      optimizer.zero_grad()
      loss.backward()
      optimizer.step()
    
# Test
def translate(word):
    enc_input, dec_input, _ = make_data([[word, '?' * n_step]])
    enc_input, dec_input = enc_input.to(device), dec_input.to(device)
    # make hidden shape [num_layers * num_directions, batch_size, n_hidden]
    hidden = torch.zeros(1, 1, n_hidden).to(device)
    output = model(enc_input, hidden, dec_input)
    # output : [n_step+1, batch_size, n_class]

    predict = output.data.max(2, keepdim=True)[1] # select n_class dimension
    decoded = [letter[i] for i in predict]
    translated = ''.join(decoded[:decoded.index('E')])

    return translated.replace('?', '')

print('test')
print('man ->', translate('man'))
print('mans ->', translate('mans'))
print('king ->', translate('king'))
print('black ->', translate('black'))
print('up ->', translate('up'))
\`\`\`

## Tham khảo

[1] [https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925](https://www.kaggle.com/code/overvisual/seq2seq-torch?scriptVersionId=145596925)`}function S(){return c}function T(){return[{depth:2,slug:"hãy-bắt-đầu-giải-thích-mã",text:"Hãy bắt đầu giải thích mã"},{depth:2,slug:"mã-hoàn-chỉnh-như-sau",text:"Mã hoàn chỉnh như sau"},{depth:2,slug:"tham-khảo",text:"Tham khảo"}]}const M=k((t,i,p)=>{const{layout:n,...s}=C;return s.file=b,s.url=v,d`${E()}${y(c)}`});export{M as Content,S as compiledContent,M as default,b as file,C as frontmatter,T as getHeadings,z as rawContent,v as url};
