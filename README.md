# image-comparison-slider

[![NPM](https://nodei.co/npm/image-comparison-slider.png?compact=true)](https://npmjs.org/package/image-comparison-slider)

[![npm version](https://badge.fury.io/js/image-comparison-slider.svg)](http://badge.fury.io/js/image-comparison-slider)
[![Dependency Status](https://david-dm.org/guillaumedeplanque/image-comparison-slider.svg?theme=shields.io)](https://david-dm.org/guillaumedeplanque/image-comparison-slider)
[![devDependency Status](https://david-dm.org/guillaumedeplanque/image-comparison-slider/dev-status.svg?theme=shields.io)](https://david-dm.org/guillaumedeplanque/image-comparison-slider#info=devDependencies)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/guillaumedeplanque/image-comparison-slider/master/LICENSE)

Compare two images in a slider with mouse move effect

![Two kittens !](http://res.cloudinary.com/krotoku/image/upload/v1492092439/image-comparison-slider.png)

## Install

```sh
$ npm install image-comparison-slider
```

## Usage

In your HTML file, create a block with the class "comparison-slider". Add two data-attributes :
* data-image-width : the width of your two images
* data-image-height : the height of your two images

Inside this block, add two divs like this :
```html
<div class="comparison-slider" data-image-width=1157 data-image-height=851>
    <div class="before" style="background-image: url('img/before.jpg')"></div>
    <div class="after" style="background-image: url('img/after.jpg')"></div>
</div>
```

In your JS file, import the Comparison class & instantiate it :
```js
import Comparison from 'image-comparison-slider';

const comparison = new Comparison();
```

Tadaaaaa ! Magic is done !


## Demo mode

```sh
# Clone the repo
$ git clone https://github.com/guillaumedeplanque/image-comparison-slider.git

# Move into the repo
$ cd image-comparison-slider/

# Install dependencies
$ npm install

# Build assets for dev mode
$ npm run demo-build
# Build assets for production mode
$ npm run demo-build-prod

# Lauch the static server
$ node demo/server.js
```
