
let index = 0;
function changeColor(){
    let colors = ["red", "blue","orange","green","#AFA98D","#E6C79C","#CDDFA0","#6FD08C","#7B9EA8","#78586F"];
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    if(index > colors.length-1){
        index=0;
    }
}