var csv_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTP7L5GKDjzAeSwBzu1fIz3a_kIVOv02Fgsc1-NNfd96OkisSMZvEilATMx4e0x0bT5-FEcF47uPGaN/pub?gid=33838788&single=true&output=csv';
$(document).ready(function() {
    Papa.parse(csv_url, {
        download: true,
        header: true,
        complete: function(results) {
            $('#members').DataTable( {
                data: results.data,
                order: [[ 1, 'asc' ], [ 0, 'asc' ]],
                columns: [
                    { data: 'Given Name' },
                    { data: 'Family Name' },
                    { data: 'Affiliation' },
                    { data: 'Country' },
                    { data: 'Home Page' },
                    { data: 'Interests' },
                ]
            } );
        }
    } )
} );
