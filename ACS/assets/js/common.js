function MODAhtmlEncode(n,t){var e=document.createElement("span");return e.appendChild(document.createTextNode(n.attr(t))),e.innerHTML}jQuery.fn.setfocus=function(){return this.each(function(){var n=this;setTimeout(function(){try{n.focus()}catch(n){}},0)})};var $window=$(window),$document=$(document),$html=$("html, body"),$body=$("body"),$navbarNav=$("#navbarNav"),$toTopBtn=$("#topBtn"),$loading=$("#loading"),resizeTimer,windowWidthUnder768=!1,windowWidthUnder992=!1,windowWidthUnder1400=!1,windowWidthUpper1200=!1,windowWidthUpper1940=!1,defaultFontSize=2,ftH,isZh=!0,wLazyLoad,printRequested=!1,allLoaded=!1;firstLoadPage=!0;var FECommon=FECommon||{};!function(n){"use strict";var t={init:function(){this.fn_lang(),this.fn_toTopBtnShow(),this.fn_hashRun(),this.fn_wUnder768(),this.fn_wUnder992(),this.fn_wUnder1400(),this.fn_wUpper1200(),this.fn_wUpper1940(),this.fn_setFontSize()},fn_serviceWorker:function(){"serviceWorker"in navigator?navigator.serviceWorker.register("/assets/js/sw.js").then(function(){console.log("Service Worker 註冊成功")}).catch(function(n){console.log("Service worker 註冊失敗:",n)}):console.log("瀏覽器不支援 Service Worker")},fn_lang:function(){$("html").is(":lang(zh-tw)")||(isZh=!1)},fn_toTopBtnShow:function(){ftH=$(".ftBtm").outerHeight(),$window.scrollTop()<200?$toTopBtn.removeClass("on"):$toTopBtn.addClass("on"),windowWidthUnder768?$toTopBtn.css("bottom",""):$window.scrollTop()+$window.height()>$document.height()-ftH?$toTopBtn.css("bottom",ftH-27):$toTopBtn.css("bottom",100)},fn_hashRun:function(){function n(n,t){var e;if("#"==t)return n.preventDefault(),!1;var i=$("#toTop"==t?"html":t);e=windowWidthUnder1400?windowWidthUnder768?80:116:118;var a=i.stop().offset().top-e;return $html.stop().animate({scrollTop:a},400,"linear",function(){"#toTop"==t&&$("#AU").focus(),"#main"==t&&$("#AC").focus()}),!1}$body.on("click",'a[href^="#"]',function(t){n(t,$(this).attr("href"))})},fn_wUnder768:function(){windowWidthUnder768=$window.outerWidth()<=768},fn_wUnder992:function(){windowWidthUnder992=$window.outerWidth()<=992},fn_wUnder1400:function(){windowWidthUnder1400=$window.outerWidth()<=1400},fn_wUpper1200:function(){windowWidthUpper1200=$window.outerWidth()>=1200},fn_wUpper1940:function(){windowWidthUpper1940=$window.outerWidth()>=1940},fn_setLocalStorage:function(n,t){localStorage.setItem(n,t)},fn_getLocalStorage:function(n){return localStorage.fontSize?localStorage.fontSize:void localStorage.setItem("fontSize","2")},fn_setFontSize:function(){defaultFontSize=this.fn_getLocalStorage("fontSize")},fn_loadingOff:function(){$loading.fadeOut("slow")},fn_loadingOn:function(){$loading.fadeIn("slow")}};n.basicInit=function(){t.init()},n.basicToTopBtnShow=function(){t.fn_toTopBtnShow()},n.basicHashRun=function(){t.fn_hashRun()},n.basicWUnder768=function(){t.fn_wUnder768()},n.basicWUnder992=function(){t.fn_wUnder992()},n.basicWUnder1400=function(){t.fn_wUnder1400()},n.basicWUpper1200=function(){t.fn_wUpper1200()},n.basicWUpper1940=function(){t.fn_wUpper1940()},n.basicSetFontSize=function(){t.fn_setFontSize()},n.basicSetLocalStorage=function(n,e,i){t.fn_setLocalStorage(n,e,i)},n.basicGetLocalStorage=function(){t.fn_getLocalStorage()},n.basicLoadingOff=function(){t.fn_loadingOff()},n.basicLoadingOn=function(){t.fn_loadingOn()};var e={init:function(){this.fn_headerSticky(),this.fn_navSet(),this.fn_navClose(),this.fn_sideNavSwitch(),this.fn_fontSize(),this.fn_searchArea()},fn_headerSticky:function(){$window.scrollTop()>=parseInt($(".header").height())?$body.addClass("hdFixed"):$body.removeClass("hdFixed")},fn_navSet:function(){$("[data-submenu]").submenupicker(),$("#navbarNav .dropdown-toggle").click(function(n){windowWidthUnder1400?n.preventDefault():window.location=$(this).attr("href")}),$("#navbarNav .nav-item").mouseout(function(){windowWidthUnder1400||$(this).find(".nav-link").blur().removeClass("show").next().removeClass("show")})},fn_navClose:function(){windowWidthUnder1400||"true"!=$(".navbarNavSwitchJs").attr("aria-expanded")||$("#navbarNav").offcanvas("hide").find(".show").removeClass("show")},fn_sideNavSwitch:function(){function n(n){n.attr({title:n.data("closetitle"),"aria-expanded":"true"}).find(".visually-hidden").text(n.data("closetitle"))}function t(n){$("#navbarNav .on").removeClass("on"),$("#navbarNav .nav-link").blur(),n.attr({title:n.data("opentitle"),"aria-expanded":"false"}).find(".visually-hidden").text(n.data("opentitle"))}var e=document.getElementById("navbarNav");e.addEventListener("show.bs.offcanvas",function(){n($(".navbarNavSwitchJs"))}),e.addEventListener("hide.bs.offcanvas",function(){t($(".navbarNavSwitchJs"))})},fn_fontSize:function(){function t(){e=l.find("span").html(),i=l.attr("title"),a=l.attr("data-order"),o=l.find("i").attr("class")}var e,i,a,o,r,s,d,c,f=$(".fontSizeDdJs"),l=$(".fontSizeDdNow"),u=f.find(".dropdown-menu");t(),u.find("button").on({click:function(){var o=$(this);r=o.html(),s=o.attr("title"),d=o.attr("data-order"),c="ci ci-font"+d,l.attr({title:s,"data-order":d}).find("span").html(r),l.find("i").attr("class",c),o.attr({title:i,"data-order":a}).html(e),t(),u.find("li").sort(function(n,t){return $(n).find("button").attr("data-order")-$(t).find("button").attr("data-order")}).appendTo(u),1==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeL"),2==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeM"),3==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeS"),n.basicSetLocalStorage("fontSize",d)}}),2!=defaultFontSize&&f.find("button[data-order="+defaultFontSize+"]").click()},fn_searchArea:function(){$body.on("click",".searchSwitchBtnJs",function(){$(".searchAreaJs").addClass("on"),windowWidthUnder1400&&($(".navbarNavSwitchJs").click(),$("body").addClass("fullH")),setTimeout(function(){$(".searchAreaIptJs").setfocus()},300)}),$body.on("click",".closeBtnJs,.searchAreaMaskJs",function(){$(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""),$("body").removeClass("fullH")}),$(".searchSwitchBtnJs,.closeBtnJs").on("keydown",function(n){13===n.which&&$(".searchSwitchBtnJs").setfocus()})}};n.headerInit=function(){e.init()},n.headerHeaderSticky=function(){e.fn_headerSticky()},n.headerNavSet=function(){e.fn_navSet()},n.headerNavClose=function(){e.fn_navClose()},n.headerSideNavSwitch=function(){e.fn_sideNavSwitch()},n.headerFontSize=function(){e.fn_fontSize()},n.headerSearchArea=function(){e.fn_searchArea()};var i={init:function(){this.fn_ftNavSwitch(),this.fn_ftNavStyle()},fn_ftNavSwitch:function(){function n(n){var t=MODAhtmlEncode(n,"data-closetitle");$(".ftNavLv2").slideDown(350),$(".ftNav").removeClass("off"),n.attr("title",t).find(".visually-hidden").html(t)}function t(n){var t=MODAhtmlEncode(n,"data-opentitle");$(".ftNavLv2").slideUp(350),n.attr("title",t).find(".visually-hidden").html(t),setTimeout(function(){$(".ftNav").addClass("off")},250)}$(".ftNav").hasClass("off")?t($(".ftNavSwitchJs")):n($(".ftNavSwitchJs")),$body.on("click",".ftNavSwitchJs",function(){$(".ftNav").hasClass("off")?n($(this)):t($(this))})},fn_ftNavStyle:function(){$(".ftNavLt > div").length>5?$(".ftNavLt").addClass("itemMoreThen5"):$(".ftNavLt").removeClass("itemMoreThen5")}};n.footerInit=function(){i.init()},n.footerFtNavSwitch=function(){i.fn_ftNavSwitch()},n.footerFtNavStyle=function(){i.fn_ftNavStyle()};var a={init:function(){this.fn_socialShare(),this.fn_sidebar(),this.fn_datePicker(),this.fn_conSearchBar()},fn_socialShare:function(){function n(n){var t=confirm("是否要連結至非本網站頁面？ \n Are you sure you want to visit this website? \n"+n);if(!t)return!1;var e=window.open(n,"redirect");e.open(n,"redirect")}var t=encodeURIComponent(location.href);$body.on("click",".fbShareJs",function(){var e="http://www.facebook.com/share.php?u=".concat(t);n(e)}),$body.on("click",".ttShareJs",function(){var e="https://twitter.com/share?url=".concat(t);n(e)}),$body.on("click",".lineShareJs",function(){var e="https://lineit.line.me/share/ui?url=".concat(t);n(e)}),$body.on("click",".printJs",function(){$(".lazy").length?allLoaded?window.print():(printRequested=!0,wLazyLoad.loadAll()):window.print()}),$body.on("focus",".shareBar > li > a",function(){$(this).parent("li").addClass("on")}),$body.on("keydown",".shareBarMenu li:last-child a",function(n){9!==n.which||n.shiftKey||$(this).parents(".list-inline-item").removeClass("on")}),$body.on("keydown",".shareBar > li > a",function(n){9===n.which&&n.shiftKey&&$(this).parents(".list-inline-item").removeClass("on")}),$body.on("mouseout",".shareBar li",function(n){$(this).removeClass("on"),$(this).children("a").blur()})},fn_sidebar:function(){$(".sidebarJs .menuSub").prev("a").addClass("hasSub"),$body.on("click",".sidebarJs .menuI",function(){var n=$(this);n.parent("li").siblings().removeClass("on").find(".menuSub").slideUp(300),n.parent("li").hasClass("on")?n.parent("li").removeClass("on").find(".menuSub").slideUp(300):(n.parent("li").find(".menuSub").slideDown(300),setTimeout(function(){n.parent("li").addClass("on")},50))})},fn_datePicker:function(){function n(n){n.parents(".searchI").find(".datepicker1").datepicker("show")}isZh?($.datepicker.regional["zh-TW"]={dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],prevText:"上月",nextText:"次月",weekHeader:"週",dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["zh-TW"])):($.datepicker.regional["en-US"]={dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["en-US"])),$(".datepicker1").datepicker(),$body.on("click",".calendarBtn1",function(){n($(this))})},fn_conSearchBar:function(){function n(n){$(".conSearchBarJs").removeClass("off");var t=MODAhtmlEncode(n,"data-closetitle");n.attr("title",t).find(".visually-hidden").html(t),n.find(".ci").removeClass("ci-open").addClass("ci-close")}function t(n){$(".conSearchBarJs").addClass("off");var t=MODAhtmlEncode(n,"data-opentitle");n.attr("title",t).find(".visually-hidden").html(t),n.find(".ci").removeClass("ci-close").addClass("ci-open")}$body.on("click",".searchSwitchJs",function(){$(".conSearchBarJs").hasClass("off")?n($(this)):t($(this))})}};n.mainInit=function(){a.init()},n.mainSocialShare=function(){a.fn_socialShare()},n.mainSidebar=function(){a.fn_sidebar()},n.mainDatePicker=function(){a.fn_datePicker()},n.mainConSearchBar=function(){a.fn_conSearchBar()};var o={init:function(){this.fn_setVideo(),this.fn_kv1Swiper(),this.fn_idxList3Swiper(),this.fn_idxList6Swiper(),this.fn_magnific(),this.fn_lazyload(),this.fn_aos()},fn_setVideo:function(n){function t(n){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+n.dataset.id+"?autoplay=1&rel=0"),t.setAttribute("title",n.dataset.title),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","1"),t.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),n.parentNode.replaceChild(t,n)}function e(){if(void 0==n)var e=document.getElementsByClassName("ytPlayer");else var e=n.find(".ytPlayer");for(var i=0;i<e.length;i++){var a=e[i].dataset.title,o=e[i].dataset.id,r=document.createElement("div");r.setAttribute("data-id",o),r.setAttribute("data-title",a);var s=document.createElement("img");firstLoadPage?(s.dataset.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),s.className="lazy"):s.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),s.alt=a,r.appendChild(s);var d=document.createElement("div");d.setAttribute("class","play"),r.appendChild(d),r.onclick=function(){t(this)},e[i].appendChild(r)}firstLoadPage&&(firstLoadPage=!1)}e()},fn_kv1Swiper:function(){function n(){t=$(".kv1SwiperJs .swiper-slide"),e=$(".kv1SwiperJs .swiper-slide-active"),i=$(".kv1SwiperPageJs .swiper-pagination-bullet"),a=$(".kv1SwiperPageJs .swiper-pagination-bullet-active"),t.attr("aria-hidden","true"),t.find("a, iframe").attr("tabindex",-1),e.attr("aria-hidden",""),e.find("a, iframe").attr("tabindex",""),i.attr("aria-current",""),a.attr("aria-current","true")}if($(".kv1SwiperJs .swiper-slide").length>1){var t,e,i,a,o=[];$(".kv1SwiperJs .swiper-slide").each(function(){$(this).find(".kvTxt").length&&o.push($(this).find(".kvTxt").text()),$(this).find(".ytPlayer").length&&o.push($(this).find(".ytPlayer").data("title"))});var r=new Swiper(".kv1SwiperJs",{preloadImages:!1,lazy:!0,pagination:{el:".kv1SwiperPageJs",clickable:!0,renderBullet:function(n,t){return'<span class="'+t+'"><i>'+o[n]+"</i></span>"}},navigation:{nextEl:".kv1SwiperNextBtnJs",prevEl:".kv1SwiperPrevBtnJs"},autoplay:{delay:7e3,disableOnInteraction:!1},loop:!0,observer:!0,observeParents:!0,watchOverflow:!0,on:{afterInit:function(){n()},slideChangeTransitionEnd:function(){n()}}});$(".kv1SwiperPrevBtnJs").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPageJs span:last-child").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPrevBtnJs").on("keydown",function(n){9===n.which&&n.shiftKey&&r.autoplay.start()}),$(".kv1SwiperPageJs span:last-child").on("keydown",function(n){9!==n.which||n.shiftKey||r.autoplay.start()})}else $(".kv1SwiperJs").addClass("oneKv"),$(".kv1SwiperJs").find(".swiper-lazy").each(function(){var n=$(this).data("background");$(this).css("background-image","url("+n+")")}),$(".kv1SwiperJs").find(".swiper-lazy-preloader").remove()},fn_idxList3Swiper:function(){function n(){$(".idxList3SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList3SwiperJs").length){var t=$(".idxPartner h2").text();new Swiper(".idxList3SwiperJs",{pagination:{el:".idxList3SwiperPageJs",clickable:!0,renderBullet:function(n,e){return'<span class="'+e+'"><i>第'+(n+1)+"組"+t+"</i></span>"}},navigation:{nextEl:".idxList3SwiperNextBtnJs",prevEl:".idxList3SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},541:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){n()},resize:function(){n()}}})}},fn_idxList6Swiper:function(){function n(){$(".idxList6SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList6SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList6SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList6SwiperJs").length){var t=$(".idxLinks h2").text();new Swiper(".idxList6SwiperJs",{pagination:{el:".idxList6SwiperPageJs",clickable:!0,renderBullet:function(n,e){return'<span class="'+e+'"><i>第'+(n+1)+"組"+t+"</i></span>"}},navigation:{nextEl:".idxList6SwiperNextBtnJs",prevEl:".idxList6SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},541:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){n()},resize:function(){n()}}})}},fn_magnific:function(){$(".picZoomJs").each(function(){var n=$(this),t=n.data("mctxtclose"),e=n.data("mctxtprev"),i=n.data("mctxtnext"),a=n.data("mctxtnum");n.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,tClose:t,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(n){return n.el.find("b").html()}},gallery:{enabled:!0,tPrev:e,tNext:i,tCounter:'<span title="'+a+'">%curr% of %total%</span>'},zoom:{enabled:!0,duration:300,opener:function(n){return n.find("img")}}})})},fn_lazyload:function(){if($(".lazy").length){printRequested=!1,allLoaded=!1;var n=function(n){n.src="/ACS/assets/img/pic_wait1.jpg"},t=function(){allLoaded=!0,printRequested&&window.print()};wLazyLoad=new LazyLoad({class_applied:"lz-applied",class_loading:"lz-loading",class_loaded:"lz-loaded",class_error:"lz-error",class_entered:"lz-entered",class_exited:"lz-exited",cancel_on_exit:!1,threshold:100,callback_error:n,callback_finish:t});var e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(e){var i=window.matchMedia("print");i.addListener(function(n){n.matches&&wLazyLoad.loadAll()})}else window.onbeforeprint=function(){wLazyLoad.loadAll()}}},fn_aos:function(){AOS.init({offset:100,delay:100,duration:800})}};n.widgetInit=function(){o.init()},n.widgetSetVideo=function(n){o.fn_setVideo(n)},n.widgetKv1Swiper=function(){o.fn_kv1Swiper()},n.widgetIdxList3Swiper=function(){o.fn_idxList3Swiper()},n.widgetIdxList6Swiper=function(){o.fn_idxList6Swiper()},n.widgetMagnific=function(){o.fn_magnific()},n.widgetLazyload=function(){o.fn_lazyload()},n.widgetAos=function(){o.fn_aos()};var r={init:function(){this.fn_navFocus(),this.fn_searchPop()},fn_navFocus:function(){$("#navbarNav .dropdown-toggle").on("focus",function(){$(this).closest("li").addClass("on")}),$("#navbarNav .dropdown-toggle").on("click",function(n){$(this).parent("li").removeClass("on"),$(this).parent("li").siblings(".on").removeClass("on")}),$("#navbarNav .nav-item").each(function(){$(this).find("li:last").find("a").on("keydown",function(n){9!==n.which||n.shiftKey||$(this).parents(".on").removeClass("on")}),$(this).find(".nav-link").on("keydown",function(n){9===n.which&&n.shiftKey&&$(this).parents(".on").removeClass("on")})}),$document.on("click",function(){$navbarNav.find("on")&&$("#navbarNav .on").removeClass("on")})},fn_searchPop:function(){$(".searchAreaJs .closeBtnJs").on("keydown",function(n){9!==n.which||n.shiftKey||($(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""))})}};n.a11yInit=function(){r.init()},n.a11yNavFocus=function(){r.fn_navFocus()};var s={init:function(){n.basicInit(),n.headerInit(),n.footerInit(),n.widgetInit(),n.a11yInit()}};n.documentOnReadyInit=function(){s.init()};var d={init:function(){n.mainInit()}};n.documentOnLoadInit=function(){d.init()};var c={init:function(){n.basicWUnder768(),n.basicWUnder992(),n.basicWUnder1400(),n.basicWUpper1200(),n.basicWUpper1940(),n.headerNavClose()}};n.documentOnResizeInit=function(){c.init()};var f={init:function(){n.basicToTopBtnShow(),n.headerHeaderSticky()}};n.documentOnScrollInit=function(){f.init()}}(FECommon),$(document).ready(function(){FECommon.documentOnReadyInit()}),$window.on("load",FECommon.documentOnLoadInit),$window.on("scroll",FECommon.documentOnScrollInit),$window.on("resize",function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){FECommon.documentOnResizeInit()},250)});