!function(win,doc,html){
// JavaScript
	html.className = html.className.replace(/\bno-js\b/,'js');

// Fonts
	+function(){
		var fn = function(){
			html.className += ' font-loaded';
		};
		if(!!doc.fonts) {
			var fonts = ['Open Sans','Open Sans Condensed','Source Code Pro'];
			for(var i = 0, j = fonts.length; i < j; i++) doc.fonts.load('1em ' + fonts[i]);
			doc.fonts.ready.then(fn);
		} else {
			if(win.addEventListener) win.addEventListener('load',fn,false);
			else win.attachEvent('onload',fn);
		}
	}();

}(window,document,document.documentElement || document.getElementsByTagName('html')[0]);