---
layout: post
title:  "Kiểm thử bằng phương pháp phân tích giá trị biên"
categories: Testing
author: zhao
tags: ["testing"]
img-feature: /assets/media/feature/kiem-thu-gia-tri-bien.jpg
des: Trong số các phương pháp kiểm thử, kiểm thử phân tích giá trị biên (Boundary Value Analysis) đã được đánh giá cao vì tính hiệu quả và độ chính xác của nó. Phương pháp này giúp tập trung kiểm thử vào các giá trị biên của dữ liệu đầu vào, từ đó giảm thiểu thời gian và chi phí kiểm thử. 
---

Trong quá trình phát triển phần mềm, kiểm thử là một bước không thể thiếu để đảm bảo chất lượng và độ tin cậy của sản phẩm. 

Trong số các phương pháp kiểm thử, kiểm thử phân tích giá trị biên (Boundary Value Analysis) đã được đánh giá cao vì tính hiệu quả và độ chính xác của nó. Phương pháp này giúp tập trung kiểm thử vào các giá trị biên của dữ liệu đầu vào, từ đó giảm thiểu thời gian và chi phí kiểm thử. 

Bài viết này sẽ cách sinh test cho ca kiểm thử phân tích giá trị biên thông qua một bài toán kiểm thử nhỏ.

# Bài toán 

**DummyTel** có cấu trúc tỷ lệ sau đây cho các cuộc gọi đường dài:

- Bất kỳ cuộc gọi nào bắt đầu lúc hoặc sau 18:00 nhưng trước 08:00 được giảm 50%.
- Bất kỳ cuộc gọi nào bắt đầu lúc hoặc sau 08:00 nhưng trước 18:00 được tính giá đầy đủ.
- Bất kỳ cuộc gọi nào dài hơn 60 phút đều được giảm giá 15% trên chi phí (sau khi trừ đi bất kỳ khoản giảm giá nào khác). 

Chương trình đọc **thời điểm bắt đầu cuộc gọi** dựa trên đồng hồ 24 giờ và **thời lượng của cuộc gọi**. Thời gian cuộc gọi tối đa là 180 phút.

Chương trả về:
- -1 nếu đầu vào không hợp lệ.
- 0  nếu không được giảm giá.
- 1  nếu được giảm 15%.
- 2  nếu được giảm 50%.
- 3  nếu vừa được giảm 50% và 15%. 

Chương trình sẽ giả sử chỉ các giá trị số nguyên được nhập vào, thời lượng không âm và thời gian bắt đầu biểu thị thời gian đồng hồ thực. 

# Phân tích yêu cầu 

Đầu vào của chương trình: Thời điểm bắt đầu, Thời lượng của cuộc gọi. 
Đầu ra của chường trình: Chi phí của cuộc gọi 
Điều kiện hợp lệ của đầu vào: 
+ Thời điểm bắt đầu: Có giá trị nguyên trong khoảng từ 0 đến 23.
+ Thời lượng cuộc gọi: Từ 0 đến 180.
Giá trị đầu ra: 0 (nếu không được giảm giá), 1 (nếu được giảm 15%), 2 (nếu được giảm 50%), 3 (nếu vừa được giảm 50% và 15%).

# Phân vùng tương đương
Ta chia thành các giá trị đầu vào thành các phân vùng tương đương sau:

Gọi **TĐBB** là Thời điểm bắt đầu cuộc gọi, **TLCG** là Thời lượng cuộc gọi.

|TH	|Inputs	|Output|
|--|--|--|
|1	|TĐBB ∉{0,…,23} hoặc TGCG ∉{0,…,180}| -1 |
|2|	Hợp lệ và (8 <= TĐBB < 18 và TGCG <= 60)	|0|
|3|	Hợp lệ và (8 <= TĐBB < 18 và TGCG > 60)	|1|
|4|	Hợp lệ và (TGCG <= 60 và (TĐBB >= 18 hoặc TĐBB < 8))	|2|
|5|	Các TH còn lại	|3|

Từ bảng trên ta sinh 5 test cho 5 phần vùng tương đương lần lượt là:

|Testcase	| Inputs	| EO|
|--|--|--|
|1|	TĐBB = -2 và TGCG = 191	|-1|
|2|	TĐBB = 12 và TGCG = 45	|0|
|3|	TĐBB = 14 và TGCG = 92 |1|
|4|	TĐBB = 20 và TGCG = 30 |2|
|5|	TĐBB = 21 và TGCG = 124	| 3|



# Xác định biên

**Biên của TĐBB:**
 
![Biên của TĐBB](/assets/media/post/bien-1.png)

- Giá trị biên của TĐBB lần lượt là 0, 8, 18, 23
- Giá trị nom của TĐBB là 12 (Điểm giữa của miền hợp lệ)

**Biên của TGCG:**

![Biên của TĐBB](/assets/media/post/bien-2.png)

- Giá trị biên của TGCG lần lượt là 0, 60, 180
- Giá trị nom của TGCG là 90 (Điểm giữa của miền hợp lệ)

# Sinh test cho kiểm thử biên đơn giản
Mỗi giá trị biên của một input kết hợp với các giá trị nom của các input còn lại và một test bao gồm tất cả các giá trị nom của các input.

Hay chúng ta có tổng cộng: 4 + 3 + 1 = 8 (Testcases)

