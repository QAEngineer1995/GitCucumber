function format(d) {
    return '<table width="100%" class="expandedDatatable">' +
        '<thead>' +
        '<tr class="h-100">' +
        '<th class="pl-4 py-2 da_010 font-weight-500 border-top border-bottom">Coverage</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Premium</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Eff Date</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Claims</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Additionally Insured</th>' +
        '<th class="py-2 da_010 font-weight-500 border-top border-bottom">Activities</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr class="h-100">' +
        '<td class="py-2 pl-4">2</td>' +
        '<td class="py-2">$2000</td>' +
        '<td class="py-2">03/05/20</td>' +
        '<td class="py-2">2</td>' +
        '<td class="py-2">Additionally Insured</td>' +
        '<td class="py-2">Activities</td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 pl-4">2</td>' +
        '<td class="py-2">$2000</td>' +
        '<td class="py-2">03/05/20</td>' +
        '<td class="py-2">2</td>' +
        '<td class="py-2">Additionally Insured</td>' +
        '<td class="py-2">Activities</td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 pl-4">2</td>' +
        '<td class="py-2">$2000</td>' +
        '<td class="py-2">03/05/20</td>' +
        '<td class="py-2">2</td>' +
        '<td class="py-2">Additionally Insured</td>' +
        '<td class="py-2">Activities</td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 pl-4">2</td>' +
        '<td class="py-2">$2000</td>' +
        '<td class="py-2">03/05/20</td>' +
        '<td class="py-2">2</td>' +
        '<td class="py-2">Additionally Insured</td>' +
        '<td class="py-2">Activities</td>' +
        '</tr>' +
        '<tr class="h-100">' +
        '<td class="py-2 pl-4">2</td>' +
        '<td class="py-2">$2000</td>' +
        '<td class="py-2">03/05/20</td>' +
        '<td class="py-2">2</td>' +
        '<td class="py-2">Additionally Insured</td>' +
        '<td class="py-2">Activities</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';
}

$(document).ready(function () {
    var table = $('#insured-policies').DataTable({

        'columns': [{
                'data': 'id',
                'width': '5%'
            },
            {
                'data': 'Priority',
                'width': '22%'
            },
            {
                'data': 'Insured',
                'width': '63%'
            },
            {
                'data': 'Insur',
                'width': '5%'
            },
            {
                'data': 'Policy-Status',
                'width': '5%'
            }
        ],
        'pagingType': 'simple',
        'responsive': true,
        'scrollX': true,
        'ordering': false,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    });

    $("#insured-policies_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');

    $('#insured-policies tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            if ($('#insured-policies').data('view') == 'collapse_view') {
                tr.find(".expandview").addClass("d-none");
            }


        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
            if ($('#insured-policies').data('view') == 'collapse_view') {
                tr.find(".expandview").removeClass("d-none");
            }

        }
    });


/*    $('#expanded-view').on('click', function () {
        $('#insured-policies').data('view', 'expand_view');
        $('.expandview').removeClass("d-none");
        $("#expanded-view img").attr("src", "img/view-two.svg");
        $("#compact-view img").attr("src", "img/view-one.svg");
        $('#expanded-view').addClass("da_026").removeClass("da_027");
        $('#compact-view').removeClass("da_026").addClass("da_027");

    });*/
$('#insured-policies-compact-view').on('click', function() {
    if($('#insured-policies').data('view') == 'collapse_view'){
        $('#insured-policies').data('view', 'expand_view');
    $('.insuredpoliciesexpandview').removeClass("d-none");
    
    $("#insured-policies-compact-view img").attr("src", "img/view-two.svg");
    $('#insured-policies-compact-view').removeClass("da_026").addClass("da_027");
    }
    else{
       $('#insured-policies').data('view', 'collapse_view');
        $('.insuredpoliciesexpandview').addClass("d-none");
        $("#insured-policies-compact-view img").attr("src", "img/view-one-blue.svg");
    $('#insured-policies-compact-view').removeClass("da_026").addClass("da_027");
    }
    

});


/*    $('#expanded-view').mouseover(function () {
        if ($('#insured-policies').data('view') == 'collapse_view') {
            $('img', this).attr('src', function (i, oldSrc) {

                return 'img/view-two.svg';
            });
        }
    });

    $('#expanded-view').mouseout(function () {
        if ($('#insured-policies').data('view') == 'collapse_view') {
            $('img', this).attr('src', function (i, oldSrc) {

                return 'img/view-two-grey.svg';
            });
        }
    });*/


$('#insured-policies-compact-view').mouseover(function() {
    if ($('#insured-policies').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one-blue.svg';
        });
        $("#insured-policies-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two.svg';
        });
        $("#insured-policies-compact-view").attr('title', 'Regular view');
    }
});

$('#insured-policies-compact-view').mouseout(function() {
    if ($('#insured-policies').data('view') == 'collapse_view') {
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-one.svg';
        });
        $("#insured-policies-compact-view").attr('title', 'Slim view');
    }
    else{
        $('img', this).attr('src', function(i, oldSrc) {

            return 'img/view-two-grey.svg';
        });
        $("#insured-policies-compact-view").attr('title', 'Regular view');
    }
});


    // Handle click on "Collapse All" button
    $('#insured-policies-compact-view').on('click', function(){
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