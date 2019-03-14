$(document).ready(function() {
	$('.quantity-selection__btn').click(function() {
		var quantity = $(this).closest('.quantity-selection').find('.quantity-selection__input').val();
		quantity = +quantity;
		if ($(this).hasClass('quantity-selection__btn_minus')) {
			if (quantity > 1) {
				quantity = quantity - 1;
				$('.quantity-selection__input').val(quantity);
			};
		};
		if ($(this).hasClass('quantity-selection__btn_plus')) {
			quantity = quantity + 1;
			$('.quantity-selection__input').val(quantity);
		}
	});
	// Запрет ввода букв
	$('.quantity-selection__input').keypress(function( b ){
        var C = /[0-9\x25\x27\x24\x23]/;
        var a = b.which;
        var c = String.fromCharCode(a);
        return !!(a==0||a==8||a==9||a==13||c.match(C));
    });
});