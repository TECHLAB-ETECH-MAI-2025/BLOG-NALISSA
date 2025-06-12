import $ from 'jquery';
window.$ = $;
window.jQuery = $;

document.addEventListener('DOMContentLoaded', function () {
    $('.like-btn').on('click', function (e) {
        e.preventDefault();

        const btn = $(this);
        const targetId = btn.data('id');
        const targetType = btn.data('type'); // article ou comment

        if (!targetId || !targetType) {
            console.error('ID ou Type manquant');
            return;
        }

        btn.prop('disabled', true);

        $.ajax({
            url: `/like/${targetType}/${targetId}`,
            type: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function (data) {
                btn.find('span').text(data.likesCount);
            },
            error: function (xhr) {
                if (xhr.status === 401) {
                    alert("Vous devez être connecté pour liker.");
                } else {
                    alert("Une erreur s'est produite.");
                }
            },
            complete: function () {
                btn.prop('disabled', false);
            }
        });
    });
});
