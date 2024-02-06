$(document).ready(function() {
    $('#broker-table').DataTable({
        "columnDefs": [{
                "targets": "0"
            },
            {
                "targets": "1"
            },
            {
                "targets": "2"
            },
            {
                "targets": "3"
            },
            {
                "targets": "4"
            },
            {
                "targets": "5"
            }
        ],
        "pagingType": "simple",
        "responsive": true,
        'scrollX': true,
        'ordering': false,
        language: {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    });

    $("#broker-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');

});

$('#selectAll').change(function() {
    $('.cb-element').prop('checked', this.checked);
});

$('.cb-element').change(function() {
    if ($('.cb-element:checked').length == $('.cb-element').length) {
        $('#selectAll').prop('checked', true);
    } else {
        $('#selectAll').prop('checked', false);
    }
});



/*$('#broker-expanded-view').on('click', function() {
    $('#broker-table').data('view', 'expand_view');
    $('.brokerexpandview').removeClass("d-none");
    $("#broker-expanded-view img").attr("src", "img/view-two.svg");
    $("#broker-compact-view img").attr("src", "img/view-one.svg");
    $('#broker-expanded-view').addClass("da_026").removeClass("da_027");
    $('#broker-compact-view').removeClass("da_026").addClass("da_027");

});*/
$('#broker-compact-view').on('click', function() {
    if($('#broker-table').data('view') == 'collapse_view'){
        $('#broker-table').data('view', 'expand_view');
    $('.brokerexpandview').removeClass("d-none");
    
    $("#broker-compact-view img").attr("src", "img/view-two.svg");
    $('#broker-compact-view').removeClass("da_026").addClass("da_027");
    }
    else{
       $('#broker-table').data('view', 'collapse_view');
        $('.brokerexpandview').addClass("d-none");
        $("#broker-compact-view img").attr("src", "img/view-one-blue.svg");
    $('#broker-compact-view').removeClass("da_026").addClass("da_027");
    }
    

});


/*$('#broker-expanded-view').mouseover(function() {
    if ($('#broker-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two.svg';
        });
    }
});*/

/*$('#broker-expanded-view').mouseout(function() {
    if ($('#broker-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two-grey.svg';
        });
    }
});*/


$('#broker-compact-view').mouseover(function() {
    if ($('#broker-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one-blue.svg';
        });
        $("#broker-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two.svg';
        });
        $("#broker-compact-view").attr('title', 'Regular view');
    }
});

$('#broker-compact-view').mouseout(function() {
    if ($('#broker-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one.svg';
        });
        $("#broker-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two-grey.svg';
        });
        $("#broker-compact-view").attr('title', 'Regular view');
    }
});


$(document).ready(function() {
    $('#broker-contact').DataTable({
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
            $("#broker-contact").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });



    $('#broker-notes').DataTable({
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
            $("#broker-notes").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });

   /* $('#broker-additional-information').DataTable({
        "paginate": false,
        "ordering": false,
        "searching": false,
        "info": false,
        "autoWidth": false,
        'scrollX': false,
        "columns": [{
                width: '33%'
            },
            {
                width: '33%'
            },
            {
                width: '33%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#broker-additional-information").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });

   $('#broker-company').DataTable({
        "paginate": false,
        "ordering": false,
        "searching": false,
        "info": false,
        "autoWidth": false,
        'scrollX': true,
        "columns": [{
                width: '45%'
            },
            {
                width: '50%'
            },
            {
                width: '5%'
            }
        ],
        "initComplete": function (settings, json) {  
            $("#broker-company").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          }
    });*/


});