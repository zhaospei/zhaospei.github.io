---
layout: post
title:  " Bọ là gì? Defect, Fault, Error, Bug, Failure?"
categories: SE
author: zhao
tags: ["Bug", "Defect", "Fault", "Failure"]
img-feature: /assets/media/feature/Software-bugs.jpg
des: Defects, giống như Quality (Chất lượng phần mềm), có thể định nghĩa bằng nhiều cách khách nhau nhưng thường được định nghĩa là sai lệch so với thông số kỹ thuật hoặc mong đợi có thể dẫn đến failures khi vận hành.
---

## Người đọc tự chịu trách nhiệm về tính xác thực của bài viết.

# Context
Chuyện là tuần vừa rồi tôi tham gia lab nghiên cứu ở trường và được giao đọc một bài báo khoa học. Nếu không nhầm thì mục đích của thầy khi bảo tôi đọc bài báo này là nắm được sơ qua "context" nghiên cứu của nhóm đang thực hiện. 

Do lần đầu tôi được giao đọc một bài báo khoa học (à trước đó có đọc, dịch gì đấy một bài rồi nhưng mà khi chú tâm thực hiện), thì tất nhiên chưa có kinh nghiệm nên là chỉ nghĩ đọc hiểu nghĩa, cái chung chung bài báo đang nói là gì, hiểu cách bài báo đang thực hiện, vân vân mây mây... Và rồi, sau một tuần được giao đọc bài báo thì mình lên gặp thầy trao đổi về hiểu biết của mình về bài báo. À thì mọi việc sẽ chả có gì nếu như cách đọc của mình là đúng. 

Nhưng **KHÔNG**, mình đã được khai sáng một đống tri thức mới. Thầy bảo mình không thể hiểu chung chung bài báo nói gì được mà phải nắm rõ và chính xác toàn bộ khái niệm mà bài báo đã đề cập như bài báo mình "được" đọc là ["Classifying Software Changes: Clean or Buggy?"](https://ieeexplore.ieee.org/document/4408585?denied=) thì đầu tiên phải đặt câu hỏi *Software Changes* là gì? *Clean, Buggy* là gì? (Tất nhiên là trong "context" của bài báo). 

Trong một đống thứ thầy nói và hỏi mình thì chắc thứ tồn đọng lại (khắc sâu mình nhất) là câu hỏi (cũng là câu hỏi đầu tiên) là: **"Theo em, bug là gì?"** (Vì tiêu đề bài báo có việc phân loại hai nhãn là Clean và Buggy mà). Lúc đấy, mình kiểu :))). Tại mình nghĩ là thầy sẽ vấn đề và hướng giải quyết của bài báo chứ không phải mấy câu hỏi lí thuyết như này. Và thầy doạ mình là không trả lời được sẽ hạ điểm (tất nhiên là đùa) môn mình kì trước (Do kì trước mình có tham gia lớp kiểm thử của thầy, không hiểu sao thầy vẫn còn nhớ mình :)). 

Và một đứa thường bỏ qua những thứ căn bản như mình thì tất nhiên chả bao giờ tìm hiểu định nghĩa nó là gì rồi và khi một từ thông dụng và được dùng rất nhiều trong cộng đồng lập trình như từ "bug" như thế thì mình trả lời đại khái là: *"Bug là lỗi phần mềm. Nó xảy ra khi phần mềm thực hiện sai và không đúng mong đợi đã được đề ra ban đầu".* Và thầy nhìn mình, nhìn ánh mắt "trìu mến" mà thầy nhìn mình là mình biết chất lượng trả lời câu hỏi của mình như thế nào rồi. Xong thầy bảo, trong phát triển phần mềm, lỗi phần mềm không chỉ là bug, mà còn có *defect*, *fault*, *error*, *failure*. Lúc thầy nói mấy từ này mình chả nghe ra đâu (do trình nghe đọc tiếng anh mình hơi kém, thực ra là rất kém) đến lúc thầy viết ra mình và giải thích mình mới có thể hình dung ra những từ này. Và đấy là lí do mình viết bài viết này để "flex" (đùa chứ xem mình hiểu tới đâu và nhờ bạn đọc xác nhận lại giùm mình.).

# Main
Thực ra trên mạng có rất nhiều bài viết viết về vấn đề này rồi, bạn chỉ cần hỏi "ông Gu Gồ" là nó ra một đống cho bạn đọc nên là mình không đi sâu vào lắm mà chỉ sơ qua những gì mình hiểu được về nó và phân biệt những khái niệm đã nêu ở phần tiêu đề.

{% include image.html url="/assets/media/post/bug-vs-defect-vs-error-vs-fault-vs-failure.png" description="" %}

**Defects**, like quality, can be defined in many different ways but are more commonly defined as deviations from specifications or expectations which might lead to **failures** in operation. *(Có thể dịch là: Defects, giống như Quality (Chất lượng phần mềm), có thể định nghĩa bằng nhiều cách khách nhau nhưng thường được định nghĩa là sai lệch so với thông số kỹ thuật hoặc mong đợi có thể dẫn đến failures khi vận hành.)*

A software **failure** is **observable** software misbehavior; however, a **defect** may not always lead to a **failure**. *(Có thể dịch là: Failure là hành vi sai trái của phần mềm có thể quan sát được. Tuy nhiên, một defect không phải lúc nào cũng dẫn đến một failure.)*

**Defects** colloquially called **bugs** in software artifacts, typically in the software source code. *(Có thể dịch là: Defects thường được gọi (một cách không chính thức) là bugs trong software artifacts (bất kỳ thứ gì tạo ra phần mềm), điển hình là mã nguồn.)*

# Exit
Bài viết này khoảng một nửa là mình bịa, một nửa còn lại cũng bịa nốt.
