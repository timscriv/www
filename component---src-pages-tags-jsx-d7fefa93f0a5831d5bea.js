(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,u){"use strict";u.r(t),u.d(t,"pageQuery",function(){return m});var n=u(6),a=u.n(n),f=u(0),r=u.n(f),o=u(32),i=u(145),c=u.n(i),l=u(160),s=u.n(l),d=u(146),x=u(147),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.group;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{title:"All Tags - "+e}),r.a.createElement(x.a,this.props),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},"Tags"),r.a.createElement("div",{className:"page__body"},r.a.createElement("div",{className:"tags"},r.a.createElement("ul",{className:"tags__list"},t.map(function(e){return r.a.createElement("li",{key:e.fieldValue,className:"tags__list-item"},r.a.createElement(o.Link,{to:"/tags/"+s()(e.fieldValue)+"/",className:"tags__list-item-link"},e.fieldValue," (",e.totalCount,")"))})))))))))},t}(r.a.Component);t.default=p;var m="1135608625"},160:function(e,t,u){var n=u(161)(function(e,t,u){return e+(u?"-":"")+t.toLowerCase()});e.exports=n},161:function(e,t,u){var n=u(162),a=u(163),f=u(166),r=RegExp("['’]","g");e.exports=function(e){return function(t){return n(f(a(t).replace(r,"")),e,"")}}},162:function(e,t){e.exports=function(e,t,u,n){var a=-1,f=null==e?0:e.length;for(n&&f&&(u=e[++a]);++a<f;)u=t(u,e[a],a,e);return u}},163:function(e,t,u){var n=u(164),a=u(148),f=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(f,n).replace(r,"")}},164:function(e,t,u){var n=u(165)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},165:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},166:function(e,t,u){var n=u(167),a=u(168),f=u(148),r=u(169);e.exports=function(e,t,u){return e=f(e),void 0===(t=u?void 0:t)?a(e)?r(e):n(e):e.match(t)||[]}},167:function(e,t){var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(u)||[]}},168:function(e,t){var u=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return u.test(e)}},169:function(e,t){var u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+u+"]",a="\\d+",f="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+u+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+r+"|"+o+")",d="(?:"+l+"|"+o+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,c].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),m="(?:"+[f,i,c].join("|")+")"+p,E=RegExp([l+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,l+s,"$"].join("|")+")",l+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");e.exports=function(e){return e.match(E)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-d7fefa93f0a5831d5bea.js.map