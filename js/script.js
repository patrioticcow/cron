$(document).ready(function() {

    var container   = $('.container_cron');
    var setup       = "";
    var con         = ">";
    var minute      = $('#minute');
    var hour        = $('#hour');
    var day         = $('#day');
    var month       = $('#month');
    var weekday     = $('#weekday');

    $("#common_options").change(function(){
    	setup = $("#common_options").val();

        var split = setup.split(" ");
        minute.val(split[0]);
        hour.val(split[1]);
        day.val(split[2]);
        month.val(split[3]);
        weekday.val(split[4]);

        container.html(setup + '\t');
    });

    $("#minute_options").change(function(){
        setup = $("#minute_options").val();
        minute.val(setup);
    });

    $("#hour_options").change(function(){
        setup = $("#hour_options").val();
        hour.val(setup);
    });

    $("#day_options").change(function(){
        setup = $("#day_options").val();
        day.val(setup);
    });

    $("#month_options").change(function(){
        setup = $("#month_options").val();
        month.val(setup);
    });

    $("#weekday_options").change(function(){
        setup = $("#weekday_options").val();
        weekday.val(setup);
    });

    $("#repeat").change(function(){
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

    $('#set_time').on("click", function(){
        if (minute.val() === ''){
            alert('Minute is empty');
        } else if (hour.val() === '') {
            alert('Hour is empty');
        } else if (day.val() === '') {
            alert('Day is empty');
        } else if (month.val() === '') {
            alert('Month is empty');
        } else if (weekday.val() === '') {
            alert('Weekday is empty');
        } else {
            container.html(minute.val() + ' ' + hour.val() + ' ' + day.val() + ' ' + month.val() + ' ' + weekday.val() + '\t');
        }
    });

});