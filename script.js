document.addEventListener("DOMContentLoaded", display_content);

var create=document.getElementById("create");
var form=document.getElementById("form");
var cancel=document.getElementById("cancel-btn");
create.addEventListener("click",function(){
    create.classList.add("hidden");
    form.classList.remove("hidden");
})

cancel.addEventListener("click",function(){
    create.classList.remove("hidden");
    form.classList.add("hidden");
})
var save=document.getElementById("save-btn");

save.addEventListener("click",add_content);

function add_content(e){
    e.preventDefault();
    var author=document.getElementById("name").value;
    var category=document.getElementById("category").value;
    var content=document.getElementById("content").value;
    var img=document.getElementById("img");
    var imgurl='';
    if(img.files&&img.files[0]){
        var file=img.files[0];
        imgurl=URL.createObjectURL(file);
    }
    console.log(imgurl); 
    var blogs=JSON.parse(localStorage.getItem("blogs"))||[];
    blogs.push({author,category,content,imgurl})
    localStorage.setItem("blogs",JSON.stringify(blogs));
    display_content();
    form.classList.add("hidden");
    create.classList.remove("hidden");
}

function display_content(){
    var blogs=JSON.parse(localStorage.getItem("blogs"))||[];
    var blogcontent='';
    blogs.forEach((blog,ind) => {
        blogcontent+=`<div class="border border-gray-400 rounded-md shadow-lg h-auto w-100" data-index=${ind}> 
        <img src="${blog.imgurl}" alt="Blog Image" class=" w-full h-auto mb-5 p-3">
        <h2 class="text-center font-extrabold mb-1 text-blue-500 text-xl">${blog.author}</h2>
        <p class="text-center font-bold mb-3 text-purple-400">${blog.category}</p>
        <div class="flex justify-around mb-0">
        <button class="border bg-blue-400 px-3 py-1 rounded-sm edit">Edit</button> 
        <button class="border bg-red-400 px-3 py-1 rounded-sm delete">Delete</button> 
        <button class="view"><i class="fa-solid fa-eye"></i></button></div></div>`;
    });

    document.getElementById("display").innerHTML=blogcontent;

    var delete_btns=document.querySelectorAll(".delete");
    delete_btns.forEach((delete_btn)=>{
        delete_btn.addEventListener("click",function(){
            var ind=this.getAttribute("data-index");
            delete_content(ind);
        });
    });

    var edit_btns=document.querySelectorAll(".edit");
    edit_btns.forEach((edit_btn)=>{
        edit_btn.addEventListener("click",function(){
            var index=this.getAttribute("data-index");
            edit_content(index);
    });
});

}

function delete_content(index){
        var blogs=JSON.parse(localStorage.getItem("blogs"))||[];
        blogs.splice(index,1);

        localStorage.setItem("blogs",JSON.stringify(blogs));
        display_content();
}

function edit_content(index){
    var blogs=JSON.parse(localStorage.getItem("blogs"))||[];
    var blog=blogs[index];
    
    document.getElementById("name").value=blog.author;
    document.getElementById("category").value=blog.category;
    document.getElementById("content").value=blog.content;
    create.classList.add("hidden");
    form.classList.remove("hidden");
    
}