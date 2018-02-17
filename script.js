/*
for(var n in chrome){
    console.log(n)
}

for(var m in chrome.extension){
    console.log("." + m)
}
*/
console.log(window.location.protocol + '//' + window.location.host + window.location.pathname);
/*window.location.assign("1.PNG");*/

function addButton(target, name){
    var newButton = document.createElement('button');
        
    newButton.className = name + ' button';
    newButton.style.cssText = '\
        cursor:pointer;\
        min-width:105px;\
        height:30px;\
        padding:0px 0px 0px 0px;';
    newButton.appendChild(document.createTextNode(name));
    /*newButton.innerHTML = '<img src="' + chrome.extension.getURL('icon.png') + '" />';*/
    newButton.onclick = function(){
        console.log(name);
    };
    
    target.appendChild(newButton);

    return newButton;
}

(function(){
    var insertTarget = document.querySelector('body');
    if(!insertTarget) return;

    buttonNames = ['prev', 'next'];
    buttons = [];

    for(n in buttonNames){
        buttons.push(addButton(insertTarget, buttonNames[n]));
    }

    /*console.dir(buttons);*/
})();
