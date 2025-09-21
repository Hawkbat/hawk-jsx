type HTMLElementStandardAttributes = {
    accesskey: HTMLAttributeValue,
    autocapitalize: HTMLAttributeValue,
    autofocus: HTMLAttributeValue,
    class: HTMLAttributeValue,
    contenteditable: HTMLAttributeValue,
    dir: HTMLAttributeValue,
    draggable: HTMLAttributeValue,
    enterkeyhint: HTMLAttributeValue,
    hidden: HTMLAttributeValue,
    id: HTMLAttributeValue,
    inert: HTMLAttributeValue,
    inputmode: HTMLAttributeValue,
    is: HTMLAttributeValue,
    itemid: HTMLAttributeValue,
    itemprop: HTMLAttributeValue,
    itemref: HTMLAttributeValue,
    itemscope: HTMLAttributeValue,
    itemtype: HTMLAttributeValue,
    lang: HTMLAttributeValue,
    nonce: HTMLAttributeValue,
    popover: HTMLAttributeValue,
    slot: HTMLAttributeValue,
    spellcheck: HTMLAttributeValue,
    style: HTMLAttributeValue,
    tabindex: HTMLAttributeValue,
    title: HTMLAttributeValue,
    translate: HTMLAttributeValue,
    writingsuggestions: HTMLAttributeValue,

    onabort: HTMLAttributeValue | ((e: Event) => void),
    onautocomplete: HTMLAttributeValue | ((e: Event) => void),
    onautocompleteerror: HTMLAttributeValue | ((e: Event) => void),
    onblur: HTMLAttributeValue | ((e: FocusEvent) => void),
    oncancel: HTMLAttributeValue | ((e: Event) => void),
    oncanplay: HTMLAttributeValue | ((e: Event) => void),
    oncanplaythrough: HTMLAttributeValue | ((e: Event) => void),
    onchange: HTMLAttributeValue | ((e: Event) => void),
    onclick: HTMLAttributeValue | ((e: PointerEvent) => void),
    onclose: HTMLAttributeValue | ((e: Event) => void),
    oncontextmenu: HTMLAttributeValue | ((e: PointerEvent) => void),
    oncuechange: HTMLAttributeValue | ((e: Event) => void),
    ondblclick: HTMLAttributeValue | ((e: PointerEvent) => void),
    ondrag: HTMLAttributeValue | ((e: DragEvent) => void),
    ondragend: HTMLAttributeValue | ((e: DragEvent) => void),
    ondragenter: HTMLAttributeValue | ((e: DragEvent) => void),
    ondragleave: HTMLAttributeValue | ((e: DragEvent) => void),
    ondragover: HTMLAttributeValue | ((e: DragEvent) => void),
    ondragstart: HTMLAttributeValue | ((e: DragEvent) => void),
    ondrop: HTMLAttributeValue | ((e: DragEvent) => void),
    ondurationchange: HTMLAttributeValue | ((e: Event) => void),
    onemptied: HTMLAttributeValue | ((e: Event) => void),
    onended: HTMLAttributeValue | ((e: Event) => void),
    onerror: HTMLAttributeValue | ((e: ErrorEvent | Event) => void),
    onfocus: HTMLAttributeValue | ((e: FocusEvent) => void),
    oninput: HTMLAttributeValue | ((e: InputEvent) => void),
    oninvalid: HTMLAttributeValue | ((e: Event) => void),
    onkeydown: HTMLAttributeValue | ((e: KeyboardEvent) => void),
    onkeypress: HTMLAttributeValue | ((e: KeyboardEvent) => void),
    onkeyup: HTMLAttributeValue | ((e: KeyboardEvent) => void),
    onload: HTMLAttributeValue | ((e: Event) => void),
    onloadeddata: HTMLAttributeValue | ((e: Event) => void),
    onloadedmetadata: HTMLAttributeValue | ((e: Event) => void),
    onloadstart: HTMLAttributeValue | ((e: Event) => void),
    onmousedown: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmouseenter: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmouseleave: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmousemove: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmouseout: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmouseover: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmouseup: HTMLAttributeValue | ((e: MouseEvent) => void),
    onmousewheel: HTMLAttributeValue | ((e: WheelEvent) => void),
    onpause: HTMLAttributeValue | ((e: Event) => void),
    onplay: HTMLAttributeValue | ((e: Event) => void),
    onplaying: HTMLAttributeValue | ((e: Event) => void),
    onprogress: HTMLAttributeValue | ((e: Event) => void),
    onratechange: HTMLAttributeValue | ((e: Event) => void),
    onreset: HTMLAttributeValue | ((e: Event) => void),
    onresize: HTMLAttributeValue | ((e: Event) => void),
    onscroll: HTMLAttributeValue | ((e: Event) => void),
    onseeked: HTMLAttributeValue | ((e: Event) => void),
    onseeking: HTMLAttributeValue | ((e: Event) => void),
    onselect: HTMLAttributeValue | ((e: Event) => void),
    onshow: HTMLAttributeValue | ((e: Event) => void),
    onsort: HTMLAttributeValue | ((e: Event) => void),
    onstalled: HTMLAttributeValue | ((e: Event) => void),
    onsubmit: HTMLAttributeValue | ((e: Event) => void),
    onsuspend: HTMLAttributeValue | ((e: Event) => void),
    ontimeupdate: HTMLAttributeValue | ((e: Event) => void),
    ontoggle: HTMLAttributeValue | ((e: ToggleEvent) => void),
    onvolumechange: HTMLAttributeValue | ((e: Event) => void),
    onwaiting: HTMLAttributeValue | ((e: Event) => void),

    role: HTMLAttributeValue,
    
    'aria-activedescendant': HTMLAttributeValue,
    'aria-atomic': HTMLAttributeValue,
    'aria-autocomplete': HTMLAttributeValue,
    'aria-busy': HTMLAttributeValue,
    'aria-checked': HTMLAttributeValue,
    'aria-colcount': HTMLAttributeValue,
    'aria-colindex': HTMLAttributeValue,
    'aria-colspan': HTMLAttributeValue,
    'aria-controls': HTMLAttributeValue,
    'aria-current': HTMLAttributeValue,
    'aria-describedby': HTMLAttributeValue,
    'aria-description': HTMLAttributeValue,
    'aria-details': HTMLAttributeValue,
    'aria-disabled': HTMLAttributeValue,
    'aria-dropeffect': HTMLAttributeValue,
    'aria-errormessage': HTMLAttributeValue,
    'aria-expanded': HTMLAttributeValue,
    'aria-flowto': HTMLAttributeValue,
    'aria-grabbed': HTMLAttributeValue,
    'aria-haspopup': HTMLAttributeValue,
    'aria-hidden': HTMLAttributeValue,
    'aria-invalid': HTMLAttributeValue,
    'aria-keyshortcuts': HTMLAttributeValue,
    'aria-label': HTMLAttributeValue,
    'aria-labelledby': HTMLAttributeValue,
    'aria-level': HTMLAttributeValue,
    'aria-live': HTMLAttributeValue,
    'aria-modal': HTMLAttributeValue,
    'aria-multiline': HTMLAttributeValue,
    'aria-multiselectable': HTMLAttributeValue,
    'aria-orientation': HTMLAttributeValue,
    'aria-owns': HTMLAttributeValue,
    'aria-placeholder': HTMLAttributeValue,
    'aria-posinset': HTMLAttributeValue,
    'aria-pressed': HTMLAttributeValue,
    'aria-readonly': HTMLAttributeValue,
    'aria-relevant': HTMLAttributeValue,
    'aria-required': HTMLAttributeValue,
    'aria-roledescription': HTMLAttributeValue,
    'aria-rowcount': HTMLAttributeValue,
    'aria-rowindex': HTMLAttributeValue,
    'aria-rowspan': HTMLAttributeValue,
    'aria-selected': HTMLAttributeValue,
    'aria-setsize': HTMLAttributeValue,
    'aria-sort': HTMLAttributeValue,
    'aria-valuemax': HTMLAttributeValue,
    'aria-valuemin': HTMLAttributeValue,
    'aria-valuenow': HTMLAttributeValue,
    'aria-valuetext': HTMLAttributeValue,
}

