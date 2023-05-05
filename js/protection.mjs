import {registration} from "./registration.js";
import {login} from "./interface.js";


$("body").onclick("click", ".password-control", function (){
   if ($("#input-password").attributes("type") === "password"){
       $(this).classList.add("view");
       $("#input-password").attributes("type", "text");
   }else{
       $(this).classList.remove("view");
       $("#input-password").attributes("type", "password")
   }
   return false;
});