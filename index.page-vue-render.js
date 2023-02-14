
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--ug"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/userGuide/index.html"}},[_v("USER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_c('div',{attrs:{"tags":"environment--ug"}},[_m(0),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_c('span',{staticClass:"large"},[_c('strong',[_v("Generate "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("as opposed to "),_c('em',[_v("one-size-fits-all")]),_v(" static content")]},proxy:true}])},[_c('em',[_v("more dynamic")])]),_v(" websites from Markdown text.")],1)]),_v("\nOptimized for creating text-heavy websites "),_c('span',{staticClass:"dimmed"},[_v("e.g., eLearning websites, online instruction manuals, project documentation etc.")])])]),_v(" "),_m(1),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_c('p',[_v("MarkBind source files can be as simple as basic Markdown, but you can also "),_m(3),_v(" ("),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("GitHub Flavored Markdown")]},proxy:true}])},[_v("GFMD")]),_v(", Bootstrap, Nunjucks, etc. as well as MarkBind's own custom syntax) to create more dynamic content that you cannot normally get from a typical markdown-to-html site generator.")],1),_v(" "),_c('p',[_v("Here are some simple text-formatting examples:")]),_v(" "),_m(4),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',{staticClass:"dimmed"},[_v("More examples of generating static content")])])]},proxy:true}])},[_v(" "),_c('p',[_v("An example that uses GFMD syntax for task lists:")]),_v(" "),_c('div',{staticStyle:{"overflow-x":"auto"}},[_c('table',[_c('tr',[_c('td',{staticStyle:{"padding-top":"15px"}},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs markdown"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-strong"}},[_v("**Things to do:**")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" [x] Finish my changes\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" [ ] Push my commits to GitHub\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-bullet"}},[_v("-")]),_v(" [ ] Open a pull request\n")]),_c('span',[_v("\n")])])]),_c('p')]),_v(" "),_c('td',[_v(" → ")]),_v(" "),_c('td',[_c('p'),_v(" "),_c('box',[_c('p',[_c('strong',[_v("Things to do:")])]),_v(" "),_c('ul',{staticClass:"contains-task-list"},[_c('li',{staticClass:"task-list-item enabled"},[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"checked":"","type":"checkbox"}}),_v(" Finish my changes")]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" Push my commits to GitHub")]),_v(" "),_c('li',{staticClass:"task-list-item enabled"},[_c('input',{staticClass:"task-list-item-checkbox",attrs:{"type":"checkbox"}}),_v(" Open a pull request")])])])],1)])])]),_v(" "),_c('p',[_v("An example that uses KaTeX to generate math equations:")]),_v(" "),_c('div',{staticStyle:{"overflow-x":"auto"}},[_c('table',[_c('tr',[_c('td',{staticStyle:{"padding-top":"20px"}},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs markdown"}},[_c('span',[_v("Euler's Identity \\(e^{i\\pi}+1=0\\) is a beautiful formula.\n")])])]),_c('p')]),_v(" "),_c('td',[_v(" → ")]),_v(" "),_c('td',[_c('p'),_v(" "),_c('box',[_c('p',[_v("Euler's Identity "),_c('eq',{pre:true},[_c('span',{pre:true,attrs:{"class":"katex"}},[_c('span',{pre:true,attrs:{"class":"katex-mathml"}},[_c('math',{pre:true,attrs:{"xmlns":"http://www.w3.org/1998/Math/MathML"}},[_c('semantics',{pre:true},[_c('mrow',{pre:true},[_c('msup',{pre:true},[_c('mi',{pre:true},[_v("e")]),_c('mrow',{pre:true},[_c('mi',{pre:true},[_v("i")]),_c('mi',{pre:true},[_v("π")])],1)],1),_c('mo',{pre:true},[_v("+")]),_c('mn',{pre:true},[_v("1")]),_c('mo',{pre:true},[_v("=")]),_c('mn',{pre:true},[_v("0")])],1),_c('annotation',{pre:true,attrs:{"encoding":"application/x-tex","v-pre":""}},[_v("e^{i\\pi}+1=0")])],1)],1)],1),_c('span',{pre:true,attrs:{"class":"katex-html","aria-hidden":"true"}},[_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.908em;vertical-align:-0.0833em;"}}),_c('span',{pre:true,attrs:{"class":"mord"}},[_c('span',{pre:true,attrs:{"class":"mord mathnormal"}},[_v("e")]),_c('span',{pre:true,attrs:{"class":"msupsub"}},[_c('span',{pre:true,attrs:{"class":"vlist-t"}},[_c('span',{pre:true,attrs:{"class":"vlist-r"}},[_c('span',{pre:true,attrs:{"class":"vlist","style":"height:0.8247em;"}},[_c('span',{pre:true,attrs:{"style":"top:-3.063em;margin-right:0.05em;"}},[_c('span',{pre:true,attrs:{"class":"pstrut","style":"height:2.7em;"}}),_c('span',{pre:true,attrs:{"class":"sizing reset-size6 size3 mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mtight"}},[_c('span',{pre:true,attrs:{"class":"mord mathnormal mtight","style":"margin-right:0.03588em;"}},[_v("iπ")])])])])])])])])]),_c('span',{pre:true,attrs:{"class":"mspace","style":"margin-right:0.2222em;"}}),_c('span',{pre:true,attrs:{"class":"mbin"}},[_v("+")]),_c('span',{pre:true,attrs:{"class":"mspace","style":"margin-right:0.2222em;"}})]),_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.6444em;"}}),_c('span',{pre:true,attrs:{"class":"mord"}},[_v("1")]),_c('span',{pre:true,attrs:{"class":"mspace","style":"margin-right:0.2778em;"}}),_c('span',{pre:true,attrs:{"class":"mrel"}},[_v("=")]),_c('span',{pre:true,attrs:{"class":"mspace","style":"margin-right:0.2778em;"}})]),_c('span',{pre:true,attrs:{"class":"base"}},[_c('span',{pre:true,attrs:{"class":"strut","style":"height:0.6444em;"}}),_c('span',{pre:true,attrs:{"class":"mord"}},[_v("0")])])])])]),_v(" is a beautiful formula.")],1)])],1)])])])]),_v(" "),_c('p'),_v(" "),_c('p',[_v("The example paragraph below has the following dynamic elements: a tooltip, a popover, and a modal. Hover/click on the underlined words to see each.")]),_v(" "),_c('box',[_c('p',[_v("In "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Computer Science")]},proxy:true}])},[_v("CS")]),_v(", a binary tree is a "),_c('trigger',{attrs:{"for":"pop:index-tree"}},[_v("tree data structure")]),_v(" in which each node has at most two children, which are referred to as the "),_c('em',[_v("left child")]),_v(" and the "),_c('em',[_v("right child")]),_v(". "),_c('trigger',{attrs:{"trigger":"click","for":"modal:index-primitive"}},[_v("Primitive data types")]),_v(" on the other hand ...")],1),_v(" "),_c('popover',{attrs:{"id":"pop:index-tree","placement":"top"},scopedSlots:_u([{key:"header",fn:function(){return [_v("An example tree data structure")]},proxy:true},{key:"content",fn:function(){return [_c('div',[_c('p',[_c('a',{attrs:{"href":"https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg","alt":""}})]),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('sub',[_v("[source:wikipedia]")])])])])]},proxy:true}])}),_v(" "),_c('modal',{attrs:{"large":"","id":"modal:index-primitive"},scopedSlots:_u([{key:"header",fn:function(){return [_v("Some examples of primitive data types")]},proxy:true}])},[_v(" "),_c('div',[_c('ul',[_c('li',[_v("Boolean, true or false.")]),_v(" "),_c('li',[_v("Character")]),_v(" "),_c('li',[_v("Floating-point, single-precision real number values.")]),_v(" "),_c('li',[_v("Double, a wider floating-point size.")]),_v(" "),_c('li',[_v("Integer, integral or fixed-precision values.")]),_v(" "),_c('li',[_v("String, a sequence of characters.")]),_v(" "),_c('li',[_v("Reference (also called a pointer or handle), a small value referring to another object's address in memory, possibly a much larger one.")]),_v(" "),_c('li',[_v("Enumerated type, a small set of uniquely named values.")])]),_v(" "),_c('p',[_c('span',{staticClass:"dimmed"},[_c('sub',[_v("[source:wikipedia]")])])])])])],1),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',{staticClass:"dimmed"},[_v("More examples of generating dynamic content")])])]},proxy:true}])},[_v("\nIn the example below, there is an expandable panel that can reveal more content.\n"),_c('box',[_c('p',[_v("A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. Primitive data types on the other hand ...")]),_v(" "),_c('panel',{scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',{staticClass:"dimmed"},[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}}),_v(" Some example primitive data types")])])]},proxy:true}])},[_v(" "),_c('div',[_c('ul',[_c('li',[_v("Boolean, true or false.")]),_v(" "),_c('li',[_v("Character")]),_v(" "),_c('li',[_v("Floating-point, single-precision real number values.")]),_v(" "),_c('li',[_v("Double, a wider floating-point size.")]),_v(" "),_c('li',[_v("Integer, integral or fixed-precision values.")]),_v(" "),_c('li',[_v("String, a sequence of characters.")]),_v(" "),_c('li',[_v("Reference (also called a pointer or handle), a small value referring to another object's address in memory, possibly a much larger one.")]),_v(" "),_c('li',[_v("Enumerated type, a small set of uniquely named values.")])]),_v(" "),_c('p',[_c('span',{staticClass:"dimmed"},[_c('sub',[_v("[source:wikipedia]")])])])])])],1),_v(" "),_c('p',[_v("In the example below, there are expandable panels that are nested within each other.")]),_v(" "),_c('box',[_c('panel',{attrs:{"no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',{staticClass:"far fa-list-alt",attrs:{"aria-hidden":"true"}}),_v(" Exercises")])]},proxy:true}])},[_v(" "),_c('panel',{attrs:{"type":"danger","no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("❗️ [Compulsory] Ex 1")])]},proxy:true}])},[_v(" "),_c('p',[_v("Details of exercise 1")])]),_v(" "),_c('panel',{attrs:{"type":"warning","no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("[Recommended] Ex 2")])]},proxy:true}])},[_v(" "),_c('p',[_v("Details of exercise 2")])]),_v(" "),_c('panel',{attrs:{"type":"success","no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("[Optional] Ex 23")])]},proxy:true}])},[_v(" "),_c('p',[_v("Details of exercise 3")])])],1)],1)],1),_v(" "),_c('p'),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('p',[_v("Here are some examples:")]),_v(" "),_m(7),_v(" "),_c('hr'),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('box',[_c('p',[_v("In CS, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the "),_c('em',[_v("left child")]),_v(" and the "),_c('em',[_v("right child")]),_v(". "),_c('trigger',{attrs:{"trigger":"click","for":"modal:index-primitive2"}},[_v("Primitive data types")]),_v(" on the other hand ...")],1),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('span',{staticClass:"dimmed"},[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}}),_v(" Some example primitive data types")])])]},proxy:true}])},[_v(" "),_c('div',[_c('ul',[_c('li',[_v("Boolean, true or false.")]),_v(" "),_c('li',[_v("Character")]),_v(" "),_c('li',[_v("Floating-point, single-precision real number values.")]),_v(" "),_c('li',[_v("Double, a wider floating-point size.")]),_v(" "),_c('li',[_v("Integer, integral or fixed-precision values.")]),_v(" "),_c('li',[_v("String, a sequence of characters.")]),_v(" "),_c('li',[_v("Reference (also called a pointer or handle), a small value referring to another object's address in memory, possibly a much larger one.")]),_v(" "),_c('li',[_v("Enumerated type, a small set of uniquely named values.")])]),_v(" "),_c('p',[_c('span',{staticClass:"dimmed"},[_c('sub',[_v("[source:wikipedia]")])])])])]),_v(" "),_c('modal',{attrs:{"large":"","id":"modal:index-primitive2"},scopedSlots:_u([{key:"header",fn:function(){return [_v("Some examples of primitive data types")]},proxy:true}])},[_v(" "),_c('div',[_c('ul',[_c('li',[_v("Boolean, true or false.")]),_v(" "),_c('li',[_v("Character")]),_v(" "),_c('li',[_v("Floating-point, single-precision real number values.")]),_v(" "),_c('li',[_v("Double, a wider floating-point size.")]),_v(" "),_c('li',[_v("Integer, integral or fixed-precision values.")]),_v(" "),_c('li',[_v("String, a sequence of characters.")]),_v(" "),_c('li',[_v("Reference (also called a pointer or handle), a small value referring to another object's address in memory, possibly a much larger one.")]),_v(" "),_c('li',[_v("Enumerated type, a small set of uniquely named values.")])]),_v(" "),_c('p',[_c('span',{staticClass:"dimmed"},[_c('sub',[_v("[source:wikipedia]")])])])])])],1),_v(" "),_c('hr'),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14)],1),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])]),_v(" "),_m(15)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{staticClass:"display-3",attrs:{"id":"markbind"}},[_c('span',{staticClass:"anchor",attrs:{"id":"markbind"}}),_c('span',[_c('strong',[_v("MarkBind")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{staticClass:"btn btn-primary",attrs:{"href":"/userGuide"}},[_v("Get Started")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"simple-syntax-dynamic-content"}},[_c('span',{staticClass:"anchor",attrs:{"id":"simple-syntax-dynamic-content"}}),_c('span',{staticStyle:{"color":"#00B0F0"}},[_c('span',{staticClass:"fas fa-check-circle",attrs:{"aria-hidden":"true"}})]),_v(" Simple syntax. Dynamic content."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#simple-syntax-dynamic-content","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('a',{attrs:{"href":"/userGuide/markBindSyntaxOverview.html"}},[_c('strong',[_v("use a mix of several popular syntax schemes")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Syntax scheme")]),_v(" "),_c('th',[_v("Code")]),_v(" "),_c('th',[_v("Output")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("Markdown")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("**bold text** _italic text_")])]),_v(" "),_c('td',[_c('strong',[_v("bold text")]),_v(" "),_c('em',[_v("italic text")])])]),_v(" "),_c('tr',[_c('td',[_v("GFMD")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("~~striked out text~~")])]),_v(" "),_c('td',[_c('s',[_v("striked out text")])])]),_v(" "),_c('tr',[_c('td',[_v("MarkBind extensions to Markdown")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("==highlighted text==")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("%%grey text%%")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("!!underlined text!!")])]),_v(" "),_c('td',[_c('mark',[_v("highlighted text")]),_c('br'),_c('span',{staticClass:"dimmed"},[_v("grey text")]),_c('br'),_c('span',{staticClass:"underline"},[_v("underlined text")])])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"everything-you-need-for-text-heavy-websites-built-in"}},[_c('span',{staticClass:"anchor",attrs:{"id":"everything-you-need-for-text-heavy-websites-built-in"}}),_c('span',{staticStyle:{"color":"#00B0F0"}},[_c('span',{staticClass:"fas fa-check-circle",attrs:{"aria-hidden":"true"}})]),_v(" Everything you need for text-heavy websites, built-in."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#everything-you-need-for-text-heavy-websites-built-in","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("MarkBind is "),_c('strong',[_v("highly optimized for creating text-heavy websites")]),_v(" "),_c('span',{staticClass:"dimmed"},[_v("e.g., eLearning websites, online instruction manuals, project documentation etc.")]),_v(" Anything that you might need for creating such websites are built-in, sparing you the hassle of finding/installing/searching plugins that you need.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"indented"},[_c('p',[_c('span',{staticClass:"large"},[_c('span',{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('strong',[_v("Icons")]),_v(" can improve the readability of a text-heavy document. MarkBind comes with a wide selection of "),_c('a',{attrs:{"href":"/userGuide/formattingContents.html#icons"}},[_v("icons")]),_v(" and "),_c('a',{attrs:{"href":"/userGuide/formattingContents.html#emoji"}},[_v("emoji")]),_v("."),_c('br'),_v(" "),_c('span',{staticClass:"large"},[_c('span',{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})]),_v(" With MarkBind's "),_c('a',{attrs:{"href":"/userGuide/makingTheSiteSearchable.html"}},[_c('strong',[_v("search feature")])]),_v(", you can allow readers to search for keywords in your site."),_c('br'),_v(" "),_c('span',{staticClass:"large"},[_c('span',{staticClass:"fas fa-window-maximize",attrs:{"aria-hidden":"true"}})]),_v(" MarkBind allows you to add "),_c('a',{attrs:{"href":"/userGuide/tweakingThePageStructure.html"}},[_c('strong',[_v("site/page navigation menus, headers, footers")])]),_v(" easily.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"more-control-to-the-reader-without-duplicating-code"}},[_c('span',{staticClass:"anchor",attrs:{"id":"more-control-to-the-reader-without-duplicating-code"}}),_c('span',{staticStyle:{"color":"#00B0F0"}},[_c('span',{staticClass:"fas fa-check-circle",attrs:{"aria-hidden":"true"}})]),_v(" More control to the reader, without duplicating code."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#more-control-to-the-reader-without-duplicating-code","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A MarkBind website can be a "),_c('em',[_v("buffet")]),_v(" of content, as opposed to a "),_c('em',[_v("set menu")]),_v(": a site can have optional contents that the reader can access at her discretion, and the same content can be organized in multiple ways so that the reader can choose the one that fits the need. To "),_c('em',[_v("cater")]),_v(" (pun intended) for creating such buffet style websites, MarkBind has "),_c('strong',[_c('a',{attrs:{"href":"/userGuide/reusingContents.html"}},[_v("reuse mechanisms")]),_v(" for presenting the same content in multiple ways without duplicating the source file")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, MarkBind has a powerful "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("include")]),_v(" mechanism that allows content fragments (i.e., a file or part of a file) to be reused at multiple places in the website. In the example below, both the modal and the expandable panel reuse the same content originating from a "),_c('em',[_v("single")]),_v(" source file.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"easy-to-set-up-modify-deploy-integrate"}},[_c('span',{staticClass:"anchor",attrs:{"id":"easy-to-set-up-modify-deploy-integrate"}}),_c('span',{staticStyle:{"color":"#00B0F0"}},[_c('span',{staticClass:"fas fa-check-circle",attrs:{"aria-hidden":"true"}})]),_v(" Easy to set up, modify, deploy, integrate."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#easy-to-set-up-modify-deploy-integrate","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Installing MarkBind takes just one command. Creating a new MarkBind site too takes just one command. With MarkBind's "),_c('em',[_v("live preview")]),_v(" feature, you can see how your site will look like as you modify the source file. "),_c('a',{attrs:{"href":"/userGuide/deployingTheSite.html"}},[_v("Deploying the site to a server")]),_v(" can be as simple as one command too.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("As MarkBind is also optimized for project documentation, it can easily "),_c('a',{attrs:{"href":"/userGuide/markBindInTheProjectWorkflow.html"}},[_v("integrate with the workflow of a software project")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{staticClass:"btn btn-primary",attrs:{"href":"/userGuide"}},[_v("Get Started")])])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(" on Tue, 14 Feb 2023, 1:33:56 UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  