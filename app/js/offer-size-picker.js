// import $ from 'jquery';

export function sizePicker() {

	// Size selection
	const sizeSelectionBtn = $('a.js-sizeSelectionBtn');
	const sizePicker = $('.js-sizeSelection');
	const sizeSelectionBtnClass = "sizeSelectionBtn";
	// const sizeSelectorContainer = $('.sizeSelectorContainer');
	
	let sizeSelected = "";
	// let isValidTMCode = false;
	
	// Do nothing if the size selection is not available
	if (!sizeSelectionBtn) return;

	sizePicker.click(function( event ) {
		const markerClass = 'sizeBlock--chosen';
		const selected = $(event.target);

		sizeSelected = selected.attr('data-sizepicker');

		selected.parent('.js-sizeSelection').siblings().children('.sizeBlock--chosen').removeClass(markerClass);
		selected.addClass(markerClass);

		// const btn = selected.parentsUntil('a.js-sizeSelectionBtn');
		// TODO: To be refactored with event deligation:
		const btnContainer = selected.parent().parent().parent().parent().parent();

		const btn = btnContainer.children('a.js-sizeSelectionBtn');
		btn.text("Continue");
		const btnDataTs = btn.attr('data-ts').split('--');
        btn.attr('data-ts', btnDataTs[0]+'--'+btnDataTs[1]+'--'+sizeSelected);
		btn.attr("data-sizepicker", sizeSelected);
		btn.removeClass(sizeSelectionBtnClass);
	});

	sizeSelectionBtn.click(function(event) {
		// event.preventDefault();

		const thisBtn = $(event.target);

		if (thisBtn.hasClass(sizeSelectionBtnClass)) {
			return false;
		}

		const sizeSelected = thisBtn.attr('data-sizepicker');
		const targetUrl = thisBtn.attr('href') + "&size=" + sizeSelected;
		thisBtn.attr('href', targetUrl);

		
		return true;
	});

	// End: Size selection

}
	