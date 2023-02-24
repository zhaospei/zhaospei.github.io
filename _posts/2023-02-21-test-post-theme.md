---
layout: post
title:  "Test post theme"
categories: dummy
author: zhao
tags: ["abc", "xyz", "zhao"]
---

## Autoprefixer [![Cult Of Martians][cult-img]][cult]
 
> The man who comes back through the door in the wall will never be quite the same as the man who went out.

[PostCSS] plugin to parse CSS and add vendor prefixes to CSS rules using values
from [Can I Use]. It is recommended by Google and used in Twitter and Alibaba.

Write your CSS rules without vendor prefixes (in fact, forget about them
entirely):

```css
::placeholder {
  color: gray;
}
.image {
  background-image: url(image@1x.png);
}
@media (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

```python
import os

from flask import Flask, jsonify, request

from .common import load_from_s3, load_from_disk

app = Flask(__name__)

MODEL_SOURCE = os.environ.get('MODEL_SOURCE')
if MODEL_SOURCE  == 'S3':
    MODEL = load_from_s3()
elif MODEL_SOURCE == 'DISK':
    MODEL = load_from_disk()
else:
    raise ValueError(f"Invalid value for MODEL_SOURCE: {MODEL_SOURCE}")

features = [
    'age', 
    'fnlwgt', 
    'education_num', 
    'capital_gain', 
    'capital_loss', 
    'hours_per_week'
]

@app.route("/")
def serve():
    return jsonify(success=True)

@app.route("/predict", methods=["POST"])
def predict():
    request_payload = request.json
    payload = [request_payload[feature] for feature in features]
    proba = MODEL.predict_proba([payload])[0][1] 
    return {
        'prediction': '>$50K' if proba >= 0.5 else '<=$50K',
        'probability': proba
    }

```

Autoprefixer will use the data based on current browser popularity and property
support to apply prefixes for you. You can try the [interactive demo]
of Autoprefixer.

```css
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}
.image {
  background-image: url(image@1x.png);
}
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```

Twitter account for news and releases: [@autoprefixer].

<a href="https://evilmartians.com/?utm_source=autoprefixer">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

# Testing out latex

$$ \nabla_\boldsymbol{x} J(\boldsymbol{x}) $$

[interactive demo]: https://autoprefixer.github.io/
[@autoprefixer]:    https://twitter.com/autoprefixer
[Can I Use]:        https://caniuse.com/
[cult-img]:         http://cultofmartians.com/assets/badges/badge.svg
[PostCSS]:          https://github.com/postcss/postcss
[cult]:             http://cultofmartians.com/tasks/autoprefixer-grid.html

