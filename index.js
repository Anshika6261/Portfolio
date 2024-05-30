
let tabcontent = document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tab of tabcontent){
        tab.classList.remove('active-tab');
    }
    let elem = document.getElementById(tabname);
    elem.classList.add('active-tab');
}

