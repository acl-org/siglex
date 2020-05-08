---
layout: default
title: Blog
table_script: "<script type='text/javascript' language='javascript' src='https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js'></script><script type='text/javascript' class='init'> var csv_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTP7L5GKDjzAeSwBzu1fIz3a_kIVOv02Fgsc1-NNfd96OkisSMZvEilATMx4e0x0bT5-FEcF47uPGaN/pub?gid=33838788&single=true&output=csv'; $(document).ready(function() { Papa.parse(csv_url, { download: true, header: true, complete: function(results) { $('#members').DataTable( { data: results.data, order: [[ 1, 'asc' ], [ 0, 'asc' ]], columns: [ { data: 'Given Name' }, { data: 'Family Name' }, { data: 'Affiliation' }, { data: 'Country' }, { data: 'Home Page' }, { data: 'Interests' }, ] } ); } }) } ); </script>"
---

## SIGLEX members


SIGLEX maintains a list of its members names, affiliations and research interests.
There are no dues with membership; all that is necessary is an interest in lexical issues.
If you would like to join SIGLEX, please fill out the [SIGLEX registration form](https://docs.google.com/forms/d/e/1FAIpQLSfldnrynfsqwMu_xwI-c8nxajUUeALJd9INhEPcSb8zCD-GBQ/viewform?usp=pp_url&entry.391713052=Join+the+SIGLEX+mailing+list?&entry.391713052=Display+my+member+information+(except+email)+on+the+SIGLEX+website?).

<table id="members" class="table table-striped table-bordered" style="width:100%">
  <thead>
    <tr>
      <th>Given Name</th>
      <th>Family Name</th>
      <th>Affiliation</th>
      <th>Country</th>
      <th>Home Page</th>
      <th>Interests</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
