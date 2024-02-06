/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" width="100%">'+
        '<tr class="hover-color" style=" height: 1rem; min-height: 1rem; ">'+
            '<td class="dark-grey-t font-14" style=" padding: 0rem 0rem 0rem 0rem !important; ">Effective Date:</td>'+
            '<td style=" padding: 0rem 0rem 0rem 0rem !important; ">03/05/20</td>'+
            '<td class="dark-grey-t font-14" style=" padding: 0rem 0rem 0rem 0rem !important; ">Broker:</td>'+
            '<td style=" padding: 0rem 0rem 0rem 0rem !important; "><div width="10%" class="text-truncate" style="max-width: calc( 10 * 1vw )">Mikhail Ugryumov</div></td>'+
            '<td class="dark-grey-t font-14" style=" padding: 0rem 0rem 0rem 0rem !important; ">Assigned To:</td>'+
            '<td style=" padding: 0rem 0rem 0rem 0rem !important; "><div width="10%" class="text-truncate" style="max-width: calc( 10 * 1vw )">Savannah Nguyen</div></td>'+
            '<td class="dark-grey-t font-14" style=" padding: 0rem 0rem 0rem 0rem !important; ">Created Date:</td>'+
            '<td style=" padding: 0rem 0rem 0rem 0rem !important; ">03/05/20</td>'+
        '</tr>'+
        '<tr class="hover-color" style=" height: 1rem; min-height: 1rem; ">'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; " class="dark-grey-t font-14">Expiration Date:</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; ">03/05/20</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; " class="dark-grey-t font-14">Created By:</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; "><div width="10%" class="text-truncate" style="max-width: calc( 10 * 1vw )">Jonathan Mayer</div></td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; " class="dark-grey-t font-14">Underwriter:</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; ">MUT</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; " class="dark-grey-t font-14">Coverages:</td>'+
            '<td style=" padding: 0rem 0rem 1.5rem 0rem !important; ">5 coverages</td>'+
        '</tr>'+
    '</table>'+
    '<table width="100%">'+
  '<tr class="light-white-bg h-100">'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500">Coverage</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center">Premium</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center">Effective Date</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center">Claims</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center">Additionally Insured</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center">Activities</th>'+
    '<th class="border pt-3 pb-3 da_010 font-weight-500 text-center" style="width:3%"></th>'+
  '</tr>'+
  '<tr class="h-100">'+
    '<td class="border pt-3 pb-3">What is Lorem Ipsum Lorem Ipsum</td>'+
    '<td class="border pt-3 pb-3 text-center">$2000</td>'+
    '<td class="border pt-3 pb-3 text-center">03/05/20</td>'+
    '<td class="border pt-3 pb-3 text-center">2</td>'+
    '<td class="border pt-3 pb-3 text-center">5</td>'+
    '<td class="border pt-3 pb-3 text-center">10</td>'+
    '<td class="border pt-3 pb-3 text-center">'+
'<div class="dropdown dropdown-accordion da_015">'+
   '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">'+
   '</button>'+
   '<div id="accordion" class="w-228 dropdown-menu p-4 dropdown-menu-right drp-light-blue-bg">'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent card-link" data-toggle="collapse" href="#collapseOne">'+
            'Edit &nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseOne" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0">'+
               '<div class="floating-label">'+
                  '<input class="floating-input" type="text" placeholder=" ">'+
                  '<span class="highlight"></span>'+
                  '<label class="user-form-label">Role</label>'+
               '</div>'+
               '<div class="d-flex justify-content-between bd-highlight mb-3">'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-primary btn light-blue-bg p-2 w-75">Cancel</button></div>'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-white btn-primary btn p-2 w-75">Save</button></div>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0 pb-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent collapsed card-link" data-toggle="collapse" href="#collapseTwo">'+
            'Deactivate&nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseTwo" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0 pb-0">'+
               '<div class="h6 mb-0 font-weight-600 text-primary w-180">'+
                  '<label class="switch mb-0">'+
                  '<input type="checkbox" class="toggle-switch" checked>'+
                  '<span class="slider round"></span>'+
                  '</label>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
   '</div>'+
'</div>'+'</td>'+
  '</tr>'+
  '<tr class="h-100">'+
    '<td class="border pt-3 pb-3">What is Lorem Ipsum Lorem Ipsum</td>'+
    '<td class="border pt-3 pb-3 text-center">$2000</td>'+
    '<td class="border pt-3 pb-3 text-center">03/05/20</td>'+
    '<td class="border pt-3 pb-3 text-center">2</td>'+
    '<td class="border pt-3 pb-3 text-center">5</td>'+
    '<td class="border pt-3 pb-3 text-center">10</td>'+
    '<td class="border pt-3 pb-3 text-center">'+
