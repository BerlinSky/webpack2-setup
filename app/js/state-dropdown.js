import $ from 'jquery';

export function initStateDropDownBox() {
	
	const countryDropDown = $('#country');
	if (countryDropDown.length > 0) { 
		updateStateInput(countryDropDown.val());
		countryDropDown.change(() => {
			updateStateInput(countryDropDown.val());
		});
	}
	
	/**
	 * make ajax call to get state from country
	 * @param country
	 * @returns
	 */
	function updateStateInput(country){

		if($("#state").length > 0){
			const curStateValue = $("#state").val();
			
			$.post(
				'/service/getstatesajax', // url
				{'country':country}, // data
				function(data){ 
					EvaluateStateResponse(data,curStateValue); 
				}, // callback
				"json" // type
			);
		}
	}
	

	/**
	 * populate dropdown select state/province
	 * @param jsonObject
	 * @param defstate
	 * @returns
	 */
	window.EvaluateStateResponse = function EvaluateStateResponse(jsonObject,defstate){
		const statelist = jsonObject;
	    
		if(statelist !== false && statelist !== null && statelist !== undefined && statelist.length!==0){

			// create new select element
			const statelists = document.createElement('select');
			statelists.id = 'state';
			statelists.name = 'U_State';
			statelists.setAttribute("required", "required");
			statelists.setAttribute("data-ts", "sel__state");

			const newoption = document.createElement('option');
			newoption.value = '';
			newoption.text = "State";
			newoption.selected = true;
			
			try{
				statelists.add(newoption,null);
			}
			catch(ex){
				statelists.add(newoption);
			}
			
			//let stateChecked=false; 
			for(const abbreviation in statelist){
				// create new option element
				const newoption = document.createElement('option');
				newoption.value = abbreviation;
				newoption.text = statelist[abbreviation];
				if(defstate == abbreviation){
					newoption.selected = true;
					
				}
				// append option element to select element
				try{
					statelists.add(newoption,null);
				}
				catch(ex){
					statelists.add(newoption);
				}
			}
			$('#state').replaceWith(statelists);
			$('#state').attr('required','required');
			$('#state').addClass('dataInput js-state');
			$('.js-state-error').html('');
			$('#state').focus();


		} else if (document.getElementById('state').tagName != 'INPUT'){

			// create new input text element

			const statelists = document.createElement('input');
			statelists.type = 'text';
			statelists.id = 'state';
			statelists.name = 'U_State';
			statelists.value = defstate;
            statelists.setAttribute("data-ts", "txt__state");
			$('#state').replaceWith(statelists);
		    //$('#state').attr('required' , "required");
			//$('#state').removeAttr('required');
			$('#state').addClass('dataInput js-state');
			$('.js-state-error').html('');
			
			$('#state').val('');
			$('#state').blur();
			$("#country").blur();
		} 
		
	}
	
}

