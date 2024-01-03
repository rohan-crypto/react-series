// function customRender(reactElement, container)
// {
//     // we can use createElement with a tag and it will create that element
//     const domElement = document.createElement(reactElement.type);

//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);

//     container.appendChild(domElement);
// }


//making the above func generalized
function customRender(reactElement, container)
{
    // we can use createElement with a tag and it will create that element
    const domElement = document.createElement(reactElement.type);
    
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        // sometimes we pass children in props, to avoid that
        if(prop === 'children') continue;

        // prop will store key and reactElement.props[prop] will store value
        // console.log(prop, reactElement.props[prop])
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

// let's create a custom react element which expects certain parameters as defined below
//for eg we need to create an anchor tag
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');

// render this reactElement inside the main container
customRender(reactElement, mainContainer);