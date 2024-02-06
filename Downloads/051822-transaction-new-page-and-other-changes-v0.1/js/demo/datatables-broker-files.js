$(document).ready(function () {
    var table = $('#broker-files-table').DataTable({

        'columns': [{
                'data': 'id',
                'width': '5%'
            },
            {
                'data': 'Type',
                'width': '13%'
            },
            {
                'data': 'Name',
                'width': '25%'
            },
            {
                'data': 'Created-By',
                'width': '25%'
            },
            {
                'data': 'Created-Date',
                'width': '17%'
            },
            {
                'data': 'View',
                'width': '5%'
            },
            {
                'data': 'Download',
                'width': '5%'
            },
            {
                'data': 'Ellipsis',
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

    $("#broker-files-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');


    $('#files-header-two').removeClass("d-sm-flex").css("display", "none");
    $('#files-header-two').removeClass("d-sm-flex").hide();

    



$('#selectAllFiles').change(function () {
        $('.cb-element').prop('checked', this.checked);
    });

    $('.cb-element').change(function () {
        if ($('.cb-element:checked').length == $('.cb-element').length) {
            $('#selectAllFiles').prop('checked', false);
        } else {
            $('#selectAllFiles').prop('checked', true);
        }
    });

    $(".cb-element, #selectAllFiles").on('change', function(e) {
        console.log($('.cb-element:checked').length)
        if ($('.cb-element:checked').length > 0) {
            $('#files-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#files-header-two').addClass("d-sm-flex").css("display", "block");
        } else {
        $('#files-header-one').addClass("d-sm-flex").css("display", "block");
            $('#files-header-two').removeClass("d-sm-flex").css("display", "none");
            
        }

        if ($('.cb-element:checked').length == $('.cb-element').length) {
            $('#selectAllFiles').prop('checked', true);
        }else{
            $('#selectAllFiles').prop('checked', false);
        }
    });

});

