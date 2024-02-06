$(document).ready(function() {
    $('#insured-contact').DataTable({
        "paginate": false,
        "ordering": false,
        "searching": false,
        "info": false,
        "autoWidth": true,
        "scrollX": false,
        "columns": [{
                width: '21%'
            },
            {
                width: '21%'
            },
            {
                width: '21%'
            },
            {
                width: '21%'
            },
            {
                width: '6%'
            },
            {
                width: '10%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#insured-contact").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });

    /*************************************************/



    $('#insured-notes').DataTable({
        "paginate": false,
        "ordering": false,
        "searching": false,
        "info": false,
        "autoWidth": false,
        'scrollX': false,
        "columns": [{
                width: '90%'
            },
            {
                width: '5%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#insured-notes").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });
    /************************************************************/
    $(function () {
            var availableTags = [
              "USA",
              "Pakistan",
              "Russia",
              "Afghanistan",
              "Rush"
            ];
            $("#search_input").autocomplete({
                source: availableTags
            });
        });
    });


