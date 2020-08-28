declare module 'uikit/dist/js/uikit-icons';

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

declare module 'uikit' {
    export const util: object;
    export const data: string;
    export const prefix: string;
    export const options: object;
    export const version: string;

    export function component(name: string, component?: object): void;
    export function extend(options: object | null): void;
    export function mixin(mixin: object, component: string): void;
    export function update(element: object, e: UIkitElement): void;
    export function use(plugin: object): void;

    export const modal: Modal;
}
