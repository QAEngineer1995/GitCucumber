$(document).ready(function() {
    $('a[href="#acc-invoices-tabs"]').on('shown.bs.tab', function(e) {

        $('#invoice-accounting-table').DataTable().columns.adjust().draw();

    });

    $('#invoice-accounting-table').DataTable({
        "columnDefs": [
            { "width": "5%", "targets": 0, "orderable": false },
            { "width": "10.57%", "targets": 1, "orderable": true  },
            { "width": "12.57%", "targets": 2, "orderable": true  },
            { "width": "13.57%", "targets": 3, "orderable": true  },
            { "width": "14.57%", "targets": 4, "orderable": true  },
            { "width": "14.57%", "targets": 5, "orderable": true  },
            { "width": "14.57%", "targets": 6, "orderable": true  },
            { "width": "8.57%", "targets": 7, "orderable": true  },
            { "width": "6%", "targets": 8, "orderable": false }
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
        
        "initComplete": function (settings, json) {  
            $("#invoice-accounting-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");            
          }
        
    });
    $("#invoice-accounting-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    $(".dataTables_wrapper").css("width","100%");
    $('#invoice-accounting-table-selectAll').change(function() {
        $('.invoice-accounting-cb-element').prop('checked', this.checked);
    });

    $('.invoice-accounting-cb-element').change(function() {
        if ($('.invoice-accounting-cb-element:checked').length == $('.invoice-accounting-cb-element').length) {
            $('#invoice-accounting-table-selectAll').prop('checked', true);
        } else {
            $('#invoice-accounting-table-selectAll').prop('checked', false);
        }
    });
    /**********************************************************************************************/
    $('a[href="#acc-transaction-batch-tabs"]').on('shown.bs.tab', function(e) {

        $('#acc-transaction-batch-table').DataTable().columns.adjust().draw();

    });

    $('#acc-transaction-batch-table').DataTable({
        "columnDefs": [
            { "width": "5%", "targets": 0, "orderable": false },
            { "width": "10.12%", "targets": 1, "orderable": true  },
            { "width": "11.12%", "targets": 2, "orderable": true  },
            { "width": "9.12%", "targets": 3, "orderable": true  },
            { "width": "13.12%", "targets": 4, "orderable": true  },
            { "width": "10.12%", "targets": 5, "orderable": true  },
            { "width": "13.12%", "targets": 6, "orderable": true  },
            { "width": "14.12%", "targets": 7, "orderable": true  },
            { "width": "8.12%", "targets": 8, "orderable": true },
            { "width": "6%", "targets": 9, "orderable": false }
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
        
        "initComplete": function (settings, json) {  
            $("#acc-transaction-batch-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");            
          }
        
    });
    $("#acc-transaction-batch-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    $(".dataTables_wrapper").css("width","100%");
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
/**********************************************************************************************/
    $('a[href="#acc-transactions-tabs"]').on('shown.bs.tab', function(e) {

        $('#acc-transaction-table').DataTable().columns.adjust().draw();

    });

    $('#acc-transaction-table').DataTable({
        "columnDefs": [
            { "width": "5%", "targets": 0, "orderable": false },
            { "width": "12.12%", "targets": 1, "orderable": true  },
            { "width": "11.12%", "targets": 2, "orderable": true  },
            { "width": "11.12%", "targets": 3, "orderable": true  },
            { "width": "11.12%", "targets": 4, "orderable": true  },
            { "width": "8.12%", "targets": 5, "orderable": true  },
            { "width": "13.12%", "targets": 6, "orderable": true  },
            { "width": "13.12%", "targets": 7, "orderable": true  },
            { "width": "9.12%", "targets": 8, "orderable": true },
            { "width": "6%", "targets": 9, "orderable": false }
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
        
        "initComplete": function (settings, json) {  
            $("#acc-transaction-table").wrap("<div style='overflow:visible; width:100%;position:relative;'></div>");            
          }
        
    });
    $("#acc-transaction-table_length").addClass('mt-2').html('<span class="text-gray-500">Total Rows: <b>25</b></span>');
    $(".dataTables_wrapper").css("width","100%");
    $('#acc-transaction-table-selectAll').change(function() {
        $('.transaction-batch-cb-element').prop('checked', this.checked);
    });

    $('.transaction-batch-cb-element').change(function() {
        if ($('.transaction-batch-cb-element:checked').length == $('.transaction-batch-cb-element').length) {
            $('#acc-transaction-table-selectAll').prop('checked', true);
        } else {
            $('#acc-transaction-table-selectAll').prop('checked', false);
        }
    });
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
            $("#Effective-date-accounting").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: "1901:2999"
            });
        });

        $(function() {
            $("#Invoice-date-accounting").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                yearRange: "1901:2999"
            });
        });

        $(function() {
            $("#transaction-batch-start-date").datepicker({
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