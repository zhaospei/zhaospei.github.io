---
layout: post
title:  "Từ nơ-ron sinh học đến nơ-ron nhân tạo"
categories: Deep-Learning
author: zhao
tags: ["Neuron", "Deep Learning"]
img-feature: /assets/media/feature/no-ron-sinh-hoc.png
des: Con người lấy cảm hứng từ các loài chim để bay, loài sứa biển để điều trị ung thư, da cá mập để làm bề mặt vật liệu chống bám và còn rất nhiều phát minh khác lấy cảm hứng từ thiên nhiên. 
---

Con người lấy cảm hứng từ các loài chim để bay, loài sứa biển để điều trị ung thư, da cá mập để làm bề mặt vật liệu chống bám và còn rất nhiều phát minh khác lấy cảm hứng từ thiên nhiên. 

Vì thế, rất dễ hiểu khi ta xem xét cấu trúc bộ não sinh học để tìm cảm hứng cho việc xây dựng một bộ máy thông minh. Đây cũng chính là ý tưởng đằng sau của **Mạng nơ-ron nhân tạo (artificial neural network - ANN)**. 

Tuy nhiên, dù máy bay lấy cảm hứng từ loài chim, chúng lại không cần phải vỗ cánh. Tương tự, ANN đã dần trở nên rất khác biệt so với phiên bản sinh học của nó. Một số nhà nghiên cứu còn cho rằng chúng ta nên ngừng sử dụng phép so sánh với sinh học (ví dụ như sử dụng từ "*đơn vị*" - "*unit*" - thay cho "*nơ-ron*"), vì lo rằng phép so sánh này sẽ giới hạn sự sáng tạo trong các hệ thống hợp lý về mặt sinh học.


# Nơ-ron Sinh học

Trước khi chúng ta bàn về nơ-ron nhân tạo, chúng ta cùng tìm hiểu qua nơ-ron sinh học. *Nơ-ron sinh học* là một tế bào với vẻ ngoài khác thường được tìm thấy trong não động vật. Nó bao gồm một *thân tế bào* chứa nhân và hầu hết các thành phần phức tạp khác, với các nhánh mở rộng được gọi là *sợi nhánh*, cùng với một phần mở rộng rất dài được gọi là *sợi trục*. Chiều dài của sợi trục lớn hơn thân tế bào từ vài lần cho đến hàng chục nghìn lần. Ở gần cuối, sợi trục tách thành nhiều nhành được gọi là *telodendria*, và tại đỉnh của những nhành này là các cấu trúc siêu nhỏ được gọi là *điểm tiếp hợp synap* (hoặc đơn giản là *synap*), được nối với các sợi nhánh hoặc thân tế bào của những nơ-ron khác. Các nơ-ron sinh học sinh ra các xung điện ngắn được gọi là *điện thế hoạt động* (hoặc đơn giản  là *tín hiệu*). Chúng di chuyển dọc theo sợi trục và kích thích synap giải phóng ra tín hiệu hoá học được gọi *chất dẫn truyền thần kinh*. Khi một nơ-ron nhận đủ một lượng chất dẫn truyền thần kinh này trong một vài mili giây, nó sẽ phát ra các xung điện của chính nó (thật ra, điều này còn phụ thuộc vào chất dẫn truyền thần kinh bởi có một số chất ức chế sự kích hoạt của nơ-ron). 

{% include image.html url="/assets/media/post/no-ron-sinh-hocc.png" description="Nơ-ron sinh học" %}

Do đó, mặc dù các nơ-ron sinh học riêng lẻ dường như có cách hoạt động khá đơn giản, chúng lại được tổ chức trong một mạng lưới rộng lớn với hàng tỷ nơ-ron, và ở đố mỗi nơ-ron được kết nối với hàng nghìn nơ-ron khác. Các phép tính với độ phức tạp cao có thể được xử lý bởi một mạng nơ-ron khá đơn giản, tương tự như cách một tổ kiến phức tạp được tạo nên bởi nỗ lực tổng hợp từ những các thể kiến riêng lẻ. *Kiến trúc mạng nơ-ron sinh học (biological neural network - BNN)* vẫn đang là chủ đề được tích cực nghiên cứ, tuy nhiên một vài phần của não đã được khám phá, và có vẻ như các nơ-ron thường được sắp xếp thành các tầng liên tiếp, đặc biệt là ở vùng đại não (lớp ngoài cùng của bộ não), như có thể thấy ở hình bên dưới.

