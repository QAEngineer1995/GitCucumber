$(document).ready(function () {
    var table = $('#accounting-single-invoice-table').DataTable({

        'columns': [
            {
                'data': 'Invoice',
                'width': '6%',
                'orderable': true,
                'targets': 0
            },
            {
                'data': 'Date',
                'width': '18.8%',
                'orderable': true,
                'targets': 1
            },
            {
                'data': 'Insured',
                'width': '18.8%',
                'orderable': true,
                'targets': 2
            },
            {
                'data': 'Payments',
                'width': '18.8%',
                'orderable': true,
                'targets': 3
            },
            {
                'data': 'Payment',
                'width': '18.8%',
                'orderable': true,
                'targets': 4
            },
            {
                'data': 'Total-Paid',
                'width': '5%',
                'orderable': true,
                'targets': 5
            }
        ],
        "initComplete": function (settings, json) {  
            $("#accounting-single-invoice-table").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          },
        'pagingType': 'simple',
        'responsive': true,
        'scrollX': false,
        'ordering': true,
        'autoWidth': true,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    });

    $("#accounting-single-invoice-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');

});    