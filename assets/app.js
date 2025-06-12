import './bootstrap.js';
import './styles/app.scss';
import './datatables';
import './article';
import './articles_list';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
import './styles/app.scss';
import 'bootstrap';
import 'datatables.net';
import 'datatables.net-bs5';

	// Initialisation globale
	document.addEventListener('DOMContentLoaded', () => {
		// Activer les tooltips Bootstrap
		const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl);
		});
	});
