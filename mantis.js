/*!
 * Mantis.js
 * http://mantisjs.com
 *
 * Copyright 2013 - 2015 Acaua Montiel
 * Released under the MIT license (http://acaua.mit-license.org)
 */

(function(root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Mantis = factory();
	}
})(this, function() {
	'use strict';
	var Mantis;



	return Mantis;
});