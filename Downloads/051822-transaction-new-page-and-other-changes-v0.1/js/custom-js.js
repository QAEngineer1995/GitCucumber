/********************************user page serchbar show and hide on click**************************/
$(document).ready(function() {
    $('#search-user-button').mouseover(function() {
        if (!$('#search-user-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/blue-searchbar.svg';
            });
        }
    });

    $('#search-user-button').mouseout(function() {
        if (!$('#search-user-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/grey-searchbar.svg';
            });
        }
    });



    $('#search-user-list').hide();
    $('#search-user-button').on('click',
        function() {
            $('#search-user-list').hide();
            if ($('#search-user-button').hasClass("bg-transparent")) {
                $('#search-user-button').removeClass("bg-transparent").addClass("bg-primary");
                $('#search-user-list').addClass("pl-5").show();
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/white-searchbar.svg';
                });
            } else {
                $('#search-user-button').removeClass("bg-primary").addClass("bg-transparent");
                $('#search-user-list').hide();
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/grey-searchbar.svg';
                });
            }
        }
    );




$('#search-user-list-title').hide();
    $('#search-user-button-title').on('click',
        function() {
            $('#search-text-title, #search-user-list-title').toggle();
            if ($('#search-user-button-title').hasClass("bg-transparent")) {
                $('#search-user-button-title').removeClass("bg-transparent").addClass("bg-primary");

                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/white-searchbar.svg';
                });
            } else {
                $('#search-user-button-title').removeClass("bg-primary").addClass("bg-transparent");
                $('img', this).attr('src', function(i, oldSrc) {
                    return 'img/grey-searchbar.svg';
                });
            }
        }
    );

});
/*******************************maximize datatable in user page***********************/
$(document).ready(function() {
    $('#maximize-button').mouseover(function() {
        if (!$('#maximize-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/maximize-blue.svg';
            });
        }
    });

    $('#maximize-button').mouseout(function() {
        if (!$('#maximize-button').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/maximize-grey.svg';
            });
        }
    });

    $('#maximize-button').click(function() {
        if ($('.maximize-hide-div:hidden').length == 0) {

            $(".maximize-hide-div").removeClass("d-flex").css("display", "none");
            $('#maximize-button').removeClass("bg-transparent").addClass("bg-primary");

            $('img', this).attr('src', function(i, oldSrc) {
                return 'img/minimize-white.svg';
            });

        } else {
            $(".maximize-hide-div").addClass("d-flex").css("display", "block");
            $('#maximize-button').removeClass("bg-primary").addClass("bg-transparent");

            $('img', this).attr('src', function(i, oldSrc) {
                return 'img/maximize-grey.svg';
            });

        }
    });
});
/*************************product slider********************/
$(document).ready(function() {
    $('.slider-nav').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

/*$('.slider-nav').slick({
    autoplay: false,
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
})
.on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});*/


/********************************metrix tab image change onclick******************************/
/*$(document).ready(function() {
    $("#one-tab").click(function() {
        $("#one-tab img").attr("src", "img/view-one-blue.svg");
        $("#two-tab img").attr("src", "img/view-two-grey.svg");
        $("#three-tab img").attr("src", "img/view-three.svg");
    });
    $("#two-tab").click(function() {
        $("#one-tab img").attr("src", "img/view-one.svg");
        $("#two-tab img").attr("src", "img/view-two.svg");
        $("#three-tab img").attr("src", "img/view-three.svg");
    });
    $("#three-tab").click(function() {
        $("#one-tab img").attr("src", "img/view-one.svg");
        $("#two-tab img").attr("src", "img/view-two-grey.svg");
        $("#three-tab img").attr("src", "img/view-three-blue.svg");
    });
});*/
$("#one-tab").click(function() {
     $("#two").addClass("active show");
     $("#one").removeClass("active show");
     $("#one-tab").css("display", "none");
     $("#two-tab").css("display", "block");
     $("#three-tab").css("display", "none");
 });

$('#one-tab').mouseover(function() {
        if (!$('#one-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-one-blue.svg';
            });
        }
    });

    $('#one-tab').mouseout(function() {
        if (!$('#one-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-one.svg';
            });
        }
    });

 $("#two-tab").click(function() {
     $("#three").addClass("active show");
     $("#two").removeClass("active show");
     $("#one-tab").css("display", "none");
     $("#two-tab").css("display", "none");
     $("#three-tab").css("display", "block");
 });

