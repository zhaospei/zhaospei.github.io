---
layout: post
title:  "Một số mô hình phát triển phần mềm (Phần 1)"
categories: SE
author: zhao
tags: ["software", "model"]
up_date: 2023-03-05
img-feature: /assets/media/feature/Software-Development-Life-Cycle.png
des: Mô hình phát triển phần mềm là thể hiện trừu tượng của các tiến trình phát triển phần mềm. Nó xác định các pha/ giai đoạn trong phát triển phần mềm. 
---

Mô hình phát triển phần mềm là thể hiện trừu tượng của các tiến trình phát triển phần mềm. Nó xác định các pha/ giai đoạn trong phát triển phần mềm. 

Trong các dự án phát triển phần mềm, mô hình đóng vai trò rất quan trọng. Mô hình đóng vai trò là hướng đi và quyết định đến chất lượng đầu ra của sản phẩm.

Có nhiều loại mô hình phát triển phần mềm khác nhau như:
- Mô hình thác nước
- Mô hình xoắn ốc
- Mô hình tăng trưởng
- Mô hình Scrum
…

Trong bài viết này, tôi sẽ mô tả và phân tích chi tiết bốn loại mô hình phát triển phần mềm cơ bản nhất bao gồm: Mô hình thác nước (Waterfall model), Mô hình chữ V (V-Shaped Model), Bản mẫu và Mô hình xoắn ốc.

# 1. Mô hình thác nước
Mô hình thác nước được xem là mô hình đầu tiên được giới thiệu. Đây là mô hình SDLC (Software Development Life Cycle) lâu đời với đơn giản nhất. Mô hình thác nước là mô hình điển hình cho phát triển phần mềm đảm bảo bảo tốt. 

{% include image.html url="/assets/media/post/waterfall-model.png" description="Mô hình thác nước" %}

## a. Đặc điểm
Trong mô hình thác nước, toàn bộ quá trình phát triển phần mềm được chia thành các giai đoạn riêng biệt. Trong mô hình thác nước, thông thường, kết quả của một pha/ giai đoạn đóng vai trò là đầu vào cho pha/ giai đoạn tiếp theo.

Đặc điểm quan trọng nhất của mô hình thác nước là phát triển tuần tự tuyến tính (Vì vậy, nó còn có tên gọi khác là linear - sequential life cycle model). Tức trong mô hình thác nước, giai đoạn tiếp theo chỉ được bắt đầu sau khi các mục tiêu đã được xác định của giai đoạn trước được hoàn thành. Trong mô hình này, các giai đoạn phát triển một cách độc lập mà không xếp chồng lẫn nhau. 

Tuy nhiên, trong thực tế việc thực hiện tốt một pha không phải dễ và việc xảy ra vấn đề ở là điều hiển nhiên. Vậy nếu trong quá trình phát triển gặp vấn đề có liên quan đến giai đoạn đã hoàn thành trước đó thì phải giải quyết như nào? Câu trả lời là chúng ta vẫn có thể quay lại giai đoạn trước đó sau khi đã thực hiện xong giai đoạn đấy. Tuy nhiên, sau khi quay lại, chúng ta vẫn phải tuân theo tính tuần tự của model. 

### Các giai đoạn tuần tự trong mô hình thác nước
- **Thu thập và phân tích yêu cầu**: Tất cả mọi yêu cầu có thể của hệ thống được xác định trong giai đoạn này và được ghi lại đầy đủ trong tài liệu đặc tả yêu cầu.
- **Thiết kế**: Các thông số kỹ thuật trong giai đoạn đầu tiên được nghiên cứu trong giai đoạn này. Thiết kế giúp ta xác định những yêu cầu về phần cứng hệ thống, giúp ta xác định được kiến thức tổng thể của hệ thống.
- **Triển khai và kiểm thử đơn vị:** Với số liệu đầu vào từ giai đoạn thiết kế, chúng ta phát triển các chương trình nhỏ gọi là Unit, sẽ được tích hợp trong giai đoạn tiếp theo. Mỗi đơn vị được triển khai và kiểm thử chức năng của nó được gọi là Unit Testing. 
- **Tích hợp và kiểm thử hệ thống:** Tất cả các đơn vị được thực hiện trong giai đoạn trước được tích hợp vào một hệ thống xác định. Sau khi tích hợp, toàn bộ hệ thống sẽ được kiểm tra chức năng và phi chức năng. 
- **Vận hành và bảo trì:**  Sản phẩm được triển khai trong môi trường của khách hàng hoặc được tung ra thị trường. Có thể có một số lỗi xảy ra trong môi trường của khách hàng, bảo trì được thực hiện để khắc phục những vấn đề trong môi trường khách hàng. Hoặc khi cần nâng cấp sản phẩm, thêm tính năng mới, bảo trì sẽ được sẽ được thực hiện.

