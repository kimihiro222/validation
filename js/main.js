$(function() {
	$('form').on('submit', function(e) {

		//エラー初期化
		$('.error').remove();

		//必須項目の未入力チェック
		$('.required').each(function() {
			if($(this).val() == '') {
				$(this).parent().append('<span class="error">未入力です</span>');
				return e.preventDefault();
			}
		});

		//ID4桁かチェック　数字のみ
		var id = $('input[name="id"]');
		if(id.val() !== '') {
			if(id.val().length !== 4　|| id.val().match(/[^0-9]+/)) {
				id.parent().append('<span class="error">4桁の数字で入力してください</span>');
				return e.preventDefault();
			}
		}

		//郵便番号チェック　数字のみ ハイフンを強制的に削除
		var postnumber = $('input[name="postnumber"]');
		if(postnumber.val() !== '') {
			postnumber.val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
			if(postnumber.val() !== '') {
				if(postnumber.match(/^\d+\-\d+$/)) {
					postnumber.parent().append('<span class="error">6桁の数字で入力してください</span>');
					return e.preventDefault();
				}
			}
		}

		//電話番号チェック　数字のみ ハイフンを強制的に削除
		var tel = $('input[name="tel"]');
		if(tel.val() !== '') {
			tel.val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
			if(tel.val().match(/[^0-9]+/)) {
				tel.parent().append('<span class="error">数字で入力してください</span>');
			}
		}

		//メールアドレスチェック
		var mail = $('input[name="mail"]');
		if(mail.val() !== '') {
			if(!mail.val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
				mail.parent().append('<span class="error">正しく入力してください</span>');
			}
		}


	});

});
