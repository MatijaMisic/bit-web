$(function () {
    console.log("hello world");
    console.log("Juga iz Jasikovice ga defektovao");

    var images = document.querySelectorAll("img");

    images.forEach(function (element) {
        element.addEventListener("click", addBorder);
    })

    function addBorder(event) {
        if (event.target.width !== 300) {
            event.stopPropagation();
        }

        event.target.classList.add("border");
    }

    document.addEventListener("click", function (event) {
        console.log(event.target);
    })
})