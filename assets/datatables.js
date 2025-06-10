import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';
import './styles/app.scss';

$(function () {
    // Vérifier si DataTable est déjà initialisé
    if (!$.fn.DataTable.isDataTable('#articlesTable')) {
        console.log("Initialisation de DataTables...");
        $('#articlesTable').DataTable({
            ajax: "/api/articles",
            pageLength: 3,
            columns: [
                { data: 'id' },
                { data: 'title' },
                { data: 'content' },
                { data: 'createdAt' },
                {
                    data: null,
                    orderable: false,
                    searchable: false,
                    render: function (data, type, row, meta) {
                        return `
                            <div class="d-flex gap-1">
                                <a href="/blog/${row.id}" class="btn btn-theme btn-sm">Voir</a>
                                <a href="/blog/${row.id}/edit" class="btn btn-warning btn-sm">Modifier</a>
                            </div>
                        `;
                    }
                }
            ],
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.5/i18n/fr-FR.json'
            },
            responsive: true
        });
    }
});

