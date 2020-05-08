var csv_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTP7L5GKDjzAeSwBzu1fIz3a_kIVOv02Fgsc1-NNfd96OkisSMZvEilATMx4e0x0bT5-FEcF47uPGaN/pub?gid=33838788&single=true&output=csv';
$(document).ready(function() {
    Papa.parse(csv_url, {
        download: true,
        header: true,
        complete: function(results) {
            $('#members').DataTable( {
                data: results.data,
                columns: [
                    { data: 'Name', render : function ( data, type, row, meta ) { 
                        var name = row["Family Name"] + ", " + row["Given Name"];
                        if (row["Home Page"]) {
                            name = '<a href="' + row["Home Page"] + '">' + name + '</a>';
                        }
                        return name;
                    } },
                    { data: 'Affiliation' },
                    { data: 'Country' },
                    { data: 'Interests' },
                ],
            } );
        }
    } )
} );
