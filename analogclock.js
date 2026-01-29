const hours=document.querySelector(".hour")
const mins=document.querySelector(".min")
const secs=document.querySelector(".sec")

function updateclock(){
    const currentdate=new Date();
    setTimeout(updateclock,1000);
    const hour=currentdate.getHours();
    const min=currentdate.getMinutes();
    const sec=currentdate.getSeconds();

    const hourdeg=(hour/12)*360;
    hours.style.transform=`rotate(${hourdeg}deg)`;

    const mindeg=(min/60)*360;
    mins.style.transform=`rotate(${mindeg}deg)`;

    const secdeg=(sec/60)*360;
    secs.style.transform=`rotate(${secdeg}deg)`;
}
updateclock()