$('#two-tab').mouseover(function() {
        if (!$('#two-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-two.svg';
            });
        }
    });

    $('#two-tab').mouseout(function() {
        if (!$('#two-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-two-grey.svg';
            });
        }
    });

 $("#three-tab").click(function() {
     $("#one").addClass("active show");
     $("#three").removeClass("active show");
     $("#one-tab").css("display", "block");
     $("#two-tab").css("display", "none");
     $("#three-tab").css("display", "none");
 });

 $('#three-tab').mouseover(function() {
        if (!$('#three-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-three-blue.svg';
            });
        }
    });

    $('#three-tab').mouseout(function() {
        if (!$('#three-tab').hasClass("bg-primary")) {
            $('img', this).attr('src', function(i, oldSrc) {

                return 'img/view-three.svg';
            });
        }
    });
/****************************jqurey custom dropdown***************************************/

$(document).ready(function() {
    $('#user-table-header-two').removeClass("d-sm-flex").hide();
    $(".cb-element, #selectAll").on('change', function(e) {
        if ($('.cb-element:checked').length > 0) {
            $('#user-table-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#user-table-header-two').addClass("d-sm-flex").css("display", "block");
        } else {
            $('#user-table-header-one').addClass("d-sm-flex").css("display", "block");
            $('#user-table-header-two').removeClass("d-sm-flex").css("display", "none");
        }
    });
});
/******************************user table show and hide**********************************/
$('#user-table-header-three').removeClass("d-sm-flex").css("display", "none");

function switchVisibleAddUser() {
    if (document.getElementById('addUserSectionOne')) {

        if (document.getElementById('addUserSectionOne').classList == 'd-none') {
            document.getElementById('addUserSectionOne').classList.remove('d-none');
            document.getElementById('addUserSectionTwo').classList.add('d-none');
            $('#user-table-header-three').removeClass("d-sm-flex").css("display", "none");
            $('#user-table-header-one').addClass("d-sm-flex").css("display", "block");
            $(".user-table-comp").removeClass("d-none");
            $(".added-new-user").html($('<i/>', {
                class: 'fas fa-plus fa-sm text-white pr-2'
            })).append('Add User');

        } else {
            document.getElementById('addUserSectionOne').classList.add('d-none');
            document.getElementById('addUserSectionTwo').classList.remove('d-none');
            document.getElementById('user-table-header-three').classList.remove('d-none');
            $('#user-table-header-three').addClass("d-sm-flex").css("display", "block");
            $('#user-table-header-one').removeClass("d-sm-flex").css("display", "none");
            $('#user-table-header-four').removeClass("d-sm-flex").css("display", "none");
            $(".user-table-comp").addClass("d-none");
            $(".added-new-user").html($('<i/>', {
                class: 'fas fa-arrow-left fa-sm text-white pr-2'
            })).append('Back');

        }
    }
}
/************************************profile*******************************************************/
$('#user-profile-header-four').removeClass("d-sm-flex").css("display", "none");

function switchVisibleProfileUser() {
    if (document.getElementById('addProfileSectionTwo')) {

        if (document.getElementById('addProfileSectionTwo').classList == 'd-none') {
            document.getElementById('addProfileSectionTwo').classList.add('d-none');
            $('#profile-header-three').removeClass("d-sm-flex").css("display", "none");
           

        } else {
            document.getElementById('addProfileSectionTwo').classList.remove('d-none');
            document.getElementById('profile-header-three').classList.remove('d-none');
            $('#profile-header-three').addClass("d-sm-flex").css("display", "block");
            $('#user-profile-header-four').removeClass("d-sm-flex").css("display", "none");
            

        }
    }
}