{% include image.html url="/assets/media/post/cac-tang-trong-mang-no-ron-sinh-hoc.png" description="Các tầng trong mạng nơ-ron sinh học (Võ não người)" %}

# Nơ-ron Nhân tạo

Mạng nơ-ron Nhân tạo là một phương thức, công cụ trong lĩnh vực trí tuệ nhân tạo, được lấy cảm hứng từ cấu trúc bộ não con người, để máy tính có thể xử lý dữ liệu một cách tự động. Đây là một loại Học máy(Machine Learning), còn được gọi là Học sâu (Deep Learning), sử dụng các nơ-ron kết nối với nhau trong một cấu trúc phân lớp tương tự như bộ não con người. Quá trình này cho phép máy tính học hỏi từ sai lầm và cải thiện liên tục, tạo ra một hệ thống thích ứng. Mạng nơ-ron nhân tạo được áp dụng để giải quyết các vấn đề phức tạp, chẳng hạn như tóm tắt tài liệu hoặc nhận diện khuôn mặt, với độ chính xác cao hơn.

Bộ não sinh học chính là nguồn cảm hứng cho kiến trúc mạng nơ ron. Các tế bào não của con người, có được gọi là nơ-ron, tạo thành một mạng lưới phức tạp, có tính liên kết cao và gửi các tín hiệu điện đến nhau để giúp con người xử lý thông tin. Tương tự, một mạng nơ-ron nhân tạo được tạo ra từ các tế bào nơ-ron nhân tạo, cùng nhau phối hợp để giải quyết một vấn đề. Nơ-ron nhân tạo là các mô đun phần mềm, được gọi là nút và mạng nơ-ron nhân tạo là các chương trình phần mềm hoặc thuật toán mà về cơ bản, sử dụng hệ thống máy tính để giải quyết các phép toán.

McCulloch và Pitts đề xuất một mô hình rất đơn giản để mô tả mạng nơ-ron sinh học, và mô hình này về sau được biết đến là nơ-ron nhân tạo: nó có một hoặc nhiều đầu vào nhị phân (bật/tắt) và một đầu ra nhị phân. Nơ-ron nhân tạo kích hoạt đầu vào của nó khi có nhiều hơn một lượng đầu vào nhất định được kích hoạt. Trong bài báo, họ đã chứng minh rằng ngay cả với một mô hình đơn giản như trên, ta vẫn có thể xây dựng một mạng chứa các nơ-ron nhân tạo với khả năng tính toán bất kỳ mệnh đề logic nào. Hình phía dưới là một vài ANN thực hiện các phép toán khác nhau, với giả định rằng một nơ-ron được kích hoạt khi ít nhất hai trong số các đầu vào của nó được kích hoạt. 

{% include image.html url="/assets/media/post/ANN-phep-tinh-logic.png" description="ANN thực hiện các phép tính logic đơn giản" %}

Các mạng nơ-ron nhân tạo được nghiên cứu và phát triển thay đổi liên tục trong nhiều năm, với nhiều kiến trúc mạng nơ-ron nhân tạo khác nhau. Ngày nay, một mạng nơ-ron nhân tạo bao gồm 3 *lớp (layer)*:

**Lớp đầu vào**

Thông tin từ thế giới bên ngoài đi vào mạng nơ-ron nhân tạo thông qua lớp đầu vào. Các nút đầu vào xử lý dữ liệu, phân tích hoặc phân loại và sau đó chuyển dữ liệu sang lớp tiếp theo.

**Lớp ẩn**

Dữ liệu đi vào lớp ẩn đến từ lớp đầu vào hoặc các lớp ẩn khác. Mạng nơ-ron nhân tạo có thể có một số lượng lớn lớp ẩn. Mỗi lớp ẩn phân tích dữ liệu đầu ra từ lớp trước, xử lý dữ liệu đó sâu hơn và rồi chuyển dữ liệu sang lớp tiếp theo.

**Lớp đầu ra**

