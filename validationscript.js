/**CONTACT FORM START **/
jQuery(document).ready(function(e) {
    	
	jQuery("#contact-form").on('submit',function(e){
				e.preventDefault();
				var valid;	
				valid = validateContact();
				
				if(valid) {
					$("#btnsub").attr("enable", true);
					jQuery.ajax({
					url: "requestform.php",
					type: "POST",
					data:  new FormData(this),
					contentType: false,
					cache: false,
					processData:false,
					success: function(data){
                        $("#mail-status").html(data);
						document.getElementById("contact-form").reset();
						window.location.href="thankyou.jpeg";
						/*$('#loader-icon').hide();*/
					},
					error: function(){} 
					});
				}
			
		})
});	
function validateContact() {
	var valid = true;	
	jQuery("#contact-form").css('border-color','black');
	jQuery(".info").html('');
	
	if(!jQuery("#cname").val()) {
		jQuery("#name-info").html("Please Enter Name");
		jQuery("#cname").css('border-color','red');
		valid = false;
	}
	if(!jQuery("#cname").val().match(/^[a-zA-Z\s]+$/)) {
		jQuery("#name-info").html("Please Enter Valid Name");
		jQuery("#cname").css('border-color','red');
		valid = false;
	}
	if(!jQuery("#cmobile").val()) {
		jQuery("#Mobile-info").html("Please Enter your Mobile");
		jQuery("#cmobile").css('border-color','red');
		valid = false;
	}
	if(!jQuery("#cmobile").val().match(/^[0-9]{10}$/)) {
		jQuery("#Mobile-info").html("Please Enter 10 Digit Number");
		jQuery("#cmobile").css('border-color','red');
		valid = false;
	}
	if(!jQuery("#cemail").val()) {
		jQuery("#Email-info").html("Please Enter Email");
		jQuery("#cemail").css('border-color','red');
		valid = false;
	}
	if(!jQuery("#cemail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		jQuery("#Email-info").html("Please Enter Valid Email");
		jQuery("#cemail").css('border-color','red');
		valid = false;
	}
	
	if(!jQuery("#cmessage").val())
	{
		$("#cMessage-info").html("Enter your message");
		$("#cmessage").css('border-color','#d14836');
		valid = false;
	}
	if(!jQuery("#cmessage").val().match(/^[a-zA-Z\s]+$/)) {
		jQuery("#cMessage-info").html("Please Enter Characters");
		jQuery("#cmessage").css('border-color','red');
		valid = false;
	}
	
}
$(function(){
  $('#btnsub').attr('disabled', false);
});






