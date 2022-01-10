
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--ug"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/userGuide/index.html"}},[_v("USER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("User Guide")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/gettingStarted.html"}},[_c('strong',[_v("Getting Started")])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("Authoring Contents")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/authoringContents.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/addingPages.html"}},[_v("Adding Pages")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/markBindSyntaxOverview.html"}},[_v("MarkBind Syntax Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/formattingContents.html"}},[_v("Formatting Contents")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingComponents.html"}},[_v("Using Components")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/presentation.html"}},[_v("Presentation")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/imagesAndDiagrams.html"}},[_v("Images & Diagrams")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/popups.html"}},[_v("Pop-Ups")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/navigation.html"}},[_v("Navigation")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/others.html"}},[_v("Others")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/advanced.html"}},[_v("Advanced")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingHtmlJavaScriptCss.html"}},[_v("Using HTML, JavaScript, CSS")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/tweakingThePageStructure.html"}},[_v("Tweaking the Page Structure")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/reusingContents.html"}},[_v("Reusing Contents")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("Working with sites")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/workingWithSites.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/settingSiteProperties.html"}},[_v("Setting Site Properties")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingPlugins.html"}},[_v("Using Plugins")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/makingTheSiteSearchable.html"}},[_v("Making the Site Searchable")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/themes.html"}},[_v("Applying Themes")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/deployingTheSite.html"}},[_v("Deploying the Site")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/markBindInTheProjectWorkflow.html"}},[_v("MarkBind in the Project Workflow")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("References")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/cliCommands.html"}},[_v("CLI Commands")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/readerFacingFeatures.html"}},[_v("Reader-Facing Features")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/fullSyntaxReference.html"}},[_v("Full Syntax Reference")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/syntaxCheatSheet.html"}},[_v("Syntax Cheat Sheet")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" File")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/tipsAndTricks.html"}},[_v("Tips & Tricks")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/glossary.html"}},[_v("Glossary")])])])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('span',{staticClass:"lead",attrs:{"id":"overview"}},[_c('p',[_c('strong',[_v("It is easy to add files to a MarkBind site as any file inside the "),_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.html",value:(tooltipInnerContentGetter),expression:"tooltipInnerContentGetter",modifiers:{"hover":true,"top":true,"html":true}}],staticClass:"trigger",attrs:{"data-mb-component-type":"tooltip"}},[_m(3),_v("root directory")]),_v(" becomes a part of the generated website.")])])]),_v(" "),_c('div',{staticClass:"indented"},[_c('p',[_c('big',[_c('span',{staticClass:"badge badge-pill badge-secondary",staticStyle:{"padding-bottom":"4px","margin-right":"5px"}},[_v("Example")])]),_v(" If you have a file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutorial/code.txt")]),_v(" in your root directory, it will be available as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<website-url>/tutorial/code.txt")]),_v(" in the generated website.")],1)]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('div',{staticClass:"indented"},[_c('p',[_c('big',[_c('span',{staticClass:"badge badge-pill badge-secondary",staticStyle:{"padding-bottom":"4px","margin-right":"5px"}},[_v("Example")])]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<root>/tutorial/")]),_m(6),_v(" can be transformed into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<website-url>/tutorial/")]),_m(7)],1)]),_v(" "),_c('p',[_v("Here are the steps to add a new page to your site:")]),_v(" "),_c('ol',[_m(8),_v(" "),_m(9),_v(" "),_c('li',[_v("Use the "),_c('trigger',{attrs:{"trigger":"click","for":"modal:addingPages-livePreview"}},[_v("live preview")]),_v(" to view the generated web page for the new file.")],1)]),_v(" "),_c('b-modal',{ref:"modal:addingPages-livePreview",attrs:{"id":"modal:addingPages-livePreview","hide-footer":"","size":"lg","modal-class":"mb-zoom"},scopedSlots:_u([{key:"modal-title",fn:function(){return [_v("Live Preview")]},proxy:true}])},[_v(" "),_c('span',[_c('strong',[_c('em',[_v("Live preview")])]),_v(" is:\n- Regeneration of affected content upon any change to "),_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.html",value:(tooltipInnerContentGetter),expression:"tooltipInnerContentGetter",modifiers:{"hover":true,"top":true,"html":true}}],staticClass:"trigger",attrs:{"data-mb-component-type":"tooltip"}},[_c('span',{attrs:{"data-mb-slot-name":"_content"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mbd")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mbdf")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".njk")]),_v(" files ... anything your content depends on!")]),_v("source files")]),_v(", then reloading the updated site in the Browser.\n\n- Regeneration will also occur upon any modification to attributes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" with the exception of "),_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html#baseurl"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("baseUrl")])]),_v(".\n\n- Copying "),_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.html",value:(tooltipInnerContentGetter),expression:"tooltipInnerContentGetter",modifiers:{"hover":true,"top":true,"html":true}}],staticClass:"trigger",attrs:{"data-mb-component-type":"tooltip"}},[_c('span',{attrs:{"data-mb-slot-name":"_content"}},[_v("files that don't affect page generation (eg. images), but are used in the site")]),_v("assets")]),_v(" to the site output folder.\n\nUse "),_c('a',{attrs:{"href":"/userGuide/cliCommands.html#serve-command"}},[_v("the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("serve")]),_v(" command")]),_v(" to launch a live preview.\n\n")])]),_v(" "),_m(10),_v(" "),_c('br'),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(11)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"d-none",attrs:{"id":"title"}},[_v("Adding Pages")])])}
},function anonymous(
) {
with(this){return _c('span',{staticClass:"d-none",attrs:{"id":"link"}},[_c('span',[_c('a',{attrs:{"href":"/userGuide/addingPages.html"}},[_c('em',[_v("User Guide → Adding Pages")])])])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"adding-pages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"adding-pages"}}),_v("Adding Pages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-pages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('span',{attrs:{"data-mb-slot-name":"_content"}},[_v("The directory that contains all the project files. It is also the directory in which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" configuration file is located.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"dimmed"},[_v("You can specify which files to be omitted from the site by using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ignore")]),_v(" field in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.config")]),_v(" file as explained "),_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html#ignore"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("More importantly, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mbd")]),_v(" files can be transformed into html pages with matching names.")])])}
},function anonymous(
) {
with(this){return _c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setup.md")])])}
},function anonymous(
) {
with(this){return _c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setup.html")])])}
},function anonymous(
) {
with(this){return _c('li',[_v("Add a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(" (or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mbd")]),_v(") file anywhere inside the root directory.")])}
},function anonymous(
) {
with(this){return _c('li',[_v("Update the "),_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html#pages"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pages")]),_v(" attribute of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")])]),_v(" to cover the new file, if necessary.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"clearfix"},[_c('p',[_c('span',{staticClass:"float-left"},[_c('a',{staticClass:"btn btn-light",attrs:{"href":"/userGuide/authoringContents.html"}},[_c('span',[_c('span',{staticClass:"far fa-arrow-alt-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('span',[_v("Authoring Contents")])])])])]),_v(" "),_c('p',[_c('span',{staticClass:"float-right"},[_c('a',{staticClass:"btn btn-light",attrs:{"href":"/userGuide/markBindSyntaxOverview.html"}},[_c('span',[_c('span',[_v("MarkBind Syntax Overview")]),_v(" "),_c('span',{staticClass:"far fa-arrow-alt-circle-right",attrs:{"aria-hidden":"true"}})])])])])])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.0")]),_v(" on Mon, 10 Jan 2022, 10:28:03 UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  