## b. Ưu, nhược điểm
Mô hình thác nước được thực hiện tuần tự tuyến tính, do vậy ưu điểm lớn nhất của nó là đơn giản, dễ dàng để học và thực hiện. Mô hình đảm bảo chất lượng cao cho sản phẩm.  

Mỗi pha của mô hình được thực hiện khi pha trước đấy đã được hoàn thiện. Vì vậy, cần làm mỗi pha phải tốt, chất lượng, khi đó mới thực hiện pha tiếp theo do nếu xảy ra lỗi việc quay lại pha trước đáy sẽ mất rất nhiều thời gian.

Do đó, công việc thực thiện của người phát triển nhiều hơn. Mỗi giai đoạn không chỉ thực thi mà còn viết docs và giảng giải cho những người giai đoạn tiếp theo. Dẫn đến người phát triển cần bỏ ra nhiều thời gian hơn làm cho sản phẩm thực hiện theo mô hình này thường thực hiện lâu, chi phí cao. 

Đây là nhược điểm rõ ràng nhất của mô hình này. Bù lại, sản phẩm sẽ đảm bảo chất lượng cao do mỗi pha được thực hiện một cách hoàn chỉnh, đầy đủ, chính xác.

Chính vì vậy, mô hình thác nước chỉ phù hợp với các dự án vừa và nhỏ do những dự án này có thể xác định rõ yêu cầu từ đầu. Ngược lại, đối với những dự án lớn, việc xác định yêu cầu rõ ràng từ ban đầu là rất khó. Ngoài ra, việc làm tuần tự với dự án lớn là rất tốn thời gian khi mà khách hàng luôn mong muốn có sản phẩm chất lượng càng sớm càng tốt. 

Mô hình thác nước là mô hình đầu tiên, mọi mô hình cơ bản hiện nay đều xuất phát, phát triển từ mô hình thác nước.

# 2. Mô hình chữ V
Chất lượng kiểm thử phần mềm được đánh giá qua bộ test kiểm thử và quá trình thực hiện kiểm thử. Do vậy, chất lượng của bộ test kiểm thử là rất quan trọng. Tuy nhiên, mô hình thác nước đến giai đoạn kiểm thử mới được sinh test. Việc sinh test của mô hình thác nước khiến cho khả năng phát hiện ra lỗi của bộ test rất là thấp, dẫn đến việc kiểm thử, đánh giá chất lượng phần mềm không khách quan, chính xác. Và mô hình chữ V đã được cải tiến từ thác nước để giải quyết vấn đề sinh test muộn từ mô hình thấy nước. 

{% include image.html url="/assets/media/post/v-model.png" description="Mô hình chữ V" %}

## a. Đặc điểm
Cũng giống như mô hình thác nước, các giai đoạn trong mô hình chữ V được thực hiện một cách tuần tự theo hình chữ V. Tuy nhiên, cải tiến của mô hình chữ V đến từ việc sinh bộ test kiểm thử sớm bằng cách tích hợp liên kết giai đoạn kiểm thử cho từng giai đoạn phát triển tương ứng. Có nghĩa là, đối với mỗi giai đoạn trong chu kỳ phát triển sẽ có giai đoạn kiểm thử tương ứng. Mỗi giai đoạn bên trái model sẽ sinh bộ test cho giai đoạn kiểm thử bên phải của model:
- Giai đoạn phân tích đặc tả yêu cầu sinh bộ test cho giai đoạn kiểm thử hệ thống, giai đoạn kiểm thử chấp nhận
- Giai đoạn thiết kế sinh bộ test cho giai đoạn kiểm thử tích hợp.
- Quá trình implementing thực hiện luôn giai đoạn kiểm thử unit.

## b. Ưu, nhược điểm
Do V Model kế thừa hầu hết từ Waterfall Model nên mọi ưu, nhược điểm đa số đều giống Waterfall Model. Tuy nhiên, ưu điểm nổi bật nhất so với Waterfall Model là giai đoạn kiểm thử được thực hiện ngay từ đầu qua công việc sinh bộ test sớm cho giai đoạn kiểm thử tương ứng nên bộ test trong V Model chính xác hơn. Nhờ vậy, việc kiểm thử được thực hiện nhanh chóng, chính xác và đánh giá phần mềm một cách khách quan nhất.   

# 3. Bản mẫu
Đặc điểm của mô hình thác nước là cần xác định rõ yêu cầu từ đầu. Nhưng trong thực tế rất ít dự án xác định được rõ yêu cầu từ đầu. Vậy cần phải làm sao? Bản mẫu chính là giải pháp giải quyết vấn đề này.

