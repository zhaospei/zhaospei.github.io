---
layout: post
title:  "Triển khai seq2seq với Pytorch"
categories: NLP
author: zhao
tags: ["nlp", "pytorch", "model"]
up_date: 2023-10-05
img-feature: /assets/media/feature/pytorch.png
comments: false
---
Bài viết này giới thiệu cách sử dụng `Pytorch` để xây dựng mô hình seq2seq và triển khai một ứng dụng dịch máy đơn giản, vui lòng đọc ngắn ngọn bài báo sau trước, [Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation(2014)](https://arxiv.org/pdf/1406.1078.pdf), để hiểu rõ cấu trúc seq2seq trong như thế nào, sau đó đọc bài viết này để đạt được kết quả gấp đôi với một nửa công sức.

(Có thể trong thời gian xa tôi sẽ viết một bài về seq2seq, hiện tại bạn có thể đọc tạm paper về nó)

Tôi đã đọc rất nhiều sơ đồ cấu trúc mạng seq2seq và tôi cảm thấy sơ đồ này do Pytorch cung cấp là dễ hiểu nhất.

{% include image.html url="/assets/media/post/seq2seq.png" %}

# .....Thôi viết tiếp trong tương lai nhé :))