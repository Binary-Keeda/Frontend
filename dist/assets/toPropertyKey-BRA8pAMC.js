import{_ as t}from"./typeof-QjJsDpFa.js";function n(r,i){if(t(r)!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,i);if(t(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function u(r){var i=n(r,"string");return t(i)=="symbol"?i:i+""}export{u as t};
