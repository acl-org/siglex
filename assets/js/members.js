function alertError(response) {
    alert(JSON.stringify(response, null, 2));
}

$(document).ready(function () {
    gapi.load('client:auth2', function () {
        gapi.client.init({
            apiKey: 'AIzaSyALPKC_2dJ9QNBKQAHnKI8PtfUhhGkKzmQ',
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
            scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
        }).then(function () {
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: '1miHr4lkpVXYS_wPr_-kSua1NZQFB8uP6WE0EyiSJ-E8',
                range: 'SIGLEX!A2:G',
            }).then(function (response) {
                var givenName = 0;
                var familyName = 1;
                var affiliation = 2;
                var country = 3;
                var homePage = 4;
                var interests = 5;
                var sections = 6;
                var table = $('#members').DataTable({
                    dom: "lrtip",
                    orderCellsTop: true,
                    data: response.result.values,
                    columns: [
                        {
                            data: 'Name', render: function (data, type, row, meta) {
                                var name = row[familyName] + ", " + row[givenName];
                                if (row[homePage]) {
                                    var homepage = row[homePage];
                                    if (! homepage.startsWith("http")) {
                                        homepage = "http://" + homepage;
                                    }                                    
                                    name = '<a href="' + homepage + '">' + name + '</a>';
                                }
                                return name;
                            }
                        },
                        { data: affiliation, defaultContent: "" },
                        { data: country, defaultContent: "" },
                        { data: sections, defaultContent: "" },
                        { data: interests, defaultContent: "" },
                    ],
                    initComplete: function () {
                        $('#members thead tr th input').on('keyup change clear', function () {
                            table
                                .column($(this).parent().index())
                                .search(this.value)
                                .draw();
                        });
                    },
                });
                $("#waiting").hide();
            }, alertError);
        }, alertError);
    });
});
