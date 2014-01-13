$(document).ready(function() {

    /* Adding Items */
    $('input#add').keypress(function(event) {

        if (event.which == 13) {
            event.preventDefault();

            /* this tests if no text or whitespace was entered */
            if (!$.trim($(this).val())) {
                $('input#add').val('Item');
            }

            $('li#base').clone(true).appendTo('#sortable').removeAttr('id').removeClass('hidden');
            $('ul#sortable>li:last>form>span').text($('input#add').val());
            $('input#add').val("");

            var doc_height = $(document).height();
            var win_height = $(window).height();

            if (doc_height > win_height) {
                $('div#container').css('height', 'auto');
            }
        }
    });
});