## a. Đặc điểm
Bản mẫu là mô hình phát triển phần mềm được phát triển dựa trên các yêu cầu của hệ thống. Dựa vào bản mẫu, khách hàng có cái nhìn tổng quan về hệ thống thực tế. 

Bản mẫu cho phép hiểu các yêu cầu của khách hàng ở giai đoạn phát triển ban đầu ngay cả những yêu cầu khó xác định. Nhờ nhận được những phản hồi có giá trị từ khách hàng, từ đó giúp các nhà thiết kế và phát triển phần mềm hiểu chính xác những gì được mong đợi từ sản phẩm đang được phát triển.

Chúng ta cần dồn chi phí và nguồn lực nhiều cho làm bản mẫu, dẫn tới các công đoạn còn lại sẽ thiếu thời gian và chi phí, ... Kết quả là chất lượng sản phẩm nhất là tài liệu và chất lượng code dễ có vấn đề. Ngoài ra, việc chú trọng đến bản mẫu (thường cho yêu cầu chức năng) dẫn đến dễ bỏ qua các yêu cầu phi chức năng và đa số các dự án không đạt các yêu cầu phi chức năng. Chính vì vậy, thực tế nó không được dùng phổ biến như một mô hình phát triển phần mềm. Tuy nhiên, tư tưởng của bản mẫu rất quan trọng. Nó là mấu chốt để chúng ta lôi kéo khách hàng, giải quyết những yêu cầu không được rõ ràng. Do đó, người ta thường dùng bản mẫu như là một phương pháp thu thập yêu cầu cho các mô hình khác. 
Bây giờ, người ta dùng bản mẫu như là một kỹ thuật thu thập yêu cầu. 

## b. Ưu, nhược điểm
Ưu điểm lớn nhất của bản mẫu giúp ta giải quyết việc xác định các yêu cầu khó của mô hình thác nước. Nhờ bản mẫu, việc xác định yêu cầu được diễn ra thuận chính xác nhờ đó việc thực hiện phần mềm dựa trên mô hình thác nước được diễn ra một cách thuận lợi. 
Bù lại, chúng ta cần chi phí cao khi sử dụng bản mẫu do cần nhiều nguồn lực cho việc làm bản mẫu. Ngoài ra, sự tham gia của khách hàng vào bản mẫu là rất quan trọng. 

Tuy nhiên trong thực tế, việc nhiệt tình tham gia của khách hàng là khó, dẫn tới xây dựng bản mẫu khó chính xác. Từ đó, yêu cầu xác định không được rõ ràng.  

Mặc dù vậy, chúng ta vẫn có cách làm được nhưng không phải là điều dễ dàng. 

# 4. Xoắn ốc
Mô hình thác nước, chữ V chỉ phù hợp các dự án vừa và nhỏ, những dự án được xác định rõ yêu cầu từ đầu. Việc xác định những yêu cầu khó, phức tạp đã được giải quyết nhờ bản mẫu. Tuy nhiên, trong thực tế, đa số có dự án đều lớn, phức tạp. Vậy với các dự án lớn thì giải quyết như nào? Mô hình xoắn ốc là một lựa chọn mô hình để thực hiện các dự án lớn, phức tạp. 

{% include image.html url="/assets/media/post/xoan-oc.png" description="Mô hình xoắn ốc" %}

## a. Đặc điểm 

Mô hình xoắn ốc là mô hình phát triển phần mềm kết hợp ý tưởng phát triển lặp đi lặp lại với các giai đoạn có hệ thống, được kiểm soát của mô hình thác nước. 

Mô hình xoắn ốc này là sự kết hợp giữa mô hình quy trình phát triển lặp và mô hình phát triển tuyến tính tuần tự, tức là mô hình thác nước với sự nhấn mạnh rất cao vào phân tích rủi ro. Nó cho phép phát hành sản phẩm qua mỗi lần lặp xung quanh hình xoắn ốc.
Thực chất, mô hình xoắn ốc được kết hợp từ mô hình thác nước sử dụng bản mẫu để giải quyết những yêu cầu khó. Ngoài ra nó còn có quá trình phân tích rủi ro của dự án.

Mô hình xoắn ốc là quy trình phát triển định hướng rủi ro cho các dự án phần mềm, nghĩa là trọng tâm dự án quản lý rủi ro thông qua nhiều lần lặp lại quy trình phát triển phần mềm.

Mặc dù, các quá trình được lặp đi lặp lại nhưng mô hình vẫn theo tư tưởng phát triển tăng dần.

