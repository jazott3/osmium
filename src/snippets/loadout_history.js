toggle_revision_delta = function(li) {
	if(li.hasClass('hidden')) {
		li.find('p > a.toggle').text("hide diff");
		li.find('pre').fadeIn(500);
	} else {
		li.find('p > a.toggle').text("show diff");
		li.find('pre').hide();
	}

	li.toggleClass('hidden');
}

$(function() {
	$("ol#lhistory > li > p > small.anchor").before("<a href='javascript:void(0);' class='toggle'>show diff</a> ");
	$("ol#lhistory > li > pre").hide();
	$("ol#lhistory > li").addClass('hidden');
	$("ol#lhistory > li > p > a.toggle").last().remove();

	var first = $("ol#lhistory > li").first();
	first.find('pre').show();
	toggle_revision_delta(first);

	$('ol#lhistory > li > p > a.toggle').click(function() {
		toggle_revision_delta($(this).parent().parent());
		$(this).blur();
	});
});
