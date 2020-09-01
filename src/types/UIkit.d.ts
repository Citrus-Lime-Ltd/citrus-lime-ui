declare type UIkitElement = object | string | HTMLElement;

interface UIkitAccordionOptions {
    active?: number;
    animation?: boolean;
    collapsible?: boolean;
    content?: string;
    duration?: number;
    multiple?: boolean;
    targets?: string;
    toggle?: string;
    transition?: string;
    offset?: number;
}
interface UIkitAccordionElement {
    toggle(index?: string | number | Node, animate?: boolean): void;
}
type UIkitAccordion = (element: UIkitElement, options?: UIkitAccordionOptions) => UIkitAccordionElement;

interface UIkitAlertOptions {
    animation?: boolean | string;
    duration?: number;
    'sel-close'?: 'string';
}
interface UIkitAlertElement {
    close(): void;
}
type UIkitAlert = (element: UIkitElement, options?: UIkitAlertOptions) => UIkitAlertElement;

interface UIkitCoverOptions {
    automute?: boolean;
    width?: number;
    height?: number;
}
type UIkitCover = (element: UIkitElement, options?: UIkitCoverOptions) => void;

interface UIkitDropOptions {
    toggle?: string | boolean;
    pos?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    flip?: boolean | string;
    offset?: number;
    animation?: string;
    duration?: number;
}
interface UIkitDropElement {
    show(): void;
    hide(delay?: boolean): void;
}
type UIkitDrop = (element: UIkitElement, options?: UIkitDropOptions) => UIkitDropElement;

interface UIkitDropdownOptions {
    toggle?: string | boolean;
    pos?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    flip?: boolean | string;
    offset?: number;
    animation?: string;
    duration?: number;
}
interface UIkitDropdownElement {
    show(): void;
    hide(delay?: boolean): void;
}
type UIkitDropdown = (element: UIkitElement, options?: UIkitDropdownOptions) => UIkitDropdownElement;

interface UIkitFormOptions {
    target?: string | boolean;
}
type UIkitForm = (element: UIkitElement, options?: UIkitFormOptions) => void;

interface UIkitGridOptions {
    margin?: string;
    'first-column'?: string;
    masonry?: boolean;
    parallax?: number;
}
type UIkitGrid = (element: UIkitElement, options?: UIkitGridOptions) => void;

interface UIkitHeightMatchOptions {
    target?: string;
    row?: boolean;
}
type UIkitHeightMatch = (element: UIkitElement, options?: UIkitHeightMatchOptions) => void;

interface UIkitIconOptions {
    icon?: string;
    ratio?: number;
}
type UIkitIcon = (element: UIkitElement, options?: UIkitIconOptions) => UIkitSvgElement;

interface UIkitImageOptions {
    dataSrc?: string;
    dataSrcset?: string | boolean;
    sizes?: string | boolean;
    width?: string | boolean;
    height?: string | boolean;
    offsetTop?: string;
    offsetLeft?: string | number;
    target?: string | boolean;
}
type UIkitImg = (element: UIkitElement, options?: UIkitImageOptions) => void;

interface UIkitLeaderOptions {
    fill?: string;
    media?: number | string | boolean;
}
type UIkitLeader = (element: UIkitElement, options?: UIkitLeaderOptions) => void;

interface UIkitMarginOptions {
    margin?: string;
    'first-column'?: string;
}
type UIkitMargin = (element: UIkitElement, options?: UIkitMarginOptions) => void;

interface UIkitModalOptions {
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    stack?: boolean;
    container?: string | boolean;
    'cls-page'?: string;
    'cls-panel'?: string;
    'sel-close'?: string;
    labels: {
        ok: string;
        cancel: string;
    };
}
interface UIkitModalElement {
    show(): void;
    hide(): void;
}
interface UIkitModalPromise {
    dialog: { $el: Node };
}
interface UIkitModal {
    (element: UIkitElement, options?: UIkitModalOptions): UIkitModalElement;
    alert(message: string, options?: UIkitModalOptions): Promise<void> | UIkitModalPromise;
    confirm(message: string, options?: UIkitModalOptions): Promise<void> | UIkitModalPromise;
    prompt(content: string, value: string, options?: UIkitModalOptions): Promise<string | null> | UIkitModalPromise;
    dialog(content: string, options?: UIkitModalOptions): UIkitModalElement;
}

interface UIkitNavOptions {
    targets?: string;
    toggle?: string;
    content?: string;
    collapsible?: boolean;
    multiple?: boolean;
    transition?: string;
    animation?: string;
    duration?: number;
}
interface UIkitNavElement {
    toggle(index?: string | number | Node, animate?: boolean): void;
}
type UIkitNav = (element: UIkitElement, options?: UIkitNavOptions) => UIkitNavElement;

