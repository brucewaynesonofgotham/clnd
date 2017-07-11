
$('#datetimepicker1, #datetimepicker2').datetimepicker({
    format: "yyyy-MM-dd'T'HH:mm:ss",
    language: 'pt-BR'
});


function sync() {
        var time1 = $('#time1').val();
        var time2 = $('#time2').val();
        var url = '/sync/'+ time1 + '/' + time2;
        window.location = url;

};