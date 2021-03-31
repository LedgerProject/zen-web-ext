// Put all the javascript code here, that you want to execute after page load.
let div = document.querySelector("[id='no-zenextroom-plugin']");
if( div !== null){
    div.style = 'display: none;visibility: hidden;';
}

div = document.querySelector("[id='yes-zenextroom-plugin']");
if( div !== null){
    div.style = 'display: block;visibility:visible;';
}
