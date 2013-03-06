$(document).ready(function() {
    $('#container_cron').cron({
        initial: "0 0 1 1 *",
        onChange: function() {
            $('#val').text($(this).cron("value"));
        }
    });

	$("#user").bind("change paste keyup", function() {
		$('.container_user').html('\t' + $(this).val()); 
	});

	$("#inp").bind("change paste keyup", function() {
		$('.container_path').html('php\t' + $(this).val()); 
	});

	$("#log").bind("change paste keyup", function() {
		$('.container_log').html('\t>>\t' + $(this).val() + '\t2>&1'); 
	});
});