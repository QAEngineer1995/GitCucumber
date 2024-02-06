$(document).ready(function () {

    $('a[href="#broker-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-contact-table').DataTable().columns.adjust().draw();

    });

    $('#broker-contact-table').DataTable({
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
                "width": "30%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 6
            }

        ]
    });

    $('#broker-contact-table-selectAll').change(function () {
        $('.broker-contact-cb-element').prop('checked', this.checked);
    });

    $('.broker-contact-cb-element').change(function () {
        if ($('.broker-contact-cb-element:checked').length == $('.broker-contact-cb-element').length) {
            $('#broker-contact-table-selectAll').prop('checked', true);
        } else {
            $('#broker-contact-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#broker-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-additionally-table').DataTable().columns.adjust().draw();

    });

    $('#broker-additionally-table').DataTable({
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
                "width": "88%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 2
            }

        ]
    });

    $('#broker-additionally-table-selectAll').change(function () {
        $('.broker-additionally-cb-element').prop('checked', this.checked);
    });

    $('.broker-additionally-cb-element').change(function () {
        if ($('.broker-additionally-cb-element:checked').length == $('.broker-additionally-cb-element').length) {
            $('#broker-additionally-table-selectAll').prop('checked', true);
        } else {
            $('#broker-additionally-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#policies-renewals-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-claims-table').DataTable().columns.adjust().draw();

    });

    $('#broker-claims-table').DataTable({
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
                "width": "26%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "9.66%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "9.66%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "9.66%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "9.66%",
                "orderable": true,
                "targets": 7
            },
            {
                "width": "6%",
                "orderable": false,
                "targets": 8
            }

        ]
    });

    $('#broker-claims-table-selectAll').change(function () {
        $('.broker-claims-table-cb-element').prop('checked', this.checked);
    });

    $('.broker-claims-table-cb-element').change(function () {
        if ($('.broker-claims-table-cb-element:checked').length == $('.broker-claims-table-cb-element').length) {
            $('#broker-claims-table-selectAll').prop('checked', true);
        } else {
            $('#broker-claims-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#broker-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-location-table').DataTable().columns.adjust().draw();

    });

    $('#broker-location-table').DataTable({
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
                "width": "30%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 5
            }

        ]
    });

    $('#broker-location-table-selectAll').change(function () {
        $('.broker-location-cb-element').prop('checked', this.checked);
    });

    $('.broker-location-cb-element').change(function () {
        if ($('.broker-location-cb-element:checked').length == $('.broker-location-cb-element').length) {
            $('#broker-location-table-selectAll').prop('checked', true);
        } else {
            $('#broker-location-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-invoices-table').DataTable().columns.adjust().draw();

    });

    $('#broker-invoices-table').DataTable({
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
                "width": "14.5%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "30%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "14.5%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 5
            }

        ]
    });

    $('#broker-invoices-table-selectAll').change(function () {
        $('.broker-invoices-cb-element').prop('checked', this.checked);
    });

    $('.broker-invoices-cb-element').change(function () {
        if ($('.broker-invoices-cb-element:checked').length == $('.broker-invoices-cb-element').length) {
            $('#broker-invoices-table-selectAll').prop('checked', true);
        } else {
            $('#broker-invoices-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-payments-table').DataTable().columns.adjust().draw();

    });

    $('#broker-payments-table').DataTable({
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
                "width": "20%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "10.6%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "15.6%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "15.6%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "15.6%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "10.6%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 7
            }

        ]
    });

    $('#broker-payments-table-selectAll').change(function () {
        $('.broker-payments-cb-element').prop('checked', this.checked);
    });

    $('.broker-payments-cb-element').change(function () {
        if ($('.broker-payments-cb-element:checked').length == $('.broker-payments-cb-element').length) {
            $('#broker-payments-table-selectAll').prop('checked', true);
        } else {
            $('#broker-payments-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#notes-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-notes-table').DataTable().columns.adjust().draw();

    });

    $('#broker-notes-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "6%",
                "orderable": true,
                "targets": 0
            },
            {
                "width": "29.333%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "29.333%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "29.333%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "6%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    $('#broker-notes-table-selectAll').change(function () {
        $('.broker-notes-table-cb-element').prop('checked', this.checked);
    });

    $('.broker-notes-table-cb-element').change(function () {
        if ($('.broker-notes-table-cb-element:checked').length == $('.broker-notes-table-cb-element').length) {
            $('#broker-notes-table-selectAll').prop('checked', true);
        } else {
            $('#broker-notes-table-selectAll').prop('checked', false);
        }
    });

    /*****************************************************************************************************/

    $('a[href="#loss-history-tabs"]').on('shown.bs.tab', function (e) {

        $('#broker-losshistory-table').DataTable().columns.adjust().draw();

    });

    $('#broker-losshistory-table').DataTable({
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
                "width": "24%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "11.66%",
                "orderable": true,
                "targets": 7
            }

        ]
    });

    $('#broker-losshistory-table-selectAll').change(function () {
        $('.broker-losshistory-table-cb-element').prop('checked', this.checked);
    });

    $('.broker-losshistory-table-cb-element').change(function () {
        if ($('.broker-losshistory-table-cb-element:checked').length == $('.broker-losshistory-table-cb-element').length) {
            $('#broker-losshistory-table-selectAll').prop('checked', true);
        } else {
            $('#broker-losshistory-table-selectAll').prop('checked', false);
        }
    });
    
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

$(document).ready(function () {
    $("#comment-send-btn").click(function () {
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

    $(document).ready(function () {
        $("#file-name-edit-btn").click(function () {
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
    $("#claim-filling-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });

    $("#claim-policy-effective-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });

    $("#claim-incident-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });

    $("#claim-closed-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });

    $("#effective-coverage-tab-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });

    /*****************************************************************/

    var staus = false;
    $(".file-upload-selectable").on("click", function (evt) {
        if (evt.ctrlKey || evt.metaKey) {
            staus = true;
            $(this).toggleClass("selected-file");
        } else {
            var current = $(this);
            $(".file-upload-selectable").each(function (index) {
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
        $(".file-upload-selectable").each(function (index) {
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
$('#next-tab').on('click', function () {
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

$('#previous-tab').on('click', function () {
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