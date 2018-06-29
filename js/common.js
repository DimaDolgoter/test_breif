 $(function () {  //скрипт для анимации наведения кнопки отправки формы
 	$('button')
 		.on('mouseenter', function (e) {
 			var parentOffset = $(this).offset(),
 				relX = e.pageX - parentOffset.left,
 				relY = e.pageY - parentOffset.top;
 			$(this).find('span').css({
 				top: relY,
 				left: relX
 			})
 		})
 		.on('mouseout', function (e) {
 			var parentOffset = $(this).offset(),
 				relX = e.pageX - parentOffset.left,
 				relY = e.pageY - parentOffset.top;
 			$(this).find('span').css({
 				top: relY,
 				left: relX
 			})
 		});
 	$('[href=#]').click(function () {
 		return false
 	});
 });

 //для автоматического растягивания textarea начало
 function flexibleTextarea() {   
 	var _txt = document.getElementById('goal-text'); 
 	var _minRows = 1; // минимальное количество строк (высота поля)
 	if (_txt) {
 		// функция расчета строк
 		function setRows() {
 			_txt.rows = _minRows; // минимальное количество строк
 			// цикл проверки вместимости контента
 			do {
 				if (_txt.clientHeight != _txt.scrollHeight) _txt.rows += 1;
 			} while (_txt.clientHeight < _txt.scrollHeight);
 		}
 		setRows();
 		_txt.rows = _minRows;
 		// пересчет строк в зависимости от набранного контента
 		_txt.onkeyup = function () {
 			setRows();
 		}
 	}
 }
 if (window.addEventListener)
 	window.addEventListener("load", flexibleTextarea, false);
 else if (window.attachEvent)
 	window.attachEvent("onload", flexibleTextarea);
 //для автоматического растягивания textarea конец

//обработка события, если в поле есть текст, то подпись не опускается
 $('#goal-text ').focusout(function () {
 	if ($(this).val()) {
 		$('#goal-text + .legend').css("bottom", "100%");
 	}
 });


//обработка события, если в поле есть текст, то подпись не опускается
 $(' .breif__contact__wrap__div input').focusout(function () {
 	if ($(this).val()) {
 		$(this).parents(".breif__contact__wrap__div").find(".legend").css("bottom", "100%");  
 	}
 });