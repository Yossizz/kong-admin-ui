(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-027ed6d5"],{"02f4":function(t,e,a){var s=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var r,h,c=String(i(e)),l=s(a),n=c.length;return l<0||l>=n?t?"":void 0:(r=c.charCodeAt(l),r<55296||r>56319||l+1===n||(h=c.charCodeAt(l+1))<56320||h>57343?t?c.charAt(l):r:t?c.slice(l,l+2):h-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"16b3":function(t,e,a){},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),i=a("32e9"),r=a("79e5"),h=a("be13"),c=a("2b4c"),l=a("520a"),n=c("species"),o=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var m=c(t),p=!r((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),f=p?!r((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[n]=function(){return a}),a[m](""),!e})):void 0;if(!p||!f||"replace"===t&&!o||"split"===t&&!u){var d=/./[m],v=a(h,m,""[t],(function(t,e,a,s,i){return e.exec===l?p&&!i?{done:!0,value:d.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}})),_=v[0],b=v[1];s(String.prototype,t,_),i(RegExp.prototype,m,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,a){"use strict";var s=a("aae3"),i=a("cb7c"),r=a("ebd6"),h=a("0390"),c=a("9def"),l=a("5f1b"),n=a("520a"),o=a("79e5"),u=Math.min,m=[].push,p="split",f="length",d="lastIndex",v=4294967295,_=!o((function(){RegExp(v,"y")}));a("214f")("split",2,(function(t,e,a,o){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(i,t,e);var r,h,c,l=[],o=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,p=void 0===e?v:e>>>0,_=new RegExp(t.source,o+"g");while(r=n.call(_,i)){if(h=_[d],h>u&&(l.push(i.slice(u,r.index)),r[f]>1&&r.index<i[f]&&m.apply(l,r.slice(1)),c=r[0][f],u=h,l[f]>=p))break;_[d]===r.index&&_[d]++}return u===i[f]?!c&&_.test("")||l.push(""):l.push(i.slice(u)),l[f]>p?l.slice(0,p):l}:"0"[p](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,s){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,s):b.call(String(i),a,s)},function(t,e){var s=o(b,t,this,e,b!==a);if(s.done)return s.value;var n=i(t),m=String(this),p=r(n,RegExp),f=n.unicode,d=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(_?"y":"g"),k=new p(_?n:"^(?:"+n.source+")",d),I=void 0===e?v:e>>>0;if(0===I)return[];if(0===m.length)return null===l(k,m)?[m]:[];var g=0,y=0,x=[];while(y<m.length){k.lastIndex=_?y:0;var C,T=l(k,_?m:m.slice(y));if(null===T||(C=u(c(k.lastIndex+(_?0:y)),m.length))===g)y=h(m,y,f);else{if(x.push(m.slice(g,y)),x.length===I)return x;for(var w=1;w<=T.length-1;w++)if(x.push(T[w]),x.length===I)return x;y=g=C}}return x.push(m.slice(g)),x}]}))},"4c5a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"table"}},[a("Table",{attrs:{border:"",columns:t.columns,data:t.targets},scopedSlots:t._u([{key:"name",fn:function(e){var s=e.row;return[a("strong",[t._v(t._s(s.name))])]}},{key:"action",fn:function(e){var s=e.row;return[a("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.deleteDialog(s.id)}}},[t._v(t._s(t.$t("common.delete")))])]}}])})],1),a("Modal",{attrs:{title:t.$t("target.addTarget"),"class-name":"vertical-center-modal"},on:{"on-ok":function(e){return t.addTarget(t.upstreamId)},"on-cancel":function(e){return t.cancelAddModalDialog()}},model:{value:t.addTargetModal,callback:function(e){t.addTargetModal=e},expression:"addTargetModal"}},[a("Form",{attrs:{model:t.target,"label-width":120,rules:t.ruleAddTarget}},[a("FormItem",{attrs:{label:"Upstream Id:"}},[a("Input",{attrs:{value:t.upstreamId,disabled:""}})],1),a("FormItem",{attrs:{label:"target:",prop:"target"}},[a("Input",{attrs:{placeholder:t.$t("target.targetHint")},model:{value:t.target.target,callback:function(e){t.$set(t.target,"target",e)},expression:"target.target"}})],1),a("FormItem",{attrs:{label:"weight:"}},[a("InputNumber",{attrs:{min:1},model:{value:t.target.weight,callback:function(e){t.$set(t.target,"weight",e)},expression:"target.weight"}})],1)],1)],1)],1)},i=[],r=a("c1df"),h=a.n(r),c={name:"RouteTable",props:["upstreamId"],data:function(){var t=this;return{loading:!0,columns:[{title:"id",key:"id"},{title:"target",key:"target",width:100},{title:"weight",key:"weight",width:100},{title:"created_at",key:"createAtStr",width:100},{title:t.$t("upstream.health"),key:"health",width:200,render:function(e,a){return"HEALTHY"===a.row.health?e("div",[e("Icon",{props:{type:"ios-checkmark-circle",size:16,color:"green"}}),e("span",t.$t("upstream.healthy"))]):"HEALTHCHECKS_OFF"===a.row.health?e("div",[e("Icon",{props:{type:"ios-warning",size:16,color:"#db5f0c"}}),e("span",t.$t("upstream.healthCheckOff"))]):e("div",[e("Icon",{props:{type:"ios-bug",size:16,color:"red"}}),e("span",t.$t("upstream.unhealthy"))])}},{title:this.$t("common.action"),slot:"action",width:150,align:"center"}],targets:[],addTargetModal:!1,target:{target:"",weight:2},ruleAddTarget:{target:[{required:!0,message:this.$t("target.targetNotice"),trigger:"blur"}],weight:[{required:!0,message:this.$t("target.weightNotice"),trigger:"blur"}]}}},methods:{loadTargets:function(){var t=this;this._get("/upstreams/"+this.upstreamId+"/health",(function(e){t.targets=e.data.data,t.targets.map((function(t){var e=h.a.unix(t.created_at);t.createAtStr=e.format("YYYY-MM-DD HH:mm:ss")}))}))},showAddTargetModal:function(){this.addTargetModal=!0},addTarget:function(){var t=this;this._post("/upstreams/"+this.upstreamId+"/targets",this.target,(function(){t.target.target="",t.target.weight=2,t.loadTargets()}))},deleteDialog:function(t){var e=this,a=this;this.$Modal.confirm({title:a.$t("target.deleteTarget"),content:a.$t("common.deleteMessage",{id:t}),onOk:function(){a._delete("/upstreams/"+e.upstreamId+"/targets/"+t,(function(){a.$Message.info("Target deleted!"),a.loadTargets()}))},onCancel:function(){}})},cancelAddModalDialog:function(){this.target.target="",this.target.weight=2}}},l=c,n=(a("e600"),a("2877")),o=Object(n["a"])(l,s,i,!1,null,"69aac003",null);e["a"]=o.exports},"520a":function(t,e,a){"use strict";var s=a("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,h=i,c="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),n=void 0!==/()??/.exec("")[1],o=l||n;o&&(h=function(t){var e,a,h,o,u=this;return n&&(a=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),l&&(e=u[c]),h=i.call(u,t),l&&h&&(u[c]=u.global?h.index+h[0].length:e),n&&h&&h.length>1&&r.call(h[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(h[o]=void 0)})),h}),t.exports=h},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"694f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),a("BreadcrumbItem",{attrs:{to:"/upstreams"}},[t._v("Upstream")]),t.edit?a("BreadcrumbItem",[t._v(t._s(t.upstreamId))]):a("BreadcrumbItem",[t._v("Add Upstream")])],1),a("Form",{staticStyle:{"margin-top":"20px"},attrs:{model:t.formItem,"label-width":300}},[a("FormItem",{attrs:{label:"name:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"Enter upstream name ..."},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}}),a("span",{staticClass:"field_desc"},[t._v("This is a hostname, which must be equal to the host of a Service.")])],1),a("FormItem",{attrs:{label:"algorithm:"}},[a("Select",{staticClass:"text_input",attrs:{filterable:""},model:{value:t.formItem.algorithm,callback:function(e){t.$set(t.formItem,"algorithm",e)},expression:"formItem.algorithm"}},t._l(t.algorithm,(function(e){return a("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1),a("span",{staticClass:"field_desc"},[t._v('Which load balancing algorithm to use. Default: "round-robin".')])],1),a("FormItem",{attrs:{label:"hash_on:"}},[a("RadioGroup",{model:{value:t.formItem.hash_on,callback:function(e){t.$set(t.formItem,"hash_on",e)},expression:"formItem.hash_on"}},[a("Radio",{attrs:{label:"none"}},[t._v("none")]),a("Radio",{attrs:{label:"consumer"}},[t._v("consumer")]),a("Radio",{attrs:{label:"ip"}},[t._v("ip")]),a("Radio",{attrs:{label:"header"}},[t._v("header")]),a("Radio",{attrs:{label:"cookie"}},[t._v("cookie")])],1),a("span",{staticClass:"field_desc"},[t._v("What to use as hashing input: none (resulting in a weighted-round-robin scheme with no hashing), consumer, ip, header, or cookie")])],1),a("FormItem",{attrs:{label:"hash_fallback:"}},[a("RadioGroup",{model:{value:t.formItem.hash_fallback,callback:function(e){t.$set(t.formItem,"hash_fallback",e)},expression:"formItem.hash_fallback"}},[a("Radio",{attrs:{label:"none"}},[t._v("none")]),a("Radio",{attrs:{label:"consumer"}},[t._v("consumer")]),a("Radio",{attrs:{label:"ip"}},[t._v("ip")]),a("Radio",{attrs:{label:"header"}},[t._v("header")]),a("Radio",{attrs:{label:"cookie"}},[t._v("cookie")])],1),a("span",{staticClass:"field_desc"},[t._v("What to use as hashing input if the primary hash_on does not return a hash (eg. header is missing, or no consumer identified). One of: none, consumer, ip, header, or cookie. Not available if hash_on is set to cookie. ")])],1),"header"===t.formItem.hash_on?a("FormItem",{attrs:{label:"hash_on_header:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"hash_on_header"},model:{value:t.formItem.hash_on_header,callback:function(e){t.$set(t.formItem,"hash_on_header",e)},expression:"formItem.hash_on_header"}}),a("span",{staticClass:"field_desc"},[t._v("The header name to take the value from as hash input. Only required when hash_on is set to header.")])],1):t._e(),"header"===t.formItem.hash_fallback?a("FormItem",{attrs:{label:"hash_fallback_header:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"hash_fallback_header"},model:{value:t.formItem.hash_fallback_header,callback:function(e){t.$set(t.formItem,"hash_fallback_header",e)},expression:"formItem.hash_fallback_header"}}),a("span",{staticClass:"field_desc"},[t._v("The header name to take the value from as hash input. Only required when hash_fallback is set to header.")])],1):t._e(),"cookie"===t.formItem.hash_on||"cookie"===t.formItem.hash_fallback?a("FormItem",{attrs:{label:"hash_on_cookie:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"hash_on_cookie"},model:{value:t.formItem.hash_on_cookie,callback:function(e){t.$set(t.formItem,"hash_on_cookie",e)},expression:"formItem.hash_on_cookie"}}),a("span",{staticClass:"field_desc"},[t._v("The cookie name to take the value from as hash input. Only required when hash_on or hash_fallback is set to cookie. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.")])],1):t._e(),"cookie"===t.formItem.hash_on||"cookie"===t.formItem.hash_fallback?a("FormItem",{attrs:{label:"hash_on_cookie_path:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"hash_on_cookie"},model:{value:t.formItem.hash_on_cookie_path,callback:function(e){t.$set(t.formItem,"hash_on_cookie_path",e)},expression:"formItem.hash_on_cookie_path"}}),a("span",{staticClass:"field_desc"},[t._v("The cookie path to set in the response headers. Only required when hash_on or hash_fallback is set to cookie.")])],1):t._e(),a("FormItem",{attrs:{label:"slots:"}},[a("InputNumber",{staticClass:"text_input",model:{value:t.formItem.slots,callback:function(e){t.$set(t.formItem,"slots",e)},expression:"formItem.slots"}}),a("span",{staticClass:"field_desc"},[t._v("The number of slots in the loadbalancer algorithm (10-65536). ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.https_verify_certificate:"}},[a("i-switch",{attrs:{size:"large"},model:{value:t.formItem.healthchecks.active.https_verify_certificate,callback:function(e){t.$set(t.formItem.healthchecks.active,"https_verify_certificate",e)},expression:"formItem.healthchecks.active.https_verify_certificate"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("true")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("false")])]),a("span",{staticClass:"field_desc"},[t._v("Whether to check the validity of the SSL certificate of the remote host when performing active health checks using HTTPS. ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.unhealthy.http_statuses:"}},[a("Input",{staticClass:"text_input_multiple",attrs:{placeholder:"http status"},model:{value:t.healthchecksActiveUnhealthyHttpStatuses,callback:function(e){t.healthchecksActiveUnhealthyHttpStatuses=e},expression:"healthchecksActiveUnhealthyHttpStatuses"}}),a("span",{staticClass:"field_desc"},[t._v("An array of HTTP statuses to consider a failure, indicating unhealthiness, when returned by a probe in active health checks.  ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.unhealthy.tcp_failures:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.unhealthy.tcp_failures,callback:function(e){t.$set(t.formItem.healthchecks.active.unhealthy,"tcp_failures",e)},expression:"formItem.healthchecks.active.unhealthy.tcp_failures"}}),a("span",{staticClass:"field_desc"},[t._v("Number of TCP failures in active probes to consider a target unhealthy ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.unhealthy.timeouts:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.unhealthy.timeouts,callback:function(e){t.$set(t.formItem.healthchecks.active.unhealthy,"timeouts",e)},expression:"formItem.healthchecks.active.unhealthy.timeouts"}}),a("span",{staticClass:"field_desc"},[t._v("Number of timeouts in active probes to consider a target unhealthy")])],1),a("FormItem",{attrs:{label:"healthchecks.active.unhealthy.http_failures:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.unhealthy.http_failures,callback:function(e){t.$set(t.formItem.healthchecks.active.unhealthy,"http_failures",e)},expression:"formItem.healthchecks.active.unhealthy.http_failures"}}),a("span",{staticClass:"field_desc"},[t._v("Number of HTTP failures in active probes (as defined by healthchecks.active.unhealthy.http_statuses) to consider a target unhealthy.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.unhealthy.interval:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.unhealthy.interval,callback:function(e){t.$set(t.formItem.healthchecks.active.unhealthy,"interval",e)},expression:"formItem.healthchecks.active.unhealthy.interval"}}),a("span",{staticClass:"field_desc"},[t._v("Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.http_path:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"http_path"},model:{value:t.formItem.healthchecks.active.http_path,callback:function(e){t.$set(t.formItem.healthchecks.active,"http_path",e)},expression:"formItem.healthchecks.active.http_path"}}),a("span",{staticClass:"field_desc"},[t._v("Path to use in GET HTTP request to run as a probe on active health checks.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.timeout:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.timeout,callback:function(e){t.$set(t.formItem.healthchecks.active,"timeout",e)},expression:"formItem.healthchecks.active.timeout"}}),a("span",{staticClass:"field_desc"},[t._v("Socket timeout for active health checks (in seconds).")])],1),a("FormItem",{attrs:{label:"healthchecks.active.healthy.http_statuses:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"http status"},model:{value:t.healthchecksActiveHealthyHttpStatuses,callback:function(e){t.healthchecksActiveHealthyHttpStatuses=e},expression:"healthchecksActiveHealthyHttpStatuses"}}),a("span",{staticClass:"field_desc"},[t._v("An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks. ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.healthy.interval:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.healthy.interval,callback:function(e){t.$set(t.formItem.healthchecks.active.healthy,"interval",e)},expression:"formItem.healthchecks.active.healthy.interval"}}),a("span",{staticClass:"field_desc"},[t._v("Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.healthy.successes:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.healthy.successes,callback:function(e){t.$set(t.formItem.healthchecks.active.healthy,"successes",e)},expression:"formItem.healthchecks.active.healthy.successes"}}),a("span",{staticClass:"field_desc"},[t._v("Number of successes in active probes (as defined by healthchecks.active.healthy.http_statuses) to consider a target healthy.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.https_sni:"}},[a("Input",{staticClass:"text_input",model:{value:t.formItem.healthchecks.active.https_sni,callback:function(e){t.$set(t.formItem.healthchecks.active,"https_sni",e)},expression:"formItem.healthchecks.active.https_sni"}}),a("span",{staticClass:"field_desc"},[t._v("The hostname to use as an SNI (Server Name Identification) when performing active health checks using HTTPS. This is particularly useful when Targets are configured using IPs, so that the target host’s certificate can be verified with the proper SNI.")])],1),a("FormItem",{attrs:{label:"healthchecks.active.concurrency:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.active.concurrency,callback:function(e){t.$set(t.formItem.healthchecks.active,"concurrency",e)},expression:"formItem.healthchecks.active.concurrency"}}),a("span",{staticClass:"field_desc"},[t._v("Number of targets to check concurrently in active health checks. ")])],1),a("FormItem",{attrs:{label:"healthchecks.active.type:"}},[a("RadioGroup",{model:{value:t.formItem.healthchecks.active.type,callback:function(e){t.$set(t.formItem.healthchecks.active,"type",e)},expression:"formItem.healthchecks.active.type"}},[a("Radio",{attrs:{label:"tcp"}},[t._v("tcp")]),a("Radio",{attrs:{label:"http"}},[t._v("http")]),a("Radio",{attrs:{label:"https"}},[t._v("https")])],1),a("span",{staticClass:"field_desc"},[t._v("Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection. ")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.unhealthy.http_failures:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.passive.unhealthy.http_failures,callback:function(e){t.$set(t.formItem.healthchecks.passive.unhealthy,"http_failures",e)},expression:"formItem.healthchecks.passive.unhealthy.http_failures"}}),a("span",{staticClass:"field_desc"},[t._v("Number of HTTP failures in proxied traffic (as defined by healthchecks.passive.unhealthy.http_statuses) to consider a target unhealthy, as observed by passive health checks.")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.unhealthy.http_statuses:"}},[a("Input",{staticClass:"text_input",attrs:{placeholder:"http status"},model:{value:t.healthchecksPassiveUnHealthyHttpStatuses,callback:function(e){t.healthchecksPassiveUnHealthyHttpStatuses=e},expression:"healthchecksPassiveUnHealthyHttpStatuses"}}),a("span",{staticClass:"field_desc"},[t._v("An array of HTTP statuses which represent unhealthiness when produced by proxied traffic, as observed by passive health checks.  ")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.unhealthy.tcp_failures:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.passive.unhealthy.tcp_failures,callback:function(e){t.$set(t.formItem.healthchecks.passive.unhealthy,"tcp_failures",e)},expression:"formItem.healthchecks.passive.unhealthy.tcp_failures"}}),a("span",{staticClass:"field_desc"},[t._v("Number of TCP failures in proxied traffic to consider a target unhealthy, as observed by passive health checks.")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.unhealthy.timeouts:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.passive.unhealthy.timeouts,callback:function(e){t.$set(t.formItem.healthchecks.passive.unhealthy,"timeouts",e)},expression:"formItem.healthchecks.passive.unhealthy.timeouts"}}),a("span",{staticClass:"field_desc"},[t._v("Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.type:"}},[a("RadioGroup",{model:{value:t.formItem.healthchecks.passive.type,callback:function(e){t.$set(t.formItem.healthchecks.passive,"type",e)},expression:"formItem.healthchecks.passive.type"}},[a("Radio",{attrs:{label:"tcp"}},[t._v("tcp")]),a("Radio",{attrs:{label:"http"}},[t._v("http")]),a("Radio",{attrs:{label:"https"}},[t._v("https")])],1),a("span",{staticClass:"field_desc"},[t._v("Whether to perform passive health checks interpreting HTTP/HTTPS statuses, or just check for TCP connection success. Possible values are tcp, http or https (in passive checks, http and https options are equivalent.). ")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.healthy.successes:"}},[a("InputNumber",{staticClass:"text_input",attrs:{min:0},model:{value:t.formItem.healthchecks.passive.healthy.successes,callback:function(e){t.$set(t.formItem.healthchecks.passive.healthy,"successes",e)},expression:"formItem.healthchecks.passive.healthy.successes"}}),a("span",{staticClass:"field_desc"},[t._v("Number of successes in proxied traffic (as defined by healthchecks.passive.healthy.http_statuses) to consider a target healthy, as observed by passive health checks. ")])],1),a("FormItem",{attrs:{label:"healthchecks.passive.healthy.http_statuses:"}},[a("Input",{staticClass:"text_input_multiple",attrs:{placeholder:"http status"},model:{value:t.healthchecksPassiveHealthyHttpStatuses,callback:function(e){t.healthchecksPassiveHealthyHttpStatuses=e},expression:"healthchecksPassiveHealthyHttpStatuses"}}),a("span",{staticClass:"field_desc"},[t._v("An array of HTTP statuses which represent healthiness when produced by proxied traffic, as observed by passive health checks. ")])],1),a("FormItem",{attrs:{label:"healthchecks.threshold:"}},[a("InputNumber",{staticClass:"text_input",attrs:{placeholder:"threshold",min:0},model:{value:t.formItem.healthchecks.threshold,callback:function(e){t.$set(t.formItem.healthchecks,"threshold",e)},expression:"formItem.healthchecks.threshold"}}),a("span",{staticClass:"field_desc"},[t._v("The minimum percentage of the upstream’s targets’ weight that must be available for the whole upstream to be considered healthy. Default: 0. ")])],1),a("FormItem",{attrs:{label:"tags:"}},[a("Input",{staticClass:"text_input_multiple",attrs:{placeholder:"tags"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),a("span",{staticClass:"field_desc"},[t._v("An optional set of strings associated with the Upstream for grouping and filtering.")])],1),a("FormItem",{attrs:{label:"host_header:"}},[a("Input",{staticClass:"text_input",model:{value:t.formItem.host_header,callback:function(e){t.$set(t.formItem,"host_header",e)},expression:"formItem.host_header"}}),a("span",{staticClass:"field_desc"},[t._v("The hostname to be used as Host header when proxying requests through Kong.. ")])],1),a("FormItem",{attrs:{label:"client_certificate:"}},[a("Select",{staticClass:"text_input_multiple",attrs:{filterable:"",clearable:""},model:{value:t.client_certificate_id,callback:function(e){t.client_certificate_id=e},expression:"client_certificate_id"}},t._l(t.certificates,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.id+" "+e.snis))])})),1),a("span",{staticClass:"field_desc"},[t._v("If this plugin no need assign to a service,leave it blank.")])],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.saveService}},[t._v("Save")])],1)],1),t.upstreamId?a("div",[a("Row",[t._v("tags\n            "),a("Col",{attrs:{span:"12"}},[a("h3",[t._v("Targets:")])]),a("Col",{staticStyle:{"text-align":"right",position:"absolute",top:"30%",right:"0px"},attrs:{span:"12"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:t.addTarget}},[t._v("Add Target")])],1)],1),a("TargetTable",{ref:"targetTable",staticStyle:{"margin-top":"10px"},attrs:{upstreamId:t.upstreamId}})],1):t._e()],1)},i=[],r=(a("7f7f"),a("28a5"),a("4c5a")),h={name:"AddUpstream",data:function(){return{formItem:{name:"",algorithm:"",hash_on:"none",hash_fallback:"none",hash_on_header:"",hash_fallback_header:"",hash_on_cookie:"",hash_on_cookie_path:"/",slots:1e4,healthchecks:{active:{https_verify_certificate:!0,unhealthy:{http_statuses:[429,404,500,501,502,503,504,505],tcp_failures:0,timeouts:0,http_failures:0,interval:0},http_path:"/",timeout:1,healthy:{http_statuses:[200,302],interval:0,successes:0},https_sni:"",concurrency:10,type:"http"},passive:{unhealthy:{http_failures:0,http_statuses:[429,500,503],tcp_failures:0,timeouts:0},type:"http",healthy:{successes:0,http_statuses:[200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308]}},threshold:0},tags:[],host_header:null,client_certificate:null},algorithm:["consistent-hashing","least-connections","round-robin"],client_certificate_id:null,upstreamNames:[],serviceId:"",edit:!1,upstreamId:"",certificates:[]}},computed:{healthchecksActiveUnhealthyHttpStatuses:{get:function(){return this.formItem.healthchecks.active.unhealthy.http_statuses.join(",")},set:function(t){this.formItem.healthchecks.active.unhealthy.http_statuses=t?t.split(",").map((function(t){return parseInt(t)})).filter((function(t){return!isNaN(t)})):[]}},healthchecksActiveHealthyHttpStatuses:{get:function(){return this.formItem.healthchecks.active.healthy.http_statuses.join(",")},set:function(t){this.formItem.healthchecks.active.healthy.http_statuses=t?t.split(",").map((function(t){return parseInt(t)})).filter((function(t){return!isNaN(t)})):[]}},healthchecksPassiveUnHealthyHttpStatuses:{get:function(){return this.formItem.healthchecks.passive.unhealthy.http_statuses.join(",")},set:function(t){this.formItem.healthchecks.passive.unhealthy.http_statuses=t?t.split(",").map((function(t){return parseInt(t)})).filter((function(t){return!isNaN(t)})):[]}},healthchecksPassiveHealthyHttpStatuses:{get:function(){return this.formItem.healthchecks.passive.healthy.http_statuses.join(",")},set:function(t){this.formItem.healthchecks.passive.healthy.http_statuses=t?t.split(",").map((function(t){return parseInt(t)})).filter((function(t){return!isNaN(t)})):[]}},tags:{get:function(){return this.formItem.tags.join(",")},set:function(t){this.formItem.tags=t?t.split(","):[]}}},mounted:function(){this.upstreamId=this.$route.params.id,this.formItem.name=this.$route.params.name,this.edit=null!=this.upstreamId,this.edit&&this.loadUpstream(),this.loadCertificates()},methods:{filterMethod:function(t,e){return-1!==e.toUpperCase().indexOf(t.toUpperCase())},saveService:function(){var t=this;""===this.formItem.name&&(this.formItem.name=null),""===this.formItem.algorithm&&(this.formItem.algorithm=null),""===this.formItem.hash_on_header&&(this.formItem.hash_on_header=null),""===this.formItem.hash_fallback_header&&(this.formItem.hash_fallback_header=null),""===this.formItem.hash_on_cookie&&(this.formItem.hash_on_cookie=null),""===this.formItem.healthchecks.active.https_sni&&(this.formItem.healthchecks.active.https_sni=null),""===this.formItem.host_header&&(this.formItem.host_header=null),this.client_certificate_id?this.formItem.client_certificate={id:this.client_certificate_id}:this.formItem.client_certificate=null,this.edit?this._patch("/upstreams/"+this.upstreamId,this.formItem,(function(){t.$router.go(-1)})):this._post("/upstreams/",this.formItem,(function(){t.$router.go(-1)}))},loadUpstream:function(){var t=this;this._get("/upstreams/"+this.upstreamId,(function(e){t.formItem=e.data,t.formItem.client_certificate&&(t.client_certificate_id=t.formItem.client_certificate.id),t.$refs.targetTable.loadTargets()}))},addTarget:function(){this.$refs.targetTable.showAddTargetModal()},loadCertificates:function(){var t=this,e="/certificates";this.loading=!0,this._get(e,(function(e){t.certificates=e.data.data}))}},components:{TargetTable:r["a"]}},c=h,l=(a("9015"),a("2877")),n=Object(l["a"])(c,s,i,!1,null,"79f74b6c",null);e["default"]=n.exports},"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,h="name";h in i||a("9e1e")&&s(i,h,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},9015:function(t,e,a){"use strict";a("9d06")},"9d06":function(t,e,a){},aae3:function(t,e,a){var s=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},e600:function(t,e,a){"use strict";a("16b3")}}]);
//# sourceMappingURL=chunk-027ed6d5.8da67225.js.map