### Các giai đoạn trong phát triển phần mềm theo mô hình xoắn ốc
- **Planning**: Lập kế hoạch, trong đó phạm vi của dự án được xác định. Một kế hoạch được tạo ra cho lần lần lặp tiếp theo của mô hình xoắn ốc. 
- **Risk Analysis**: Trong giai đoạn này, các rủi ro liên quan đến dự án được xác định và đánh giá.
- **Engineering**: Trong giai đoạn này, phần mềm được phát triển dựa trên lần thu thập yêu cầu trước đó.
- **Evaluation**: Phần mềm được đánh giá để xác định xem nó có đáp ứng các yêu cầu của khách hàng hay không và liệu nó có chất lượng cao hay không?
- **Planning**: Vòng lặp tiếp theo của vòng xoắn ốc bắt đầu bằng một giai đoạn lập kế hoạch mới, dựa trên kết quả đánh giá.

Trong thực tế, chúng ta không thể bê bản mẫu hay mô hình thác nước vào dự án lớn do đối với những dự án càng lớn, tỉ lệ thất bại càng cao. 
Vậy chúng ta thực hiện nó như thế nào? Chúng ta có hai chiến lược để thực hiện quá trình phát triển:
- **Quá trình Implementing**

Theo thống kê tính năng khách hàng sử dụng, nhận thấy có 20% tính năng bắt buộc phải có của phần mềm (core), 40 % tính năng thường xuyên được sử dụng và 40% tính năng hiếm khi sử dụng. 

Chúng ta có thể thực hiện quá trình implementing một cách tuần tự, tức là thực hiện xong 20% tính năng bắt buộc, sau khi quá trình kiểm thử được diễn ra xong thành công, mới tiếp tục thực hiện 40% tính năng thường xuyên sử dụng. Tiếp tục với 40% tính năng hiếm khi sử dụng. 
Nhờ vậy, giúp chúng ta giảm thiểu khi thực hiện. Đây gọi là chống rủi ro.  

- **Phân tích rủi ro**

Nhận thấy, khi chúng ta muốn xây một căn nhà cao 5 tầng, chúng ta có thể xây 3 tầng đầu tiên. Sau một thời gian, chúng ta có thể xây 2 tầng còn lại. Tuy nhiên, cái móng để xây nhà phải làm chắc có thể trụ được 5 tầng, không phải chỉ cho 3 tầng của tòa nhà được. 
Chính vì vậy, khi chúng ta thực hiện 20% tính năng core của phần mềm thì base không chỉ đủ 20% core đấy mà phải làm base cho cả hệ thống. Nhờ vậy, giảm thiểu rủi ro cho hệ thống.  

Chúng ta, cần phải phát hiện rủi ro có thể xảy ra với dự án. Từ đó, xây dựng phương án giảm thiểu thiệt hại.

Tuy nhiên, mô hình xoắn ốc lại không được dùng trong thực tế do tính khả thi của phân tích rủi ro. Để phân tích được rủi ro, chúng ta cần những người có kinh nghiệm lớn, trải qua nhiều số người như này rất hiếm.
Tuy nhiên, mô hình xoắn lại có giá trị cao về học thuật.

## b. Ưu, nhược điểm
Ưu điểm của mô hình xoắn ốc là nó cho phép các yếu tố, tính năng của sản phẩm được thêm vào ngay cả khi chúng đã được thực thi. Điều này đảm bảo rằng không có xung đột với các yêu cầu và thiết kế trước đó của phần mềm. 

Mô hình xoắn ốc giải quyết được các hạn chế của mô hình thác nước. Các yêu cầu trong mô hình xoắn ốc có thể được thay đổi. Nhờ đó, các yêu cầu được xác định rõ ràng, chính xác hơn. Việc phát triển phần theo mô hình xoắn ốc giúp cho khách hàng có thể thấy toàn bộ hệ thống sớm hơn. 
Quá trình phát triển có thể được chia các phần nhỏ hơn và các phần rủi ro có thể được phát triển sớm hơn giúp quản lý rủi ro tốt hơn.

Tuy nhiên, việc quản lý, quy trình phát triển mô hình xoắn ốc sẽ phức tạp. Từ đó, mô hình xoắn ốc không phù hợp với các mô hình vừa và nhỏ hoặc rủi ro thấp. Ngoài ra, số lượng lớn các giai đoạn đòi hỏi cần một số lượng lớn tài liệu. 

# Kết luận
Mô hình đóng vai trò là hướng đi và quyết định đến chất lượng đầu ra của sản phẩm. Vì vậy, việc xác định đúng và chính xác mô hình cho phần mềm là rất quan trọng. Mỗi mô hình quy trình tuân theo một loạt các bước duy nhất đối với loại của nó để đảm bảo thành công trong quy trình phát triển phần mềm. Tùy vào cấu trúc phần mềm mà từ đó chọn đúng mô hình phần mềm để thực hiện. Trong thực tế, chúng ta không nhất thiết phải sử dụng đúng các mô hình phần mềm trên mà có thể "biến tấu", thay đổi để phù hợp với dự án phần mềm.