import React from "react"

export default function selectTabFunction() {
    const selectTab = document.querySelectorAll(".tabs__info__menu li")
    
    selectTab.forEach(function(tab) {
      tab.addEventListener("click", function() {
        // Remove Class from the element;
        selectTab.forEach(function(toRemoveClass) {
            toRemoveClass.classList.remove("selected")
        })
        
        // Adds the Class to the clicked element;    
        tab.classList.add("selected")
      })
    })
}