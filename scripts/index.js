function skillSwitch(a) {
        // Filter for items that match the selected tag
        const options = document.getElementsByClassName("skill-list");
        for (let i=0; i< options.length; i++) {
            if (options[i].id == a){
                options[i].hidden = false
            } else {
                options[i].hidden = true
            }
                
        }
  }