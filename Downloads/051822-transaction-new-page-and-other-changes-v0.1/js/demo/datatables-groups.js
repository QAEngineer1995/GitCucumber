// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#group-table').DataTable({
    "columnDefs": [
            { "width": "5%", targets: 0 },
            { "width": "45%", targets: 1 },
            { "width": "45%", targets: 2 },
            { "width": "5%", targets: 3 }
        ],
    "pagingType": "simple",
    "responsive": true,
    language: {
    paginate: {
      next: '<img src="img/right-black-chevron.svg">', // or '→'
      previous: '<img src="img/left-black-chevron.svg">' // or '←' 
    }
  },
    "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
  });


$("#group-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
//$("#dataTable_filter").append("<button class='bg-default border border-left-0'><img src='img/grey-close.svg'/></button>");
//$("#dataTable_wrapper").find(".float-right").append("<select class='form-control'>'+ '<option value='volvo'>Volvo</option>'+ '<option value='saab'>Saab</option>'+ '<option value='opel'>Opel</option>'+ '</select>");

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

myDataTable.Rows.InsertAt(myDataRow, 0);


