declare type UIkitElement = object | string | HTMLElement;

declare interface ModalOptions {
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    stack?: boolean;
    container?: string | boolean;
    'cls-page'?: string;
    'cls-panel'?: string;
    'sel-close'?: string;
}

declare interface ModalElement {
    show(): void;
    hide(): void;
}

declare interface Modal {
    (element: UIkitElement, options?: ModalOptions): UIkitElement;
    alert(message: string, options?: ModalOptions): Promise<void>;
    confirm(message: string, options?: ModalOptions): Promise<void>;
    prompt(content: string, value: string, options?: ModalOptions): Promise<string | null>;
    dialog(content: string, options?: ModalOptions): Promise<void>;
    labels: {
        ok: string;
        cancel: string;
    };
}

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

    modal: Modal;
}

export declare const uikit: UIkit;
