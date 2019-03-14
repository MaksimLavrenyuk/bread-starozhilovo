$(document).ready(function() {
        $('.js-ad-goods').click(function() {
            var goodsID = $(this).closest('[data-product-id]').data('product-id');
            var goodsQuantity = $(this).closest('.order-box__interaction').find('.quantity-selection__input').val();
            var width = $(this).css("width");
            var height = $(this).css("height");
            if (goodsQuantity === undefined) {
                goodsQuantity = 1;
            }
            $.ajax({

                beforeSend: $.proxy(function() {
                    $(this).css('min-width', '' + width + '');
                    $(this).css('height', '' + height + '');
                    $(this).text("");
                    $('<img class="preloader" src="dist/img/preloader.svg" alt="preloader">').appendTo($(this));
                }, this),

                type: 'POST',
                url: 'dist/server/goods.php',
                data: {
                    "goodsQuantity": goodsQuantity,
                    "goodsID": goodsID // id товара
                },
                dataType: 'json',

                success: $.proxy(function(data) {
                	$(this).html('');
                	$(this).text('Добавлено');
                	$(this).prop('disabled', true);

                }, this),

                error: function(text) {

                    alert('Ошибка при отправке данных на сервер');

                }
            });
        });
});