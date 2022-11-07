function MODAhtmlEncode(t,n){var e=document.createElement("span");return e.appendChild(document.createTextNode(t.attr(n))),e.innerHTML}jQuery.fn.setfocus=function(){return this.each(function(){var t=this;setTimeout(function(){try{t.focus()}catch(t){}},0)})};var $window=$(window),$document=$(document),$html=$("html, body"),$body=$("body"),$navbarNav=$("#navbarNav"),$toTopBtn=$("#topBtn"),$loading=$("#loading"),resizeTimer,windowWidthUnder768=!1,windowWidthUnder992=!1,windowWidthUnder1400=!1,windowWidthUpper1200=!1,windowWidthUpper1940=!1,defaultFontSize=2,defaultTheme="",ftH,isZh=!0,wLazyLoad,printRequested=!1,allLoaded=!1;firstLoadPage=!0;var FECommon=FECommon||{};!function(t){"use strict";var n={init:function(){this.fn_lang(),this.fn_toTopBtnShow(),this.fn_hashRun(),this.fn_wUnder768(),this.fn_wUnder992(),this.fn_wUnder1400(),this.fn_wUpper1200(),this.fn_wUpper1940(),this.fn_defaultStorage()},fn_lang:function(){$("html").is(":lang(zh-tw)")||(isZh=!1)},fn_toTopBtnShow:function(){ftH=$(".ftBtm").outerHeight(),$window.scrollTop()<200?$toTopBtn.removeClass("on"):$toTopBtn.addClass("on"),windowWidthUnder768?$toTopBtn.css("bottom",""):$window.scrollTop()+$window.height()>$document.height()-ftH?$toTopBtn.css("bottom",ftH-27):$toTopBtn.css("bottom",100)},fn_hashRun:function(){function t(t){return""==t?t:t=t.replace(new RegExp("<","g"),"").replace(new RegExp(">","g"),"").replace(new RegExp("'","g"),"").replace(/\"/g,"")}function n(t,n){var e,i;if(""!=t&&"#"==n)return t.preventDefault(),!1;var a=$("#toTop"==n?"html":n);return e=windowWidthUnder1400?windowWidthUnder768?80:118:168,"#___gcse_0"!=n?(i=a.stop().offset().top-e,$html.stop().animate({scrollTop:i},400,"linear",function(){"#toTop"==n&&$("#AU").focus(),"#main"==n&&$("#AC").focus()})):(i=0,$html.stop().animate({scrollTop:i},100,"linear")),!1}var e=t(window.location.hash);""==e||e.includes(".")||$(e).length&&n("",e),$body.on("click",'a[href^="#"]',function(t){n(t,$(this).attr("href"))}),$body.on("click",".gsc-cursor-page",function(t){n(t,"#___gcse_0")})},fn_wUnder768:function(){windowWidthUnder768=$window.outerWidth()<=768},fn_wUnder992:function(){windowWidthUnder992=$window.outerWidth()<=992},fn_wUnder1400:function(){windowWidthUnder1400=$window.outerWidth()<=1400},fn_wUpper1200:function(){windowWidthUpper1200=$window.outerWidth()>=1200},fn_wUpper1940:function(){windowWidthUpper1940=$window.outerWidth()>=1940},fn_setStorage:function(t,n){localStorage.setItem(t,n)},fn_getStorage:function(t){function n(t){var n=MODAhtmlEncode(t,"data-lighttitle");t.addClass("on"),t.attr("title",n).find(".visually-hidden").html(n)}if("fontSize"==t){if(localStorage.fontSize)return localStorage.fontSize;localStorage.setItem("fontSize","2")}if("theme"==t){if(void 0!=localStorage.theme)return localStorage.theme;window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&n($(".themeSwitchJs"))}},fn_defaultStorage:function(){defaultFontSize=this.fn_getStorage("fontSize"),defaultTheme=this.fn_getStorage("theme")},fn_loadingOff:function(){$loading.fadeOut("slow")},fn_loadingOn:function(){$loading.fadeIn("slow")}};t.basicInit=function(){n.init()},t.basicToTopBtnShow=function(){n.fn_toTopBtnShow()},t.basicHashRun=function(){n.fn_hashRun()},t.basicWUnder768=function(){n.fn_wUnder768()},t.basicWUnder992=function(){n.fn_wUnder992()},t.basicWUnder1400=function(){n.fn_wUnder1400()},t.basicWUpper1200=function(){n.fn_wUpper1200()},t.basicWUpper1940=function(){n.fn_wUpper1940()},t.basicDefaultStorage=function(){n.fn_defaultStorage()},t.basicSetStorage=function(t,e){n.fn_setStorage(t,e)},t.basicGetStorage=function(){n.fn_getStorage()},t.basicLoadingOff=function(){n.fn_loadingOff()},t.basicLoadingOn=function(){n.fn_loadingOn()};var e={init:function(){this.fn_headerSticky(),this.fn_navSet(),this.fn_navClose(),this.fn_sideNavSwitch(),this.fn_fontSize(),this.fn_theme(),this.fn_searchArea()},fn_headerSticky:function(){$window.scrollTop()>=parseInt($(".header").height())?$body.addClass("hdFixed"):$body.removeClass("hdFixed")},fn_navSet:function(){$("[data-submenu]").submenupicker(),$("#navbarNav .dropdown-toggle").click(function(t){windowWidthUnder1400?t.preventDefault():window.location=$(this).attr("href")}),$("#navbarNav .nav-item").mouseout(function(){windowWidthUnder1400||$(this).find(".nav-link").blur().removeClass("show").next().removeClass("show")})},fn_navClose:function(){windowWidthUnder1400||"true"!=$(".navbarNavSwitchJs").attr("aria-expanded")||$("#navbarNav").offcanvas("hide").find(".show").removeClass("show")},fn_sideNavSwitch:function(){function t(t){t.attr({title:t.data("closetitle"),"aria-expanded":"true"}).find(".visually-hidden").text(t.data("closetitle"))}function n(t){$("#navbarNav .on").removeClass("on"),$("#navbarNav .nav-link").blur(),t.attr({title:t.data("opentitle"),"aria-expanded":"false"}).find(".visually-hidden").text(t.data("opentitle"))}var e=document.getElementById("navbarNav");e.addEventListener("show.bs.offcanvas",function(){t($(".navbarNavSwitchJs"))}),e.addEventListener("hide.bs.offcanvas",function(){n($(".navbarNavSwitchJs"))})},fn_fontSize:function(){function n(){e=f.find("span").html(),i=f.attr("title"),a=f.attr("data-order"),o=f.find("i").attr("class")}var e,i,a,o,s,r,d,c,l=$(".fontSizeDdJs"),f=$(".fontSizeDdNow"),h=l.find(".dropdown-menu");n(),h.find("button").on({click:function(){var o=$(this);s=o.html(),r=o.attr("title"),d=o.attr("data-order"),c="ci ci-font"+d,f.attr({title:r,"data-order":d}).find("span").html(s),f.find("i").attr("class",c),o.attr({title:i,"data-order":a}).html(e),n(),h.find("li").sort(function(t,n){return $(t).find("button").attr("data-order")-$(n).find("button").attr("data-order")}).appendTo(h),1==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeL"),2==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeM"),3==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeS"),t.basicSetStorage("fontSize",d),t.widgetMarqueeUpdate()}}),2!=defaultFontSize&&l.find("button[data-order="+defaultFontSize+"]").click()},fn_theme:function(){function n(n){var e=MODAhtmlEncode(n,"data-lighttitle");n.addClass("on"),n.attr("title",e).find(".visually-hidden").html(e),$("html").removeClass("light").addClass("dark"),t.basicSetStorage("theme","dark")}function e(n){var e=MODAhtmlEncode(n,"data-darktitle");n.removeClass("on"),n.attr("title",e).find(".visually-hidden").html(e),$("html").removeClass("dark").addClass("light"),t.basicSetStorage("theme","light")}"dark"==defaultTheme&&n($(".themeSwitchJs")),$body.on("click",".themeSwitchJs",function(){$("html").hasClass("dark")?e($(this)):n($(this))})},fn_searchArea:function(){$body.on("click",".searchSwitchBtnJs",function(){$(".searchAreaJs").addClass("on"),windowWidthUnder1400&&($(".navbarNavSwitchJs").click(),$("body").addClass("fullH")),setTimeout(function(){$(".searchAreaIptJs").setfocus()},300)}),$body.on("click",".closeBtnJs,.searchAreaMaskJs",function(){$(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""),$("body").removeClass("fullH")}),$(".searchSwitchBtnJs,.closeBtnJs").on("keydown",function(t){13===t.which&&$(".searchSwitchBtnJs").setfocus()})}};t.headerInit=function(){e.init()},t.headerHeaderSticky=function(){e.fn_headerSticky()},t.headerNavSet=function(){e.fn_navSet()},t.headerNavClose=function(){e.fn_navClose()},t.headerSideNavSwitch=function(){e.fn_sideNavSwitch()},t.headerFontSize=function(){e.fn_fontSize()},t.headerTheme=function(){e.fn_theme()},t.headerSearchArea=function(){e.fn_searchArea()};var i={init:function(){this.fn_ftNavSwitch(),this.fn_ftNavStyle()},fn_ftNavSwitch:function(){function t(t){var n=MODAhtmlEncode(t,"data-closetitle");$(".ftNavLv2").slideDown(350),$(".ftNav").removeClass("off"),t.attr("title",n).find(".visually-hidden").html(n)}function n(t){var n=MODAhtmlEncode(t,"data-opentitle");$(".ftNavLv2").slideUp(350),t.attr("title",n).find(".visually-hidden").html(n),setTimeout(function(){$(".ftNav").addClass("off")},250)}$(".ftNav").hasClass("off")?n($(".ftNavSwitchJs")):t($(".ftNavSwitchJs")),$body.on("click",".ftNavSwitchJs",function(){$(".ftNav").hasClass("off")?t($(this)):n($(this))})},fn_ftNavStyle:function(){$(".ftNavLt > div").length>5?$(".ftNavLt").addClass("itemMoreThen5"):$(".ftNavLt").removeClass("itemMoreThen5")}};t.footerInit=function(){i.init()},t.footerFtNavSwitch=function(){i.fn_ftNavSwitch()},t.footerFtNavStyle=function(){i.fn_ftNavStyle()};var a={init:function(){this.fn_socialShare(),this.fn_sidebar(),this.fn_datePicker(),this.fn_conSearchBar(),this.fn_qaAnchor(),this.fn_hintClose()},fn_socialShare:function(){function t(t){e&&$(".shareBar > li").removeClass("on");var n=window.open(t,"redirect");n.open(t,"redirect")}var n=encodeURIComponent(location.href),e=!1;$body.on("click",".fbShareJs",function(){var e="http://www.facebook.com/share.php?u=".concat(n);t(e)}),$body.on("click",".ttShareJs",function(){var e="https://twitter.com/share?url=".concat(n);t(e)}),$body.on("click",".lineShareJs",function(){var e="https://lineit.line.me/share/ui?url=".concat(n);t(e)}),$body.on("click",".printJs",function(){$(".lazy").length?allLoaded?window.print():(printRequested=!0,wLazyLoad.loadAll()):window.print()}),$body.on("focus",".shareBar > li > a",function(){$(this).parent("li").addClass("on")}),$body.on("keydown",".shareBarMenu li:last-child a",function(t){9!==t.which||t.shiftKey||$(this).parents(".list-inline-item").removeClass("on")}),$body.on("keydown",".shareBar > li > a",function(t){9===t.which&&t.shiftKey&&$(this).parents(".list-inline-item").removeClass("on")}),$body.on("mouseover",".shareBar > li",function(t){e=!0,$(this).addClass("on")}),$body.on("mouseout",".shareBar li",function(t){e=!1,$(this).removeClass("on"),$(this).children("a").blur()})},fn_sidebar:function(){$(".sidebarJs .menuSub").prev("a").addClass("hasSub"),$body.on("click",".sidebarJs .menuI",function(){var t=$(this);t.parent("li").siblings().removeClass("on").find(".menuSub").slideUp(300),t.parent("li").hasClass("on")?t.parent("li").removeClass("on").find(".menuSub").slideUp(300):(t.parent("li").find(".menuSub").slideDown(300),setTimeout(function(){t.parent("li").addClass("on")},50))})},fn_datePicker:function(){function t(t){t.parents(".searchI").find(".datepicker1").datepicker("show")}isZh?($.datepicker.regional["zh-TW"]={dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],prevText:"上月",nextText:"次月",weekHeader:"週",dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["zh-TW"])):($.datepicker.regional["en-US"]={dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["en-US"])),$(".datepicker1").datepicker(),$body.on("click",".calendarBtn1",function(){t($(this))})},fn_conSearchBar:function(){function t(t){$(".conSearchBarJs").removeClass("off");var n=MODAhtmlEncode(t,"data-closetitle");t.attr("title",n).find(".visually-hidden").html(n),t.find(".ci").removeClass("ci-open").addClass("ci-close")}function n(t){$(".conSearchBarJs").addClass("off");var n=MODAhtmlEncode(t,"data-opentitle");t.attr("title",n).find(".visually-hidden").html(n),t.find(".ci").removeClass("ci-close").addClass("ci-open")}$body.on("click",".searchSwitchJs",function(){$(".conSearchBarJs").hasClass("off")?t($(this)):n($(this))})},fn_qaAnchor:function(){$(".qa").length&&$(".qa .accordion-button").each(function(){$(this).on("click",function(){var t,n="#"+$(this).parent().attr("id");t=windowWidthUnder1400?windowWidthUnder768?80:118:168,setTimeout(function(){var e=$(n).stop().offset().top-t;$html.stop().animate({scrollTop:e},400,"linear")},400)})})},fn_hintClose:function(){$(".closeHintJs").length&&$(".closeHintJs").on("click",function(){$(".hintBar").addClass("off"),$(".hintJs").marquee("pause"),$(".hintJs").removeClass("hintJs")})}};t.mainInit=function(){a.init()},t.mainSocialShare=function(){a.fn_socialShare()},t.mainSidebar=function(){a.fn_sidebar()},t.mainDatePicker=function(){a.fn_datePicker()},t.mainConSearchBar=function(){a.fn_conSearchBar()},t.mainQaAnchor=function(){a.fn_qaAnchor()},t.mainHintClose=function(){a.fn_hintClose()};var o={init:function(){this.fn_setVideo(),this.fn_kv1Swiper(),this.fn_idxList3Swiper(),this.fn_idxList6Swiper(),this.fn_magnific(),this.fn_marquee(),this.fn_lazyload(),this.fn_aos()},fn_setVideo:function(t){function n(t){var n=document.createElement("iframe");n.setAttribute("src","https://www.youtube.com/embed/"+t.dataset.id+"?autoplay=1&rel=0"),n.setAttribute("title",t.dataset.title),n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen","1"),n.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),t.parentNode.replaceChild(n,t)}function e(){if(void 0==t)var e=document.getElementsByClassName("ytPlayer");else var e=t.find(".ytPlayer");for(var i=0;i<e.length;i++){var a=e[i].dataset.title,o=e[i].dataset.id,s=document.createElement("div");s.setAttribute("data-id",o),s.setAttribute("data-title",a);var r=document.createElement("img");firstLoadPage?(r.dataset.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),r.className="lazy"):r.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),r.alt=a,s.appendChild(r);var d=document.createElement("div");d.setAttribute("class","play"),s.appendChild(d),s.onclick=function(){n(this)},e[i].appendChild(s)}firstLoadPage&&(firstLoadPage=!1)}e()},fn_kv1Swiper:function(){function t(){n=$(".kv1SwiperJs .swiper-slide"),e=$(".kv1SwiperJs .swiper-slide-active"),i=$(".kv1SwiperPageJs .swiper-pagination-bullet"),a=$(".kv1SwiperPageJs .swiper-pagination-bullet-active"),n.attr("aria-hidden","true"),n.find("a, iframe").attr("tabindex",-1),e.attr("aria-hidden",""),e.find("a, iframe").attr("tabindex",""),i.attr("aria-current",""),a.attr("aria-current","true")}if($(".kv1SwiperJs .swiper-slide").length>1){var n,e,i,a,o=[];$(".kv1SwiperJs .swiper-slide").each(function(){$(this).find(".kvTxt").length&&o.push($(this).find(".kvTxt").text()),$(this).find(".ytPlayer").length&&o.push($(this).find(".ytPlayer").data("title"))});var s;s=!$(".kv1SwiperJs").find(".ytWrap").length&&{delay:7e3,disableOnInteraction:!1};var r=new Swiper(".kv1SwiperJs",{preloadImages:!1,pagination:{el:".kv1SwiperPageJs",clickable:!0,renderBullet:function(t,n){return'<span class="'+n+'"><i>'+o[t]+"</i></span>"}},navigation:{nextEl:".kv1SwiperNextBtnJs",prevEl:".kv1SwiperPrevBtnJs"},autoplay:s,loop:!0,observer:!0,observeParents:!0,watchOverflow:!0,on:{afterInit:function(){t()},slideChangeTransitionEnd:function(){t()}}});$(".kv1SwiperPrevBtnJs").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPageJs span:last-child").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPrevBtnJs").on("keydown",function(t){9===t.which&&t.shiftKey&&r.autoplay.start()}),$(".kv1SwiperPageJs span:last-child").on("keydown",function(t){9!==t.which||t.shiftKey||r.autoplay.start()})}else $(".kv1SwiperJs").addClass("oneKv"),$(".kv1SwiperJs").find(".swiper-lazy").each(function(){var t=$(this).data("background");$(this).css("background-image","url("+t+")")}),$(".kv1SwiperJs").find(".swiper-lazy-preloader").remove()},fn_idxList3Swiper:function(){function t(){$(".idxList3SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList3SwiperJs").length){var n=$(".idxPartner h2").text();new Swiper(".idxList3SwiperJs",{pagination:{el:".idxList3SwiperPageJs",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'"><i>第'+(t+1)+"組"+n+"</i></span>"}},navigation:{nextEl:".idxList3SwiperNextBtnJs",prevEl:".idxList3SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},541:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){t()},resize:function(){t()}}})}},fn_idxList6Swiper:function(){function t(){$(".idxList6SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList6SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList6SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList6SwiperJs").length){var n=$(".idxLinks h2").text();new Swiper(".idxList6SwiperJs",{pagination:{el:".idxList6SwiperPageJs",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'"><i>第'+(t+1)+"組"+n+"</i></span>"}},navigation:{nextEl:".idxList6SwiperNextBtnJs",prevEl:".idxList6SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},541:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){t()},resize:function(){t()}}})}},fn_magnific:function(){$(".picZoomJs").each(function(){var t=$(this),n=t.data("mctxtclose"),e=t.data("mctxtprev"),i=t.data("mctxtnext"),a=t.data("mctxtnum");t.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,tClose:n,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(t){return t.el.find("b").html()}},gallery:{enabled:!0,tPrev:e,tNext:i,tCounter:'<span title="'+a+'">%curr% of %total%</span>'},zoom:{enabled:!0,duration:300,opener:function(t){return t.find("img")}}})})},fn_marquee:function(){$(".hintJs").length&&($(".hintJs").marquee({pauseSpeed:7e3,pauseOnHover:!0}),$(".hintJs a").on("focus",function(){$(".hintJs").marquee("pause")}),$(".closeHintJs").on("focus",function(){t.widgetMarqueeUpdate()}))},fn_marqueeUpdate:function(){$(".hintJs").length&&($(".hintJs").marquee("pause"),$(".hintJs").find("li").css("left",-3e3).eq(0).css("left",0),setTimeout(function(){$(".hintJs").marquee("update"),$(".hintJs").marquee("resume")},500))},fn_lazyload:function(){if($(".lazy").length){printRequested=!1,allLoaded=!1;var t=function(t){t.src="/ACS/assets/img/pic_wait1.jpg"},n=function(){allLoaded=!0,printRequested&&window.print()};wLazyLoad=new LazyLoad({class_applied:"lz-applied",class_loading:"lz-loading",class_loaded:"lz-loaded",class_error:"lz-error",class_entered:"lz-entered",class_exited:"lz-exited",cancel_on_exit:!1,threshold:100,callback_error:t,callback_finish:n});var e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(e){var i=window.matchMedia("print");i.addListener(function(t){t.matches&&wLazyLoad.loadAll()})}else window.onbeforeprint=function(){wLazyLoad.loadAll()}}},fn_aos:function(){AOS.init({offset:100,delay:100,duration:800})}};t.widgetInit=function(){o.init()},t.widgetSetVideo=function(t){o.fn_setVideo(t)},t.widgetKv1Swiper=function(){o.fn_kv1Swiper()},t.widgetIdxList3Swiper=function(){o.fn_idxList3Swiper()},t.widgetIdxList6Swiper=function(){o.fn_idxList6Swiper()},t.widgetMagnific=function(){o.fn_magnific()},t.widgetMarquee=function(){o.fn_marquee()},t.widgetMarqueeUpdate=function(){o.fn_marqueeUpdate()},t.widgetLazyload=function(){o.fn_lazyload()},t.widgetAos=function(){o.fn_aos()};var s={init:function(){this.fn_navFocus(),this.fn_searchPop()},fn_navFocus:function(){$body.on("focus","#navbarNav .dropdown-toggle",function(){$(this).closest("li").addClass("on")}),$body.on("click","#navbarNav .dropdown-toggle",function(){$(this).parent("li").removeClass("on"),$(this).parent("li").siblings(".on").removeClass("on")}),$body.on("keydown","#navbarNav .dropdown-menu > li:nth-last-child(1) a",function(t){$(this).parent("li").next("li").length||($(this).parent("li").parent("ul").parent(".nav-item").length?$(this).next("ul").length||9!==t.which||t.shiftKey||$(this).parents(".on").removeClass("on"):(9!==t.which||t.shiftKey||$(this).parent("li").parent("ul").parent(".dropdown").removeClass("on"),$(this).parent("li").parent("ul").parent(".dropdown").next("li").length||$(this).parent("li").parent("ul").parent(".dropdown").parent("ul").parent(".nav-item").removeClass("on")))}),$body.on("keydown","#navbarNav .nav-link",function(t){9===t.which&&t.shiftKey&&$(this).parents(".on").removeClass("on")}),$document.on("click",function(){$navbarNav.find("on")&&$("#navbarNav .on").removeClass("on")})},fn_searchPop:function(){$(".searchAreaJs .closeBtnJs").on("keydown",function(t){9!==t.which||t.shiftKey||($(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""))})}};t.a11yInit=function(){s.init()},t.a11yNavFocus=function(){s.fn_navFocus()};var r={init:function(){t.basicInit(),t.headerInit(),t.footerInit(),t.widgetInit(),t.a11yInit()}};t.documentOnReadyInit=function(){r.init()};var d={init:function(){t.mainInit()}};t.documentOnLoadInit=function(){d.init()};var c={init:function(){t.basicWUnder768(),t.basicWUnder992(),t.basicWUnder1400(),t.basicWUpper1200(),t.basicWUpper1940(),t.headerNavClose(),t.widgetMarqueeUpdate()}};t.documentOnResizeInit=function(){c.init()};var l={init:function(){t.basicToTopBtnShow(),t.headerHeaderSticky()}};t.documentOnScrollInit=function(){l.init()}}(FECommon),$(document).ready(function(){FECommon.documentOnReadyInit()}),$window.on("load",FECommon.documentOnLoadInit),$window.on("scroll",FECommon.documentOnScrollInit),$window.on("resize",function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){FECommon.documentOnResizeInit()},250)});