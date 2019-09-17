$("form :button").on("click", function(){
        event.preventDefault();
        let item = document.getElementById("shopping-list-entry").value;
        let checkButton = 'check';
        let deleteButton = 'delete';
        $(".shopping-list").append(
            <li>\
            <span class='shopping-item'>+ item +</span>\
            <div class='shopping-item-controls'>\
                <button class='shopping-item-toggle'>\
                    <span class='button-label'>+ checkButton +</span>\
                </button>\
                <button class='shopping-item-delete'>\
                    <span class='button-label'>+ deleteButton +</span>\
                </button>\
                </div>\
            </li>
        )});
        

$("button.shopping-item-toggle").on("click", function(){
    $(this).parents().siblings(".shopping-item").toggleClass("shopping-item__checked");
});

$("button.shopping-item-delete").on("click", function(){
    $(this).parents().eq(1).remove();
});