$('#editprofileInformation').click(function() {
    if (!$('#addProfileSectionTwo').hasClass('d-none')) {
        $("#addProfileSectionTwo").addClass("d-none");
        $("#addProfileSectionThree").removeClass("d-none");
        $("#editprofileInformation").addClass("d-none");
        $("#profile-header-three").removeClass("d-sm-flex").css("display", "none");
        $("#user-profile-header-four").addClass("d-sm-flex").css("display", "block");

    } else {
        $("#addProfileSectionTwo").removeClass("d-none");
        $("#addProfileSectionThree").addClass("d-none");
        $("#editprofileInformation").removeClass("d-none");
        $("#profile-header-three").addClass("d-sm-flex").css("display", "block");
        $("#user-profile-header-four").removeClass("d-sm-flex").css("display", "none");
    }

    return false;
});


$('#addProfileInformation').click(function() {
    if (!$('#addProfileSectionThree').hasClass('d-none')) {
        $("#addProfileSectionTwo").removeClass("d-none");
        $("#addProfileSectionThree").addClass("d-none");
        $("#editprofileInformation").removeClass("d-none");
        $("#profile-header-three").addClass("d-sm-flex").css("display", "block");
        $("#user-profile-header-four").removeClass("d-sm-flex").css("display", "none");
    } else {
        $("#user-profile-header-four").addClass("d-sm-flex").css("display", "block");
        $("#profile-header-three").removeClass("d-sm-flex").css("display", "none");
        $("#editprofileInformation").addClass("d-none");

    }
});
/************ Prevent dropdown to be closed when we click on an accordion link  ***************/
$(document).ready(function() {
    $('.dropdown-accordion').on('click', '.select2-dropdown--below, a[data-toggle="collapse"],.dropdown-menu, .card-link, #collapseOne, #collapseTwo,.dropdown-menu', function(event) {
        $($(this).attr('href')).collapse('toggle');
        event.stopPropagation();
    });
    $('.dropdown-menu').on('click', '.select2-dropdown--below, .switch, .input-wrapper, .container-checkbox, .floating-label, .dropdown-menu', function(event) {
        event.stopPropagation();
    });
    $('.da_018, .da_015').on('hide.bs.dropdown', function(e) {
        if (($(this).find('select').select2('isOpen') === true)) {
            e.preventDefault();
        }
    });

    $('.da_017').on('hide.bs.dropdown', function (e) {
    if (e.clickEvent) {
      e.preventDefault();
        }
    });

});
/************************add user photo attache*****************************/

$("#myDropzone").dropzone({
    dictDefaultMessage: "Drag & Drop files in this area or Click Here to attach",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    autoProcessQueue: false,
    paramName: "file",
    clickable: true,
    maxFiles: 1,
    maxFilesize: 1, //in mb
    addRemoveLinks: true,
    acceptedFiles: '.png,.jpg',
    init: function() {
        this.on("sending", function(file, xhr, formData) {
        });
        this.on("success", function(file, responseText) {

        });
        this.on("addedfile", function(file) {

        });
        this.on('addedfile', function(file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
            this.on("thumbnail", function(file, dataUrl) {
                    $('.dz-image').last().find('img').attr({
                        width: '100%',
                        height: '300px'
                    });
                }),
                this.on("success", function(file) {
                    $('.dz-image').css({
                        "width": "100%",
                        "height": "300px"
                    });
                })
        });


         var mockFile = { 
                    name: "myimage.jpg", 
                    size: 12345, 
                    type: 'image/jpeg', 
                    status: Dropzone.ADDED, 
                    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                };
                // Call the default addedfile event handler
                this.emit("addedfile", mockFile);
                // And optionally show the thumbnail of the file:
                this.emit("thumbnail", mockFile, "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg");
                this.files.push(mockFile);
    }

});

$("#upload-file-dropzon").dropzone({
    //thumbnailWidth: 300,
    //thumbnailHeight: 300,
    autoProcessQueue: false,
    parallelUploads:10,
    paramName: "file",
    clickable: true,
    uploadMultiple: true,
    addRemoveLinks: false,
    //previewTemplate: '<li><figure><img data-dz-thumbnail /><i title="Remove Image" class="icon-trash" data-dz-remove ></i></figure></li>',
    previewTemplate: '<div class="d-flex justify-content-between align-items-center border-bottom"><div class="d-flex align-items-center col-10 py-2"><div class="mr-2"><img src="img/file-text-outline.svg"/></div><div class="mr-2 w400 text-truncate" data-dz-name></div><div class="mr-2" data-dz-size></div></div><div><div class="cursor-pointer text-gray-500 px-1" title="Remove File" data-dz-remove>×</div></div></div>',
});

