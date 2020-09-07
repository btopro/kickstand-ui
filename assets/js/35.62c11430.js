(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{412:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ember"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ember"}},[t._v("#")]),t._v(" Ember")]),t._v(" "),e("h2",{attrs:{id:"adding-styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-styles"}},[t._v("#")]),t._v(" Adding Styles")]),t._v(" "),e("p",[t._v("Adding the Kickstand UI styles to your Ember app is fairly straight forward thanks to the "),e("code",[t._v("ember-cli-sass")]),t._v(" package. If you haven't already configured your project for SASS run the following command to install the required packages:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ember "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ember-cli-sass\n")])])]),e("p",[t._v("Change the file name "),e("code",[t._v("app/styles/app.css")]),t._v(" to "),e("code",[t._v("app/styles/app.scss")]),t._v(" and import the Kickstand UI styles into your "),e("code",[t._v("app.scss")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kickstand-ui/src/scss/styles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),e("p",[e("em",[t._v("Alternately")]),t._v(", you can specify the path to the source in the include paths in your "),e("code",[t._v("ember-cli-build.js")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmberApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sassOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        extension"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scss'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        includePaths"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/kickstand-ui/src/scss'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"adding-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-components"}},[t._v("#")]),t._v(" Adding Components")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("This is an adaptation from the "),e("a",{attrs:{href:"https://stenciljs.com/docs/ember",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stencil documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("p",[t._v("Working with Kickstand UI in Ember is really easy thanks to the "),e("code",[t._v("ember-cli-stencil")]),t._v(" addon. It handles:")]),t._v(" "),e("ul",[e("li",[t._v("Importing the required files into your "),e("code",[t._v("vendor.js")])]),t._v(" "),e("li",[t._v("Copying the component definitions into your "),e("code",[t._v("assets")]),t._v(" directory")]),t._v(" "),e("li",[t._v("Optionally generating a wrapper component for improved compatibility with older Ember versions")])]),t._v(" "),e("p",[t._v("Start off by installing the Ember addon")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ember "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ember-cli-stencil\n")])])]),e("p",[t._v("Now, when you build your application, Stencil collections in your dependencies will automatically be discovered and pulled into your application. You can just start using the custom elements in your "),e("code",[t._v("hbs")]),t._v(" files with no further work needed. For more information, check out the "),e("a",{attrs:{href:"https://github.com/alexlafroscia/ember-cli-stencil",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ember-cli-stencil")]),t._v(" documentation"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);