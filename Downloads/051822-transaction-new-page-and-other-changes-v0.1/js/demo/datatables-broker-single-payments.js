$(document).ready(function () {
    var table = $('#broker-payments-table').DataTable({

        'columns': [{
                'data': 'id',
                'width': '5%'
            },
            {
                'data': 'Invoice',
                'width': '15%'
            },
            {
                'data': 'Date',
                'width': '15%'
            },
            {
                'data': 'Insured',
                'width': '15%'
            },
            {
                'data': 'Payments',
                'width': '15%'
            },
            {
                'data': 'Total-Paid',
                'width': '5%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#broker-invoice-slim-table").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          },
        'pagingType': 'simple',
        'responsive': true,
        'scrollX': false,
        'ordering': false,
        'autoWidth': true,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    });

    $("#broker-payments-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');


    $('#payments-header-two').removeClass("d-sm-flex").css("display", "none");
    $('#payments-header-two').removeClass("d-sm-flex").hide();

    $('#selectAllPayments').change(function () {
        $('.cb-element').prop('checked', this.checked);
    });

    $('.cb-element').change(function () {
        if ($('.cb-element:checked').length == $('.cb-element').length) {
            $('#selectAllPayments').prop('checked', false);
        } else {
            $('#selectAllPayments').prop('checked', true);
        }
    });

    $(".cb-element, #selectAllPayments").on('change', function(e) {
        console.log($('.cb-element:checked').length)
        if ($('.cb-element:checked').length > 0) {
            $('#payments-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#payments-header-two').addClass("d-sm-flex").css("display", "block");
        } else {
        $('#payments-header-one').addClass("d-sm-flex").css("display", "block");
            $('#payments-header-two').removeClass("d-sm-flex").css("display", "none");
            
        }

        if ($('.cb-element:checked').length == $('.cb-element').length) {
            $('#selectAllPayments').prop('checked', true);
        }else{
            $('#selectAllPayments').prop('checked', false);
        }
    });

});


