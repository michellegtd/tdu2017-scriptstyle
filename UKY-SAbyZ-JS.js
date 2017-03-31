/*Custom Javascript
Alexander Aston Zapata
az.alexander@uky.edu
Last Updated: 3/30/17
UKY Studio Abroad Custom jQuery
*/

$(document).ready(function () {
	//Makes the page a fluid smooth scroll when going Back to top instead of jumping to top
	$('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 600);
			return false;
	});
		
	//Enables the Tooltip component within Bootstrap
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	//Checks if user clicked the login link from the UK EA page, if so, then launches login modal
	if(window.location.href.indexOf("#UKWebsite") > -1) {
		$('#myModal').modal('show');
	};
	//Alerts users of known issue so that they are not detered from applying because of error page
	if(window.location.href.indexOf("Portal.requiredInfo") > -1) {
		//alert("WARNING: There is a known issue when new users try to input required emergency contact that will result in an error page upon submit. Please contact education abroad at educationabroad@uky.edu with subject line: Required Info Error about this issue to continue with your application process. We apologize for any inconvenience this may cause.");
					
		//hide fax field with 20 character limit so that users won't get error
		$('label[for="txtFax"]').hide();
			
		$("input[name='User_Fax_1000']").hide();
		$("input[name='User_Fax_1008']").hide();
		$("input[name='User_Fax_1004']").hide();
	};
		
	//Add directions on how to access an application on the student home profile page
	if(window.location.href.indexOf("Students.Home&RequiredProfile") > -1) {
		
		$('.panel-primary').children(':eq(0)').after('<div id="student_app_instructions" class="well">Click on the application name below to complete or view your application.</div>');
		
	};
		
	// Add a big easy submit button fixed to bottom of page so that you don't have to scroll after parameters are set
	if(window.location.href.indexOf("StudentAdmin.SearchWizard_2&FromSearch") > -1 || window.location.href.indexOf("StudentAdmin.SearchWizard_2&Search_ID") > -1) {
		
		//create submit search button
		$('form').after('<button id="btm_search" title="Search" name="btnSubmit" type="submit" class="btn btn-primary">Search</button>');
		
		//add submit capability to form since its outside of form element
		$("#btm_search").click( function() {
			$("form[name='formAdvancedSearch']").submit();
		});

		
	};
	
	//Copys the last row of table (holds count) and makes it the first row on table
	if(window.location.href.indexOf("StudentAdmin.SearchWizard_3&Search_ID") > -1 || window.location.href.indexOf("Administration.SavedSearch&Search_ID") > -1) {
	
		//only pull last row if grouped by applicant
		if($("a[onclick*='user_name']").parent().hasClass( 'active' ) == true){


			//find last row and copy its content
			var row = $('.panel-primary table tbody tr:last').html();
		
			//add new row as the first row with contents of last row
			$('.panel-primary table tbody').prepend('<tr>'+row+'</tr>');
	
	
		};
	};
	
	//Add locator search button & link to page body content page actions on admin homepage
	if(window.location.href.indexOf("Administration.Home&RequiredProfile") > -1 || window.location.href.indexOf("Portal.Home&RequiredProfile") > -1) {
		
		//Add Locator Search button to admin home page on md+ devices
		$('#pagebodycontentpageactions').children(':eq(0)').prepend('&nbsp;<a type="button" class="btn btn-primary home_locator_btn" href="index.cfm?FuseAction=StudentAdmin.SearchRisk&amp;" title="Locator Search">Locator Search</a>');
		
		//Add Locator Search button to admin homepage on sm & xs devices
		$('#pagebodycontentpageactions').children(':eq(1)').prepend('&nbsp;<a type="button" class="btn btn-primary home_locator_btn" href="index.cfm?FuseAction=StudentAdmin.SearchRisk&amp;" title="Locator Search">Locator Search</a>&nbsp;');
		
		//Add Locator Search link within options dropdown menu on sm & xs devices
		$('#pagebodycontentpageactions ul').prepend('<li><a href="index.cfm?FuseAction=StudentAdmin.SearchRisk&amp;" title="Locator Search">Locator Search</a></li> ');
		
				
	};
	
	
	
});//End document ready 
