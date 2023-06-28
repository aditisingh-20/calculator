const input=document.querySelector('#screen');
var str=" ";

function button(id){
    const btn=document.querySelector(`#${id}`);
    input.placeholder+=btn.value;
    str+=btn.value;
    console.log(str);
}
function clearpl(){
    if(input.placeholder!==""){
        if(input.placeholder!=="INVALID"){
            const len=input.placeholder.length;
            input.placeholder=input.placeholder.substring(0,len-1);
            str=str.substring(0,len-1);
        }
        else{
            input.placeholder="";
            str="";
        }
    }
}
function clearall(){
    input.placeholder="";
    str="";
}
function invalid(){
    input.placeholder="INVALID";
    str="";
}
function calculate(){
    if(str.length<3)
    {
        invalid();
    }
    if(parseInt(str.charAt(0))==='NaN')
    {
        invalid();
    }
    if(str.length%2===0)
    {
        invalid();
    }
    console.log(str);
    const res=eval(str);
    input.placeholder=res;
}
