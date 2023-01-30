let btn=document.getElementById("btn");
btn.addEventListener("click",calculateage);
function calculateage() {
   const dateIn=document.getElementById("dateIn").value;
   const month=document.getElementById("month").value;
   const year=document.getElementById("year").value;
   const result=document.getElementById("result");

   const today=new Date();
   const days=today.getDate();
   const currentmonth=today.getMonth()+1;
   const currentyear=today.getFullYear();

    const daysdifference=days-Number(dateIn);
    const monthdifference=currentmonth-Number(month);
    const yeardifference=currentyear-Number(year);
    
    result.innerHTML=`${yeardifference} Years  ${monthdifference} Months  ${daysdifference} Days `;
}