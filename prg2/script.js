document.addEventListener("DOMContentLoaded", function () {
    // Expand/collapse menu items
    document.querySelectorAll(".expandable").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent bubbling
            let subMenu = this.querySelector(".nested");
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Highlight selected block
    document.querySelectorAll(".block-list li").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent bubbling
            document.querySelectorAll(".block-list li").forEach(li => li.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});

// Function to manually select a block
function selectBlock(element) {
    // Remove "selected" class from all blocks
    document.querySelectorAll(".block-list li").forEach(li => li.classList.remove("selected"));
    
    // Add "selected" class to the clicked block
    element.classList.add("selected");
}



