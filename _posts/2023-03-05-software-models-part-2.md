---
layout: post
title:  "Một số mô hình phát triển phần mềm (Phần 2)"
categories: SE
author: zhao
tags: ["software", "model"]
---

Tiếp nối bài viết: [Một số mô hình phát triển phần mềm (Phần 1)](/se/2023/02/27/software-models-chapter-1/)

Trong bài viết này, tôi sẽ mô tả và phân tích chi tiết hai loại mô hình phát triển phần mềm bao gồm: Bản mẫu, Xoắn ốc. 

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

![Mô hình xoắn ốc](/assets/media/post/xoan-oc.png)

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
