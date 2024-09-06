import{s as c,g as r}from"./_astro_assets.Bv-XFc5j.js";import{c as g,r as o,m as d,u}from"./hoisted.BH1iQ6Yg.js";import"./astro/assets-service.DxDlkXph.js";import"./_commonjsHelpers.C4iS2aBk.js";import"./hoisted.33BSnmmm.js";const y={src:"/_astro/Chi-squared-distribution.CmKKujMk.png",width:1200,height:800,format:"png"},v=async function(t){const s={};{const i=new RegExp('__ASTRO_IMAGE_="([^"]*src/assets/media/post/Chi-squared-distribution\\.png[^"]*)"',"g");let p,a=0;for(;(p=i.exec(t))!==null;){const n="src/assets/media/post/Chi-squared-distribution.png_"+a,l=JSON.parse(p[1].replace(/&#x22;/g,'"')),{src:m,...h}=l;s[n]=await r({src:y,...h}),a++}}return s};async function b(t){return v(t).then(s=>t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(i,p)=>{const a=JSON.parse(p.replace(/&#x22;/g,'"')),n=a.src+"_"+a.index;s[n].srcSet&&s[n].srcSet.values.length>0&&(s[n].attributes.srcset=s[n].srcSet.attribute);const{index:l,...m}=s[n].attributes;return c({src:s[n].src,...m})}))}const e=await b(`<p>Lựa chọn đặc trưng là một trong những vấn đề quan trọng trong học máy, khi chúng ta có một đống cái đặc trưng và quyết định xem những đặc trưng nào là tốt nhất để xây dựng mô hình.</p>
<p>Có nhiều phương pháp để lựa chọn đặc trưng, trong bài viết này tôi sẽ đưa giải pháp thực hiện bằng <strong>Chi-Square</strong>.</p>
<h2 id="phân-phối-chi-square">Phân phối Chi-Square</h2>
<p>Một biến ngẫu nhiên <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>χ</mi></mrow><annotation encoding="application/x-tex">\\chi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">χ</span></span></span></span> tuân theo phân phối chi-square nếu nó có thể viết được viết dưới dạng tổng bình phương các biến chuẩn chuẩn hoá.</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>χ</mi><mn>2</mn></msup><mo>=</mo><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><msubsup><mi>Z</mi><mi>i</mi><mn>2</mn></msubsup></mrow><annotation encoding="application/x-tex">\\chi^{2} = \\sum_{}^{}Z_{i}^{2} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0585em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.6em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.35em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span></span></span></span></span>
<p>Trong đó <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>Z</mi><mn>2</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">Z_{1}, Z_{2}, ...</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span></span></span></span> là các biến chuẩn chuẩn hoá.</p>
<h2 id="bậc-tự-do-degrees-of-freedom">Bậc tự do (Degrees of freedom)</h2>
<p>Bậc tự do đề cập đến số lượng tối đa các giá trị độc lập logic, có quyền tự do thay đổi. Nói một cách đơn giản, nó có thể được định nghĩa là tổng số mẫu dữ liệu trừ đi số lượng ràng buộc độc lập áp đặt cho các mẫu dữ liệu.</p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;src/assets/media/post/Chi-squared-distribution.png&#x22;,&#x22;alt&#x22;:&#x22;Phân phối Chi-Square&#x22;,&#x22;index&#x22;:0}">
<p>Trong hình trên, chúng ta có thể thấy phân phối Chi-Square cho các bậc tự do khác nhau. Chúng ta cũng có thể quan sát thấy rằng khi bậc tự do tăng thì phân phối Chi-Square xấp xỉ với phân phối chuẩn.</p>
<h2 id="kiểm-tra-tính-độc-lập-của-hai-biến-cố-bằng-chi-square">Kiểm tra tính độc lập của hai biến cố bằng Chi-Square</h2>
<p>Chi-Square được sử dụng trong thống kê để kiểm tra tính độc lập của hai sự kiện. Với dữ liệu của hai biến, chúng ta có thể nhận được số lượng thực tế quan sát (observed) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi></mrow><annotation encoding="application/x-tex">O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span></span></span></span> và số lượng kỳ vọng (expected) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>​​</mtext><mi>E</mi></mrow><annotation encoding="application/x-tex">​​E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">​​</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span>. Chi-Square đo lường mức độ chênh lệch của hai đại lượng này.</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msubsup><mi>χ</mi><mi>c</mi><mn>2</mn></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mfrac><mrow><mo stretchy="false">(</mo><msub><mi>O</mi><mi>i</mi></msub><mo>−</mo><msub><mi>E</mi><mi>i</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><msub><mi>E</mi><mi>i</mi></msub></mfrac></mrow><annotation encoding="application/x-tex">\\chi_{c}^{2} = \\sum_{}^{}\\frac{(O_{i} - E_{i})^{2}}{E_{i}} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1111em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.7411em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.35em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>
<p>Trong đó:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>c</mi></mrow><annotation encoding="application/x-tex">c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span> : Số bậc tự do</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi></mrow><annotation encoding="application/x-tex">O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span></span></span></span> : Số lượng thực tế quan sát</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi></mrow><annotation encoding="application/x-tex">E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span> : Số lượng kỳ vọng</li>
</ul>
<p>Khi hai sự kiện độc lập, số lượng được quan sát gần với số lượng dự kiến, do đó chúng ta sẽ có giá trị Chi-Square nhỏ hơn. Vì vậy, giá trị Chi-Square cao cho thấy giả thuyết về tính độc lập là không chính xác. Nói một cách đơn giản, giá trị Chi-Square càng cao thì các sự kiện này càng phụ thuộc vào nhau. Hay nếu ta xem một sự kiện là một đặc trưng của mô hình và sự kiện còn lại là phân loại mà mô hình cần dự đoán (Phản hồi). Khi đó nếu giá trị Chi-Square càng cao thì đặc trưng này càng phụ thuộc vào phản hồi và nó có thể được chọn để đào tạo mô hình.</p>
<p>Đối với lựa chọn đặc trưng bằng Chi-Square, chúng ta mong đợi rằng trong tổng số các đặc trưng được chọn có một phần nhỏ trong chúng vẫn độc lập với lớp phân loại. Tuy nhiên, trong phân loại văn bản hiếm khi các đặc trưng này được thêm vào trong tập đặc trưng trích xuất cuối cùng. Tất nhiên là nó vẫn tốt miễn là phương pháp vẫn xếp hàng các đặc trưng theo tính hữu ích của nó đối với mô hình chứ không phải chỉ sử dụng để đưa ra tuyên bố về sự phụ thuộc hay tính độc lập của các biến trong thống kê.</p>
<h3 id="các-bước-thực-hiện-kiểm-tra-chi-square">Các bước thực hiện kiểm tra Chi-Square</h3>
<p>Hãy xem xét một tập dữ liệu mà chúng ta phải xác định lý do tại sao khách hàng rời khỏi ngân hàng, hãy thực hiện kiểm tra Chi-Square cho hai biến. <strong>Giới tính</strong> của khách hàng với các giá trị là <strong>Nam/Nữ</strong> và <strong>Rời khỏi</strong> mô tả liệu khách hàng có rời ngân hàng hay không với các giá trị <strong>Có/Không</strong>. Trong thử nghiệm này, chúng tôi sẽ kiểm tra xem có mối quan hệ nào giữa <strong>Giới tính</strong> và <strong>Rời khỏi</strong>.</p>
<h4 id="1-xác-định-giả-thuyết">1. Xác định giả thuyết</h4>
<p><strong>Giả thuyết rỗng</strong> (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">H_{0}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>): Hai biến đã cho độc lập</p>
<p><strong>Giả thuyết thay thế</strong> (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">H_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>): Hai biến đã cho phụ thuộc nhau</p>
<h4 id="2-xây-dựng-bảng-tương-quan">2. Xây dựng bảng tương quan</h4>
<p>Một bảng hiển thị phân phối của một biến trong hàng và biến khác trong cột. Nó được sử dụng để nghiên cứu mối quan hệ giữa hai biến.</p>
<p>|<strong>Giới tính</strong> \\ <strong>Rời bỏ</strong> |<strong>Có</strong>	|<strong>Không</strong>| <strong>Tổng</strong> |
|<strong>Nam</strong>| 38| 178| 216|
|<strong>Nữ</strong>|44	|140| 184|
|<strong>Tổng</strong>| 82 | 318 | 400|</p>
<p>Bậc tự do của bảng tương quan được tính bằng công thức: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>∗</mo><mo stretchy="false">(</mo><mi>c</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(r-1) * (c-1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> trong đó  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>c</mi></mrow><annotation encoding="application/x-tex">c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span> là số hàng và số cột.
Như bảng trên, ta có:</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>d</mi><mi>f</mi><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mtext>–</mtext><mn>1</mn><mo stretchy="false">)</mo><mo>∗</mo><mo stretchy="false">(</mo><mn>2</mn><mtext>–</mtext><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.</mn></mrow><annotation encoding="application/x-tex">df = (2–1) * (2–1) = 1.</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">2–1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">2–1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.</span></span></span></span></span>
<p>Trong bảng trên, chúng ta đã tìm ra tất cả các giá trị được quan sát và các bước tiếp theo của chúng tôi là tìm các giá trị kỳ vọng, tính giá trị Chi-Square và kiểm tra mối quan hệ giữa chúng.</p>
<h4 id="3-tìm-giá-trị-kỳ-vọng">3. Tìm giá trị kỳ vọng</h4>
<p>Dựa trên giả thiết rỗng là hai biến đã cho độc lập lẫn nhau. Nếu hai biến A, B là biến cố độc lập ta có:</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>∗</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(A \\cap B) = P(A) * P(B)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span></span></span></span></span>
<p>Hãy tính giá trị kỳ vọng cho ô đầu tiên là những người là <strong>Nam</strong> và <strong>Có</strong> rời khỏi ngân hàng.</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo>=</mo><mi>p</mi><mo stretchy="false">(</mo><mi>Y</mi><mi>e</mi><mi>s</mi><mo stretchy="false">)</mo><mo>∗</mo><mi>p</mi><mo stretchy="false">(</mo><mi>M</mi><mi>a</mi><mi>l</mi><mi>e</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p = p(Yes) * p(Male) </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mord mathnormal">es</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">e</span><span class="mclose">)</span></span></span></span></span>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo>=</mo><mo stretchy="false">(</mo><mn>82</mn><mi mathvariant="normal">/</mi><mn>400</mn><mo stretchy="false">)</mo><mo>∗</mo><mo stretchy="false">(</mo><mn>216</mn><mi mathvariant="normal">/</mi><mn>400</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">p = (82/400) * (216/400) </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">82/400</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">216/400</span><span class="mclose">)</span></span></span></span></span>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mo>=</mo><mn>0.1107</mn></mrow><annotation encoding="application/x-tex">p = 0.1107 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.1107</span></span></span></span></span>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>n</mi><mo>∗</mo><mi>p</mi><mo>=</mo><mn>400</mn><mo>∗</mo><mn>0.1107</mn><mo>=</mo><mn>44</mn></mrow><annotation encoding="application/x-tex">E_{1} = n * p = 400 * 0.1107 = 44</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4653em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">400</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.1107</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">44</span></span></span></span></span>
<p>Tương tự, ta tính toán được có giá trị <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">E_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>,  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">E_{3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mn>4</mn></msub></mrow><annotation encoding="application/x-tex">E_{4}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> và được kết quả như bên dưới.</p>
<p>|<strong>Giới tính</strong> \\ <strong>Rời bỏ</strong> |<strong>Có</strong>	|<strong>Không</strong>|
|<strong>Nam</strong>| 44| 172|
|<strong>Nữ</strong>|38	|146|</p>
<h4 id="4-tính-toán-giá-trị-chi-square">4. Tính toán giá trị Chi-Square</h4>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msubsup><mi>χ</mi><mi>c</mi><mn>2</mn></msubsup><mo>=</mo><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mfrac><mrow><mo stretchy="false">(</mo><msub><mi>O</mi><mi>i</mi></msub><mo>−</mo><msub><mi>E</mi><mi>i</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><msub><mi>E</mi><mi>i</mi></msub></mfrac></mrow><annotation encoding="application/x-tex"> \\chi_{c}^{2} = \\sum_{}^{}\\frac{(O_{i} - E_{i})^{2}}{E_{i}} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1111em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.7411em;vertical-align:-1.25em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.35em;"><span style="top:-1.9em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.25em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>
<p>Sử dụng công thức đã cho ở trên và các giá trị đã tính toán được, ta dễ dàng có giá trị của <strong>Chi-Square</strong> bằng <strong>2.22</strong></p>
<h4 id="5-bác-bỏ-giả-thuyết-rỗng">5. Bác bỏ Giả thuyết rỗng</h4>
<p>Với độ tin cậy <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>95</mn><mi mathvariant="normal">%</mi></mrow><annotation encoding="application/x-tex">95\\%</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8056em;vertical-align:-0.0556em;"></span><span class="mord">95%</span></span></span></span> là <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo separator="true">,</mo><mn>05</mn></mrow><annotation encoding="application/x-tex">\\alpha = 0,05</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">05</span></span></span></span>, chúng ta sẽ kiểm tra xem giá trị <strong>Chi-Square</strong> tính được có nằm trong vùng chấp nhận hay từ chối hay không.</p>
<p>Các giá trị <strong>Chi-Square</strong> chấp thuận có thể xác định bẳng <strong>Bảng Chi-Square</strong>. Bạn đọc có thể tham khảo tại <a href="https://people.richland.edu/james/lecture/m170/tbl-chi.html" rel="nofollow, noopener, noreferrer" target="_blank">https://people.richland.edu/james/lecture/m170/tbl-chi.html</a>. Dưới đây là phần của bảng trên.</p>


































































































































































































































<table><thead><tr><th align="right">df</th><th align="right">0.995</th><th align="right">0.99</th><th align="right">0.975</th><th align="right">0.95</th><th align="right">0.90</th><th align="right">0.10</th><th align="right">0.05</th><th align="right">0.025</th><th align="right">0.01</th><th align="right">0.005</th></tr></thead><tbody><tr><td align="right">1</td><td align="right">---</td><td align="right">---</td><td align="right">0.001</td><td align="right">0.004</td><td align="right">0.016</td><td align="right">2.706</td><td align="right">3.841</td><td align="right">5.024</td><td align="right">6.635</td><td align="right">7.879</td></tr><tr><td align="right">2</td><td align="right">0.010</td><td align="right">0.020</td><td align="right">0.051</td><td align="right">0.103</td><td align="right">0.211</td><td align="right">4.605</td><td align="right">5.991</td><td align="right">7.378</td><td align="right">9.210</td><td align="right">10.597</td></tr><tr><td align="right">3</td><td align="right">0.072</td><td align="right">0.115</td><td align="right">0.216</td><td align="right">0.352</td><td align="right">0.584</td><td align="right">6.251</td><td align="right">7.815</td><td align="right">9.348</td><td align="right">11.345</td><td align="right">12.838</td></tr><tr><td align="right">4</td><td align="right">0.207</td><td align="right">0.297</td><td align="right">0.484</td><td align="right">0.711</td><td align="right">1.064</td><td align="right">7.779</td><td align="right">9.488</td><td align="right">11.143</td><td align="right">13.277</td><td align="right">14.860</td></tr><tr><td align="right">5</td><td align="right">0.412</td><td align="right">0.554</td><td align="right">0.831</td><td align="right">1.145</td><td align="right">1.610</td><td align="right">9.236</td><td align="right">11.070</td><td align="right">12.833</td><td align="right">15.086</td><td align="right">16.750</td></tr><tr><td align="right">6</td><td align="right">0.676</td><td align="right">0.872</td><td align="right">1.237</td><td align="right">1.635</td><td align="right">2.204</td><td align="right">10.645</td><td align="right">12.592</td><td align="right">14.449</td><td align="right">16.812</td><td align="right">18.548</td></tr><tr><td align="right">7</td><td align="right">0.989</td><td align="right">1.239</td><td align="right">1.690</td><td align="right">2.167</td><td align="right">2.833</td><td align="right">12.017</td><td align="right">14.067</td><td align="right">16.013</td><td align="right">18.475</td><td align="right">20.278</td></tr><tr><td align="right">8</td><td align="right">1.344</td><td align="right">1.646</td><td align="right">2.180</td><td align="right">2.733</td><td align="right">3.490</td><td align="right">13.362</td><td align="right">15.507</td><td align="right">17.535</td><td align="right">20.090</td><td align="right">21.955</td></tr><tr><td align="right">9</td><td align="right">1.735</td><td align="right">2.088</td><td align="right">2.700</td><td align="right">3.325</td><td align="right">4.168</td><td align="right">14.684</td><td align="right">16.919</td><td align="right">19.023</td><td align="right">21.666</td><td align="right">23.589</td></tr><tr><td align="right">10</td><td align="right">2.156</td><td align="right">2.558</td><td align="right">3.247</td><td align="right">3.940</td><td align="right">4.865</td><td align="right">15.987</td><td align="right">18.307</td><td align="right">20.483</td><td align="right">23.209</td><td align="right">25.188</td></tr><tr><td align="right">11</td><td align="right">2.603</td><td align="right">3.053</td><td align="right">3.816</td><td align="right">4.575</td><td align="right">5.578</td><td align="right">17.275</td><td align="right">19.675</td><td align="right">21.920</td><td align="right">24.725</td><td align="right">26.757</td></tr><tr><td align="right">12</td><td align="right">3.074</td><td align="right">3.571</td><td align="right">4.404</td><td align="right">5.226</td><td align="right">6.304</td><td align="right">18.549</td><td align="right">21.026</td><td align="right">23.337</td><td align="right">26.217</td><td align="right">28.300</td></tr><tr><td align="right">13</td><td align="right">3.565</td><td align="right">4.107</td><td align="right">5.009</td><td align="right">5.892</td><td align="right">7.042</td><td align="right">19.812</td><td align="right">22.362</td><td align="right">24.736</td><td align="right">27.688</td><td align="right">29.819</td></tr><tr><td align="right">14</td><td align="right">4.075</td><td align="right">4.660</td><td align="right">5.629</td><td align="right">6.571</td><td align="right">7.790</td><td align="right">21.064</td><td align="right">23.685</td><td align="right">26.119</td><td align="right">29.141</td><td align="right">31.319</td></tr><tr><td align="right">15</td><td align="right">4.601</td><td align="right">5.229</td><td align="right">6.262</td><td align="right">7.261</td><td align="right">8.547</td><td align="right">22.307</td><td align="right">24.996</td><td align="right">27.488</td><td align="right">30.578</td><td align="right">32.801</td></tr><tr><td align="right">16</td><td align="right">5.142</td><td align="right">5.812</td><td align="right">6.908</td><td align="right">7.962</td><td align="right">9.312</td><td align="right">23.542</td><td align="right">26.296</td><td align="right">28.845</td><td align="right">32.000</td><td align="right">34.267</td></tr></tbody></table>
<p>Ta có <strong>bậc tự do (df)</strong> bằng <strong>1</strong> (được tính toán dựa vào bảng tương quan phía trên) và  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo separator="true">,</mo><mn>05</mn></mrow><annotation encoding="application/x-tex">\\alpha = 0,05</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">05</span></span></span></span> thì giá trị <strong>Chi-Square</strong> chấp nhận là <strong>3.84</strong>.</p>
<p>Nhận thấy giá trị <strong>Chi-Square</strong> tính được thấp hơn giá trị <strong>Chi-Square</strong> chấp nhận thì ta chấp nhận giả thiết rỗng. Hay ta có thể kết luận được rằng hai biến cố đã cho độc lập nhau. Vậy nếu ta xem <strong>Giới tính</strong> là một đặc trưng cần xem xét của mô hình và <strong>Rời bỏ ngân hàng</strong> hay không là lớp giá trị mô hình cần phân loại, thì ta có thể kết luận, <strong>Giới tính</strong> không thể được sử dụng để huấn luyện mô hình vì hai biến cố này không có mối liên hệ lẫn nhau.</p>
<h2 id="sử-dụng-chi-square-để-lựa-chọn-đặc-trưng-cho-mô-hình-phân-loại-văn-bản">Sử dụng Chi-Square để lựa chọn đặc trưng cho mô hình phân loại văn bản</h2>
<p>Một phương pháp lựa chọn đặc trưng phổ biến được sử dụng với dữ liệu văn bản là lựa chọn đặc trưng với <strong>Chi-Square</strong>. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>χ</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\chi^{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span> như chúng ta thấy ở trên có thể được sử dụng trong thống kê để kiểm tra tính độc lập của hai biến cố. Cụ thể hơn, trong lựa chọn đặc trưng cho mô hình, chúng ta sử dụng nó để kiểm tra một thuật ngữ cụ thể và một lớp phân loại cụ thể có độc lập hay không.</p>
<p>Cho một văn bản <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>, chúng tôi ước tính số lượng sau cho mỗi thuật ngữ và xếp hạng chúng theo điểm số của chúng:</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>χ</mi><mn>2</mn></msup><mo stretchy="false">(</mo><mi>D</mi><mo separator="true">,</mo><mi>t</mi><mo separator="true">,</mo><mi>c</mi><mo stretchy="false">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><msub><mi>e</mi><mi>t</mi></msub><mo>∈</mo><mo stretchy="false">{</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">}</mo></mrow></munder><munder><mo>∑</mo><mrow><msub><mi>e</mi><mi>c</mi></msub><mo>∈</mo><mo stretchy="false">{</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">}</mo></mrow></munder><mfrac><mrow><mo stretchy="false">(</mo><msub><mi>O</mi><mrow><msub><mi>e</mi><mi>t</mi></msub><msub><mi>e</mi><mi>c</mi></msub></mrow></msub><mo>−</mo><msub><mi>E</mi><mrow><msub><mi>e</mi><mi>t</mi></msub><msub><mi>e</mi><mi>c</mi></msub></mrow></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><msub><mi>E</mi><mrow><msub><mi>e</mi><mi>t</mi></msub><msub><mi>e</mi><mi>c</mi></msub></mrow></msub></mfrac></mrow><annotation encoding="application/x-tex">\\chi^2(D, t, c) = \\sum_{e_t \\in \\{0, 1\\}} \\sum_{e_c \\in \\{0, 1\\}}  \\frac{ (O_{e_te_c} - E_{e_te_c} )^2 }{ E_{e_te_c} } </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">c</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0071em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2963em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">∈</span><span class="mopen mtight">{</span><span class="mord mtight">0</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">}</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">∈</span><span class="mopen mtight">{</span><span class="mord mtight">0</span><span class="mpunct mtight">,</span><span class="mord mtight">1</span><span class="mclose mtight">}</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2963em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2963em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2963em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9361em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>
<p>Trong đó:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi></mrow><annotation encoding="application/x-tex">O</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span></span></span></span> là tần số quan sát và <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi></mrow><annotation encoding="application/x-tex">E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span> tần số kỳ vọng</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>e</mi><mi>t</mi></msub></mrow><annotation encoding="application/x-tex">e_{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2806em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> nhận giá trị <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> nếu văn bản có chứa thuật ngữ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> với trường hợp ngược lại.</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>e</mi><mi>c</mi></msub></mrow><annotation encoding="application/x-tex">e_{c}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> nhận giá trị <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> nếu văn bản thuộc lớp phân loại <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>c</mi></mrow><annotation encoding="application/x-tex">c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">c</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> với trường hợp ngược lại.</li>
</ul>
<p>Với mỗi đặc trưng (thuật ngữ), một điểm  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>χ</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\chi^{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">χ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span> tương ứng chỉ ra <strong>Giả thuyết rỗng</strong> <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>H</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">H_{0}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0813em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> về tính độc lập của hai biến cố (có nghĩa là lớp của văn bản được phân loại không ảnh hưởng đến tần suất xuất hiện của thuật ngữ) nên bị bác bỏ hay sự xuất hiện của thuật ngữ và lớp của văn bản phụ thuộc lẫn nhau. Hay trong trường hợp này, chúng ta sẽ chọn thuật ngữ này làm đặc trưng cho mô hình phân loại văn bản.</p>
<h2 id="kết-luận">Kết luận</h2>
<p><strong>Chi-Square</strong> nhạy cảm với kích thước mẫu. Các mối quan hệ có thể có ý nghĩa khi chúng không chỉ đơn giản là do một mẫu rất lớn được sử dụng. Ngoài ra, <strong>Chi-Square</strong> không thể xác định liệu một biến cố có mối quan hệ nhân quả với biến khác hay không. Nó chỉ có thể xác định liệu hai biến cố có liên quan với nhau hay không.. Nói chung, khi giá trị kỳ vọng ​​trong một ô của bảng tương quan nhỏ hơn 5, <strong>Chi-Square</strong> có thể dẫn đến sai sót trong kết luận. Hy vọng bài viết có thể giúp bạn có cái nhìn tổng quan về phương pháp này và có thể áp dụng nó cho mô hình của bạn.</p>`),x={title:"Lựa chọn đặc trưng trong học máy bằng kiểm tra Chi-Square",publishDate:"2023-06-27T08:00:00.000Z",description:"Lựa chọn đặc trưng là một trong những vấn đề quan trọng trong học máy, khi chúng ta ...",tags:["Machine Learning"],coverImage:{src:"src/assets/media/feature/Chi-Square.jpg",color:"#64574D"},language:"Vietnamese",minutesRead:"8 min read"},w="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/chi-square-feature-selection-ml/index.md",k=void 0;function C(){return`
Lựa chọn đặc trưng là một trong những vấn đề quan trọng trong học máy, khi chúng ta có một đống cái đặc trưng và quyết định xem những đặc trưng nào là tốt nhất để xây dựng mô hình. 

Có nhiều phương pháp để lựa chọn đặc trưng, trong bài viết này tôi sẽ đưa giải pháp thực hiện bằng **Chi-Square**. 

## Phân phối Chi-Square
Một biến ngẫu nhiên $$ \\chi $$ tuân theo phân phối chi-square nếu nó có thể viết được viết dưới dạng tổng bình phương các biến chuẩn chuẩn hoá. 

$$ 
\\chi^{2} = \\sum_{}^{}Z_{i}^{2} 
$$


Trong đó $$ Z_{1}, Z_{2}, ... $$ là các biến chuẩn chuẩn hoá.

## Bậc tự do (Degrees of freedom)
Bậc tự do đề cập đến số lượng tối đa các giá trị độc lập logic, có quyền tự do thay đổi. Nói một cách đơn giản, nó có thể được định nghĩa là tổng số mẫu dữ liệu trừ đi số lượng ràng buộc độc lập áp đặt cho các mẫu dữ liệu.

![Phân phối Chi-Square](src/assets/media/post/Chi-squared-distribution.png)

Trong hình trên, chúng ta có thể thấy phân phối Chi-Square cho các bậc tự do khác nhau. Chúng ta cũng có thể quan sát thấy rằng khi bậc tự do tăng thì phân phối Chi-Square xấp xỉ với phân phối chuẩn.


## Kiểm tra tính độc lập của hai biến cố bằng Chi-Square
Chi-Square được sử dụng trong thống kê để kiểm tra tính độc lập của hai sự kiện. Với dữ liệu của hai biến, chúng ta có thể nhận được số lượng thực tế quan sát (observed) $$ O $$ và số lượng kỳ vọng (expected) $$ ​​E $$. Chi-Square đo lường mức độ chênh lệch của hai đại lượng này.

$$ 
\\chi_{c}^{2} = \\sum_{}^{}\\frac{(O_{i} - E_{i})^{2}}{E_{i}} 
$$

Trong đó:
- $$c$$ : Số bậc tự do
- $$O$$ : Số lượng thực tế quan sát
- $$E$$ : Số lượng kỳ vọng 

Khi hai sự kiện độc lập, số lượng được quan sát gần với số lượng dự kiến, do đó chúng ta sẽ có giá trị Chi-Square nhỏ hơn. Vì vậy, giá trị Chi-Square cao cho thấy giả thuyết về tính độc lập là không chính xác. Nói một cách đơn giản, giá trị Chi-Square càng cao thì các sự kiện này càng phụ thuộc vào nhau. Hay nếu ta xem một sự kiện là một đặc trưng của mô hình và sự kiện còn lại là phân loại mà mô hình cần dự đoán (Phản hồi). Khi đó nếu giá trị Chi-Square càng cao thì đặc trưng này càng phụ thuộc vào phản hồi và nó có thể được chọn để đào tạo mô hình.

Đối với lựa chọn đặc trưng bằng Chi-Square, chúng ta mong đợi rằng trong tổng số các đặc trưng được chọn có một phần nhỏ trong chúng vẫn độc lập với lớp phân loại. Tuy nhiên, trong phân loại văn bản hiếm khi các đặc trưng này được thêm vào trong tập đặc trưng trích xuất cuối cùng. Tất nhiên là nó vẫn tốt miễn là phương pháp vẫn xếp hàng các đặc trưng theo tính hữu ích của nó đối với mô hình chứ không phải chỉ sử dụng để đưa ra tuyên bố về sự phụ thuộc hay tính độc lập của các biến trong thống kê. 

### Các bước thực hiện kiểm tra Chi-Square

Hãy xem xét một tập dữ liệu mà chúng ta phải xác định lý do tại sao khách hàng rời khỏi ngân hàng, hãy thực hiện kiểm tra Chi-Square cho hai biến. **Giới tính** của khách hàng với các giá trị là **Nam/Nữ** và **Rời khỏi** mô tả liệu khách hàng có rời ngân hàng hay không với các giá trị **Có/Không**. Trong thử nghiệm này, chúng tôi sẽ kiểm tra xem có mối quan hệ nào giữa **Giới tính** và **Rời khỏi**.

#### 1. Xác định giả thuyết
**Giả thuyết rỗng** ($$H_{0}$$): Hai biến đã cho độc lập

**Giả thuyết thay thế** ($$H_{1}$$): Hai biến đã cho phụ thuộc nhau

#### 2. Xây dựng bảng tương quan
Một bảng hiển thị phân phối của một biến trong hàng và biến khác trong cột. Nó được sử dụng để nghiên cứu mối quan hệ giữa hai biến.

|**Giới tính** \\ **Rời bỏ** |**Có**	|**Không**| **Tổng** |
|**Nam**| 38| 178| 216|
|**Nữ**|44	|140| 184|
|**Tổng**| 82 | 318 | 400|

Bậc tự do của bảng tương quan được tính bằng công thức: $$ (r-1) * (c-1) $$ trong đó  $$r$$, $$c$$ là số hàng và số cột. 
Như bảng trên, ta có:

$$
df = (2–1) * (2–1) = 1.
$$

Trong bảng trên, chúng ta đã tìm ra tất cả các giá trị được quan sát và các bước tiếp theo của chúng tôi là tìm các giá trị kỳ vọng, tính giá trị Chi-Square và kiểm tra mối quan hệ giữa chúng.

#### 3. Tìm giá trị kỳ vọng
Dựa trên giả thiết rỗng là hai biến đã cho độc lập lẫn nhau. Nếu hai biến A, B là biến cố độc lập ta có:

$$ 
P(A \\cap B) = P(A) * P(B)
$$

Hãy tính giá trị kỳ vọng cho ô đầu tiên là những người là **Nam** và **Có** rời khỏi ngân hàng.

$$ 
p = p(Yes) * p(Male) 
$$

$$ 
p = (82/400) * (216/400) 
$$

$$ 
p = 0.1107 
$$

$$ 
E_{1} = n * p = 400 * 0.1107 = 44
$$

Tương tự, ta tính toán được có giá trị $$E_{2}$$,  $$E_{3}$$, $$E_{4}$$ và được kết quả như bên dưới.

|**Giới tính** \\ **Rời bỏ** |**Có**	|**Không**| 
|**Nam**| 44| 172| 
|**Nữ**|38	|146| 

#### 4. Tính toán giá trị Chi-Square

$$
 \\chi_{c}^{2} = \\sum_{}^{}\\frac{(O_{i} - E_{i})^{2}}{E_{i}} 
 $$

Sử dụng công thức đã cho ở trên và các giá trị đã tính toán được, ta dễ dàng có giá trị của **Chi-Square** bằng **2.22**

#### 5. Bác bỏ Giả thuyết rỗng
Với độ tin cậy $$95\\%$$ là $$\\alpha = 0,05$$, chúng ta sẽ kiểm tra xem giá trị **Chi-Square** tính được có nằm trong vùng chấp nhận hay từ chối hay không.

Các giá trị **Chi-Square** chấp thuận có thể xác định bẳng **Bảng Chi-Square**. Bạn đọc có thể tham khảo tại [https://people.richland.edu/james/lecture/m170/tbl-chi.html](https://people.richland.edu/james/lecture/m170/tbl-chi.html). Dưới đây là phần của bảng trên.

| df | 0.995 |  0.99 | 0.975 |  0.95 |  0.90 |   0.10 |   0.05 |  0.025 |   0.01 |  0.005 |
|---:|------:|------:|------:|------:|------:|-------:|-------:|-------:|-------:|-------:|
|  1 |   --- |   --- | 0.001 | 0.004 | 0.016 |  2.706 |  3.841 |  5.024 |  6.635 |  7.879 |
|  2 | 0.010 | 0.020 | 0.051 | 0.103 | 0.211 |  4.605 |  5.991 |  7.378 |  9.210 | 10.597 |
|  3 | 0.072 | 0.115 | 0.216 | 0.352 | 0.584 |  6.251 |  7.815 |  9.348 | 11.345 | 12.838 |
|  4 | 0.207 | 0.297 | 0.484 | 0.711 | 1.064 |  7.779 |  9.488 | 11.143 | 13.277 | 14.860 |
|  5 | 0.412 | 0.554 | 0.831 | 1.145 | 1.610 |  9.236 | 11.070 | 12.833 | 15.086 | 16.750 |
|  6 | 0.676 | 0.872 | 1.237 | 1.635 | 2.204 | 10.645 | 12.592 | 14.449 | 16.812 | 18.548 |
|  7 | 0.989 | 1.239 | 1.690 | 2.167 | 2.833 | 12.017 | 14.067 | 16.013 | 18.475 | 20.278 |
|  8 | 1.344 | 1.646 | 2.180 | 2.733 | 3.490 | 13.362 | 15.507 | 17.535 | 20.090 | 21.955 |
|  9 | 1.735 | 2.088 | 2.700 | 3.325 | 4.168 | 14.684 | 16.919 | 19.023 | 21.666 | 23.589 |
| 10 | 2.156 | 2.558 | 3.247 | 3.940 | 4.865 | 15.987 | 18.307 | 20.483 | 23.209 | 25.188 |
| 11 | 2.603 | 3.053 | 3.816 | 4.575 | 5.578 | 17.275 | 19.675 | 21.920 | 24.725 | 26.757 |
| 12 | 3.074 | 3.571 | 4.404 | 5.226 | 6.304 | 18.549 | 21.026 | 23.337 | 26.217 | 28.300 |
| 13 | 3.565 | 4.107 | 5.009 | 5.892 | 7.042 | 19.812 | 22.362 | 24.736 | 27.688 | 29.819 |
| 14 | 4.075 | 4.660 | 5.629 | 6.571 | 7.790 | 21.064 | 23.685 | 26.119 | 29.141 | 31.319 |
| 15 | 4.601 | 5.229 | 6.262 | 7.261 | 8.547 | 22.307 | 24.996 | 27.488 | 30.578 | 32.801 |
| 16 | 5.142 | 5.812 | 6.908 | 7.962 | 9.312 | 23.542 | 26.296 | 28.845 | 32.000 | 34.267 |

Ta có **bậc tự do (df)** bằng **1** (được tính toán dựa vào bảng tương quan phía trên) và  $$\\alpha = 0,05$$ thì giá trị **Chi-Square** chấp nhận là **3.84**.

Nhận thấy giá trị **Chi-Square** tính được thấp hơn giá trị **Chi-Square** chấp nhận thì ta chấp nhận giả thiết rỗng. Hay ta có thể kết luận được rằng hai biến cố đã cho độc lập nhau. Vậy nếu ta xem **Giới tính** là một đặc trưng cần xem xét của mô hình và **Rời bỏ ngân hàng** hay không là lớp giá trị mô hình cần phân loại, thì ta có thể kết luận, **Giới tính** không thể được sử dụng để huấn luyện mô hình vì hai biến cố này không có mối liên hệ lẫn nhau.

## Sử dụng Chi-Square để lựa chọn đặc trưng cho mô hình phân loại văn bản
Một phương pháp lựa chọn đặc trưng phổ biến được sử dụng với dữ liệu văn bản là lựa chọn đặc trưng với **Chi-Square**. $$ \\chi^{2} $$ như chúng ta thấy ở trên có thể được sử dụng trong thống kê để kiểm tra tính độc lập của hai biến cố. Cụ thể hơn, trong lựa chọn đặc trưng cho mô hình, chúng ta sử dụng nó để kiểm tra một thuật ngữ cụ thể và một lớp phân loại cụ thể có độc lập hay không. 

Cho một văn bản $$D$$, chúng tôi ước tính số lượng sau cho mỗi thuật ngữ và xếp hạng chúng theo điểm số của chúng:

$$
\\chi^2(D, t, c) = \\sum_{e_t \\in \\{0, 1\\}} \\sum_{e_c \\in \\{0, 1\\}}  \\frac{ (O_{e_te_c} - E_{e_te_c} )^2 }{ E_{e_te_c} } 
$$

Trong đó:
- $$O$$ là tần số quan sát và $$E$$ tần số kỳ vọng
- $$e_{t}$$ nhận giá trị $$1$$ nếu văn bản có chứa thuật ngữ $$t$$, $$0$$ với trường hợp ngược lại.
- $$e_{c}$$ nhận giá trị $$1$$ nếu văn bản thuộc lớp phân loại $$c$$, $$0$$ với trường hợp ngược lại.

Với mỗi đặc trưng (thuật ngữ), một điểm  $$ \\chi^{2} $$ tương ứng chỉ ra **Giả thuyết rỗng** $$H_{0}$$ về tính độc lập của hai biến cố (có nghĩa là lớp của văn bản được phân loại không ảnh hưởng đến tần suất xuất hiện của thuật ngữ) nên bị bác bỏ hay sự xuất hiện của thuật ngữ và lớp của văn bản phụ thuộc lẫn nhau. Hay trong trường hợp này, chúng ta sẽ chọn thuật ngữ này làm đặc trưng cho mô hình phân loại văn bản.    

## Kết luận
**Chi-Square** nhạy cảm với kích thước mẫu. Các mối quan hệ có thể có ý nghĩa khi chúng không chỉ đơn giản là do một mẫu rất lớn được sử dụng. Ngoài ra, **Chi-Square** không thể xác định liệu một biến cố có mối quan hệ nhân quả với biến khác hay không. Nó chỉ có thể xác định liệu hai biến cố có liên quan với nhau hay không.. Nói chung, khi giá trị kỳ vọng ​​trong một ô của bảng tương quan nhỏ hơn 5, **Chi-Square** có thể dẫn đến sai sót trong kết luận. Hy vọng bài viết có thể giúp bạn có cái nhìn tổng quan về phương pháp này và có thể áp dụng nó cho mô hình của bạn. 
`}function _(){return e}function S(){return[{depth:2,slug:"phân-phối-chi-square",text:"Phân phối Chi-Square"},{depth:2,slug:"bậc-tự-do-degrees-of-freedom",text:"Bậc tự do (Degrees of freedom)"},{depth:2,slug:"kiểm-tra-tính-độc-lập-của-hai-biến-cố-bằng-chi-square",text:"Kiểm tra tính độc lập của hai biến cố bằng Chi-Square"},{depth:3,slug:"các-bước-thực-hiện-kiểm-tra-chi-square",text:"Các bước thực hiện kiểm tra Chi-Square"},{depth:4,slug:"1-xác-định-giả-thuyết",text:"1. Xác định giả thuyết"},{depth:4,slug:"2-xây-dựng-bảng-tương-quan",text:"2. Xây dựng bảng tương quan"},{depth:4,slug:"3-tìm-giá-trị-kỳ-vọng",text:"3. Tìm giá trị kỳ vọng"},{depth:4,slug:"4-tính-toán-giá-trị-chi-square",text:"4. Tính toán giá trị Chi-Square"},{depth:4,slug:"5-bác-bỏ-giả-thuyết-rỗng",text:"5. Bác bỏ Giả thuyết rỗng"},{depth:2,slug:"sử-dụng-chi-square-để-lựa-chọn-đặc-trưng-cho-mô-hình-phân-loại-văn-bản",text:"Sử dụng Chi-Square để lựa chọn đặc trưng cho mô hình phân loại văn bản"},{depth:2,slug:"kết-luận",text:"Kết luận"}]}const E=g((t,s,i)=>{const{layout:p,...a}=x;return a.file=w,a.url=k,o`${d()}${u(e)}`});export{E as Content,_ as compiledContent,E as default,w as file,x as frontmatter,S as getHeadings,C as rawContent,k as url};
