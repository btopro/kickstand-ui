(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(t,e,i){"use strict";i.r(e),i.d(e,"ks_tabs",(function(){return r}));var a=i(5),s=i(335),r=function(){function t(t){Object(a.i)(this,t),this.$selectedTab=null,this.tabId="tabs_"+o++,this.position="top",this.align="start",this.selectedIndex=0}return t.prototype.connectedCallback=function(){this.initElements(),this.initTabs()},t.prototype.componentDidLoad=function(){this.$tabs=Array.from(this.$el.querySelectorAll('[role="tab"]'))},t.prototype.initElements=function(){this.$tabPanels=Array.from(this.$el.querySelectorAll("ks-tab"))},t.prototype.initTabs=function(){var t=this;0!==this.$tabPanels.length&&this.$tabPanels.forEach((function(e,i){e.hidden=i>0,e.id=e.id||t.tabId+"_tab_"+i,e.setAttribute("aria-labelledby",(e.id||t.tabId+"_tab_"+i)+"_button")}))},t.prototype.clickHandler=function(t,e){var i=t.target;this.selectedIndex=e,this.$tabList.querySelectorAll('[aria-selected="true"]').forEach((function(t){return t.setAttribute("aria-selected","false")})),i.setAttribute("aria-selected","true"),this.$tabPanels.forEach((function(t){return t.setAttribute("hidden","true")})),this.$tabPanels[e].removeAttribute("hidden")},t.prototype.keydownHandler=function(t){t.keyCode!==s.c.RIGHT_ARROW&&t.keyCode!==s.c.LEFT_ARROW||(this.deselectTab(),t.keyCode===s.c.RIGHT_ARROW?this.goToNextTab():this.goToPreviousTab(),this.selectTab())},t.prototype.goToNextTab=function(){this.selectedIndex++,this.selectedIndex>=this.$tabs.length&&(this.selectedIndex=0)},t.prototype.goToPreviousTab=function(){this.selectedIndex--,this.selectedIndex<0&&(this.selectedIndex=this.$tabs.length-1)},t.prototype.deselectTab=function(){this.$tabs[this.selectedIndex].setAttribute("tabindex","-1"),this.$tabs[this.selectedIndex].setAttribute("aria-selected","false"),this.$tabPanels[this.selectedIndex].setAttribute("hidden","true")},t.prototype.selectTab=function(){this.$tabs[this.selectedIndex].setAttribute("tabindex","0"),this.$tabs[this.selectedIndex].setAttribute("aria-selected","true"),this.$tabPanels[this.selectedIndex].removeAttribute("hidden"),this.$tabs[this.selectedIndex].focus()},t.prototype.render=function(){var t=this;return Object(a.g)(a.a,{class:"ks-tabs align-"+this.position},Object(a.g)("div",{role:"tablist",class:"tab-list justify-"+this.align,"aria-label":this.label,ref:function(e){return t.$tabList=e},onKeyDown:function(e){return t.keydownHandler(e)}},this.$tabPanels.map((function(e,i){return Object(a.g)("button",{role:"tab",class:"tab-item","aria-selected":""+(0===i),"aria-controls":e.id||t.tabId+"_tab_"+i,id:(e.id||t.tabId+"_"+i)+"_tab_button",tabIndex:0===i?0:-1,onClick:function(e){return t.clickHandler(e,i)}},e.tabText)}))),Object(a.g)("slot",null))},Object.defineProperty(t.prototype,"$el",{get:function(){return Object(a.f)(this)},enumerable:!1,configurable:!0}),t}(),o=0;r.style="@-webkit-keyframes fade-in{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:.6}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:.6}}@keyframes fade-out{0%{opacity:1}to{opacity:.6}}.ks-tabs{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12)}.ks-tabs .tab-list{display:-ms-flexbox;display:flex;color:#000;background-color:#f7f8fa;padding:0;margin:0}.ks-tabs .tab-list.justify-justified .tab-item{width:100%;text-align:center}.ks-tabs .tab-list .tab-item{text-decoration:none;white-space:nowrap;color:#2c5374;background-color:transparent;vertical-align:inherit;border:0;padding:.75rem 1rem}.ks-tabs .tab-list .tab-item :hover{text-decoration:none}.ks-tabs .tab-list .tab-item :focus{outline:.0625rem dashed #37444f;outline-offset:.0625rem}.ks-tabs .tab-list .tab-item[aria-selected=true]{border:.0625rem solid #c5d1da;color:#000;background-color:#fff;color:#2c5374;-webkit-box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);margin:-.0625rem}.ks-tabs .tab-panel{width:100%;white-space:normal;border:.0625rem solid #c5d1da;color:#000;background-color:#fff;padding:1rem}.ks-tabs.align-top{-ms-flex-direction:column;flex-direction:column}.ks-tabs.align-top .tab-list{border:.0625rem solid #c5d1da}.justify-justified .ks-tabs.align-top .tab-list{height:100%}.ks-tabs.align-top .tab-list .tab-item[aria-selected=true]{border-bottom:.0625rem #c5d1da}.ks-tabs.align-top .tab-panel{border-top:.0625rem #c5d1da}.ks-tabs.align-bottom{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ks-tabs.align-bottom .tab-list{border:.0625rem solid #c5d1da}.ks-tabs.align-bottom .tab-list .tab-item[aria-selected=true]{position:relative;border-top:.0625rem #c5d1da}.ks-tabs.align-bottom .tab-panel{border-bottom:.0625rem #c5d1da}.ks-tabs.align-left{-ms-flex-direction:row;flex-direction:row}.ks-tabs.align-left .tab-list{-ms-flex-direction:column;flex-direction:column;border:.0625rem solid #c5d1da}.ks-tabs.align-left .tab-list.justify-justified .tab-item{height:100%}.ks-tabs.align-left .tab-list .tab-item{-ms-flex-item-align:end;align-self:flex-end;width:100%;margin-right:-.125rem;width:101%}.ks-tabs.align-left .tab-list .tab-item[aria-selected=true]{-webkit-box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);border-right:.0625rem #c5d1da}.ks-tabs.align-left .tab-panel{border-left:.0625rem #c5d1da}.ks-tabs.align-right{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ks-tabs.align-right .tab-list{-ms-flex-direction:column;flex-direction:column;border:.0625rem solid #c5d1da}.ks-tabs.align-right .tab-list.justify-justified .tab-item{height:100%}.ks-tabs.align-right .tab-list .tab-item{-ms-flex-item-align:start;align-self:flex-start;width:100%;width:101%}.ks-tabs.align-right .tab-list .tab-item[aria-selected=true]{-webkit-box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);box-shadow:0 3px 5px rgba(0,0,0,.15),0 2px 4px rgba(0,0,0,.12);border-left:.0625rem #c5d1da}.ks-tabs.align-right .tab-panel{border-right:.0625rem #c5d1da}"},335:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s}));var a='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',s={TAB:9,ENTER:13,SHIFT:16,CTRL:17,ESC:27,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40};function r(t,e){var i;!function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];i&&clearTimeout(i),i=setTimeout((function(){t.apply(void 0,a)}),e)}()}}}]);