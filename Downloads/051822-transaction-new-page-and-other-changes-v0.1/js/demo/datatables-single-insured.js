$(document).ready(function () {

    $('a[href="#insured-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-contact-table').DataTable().columns.adjust().draw();

    });

    $('#insured-contact-table').DataTable({
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

    $('#insured-contact-table-selectAll').change(function () {
        $('.insured-contact-cb-element').prop('checked', this.checked);
    });

    $('.insured-contact-cb-element').change(function () {
        if ($('.insured-contact-cb-element:checked').length == $('.insured-contact-cb-element').length) {
            $('#insured-contact-table-selectAll').prop('checked', true);
        } else {
            $('#insured-contact-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#insured-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-additionally-table').DataTable().columns.adjust().draw();

    });

    $('#insured-additionally-table').DataTable({
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

    $('#insured-additionally-table-selectAll').change(function () {
        $('.insured-additionally-cb-element').prop('checked', this.checked);
    });

    $('.insured-additionally-cb-element').change(function () {
        if ($('.insured-additionally-cb-element:checked').length == $('.insured-additionally-cb-element').length) {
            $('#insured-additionally-table-selectAll').prop('checked', true);
        } else {
            $('#insured-additionally-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#policies-renewals-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-claims-table').DataTable().columns.adjust().draw();

    });

    $('#insured-claims-table').DataTable({
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
                "width": "36.5%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "36.5%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "15%",
                "orderable": false,
                "targets": 3
            },
            {
                "width": "6%",
                "orderable": false,
                "targets": 4
            }

        ]
    });

    $('#insured-claims-table-selectAll').change(function () {
        $('.insured-claims-table-cb-element').prop('checked', this.checked);
    });

    $('.insured-claims-table-cb-element').change(function () {
        if ($('.insured-claims-table-cb-element:checked').length == $('.insured-claims-table-cb-element').length) {
            $('#insured-claims-table-selectAll').prop('checked', true);
        } else {
            $('#insured-claims-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#insured-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-location-table').DataTable().columns.adjust().draw();

    });

    $('#insured-location-table').DataTable({
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

    $('#insured-location-table-selectAll').change(function () {
        $('.insured-location-cb-element').prop('checked', this.checked);
    });

    $('.insured-location-cb-element').change(function () {
        if ($('.insured-location-cb-element:checked').length == $('.insured-location-cb-element').length) {
            $('#insured-location-table-selectAll').prop('checked', true);
        } else {
            $('#insured-location-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-invoices-table').DataTable().columns.adjust().draw();

    });

    $('#insured-invoices-table').DataTable({
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

    $('#insured-invoices-table-selectAll').change(function () {
        $('.insured-invoices-cb-element').prop('checked', this.checked);
    });

    $('.insured-invoices-cb-element').change(function () {
        if ($('.insured-invoices-cb-element:checked').length == $('.insured-invoices-cb-element').length) {
            $('#insured-invoices-table-selectAll').prop('checked', true);
        } else {
            $('#insured-invoices-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-payments-table').DataTable().columns.adjust().draw();

    });

    $('#insured-payments-table').DataTable({
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

    $('#insured-payments-table-selectAll').change(function () {
        $('.insured-payments-cb-element').prop('checked', this.checked);
    });

    $('.insured-payments-cb-element').change(function () {
        if ($('.insured-payments-cb-element:checked').length == $('.insured-payments-cb-element').length) {
            $('#insured-payments-table-selectAll').prop('checked', true);
        } else {
            $('#insured-payments-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('a[href="#notes-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-notes-table').DataTable().columns.adjust().draw();

    });

    $('#insured-notes-table').DataTable({
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

    $('#insured-notes-table-selectAll').change(function () {
        $('.insured-notes-table-cb-element').prop('checked', this.checked);
    });

    $('.insured-notes-table-cb-element').change(function () {
        if ($('.insured-notes-table-cb-element:checked').length == $('.insured-notes-table-cb-element').length) {
            $('#insured-notes-table-selectAll').prop('checked', true);
        } else {
            $('#insured-notes-table-selectAll').prop('checked', false);
        }
    });

    /*****************************************************************************************************/

    $('a[href="#loss-history-tabs"]').on('shown.bs.tab', function (e) {

        $('#insured-losshistory-table').DataTable().columns.adjust().draw();

    });

    $('#insured-losshistory-table').DataTable({
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

    $('#insured-losshistory-table-selectAll').change(function () {
        $('.insured-losshistory-table-cb-element').prop('checked', this.checked);
    });

    $('.insured-losshistory-table-cb-element').change(function () {
        if ($('.insured-losshistory-table-cb-element:checked').length == $('.insured-losshistory-table-cb-element').length) {
            $('#insured-losshistory-table-selectAll').prop('checked', true);
        } else {
            $('#insured-losshistory-table-selectAll').prop('checked', false);
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