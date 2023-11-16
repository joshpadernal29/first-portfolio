    // tablinks for about-tabs
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    };

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    };
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//navigation menu
let sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right = "0";
};
function closemenu(){
    sidemenu.style.right = "-200px";
};


