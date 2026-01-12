const reactElement={
    type: "a",
    props: {
        target:"_blank",
        href:"https://www.google.com",
        
    }
    ,children:"Google"
}

const mainContainer=document.getElementById('root');
 
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    /*domElement.innerHTML=reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target",reactElement.props.target);
    container.appendChild(domElement);    */

    //Alternative approach
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    if(typeof reactElement.children==="string"){
        domElement.innerHTML=reactElement.children;
    }else if(Array.isArray(reactElement.children)){
        reactElement.children.forEach(childElement=>{
            customRender(childElement,domElement);
        });
    }
    container.appendChild(domElement);      
}

customRender(reactElement,mainContainer);
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script src="./react.js"></script>
</body>
</html> --></head> */