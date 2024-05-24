// $('.card').card_defenition();




// function card(name, category, type, color) {
//     const name = object.target.dataset.name;
//     const category = object.target.dataset.category;
//     const type = object.target.dataset.type;
//     const color = object.target.dataset.color;
//     console.log(`Card clicked: Name=${name} Category=${category}, Type=${type}, Color=${color}`);
// }

$('.card').bind('click', click);

function click() {
    var obj = $(this);

    if (obj.hasClass("removed")) {
        $('#badge' + obj[0].id).remove();

        obj.removeClass("removed").addClass("selected");
        obj.append('<div class="selected-badge" id="badge' + obj[0].id + '">جواب قطعی<</div>');
    }
    else if (obj.hasClass("selected")) {
        $('#badge' + obj[0].id).remove();

        obj.removeClass("selected");
    }
    else {
        obj.addClass("removed");
        obj.append('<div class="removed-badge" id="badge' + obj[0].id + '">X حذف شده X</div>');
    }
}