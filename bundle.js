// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).skewness=n()}(this,(function(){"use strict";var e=Math.sqrt;return function(n,t){var o,f;return n<=0||t<=0?NaN:(o=2*(t-n)*e((f=n+t)+1),o/=(f+2)*e(n*t))}}));
//# sourceMappingURL=bundle.js.map
