
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--ug"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/userGuide/index.html"}},[_v("USER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("User Guide")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/gettingStarted.html"}},[_c('strong',[_v("Getting Started")])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("Authoring Contents")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/authoringContents.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/addingPages.html"}},[_v("Adding Pages")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/markBindSyntaxOverview.html"}},[_v("MarkBind Syntax Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/formattingContents.html"}},[_v("Formatting Contents")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingComponents.html"}},[_v("Using Components")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/presentation.html"}},[_v("Presentation")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/imagesAndDiagrams.html"}},[_v("Images & Diagrams")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/popups.html"}},[_v("Pop-Ups")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/navigation.html"}},[_v("Navigation")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/others.html"}},[_v("Others")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-2",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/components/advanced.html"}},[_v("Advanced")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingHtmlJavaScriptCss.html"}},[_v("Using HTML, JavaScript, CSS")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/tweakingThePageStructure.html"}},[_v("Tweaking the Page Structure")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/reusingContents.html"}},[_v("Reusing Contents")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("Working with sites")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/workingWithSites.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/settingSiteProperties.html"}},[_v("Setting Site Properties")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/usingPlugins.html"}},[_v("Using Plugins")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/makingTheSiteSearchable.html"}},[_v("Making the Site Searchable")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/themes.html"}},[_v("Applying Themes")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/deployingTheSite.html"}},[_v("Deploying the Site")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/markBindInTheProjectWorkflow.html"}},[_v("MarkBind in the Project Workflow")])])])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('strong',[_v("References")]),_v(" "),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/cliCommands.html"}},[_v("CLI Commands")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/readerFacingFeatures.html"}},[_v("Reader-Facing Features")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/fullSyntaxReference.html"}},[_v("Full Syntax Reference")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/syntaxCheatSheet.html"}},[_v("Syntax Cheat Sheet")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" File")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/tipsAndTricks.html"}},[_v("Tips & Tricks")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/userGuide/glossary.html"}},[_v("Glossary")])])])])])])],1)],1)]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("For example, to apply the Cerulean theme, add the following configuration:")]),_v(" "),_m(6),_c('p',[_v("If no such property is specified, your site will be styled with default Bootstrap theme.")]),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-cerulean"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-cerulean"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-cerulean")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-cerulean","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/cerulean/"}},[_c('img',{attrs:{"src":"/images/bootswatch/cerulean.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-cosmo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-cosmo"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-cosmo")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-cosmo","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/cosmo/"}},[_c('img',{attrs:{"src":"/images/bootswatch/cosmo.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-flatly"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-flatly"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-flatly")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-flatly","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/flatly/"}},[_c('img',{attrs:{"src":"/images/bootswatch/flatly.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-journal"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-journal"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-journal")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-journal","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/journal/"}},[_c('img',{attrs:{"src":"/images/bootswatch/journal.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-litera"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-litera"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-litera")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-litera","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/litera/"}},[_c('img',{attrs:{"src":"/images/bootswatch/litera.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-lumen"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-lumen"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-lumen")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-lumen","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/lumen/"}},[_c('img',{attrs:{"src":"/images/bootswatch/lumen.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-lux"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-lux"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-lux")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-lux","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/lux/"}},[_c('img',{attrs:{"src":"/images/bootswatch/lux.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-materia"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-materia"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-materia")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-materia","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/materia/"}},[_c('img',{attrs:{"src":"/images/bootswatch/materia.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-minty"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-minty"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-minty")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-minty","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/minty/"}},[_c('img',{attrs:{"src":"/images/bootswatch/minty.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-pulse"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-pulse"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-pulse")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-pulse","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/pulse/"}},[_c('img',{attrs:{"src":"/images/bootswatch/pulse.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-sandstone"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-sandstone"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-sandstone")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-sandstone","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/sandstone/"}},[_c('img',{attrs:{"src":"/images/bootswatch/sandstone.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-simplex"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-simplex"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-simplex")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-simplex","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/simplex/"}},[_c('img',{attrs:{"src":"/images/bootswatch/simplex.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-sketchy"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-sketchy"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-sketchy")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-sketchy","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/sketchy/"}},[_c('img',{attrs:{"src":"/images/bootswatch/sketchy.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-spacelab"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-spacelab"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-spacelab")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-spacelab","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/spacelab/"}},[_c('img',{attrs:{"src":"/images/bootswatch/spacelab.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-united"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-united"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-united")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-united","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/united/"}},[_c('img',{attrs:{"src":"/images/bootswatch/united.png"}})])])],1),_v(" "),_c('div',{staticClass:"theme-card col-sm-6 col-xl-4"},[_c('box',[_c('div',[_c('h6',{attrs:{"id":"bootswatch-yeti"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bootswatch-yeti"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bootswatch-yeti")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootswatch-yeti","onclick":"event.stopPropagation()"}})])]),_v(" "),_c('a',{attrs:{"href":"https://bootswatch.com/yeti/"}},[_c('img',{attrs:{"src":"/images/bootswatch/yeti.png"}})])])],1)])]),_v(" "),_m(9),_v(" "),_c('br'),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(10)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('p',[_c('span',{staticClass:"d-none",attrs:{"id":"title"}},[_v("Themes")])])}
},function anonymous(
) {
with(this){return _c('span',{staticClass:"d-none",attrs:{"id":"link"}},[_c('span',[_c('a',{attrs:{"href":"/userGuide/themes.html"}},[_c('em',[_v("User Guide → Themes")])])])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"themes"}},[_c('span',{staticClass:"anchor",attrs:{"id":"themes"}}),_v("Themes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#themes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('span',{staticClass:"lead",attrs:{"id":"overview"}},[_c('p',[_c('strong',[_v("MarkBind supports the ability to style your website with a variety of bootstrap themes.")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"specifying-a-theme"}},[_c('span',{staticClass:"anchor",attrs:{"id":"specifying-a-theme"}}),_v("Specifying a Theme"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#specifying-a-theme","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can specify a theme for your site by using the "),_c('a',{attrs:{"href":"/userGuide/siteJsonFile.html#style"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("style.bootstrapTheme")]),_v(" property")]),_v(" of your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" configuration file.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("site.json")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"site.json","class":"hljs json"}},[_c('span',[_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"style\"")]),_v(": {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"bootstrapTheme\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"bootswatch-cerulean\"")]),_v("\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("}\n")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"supported-themes"}},[_c('span',{staticClass:"anchor",attrs:{"id":"supported-themes"}}),_v("Supported Themes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#supported-themes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Currently, MarkBind supports all light themes from "),_c('a',{attrs:{"href":"https://bootswatch.com/"}},[_v("Bootswatch")]),_v(". Visit each of the theme pages below to see how different visual components are styled.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"clearfix"},[_c('p',[_c('span',{staticClass:"float-left"},[_c('a',{staticClass:"btn btn-light",attrs:{"href":"/userGuide/makingTheSiteSearchable.html"}},[_c('span',[_c('span',{staticClass:"far fa-arrow-alt-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('span',[_v("Making the Site Searchable")])])])])]),_v(" "),_c('p',[_c('span',{staticClass:"float-right"},[_c('a',{staticClass:"btn btn-light",attrs:{"href":"/userGuide/deployingTheSite.html"}},[_c('span',[_c('span',[_v("Deploying the Site")]),_v(" "),_c('span',{staticClass:"far fa-arrow-alt-circle-right",attrs:{"aria-hidden":"true"}})])])])])])}
},function anonymous(
) {
with(this){return _c('div',[_c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v(" on Sat, 22 Jan 2022, 16:49:34 UTC]")]),_c('br'),_v(" "),_c('small',[_v("This site is powered by "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(".")])])])])}
}];
  