$('.dz-remove','a').attr('class','d-none');
/******************************dashboard serchbar show and hide************************/
$(document).ready(function() {
    $(".da_003 a span").addClass("da_020");
    $('#searchDropdown').click(function() {
        $('img', this).attr('src', function(i, oldSrc) {
            return oldSrc == 'img/grey-searchbar.svg' ? 'img/blue-searchbar.svg' : 'img/grey-searchbar.svg';
        });
        $('.searchbar-main').toggleClass("d-none");


        if (!$('#main-search').is(':visible'))

        {
            //alert("one");
            $("ul").find(".da_003").removeClass("show");
            $(".da_003 a span").removeClass("da_020");
        } else {
            $("ul").find(".da_003").addClass("show");
            $(".da_003 a span").addClass("da_020");
        }

        return false;
    });

});

/**********************carousel slider next and prev button enable and disable******************************/
$('#carousel-example-two').carousel({
    wrap: false
}).on('slid.bs.carousel', function() {
    var curSlide = $('#carousel-example-two').find('.active').index();

    if (curSlide > 0) {
        $('.icon-prev').css("opacity", "1");
        $('.icon-next').css("opacity", "0.5");
    } else {
        $('.icon-prev').css("opacity", "0.5");
        $('.icon-next').css("opacity", "1");
    }

});


$('#carousel-example-three').carousel({
    wrap: false
}).on('slid.bs.carousel', function() {
    var curSlide = $('#carousel-example-three').find('.active').index();

    if (curSlide > 0) {
        $('.icon-prev').css("opacity", "1");
        $('.icon-next').css("opacity", "0.5");
    } else {
        $('.icon-prev').css("opacity", "0.5");
        $('.icon-next').css("opacity", "1");
    }

});

$('#carousel-example-four').carousel({
    wrap: false
}).on('slid.bs.carousel', function() {
    var curSlide = $('#carousel-example-four').find('.active').index();

    if (curSlide > 0) {
        $('.icon-prev').css("opacity", "1");
        $('.icon-next').css("opacity", "0.5");
    } else {
        $('.icon-prev').css("opacity", "0.5");
        $('.icon-next').css("opacity", "1");
    }

});


/*****************************EXpand collapse name tooltip change********************************/

var count = 0;
$("#sidebarToggleTop").click(function() {

    if (count == 0) {
        $(this).attr('title', 'Expand');
    } else {
        $(this).attr('title', 'Collapse');
    }

    count = 1 - count;
});




/***************************datepicker*********************/
$(function() {
    $("#user-date-of-birth").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#Created-user-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#Effective-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#Effective-date-single-rating").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#Retro-date-single-rating").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#Expiration-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#add-insured-dob").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#edit-insured-dob").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#additionally-insured-retro-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

$(function() {
    $("#additionally-insured-terminate-date").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "1901:2999"
    });
});

/******************************edit user page******************************/
$('#user-table-header-four').removeClass("d-sm-flex").css("display", "none");

$('#editInformation').click(function() {
    if (!$('#addUserSectionTwo').hasClass('d-none')) {
        $("#addUserSectionTwo").addClass("d-none");
        $("#addUserSectionThree").removeClass("d-none");
        $("#editInformation").addClass("d-none");
        $("#user-table-header-three").removeClass("d-sm-flex").css("display", "none");
        $("#user-table-header-four").addClass("d-sm-flex").css("display", "block");

    } else {
        $("#addUserSectionTwo").removeClass("d-none");
        $("#addUserSectionThree").addClass("d-none");
        $("#editInformation").removeClass("d-none");
        $("#user-table-header-three").addClass("d-sm-flex").css("display", "block");
        $("#user-table-header-four").removeClass("d-sm-flex").css("display", "none");
    }

    return false;
});

