$(document).ready(function() {
    $('#content').load('content/home.php');
    $('ul#nav li a').click(function() {
        var page = $(this).attr('href');
        $('#content').load('content/' + page + '.php');
        return false;
    });
});


$('form.ajax').on('submit', function(){
    var that = $(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};

    that.find('[name]').each(function(index, value){
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
    });

    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response){
            console.log(response);
        }
    });
});