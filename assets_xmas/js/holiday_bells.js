jQuery(function(){function e(e){return $.browser.msie?window[e]:document[e]}function n(e){e.className.indexOf("b-ball__right")>-1&&(e=e.parentNode);var n=/b-ball_n(\d+)/.exec(e.className),o=/b-head-decor__inner_n(\d+)/.exec(e.parentNode.className);n&&o&&(n=parseInt(n[1],10)-1,o=parseInt(o[1],10)-1,t((n+9*o)%s))}function o(e){function n(){function e(){function e(){function e(){o.removeClass("bounce3")}o.removeClass("bounce2").addClass("bounce3"),setTimeout(e,300)}o.removeClass("bounce1").addClass("bounce2"),setTimeout(e,300)}o.removeClass("bounce").addClass("bounce1"),setTimeout(e,300)}var o=jQuery(e);e.className.indexOf(" bounce")>-1||(o.addClass("bounce"),setTimeout(n,300))}var t=function(){};jQuery(document).delegate(".b-ball_bounce","mouseenter",function(){n(this),o(this)}).delegate(".b-ball_bounce .b-ball__right","mouseenter",function(e){e.stopPropagation(),n(this),o(this)}),window.flashInited=function(){t=function(n){try{e("z-audio__player").playSound(n)}catch(o){}}},window.swfobject&&window.setTimeout(function(){$("body").append('<div class="g-invisible"><div id="z-audio__player"></div></div>'),f()},100);for(var a=["1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","\\"],i=["z","x","c","v","b","n","m",",",".","/"],s=36,u={},c=0,d=a.length;d>c;c++)u[a[c].charCodeAt(0)]=c;for(var c=0,d=i.length;d>c;c++)u[i[c].charCodeAt(0)]=c;jQuery(document).keypress(function(e){var n=$(e.target);!n.is("input")&&e.which in u&&t(u[e.which])})});