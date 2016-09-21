!function(win,doc,nav,html){
// JavaScript active ?
	html.className = html.className.replace(/\bno-js\b/,'js');

// Old IE ?
/*@cc_on
	html.className += ' oldIE';
	if(!doc.documentMode) doc.documentMode = parseFloat(nav.userAgent.match(/MSIE ([0-9]+(\.[0-9]+)?)/)[1]);
	if(doc.documentMode < 9) html.className += ' lte-ie8';
	if(doc.documentMode < 8) {
		html.className += ' lte-ie7';
		win.attachEvent('onload',function(){
			doc.getElementById('crlf-bar').innerHTML = '/ ';
			doc.getElementById('at').innerHTML = '@';
		})
	}
	if(doc.documentMode < 7) html.className += ' lte-ie6';
@*/

// Supports SVG ?
	if(!document.implementation || !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) setTimeout(function(){
		var img = new Image(1,1);
		img.onerror = function () {
			html.className += ' no-svg';
		};
		img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==';
	},0);

// Fonts are loaded ?
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

}(window,document,navigator,document.documentElement);

window.onload = function(){
	var email = document.getElementById('at').parentNode.innerHTML.replace(/<span.*\/span>/,'@');
	var endereco1 = document.getElementById('at').parentNode.parentNode;
	var c = document.getElementById('at').parentNode.cloneNode(true); 
	var a = document.createElement('a');
	a.appendChild(c);
	a.href = 'mailto:' + email;
	endereco1.replaceChild(a,document.getElementById('at').parentNode); 
}