|Testcase	| Inputs	|EO|
|--|--|--|
|1	|TĐBB = 0 và TGCG = 90	|3|
|2	|TĐBB = 8 và TGCG = 90	|1|
|3	|TĐBB = 18 và TGCG = 90	|3|
|4	|TĐBB = 23 và TGCG = 90	|3|
|5	|TĐBB = 12 và TGCG = 0	|0|
|6	|TĐBB = 12 và TGCG = 60	|0|
|7	|TĐBB = 12 và TGCG = 180|1|
|8	|TĐBB = 12 và TGCG = 90	|1|

# Biên và cận biên trong miền hợp lệ
Các test case tương tự như biên đơn giản và thêm các test case cận biên bằng cách kết hợp giá trị cận biên của một input với các giá trị nom của các input còn lại.

Lấy các giá trị cận biên cách giá trị biên một khoảng là 1.

TĐBB có 4 giá trị biên -> 6 giá trị cận biên trong miền hợp lệ. 

TGCG có 3 giá trị biên -> 4 giá trị cận biên trong miền hợp lệ. 

Vậy số test cases tất cả là 8 + 6 + 4 = 18 (Testcase)   

|Testcase	| Inputs	|EO|
|--|--|--|
|1	|TĐBB = 0 và TGCG = 90	|3|
|2	|TĐBB = 8 và TGCG = 90	|1|
|3	|TĐBB = 18 và TGCG = 90	|3|
|4	|TĐBB = 23 và TGCG = 90	|3|
|5	|TĐBB = 12 và TGCG = 0	|0|
|6	|TĐBB = 12 và TGCG = 60	|0|
|7	|TĐBB = 12 và TGCG = 180|1|
|8	|TĐBB = 12 và TGCG = 90	|1|
|9	|TĐBB = 1 và TGCG = 90	|3|
|10	|TĐBB = 7 và TGCG = 90	|3|
|11	|TĐBB = 9 và TGCG = 90	|1|
|12	|TĐBB = 17 và TGCG = 90	|1|
|13	|TĐBB = 19 và TGCG = 90	|3|
|14	|TĐBB = 22 và TGCG = 90	|3|
|15	|TĐBB = 12 và TGCG = 1	|0|
|16	|TĐBB = 12 và TGCG = 59	|0|
|17	|TĐBB = 12 và TGCG = 61	|1|
|18	|TĐBB = 12 và TGCG = 179|1|

# Biên và cận biên trong toàn bộ miền giá trị.
Các test case tương tự như biên và cận biên trong miền hợp lệ và thêm các test case cận biên ngoài miền hợp lệ bằng cách kết hợp giá trị cận biên ngoài miền hợp lệ của một input với các giá trị nom của các input còn lại.

Lấy các giá trị cận biên cách giá trị biên một khoảng là 1.

Nhận thấy: 
- TĐBB có 2 giá trị cận biên ngoài miền hợp lệ. 
- TGCG có 2 giá trị cận biên ngoài miền hợp lệ. 

Vậy số test cases tất cả là 18 + 2 + 2 = 22 (Testcase)   

|Testcase	| Inputs	|EO|
|--|--|--|
|1	|TĐBB = 0 và TGCG = 90	|3|
|2	|TĐBB = 8 và TGCG = 90	|1|
|3	|TĐBB = 18 và TGCG = 90	|3|
|4	|TĐBB = 23 và TGCG = 90	|3|
|5	|TĐBB = 12 và TGCG = 0	|0|
|6	|TĐBB = 12 và TGCG = 60	|0|
|7	|TĐBB = 12 và TGCG = 180|1|
|8	|TĐBB = 12 và TGCG = 90	|1|
|9	|TĐBB = 1 và TGCG = 90	|3|
|10	|TĐBB = 7 và TGCG = 90	|3|
|11	|TĐBB = 9 và TGCG = 90	|1|
|12	|TĐBB = 17 và TGCG = 90	|1|
|13	|TĐBB = 19 và TGCG = 90	|3|
|14	|TĐBB = 22 và TGCG = 90	|3|
|15	|TĐBB = 12 và TGCG = 1	|0|
|16	|TĐBB = 12 và TGCG = 59	|0|
|17	|TĐBB = 12 và TGCG = 61	|1|
|18	|TĐBB = 12 và TGCG = 179|1|
|19|TĐBB = 12 và TGCG = -1	| -1|
|20	|TĐBB = 12 và TGCG = 181	| -1|
|21	|TĐBB = -1 và TGCG = 90	| -1|
|22	|TĐBB = 24 và TGCG = 90	| -1|

# Kết luận
 Nhận thấy toàn bộ test case trong kiểm thử giá trị biên trên đều không cho output nằm trong trường hợp số 2. Vì vậy, kiểm thử giá trị biên sẽ không thể bao hàm toàn bộ trường hợp và thường kết hợp với các loại kiểm thử khác như phân hoạch tương đương hoặc kiểm thử bằng quyết định,.. 
Thường trong thực tế, các công ty thường sinh test kiểu này: Kết hợp phân hoạch tương đương (hoặc bảng quyết định) với phân tích giá trị biên thường cho kết quả tốt vì nó có chi phí, thời gian, công sức vừa phải và bao hàm hầu hết mọi trường hợp của giá trị đầu vào.  
