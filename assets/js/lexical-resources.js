$(document).ready(function() {
    $('#lexical-resources-table').DataTable({
        drawCallback: function() {
            $('[data-toggle="popover"]').popover();
        }  
    });
});
