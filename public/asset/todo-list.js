$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        var item = $('form input');
        var todo = { item: item.val().trim()};

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        // var item = $(this).text().trim().replace(/ /g, "-");
        var itemId = $(this).attr("id");
        // alert(itemId);
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + itemId,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});