const tabIds= ["frames-tab","decors-tab","jwellery-tab"];
const items= ["frames-tab-items","decors-tab-items","jwellery-tab-items"];

document.addEventListener("click", function(event){
    var clicked = event.target;
    if(tabIds.includes(clicked.id)) {
        var currentID = clicked.id || "";
        toggleTabs(currentID);
       
    }
    
    

});

function toggleTabs(id) {
   
    let clickedTab = tabIds.filter(val=> val === id);
    let unclickedTabs =  tabIds.filter(val=> val != id);
    clickedTab.forEach(val=> {
        document.getElementById(val).style.borderBottom="3px solid #EB4752";
        document.getElementById(`${val}-items`).style.display="block";
    });
    unclickedTabs.forEach(val=> {
        document.getElementById(val).style.borderBottom="none";
        document.getElementById(`${val}-items`).style.display="none";

    }) ; 
}






