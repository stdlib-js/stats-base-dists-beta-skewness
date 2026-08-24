"use strict";var o=function(s,r){return function(){try{return r||s((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=o(function(x,t){
var u=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist');function q(s,r){var e,i;return u(s)||s<=0||u(r)||r<=0?NaN:(i=s+r,e=2*(r-s)*n(i+1),e/=(i+2)*n(s*r),e)}t.exports=q
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
