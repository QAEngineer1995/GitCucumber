function format(d) {
    return '<table width="100%" class="expandedDatatable">' +
    '<thead>'+
        '<tr class="h-100">' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Title</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Premium</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Eff Date</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Activities</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">View Details</th>' +
        '</tr>' +
        '</thead>'+
        '<tbody>'+
        '<tr class="h-100">' +
        '<td class="py-2 align-middle">What is Lorem Ipsum Lorem Ipsum</td>' +
        '<td class="py-2 align-middle">$2000</td>' +
        '<td class="py-2 align-middle">03/05/20</td>' +
        '<td class="py-2 align-middle">2</td>' +
        '<td class="py-2 align-middle"><button class="bg-transparent border-0"><img src="img/eye-open-blue.svg"/></button></td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 align-middle">What is Lorem Ipsum Lorem Ipsum</td>' +
        '<td class="py-2 align-middle">$2000</td>' +
        '<td class="py-2 align-middle">03/05/20</td>' +
        '<td class="py-2 align-middle">2</td>' +
        '<td class="py-2 align-middle"><button class="bg-transparent border-0"><img src="img/eye-open-blue.svg"/></button></td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 align-middle">What is Lorem Ipsum Lorem Ipsum</td>' +
        '<td class="py-2 align-middle">$2000</td>' +
        '<td class="py-2 align-middle">03/05/20</td>' +
        '<td class="py-2 align-middle">2</td>' +
        '<td class="py-2 align-middle"><button class="bg-transparent border-0"><img src="img/eye-open-blue.svg"/></button></td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 align-middle">What is Lorem Ipsum Lorem Ipsum</td>' +
        '<td class="py-2 align-middle">$2000</td>' +
        '<td class="py-2 align-middle">03/05/20</td>' +
        '<td class="py-2 align-middle">2</td>' +
        '<td class="py-2 align-middle"><button class="bg-transparent border-0"><img src="img/eye-open-blue.svg"/></button></td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 align-middle">What is Lorem Ipsum Lorem Ipsum</td>' +
        '<td class="py-2 align-middle">$2000</td>' +
        '<td class="py-2 align-middle">03/05/20</td>' +
        '<td class="py-2 align-middle">2</td>' +
        '<td class="py-2 align-middle"><button class="bg-transparent border-0"><img src="img/eye-open-blue.svg"/></button></td>' +
        '</tr>' +
        '<tbody>'+
        '</table>';
}

$(document).ready(function () {
    var table = $('#dashboard-table').DataTable({

        'columns': [{
                'data': '1',
                'width': '5%'
            },
            {
                'data': '2',
                'width': '4%'
            },
            {
                'data': '3',
                'width': '23%'
            },
            {
                'data': '4',
                'width': '13%'
            },
            {
                'data': '5',
                'width': '9%'
            },
            {
                'data': '6',
                'width': '17%'
            },
            {
                'data': '7',
                'width': '13%'
            },
            {
                'data': '8',
                'width': '5%'
            },
            {
                'data': '9',
                'width': '5%'
            },
            {
                'data': '10',
                'width': '3%'
            },
            {
                'data': '11',
                'width': '3%'
            }
        ],
        'pagingType': 'simple',
        'responsive': false,
        'scrollX': true,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>',
        
        "initComplete": function (settings, json) {  
            $("#dashboard-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");            
          }
    });

    $("#dashboard-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');

    $('#dashboard-table tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            if ($('#dashboard-table').data('view') == 'collapse_view') {
                tr.find(".expandview").addClass("d-none");
            }


        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
            if ($('#dashboard-table').data('view') == 'collapse_view') {
                tr.find(".expandview").removeClass("d-none");
            }

        }
    });


/*    $('#expanded-view').on('click', function () {
        $('#dashboard-table').data('view', 'expand_view');
        $('.expandview').removeClass("d-none");
        $("#expanded-view img").attr("src", "img/view-two.svg");
        $("#compact-view img").attr("src", "img/view-one.svg");
        $('#expanded-view').addClass("da_026").removeClass("da_027");
        $('#compact-view').removeClass("da_026").addClass("da_027");

    });*/
$('#dashboard-table-compact-view').on('click', function() {
    if($('#dashboard-table').data('view') == 'collapse_view'){
        $('#dashboard-table').data('view', 'expand_view');
    $('.insuredpoliciesexpandview').removeClass("d-none");
    
    $("#dashboard-table-compact-view img").attr("src", "img/view-two.svg");
    $('#dashboard-table-compact-view').removeClass("da_026").addClass("da_027");
    }
    else{
       $('#dashboard-table').data('view', 'collapse_view');
        $('.insuredpoliciesexpandview').addClass("d-none");
        $("#dashboard-table-compact-view img").attr("src", "img/view-one-blue.svg");
    $('#dashboard-table-compact-view').removeClass("da_026").addClass("da_027");
    }
    

});


/*    $('#expanded-view').mouseover(function () {
        if ($('#dashboard-table').data('view') == 'collapse_view') {
            $('img', this).attr('src', function (i, oldSrc) {

                return 'img/view-two.svg';
            });
        }
    });

    $('#expanded-view').mouseout(function () {
        if ($('#dashboard-table').data('view') == 'collapse_view') {
            $('img', this).attr('src', function (i, oldSrc) {

                return 'img/view-two-grey.svg';
            });
        }
    });*/


$('#dashboard-table-compact-view').mouseover(function() {
    if ($('#dashboard-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one-blue.svg';
        });
        $("#dashboard-table-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two.svg';
        });
        $("#dashboard-table-compact-view").attr('title', 'Regular view');
    }
});

$('#dashboard-table-compact-view').mouseout(function() {
    if ($('#dashboard-table').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one.svg';
        });
        $("#dashboard-table-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two-grey.svg';
        });
        $("#dashboard-table-compact-view").attr('title', 'Regular view');
    }
});


    // Handle click on "Collapse All" button
    $('#dashboard-table-compact-view').on('click', function(){
        // Enumerate all rows
        table.rows().every(function(){
            // If row has details expanded
            if(this.child.isShown()){
                // Collapse row details
                this.child.hide();
                $(this.node()).removeClass('shown');
            }
        });
    });


    $('#selectAll').change(function () {
        $('.cb-element').prop('checked', this.checked);
    });

    $('.cb-element').change(function () {
        if ($('.cb-element:checked').length == $('.cb-element').length) {
            $('#selectAll').prop('checked', true);
        } else {
            $('#selectAll').prop('checked', false);
        }
    });
});