type HTMLElementAttributes = {
    a: {
        charset: HTMLAttributeValue,
        coords: HTMLAttributeValue,
        download: HTMLAttributeValue,
        href: HTMLAttributeValue,
        hreflang: HTMLAttributeValue,
        name: HTMLAttributeValue,
        ping: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        rel: HTMLAttributeValue,
        rev: HTMLAttributeValue,
        shape: HTMLAttributeValue,
        target: HTMLAttributeValue,
        type: HTMLAttributeValue
    },
    abbr: {},
    address: {},
    applet: {
        align: HTMLAttributeValue,
        alt: HTMLAttributeValue,
        archive: HTMLAttributeValue,
        code: HTMLAttributeValue,
        codebase: HTMLAttributeValue,
        height: HTMLAttributeValue,
        hspace: HTMLAttributeValue,
        name: HTMLAttributeValue,
        object: HTMLAttributeValue,
        vspace: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    area: {
        alt: HTMLAttributeValue,
        coords: HTMLAttributeValue,
        download: HTMLAttributeValue,
        href: HTMLAttributeValue,
        hreflang: HTMLAttributeValue,
        nohref: HTMLAttributeValue,
        ping: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        rel: HTMLAttributeValue,
        shape: HTMLAttributeValue,
        target: HTMLAttributeValue,
        type: HTMLAttributeValue
    },
    article: {},
    aside: {},
    audio: {
        autoplay: HTMLAttributeValue,
        controls: HTMLAttributeValue,
        crossorigin: HTMLAttributeValue,
        loop: HTMLAttributeValue,
        muted: HTMLAttributeValue,
        preload: HTMLAttributeValue,
        src: HTMLAttributeValue
    },
    b: {},
    base: { href: HTMLAttributeValue, target: HTMLAttributeValue },
    basefont: { color: HTMLAttributeValue, face: HTMLAttributeValue, size: HTMLAttributeValue },
    bdi: {},
    bdo: {},
    blockquote: { cite: HTMLAttributeValue },
    body: { alink: HTMLAttributeValue, background: HTMLAttributeValue, bgcolor: HTMLAttributeValue, link: HTMLAttributeValue, text: HTMLAttributeValue, vlink: HTMLAttributeValue },
    br: { clear: HTMLAttributeValue },
    button: {
        disabled: HTMLAttributeValue,
        form: HTMLAttributeValue,
        formaction: HTMLAttributeValue,
        formenctype: HTMLAttributeValue,
        formmethod: HTMLAttributeValue,
        formnovalidate: HTMLAttributeValue,
        formtarget: HTMLAttributeValue,
        name: HTMLAttributeValue,
        popovertarget: HTMLAttributeValue,
        popovertargetaction: HTMLAttributeValue,
        type: HTMLAttributeValue,
        value: HTMLAttributeValue
    },
    canvas: { height: HTMLAttributeValue, width: HTMLAttributeValue },
    caption: { align: HTMLAttributeValue },
    cite: {},
    code: {},
    col: { align: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, span: HTMLAttributeValue, valign: HTMLAttributeValue, width: HTMLAttributeValue },
    colgroup: { align: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, span: HTMLAttributeValue, valign: HTMLAttributeValue, width: HTMLAttributeValue },
    data: { value: HTMLAttributeValue },
    datalist: {},
    dd: {},
    del: { cite: HTMLAttributeValue, datetime: HTMLAttributeValue },
    details: { name: HTMLAttributeValue, open: HTMLAttributeValue },
    dfn: {},
    dialog: { open: HTMLAttributeValue },
    dir: { compact: HTMLAttributeValue },
    div: { align: HTMLAttributeValue },
    dl: { compact: HTMLAttributeValue },
    dt: {},
    em: {},
    embed: { height: HTMLAttributeValue, src: HTMLAttributeValue, type: HTMLAttributeValue, width: HTMLAttributeValue },
    fieldset: { disabled: HTMLAttributeValue, form: HTMLAttributeValue, name: HTMLAttributeValue },
    figcaption: {},
    figure: {},
    font: { color: HTMLAttributeValue, face: HTMLAttributeValue, size: HTMLAttributeValue },
    form: {
        accept: HTMLAttributeValue,
        'accept-charset': HTMLAttributeValue,
        action: HTMLAttributeValue,
        autocomplete: HTMLAttributeValue,
        enctype: HTMLAttributeValue,
        method: HTMLAttributeValue,
        name: HTMLAttributeValue,
        novalidate: HTMLAttributeValue,
        target: HTMLAttributeValue
    },
    footer: {},
    frame: {
        frameborder: HTMLAttributeValue,
        longdesc: HTMLAttributeValue,
        marginheight: HTMLAttributeValue,
        marginwidth: HTMLAttributeValue,
        name: HTMLAttributeValue,
        noresize: HTMLAttributeValue,
        scrolling: HTMLAttributeValue,
        src: HTMLAttributeValue
    },
    frameset: { cols: HTMLAttributeValue, rows: HTMLAttributeValue },
    h1: { align: HTMLAttributeValue },
    h2: { align: HTMLAttributeValue },
    h3: { align: HTMLAttributeValue },
    h4: { align: HTMLAttributeValue },
    h5: { align: HTMLAttributeValue },
    h6: { align: HTMLAttributeValue },
    head: { profile: HTMLAttributeValue },
    header: {},
    hgroup: {},
    hr: { align: HTMLAttributeValue, noshade: HTMLAttributeValue, size: HTMLAttributeValue, width: HTMLAttributeValue },
    html: { manifest: HTMLAttributeValue, version: HTMLAttributeValue },
    i: {},
    iframe: {
        align: HTMLAttributeValue,
        allow: HTMLAttributeValue,
        allowfullscreen: HTMLAttributeValue,
        allowpaymentrequest: HTMLAttributeValue,
        allowusermedia: HTMLAttributeValue,
        frameborder: HTMLAttributeValue,
        height: HTMLAttributeValue,
        loading: HTMLAttributeValue,
        longdesc: HTMLAttributeValue,
        marginheight: HTMLAttributeValue,
        marginwidth: HTMLAttributeValue,
        name: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        sandbox: HTMLAttributeValue,
        scrolling: HTMLAttributeValue,
        src: HTMLAttributeValue,
        srcdoc: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    img: {
        align: HTMLAttributeValue,
        alt: HTMLAttributeValue,
        border: HTMLAttributeValue,
        crossorigin: HTMLAttributeValue,
        decoding: HTMLAttributeValue,
        fetchpriority: HTMLAttributeValue,
        height: HTMLAttributeValue,
        hspace: HTMLAttributeValue,
        ismap: HTMLAttributeValue,
        loading: HTMLAttributeValue,
        longdesc: HTMLAttributeValue,
        name: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        sizes: HTMLAttributeValue,
        src: HTMLAttributeValue,
        srcset: HTMLAttributeValue,
        usemap: HTMLAttributeValue,
        vspace: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    input: {
        accept: HTMLAttributeValue,
        align: HTMLAttributeValue,
        alt: HTMLAttributeValue,
        autocomplete: HTMLAttributeValue,
        checked: HTMLAttributeValue,
        dirname: HTMLAttributeValue,
        disabled: HTMLAttributeValue,
        form: HTMLAttributeValue,
        formaction: HTMLAttributeValue,
        formenctype: HTMLAttributeValue,
        formmethod: HTMLAttributeValue,
        formnovalidate: HTMLAttributeValue,
        formtarget: HTMLAttributeValue,
        height: HTMLAttributeValue,
        ismap: HTMLAttributeValue,
        list: HTMLAttributeValue,
        max: HTMLAttributeValue,
        maxlength: HTMLAttributeValue,
        min: HTMLAttributeValue,
        minlength: HTMLAttributeValue,
        multiple: HTMLAttributeValue,
        name: HTMLAttributeValue,
        pattern: HTMLAttributeValue,
        placeholder: HTMLAttributeValue,
        popovertarget: HTMLAttributeValue,
        popovertargetaction: HTMLAttributeValue,
        readonly: HTMLAttributeValue,
        required: HTMLAttributeValue,
        size: HTMLAttributeValue,
        src: HTMLAttributeValue,
        step: HTMLAttributeValue,
        type: HTMLAttributeValue,
        usemap: HTMLAttributeValue,
        value: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    ins: { cite: HTMLAttributeValue, datetime: HTMLAttributeValue },
    isindex: { prompt: HTMLAttributeValue },
    kbd: {},
    label: { for: HTMLAttributeValue, form: HTMLAttributeValue },
    legend: { align: HTMLAttributeValue },
    li: { type: HTMLAttributeValue, value: HTMLAttributeValue },
    link: {
        as: HTMLAttributeValue,
        blocking: HTMLAttributeValue,
        charset: HTMLAttributeValue,
        color: HTMLAttributeValue,
        crossorigin: HTMLAttributeValue,
        disabled: HTMLAttributeValue,
        fetchpriority: HTMLAttributeValue,
        href: HTMLAttributeValue,
        hreflang: HTMLAttributeValue,
        imagesizes: HTMLAttributeValue,
        imagesrcset: HTMLAttributeValue,
        integrity: HTMLAttributeValue,
        media: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        rel: HTMLAttributeValue,
        rev: HTMLAttributeValue,
        sizes: HTMLAttributeValue,
        target: HTMLAttributeValue,
        type: HTMLAttributeValue
    },
    main: {},
    map: { name: HTMLAttributeValue },
    mark: {},
    marquee: {},
    math: { display: HTMLAttributeValue }, //and other global MathML attributes
    menu: { compact: HTMLAttributeValue },
    meta: { charset: HTMLAttributeValue, content: HTMLAttributeValue, 'http-equiv': HTMLAttributeValue, media: HTMLAttributeValue, name: HTMLAttributeValue, scheme: HTMLAttributeValue },
    meter: { high: HTMLAttributeValue, low: HTMLAttributeValue, max: HTMLAttributeValue, min: HTMLAttributeValue, optimum: HTMLAttributeValue, value: HTMLAttributeValue },
    nav: {},
    nobr: {},
    noscript: {},
    object: {
        align: HTMLAttributeValue,
        archive: HTMLAttributeValue,
        border: HTMLAttributeValue,
        classid: HTMLAttributeValue,
        codebase: HTMLAttributeValue,
        codetype: HTMLAttributeValue,
        data: HTMLAttributeValue,
        declare: HTMLAttributeValue,
        form: HTMLAttributeValue,
        height: HTMLAttributeValue,
        hspace: HTMLAttributeValue,
        name: HTMLAttributeValue,
        standby: HTMLAttributeValue,
        type: HTMLAttributeValue,
        typemustmatch: HTMLAttributeValue,
        usemap: HTMLAttributeValue,
        vspace: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    ol: { compact: HTMLAttributeValue, reversed: HTMLAttributeValue, start: HTMLAttributeValue, type: HTMLAttributeValue },
    optgroup: { disabled: HTMLAttributeValue, label: HTMLAttributeValue },
    option: { disabled: HTMLAttributeValue, label: HTMLAttributeValue, selected: HTMLAttributeValue, value: HTMLAttributeValue },
    output: { for: HTMLAttributeValue, form: HTMLAttributeValue, name: HTMLAttributeValue },
    p: { align: HTMLAttributeValue },
    param: { name: HTMLAttributeValue, type: HTMLAttributeValue, value: HTMLAttributeValue, valuetype: HTMLAttributeValue },
    picture: {},
    portal: {},
    pre: { width: HTMLAttributeValue },
    progress: { max: HTMLAttributeValue, value: HTMLAttributeValue },
    q: { cite: HTMLAttributeValue },
    rp: {},
    rt: {},
    rtc: {},
    ruby: {},
    s: {},
    samp: {},
    script: {
        async: HTMLAttributeValue,
        blocking: HTMLAttributeValue,
        charset: HTMLAttributeValue,
        crossorigin: HTMLAttributeValue,
        defer: HTMLAttributeValue,
        fetchpriority: HTMLAttributeValue,
        integrity: HTMLAttributeValue,
        language: HTMLAttributeValue,
        nomodule: HTMLAttributeValue,
        referrerpolicy: HTMLAttributeValue,
        src: HTMLAttributeValue,
        type: HTMLAttributeValue
    },
    search: {},
    section: {},
    select: {
        autocomplete: HTMLAttributeValue,
        disabled: HTMLAttributeValue,
        form: HTMLAttributeValue,
        multiple: HTMLAttributeValue,
        name: HTMLAttributeValue,
        required: HTMLAttributeValue,
        size: HTMLAttributeValue
    },
    slot: { name: HTMLAttributeValue },
    small: {},
    source: { height: HTMLAttributeValue, media: HTMLAttributeValue, sizes: HTMLAttributeValue, src: HTMLAttributeValue, srcset: HTMLAttributeValue, type: HTMLAttributeValue, width: HTMLAttributeValue },
    span: {},
    strike: {},
    strong: {},
    style: { blocking: HTMLAttributeValue, media: HTMLAttributeValue, type: HTMLAttributeValue },
    sub: {},
    summary: {},
    sup: {},
    svg: { xmlns: HTMLAttributeValue, baseProfile: HTMLAttributeValue, height: HTMLAttributeValue, preserveAspectRatio: HTMLAttributeValue, version: HTMLAttributeValue, viewBox: HTMLAttributeValue, width: HTMLAttributeValue, x: HTMLAttributeValue, y: HTMLAttributeValue },
    table: {
        align: HTMLAttributeValue,
        bgcolor: HTMLAttributeValue,
        border: HTMLAttributeValue,
        cellpadding: HTMLAttributeValue,
        cellspacing: HTMLAttributeValue,
        frame: HTMLAttributeValue,
        rules: HTMLAttributeValue,
        summary: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    tbody: { align: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, valign: HTMLAttributeValue },
    td: {
        abbr: HTMLAttributeValue,
        align: HTMLAttributeValue,
        axis: HTMLAttributeValue,
        bgcolor: HTMLAttributeValue,
        char: HTMLAttributeValue,
        charoff: HTMLAttributeValue,
        colspan: HTMLAttributeValue,
        headers: HTMLAttributeValue,
        height: HTMLAttributeValue,
        nowrap: HTMLAttributeValue,
        rowspan: HTMLAttributeValue,
        scope: HTMLAttributeValue,
        valign: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    template: {
        shadowrootclonable: HTMLAttributeValue,
        shadowrootdelegatesfocus: HTMLAttributeValue,
        shadowrootmode: HTMLAttributeValue
    },
    textarea: {
        autocomplete: HTMLAttributeValue,
        cols: HTMLAttributeValue,
        dirname: HTMLAttributeValue,
        disabled: HTMLAttributeValue,
        form: HTMLAttributeValue,
        maxlength: HTMLAttributeValue,
        minlength: HTMLAttributeValue,
        name: HTMLAttributeValue,
        placeholder: HTMLAttributeValue,
        readonly: HTMLAttributeValue,
        required: HTMLAttributeValue,
        rows: HTMLAttributeValue,
        wrap: HTMLAttributeValue
    },
    tfoot: { align: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, valign: HTMLAttributeValue },
    th: {
        abbr: HTMLAttributeValue,
        align: HTMLAttributeValue,
        axis: HTMLAttributeValue,
        bgcolor: HTMLAttributeValue,
        char: HTMLAttributeValue,
        charoff: HTMLAttributeValue,
        colspan: HTMLAttributeValue,
        headers: HTMLAttributeValue,
        height: HTMLAttributeValue,
        nowrap: HTMLAttributeValue,
        rowspan: HTMLAttributeValue,
        scope: HTMLAttributeValue,
        valign: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    thead: { align: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, valign: HTMLAttributeValue },
    time: { datetime: HTMLAttributeValue },
    title: {},
    tr: { align: HTMLAttributeValue, bgcolor: HTMLAttributeValue, char: HTMLAttributeValue, charoff: HTMLAttributeValue, valign: HTMLAttributeValue },
    track: { default: HTMLAttributeValue, kind: HTMLAttributeValue, label: HTMLAttributeValue, src: HTMLAttributeValue, srclang: HTMLAttributeValue },
    tt: {},
    u: {},
    ul: { compact: HTMLAttributeValue, type: HTMLAttributeValue },
    var: {},
    video: {
        autoplay: HTMLAttributeValue,
        controls: HTMLAttributeValue,
        crossorigin: HTMLAttributeValue,
        height: HTMLAttributeValue,
        loop: HTMLAttributeValue,
        muted: HTMLAttributeValue,
        playsinline: HTMLAttributeValue,
        poster: HTMLAttributeValue,
        preload: HTMLAttributeValue,
        src: HTMLAttributeValue,
        width: HTMLAttributeValue
    },
    wbr: {},
}

const VOID_ELEMENT_NAMES = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'] as const

type VoidElementNames = (typeof VOID_ELEMENT_NAMES)[number]

type HTMLElementName = keyof HTMLElementAttributes

type HTMLElementAttributesOf<T extends HTMLElementName> = HTMLElementStandardAttributes & HTMLElementAttributes[T]

type HTMLAttributeValue = string | number | boolean

type HTMLElementPropsOf<T extends HTMLElementName> = Partial<HTMLElementAttributesOf<T>> & { children?: T extends VoidElementNames ? never : JSXChildren }

/** The values allowed as children of JSX elements. */
export type JSXChildren = JSXElement

/** A function component that takes a props object and returns JSX elements. */
export type JSXFunction<Props extends Record<string, unknown>> = (props: Props) => JSXElement
/** Extracts the type of the props object of a function component. */
export type JSXFunctionProps<T extends JSXFunction<any>> = T extends JSXFunction<infer P> ? P : never

/** The values that can be produced via JSX. */
export type JSXElement = JSXHTMLElement<HTMLElementName> | JSXFunctionElement<JSXFunction<any>> | number | boolean | string | null | undefined | JSXElement[]

type JSXElementType = HTMLElementName | JSXFunction<any>

/** An instance of a function component produced via JSX. */
export interface JSXFunctionElement<T extends JSXFunction<any>> {
    type: T
    props: JSXFunctionProps<T>
    key?: string
}

/** An instance of an HTML element component produced via JSX. */
export interface JSXHTMLElement<T extends HTMLElementName> {
    type: T
    props: HTMLElementPropsOf<T>
    key?: string
}

type JSXHTMLElementMap = {
    [K in HTMLElementName]: HTMLElementPropsOf<K>
}

type JSXPropsOf<T extends JSXElementType> =
    T extends JSXFunction<infer P> ? P :
    T extends HTMLElementName ? HTMLElementPropsOf<T> :
    never

type JSXElementOf<T extends JSXElementType> =
    T extends JSXFunction<infer _> ? JSXFunctionElement<T> :
    T extends HTMLElementName ? JSXHTMLElement<T> :
    never

export namespace JSX {
    export type ElementType = JSXElementType
    export interface IntrinsicElements extends JSXHTMLElementMap {
        [tagName: string]: Partial<HTMLElementStandardAttributes>
    }
    export type Element = JSXElement
    export type ElementClass = never
    export interface ElementChildrenAttribute { children: {} }
}

export const jsx = <T extends JSXElementType>(type: T, props: JSXPropsOf<T>, key?: string): JSXElementOf<T> => ({ type, props, key } as JSXElementOf<T>)

export const jsxs = jsx

export const jsxDEV = <T extends JSXElementType>(type: T, props: JSXPropsOf<T>, key: string | undefined, isStaticChildren: boolean, source: { fileName: string, lineNumber: number, columnNumber: number }, self: unknown) => jsx(type, props, key)

export const Fragment = ((props: { children?: JSXChildren }) => props.children) satisfies JSXFunction<Record<string, unknown>>

/**
 * A type guard to check if a JSX element represents a function component instance.
 * @param element The element to check
 * @param func A specific component function to check for (optional)
 * @returns Whether the element is a function component instance
 */
export function isFunctionElement<T extends JSXFunction<any>>(element: JSXElement, func?: T): element is JSXFunctionElement<T> {
    if (!element) return false
    if (typeof element !== 'object') return false
    if (Array.isArray(element)) return false
    if (typeof element.type !== 'function') return false
    if (func !== undefined) return element.type === func
    return true
}

/**
 * A type guard to check if a JSX element represents an HTML element component instance.
 * @param element The element to check
 * @param tag A specific HTML element tag name to check for (optional)
 * @returns Whether the element is an HTML element component instance
 */
export function isHtmlElement<T extends HTMLElementName>(element: JSXElement, tag?: T): element is JSXHTMLElement<T> {
    if (!element) return false
    if (typeof element !== 'object') return false
    if (Array.isArray(element)) return false
    if (typeof element.type !== 'string') return false
    if (tag !== undefined) return element.type === tag
    return true
}

/**
 * A type guard to check if a JSX element represents a 'fragment' which wraps other elements.
 * @param element The element to chck
 * @returns Whether the element is a fragment
 */
export function isFragmentElement(element: JSXElement): element is JSXFunctionElement<typeof Fragment> {
    return isFunctionElement(element, Fragment)
}

function wrapSingular<T>(value: T | T[]): T[] {
    if (Array.isArray(value)) return value
    return [value]
}

function isSelfClosingElementTag(tag: string): boolean {
    return (VOID_ELEMENT_NAMES as readonly string[]).includes(tag)
}

function escapeHtmlAttributeValue(s: string) {
    return s.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function renderHtmlAttributeString(k: string, v: HTMLAttributeValue | ((...args: any[]) => void)): string {
    if (v === undefined || v === false) return ''
    else if (v === true) return k
    else if (typeof v === 'string') return `${k}="${escapeHtmlAttributeValue(v)}"`
    else if (typeof v === 'number') return `${k}="${v.toString()}"`
    else if (typeof v === 'function' && k.startsWith('on')) return ''
    else throw new Error(`Unsupported attribute value type for attribute ${k}: ${JSON.stringify(v)}`)
}

/**
 * Outputs the provided JSX element and any sub-elements as a single string.
 * @param element The element to render
 * @returns A string representation of the JSX element using HTML syntax
 */
export function renderHtmlElementString(element: JSXElement): string {
    if (element === null || element === undefined || typeof element === 'boolean') return ''
    if (typeof element === 'string') return element
    if (typeof element === 'number') return element.toString()
    if (Array.isArray(element)) {
        return element.reduce<string>((p, c) => p + renderHtmlElementString(c), '')
    } else if (typeof element.type === 'string') {
        const { children, ...attrs } = element.props
        const attrString = Object.entries(attrs).filter(([k, v]) => v !== undefined && v !== false).reduceRight((p, [k, v]) => p + ` ${renderHtmlAttributeString(k, v)}`, '')
        const childrenString = wrapSingular(children).reduce((p, c) => p + renderHtmlElementString(c), '')
        return `<${element.type}${attrString}${isSelfClosingElementTag(element.type) ? ' />' : `>${childrenString}</${element.type}>`}`
    } else if (typeof element.type === 'function') {
        const result = element.type(element.props)
        return wrapSingular(result).reduce<string>((p, c) => p + renderHtmlElementString(c), '')
    }
    throw new Error(`Unknown JSX element type: ${JSON.stringify(element)}`)
}

/**
 * Outputs the provided JSX element and any sub-elements as a list of HTML DOM nodes.
 * @param element The element to render
 * @returns A list of DOM nodes (elements or text) produced from the JSX element
 */
export function renderHtmlDomNodes(element: JSXElement): (HTMLElement | Text)[] {
    if (element === null || element === undefined || typeof element === 'boolean') return []
    if (typeof element === 'string') return [document.createTextNode(element)]
    if (typeof element === 'number') return [document.createTextNode(element.toString())]
    if (Array.isArray(element)) {
        return element.flatMap(c => renderHtmlDomNodes(c))
    } else if (typeof element.type === 'string') {
        const el = document.createElement(element.type)
        const { children, ...attrs } = element.props
        for (const [k, v] of Object.entries(attrs)) {
            if (v === undefined || v === false) continue
            if (v === true) el.setAttribute(k, '')
            else if (typeof v === 'string') el.setAttribute(k, v)
            else if (typeof v === 'number') el.setAttribute(k, v.toString())
            else if (typeof v === 'function' && k.startsWith('on')) {
                const eventName = k.substring(2).toLowerCase()
                el.addEventListener(eventName, v as EventListener)
            } else {
                throw new Error(`Unsupported attribute value type for attribute ${k} on <${element.type}>: ${JSON.stringify(v)}`)
            }
        }
        if (!isSelfClosingElementTag(element.type)) {
            el.append(...wrapSingular(children).flatMap(c => renderHtmlDomNodes(c)))
        }
        return [el]
    } else if (typeof element.type === 'function') {
        const result = element.type(element.props)
        return wrapSingular(result).flatMap(c => renderHtmlDomNodes(c))
    }
    throw new Error(`Unknown JSX element type: ${JSON.stringify(element)}`)
}
