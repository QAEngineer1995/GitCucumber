$(document).ready(function() {
    $('#users-table').DataTable({
        'columns': [
            { 'data': 'id', 'width' : '5%' },
            { 'data': 'name', 'width' : '30%'  },
            { 'data': 'role', 'width' : '30%' },
            { 'data': 'group', 'width' : '30%'  },
            { 'data': 'ellipses', 'width' : '5%'  }
        ],
        "pagingType": "simple",
        "responsive": true,
        language: {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>'
    });

    $("#users-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');

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