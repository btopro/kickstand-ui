(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{314:function(e,i,t){"use strict";t.r(i),t.d(i,"ks_carousel",(function(){return o}));var s=t(5),o=function(){function e(e){Object(s.i)(this,e),this.timer=6e3,this.autoplay=!1,this.hideIndicators=!1,this.hideControls=!1,this.thumbnails=!1,this.slideIndex=0,this.$indicators=[],this.carouselId="carousel_"+r++}return e.prototype.connectedCallback=function(){this.initSlides()},e.prototype.componentDidLoad=function(){this.goToSlide()},e.prototype.initSlides=function(){var e=this;this.$slides=Array.from(this.$el.querySelectorAll("ks-carousel-slide")),this.$slides.forEach((function(i,t){i.id=i.id||e.carouselId+"_slide_"+t,i.setAttribute("aria-labelledby",i.id+"_indicator")}))},e.prototype.prevSlide=function(){this.resetSlideTimer(),this.slideIndex--,this.slideIndex<0&&(this.slideIndex=this.$slides.length-1),this.goToSlide()},e.prototype.nextSlide=function(){this.resetSlideTimer(),this.slideIndex++,this.slideIndex>=this.$slides.length&&(this.slideIndex=0),this.goToSlide()},e.prototype.selectSlide=function(e){this.slideIndex=e,this.resetSlideTimer(),this.goToSlide()},e.prototype.goToSlide=function(){var e=this;this.updateSlide(),this.updateIndicator(),this.autoplay&&(this.slideTimer=setTimeout((function(){return e.nextSlide()}),this.timer))},e.prototype.resetSlideTimer=function(){clearTimeout(this.slideTimer)},e.prototype.updateSlide=function(){this.$slides.forEach((function(e){return e.setAttribute("aria-hidden","true")})),this.$slides[this.slideIndex].setAttribute("aria-hidden","false")},e.prototype.updateIndicator=function(){this.hideIndicators||(this.$indicators.forEach((function(e){return e.setAttribute("aria-selected","false")})),this.$indicators[this.slideIndex].setAttribute("aria-selected","true"))},e.prototype.render=function(){var e=this,i={indicators:!0,"sr-only":this.hideIndicators},t=Object(s.g)("div",{class:i,role:"tablist"},this.$slides.map((function(i,t){return Object(s.g)("button",{id:i.id+"_indicator",class:"indicator",role:"tab","aria-selected":"false","aria-controls":i.id,ref:function(i){return e.$indicators.push(i)},onClick:function(){return e.selectSlide(t)}},Object(s.g)("span",{class:"sr-only"},"Got to slide ",i?t+1:""))}))),o=[!this.hideControls&&Object(s.g)("ks-button",{display:"link",color:"light",class:"control prev",onClick:this.prevSlide.bind(this)},Object(s.g)("ks-icon",{class:"control-icon text-xl",icon:"chevron",rotate:"90"}),Object(s.g)("span",{class:"sr-only"},"previous slide")),!this.thumbnails&&t,!this.hideControls&&Object(s.g)("ks-button",{display:"link",color:"light",class:"control next",onClick:this.nextSlide.bind(this)},Object(s.g)("ks-icon",{class:"control-icon text-xl",icon:"chevron",rotate:"-90"}),Object(s.g)("span",{class:"sr-only"},"next slide"))],r=Object(s.g)("div",{class:"thumbnails",role:"tablist"},this.$slides.map((function(i,t){return Object(s.g)("button",{id:i.id+"_indicator",class:"thumbnail",onClick:function(){return e.selectSlide(t)},role:"tab","aria-selected":"false","aria-controls":i.id,ref:function(i){return e.$indicators.push(i)}},Object(s.g)("span",{class:"sr-only"},"Got to slide ",i?t+1:""),Object(s.g)("ks-img",{lazy:!0,src:i.src,alt:"slide "+(i?t+1:"")+" image"}))})));return Object(s.g)(s.a,{class:"ks-carousel"},Object(s.g)("div",{class:"slide-wrapper"},Object(s.g)("div",{class:"slides"},Object(s.g)("slot",null)),o),this.thumbnails&&r)},Object.defineProperty(e.prototype,"$el",{get:function(){return Object(s.f)(this)},enumerable:!1,configurable:!0}),e}(),r=0;o.style="@-webkit-keyframes fade-in{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:.6}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:.6}}@keyframes fade-out{0%{opacity:1}to{opacity:.6}}.ks-carousel{display:block}.ks-carousel,.ks-carousel .slide-wrapper{position:relative}.ks-carousel .slide-wrapper .slides{position:relative;width:100%;overflow:hidden}.ks-carousel .slide-wrapper .slides .slide{position:relative;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;visibility:hidden;opacity:0;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.ks-carousel .slide-wrapper .slides .slide[aria-hidden=false]{visibility:visible;display:block;opacity:1;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.ks-carousel .slide-wrapper .slides .slide.pointer:focus-within{outline:.0625rem dashed #37444f;outline-offset:.0625rem}.ks-carousel .slide-wrapper .slides .slide .slide-image{width:100%}.ks-carousel .slide-wrapper .slides .slide .slide-image img{display:block;width:100%}.ks-carousel .slide-wrapper .slides .slide .content{position:absolute;top:0;left:0;right:0;bottom:0;color:#fff;padding-left:3.75rem;padding-right:3.75rem;text-shadow:2px 2px 4px #37444f;margin-top:1.5rem;margin-bottom:1.5rem}.ks-carousel .slide-wrapper .slides .slide .content>*{color:#fff}.ks-carousel .slide-wrapper .control{position:absolute;top:0;bottom:0;width:10%;color:#fff;background-color:transparent;border:none;display:-ms-flexbox;display:flex;outline:0;font-size:2rem}.ks-carousel .slide-wrapper .control:focus,.ks-carousel .slide-wrapper .control:hover{outline:0}.ks-carousel .slide-wrapper .control.prev{left:0}.ks-carousel .slide-wrapper .control.next{right:0}.ks-carousel .slide-wrapper .control .ks-button{outline:0;width:100%}.ks-carousel .slide-wrapper .control svg{-webkit-filter:drop-shadow(0 0 .25rem #37444f);filter:drop-shadow(0 0 .25rem #37444f)}.ks-carousel .slide-wrapper .controls{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;top:0;left:0;right:0;bottom:0;z-index:10}.ks-carousel .slide-wrapper .indicators{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:0;right:0;left:0;margin-right:10%;margin-left:10%;margin-bottom:2rem;z-index:50}.ks-carousel .slide-wrapper .indicators .indicator{height:1rem;width:1.25rem;background-color:transparent;-webkit-filter:drop-shadow(0 0 .25rem #37444f);filter:drop-shadow(0 0 .25rem #37444f);border:.0625rem #c5d1da;border-bottom:.125rem solid rgba(247,248,250,.7);margin-left:.5rem;margin-right:.5rem;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.ks-carousel .slide-wrapper .indicators .indicator:focus,.ks-carousel .slide-wrapper .indicators .indicator:hover{outline:0;border-bottom:.125rem solid rgba(247,248,250,.9)}.ks-carousel .slide-wrapper .indicators .indicator[aria-selected=true]{border-bottom:.125rem solid #dee5ea;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.ks-carousel .thumbnails{display:-ms-flexbox;display:flex}.ks-carousel .thumbnails .thumbnail{-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;opacity:.5;border:.0625rem #c5d1da;padding:0;margin:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.ks-carousel .thumbnails .thumbnail:hover{outline:0;opacity:.8;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.ks-carousel .thumbnails .thumbnail:focus{-webkit-box-shadow:0 0 0 3px rgba(0,0,0,.5);box-shadow:0 0 0 3px rgba(0,0,0,.5)}.ks-carousel .thumbnails .thumbnail[aria-selected=true]{opacity:.95;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.ks-carousel .thumbnails .indicator+.indicator{padding-left:.25rem}"}}]);