jQuery toggleControl
=====

This is a (very) simple plugin that allows you to make any element on a web-page unobtrusively collapsable. It's something I find I end up doing quite a lot to clean up busy pages and hide away non-essential information, so I decided to write a jQuery plugin to do the hard work for me...

Usage
-----

Using the plugin is pretty simple:

	$('clickable element(s)').toggleControl( 'collapsable element(s)', options );

i.e. The following would make a title, control the toggling of a box of text (like this page)

	$('#description-title').toggleControl('#description-body');

or you can use it to act on a series of paired elements - i.e. fieldsets in a form

	$('fieldset.toggleable legend').toggleControl('fieldset.toggleable div');

These are the configurable options (passed in a JSON string):

<dl>
	<dt><strong>hide</strong>: [true/false]</dt>
	<dd>Hide the toggle-able element on page load, (default action is <strong>true</strong>).</dd>
	<dt><strong>animateInit</strong>: [true/false]</dt>
	<dd>Use animations to perform the initial hide on page load, (default action is <strong>false</strong> - NO animation).</dd>
	<dt><strong>speed</strong>: ['slow'/'normal'/'fast' etc.]</dt>
	<dd>The speed of the sliding animations, (default setting is <strong>'normal'</strong>).</dd>
	<dt><strong>event</strong>: ['click'/'mouseover' etc.]</dt>
	<dd>The event to observe for to fire the toggleControl, (default is <strong>'click'</strong>).</dd>
	<dt><strong>openClass</strong></dt>
	<dd>The CSS class for the control to take when its action is to 'open' the content, (default is <strong>'toggle-open'</strong>).</dd>
	<dt><strong>closeClass</strong></dt>
	<dd>The CSS class for the control to take when its action is to 'close' the content, (default is <strong>'toggle-close'</strong>).</dd>
</dl>

