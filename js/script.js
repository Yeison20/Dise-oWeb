
   var titulo = document.getElementById("titulo");
   var th = document.getElementById("th");
   var primary = document.getElementById("primary");
   var mainContent = document.getElementById("contenido");
   var mainContent2 = document.getElementById("contenido2");
   var crud = document.getElementById("crud");


function main(n) {

    switch (n) {

        case 1:
            if (mainContent.style.display === "none") {
                mainContent.style.display = "block";
                mainContent2.style.display = "none"
                primary.style.display = "none";
                crud.style.display = "none";
                salida1.style.display = "none"
            } 
            break;

        case 2:
            if (mainContent2.style.display === "none") {
                mainContent2.style.display = "block";
                mainContent.style.display = "none";
                primary.style.display = "none";
                crud.style.display = "none";
                salida1.style.display = "none"
            } 
              

            break;

   
        case 4:
            if (primary.style.display = "none") {
                primary.style.display = "block";
                mainContent.style.display = "none";
                mainContent2.style.display = "none";
                crud.style.display = "none";
                salida1.style.display = "none"
            } 
            break;
        case 5:
            if (crud.style.display = "none") {
                crud.style.display = "block";
                mainContent.style.display = "none";
                mainContent2.style.display = "none";
                primary.style.display = "none"
                salida1.style.display = "none"
            }
            break;
    }

}

function main2(n){
        
        var salida1 = document.getElementById("salida1");
        
    switch (n) {
        case 1: if(salida1.style.display = "none"){
                salida1.style.display = "block";
                mainContent.style.display = "none";
                mainContent2.style.display = "none";
                primary.style.display = "none"
                
                } 
            
            break;
    }
}