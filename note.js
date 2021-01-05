$(document).ready(function()
{
	$("button").click(function()
	{
		var user = $("#user").val();
		var pswd = $("#password").val();
		$.post( "login.php",
				{"user":user,"password":pswd}, 
				function( data, status ) {
			var obj = JSON.parse(data);
			console.log(data);
			console.log(obj);
			console.log(obj.val);
			console.log(obj.message);
			
			if(obj.val != 1) $("#response").html(obj.message);
			else $("#response").html("");
		});
	});
});