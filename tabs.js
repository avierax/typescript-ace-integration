function showTab(event, divid){
    for(let tab of document.querySelectorAll(".tabcontent")) {
        tab.style.display = (tab.id == divid)? "block" : "none";
    }
    for(let button of document.querySelectorAll(".tablinks")) {
        if(button==event.currentTarget)
            button.classList.add("active");
        else
            button.classList.remove("active");
    }
}