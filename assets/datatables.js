import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';

$(function () {
    console.log("Initialisation de DataTables...");
    $('#articlesTable').DataTable({
        ajax: "{{ path('api_articles') }}",
        columns: [
            { data: 'id' },
            { data: 'title' },
            { data: 'content' },
            { data: 'createdAt' }
            // { data: 'actions' }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json'
        },
        responsive: true
    });
});
