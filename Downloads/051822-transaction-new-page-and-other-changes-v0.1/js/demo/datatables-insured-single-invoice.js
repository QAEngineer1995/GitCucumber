$(document).ready(function () {
    var table = $('#insured-invoice-item-list').DataTable({

        'columns': [{
                'data': 'id',
                'width': '5%'
            },
            {
                'data': 'Invoice',
                'width': '12%'
            },
            {
                'data': 'Date',
                'width': '12%'
            },
            {
                'data': 'Insured',
                'width': '12%'
            },
            {
                'data': 'Payments',
                'width': '12%'
            },
            {
                'data': 'Payment',
                'width': '12%'
            },
            {
                'data': 'Total-Paid',
                'width': '5%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#insured-invoice-item-list").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
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

    $("#insured-invoice-item-list_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');


    $('#insured-invoice-item-header-two').removeClass("d-sm-flex").css("display", "none");
    $('#insured-invoice-item-header-two').removeClass("d-sm-flex").hide();

    $('#selectAllInvoiceItem').change(function () {
        $('.cb-element-one').prop('checked', this.checked);
    });

    $('.cb-element-one').change(function () {
        if ($('.cb-element-one:checked').length == $('.cb-element-one').length) {
            $('#selectAllInvoiceItem').prop('checked', false);
        } else {
            $('#selectAllInvoiceItem').prop('checked', true);
        }
    });

    $(".cb-element-one, #selectAllInvoiceItem").on('change', function(e) {
        console.log($('.cb-element-one:checked').length)
        if ($('.cb-element-one:checked').length > 0) {
            $('#insured-invoice-item-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#insured-invoice-item-header-two').addClass("d-sm-flex").css("display", "block");
        } else {
        $('#insured-invoice-item-header-one').addClass("d-sm-flex").css("display", "block");
            $('#insured-invoice-item-header-two').removeClass("d-sm-flex").css("display", "none");
            
        }

        if ($('.cb-element-one:checked').length == $('.cb-element-one').length) {
            $('#selectAllInvoiceItem').prop('checked', true);
        }else{
            $('#selectAllInvoiceItem').prop('checked', false);
        }
    });


    $('.search-user-button-one').mouseover(function() {
        if (!$('.search-user-button-one').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/blue-searchbar.svg';
            });
        }
    });

    $('.search-user-button-one').mouseout(function() {
        if (!$('.search-user-button-one').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/grey-searchbar.svg';
            });
        }
    });


    $('.search-user-list-one').hide();
    $('.search-user-button-one').on('click',
        function() {
            $('.search-user-title-one, .search-user-list-one').toggle();
            if ($('.search-user-button-one').hasClass("bg-transparent")) {
                $('.search-user-button-one').removeClass("bg-transparent").addClass("bg-primary");

                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/white-searchbar.svg';
                });
            } else {
                $('.search-user-button-one').removeClass("bg-primary").addClass("bg-transparent");
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/grey-searchbar.svg';
                });
            }
        }
    );

});

/**********************************************************************************/
$(document).ready(function () {
    var table = $('#insured-payments-list-table').DataTable({

        'columns': [{
                'data': 'id',
                'width': '6%'
            },
            {
                'data': 'Invoice',
                'width': '22%'
            },
            {
                'data': 'Date',
                'width': '22%'
            },
            {
                'data': 'Insured',
                'width': '22%'
            },
            {
                'data': 'Payments',
                'width': '22%'
            },
            {
                'data': 'Total-Paid',
                'width': '6%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#insured-payments-list-table").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
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

    $("#insured-payments-list-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');


    $('#payments-list-header-two').removeClass("d-sm-flex").css("display", "none");
    $('#payments-list-header-two').removeClass("d-sm-flex").hide();

    $('#selectAllpayments-list').change(function () {
        $('.cb-element-two').prop('checked', this.checked);
    });

    $('.cb-element-two').change(function () {
        if ($('.cb-element-two:checked').length == $('.cb-element-two').length) {
            $('#selectAllpayments-list').prop('checked', false);
        } else {
            $('#selectAllpayments-list').prop('checked', true);
        }
    });

    $(".cb-element-two, #selectAllpayments-list").on('change', function(e) {
        console.log($('.cb-element-two:checked').length)
        if ($('.cb-element-two:checked').length > 0) {
            $('#payments-list-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#payments-list-header-two').addClass("d-sm-flex").css("display", "block");
        } else {
        $('#payments-list-header-one').addClass("d-sm-flex").css("display", "block");
            $('#payments-list-header-two').removeClass("d-sm-flex").css("display", "none");
            
        }

        if ($('.cb-element-two:checked').length == $('.cb-element-two').length) {
            $('#selectAllpayments-list').prop('checked', true);
        }else{
            $('#selectAllpayments-list').prop('checked', false);
        }
    });


    $('.search-user-button-two').mouseover(function() {
        if (!$('.search-user-button-two').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/blue-searchbar.svg';
            });
        }
    });

    $('.search-user-button-two').mouseout(function() {
        if (!$('.search-user-button-two').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/grey-searchbar.svg';
            });
        }
    });


    $('.search-user-list-two').hide();
    $('.search-user-button-two').on('click',
        function() {
            $('.search-user-title-two, .search-user-list-two').toggle();
            if ($('.search-user-button-two').hasClass("bg-transparent")) {
                $('.search-user-button-two').removeClass("bg-transparent").addClass("bg-primary");

                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/white-searchbar.svg';
                });
            } else {
                $('.search-user-button-two').removeClass("bg-primary").addClass("bg-transparent");
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/grey-searchbar.svg';
                });
            }
        }
    );


});


/*******************************************************/
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

/********************************************************************************/
$(document).ready(function() {
    $('.maximize-button').mouseover(function() {
        if (!$('.maximize-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/maximize-blue.svg';
            });
        }
    });

    $('.maximize-button').mouseout(function() {
        if (!$('.maximize-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/maximize-grey.svg';
            });
        }
    });

    $('.maximize-button').click(function() {

        if ($('.maximize-hide-div:hidden').length == 0) {

            $(".maximize-hide-div").removeClass("d-flex").css("display", "none");
            $('.maximize-button').removeClass("bg-transparent").addClass("bg-primary");

            $('img', this).attr('src', function(i, oldSrc) {
                return 'img/minimize-white.svg';
            });

            $( ".maximize-button" ).each(function( index ) {
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/minimize-white.svg';
                });
            });

        } else {
            $(".maximize-hide-div").addClass("d-flex").css("display", "block");
            $('.maximize-button').removeClass("bg-primary").addClass("bg-transparent");

            $('img', this).attr('src', function(i, oldSrc) {
                return 'img/maximize-grey.svg';
            });

            $( ".maximize-button" ).each(function( index ) {
                $('img', this).attr('src', function(i, oldSrc) {
                return 'img/maximize-grey.svg';
            });
            });

        }
    });
});






