jQuery('code').each(function(){
	var text=jQuery(this).html().replace(/</g,'&lt;');
	var text=text.replace(/>/g,'&gt;');
	jQuery(this).html(text);
});
