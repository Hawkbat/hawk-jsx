import { JSXChildren, isFunctionElement, isHtmlElement, renderHtmlElementString } from "../index.js"

const inlineText = (strings: TemplateStringsArray, ...values: unknown[]) => String.raw(strings, ...values).trim()
const css = inlineText
const javascript = inlineText

const Test = (props: { name: string, hide?: boolean, children?: JSXChildren }) => {
    return <>
        <h1>Hello {props.name}!</h1>
        <span class="my-span" hidden={props.hide}>A hidden message</span>
    </>
}

const test = <Test name="Hello!" hide>My Name is Fred</Test>

const doc = <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>{css`
            .button {
                cursor: pointer;
            }
            .my-span {
                color: red;
            }
        `}</style>
        <script>{javascript`
          function foo() {
            alert("Hello world!")
          }
        `}
        </script>
    </head>
    <body>
        <div class="button" role="button" aria-label="Hello World Button" onclick="foo()">
            {test}
        </div>
    </body>
</html>

if (isHtmlElement(doc)) {
    console.log('html element', doc)
} 

if (isFunctionElement(test, Test)) {
    console.log('function element', test)
}

const html = `<!DOCTYPE html>\n${renderHtmlElementString(doc)}`

console.log(html)
