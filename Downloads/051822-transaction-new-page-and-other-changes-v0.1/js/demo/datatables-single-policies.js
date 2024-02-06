$(document).ready(function () {
    $('#single-insured-popup').on('shown.bs.modal', function (e) {

        $('#single-insured-popup-table').DataTable().columns.adjust().draw();

    });

    $('#single-insured-popup-table').DataTable({
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
                "width": "17%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "30%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "17%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    $('#single-insured-selectAll').change(function () {
        $('.single-insured-cb-element').prop('checked', this.checked);
    });

    $('.single-insured-cb-element').change(function () {
        if ($('.single-insured-cb-element:checked').length == $('.cb-element').length) {
            $('#single-insured-selectAll').prop('checked', true);
        } else {
            $('#single-insured-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('#add-additionally-insured-popup').on('shown.bs.modal', function (e) {


        $('#add-additionally-insured-popup-table').DataTable().columns.adjust().draw();


    });

    $('#add-additionally-insured-popup-table').DataTable({
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
                "width": "17%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "30%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "17%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    $('#add-additionally-insured-selectAll').change(function () {
        $('.add-additionally-insured-cb-element').prop('checked', this.checked);
    });

    $('.add-additionally-insured-cb-element').change(function () {
        if ($('.add-additionally-insured-cb-element:checked').length == $('.add-additionally-insured-cb-element').length) {
            $('#add-additionally-insured-selectAll').prop('checked', true);
        } else {
            $('#add-additionally-insured-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('#add-specialty-modal').on('shown.bs.modal', function (e) {


        $('#add-specialty-modal-table').DataTable().columns.adjust().draw();


    });

    $('#add-specialty-modal-table').DataTable({
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
                "width": "64%",
                "orderable": true,
                "targets": 2
            }

        ]
    });

    $('#add-specialty-modal-table-selectAll').change(function () {
        $('.add-specialty-modal-table-cb-element').prop('checked', this.checked);
    });

    $('.add-specialty-modal-table-cb-element').change(function () {
        if ($('.add-specialty-modal-table-cb-element:checked').length == $('.add-specialty-modal-table-cb-element').length) {
            $('#add-specialty-modal-table-selectAll').prop('checked', true);
        } else {
            $('#add-specialty-modal-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('#add-exclusions-modal').on('shown.bs.modal', function (e) {


        $('#add-exclusions-modal-table').DataTable().columns.adjust().draw();


    });

    $('#add-exclusions-modal-table').DataTable({
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
                "width": "94%",
                "orderable": true,
                "targets": 1
            }

        ]
    });

    $('#add-exclusions-modal-table-selectAll').change(function () {
        $('.add-exclusions-modal-table-cb-element').prop('checked', this.checked);
    });

    $('.add-exclusions-modal-table-cb-element').change(function () {
        if ($('.add-exclusions-modal-table-cb-element:checked').length == $('.add-exclusions-modal-table-cb-element').length) {
            $('#add-exclusions-modal-table-selectAll').prop('checked', true);
        } else {
            $('#add-exclusions-modal-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('#add-deduction-modal').on('shown.bs.modal', function (e) {


        $('#add-deduction-modal-table').DataTable().columns.adjust().draw();


    });

    $('#add-deduction-modal-table').DataTable({
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
                "width": "47%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "47%",
                "orderable": true,
                "targets": 2
            }

        ]
    });

    $('#add-deduction-modal-table-selectAll').change(function () {
        $('.add-deduction-modal-table-cb-element').prop('checked', this.checked);
    });

    $('.add-deduction-modal-table-cb-element').change(function () {
        if ($('.add-deduction-modal-table-cb-element:checked').length == $('.add-deduction-modal-table-cb-element').length) {
            $('#add-deduction-modal-table-selectAll').prop('checked', true);
        } else {
            $('#add-deduction-modal-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('#add-profile-popup').on('shown.bs.modal', function (e) {


        $('#add-profile-popup-table').DataTable().columns.adjust().draw();


    });

    $('#add-profile-popup-table').DataTable({
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
                "width": "16%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 5
            }

        ]
    });

    $('#add-profile-selectAll').change(function () {
        $('.add-profile-cb-element').prop('checked', this.checked);
    });

    $('.add-profile-cb-element').change(function () {
        if ($('.add-profile-cb-element:checked').length == $('.add-profile-cb-element').length) {
            $('#add-profile-selectAll').prop('checked', true);
        } else {
            $('#add-profile-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('#add-endorsement-popup').on('shown.bs.modal', function (e) {


        $('#add-endorsement-popup-table').DataTable().columns.adjust().draw();


    });

    $('#add-endorsement-popup-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "10%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "45%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "45%",
                "orderable": true,
                "targets": 2
            }

        ]
    });

    $('#add-endorsement-selectAll').change(function () {
        $('.add-endorsement-cb-element').prop('checked', this.checked);
    });

    $('.add-endorsement-cb-element').change(function () {
        if ($('.add-endorsement-cb-element:checked').length == $('.add-endorsement-cb-element').length) {
            $('#add-endorsement-selectAll').prop('checked', true);
        } else {
            $('#add-endorsement-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/


    $('a[href="#insured-tabs"]').on('shown.bs.tab', function (e) {

        $('#additionaly-insured-table').DataTable().columns.adjust().draw();

    });

    $('#additionaly-insured-table').DataTable({
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
                "width": "16%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 5
            }

        ]
    });

    $('#additionaly-insured-table-selectAll').change(function () {
        $('.additionaly-insured-cb-element').prop('checked', this.checked);
    });

    $('.additionaly-insured-cb-element').change(function () {
        if ($('.additionaly-insured-cb-element:checked').length == $('.additionaly-insured-cb-element').length) {
            $('#additionaly-insured-table-selectAll').prop('checked', true);
        } else {
            $('#additionaly-insured-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/


    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-specialty-table').DataTable().columns.adjust().draw();

    });

    $('#c-specialty-table').DataTable({
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
                "width": "28%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "10%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "10%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "16%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "14%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "10%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "6%",
                "orderable": false,
                "targets": 7
            }

        ]
    });

    $('#c-specialty-table-selectAll').change(function () {
        $('.c-specialty-table-cb-element').prop('checked', this.checked);
    });

    $('.c-specialty-table-cb-element').change(function () {
        if ($('.c-specialty-table-cb-element:checked').length == $('.c-specialty-table-cb-element').length) {
            $('#c-specialty-table-selectAll').prop('checked', true);
        } else {
            $('#c-specialty-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/


    $('a[href="#required-items-tabs"]').on('shown.bs.tab', function (e) {

        $('#required-items-table').DataTable().columns.adjust().draw();

    });

    $('#required-items-table').DataTable({
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

    $('#required-items-table-selectAll').change(function () {
        $('.required-items-table-cb-element').prop('checked', this.checked);
    });

    $('.required-items-table-cb-element').change(function () {
        if ($('.required-items-table-cb-element:checked').length == $('.required-items-table-cb-element').length) {
            $('#required-items-table-selectAll').prop('checked', true);
        } else {
            $('#required-items-table-selectAll').prop('checked', false);
        }
    });


    /********************************************************************************************************/


    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-options-table').DataTable().columns.adjust().draw();

    });

    $('#c-options-table').DataTable({
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
                "width": "12.57%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "12.57%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "12.57%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "12.57%",
                "orderable": true,
                "targets": 4
            },
            {
                "width": "12.57%",
                "orderable": true,
                "targets": 5
            },
            {
                "width": "12.57%",
                "orderable": true,
                "targets": 6
            },
            {
                "width": "12.57%",
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

    $('#c-options-table-selectAll').change(function () {
        $('.c-options-table-cb-element').prop('checked', this.checked);
    });

    $('.c-options-table-cb-element').change(function () {
        if ($('.c-options-table-cb-element:checked').length == $('.c-options-table-cb-element').length) {
            $('#c-options-table-selectAll').prop('checked', true);
        } else {
            $('#c-options-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/


    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-exclusions-table').DataTable().columns.adjust().draw();

    });

    $('#c-exclusions-table').DataTable({
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
                "orderable": false,
                "targets": 2
            }

        ]
    });

    $('#c-exclusions-table-selectAll').change(function () {
        $('.c-exclusions-table-cb-element').prop('checked', this.checked);
    });

    $('.c-exclusions-table-cb-element').change(function () {
        if ($('.c-exclusions-table-cb-element:checked').length == $('.c-exclusions-table-cb-element').length) {
            $('#c-exclusions-table-selectAll').prop('checked', true);
        } else {
            $('#c-exclusions-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/


    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-policy-enhancements-table').DataTable().columns.adjust().draw();

    });

    $('#c-policy-enhancements-table').DataTable({
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
                "orderable": false,
                "targets": 2
            }

        ]
    });

    $('#c-policy-enhancements-table-selectAll').change(function () {
        $('.c-policy-enhancements-table-cb-element').prop('checked', this.checked);
    });

    $('.c-policy-enhancements-table-cb-element').change(function () {
        if ($('.c-policy-enhancements-table-cb-element:checked').length == $('.c-policy-enhancements-table-cb-element').length) {
            $('#c-policy-enhancements-table-selectAll').prop('checked', true);
        } else {
            $('#c-policy-enhancements-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/


    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-deduction-table').DataTable().columns.adjust().draw();

    });

    $('#c-deduction-table').DataTable({
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
                "width": "44%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "44%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "6%",
                "orderable": false,
                "targets": 2
            }

        ]
    });

    $('#c-deduction-table-selectAll').change(function () {
        $('.c-deduction-table-cb-element').prop('checked', this.checked);
    });

    $('.c-deduction-table-cb-element').change(function () {
        if ($('.c-deduction-table-cb-element:checked').length == $('.c-deduction-table-cb-element').length) {
            $('#c-deduction-table-selectAll').prop('checked', true);
        } else {
            $('#c-deduction-table-selectAll').prop('checked', false);
        }
    });


    /********************************************************************************************************/


    $('a[href="#insured-tabs"]').on('shown.bs.tab', function (e) {

        $('#profile-table').DataTable().columns.adjust().draw();

    });

    $('#profile-table').DataTable({
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

    $('#profile-table-selectAll').change(function () {
        $('.profile-cb-element').prop('checked', this.checked);
    });

    $('.profile-cb-element').change(function () {
        if ($('.profile-cb-element:checked').length == $('.profile-cb-element').length) {
            $('#profile-table-selectAll').prop('checked', true);
        } else {
            $('#profile-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/


    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#a-invoices-table').DataTable().columns.adjust().draw();

    });

    $('#a-invoices-table').DataTable({
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

    $('#a-invoices-table-selectAll').change(function () {
        $('.a-invoices-cb-element').prop('checked', this.checked);
    });

    $('.a-invoices-cb-element').change(function () {
        if ($('.a-invoices-cb-element:checked').length == $('.a-invoices-cb-element').length) {
            $('#a-invoices-table-selectAll').prop('checked', true);
        } else {
            $('#a-invoices-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/


    $('a[href="#accounting-tabs"]').on('shown.bs.tab', function (e) {

        $('#a-payments-table').DataTable().columns.adjust().draw();

    });

    $('#a-payments-table').DataTable({
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

    $('#a-payments-table-selectAll').change(function () {
        $('.a-payments-cb-element').prop('checked', this.checked);
    });

    $('.a-payments-cb-element').change(function () {
        if ($('.a-payments-cb-element:checked').length == $('.a-payments-cb-element').length) {
            $('#a-payments-table-selectAll').prop('checked', true);
        } else {
            $('#a-payments-table-selectAll').prop('checked', false);
        }
    });
    /********************************************************************************************************/

    $('a[href="#coverage-tabs"]').on('shown.bs.tab', function (e) {

        $('#endorsements-table').DataTable().columns.adjust().draw();

    });
    $('#endorsements-table').DataTable({
        "scrollY": "340px",
        "scrollCollapse": true,
        "paging": false,
        "filter": false,
        "info": false,
        "columnDefs": [{
                "width": "5%",
                "orderable": false,
                "targets": 0
            },
            {
                "width": "29.66%",
                "orderable": true,
                "targets": 1
            },
            {
                "width": "29.66%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "29.66%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "6%",
                "orderable": false,
                "targets": 4
            }

        ]
    });

    $('#endorsements-table-selectAll').change(function () {
        $('.endorsements-cb-element').prop('checked', this.checked);
    });

    $('.endorsements-cb-element').change(function () {
        if ($('.endorsements-cb-element:checked').length == $('.endorsements-cb-element').length) {
            $('#endorsements-table-selectAll').prop('checked', true);
        } else {
            $('#endorsements-table-selectAll').prop('checked', false);
        }
    });
    /***************************************************************************************************/
    $('a[href="#notes-tabs"]').on('shown.bs.tab', function (e) {

        $('#c-notes-table').DataTable().columns.adjust().draw();

    });

    $('#c-notes-table').DataTable({
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
                "orderable": false,
                "targets": 2
            }

        ]
    });

    $('#c-notes-table-selectAll').change(function () {
        $('.c-notes-table-cb-element').prop('checked', this.checked);
    });

    $('.c-notes-table-cb-element').change(function () {
        if ($('.c-notes-table-cb-element:checked').length == $('.c-notes-table-cb-element').length) {
            $('#c-notes-table-selectAll').prop('checked', true);
        } else {
            $('#c-notes-table-selectAll').prop('checked', false);
        }
    });
    /*****************************************************************************************************/
    $('a[href="#loss-history-tabs"]').on('shown.bs.tab', function (e) {

        $('#claims-items-table').DataTable().columns.adjust().draw();

    });

    $('#claims-items-table').DataTable({
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

    $('#claims-items-table-selectAll').change(function () {
        $('.claims-items-table-cb-element').prop('checked', this.checked);
    });

    $('.claims-items-table-cb-element').change(function () {
        if ($('.claims-items-table-cb-element:checked').length == $('.claims-items-table-cb-element').length) {
            $('#claims-items-table-selectAll').prop('checked', true);
        } else {
            $('#claims-items-table-selectAll').prop('checked', false);
        }
    });

    /********************************************************************************************************/

    $('#single-insured-location-popup').on('shown.bs.modal', function (e) {

        $('#single-insured-location-table').DataTable().columns.adjust().draw();

    });

    $('#single-insured-location-table').DataTable({
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
                "width": "17%",
                "orderable": true,
                "targets": 2
            },
            {
                "width": "30%",
                "orderable": true,
                "targets": 3
            },
            {
                "width": "17%",
                "orderable": true,
                "targets": 4
            }

        ]
    });

    $('#single-insured-location-table-selectAll').change(function () {
        $('.single-insured-location-cb-element').prop('checked', this.checked);
    });

    $('.single-insured-location-cb-element').change(function () {
        if ($('.single-insured-location-cb-element:checked').length == $('.single-insured-location-cb-element').length) {
            $('#single-insured-location-table-selectAll').prop('checked', true);
        } else {
            $('#single-insured-location-table-selectAll').prop('checked', false);
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