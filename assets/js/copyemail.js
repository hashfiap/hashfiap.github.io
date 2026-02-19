function copyEmail(element) {
    const email = "hashfi.ap@gmail.com";
    
    // 1. Copy to Clipboard
    navigator.clipboard.writeText(email).then(() => {
        
        // 2. Change icon color briefly
        element.style.color = "#d39a64"; 
        setTimeout(() => { element.style.color = ""; }, 2000);

        // 3. Show the Toast Notification
        var x = document.getElementById("toast");
        x.className = "show";
        
        // Remove the show class after 3 seconds
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
}
