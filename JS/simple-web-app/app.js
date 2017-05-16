// Using DOM API

// query DOM

// let box = document.querySelector('.jumbotron');
// let showBtn = document.querySelector('.btn-primary');
// let hideBtn = document.querySelector('.btn-danger');

// //  bind Event-Handler to DOM elemnts

// showBtn.addEventListener('click', function (e) {
//     box.style.display = "";
// });

// hideBtn.addEventListener('click', function (e) {
//     box.style.display = "none";
// });

//-----------------------------------------------

// using jQuery

$(function () { 
    let $box = $('.jumbotron');
    $('.btn-danger').click(function () { 
        $box.hide(5000)
    });
    $('.btn-primary').click(function () { 
        $box.show(5000);
    });
})

//-----------------------------------------------