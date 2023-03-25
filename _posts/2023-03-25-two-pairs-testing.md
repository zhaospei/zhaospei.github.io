---
layout: post
title:  "Cách sinh test cho kỹ thuật kiểm thử theo cặp - Pairwise Testing (All-Pairs Testing)"
categories: Testing
author: zhao
tags: ["pairwise", "all-pairs", "testing"]
img-feature: /assets/media/feature/Software-Development-Life-Cycle.png
---

Trong bài viết này, chúng ta sẽ tìm hiểu về một kỹ thuật kiểm thử tổ hợp (Combinatorial Testing) được gọi là Kiểm thử theo cặp
(Pairwise Testing hay All-Pairs Testing).

# Định nghĩa: Thế nào là All-Pairs Testing?

Theo **ISTQB**, **All-Pairs Testing (hay Pairwise Testing)** là một kỹ thuật kiểm thử hộp đen trong đó các test cases được thiết kế để thực hiện tất cả các tổ hợp có thể có của từng cặp tham số đầu vào. Tức là với mỗi cặp input đầu vào, tất cả các giá trị của cặp input đấy được phủ toàn bộ (Một test case có thể phủ được nhiều cặp input khác nhau).

Kỹ thuật **All-Pairs** rất hữu ích để thiết kế các bài kiểm tra cho các ứng dụng liên quan đến nhiều tham số. Các thử nghiệm được thiết kế sao cho đối với mỗi cặp tham số đầu vào của một hệ thống, có tất cả các tổ hợp riêng biệt có thể có của các tham số đó. Bộ thử nghiệm bao gồm tất cả các tổ hợp; do đó, nó không toàn diện nhưng rất hiệu quả trong việc tìm lỗi.

Kiểm thử **All-Pairs** được áp dụng phổ biến trong công nghiệp khi mà một số vấn đề chỉ được xảy ra bởi sự tương tác giữa các tham số đầu vào hoặc components. Kiểm thử **All-Pairs** có thể tìm được đến 50 - 90% lỗi của phần mềm, hệ thống.

# Cách sinh test cho All-Pairs Testing

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
- **Loại giao dịch**: E-Booking, In-store
- **Thời gian giao dịch**: Thời gian trong giờ làm việc, Thời gian ngoài giờ làm việc

Nếu chúng ta sinh test cases một cách không khoa học cho toàn bộ các tổ hợp hợp lệ thì sẽ có đến: 
- 2 . 2 . 3 . 5000 . 2 . 2 = **24000** test cases tổ hợp hợp lệ.

Chưa kể chúng ta còn chưa tính đến các test cases không hợp lệ trong quá trình sinh test. 

### Bước 2: Đơn giản hóa việc sinh test cases (Simplify)
Chúng ta sẽ đơn giản việc sinh các test cases theo các cách:
- Sử dụng một kỹ thuật lẫy mẫu thông minh
- Sử dụng các nhóm hay ranh giới, ngay cả khi dữ liệu không rời rạc.
- Giảm số đăng ký xuống còn hai loại: Valid và Invaild.

Bây giờ, số test cases chúng ta sẽ phải sinh sẽ còn lại:
- 2 . 2 . 3 . 2 . 2 . 2  = **96** test cases.

Woa Woa Woa! Chúng ta đã giảm số lượng các test case cần phải sinh một số rất lớn rồi đúng không? Nhưng đây vẫn chưa phải các sinh hợp lí để cho số lượng test cases nhỏ nhất có thể. Tiếp tục nào!

### Bước 3: Sắp xếp các biến và giá trị liên quan

Khi chúng ta sắp xếp các biến và giá trị liên quan chúng ta sẽ có một bảng trông như thế này đây.

![](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2015/10/all-pairs-testing-example-1.jpg)