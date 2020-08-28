$(document).ready(function() {
    var table = $('#events').DataTable({
        order: [[ 0, "desc" ]],
        dom: "lrtip",
        orderCellsTop: true,
        initComplete: function () {
            $('#events thead tr th input').on('keyup change clear', function () {
                table
                    .column($(this).parent().index())
                    .search(this.value)
                    .draw();
            });
        },
    });
} );
