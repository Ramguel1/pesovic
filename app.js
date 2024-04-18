var cm= document.querySelector("#cm")
var kg=document.querySelector("#kg")
var peso=document.querySelector("#peso")
var altura=document.querySelector("#altura")
var res= document.querySelector("#res")

kg.oninput=()=>{
    peso.innerHTML=kg.value + "kg";
    let p=parseInt(kg.value);
    let a=parseInt(cm.value);
    altura.innerHTML=cm.value + "cm";
    let r1=a/100;
    let rf=parseFloat=p/(r1*r1);
    res.innerHTML="<img src='si.gif' width=120 height=120>";
    setTimeout(()=>{
        res.innerHTML=rf.toFixed(2)+"Kg/m^2";
      spinner.innerHTML="";
    },1000);


    if (rf<18.5) {
        uno.style.transform="scale(1.2)";
        
      } else{
        uno.style.transform="scale(1)";
      }
      if (rf>=18.5 && rf<=24.9){
        dos.style.transform="scale(1.2)";
      } else{
       dos.style.transform="scale(1)";
      }
      if (rf>=25 && rf<=29.9) {
       p3.style.transform="scale(1.2)"
      } else{
        p3.style.transform="scale(1)";
      }
      if (rf>=30 && rf<=34.9){
        cuatro.style.transform="scale(1.2)";
      } else{
        cuatro.style.transform="scale(1)";
      }
      if (rf>=35 && rf<=39.9){
        cinco.style.transform="scale(1.2)";
      } else{
        cinco.style.transform="scale(1)";
      }
      if (rf>=40){
        seis.style.transform="scale(1.2)";
          } else{
        seis.style.transform="scale(1)";
      }
      


}

cm.oninput=()=>{

    peso.innerHTML=kg.value + "kg";
    let p=parseInt(kg.value);
    let a=parseInt(cm.value);
    altura.innerHTML=cm.value + "cm";
    let r1=a/100;
    let rf=parseFloat=p/(r1*r1);
    res.innerHTML="<img src='si.gif' width=120 height=120>";
    setTimeout(()=>{
        res.innerHTML=rf.toFixed(2)+"Kg/m^2";
      spinner.innerHTML="";
    },1000);


    if (rf<18.5) {
        p1.style.transform="scale(1.2)";
        
      } else{
        p1.style.transform="scale(1)";
      }
      if (rf>=18.5 && rf<=24.9){
        p2.style.transform="scale(1.2)";
      } else{
       p2.style.transform="scale(1)";
      
      }
      if (rf>=25 && rf<=29.9) {
        p3.style.transform="scale(1.2)";
      } else{
        p3.style.transform="scale(1)";
      }
      if (rf>=30 && rf<=34.9){
        p4.style.transform="scale(1.2)";
      } else{
        p4.style.transform="scale(1)";
      }
      if (rf>=35 && rf<=39.9){
        p5.style.transform="scale(1.2)";
      } else{
        p5.style.transform="scale(1)";
      }
          if (rf>=40){
        p6.style.transform="scale(1.2)";
          } else{
        p6.style.transform="scale(1)";
      }
      
       
}