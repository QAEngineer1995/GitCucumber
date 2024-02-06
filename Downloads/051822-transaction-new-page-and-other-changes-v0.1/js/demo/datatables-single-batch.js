$(document).ready(function() {
    $('a[href="#batch-items-tabs"]').on('shown.bs.tab', function(e) {

        $('#single-batch-table').DataTable().columns.adjust().draw();

    });

    $('#single-batch-table').DataTable({
        "columnDefs": [{
                "width": "5%",
                "targets": 0,
                "orderable": false
            },
            {
                "width": "10.12%",
                "targets": 1,
                "orderable": true
            },
            {
                "width": "10.12%",
                "targets": 2,
                "orderable": true
            },
            {
                "width": "12.12%",
                "targets": 3,
                "orderable": true
            },
            {
                "width": "8.12%",
                "targets": 4,
                "orderable": true
            },
            {
                "width": "13.12%",
                "targets": 5,
                "orderable": true
            },
            {
                "width": "13.12%",
                "targets": 6,
                "orderable": true
            },
            {
                "width": "13.12%",
                "targets": 7,
                "orderable": true
            },
            {
                "width": "9.12%",
                "targets": 8,
                "orderable": true
            },
            {
                "width": "6%",
                "targets": 9,
                "orderable": false
            }
        ],
        'pagingType': 'simple',
        'responsive': false,
        'scrollX': true,
        'autoWidth': false,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>',

        "initComplete": function(settings, json) {
            $("#single-batch-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");
        }

    });
    $("#single-batch-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    $(".dataTables_wrapper").css("width", "100%");
    $('#single-batch-table-selectAll').change(function() {
        $('.single-batch-cb-element').prop('checked', this.checked);
    });

    $('.single-batch-cb-element').change(function() {
        if ($('.single-batch-cb-element:checked').length == $('.single-batch-cb-element').length) {
            $('#single-batch-table-selectAll').prop('checked', true);
        } else {
            $('#single-batch-table-selectAll').prop('checked', false);
        }
    });
    /***********************************************************************************************/
    $('#cig-invoice-modal').on('shown.bs.modal', function (e) {


        $('#cig-invoice-popup-table').DataTable().columns.adjust().draw();


    });

    $('#cig-invoice-popup-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "6%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "9.42%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "13.42%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "14.42%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "13.42%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "13.42%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "13.42%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "16.42%",
                "orderable": true,
                "targets": 7
            }

        ]
    });

    $('#cig-invoice-selectAll').change(function () {
        $('.cig-invoice-cb-element').prop('checked', this.checked);
    });

    $('.cig-invoice-cb-element').change(function () {
        if ($('.cig-invoice-cb-element:checked').length == $('.cig-invoice-cb-element').length) {
            $('#cig-invoice-selectAll').prop('checked', true);
        } else {
            $('#cig-invoice-selectAll').prop('checked', false);
        }
    });
    /**********************************************************************************************/
    $('a[href="#acc-transaction-batch-tabs"]').on('shown.bs.tab', function(e) {

        $('#acc-transaction-batch-table').DataTable().columns.adjust().draw();

    });

    $('#acc-transaction-batch-table').DataTable({
        "columnDefs": [{
                "width": "5%",
                "targets": 0,
                "orderable": false
            },
            {
                "width": "11.12%",
                "targets": 1,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 2,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 3,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 4,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 5,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 6,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 7,
                "orderable": true
            },
            {
                "width": "11.12%",
                "targets": 8,
                "orderable": true
            },
            {
                "width": "6%",
                "targets": 9,
                "orderable": false
            }
        ],
        'pagingType': 'simple',
        'responsive': false,
        'scrollX': true,
        'autoWidth': false,
        'language': {
            paginate: {
                next: '<img src="img/right-black-chevron.svg">',
                previous: '<img src="img/left-black-chevron.svg">'
            }
        },
        "dom": '<"float-left"><"float-right">rt<"row"<"col-sm-5"l><"col-sm-3"l><"col-sm-3"i><"col-sm-1"p>>',

        "initComplete": function(settings, json) {
            $("#acc-transaction-batch-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");
        }

    });
    $("#acc-transaction-batch-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    $(".dataTables_wrapper").css("width", "100%");
    $('#acc-transaction-batch-table-selectAll').change(function() {
        $('.transaction-batch-cb-element').prop('checked', this.checked);
    });

    $('.transaction-batch-cb-element').change(function() {
        if ($('.transaction-batch-cb-element:checked').length == $('.transaction-batch-cb-element').length) {
            $('#acc-transaction-batch-table-selectAll').prop('checked', true);
        } else {
            $('#acc-transaction-batch-table-selectAll').prop('checked', false);
        }
    });
        /*************************************************************************************************/
    $('#available-broker-balance-modal').on('shown.bs.modal', function(e) {


        $('#available-broker-popup-table').DataTable().columns.adjust().draw();


    });
    var table = $('#available-broker-popup-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "6%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction
    });

    $('#available-broker-selectAll').change(function() {
        $('.available-broker-cb-element').prop('checked', this.checked);
    });

    $('.available-broker-cb-element').change(function() {
        if ($('.available-broker-cb-element:checked').length == $('.available-broker-cb-element').length) {
            $('#available-broker-selectAll').prop('checked', true);
        } else {
            $('#available-broker-selectAll').prop('checked', false);
        }
    });

    function myCallbackFunction(updatedCell, updatedRow, oldValue) {}
    /*************************************************************************************************/
    $('#credit-memo-modal').on('shown.bs.modal', function(e) {


        $('#available-credit-popup-table').DataTable().columns.adjust().draw();


    });
    var table = $('#available-credit-popup-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "6%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction1
    });

    $('#available-credit-selectAll').change(function() {
        $('.available-credit-cb-element').prop('checked', this.checked);
    });

    $('.available-credit-cb-element').change(function() {
        if ($('.available-credit-cb-element:checked').length == $('.available-credit-cb-element').length) {
            $('#available-credit-selectAll').prop('checked', true);
        } else {
            $('#available-credit-selectAll').prop('checked', false);
        }
    });

    function myCallbackFunction1(updatedCell, updatedRow, oldValue) {}
    /*************************************************************************************************/
    $('#available-insured-balance-modal').on('shown.bs.modal', function(e) {


        $('#available-insured-popup-table').DataTable().columns.adjust().draw();


    });
    var table = $('#available-insured-popup-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "6%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "23.5%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction
    });

    $('#available-insured-selectAll').change(function() {
        $('.available-insured-cb-element').prop('checked', this.checked);
    });

    $('.available-insured-cb-element').change(function() {
        if ($('.available-insured-cb-element:checked').length == $('.available-insured-cb-element').length) {
            $('#available-insured-selectAll').prop('checked', true);
        } else {
            $('#available-insured-selectAll').prop('checked', false);
        }
    });

    function myCallbackFunction(updatedCell, updatedRow, oldValue) {}    


    /*********************************Edit comment script*****************************************/
    function divClicked() {
        var divHtml = $("#comment-box").html();
        var editableText = $("<textarea id='comment-box' rows='4'/>").addClass("commentbox-textarea w-100 border rounded").css("resize", "none");
        editableText.val(divHtml);
        $("#comment-box").replaceWith(editableText);
        editableText.focus();
        editableText.blur(editableTextBlurred);
    }

    function editableTextBlurred() {
        var html = $("#comment-box").val();
        var viewableText = $("<div id='comment-box'>");
        viewableText.html(html);
        $("#comment-box").replaceWith(viewableText);
    }

    $(document).ready(function() {
        $("#comment-send-btn").click(function() {
            if ($("#comment-box").is('textarea')) {
                //$(this).find('img').attr('src', 'img/edit-blue.svg');
                editableTextBlurred();
            } else {

                //$(this).find('img').attr('src', 'img/check-blue.svg');
                divClicked()
            }
        });

        function divClicked() {
            var divHtml = $("#file-name-box").html();
            var editableText = $("<textarea id='file-name-box' rows='1'/>").addClass("commentbox-textarea w-100 border rounded").css("resize", "none");
            editableText.val(divHtml);
            $("#file-name-box").replaceWith(editableText);
            editableText.focus();
            editableText.blur(editableTextBlurred);
        }

        function editableTextBlurred() {
            var html = $("#file-name-box").val();
            var viewableText = $("<div id='file-name-box' class='text-gray-500 h6 font-weight-600 word-break-all text-truncate w250'>");
            viewableText.html(html);
            $("#file-name-box").replaceWith(viewableText);
        }

        $(document).ready(function() {
            $("#file-name-edit-btn").click(function() {
                if ($("#file-name-box").is('textarea')) {
                    //$(this).find('img').attr('src', 'img/edit-blue.svg');
                    editableTextBlurred();
                } else {

                    //$(this).find('img').attr('src', 'img/check-blue.svg');
                    divClicked()
                }
            });
        });
        /************************************************************/
        $(function() {
            $("#Payment-Date-modal").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: "1901:2999"
            });
        });

        /*****************************************************************/

        var staus = false;
        $(".file-upload-selectable").on("click", function(evt) {
            if (evt.ctrlKey || evt.metaKey) {
                staus = true;
                $(this).toggleClass("selected-file");
            } else {
                var current = $(this);
                $(".file-upload-selectable").each(function(index) {
                    if (current.index() != index) {
                        $(this).removeClass("selected-file");
                    }
                });
                if (staus) {
                    current.addClass("selected-file");
                } else {
                    current.toggleClass("selected-file");
                }
                staus = false;
            }
            var isselected = false;
            $(".file-upload-selectable").each(function(index) {
                if ($(this).hasClass("selected-file")) {
                    isselected = true;
                }
            });
            if (isselected) {
                $("#multi-upload-delete").removeClass("d-none");
            } else {
                $("#multi-upload-delete").addClass("d-none");
            }
        });
    });

    /**********************************************************************************/
    var i, items = $('#test01').find('.nav-link'),
        pane = $('#test02').find('.tab-pane');
    // next
    $('#next-tab').on('click', function() {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') == true) {
                break;
            }
        }
        if (i < items.length - 1) {
            //alert(items.length);
            // for tab
            $(items[i]).removeClass('active');
            $(items[i + 1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i + 1]).addClass('show active');
        } else {
            $(items[items.length - 1]).removeClass('active');
            $(items[0]).addClass('active');
            // for pane
            $(pane[items.length - 1]).removeClass('show active');
            $(pane[0]).addClass('show active');
        }

    });

    $('#previous-tab').on('click', function() {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') == true) {
                break;
            }
        }
        if (i != 0) {
            // for tab
            $(items[i]).removeClass('active');
            $(items[i - 1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i - 1]).addClass('show active');
        } else {
            $(items[0]).removeClass('active');
            $(items[items.length - 1]).addClass('active');
            // for pane
            $(pane[0]).removeClass('show active');
            $(pane[items.length - 1]).addClass('show active');
        }
    });
});