interface UIkitNavbarOptions {
    align?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    offset?: number;
    dropbar?: boolean;
    'dropbar-mode'?: string;
    duration?: number;
}
type UIkitNavbar = (element: UIkitElement, options?: UIkitNavbarOptions) => void;

interface UIkitOffcanvasOptions {
    mode?: string;
    flip?: boolean;
    overlay?: boolean;
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    container?: string | boolean;
}
interface UIkitOffcanvasElement {
    show(): void;
    hide(): void;
}
type UIkitOffcanvas = (element: UIkitElement, options?: UIkitOffcanvasOptions) => UIkitOffcanvasElement;

interface UIkitScrollOptions {
    offset?: number;
    duration?: number;
}
interface UIkitScrollElement {
    scrollTo(el: string | Node): void;
}
type UIkitScroll = (element: UIkitElement, options?: UIkitScrollOptions) => UIkitScrollElement;

interface UIkitScrollspyOptions {
    cls?: string;
    hidden?: boolean;
    'offset-top'?: number;
    'offset-left'?: number;
    repeat?: boolean;
    delay?: number;
}
type UIkitScrollspy = (element: UIkitElement, options?: UIkitScrollspyOptions) => void;

interface UIkitScrollspyNavOptions {
    cls?: string;
    closest?: string;
    scroll?: boolean;
    overflow?: boolean;
    offset?: number;
}
type UIkitScrollspyNav = (element: UIkitElement, options?: UIkitScrollspyNavOptions) => void;

interface UIkitStickyOptions {
    top?: number | string;
    bottom?: boolean | string;
    offset?: number | string;
    animation?: string | boolean;
    'cls-active'?: string;
    'cls-inactive'?: string;
    'width-element'?: string | boolean;
    'show-on-up'?: boolean;
    media?: number | string | boolean;
    'target-offset'?: boolean | number;
}
type UIkitSticky = (element: UIkitElement, options?: UIkitStickyOptions) => void;

interface UIkitSvgOptions {
    src?: string;
    'stroke-animation'?: boolean;
}
interface UIkitSvgElement {
    svg: Promise<SVGElement>;
}
type UIkitSvg = (element: UIkitElement, options?: UIkitSvgOptions) => UIkitSvgElement;

interface UIkitSwiterOptions {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string;
    duration?: number;
    swiping?: boolean;
}
interface UIkitSwitcherElement {
    show(index: string | number | Node): void;
}
type UIkitSwitcher = (element: UIkitElement, options?: UIkitSwiterOptions) => UIkitSwitcherElement;

interface UIkitTabOptions {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string | boolean;
    duration?: number;
    swiping?: boolean;
    media?: number | string;
}
interface UIkitTabElement {
    show(index: string | number | Node): void;
}
type UIkitTab = (element: UIkitElement, options?: UIkitTabOptions) => UIkitTabElement;

interface UIkitToggleOptions {
    target?: string;
    mode?: string;
    cls?: string;
    media?: number | string;
    animation?: string;
    duration?: number;
    queued?: boolean;
}
interface UIkitToggleElement {
    toggle(): void;
}
type UIkitToggle = (element: UIkitElement, options?: UIkitToggleOptions) => UIkitToggleElement;

interface UIkitVideoOptions {
    autoplay?: boolean | string;
    automute?: boolean;
}
type UIkitVideo = (element: UIkitElement, options?: UIkitVideoOptions) => void;

interface UIkitCountdownOptions {
    date?: string | boolean;
}
interface UIkitCountdownElement {
    start(): void;
    stop(): void;
}
type UIkitCountdown = (element: UIkitElement, options?: UIkitCountdownOptions) => UIkitCountdownElement;

interface UIkitFilterOptions {
    target?: string;
    selActive?: string | boolean;
}
type UIkitFilter = (element: UIkitElement, options?: UIkitFilterOptions) => void;

interface UIkitLightboxOptions {
    animation?: string;
    autoplay?: number;
    'autoplay-interval'?: number;
    'pause-on-hover'?: boolean;
    'video-autoplay'?: boolean;
    index?: string | number;
    toggle?: string;
}
interface UIkitLightboxElement {
    show(index: number): void;
    hide(): void;
}
type UIkitLightbox = (element: UIkitElement, options?: UIkitLightboxOptions) => UIkitLightboxElement;