'<div class="dropdown dropdown-accordion da_015">'+
   '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">'+
   '</button>'+
   '<div id="accordion" class="w-228 dropdown-menu p-4 dropdown-menu-right drp-light-blue-bg">'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent card-link" data-toggle="collapse" href="#collapseOne">'+
            'Edit &nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseOne" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0">'+
               '<div class="floating-label">'+
                  '<input class="floating-input" type="text" placeholder=" ">'+
                  '<span class="highlight"></span>'+
                  '<label class="user-form-label">Role</label>'+
               '</div>'+
               '<div class="d-flex justify-content-between bd-highlight mb-3">'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-primary btn light-blue-bg p-2 w-75">Cancel</button></div>'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-white btn-primary btn p-2 w-75">Save</button></div>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0 pb-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent collapsed card-link" data-toggle="collapse" href="#collapseTwo">'+
            'Deactivate&nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseTwo" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0 pb-0">'+
               '<div class="h6 mb-0 font-weight-600 text-primary w-180">'+
                  '<label class="switch mb-0">'+
                  '<input type="checkbox" class="toggle-switch" checked>'+
                  '<span class="slider round"></span>'+
                  '</label>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
   '</div>'+
'</div>'+'</td>'+
  '</tr>'+
  '<tr class="h-100">'+
    '<td class="border pt-3 pb-3">What is Lorem Ipsum Lorem Ipsum</td>'+
    '<td class="border pt-3 pb-3 text-center">$2000</td>'+
    '<td class="border pt-3 pb-3 text-center">03/05/20</td>'+
    '<td class="border pt-3 pb-3 text-center">2</td>'+
    '<td class="border pt-3 pb-3 text-center">5</td>'+
    '<td class="border pt-3 pb-3 text-center">10</td>'+
    '<td class="border pt-3 pb-3 text-center">'+
'<div class="dropdown dropdown-accordion da_015">'+
   '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">'+
   '</button>'+
   '<div id="accordion" class="w-228 dropdown-menu p-4 dropdown-menu-right drp-light-blue-bg">'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent card-link" data-toggle="collapse" href="#collapseOne">'+
            'Edit &nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseOne" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0">'+
               '<div class="floating-label">'+
                  '<input class="floating-input" type="text" placeholder=" ">'+
                  '<span class="highlight"></span>'+
                  '<label class="user-form-label">Role</label>'+
               '</div>'+
               '<div class="d-flex justify-content-between bd-highlight mb-3">'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-primary btn light-blue-bg p-2 w-75">Cancel</button></div>'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-white btn-primary btn p-2 w-75">Save</button></div>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0 pb-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent collapsed card-link" data-toggle="collapse" href="#collapseTwo">'+
            'Deactivate&nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseTwo" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0 pb-0">'+
               '<div class="h6 mb-0 font-weight-600 text-primary w-180">'+
                  '<label class="switch mb-0">'+
                  '<input type="checkbox" class="toggle-switch" checked>'+
                  '<span class="slider round"></span>'+
                  '</label>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
   '</div>'+
'</div>'+'</td>'+
  '</tr>'+
  '<tr class="h-100">'+
    '<td class="border pt-3 pb-3">What is Lorem Ipsum Lorem Ipsum</td>'+
    '<td class="border pt-3 pb-3 text-center">$2000</td>'+
    '<td class="border pt-3 pb-3 text-center">03/05/20</td>'+
    '<td class="border pt-3 pb-3 text-center">2</td>'+
    '<td class="border pt-3 pb-3 text-center">5</td>'+
    '<td class="border pt-3 pb-3 text-center">10</td>'+
    '<td class="border pt-3 pb-3 text-center">'+
'<div class="dropdown dropdown-accordion da_015">'+
   '<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">'+
   '</button>'+
   '<div id="accordion" class="w-228 dropdown-menu p-4 dropdown-menu-right drp-light-blue-bg">'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent card-link" data-toggle="collapse" href="#collapseOne">'+
            'Edit &nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseOne" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0">'+
               '<div class="floating-label">'+
                  '<input class="floating-input" type="text" placeholder=" ">'+
                  '<span class="highlight"></span>'+
                  '<label class="user-form-label">Role</label>'+
               '</div>'+
               '<div class="d-flex justify-content-between bd-highlight mb-3">'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-primary btn light-blue-bg p-2 w-75">Cancel</button></div>'+
                  '<div class=""><button type="button" class="blue-border h6 font-weight-bold text-white btn-primary btn p-2 w-75">Save</button></div>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
      '<div class="card border-0 pl-0 pr-0 drp-light-blue-bg">'+
         '<div class="card-header bg-transparent pl-0 pr-0 border-bottom-0 pb-0">'+
            '<button class="text-primary font-weight-500 pl-0 border-0 bg-transparent collapsed card-link" data-toggle="collapse" href="#collapseTwo">'+
            'Deactivate&nbsp;&nbsp;<img src="img/down-arrow-blue.svg">'+
            '</button>'+
         '</div>'+
         '<div id="collapseTwo" class="collapse" data-parent="#accordion">'+
            '<div class="card-body pl-0 pr-0 pb-0">'+
               '<div class="h6 mb-0 font-weight-600 text-primary w-180">'+
                  '<label class="switch mb-0">'+
                  '<input type="checkbox" class="toggle-switch" checked>'+
                  '<span class="slider round"></span>'+
                  '</label>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
   '</div>'+
'</div>'+'</td>'+
  '</tr>'+
'</table>';
}
 
$(document).ready(function() {
    var table = $('#example').DataTable( {
        "columns": [
            
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" },
            { "data": "salary1" },
            {
                
            }
        ],
        'ordering': false,
        'pagingType': 'simple',
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    } );
 $("#example_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');    
    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} );