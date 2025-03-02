let todolist = document.querySelector(".todolist");

todolist.addEventListener("click", event => {
    let li = event.target;
    if (li.tagName == "LI") {
        li.classList.toggle("done");
    }
    if (li.parentElement.tagName == "LI") {
        li.parentElement.tagName.classList.toggle("done");
    }
});