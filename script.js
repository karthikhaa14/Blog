window.onload = function() {
    var create = document.getElementById("create-btn");
    let popup = document.getElementById("popup");
    var save_btn = document.getElementById("save");
    
    // When the "Create" button is clicked, show the popup
    create.addEventListener("click", create_fun);
    
    // Show popup
    function create_fun() {
        popup.classList.remove("hidden");
        console.log("Popup visible: ", !popup.classList.contains("hidden"));
        
        // After showing popup, add event listener to save button
        if (save_btn) {
            save_btn.addEventListener("click", add_content);
        }
    }
    
    // When the "Cancel" button is clicked, hide the popup
    document.getElementById("cancel").addEventListener("click", function () {
        popup.classList.add("hidden");
    });

    // Handle the save action
    var parent = document.getElementById("display-content");

    function add_content(e) {
        e.preventDefault();
        
        // Get title and content values
        var btitle = document.getElementById("title").value;
        var bcontent = document.getElementById("content").value;
        
        // Create a new blog div and populate it with title and content
        var div = document.createElement("div");
        div.className = "text-black bg-yellow-500 p-4 rounded shadow";
        div.innerHTML = `<h2>${btitle}</h2><p>${bcontent}</p>`;
        
        // Append the new blog content to the display content area
        parent.appendChild(div);
        
        // Clear the input fields
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        
        // Hide the popup
        popup.classList.add("hidden");
    }
    
    console.log("Save button:", save_btn);
}
