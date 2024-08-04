import { JSXChildren, isFunctionElement, isHtmlElement, renderHtmlElementString } from "./index.js"

const Test = (props: { name: string, hide?: boolean, children?: JSXChildren }) => {
    return <>
        <h1>Hello {props.name}!</h1>
        <span hidden={props.hide}>A hidden message</span>
    </>
}

const foo = <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div>
            <Test name="Hello!" hide>My Name is Fred</Test>
        </div>
    </body>
</html>

if (isHtmlElement(foo)) {
    console.log('html element', foo)
}

const html = `<!DOCTYPE html>
${renderHtmlElementString(foo)}`

console.log(html)
