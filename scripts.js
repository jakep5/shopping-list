$(function(){
    $("form :button").on("click", function(){
            event.preventDefault();
            let item = document.getElementById("shopping-list-entry").value;
            $(".shopping-list").append(`
                <li>
                <span class='shopping-item'>${item}</span>
                <div class='shopping-item-controls'>
                    <button class='shopping-item-toggle'>
                        <span class='button-label'>check</span>
                    </button>
                    <button class='shopping-item-delete'>
                        <span class='button-label'>delete</span>
                    </button>
                    </div>
                </li>
            `)});
            
    $("ul").on("click", ".shopping-item-toggle", function() {
        $(this).parents().siblings(".shopping-item").toggleClass("shopping-item__checked");
    });

    $("ul").on("click", ".shopping-item-delete", function() {
        $(this).parents().eq(1).remove();
    });
})
