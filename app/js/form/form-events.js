import $ from 'jquery';

import { currentForm, formKey, formOptionList, formInputList, formInputStatusList } from "./form-data";
import { validateInput, validateInputList } from "./form-validation";

export const formValidationEvents = () => {

  $(currentForm).attr('novalidate', 'novalidate');

  formOptionList.change(function(event) {
    const thisInput =$( event.target );
    validateInput(formKey, thisInput);
  })

  $(formInputList).keyup(function(event) {
    const thisInput =$( event.target );
    validateInput(formKey, thisInput);
  })

	$(currentForm).submit(function( event ) {
		validateInputList(formKey, formInputList);

    const submitBtn = $(this).find('.js-submitButton');

    if (formInputStatusList().length > 0) {
      submitBtn.attr('disabled','false');
      submitBtn.removeAttr('disabled');
      event.preventDefault();
    }
    else {
      submitBtn.attr('disabled','true');
    }

    // enalbeSubmitBtn(submitBtn);

    // const enalbeSubmitBtn = () => {
    //   console.log("button");
    //   submitBtn.removeAttr('disabled');
    // }

    // setTimeout(enalbeSubmitBtn, 3000);

	});
}



