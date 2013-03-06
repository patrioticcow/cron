$(document).ready(function() {
    $('#container_cron').cron({
        initial: "0 0 1 1 *",
        onChange: function() {
            $('#val').text($(this).cron("value"));
        }
    });

    var con = ">";

    $("select").change(function(){
    	var data = $("#repeat").val();
        $('#con').html(data);
    	con = data;
    });

    $("#email").bind("change paste keyup", function() {
        var val = $(this).val();
        var contEmail = $('.container_email');
        if(val === ''){
            contEmail.html(''); 
        } else {
            contEmail.html('MAILTO="' + $(this).val() + '"'); 
        }
        
    });

	$("#user").bind("change paste keyup", function() {
		$('.container_user').html('\t' + $(this).val()); 
	});

	$("#inp").bind("change paste keyup", function() {
		$('.container_path').html('php\t' + $(this).val()); 
	});

	$("#log").bind("change paste keyup", function() {
		$('.container_log').html('\t<span id="con">' + con + '</span>\t' + $(this).val() + '\t2>&1'); 
	});
});