$('#addUserInformation').click(function() {
    if (!$('#addUserSectionThree').hasClass('d-none')) {
        $("#addUserSectionTwo").removeClass("d-none");
        $("#addUserSectionThree").addClass("d-none");
        $("#editInformation").removeClass("d-none");
        $("#user-table-header-three").addClass("d-sm-flex").css("display", "block");
        $("#user-table-header-four").removeClass("d-sm-flex").css("display", "none");
    } else {
        $("#user-table-header-four").addClass("d-sm-flex").css("display", "block");
        $("#user-table-header-three").removeClass("d-sm-flex").css("display", "none");
        $("#editInformation").addClass("d-none");

    }
});
/******************header small*********************/
$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
        $('#header-nav').addClass('small-nav');
        //$('#header-nav').find('.navbar-s-text').removeClass('h3 my-1').addClass('h4 mb-2 mt-2');
    } else {
        $('#header-nav').removeClass('small-nav');
        //$('#header-nav').find('.navbar-s-text').removeClass('h4 mb-2 mt-2').addClass('h3 my-1');
    }
});
/*****************Slick slider card height manage ********************/

var handleEqualHeightSlides = function() {
    var maxHeight = Math.max.apply(null, $(".slick-slide").map(function() {
        return $(this).height();
    }).get());
    $('.slick-slide > .card').css('height', maxHeight + 'px');
};

$(window).on('load resize orientationchange', function() {
    $('.slick-slide > .card').css('height', 'auto');
    $('.slider-nav').slick('resize');
    handleEqualHeightSlides();
});


$(".sidebarToggleTopRight").click(function(){
  $('.slider-nav').slick('resize');
});

$("#sidebarToggleTop").click(function(){
  $('.slider-nav').slick('resize');
});
/***************************Script for broker add edit ******************************/
$('#broker-table-header-two').removeClass("d-flex").css("display", "none");

function switchVisibleAddbroker() {
    if (document.getElementById('addBrokerSectionOne')) {

        if (document.getElementById('addBrokerSectionOne').classList == 'd-none') {
            document.getElementById('addBrokerSectionOne').classList.remove('d-none');
            document.getElementById('addBrokerSectionTwo').classList.add('d-none');
            $('#broker-table-header-one').addClass("d-flex").css("display", "block");
            $('#broker-table-header-three').css("display", "block");
            $('#broker-table-header-two').removeClass("d-flex").css("display", "none");
            $(".broker-table-comp").removeClass("d-none");
            $(".added-new-broker").html($('<i/>', {
                class: 'fas fa-plus fa-sm text-white pr-2'
            })).append('Add Broker');

        } else {
            document.getElementById('addBrokerSectionOne').classList.add('d-none');
            document.getElementById('addBrokerSectionTwo').classList.remove('d-none');
            $('#broker-table-header-one').removeClass("d-flex").css("display", "none");
            $('#broker-table-header-two').addClass("d-flex").css("display", "block");
            $('#broker-table-header-three').css("display", "none");
            $(".user-table-comp").addClass("d-none");
            $(".added-new-broker").html($('<i/>', {
                class: 'fas fa-arrow-left fa-sm text-white pr-2'
            })).append('Back');

        }
    }
}


$(document).ready(function() {
    $('#broker-check-div-two').removeClass("d-sm-flex").hide();
    $(".cb-element, #selectAll").on('change', function(e) {
        if ($('.cb-element:checked').length > 0) {
            $('#broker-check-div-one').removeClass("d-sm-flex").css("display", "none");
            $('#broker-check-div-two').addClass("d-sm-flex").css("display", "block");
        } else {
            $('#broker-check-div-one').addClass("d-sm-flex").css("display", "block");
            $('#broker-check-div-two').removeClass("d-sm-flex").css("display", "none");
        }
    });
});


/******************************workspace table show and hide**********************************/
$(document).ready(function() {
    $('#workspace-check-div-two').removeClass("d-sm-flex").hide();
    $(".cb-element, #selectAll").on('change', function(e) {
        if ($('.cb-element:checked').length > 0) {
            $('#workspace-check-div-one').removeClass("d-sm-flex").css("display", "none");
            $('#workspace-check-div-two').addClass("d-sm-flex").css("display", "block");
        } else {
            $('#workspace-check-div-one').addClass("d-sm-flex").css("display", "block");
            $('#workspace-check-div-two').removeClass("d-sm-flex").css("display", "none");
        }
    });
});
/***********comment dropdown filter script************/
$('.comment-filter-drp').click(function(e) {
    e.stopPropagation();
});

$('.customCheckDrp').on('change', function() {
   $('.customCheckDrp').not(this).prop('checked', false);
});