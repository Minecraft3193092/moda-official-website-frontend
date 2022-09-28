function MODAhtmlEncode(t,e){var n=document.createElement("span");return n.appendChild(document.createTextNode(t.attr(e))),n.innerHTML}jQuery.fn.setfocus=function(){return this.each(function(){var t=this;setTimeout(function(){try{t.focus()}catch(t){}},0)})};var $window=$(window),$document=$(document),$html=$("html, body"),$body=$("body"),$navbarNav=$("#navbarNav"),$toTopBtn=$("#topBtn"),$loading=$("#loading"),resizeTimer,windowWidthUnder768=!1,windowWidthUnder992=!1,windowWidthUnder1400=!1,windowWidthUpper1200=!1,windowWidthUpper1940=!1,defaultFontSize=2,defaultTheme="",ftH,isZh=!0,wLazyLoad,printRequested=!1,allLoaded=!1;firstLoadPage=!0;var FECommon=FECommon||{};!function(t){"use strict";var e={init:function(){this.fn_lang(),this.fn_toTopBtnShow(),this.fn_hashRun(),this.fn_wUnder768(),this.fn_wUnder992(),this.fn_wUnder1400(),this.fn_wUpper1200(),this.fn_wUpper1940(),this.fn_setFontSize()},fn_serviceWorker:function(){"serviceWorker"in navigator?navigator.serviceWorker.register("/assets/js/sw.js").then(function(){console.log("Service Worker 註冊成功")}).catch(function(t){console.log("Service worker 註冊失敗:",t)}):console.log("瀏覽器不支援 Service Worker")},fn_lang:function(){$("html").is(":lang(zh-tw)")||(isZh=!1)},fn_toTopBtnShow:function(){ftH=$(".ftBtm").outerHeight(),$window.scrollTop()<200?$toTopBtn.removeClass("on"):$toTopBtn.addClass("on"),windowWidthUnder768?$toTopBtn.css("bottom",""):$window.scrollTop()+$window.height()>$document.height()-ftH?$toTopBtn.css("bottom",ftH-27):$toTopBtn.css("bottom",100)},fn_hashRun:function(){function t(t,e){var n,i;if(""!=t&&"#"==e)return t.preventDefault(),!1;var a=$("#toTop"==e?"html":e);return n=windowWidthUnder1400?windowWidthUnder768?80:118:168,"#___gcse_0"!=e?(i=a.stop().offset().top-n,$html.stop().animate({scrollTop:i},400,"linear",function(){"#toTop"==e&&$("#AU").focus(),"#main"==e&&$("#AC").focus()})):(i=0,$html.stop().animate({scrollTop:i},100,"linear")),!1}var e=window.location.hash;""==e||e.includes(".")||$(e).length&&t("",e),$body.on("click",'a[href^="#"]',function(e){t(e,$(this).attr("href"))}),$body.on("click",".gsc-cursor-page",function(e){t(e,"#___gcse_0")})},fn_wUnder768:function(){windowWidthUnder768=$window.outerWidth()<=768},fn_wUnder992:function(){windowWidthUnder992=$window.outerWidth()<=992},fn_wUnder1400:function(){windowWidthUnder1400=$window.outerWidth()<=1400},fn_wUpper1200:function(){windowWidthUpper1200=$window.outerWidth()>=1200},fn_wUpper1940:function(){windowWidthUpper1940=$window.outerWidth()>=1940},fn_setLocalStorage:function(t,e){localStorage.setItem(t,e)},fn_getLocalStorage:function(t){if("fontSize"==t){if(localStorage.fontSize)return localStorage.fontSize;localStorage.setItem("fontSize","2")}if("theme"==t&&localStorage.theme)return localStorage.theme},fn_setFontSize:function(){defaultFontSize=this.fn_getLocalStorage("fontSize"),defaultTheme=this.fn_getLocalStorage("theme")},fn_loadingOff:function(){$loading.fadeOut("slow")},fn_loadingOn:function(){$loading.fadeIn("slow")}};t.basicInit=function(){e.init()},t.basicToTopBtnShow=function(){e.fn_toTopBtnShow()},t.basicHashRun=function(){e.fn_hashRun()},t.basicWUnder768=function(){e.fn_wUnder768()},t.basicWUnder992=function(){e.fn_wUnder992()},t.basicWUnder1400=function(){e.fn_wUnder1400()},t.basicWUpper1200=function(){e.fn_wUpper1200()},t.basicWUpper1940=function(){e.fn_wUpper1940()},t.basicSetFontSize=function(){e.fn_setFontSize()},t.basicSetLocalStorage=function(t,n){e.fn_setLocalStorage(t,n)},t.basicGetLocalStorage=function(){e.fn_getLocalStorage()},t.basicLoadingOff=function(){e.fn_loadingOff()},t.basicLoadingOn=function(){e.fn_loadingOn()};var n={init:function(){this.fn_headerSticky(),this.fn_navSet(),this.fn_navClose(),this.fn_sideNavSwitch(),this.fn_fontSize(),this.fn_theme(),this.fn_searchArea()},fn_headerSticky:function(){$window.scrollTop()>=parseInt($(".header").height())?$body.addClass("hdFixed"):$body.removeClass("hdFixed")},fn_navSet:function(){$("[data-submenu]").submenupicker(),$("#navbarNav .dropdown-toggle").click(function(t){windowWidthUnder1400?t.preventDefault():window.location=$(this).attr("href")}),$("#navbarNav .nav-item").mouseout(function(){windowWidthUnder1400||$(this).find(".nav-link").blur().removeClass("show").next().removeClass("show")})},fn_navClose:function(){windowWidthUnder1400||"true"!=$(".navbarNavSwitchJs").attr("aria-expanded")||$("#navbarNav").offcanvas("hide").find(".show").removeClass("show")},fn_sideNavSwitch:function(){function t(t){t.attr({title:t.data("closetitle"),"aria-expanded":"true"}).find(".visually-hidden").text(t.data("closetitle"))}function e(t){$("#navbarNav .on").removeClass("on"),$("#navbarNav .nav-link").blur(),t.attr({title:t.data("opentitle"),"aria-expanded":"false"}).find(".visually-hidden").text(t.data("opentitle"))}var n=document.getElementById("navbarNav");n.addEventListener("show.bs.offcanvas",function(){t($(".navbarNavSwitchJs"))}),n.addEventListener("hide.bs.offcanvas",function(){e($(".navbarNavSwitchJs"))})},fn_fontSize:function(){function e(){n=f.find("span").html(),i=f.attr("title"),a=f.attr("data-order"),o=f.find("i").attr("class")}var n,i,a,o,r,s,d,c,l=$(".fontSizeDdJs"),f=$(".fontSizeDdNow"),u=l.find(".dropdown-menu");e(),u.find("button").on({click:function(){var o=$(this);r=o.html(),s=o.attr("title"),d=o.attr("data-order"),c="ci ci-font"+d,f.attr({title:s,"data-order":d}).find("span").html(r),f.find("i").attr("class",c),o.attr({title:i,"data-order":a}).html(n),e(),u.find("li").sort(function(t,e){return $(t).find("button").attr("data-order")-$(e).find("button").attr("data-order")}).appendTo(u),1==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeL"),2==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeM"),3==d&&$("body").removeClass("fontSizeL fontSizeM fontSizeS").addClass("fontSizeS"),t.basicSetLocalStorage("fontSize",d),t.widgetMarqueeUpdate()}}),2!=defaultFontSize&&l.find("button[data-order="+defaultFontSize+"]").click()},fn_theme:function(){function e(e){e.addClass("on");var n=MODAhtmlEncode(e,"data-lighttitle");e.attr("title",n).find(".visually-hidden").html(n),$("html").removeClass("light").addClass("dark"),t.basicSetLocalStorage("theme","dark")}function n(e){e.removeClass("on");var n=MODAhtmlEncode(e,"data-darktitle");e.attr("title",n).find(".visually-hidden").html(n),$("html").removeClass("dark").addClass("light"),t.basicSetLocalStorage("theme","light")}$body.on("click",".themeSwitchJs",function(){$("html").hasClass("dark")?n($(this)):e($(this))}),"dark"==defaultTheme&&e($(".themeSwitchJs"))},fn_searchArea:function(){$body.on("click",".searchSwitchBtnJs",function(){$(".searchAreaJs").addClass("on"),windowWidthUnder1400&&($(".navbarNavSwitchJs").click(),$("body").addClass("fullH")),setTimeout(function(){$(".searchAreaIptJs").setfocus()},300)}),$body.on("click",".closeBtnJs,.searchAreaMaskJs",function(){$(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""),$("body").removeClass("fullH")}),$(".searchSwitchBtnJs,.closeBtnJs").on("keydown",function(t){13===t.which&&$(".searchSwitchBtnJs").setfocus()})}};t.headerInit=function(){n.init()},t.headerHeaderSticky=function(){n.fn_headerSticky()},t.headerNavSet=function(){n.fn_navSet()},t.headerNavClose=function(){n.fn_navClose()},t.headerSideNavSwitch=function(){n.fn_sideNavSwitch()},t.headerFontSize=function(){n.fn_fontSize()},t.headerTheme=function(){n.fn_theme()},t.headerSearchArea=function(){n.fn_searchArea()};var i={init:function(){this.fn_ftNavSwitch(),this.fn_ftNavStyle()},fn_ftNavSwitch:function(){function t(t){var e=MODAhtmlEncode(t,"data-closetitle");$(".ftNavLv2").slideDown(350),$(".ftNav").removeClass("off"),t.attr("title",e).find(".visually-hidden").html(e)}function e(t){var e=MODAhtmlEncode(t,"data-opentitle");$(".ftNavLv2").slideUp(350),t.attr("title",e).find(".visually-hidden").html(e),setTimeout(function(){$(".ftNav").addClass("off")},250)}$(".ftNav").hasClass("off")?e($(".ftNavSwitchJs")):t($(".ftNavSwitchJs")),$body.on("click",".ftNavSwitchJs",function(){$(".ftNav").hasClass("off")?t($(this)):e($(this))})},fn_ftNavStyle:function(){$(".ftNavLt > div").length>5?$(".ftNavLt").addClass("itemMoreThen5"):$(".ftNavLt").removeClass("itemMoreThen5")}};t.footerInit=function(){i.init()},t.footerFtNavSwitch=function(){i.fn_ftNavSwitch()},t.footerFtNavStyle=function(){i.fn_ftNavStyle()};var a={init:function(){this.fn_socialShare(),this.fn_sidebar(),this.fn_datePicker(),this.fn_conSearchBar(),this.fn_qaAnchor(),this.fn_hintClose()},fn_socialShare:function(){function t(t){n&&$(".shareBar > li").removeClass("on");var e=window.open(t,"redirect");e.open(t,"redirect")}var e=encodeURIComponent(location.href),n=!1;$body.on("click",".fbShareJs",function(){var n="http://www.facebook.com/share.php?u=".concat(e);t(n)}),$body.on("click",".ttShareJs",function(){var n="https://twitter.com/share?url=".concat(e);t(n)}),$body.on("click",".lineShareJs",function(){var n="https://lineit.line.me/share/ui?url=".concat(e);t(n)}),$body.on("click",".printJs",function(){$(".lazy").length?allLoaded?window.print():(printRequested=!0,wLazyLoad.loadAll()):window.print()}),$body.on("focus",".shareBar > li > a",function(){$(this).parent("li").addClass("on")}),$body.on("keydown",".shareBarMenu li:last-child a",function(t){9!==t.which||t.shiftKey||$(this).parents(".list-inline-item").removeClass("on")}),$body.on("keydown",".shareBar > li > a",function(t){9===t.which&&t.shiftKey&&$(this).parents(".list-inline-item").removeClass("on")}),$body.on("mouseover",".shareBar > li",function(t){n=!0,$(this).addClass("on")}),$body.on("mouseout",".shareBar li",function(t){n=!1,$(this).removeClass("on"),$(this).children("a").blur()})},fn_sidebar:function(){$(".sidebarJs .menuSub").prev("a").addClass("hasSub"),$body.on("click",".sidebarJs .menuI",function(){var t=$(this);t.parent("li").siblings().removeClass("on").find(".menuSub").slideUp(300),t.parent("li").hasClass("on")?t.parent("li").removeClass("on").find(".menuSub").slideUp(300):(t.parent("li").find(".menuSub").slideDown(300),setTimeout(function(){t.parent("li").addClass("on")},50))})},fn_datePicker:function(){function t(t){t.parents(".searchI").find(".datepicker1").datepicker("show")}isZh?($.datepicker.regional["zh-TW"]={dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],prevText:"上月",nextText:"次月",weekHeader:"週",dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["zh-TW"])):($.datepicker.regional["en-US"]={dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,showMonthAfterYear:!0},$.datepicker.setDefaults($.datepicker.regional["en-US"])),$(".datepicker1").datepicker(),$body.on("click",".calendarBtn1",function(){t($(this))})},fn_conSearchBar:function(){function t(t){$(".conSearchBarJs").removeClass("off");var e=MODAhtmlEncode(t,"data-closetitle");t.attr("title",e).find(".visually-hidden").html(e),t.find(".ci").removeClass("ci-open").addClass("ci-close")}function e(t){$(".conSearchBarJs").addClass("off");var e=MODAhtmlEncode(t,"data-opentitle");t.attr("title",e).find(".visually-hidden").html(e),t.find(".ci").removeClass("ci-close").addClass("ci-open")}$body.on("click",".searchSwitchJs",function(){$(".conSearchBarJs").hasClass("off")?t($(this)):e($(this))})},fn_qaAnchor:function(){$(".qa").length&&$(".qa .accordion-button").each(function(){$(this).on("click",function(){var t,e="#"+$(this).parent().attr("id");t=windowWidthUnder1400?windowWidthUnder768?80:118:168,setTimeout(function(){var n=$(e).stop().offset().top-t;$html.stop().animate({scrollTop:n},400,"linear")},400)})})},fn_hintClose:function(){$(".closeHintJs").length&&$(".closeHintJs").on("click",function(){$(".hintBar").addClass("off"),$(".hintJs").marquee("pause"),$(".hintJs").removeClass("hintJs")})}};t.mainInit=function(){a.init()},t.mainSocialShare=function(){a.fn_socialShare()},t.mainSidebar=function(){a.fn_sidebar()},t.mainDatePicker=function(){a.fn_datePicker()},t.mainConSearchBar=function(){a.fn_conSearchBar()},t.mainQaAnchor=function(){a.fn_qaAnchor()},t.mainHintClose=function(){a.fn_hintClose()};var o={init:function(){this.fn_setVideo(),this.fn_kv1Swiper(),this.fn_idxList3Swiper(),this.fn_idxList4Swiper(),this.fn_idxList5Swiper(),this.fn_magnific(),this.fn_marquee(),this.fn_lazyload(),this.fn_aos()},fn_setVideo:function(t){function e(t){var e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/"+t.dataset.id+"?autoplay=1&rel=0"),e.setAttribute("title",t.dataset.title),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),e.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),t.parentNode.replaceChild(e,t)}function n(){if(void 0==t)var n=document.getElementsByClassName("ytPlayer");else var n=t.find(".ytPlayer");for(var i=0;i<n.length;i++){var a=n[i].dataset.title,o=n[i].dataset.id,r=document.createElement("div");r.setAttribute("data-id",o),r.setAttribute("data-title",a);var s=document.createElement("img");firstLoadPage?(s.dataset.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),s.className="lazy"):s.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",o),s.alt=a,r.appendChild(s);var d=document.createElement("div");d.setAttribute("class","play"),r.appendChild(d),r.onclick=function(){e(this)},n[i].appendChild(r)}firstLoadPage&&(firstLoadPage=!1)}n()},fn_kv1Swiper:function(){function t(){e=$(".kv1SwiperJs .swiper-slide"),n=$(".kv1SwiperJs .swiper-slide-active"),i=$(".kv1SwiperPageJs .swiper-pagination-bullet"),a=$(".kv1SwiperPageJs .swiper-pagination-bullet-active"),e.attr("aria-hidden","true"),e.find("a, iframe").attr("tabindex",-1),n.attr("aria-hidden",""),n.find("a, iframe").attr("tabindex",""),i.attr("aria-current",""),a.attr("aria-current","true")}if($(".kv1SwiperJs .swiper-slide").length>1){var e,n,i,a,o=[];if($(".kv1SwiperJs .swiper-slide").each(function(){$(this).find(".kvTxt").length&&o.push($(this).find(".kvTxt").text()),$(this).find(".ytPlayer").length&&o.push($(this).find(".ytPlayer").data("title"))}),$(".kv1SwiperJs").find(".ytWrap").length)var r=new Swiper(".kv1SwiperJs",{preloadImages:!1,pagination:{el:".kv1SwiperPageJs",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'"><i>'+o[t]+"</i></span>"}},navigation:{nextEl:".kv1SwiperNextBtnJs",prevEl:".kv1SwiperPrevBtnJs"},observer:!0,observeParents:!0,watchOverflow:!0,on:{afterInit:function(){t()},slideChangeTransitionEnd:function(){t()}}});else var r=new Swiper(".kv1SwiperJs",{preloadImages:!1,pagination:{el:".kv1SwiperPageJs",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'"><i>'+o[t]+"</i></span>"}},navigation:{nextEl:".kv1SwiperNextBtnJs",prevEl:".kv1SwiperPrevBtnJs"},autoplay:{delay:7e3,disableOnInteraction:!1},loop:!0,observer:!0,observeParents:!0,watchOverflow:!0,on:{afterInit:function(){t()},slideChangeTransitionEnd:function(){t()}}});$(".kv1SwiperPrevBtnJs").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPageJs span:last-child").on("focus",function(){r.autoplay.stop()}),$(".kv1SwiperPrevBtnJs").on("keydown",function(t){9===t.which&&t.shiftKey&&r.autoplay.start()}),$(".kv1SwiperPageJs span:last-child").on("keydown",function(t){9!==t.which||t.shiftKey||r.autoplay.start()})}else $(".kv1SwiperJs").addClass("oneKv"),$(".kv1SwiperJs").find(".swiper-lazy").each(function(){var t=$(this).data("background");$(this).css("background-image","url("+t+")")}),$(".kv1SwiperJs").find(".swiper-lazy-preloader").remove()},fn_idxList3Swiper:function(){function t(){$(".idxList3SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList3SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList3SwiperJs").length){var e=$(".idxPartner h2").text();new Swiper(".idxList3SwiperJs",{pagination:{el:".idxList3SwiperPageJs",clickable:!0,renderBullet:function(t,n){return'<span class="'+n+'"><i>第'+(t+1)+"組"+e+"</i></span>"}},navigation:{nextEl:".idxList3SwiperNextBtnJs",prevEl:".idxList3SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},541:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){t()},resize:function(){t()}}})}},fn_idxList4Swiper:function(){function e(){o=$(".idxList4SwiperJs .swiper-slide"),n=$(".idxList4SwiperJs .swiper-slide-active"),i=$(".idxList4SwiperPageJs .swiper-pagination-bullet"),a=$(".idxList4SwiperPageJs .swiper-pagination-bullet-active"),o.attr("aria-hidden","true"),o.find(".ytPlayer .play").attr("tabindex",-1),n.attr("aria-hidden",""),n.find(".ytPlayer .play").attr("tabindex",0),i.attr("aria-current",""),a.attr("aria-current","true"),$body.on("keyup",".ytPlayer > div",function(t){"Enter"!==t.key&&13!==t.keyCode||$(this).click()})}if($(".idxList4SwiperJs .swiper-slide").length>1){var n,i,a,o=$(".idxList4SwiperJs .swiper-slide"),r=[],s=[];o.each(function(t){r[t]=$(this).find(".ytPlayer").data("id"),s[t]=$(this).find(".ytPlayer").data("title")});var d=[];$(".idxList4SwiperJs .swiper-slide").each(function(){d.push($(this).find(".ytPlayer").data("title"))});new Swiper(".idxList4SwiperJs",{pagination:{el:".idxList4SwiperPageJs",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'"><i>'+d[t]+"</i></span>"}},effect:"fade",fadeEffect:{crossFade:!0},observer:!0,observeParents:!0,watchOverflow:!0,on:{afterInit:function(){e()},slideChangeTransitionStart:function(){o.eq(this.previousIndex).find(".ytWrap").html('<div class="ytPlayer" data-id="'+r[this.previousIndex]+'" data-title="'+s[this.previousIndex]+'"></div>'),t.widgetSetVideo(o.eq(this.previousIndex))},slideChangeTransitionEnd:function(){e()}}})}},fn_idxList5Swiper:function(){function t(){$(".idxList5SwiperPrevBtnJs").hasClass("swiper-button-lock")?$(".idxList5SwiperJs .swiper-wrapper").css("justify-content","center"):$(".idxList5SwiperJs .swiper-wrapper").css("justify-content","")}if($(".idxList5SwiperJs").length){var e=$(".idxFeatured h2").text();new Swiper(".idxList5SwiperJs",{pagination:{el:".idxList5SwiperPageJs",clickable:!0,renderBullet:function(t,n){return'<span class="'+n+'"><i>第'+(t+1)+"組"+e+"</i></span>"}},navigation:{nextEl:".idxList5SwiperNextBtnJs",prevEl:".idxList5SwiperPrevBtnJs"},observer:!0,observeParents:!0,breakpoints:{992:{slidesPerGroup:4,slidesPerView:4},768:{slidesPerGroup:3,slidesPerView:3},576:{slidesPerGroup:2,slidesPerView:2}},on:{afterInit:function(){t()},resize:function(){t()}}})}},fn_magnific:function(){$(".picZoomJs").each(function(){var t=$(this),e=t.data("mctxtclose"),n=t.data("mctxtprev"),i=t.data("mctxtnext"),a=t.data("mctxtnum");t.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,tClose:e,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(t){return t.el.find("b").html()}},gallery:{enabled:!0,tPrev:n,tNext:i,tCounter:'<span title="'+a+'">%curr% of %total%</span>'},zoom:{enabled:!0,duration:300,opener:function(t){return t.find("img")}}})})},fn_marquee:function(){$(".hintJs").marquee({pauseSpeed:7e3,pauseOnHover:!0}),$(".hintJs a").on("focus",function(){$(".hintJs").marquee("pause")}),$(".closeHintJs").on("focus",function(){t.widgetMarqueeUpdate()})},fn_marqueeUpdate:function(){$(".hintJs").marquee("pause"),$(".hintJs").find("li").css("left",-3e3).eq(0).css("left",0),setTimeout(function(){$(".hintJs").marquee("update"),$(".hintJs").marquee("resume")},500)},fn_lazyload:function(){if($(".lazy").length){printRequested=!1,allLoaded=!1;var t=function(t){t.src="/ADI/assets/img/pic_wait1.jpg"},e=function(){allLoaded=!0,printRequested&&window.print()};wLazyLoad=new LazyLoad({class_applied:"lz-applied",class_loading:"lz-loading",class_loaded:"lz-loaded",class_error:"lz-error",class_entered:"lz-entered",class_exited:"lz-exited",cancel_on_exit:!1,threshold:100,callback_error:t,callback_finish:e});var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(n){var i=window.matchMedia("print");i.addListener(function(t){t.matches&&wLazyLoad.loadAll()})}else window.onbeforeprint=function(){wLazyLoad.loadAll()}}},fn_aos:function(){AOS.init({offset:100,delay:100,duration:800})}};t.widgetInit=function(){o.init()},t.widgetSetVideo=function(t){o.fn_setVideo(t)},t.widgetKv1Swiper=function(){o.fn_kv1Swiper()},t.widgetIdxList3Swiper=function(){o.fn_idxList3Swiper()},t.widgetIdxList4Swiper=function(){o.fn_idxList4Swiper()},t.widgetIdxList5Swiper=function(){o.fn_idxList5Swiper()},t.widgetMagnific=function(){o.fn_magnific()},t.widgetMarquee=function(){o.fn_marquee()},t.widgetMarqueeUpdate=function(){o.fn_marqueeUpdate()},t.widgetLazyload=function(){o.fn_lazyload()},t.widgetAos=function(){o.fn_aos()};var r={init:function(){this.fn_navFocus(),this.fn_searchPop()},fn_navFocus:function(){$body.on("focus","#navbarNav .dropdown-toggle",function(){$(this).closest("li").addClass("on")}),$body.on("click","#navbarNav .dropdown-toggle",function(){$(this).parent("li").removeClass("on"),$(this).parent("li").siblings(".on").removeClass("on")}),$body.on("keydown","#navbarNav .dropdown-menu > li:nth-last-child(1) a",function(t){$(this).parent("li").next("li").length||($(this).parent("li").parent("ul").parent(".nav-item").length?$(this).next("ul").length||9!==t.which||t.shiftKey||$(this).parents(".on").removeClass("on"):(9!==t.which||t.shiftKey||$(this).parent("li").parent("ul").parent(".dropdown").removeClass("on"),$(this).parent("li").parent("ul").parent(".dropdown").next("li").length||$(this).parent("li").parent("ul").parent(".dropdown").parent("ul").parent(".nav-item").removeClass("on")))}),$body.on("keydown","#navbarNav .nav-link",function(t){9===t.which&&t.shiftKey&&$(this).parents(".on").removeClass("on")}),$document.on("click",function(){$navbarNav.find("on")&&$("#navbarNav .on").removeClass("on")})},fn_searchPop:function(){$(".searchAreaJs .closeBtnJs").on("keydown",function(t){9!==t.which||t.shiftKey||($(".searchAreaJs").removeClass("on"),$(".searchAreaIptJs").val(""))})}};t.a11yInit=function(){r.init()},t.a11yNavFocus=function(){r.fn_navFocus()};var s={init:function(){t.basicInit(),t.headerInit(),t.footerInit(),t.widgetInit(),t.a11yInit()}};t.documentOnReadyInit=function(){s.init()};var d={init:function(){t.mainInit()}};t.documentOnLoadInit=function(){d.init()};var c={init:function(){t.basicWUnder768(),t.basicWUnder992(),t.basicWUnder1400(),t.basicWUpper1200(),t.basicWUpper1940(),t.headerNavClose(),t.widgetMarqueeUpdate()}};t.documentOnResizeInit=function(){c.init()};var l={init:function(){t.basicToTopBtnShow(),t.headerHeaderSticky()}};t.documentOnScrollInit=function(){l.init()}}(FECommon),$(document).ready(function(){FECommon.documentOnReadyInit()}),$window.on("load",FECommon.documentOnLoadInit),$window.on("scroll",FECommon.documentOnScrollInit),$window.on("resize",function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){FECommon.documentOnResizeInit()},250)});