Lớp đầu ra cho ra kết quả cuối cùng của tất cả dữ liệu được xử lý bởi mạng nơ-ron nhân tạo. Lớp này có thể có một hoặc nhiều nút. Ví dụ: giả sử chúng ta gặp phải một vấn đề phân loại nhị phân (có/không), lớp đầu ra sẽ có một nút đầu ra, nút này sẽ cho kết quả 1 hoặc 0. Tuy nhiên, nếu chúng ta gặp phải vấn đề phân loại nhiều lớp, lớp đầu ra sẽ có thể bao gồm nhiều hơn một nút đầu ra.

**Kiến trúc mạng nơ-ron chuyên sâu** 

Mạng nơ-ron chuyên sâu, hoặc mạng deep learning, có nhiều lớp ẩn với hàng triệu nơ-ron nhân tạo liên kết với nhau. Một con số, có tên gọi là trọng số, đại diện cho các kết nối giữa hai nút. Trọng số sẽ dương nếu một nút kích thích nút còn lại, hoặc âm nếu một nút ngăn cản nút còn lại. Các nút với trọng số cao hơn sẽ có ảnh hưởng lớn hơn lên các nút khác.

Về mặt lý thuyết, mạng nơ-ron chuyên sâu có thể ánh xạ bất kỳ loại dữ liệu đầu vào với bất kỳ loại dữ liệu đầu ra nào. Tuy nhiên, chúng cũng cần được đào tạo hơn rất nhiều so với các phương pháp máy học khác. Chúng cần hàng triệu ví dụ về dữ liệu đào tạo thay vì hàng trăm hoặc hàng nghìn ví dụ mà một mạng đơn giản hơn thường cần. 

Phía dưới là một ví dụ cho kiến trúc mạng nơ-ron nhân tạo

{% include image.html url="/assets/media/post/no-ron-nhan-tao.png" description="Mạng nơ-ron nhân tạo" %}

# Từ Nơ-ron Sinh học đến Nơ-ron Nhân tạo

Một điều đáng nhiên là ANN đã tồn tại từ khá lâu: chúng được giới thiệu vào năm 1943 bởi nhà sinh lý học thần kinh **Warren McCulloch** và nhà toán học **Walter Pitts**. Trong bài báo mang tính bước ngoặt của họ "*A Logical Calculus of Ideas Immanent in Nervous Activity*", McCulloch và Pitts đã trình bày một mô hình tính toán giản lược của cách mà các nơ-ron sinh học có thể làm việc cùng nhau trong não bộ động vật để thực hiện các phép tính phức tạp bằng *logic mệnh đề (propositional logic)*. Đây chính là kiến trúc mạng nơ-ron nhân tạo đầu tiên. Kể từ đó, hàng loạt các kiến trúc khác đã được phát minh, xử lý tính toán linh hoạt và hoạt động hiệu quả hơn.

Sự thành công sớm của ANN đã khiến nhiều người tin rằng họ sẽ sớm được nói chuyện với những cố máy thực sự thông minh. Vào thập niên 1960, khi rõ ràng là lời hứa này sẽ không được thực hiện (ít nhất là trong một khoảng thời gian dài), các nguồn tài trợ được chuyển sang lĩnh vực khác, và ANN bước vào một mùa đông dài. Vào thập niên 1980, các kiến trúc mới được phát minh và các kỹ thuật huấn luyện tốt hơn được phát triển, giúp cho *thuyết kết nối (connectionism - ngành nghiên cứu về mạng nơ-ron)* bắt đầu được quan tâm trở lại. Tuy nhiên, tiến độ trong ngành này khá chậm, vào vào thập niên 1990, các kỹ thuật Học Máy mạnh mẽ khác đã được phát minh, ví dụ *Máy Vector Hỗ trợ*,... Có vẻ những kỹ thuật này đem lại kết quả tốt hơn và nền tảng lý thuyết vững chắc hơn so với ANN, nên lần nữa việc nghiên cứu ANN lại bị trì hoãn. 

Giờ đây, khi lượng dữ liệu lớn bùng nổ và sự phát triển vượt bậc về năng lực tính toán từ thập niên 1990, chúng ta lại đang chứng kiến thêm một làn sống quan tâm khác tới ANN. Liệu xu hướng này sẽ lại lụi tàn như trước?
