function format ( d ) {
    // `d` is the original data object for the row
    return '<div class="table-responsive">'+
    '<table class="ml-lg-auto ml-none privileges-acco-table expandedDatatable" width="70%">'+
    '<thead>'+
  '<tr>'+
    '<th class="border da_010 font-weight-500" style="width:70%">Privileges</th>'+
    '<th class="border da_010 font-weight-500 text-center" style="width:10%">Read</th>'+
    '<th class="border da_010 font-weight-500 text-center" style="width:10%">Write</th>'+
    '<th class="border da_010 font-weight-500 text-center" style="width:10%">Delete</th>'+
  '</tr>'+
  '</thead>'+
  '<tbody>'+
  '<tr>'+
    '<td class="border font-weight-500 text-gray-500 align-middle">Module 1</td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
  '</tr>'+
  '<tr>'+
    '<td class="border font-weight-500 text-gray-500 align-middle">Feature 1.1</td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
  '</tr>'+
  '<tr>'+
    '<td class="border font-weight-500 text-gray-500 align-middle">Feature 1.2</td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
  '</tr>'+
  '<tr>'+
    '<td class="border font-weight-500 text-gray-500 align-middle">Feature 1.3</td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
    '<td class="border"><label class="container-checkbox"><input type="checkbox" checked="checked"> <span class="checkmark"></span> </label></td>'+
  '</tr>'+
  '</tbody>'+
'</table>'+
'</div>'+
'<div class="container-fluid pl-0 pr-0">'+
                           '<div class="da_013 bg-white shadow-none border-top">'+
                             '<div class="row">'+
                                 '<div class="col-lg-7 col-sm-12 col-xs-12 font-weight-500 text-gray-500 pt-3 pb-3">Do you want to save new user?</div>'+
                                 '<div class="col-lg-5 col-sm-12 col-xs-12 btn-group">'+
                                    '<button type="button" class="blue-border h6 font-weight-bold text-primary btn light-blue-bg pl-4 col-xs-12 pt-3 pb-3 pr-4 mb-0 ml-2 mr-2 w-180 float-left">No, don’t save</button>'+
                                    '<button type="button" class="blue-border h6 font-weight-bold btn-primary pl-5 pt-3 pb-3 pr-5 btn mb-0 float-left w-180 ml-2 mr-2">Yes, save</button>'+
                                 '</div>'+
                              '</div>'+
                           '</div>'+
                        '</div>';
}

$(document).ready(function() {
    var table = $('#roles-table').DataTable({
        /*'ajax': 'https://gyrocode.github.io/files/jquery-datatables/objects.json',*/
        
        'columns': [
            { 'data': 'id', 'width' : '5%' },
            { 'data': 'name', 'width' : '45%'  },
            { 'data': 'position', 'width' : '45%' },
            { 'data': 'salary', 'width' : '5%'  },
            {
                
                'orderable':      false,
                'data':           null,
                'defaultContent': '',
                'width' : '5%'
            }
        ],
        'pagingType': 'simple',
        'responsive': true,
        'language': {
            paginate: {
              next: '<img src="img/right-black-chevron.svg">', // or '→'
              previous: '<img src="img/left-black-chevron.svg">' // or '←' 
            }
          },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    } );
$("#roles-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    // Add event listener for opening and closing details
    $('#roles-table tbody').on('click', 'td.details-control', function(){
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if(row.child.isShown()){
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    // Handle click on "Expand All" button
    $('#btn-show-all-children').on('click', function(){
        // Enumerate all rows
        table.rows().every(function(){
            // If row has details collapsed
            if(!this.child.isShown()){
                // Open this row
                this.child(format(this.data())).show();
                $(this.node()).addClass('shown');
            }
        });
    });

    // Handle click on "Collapse All" button
    $('#btn-hide-all-children').on('click', function(){
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
    $('.cb-element').prop('checked',this.checked);
});

$('.cb-element').change(function () {
 if ($('.cb-element:checked').length == $('.cb-element').length){
  $('#selectAll').prop('checked',true);
 }
 else {
  $('#selectAll').prop('checked',false);
 }
});
});
