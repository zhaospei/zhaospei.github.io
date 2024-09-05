import{c as i,r as c,m as h,u as s}from"./hoisted.DR1ji9cg.js";import"./astro/assets-service.DxDlkXph.js";import"./_commonjsHelpers.C4iS2aBk.js";import"./hoisted.33BSnmmm.js";const n=`<p>Trong bài viết này, chúng ta sẽ tìm hiểu về một kỹ thuật kiểm thử tổ hợp (Combinatorial Testing) được gọi là Kiểm thử theo cặp
(Pairwise Testing hay All-Pairs Testing).</p>
<h2 id="định-nghĩa-thế-nào-là-all-pairs-testing">Định nghĩa: Thế nào là All-Pairs Testing?</h2>
<p>Theo <strong>ISTQB</strong>, <strong>All-Pairs Testing (hay Pairwise Testing)</strong> là một kỹ thuật kiểm thử hộp đen trong đó các test cases được thiết kế để thực hiện tất cả các tổ hợp có thể có của từng cặp tham số đầu vào. Tức là với mỗi cặp input đầu vào, tất cả các giá trị của cặp input đấy được phủ toàn bộ (Một test case có thể phủ được nhiều cặp input khác nhau).</p>
<p>Kỹ thuật <strong>All-Pairs</strong> rất hữu ích để thiết kế các bài kiểm tra cho các ứng dụng liên quan đến nhiều tham số. Các thử nghiệm được thiết kế sao cho đối với mỗi cặp tham số đầu vào của một hệ thống, có tất cả các tổ hợp riêng biệt có thể có của các tham số đó. Do bộ thử nghiệm bao gồm tất cả các tổ hợp nên nó không toàn diện nhưng rất hiệu quả trong việc tìm lỗi.</p>
<p>Kiểm thử <strong>All-Pairs</strong> được áp dụng phổ biến trong công nghiệp khi mà một số vấn đề chỉ được xảy ra bởi sự tương tác giữa các tham số đầu vào hoặc components. Kiểm thử <strong>All-Pairs</strong> có thể tìm được đến <strong>50 - 90%</strong> lỗi của phần mềm, hệ thống.</p>
<h2 id="số-test-cases-cần-sinh-cho-all-pairs-testing">Số test cases cần sinh cho All-Pairs Testing</h2>
<p>Ta có công thức tính số lượng test cases cần sinh như sau:</p>
<p><strong>Số lượng test case = Số lượng miền giá trị lớn nhất của các biến * Số lượng miền giá trị lớn nhất của các biến</strong></p>
<p>Chứng minh tính đúng đắn của công thức:</p>
<h2 id="cách-sinh-test-cho-all-pairs-testing">Cách sinh test cho All-Pairs Testing</h2>
<p>Chúng ta sẽ lấy ví dụ cho <strong>Ứng dụng giao dịch xe</strong> với các yêu cầu sau:</p>
<ul>
<li>Ứng dụng giao dịch xe cho phép Mua và Bán xe.</li>
<li>Nó sẽ hỗ trợ giao dịch ở Delhi và Mumbai.</li>
<li>Ứng dụng phải có số đăng ký có thể hợp lệ hoặc không hợp lệ.</li>
<li>Nó sẽ cho phép giao dịch với các hãng xe: BMW, Audi và Mercedes.</li>
<li>Có thể thực hiện hai loại booking: E-booking và In-store.</li>
<li>Chỉ có thể đặt xe trong giờ giao dịch.</li>
</ul>
<p>Chúng ta sẽ thực hiện việc sinh test cho ca kiểm thử <strong>All-Pairs</strong> lần lượt theo các bước sau:</p>
<h3 id="bước-1-liệt-kê-các-giá-trị-của-các-tham-số-đầu-vào">Bước 1: Liệt kê các giá trị của các tham số đầu vào.</h3>
<p>Chúng ta có thể dễ dàng liêt kê các giá trị có thể có của các tham số đầu vào của ứng dụng như sau:</p>
<ul>
<li><strong>Loại giao dịch</strong>: Mua, Bán.</li>
<li><strong>Vị trí</strong>: Delhi, Mumbai.</li>
<li><strong>Hãng xe</strong>: BMW, Audi, Mercedes.</li>
<li><strong>Số đăng ký xe</strong>: Valid (5000 giá trị), Invalid</li>
<li><strong>Cách thức giao dịch</strong>: E-Booking, In-store</li>
<li><strong>Thời gian giao dịch</strong>: Thời gian trong giờ làm việc, Thời gian ngoài giờ làm việc</li>
</ul>
<p>Nếu chúng ta sinh test cases cho toàn bộ các tổ hợp hợp lệ thì sẽ có đến:</p>
<ul>
<li>2 . 2 . 3 . 5000 . 2 . 2 = <strong>24000</strong> test cases tổ hợp hợp lệ.</li>
</ul>
<p>Chưa kể chúng ta còn chưa tính đến các test cases không hợp lệ trong quá trình sinh test.</p>
<h3 id="bước-2-đơn-giản-hóa-việc-sinh-test-cases-simplify">Bước 2: Đơn giản hóa việc sinh test cases (Simplify)</h3>
<p>Chúng ta sẽ đơn giản việc sinh các test cases theo các cách:</p>
<ul>
<li>Sử dụng một cách lẫy mẫu thông minh</li>
<li>Sử dụng các nhóm hay ranh giới, ngay cả khi dữ liệu không rời rạc.</li>
</ul>
<p>Theo đó chúng ta có thể giảm số đăng ký xuống còn hai loại: Valid và Invaild.</p>
<p>Bây giờ, số test cases chúng ta sẽ phải sinh sẽ còn lại:</p>
<ul>
<li>2 . 2 . 3 . 2 . 2 . 2  = <strong>96</strong> test cases.</li>
</ul>
<p>Woa Woa Woa! Chúng ta đã giảm số lượng các test case cần phải sinh một số rất lớn rồi đúng không? Nhưng đây vẫn chưa phải các sinh hợp lí để cho số lượng test cases nhỏ nhất có thể. Tiếp tục nào!</p>
<h3 id="bước-3-sắp-xếp-các-biến-theo-miền-giá-trị">Bước 3: Sắp xếp các biến theo miền giá trị</h3>
<p>Chúng ta tiến hành sắp xếp các biến theo thứ tự giảm dần số lượng miền giá trị: Tức biến có nhiều miền giá trị nhất sẽ được xếp đầu tiên  và biến có ít miền giá trị nhất được xếp cuối cùng. Sau khi sắp xếp, chúng ta sẽ có một bảng trông như thế này đây.</p>





































<table><thead><tr><th>Hãng xe</th><th>Loại giao dịch</th><th>Vị trí</th><th>Số đăng ký xe</th><th>Cách thức giao dịch</th><th>Thời gian giao dịch</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>
<h3 id="bước-4-sắp-xếp-các-miền-giá-trị-của-các-biến-để-tạo-bộ-kiểm-thử">Bước 4: Sắp xếp các miền giá trị của các biến để tạo bộ kiểm thử</h3>
<p>Chúng ta sẽ lần lượt điền giá trị của bảng trống đã tạo phía trên theo từng cột một.</p>





































<table><thead><tr><th>Hãng xe</th><th>Loại giao dịch</th><th>Vị trí</th><th>Số đăng ký xe</th><th>Cách thức giao dịch</th><th>Thời gian giao dịch</th></tr></thead><tbody><tr><td>BMW</td><td>Mua</td><td>Delhi</td><td>Valid</td><td>E-booking</td><td>Trong giờ</td></tr><tr><td>Audi</td><td>Bán</td><td>Mumbai</td><td>Invalid</td><td>In-store</td><td>Ngoài giờ</td></tr><tr><td>Mercedes</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>`,g={title:"Bài toán sinh test cho kỹ thuật kiểm thử theo cặp",publishDate:"2023-03-25T08:00:00.000Z",description:"Trong bài viết này, chúng ta sẽ tìm hiểu về một kỹ thuật kiểm thử tổ hợp (Combinatorial Testing)",tags:["Software","Testing"],coverImage:{src:"src/assets/media/feature/testing.png",color:"#64574D"},language:"Vietnamese",minutesRead:"4 min read"},a="/home/runner/work/zhaospei.github.io/zhaospei.github.io/src/content/post/two-pairs-testing/index.md",o=void 0;function k(){return`
Trong bài viết này, chúng ta sẽ tìm hiểu về một kỹ thuật kiểm thử tổ hợp (Combinatorial Testing) được gọi là Kiểm thử theo cặp
(Pairwise Testing hay All-Pairs Testing).

## Định nghĩa: Thế nào là All-Pairs Testing?

Theo **ISTQB**, **All-Pairs Testing (hay Pairwise Testing)** là một kỹ thuật kiểm thử hộp đen trong đó các test cases được thiết kế để thực hiện tất cả các tổ hợp có thể có của từng cặp tham số đầu vào. Tức là với mỗi cặp input đầu vào, tất cả các giá trị của cặp input đấy được phủ toàn bộ (Một test case có thể phủ được nhiều cặp input khác nhau).

Kỹ thuật **All-Pairs** rất hữu ích để thiết kế các bài kiểm tra cho các ứng dụng liên quan đến nhiều tham số. Các thử nghiệm được thiết kế sao cho đối với mỗi cặp tham số đầu vào của một hệ thống, có tất cả các tổ hợp riêng biệt có thể có của các tham số đó. Do bộ thử nghiệm bao gồm tất cả các tổ hợp nên nó không toàn diện nhưng rất hiệu quả trong việc tìm lỗi.

Kiểm thử **All-Pairs** được áp dụng phổ biến trong công nghiệp khi mà một số vấn đề chỉ được xảy ra bởi sự tương tác giữa các tham số đầu vào hoặc components. Kiểm thử **All-Pairs** có thể tìm được đến **50 - 90%** lỗi của phần mềm, hệ thống.


## Số test cases cần sinh cho All-Pairs Testing
Ta có công thức tính số lượng test cases cần sinh như sau:
    
**Số lượng test case = Số lượng miền giá trị lớn nhất của các biến * Số lượng miền giá trị lớn nhất của các biến**

Chứng minh tính đúng đắn của công thức:


## Cách sinh test cho All-Pairs Testing

Chúng ta sẽ lấy ví dụ cho **Ứng dụng giao dịch xe** với các yêu cầu sau:

- Ứng dụng giao dịch xe cho phép Mua và Bán xe.
- Nó sẽ hỗ trợ giao dịch ở Delhi và Mumbai.
- Ứng dụng phải có số đăng ký có thể hợp lệ hoặc không hợp lệ.
- Nó sẽ cho phép giao dịch với các hãng xe: BMW, Audi và Mercedes.
- Có thể thực hiện hai loại booking: E-booking và In-store.
- Chỉ có thể đặt xe trong giờ giao dịch.

Chúng ta sẽ thực hiện việc sinh test cho ca kiểm thử **All-Pairs** lần lượt theo các bước sau:

### Bước 1: Liệt kê các giá trị của các tham số đầu vào.

Chúng ta có thể dễ dàng liêt kê các giá trị có thể có của các tham số đầu vào của ứng dụng như sau:

- **Loại giao dịch**: Mua, Bán.
- **Vị trí**: Delhi, Mumbai.
- **Hãng xe**: BMW, Audi, Mercedes.
- **Số đăng ký xe**: Valid (5000 giá trị), Invalid
- **Cách thức giao dịch**: E-Booking, In-store
- **Thời gian giao dịch**: Thời gian trong giờ làm việc, Thời gian ngoài giờ làm việc

Nếu chúng ta sinh test cases cho toàn bộ các tổ hợp hợp lệ thì sẽ có đến: 
- 2 . 2 . 3 . 5000 . 2 . 2 = **24000** test cases tổ hợp hợp lệ.

Chưa kể chúng ta còn chưa tính đến các test cases không hợp lệ trong quá trình sinh test. 

### Bước 2: Đơn giản hóa việc sinh test cases (Simplify)
Chúng ta sẽ đơn giản việc sinh các test cases theo các cách:
- Sử dụng một cách lẫy mẫu thông minh
- Sử dụng các nhóm hay ranh giới, ngay cả khi dữ liệu không rời rạc.

Theo đó chúng ta có thể giảm số đăng ký xuống còn hai loại: Valid và Invaild.

Bây giờ, số test cases chúng ta sẽ phải sinh sẽ còn lại:
- 2 . 2 . 3 . 2 . 2 . 2  = **96** test cases.

Woa Woa Woa! Chúng ta đã giảm số lượng các test case cần phải sinh một số rất lớn rồi đúng không? Nhưng đây vẫn chưa phải các sinh hợp lí để cho số lượng test cases nhỏ nhất có thể. Tiếp tục nào!

### Bước 3: Sắp xếp các biến theo miền giá trị

Chúng ta tiến hành sắp xếp các biến theo thứ tự giảm dần số lượng miền giá trị: Tức biến có nhiều miền giá trị nhất sẽ được xếp đầu tiên  và biến có ít miền giá trị nhất được xếp cuối cùng. Sau khi sắp xếp, chúng ta sẽ có một bảng trông như thế này đây.

| Hãng xe 	| Loại giao dịch 	| Vị trí 	| Số đăng ký xe 	| Cách thức giao dịch 	| Thời gian giao dịch 	|
|----------------	|--------	|---------	|---------------	|----------------	|---------------------	|
|             	|        |      |              |         |           |
|            	|     	|    	|            |           |             	|
|           |        	|         	|               	|                	|                     	|

### Bước 4: Sắp xếp các miền giá trị của các biến để tạo bộ kiểm thử

Chúng ta sẽ lần lượt điền giá trị của bảng trống đã tạo phía trên theo từng cột một. 

| Hãng xe 	| Loại giao dịch 	| Vị trí 	| Số đăng ký xe 	| Cách thức giao dịch 	| Thời gian giao dịch 	|
|----------------	|--------	|---------	|---------------	|----------------	|---------------------	|
| BMW            	|Mua        | Delhi     | Valid             |E-booking          |  Trong giờ            |
| Audi            	|Bán     	| Mumbai   	| Invalid           |In-store           |  Ngoài giờ          	|
| Mercedes          |        	|         	|               	|                	|                     	|
`}function v(){return n}function T(){return[{depth:2,slug:"định-nghĩa-thế-nào-là-all-pairs-testing",text:"Định nghĩa: Thế nào là All-Pairs Testing?"},{depth:2,slug:"số-test-cases-cần-sinh-cho-all-pairs-testing",text:"Số test cases cần sinh cho All-Pairs Testing"},{depth:2,slug:"cách-sinh-test-cho-all-pairs-testing",text:"Cách sinh test cho All-Pairs Testing"},{depth:3,slug:"bước-1-liệt-kê-các-giá-trị-của-các-tham-số-đầu-vào",text:"Bước 1: Liệt kê các giá trị của các tham số đầu vào."},{depth:3,slug:"bước-2-đơn-giản-hóa-việc-sinh-test-cases-simplify",text:"Bước 2: Đơn giản hóa việc sinh test cases (Simplify)"},{depth:3,slug:"bước-3-sắp-xếp-các-biến-theo-miền-giá-trị",text:"Bước 3: Sắp xếp các biến theo miền giá trị"},{depth:3,slug:"bước-4-sắp-xếp-các-miền-giá-trị-của-các-biến-để-tạo-bộ-kiểm-thử",text:"Bước 4: Sắp xếp các miền giá trị của các biến để tạo bộ kiểm thử"}]}const x=i((e,l,r)=>{const{layout:d,...t}=g;return t.file=a,t.url=o,c`${h()}${s(n)}`});export{x as Content,v as compiledContent,x as default,a as file,g as frontmatter,T as getHeadings,k as rawContent,o as url};
