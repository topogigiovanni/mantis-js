/*
 * Mantis.js
 * Core - src/core.js
 */

var $ = function (selector, context) {
		return new Mantis.fn.init(selector, context);
	},
	_$,
	_Mantis,
	types = 'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
	class2type = {};

if (window) {
	_Mantis = window.Mantis;
	_$ = window.$;

	$.noConflict = function (deep) {
		if (window.$ === $) {
			window.$ = _$;
		}

		if (deep && window.Mantis === $) {
			window.Mantis = _Mantis;
		}

		return $;
	};
}

function Mantis (nodes) {
	var i;

	nodes = nodes || [];

	for (i = 0; i < nodes.length; i++) {
		this[i] = nodes[i];
	}

	this.length = nodes.length;
	this.selector = nodes.selector;
	this.context = nodes.context;
}

Mantis.fn = Mantis.prototype = {
	constructor: Mantis,
	version: '0.0.0',
	selector: '',
	length: 0
};

$.fn = Mantis.fn;

Mantis.fn.init = function (selector, context) {
	var nodes;

	if (!selector) {
		return this;
	}

	context = context || document;

	if (typeof selector === 'string') {
		nodes = context.querySelectorAll(selector);
	} else if (selector.length) {
		nodes = selector;
	} else {
		nodes = [selector];
	}

	nodes.selector = selector;
	nodes.context = context;

	return new Mantis(nodes);
};

Mantis.fn.init.prototype = Mantis.fn;
