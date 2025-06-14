import $ from 'jquery';

window.$ = $;
window.jQuery = $;

document.addEventListener('DOMContentLoaded', function () {
    $('.like-btn').on('click', function (e) {
        e.preventDefault();

        const button = $(this);
        const id = button.data('id');
        const type = button.data('type');

        if (!id || !type) {
            console.error('ID ou type manquant');
            return;
        }

        button.prop('disabled', true);

        $.ajax({
            url: `/like/${type}/${id}`,
            type: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            success: function (data) {
                console.log('Réponse reçue:', data);

                button.find('span').text(data.likesCount);
            },
            error: function (xhr, status, error) {
                console.error('Erreur AJAX:', error);
                if (xhr.status === 401) {
                    alert('Vous devez être connecté pour liker.');
                } else {
                    alert('Erreur inconnue.');
                }
            },
            complete: function() {
                button.prop('disabled', false);
            }
        });
    });
});
