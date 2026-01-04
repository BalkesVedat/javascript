$(document).ready(function () {

    /* MODAL */
    $("#openModal").on("click", function () {
        $("#modal").fadeIn(300);
    });

    $("#closeModal, .modal-overlay").on("click", function (e) {
        if (e.target !== this) return;
        $("#modal").fadeOut(300);
    });

    /* TOAST */
    $("#showToast").on("click", function () {
        $("#toast")
            .fadeIn(300)
            .delay(2000)
            .fadeOut(300);
    });

    /* ACCORDION */
    $(".accordion-header").on("click", function () {
        const content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).slideUp(300);
        content.slideToggle(300);
    });

});
