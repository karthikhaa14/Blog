var create=document.getElementById("create-btn");
create.addEventListener("click",create_fun);
let popup=document.getElementById("popup");
function create_fun(){
    popup.classList.remove("hidden");
}
var parent=document.getElementById("display-content");
var save_btn=document.getElementById("save");
save_btn.addEventListener("click",add_content);
save_btn.addEventListener("click",hide);
document.getElementById("cancel").addEventListener("click",hide);
function hide(){
    popup.classList.add("hidden");
}
function add_content(e){
    e.preventDefault();
    var title=document.getElementById("title").value;
    var content=document.getElementById("content").value;
    var child=document.createElement("h1");
    child.appendChild(document.createTextNode(title));
    parent.appendChild(child);
    var child2=document.createElement("p");
    child2.appendChild(document.createTextNode(content));
    parent.appendChild(child2);
    title.value="";
    content.value="";
}