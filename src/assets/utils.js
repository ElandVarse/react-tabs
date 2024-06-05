import React from "react"

export default function selectTabFunction(tabData) {
    const selectTab = document.querySelectorAll(".tabs__info__menu li")
    
    selectTab.forEach(function(tab) {
      tab.addEventListener("click", function() {
        // Remove Class from the element;
        selectTab.forEach(function(toRemoveClass) {
            toRemoveClass.classList.remove("selected")
        })
        
        // Adds the Class to the clicked element;    
        tab.classList.add("selected")

        // Changes the description content
        document.querySelector(".tabs__description__title").textContent = tabData[tab.value].title;
        document.querySelector(".tabs__description__text").textContent = tabData[tab.value].content;
        document.querySelector("#tab-img").src = tabData[tab.value].image;
        
      })
    })
}