interface UIkitLightboxPanelOptions {
    animation?: string;
    autoplay?: boolean;
    'autoplay-interval'?: number;
    'pause-on-hover'?: boolean;
    'video-autoplay'?: boolean;
    index?: number;
    velocity?: number;
    preload?: number;
    items?: object[];
    template?: string;
    'delay-controls'?: number;
    container?: string;
}
interface UIkitLightboxPanelElement {
    show(index: number): void;
    hide(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}
interface UIkitLightboxPanel {
    (optionsOrElement: UIkitLightboxPanelOptions | UIkitElement): UIkitLightboxPanelElement;
}

interface UIkitNotificationOptions {
    message?: string;
    status?: string;
    timeout?: number;
    group?: string;
    pos?: string;
}
interface UIkitNotificationElement {
    close(immediate: boolean): void;
}
interface UIkitNotification {
    (options: UIkitNotificationOptions): UIkitNotificationElement;
    (message: string, optionsOrStatus?: UIkitNotificationOptions | string): UIkitNotificationElement;
}

interface UIkitParallaxOptions {
    easing?: number;
    target?: string | boolean;
    viewport?: number;
    media?: number | string | boolean;
}
type UIkitParallax = (element: UIkitElement, options?: UIkitParallaxOptions) => void;

interface UIkitSliderOptions {
    autoplay?: boolean;
    'autoplay-interval'?: number;
    center?: boolean;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    index?: number;
    'pause-on-hover'?: boolean;
    sets?: boolean;
    velocity?: number;
}
interface UIkitSliderElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}
type UIkitSlider = (element: UIkitElement, options?: UIkitSliderOptions) => UIkitSliderElement;

interface UIkitSlideshowOptions {
    animation?: string;
    autoplay?: boolean;
    'autoplay-interval'?: number;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    'pause-on-hover'?: boolean;
    index?: number;
    velocity?: number;
    ratio?: string | boolean;
    'min-height'?: boolean | number;
    'max-height'?: boolean | number;
}
interface UIkitSlidershowElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}
type UIkitSlidershow = (element: UIkitElement, options?: UIkitSlideshowOptions) => UIkitSlidershowElement;

interface UIkitSortableOptions {
    group?: string;
    animation?: number;
    threshold?: number;
    'cls-item'?: string;
    'cls-placeholder'?: string;
    'cls-drag'?: string;
    'cls-drag-state'?: string;
    'cls-base'?: string;
    'cls-no-drag'?: string;
    'cls-empty'?: string;
    'cls-custom': string;
    handle?: string | boolean;
}
type UIkitSortable = (element: UIkitElement, options?: UIkitSortableOptions) => void;

interface UIkitTooltipOptions {
    title?: string;
    pos?: string;
    offset?: number | boolean;
    animation?: string;
    duration?: number;
    delay?: number;
    cls?: string;
    container?: string;
}
interface UIkitTooltipElement {
    show(): void;
    hide(): void;
}
type UIkitTooltip = (element: UIkitElement, options?: UIkitTooltipOptions) => UIkitTooltipElement;

interface UIkitUploadOptions {
    url?: string;
    multiple?: boolean;
    name?: string;
    type?: string;
    params?: object;
    allow?: string | boolean;
    mime?: string | boolean;
    concurrent?: number;
    method?: string;
    'msg-invalid-mime'?: string;
    'msg-invalid-name'?: string;
    'cls-dragover'?: string;
    abort?: object;
    'before-all'?: object;
    'before-send'?: object;
    complete?: object;
    'complete-all'?: object;
    error?: object;
    load?: object;
    'load-end'?: object;
    'load-start'?: object;
    progress?: object;
    fail?: object;
}
type UIkitUpload = (element: UIkitElement, options?: UIkitUploadOptions) => void;

export declare interface UIkit {
    util: object;
    data: string;
    prefix: string;
    options: object;
    version: string;

    component(name: string, component?: object): void;
    extend(options: object | null): void;
    mixin(mixin: object, component: string): void;
    update(element: object, e: UIkitElement): void;
    use(plugin: object): void;

    accordion: UIkitAccordion;
    alert: UIkitAlert;
    cover: UIkitCover;
    drop: UIkitDrop;
    dropdown: UIkitDropdown;
    formCustom: UIkitForm;
    grid: UIkitGrid;
    heightMatch: UIkitHeightMatch;
    icon: UIkitIcon;
    image: UIkitImg;
    leader: UIkitLeader;
    margin: UIkitMargin;
    modal: UIkitModal;
    nav: UIkitNav;
    navbar: UIkitNavbar;
    offcanvas: UIkitOffcanvas;
    scroll: UIkitScroll;
    scrollspy: UIkitScrollspy;
    scrollspyNav: UIkitScrollspyNav;
    sticky: UIkitSticky;
    svg: UIkitSvg;
    switcher: UIkitSwitcher;
    tab: UIkitTab;
    toggle: UIkitToggle;
    video: UIkitVideo;
    notification: UIkitNotification;
    countdown: UIkitCountdown;
    filter: UIkitFilter;
    lightbox: UIkitLightbox;
    lightboxPanel: UIkitLightboxPanel;
    parallax: UIkitParallax;
    slider: UIkitSlider;
    slideshow: UIkitSlidershow;
    sortable: UIkitSortable;
    tooltip: UIkitTooltip;
    upload: UIkitUpload;
}

export declare const uikit: UIkit;
