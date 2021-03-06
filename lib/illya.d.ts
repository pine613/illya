// https://github.com/borisyankov/DefinitelyTyped/blob/master/jquery/jquery.d.ts
interface JQuery {
}

declare module Illya {
    // Options
    // http://vuejs.org/api/options.html
    interface Options {
        // Assets
        directives?: { [key: string]: typeof Illya.Directive };
        components?: { [key: string]: typeof Illya };
    }

    export class Directive {
        el: HTMLElement;
        vm: Illya;
        expression: string;
        arg: string;
        raw: string;
        name: string;

        protected isLiteral: boolean;
        protected toWay: boolean;
        protected acceptStatement: boolean;
        protected deep: boolean;

        constructor(update: (value: any) => void);

        protected bind(value: any): void;
        protected update(value: any): void;
        protected unbind(): void;
    }

    export class Router extends Illya {
        path: string;
        params: { [key: string]: string };

        map(path: string): Router.Route;
        root(path: string): void;
        rescue(fn: () => void): void;
        listen(): void;
    }

    module Router {
        export class Route {
            to(fn: () => void): Route;
            enter(fn: () => void): Route;
            enter(fns: Array<() => void>): Route;
            exit(fn: () => void): Route;
        }
    }
}

declare class Illya {
    constructor(options?: Illya.Options);

    // Vue.js
    // Instance Properties
    // http://vuejs.org/api/instance-properties.html
    $el: HTMLElement;
    $data: Object;
    $options: Object;
    $parent: Illya;
    $root: Illya;
    $: Object;
    $$: Object;

    // Instance Methods
    // http://vuejs.org/api/instance-methods.html

    // Data
    $watch(expression: string, callback: (newValue: any, oldValue?: any) => void, deep?: boolean, immdediate?: boolean): () => void;
    $get(expression: string): any;
    $set(keypath: string, value: any): void;
    $add(keypath: string, value: any): void;
    $delete(keypath: string): void;
    $eval(expression: string): void;
    $interpolate(templateString: string): void;
    $log(keypath?: string): void;

    // Events
    $dispatch(event: string, ...args: any[]): void;
    $broadcast(event: string, ...args: any[]): void;
    $emit(event: string, ...args: any[]): void;
    $on(event: string, callback: Function): void;
    $once(event: string, callback: Function): void;
    $off(event?: string, callback?: Function): void;

    // DOM
    $appendTo(element: HTMLElement, callback?: () => void): void;
    $appendTo(selector: string, callback?: () => void): void;
    $before(element: HTMLElement, callback?: () => void): void;
    $before(selector: string, callback?: () => void): void;
    $after(element: HTMLElement, callback?: () => void): void;
    $after(selector: string, callback?: () => void): void;
    $remove(callback?: () => void): void;

    // Lifecycle
    $mount(): void;
    $mount(element: HTMLElement): void;
    $mount(selector: string): void;
    $destroy(remove?: boolean): void;
    $compile(element: HTMLElement): void;
    $addChild(options?: Object, constructor?: Function): void;


    // Lifecycle
    protected created(): void;
    protected beforeCompile(): void;
    protected compiled(): void;
    protected ready(): void;
    protected attached(): void;
    protected detached(): void;
    protected beforeDestroy(): void;
    protected destroyed(): void;

    // illya.js
    track(): void;

    track(element: HTMLElement): void;
    track(selector: string): void;
    track(element: JQuery): void;

    track(element: (vm?: Illya) => HTMLElement): void;
    track(selector: (vm?: Illya) => string): void;
    track(element: (vm?: Illya) => JQuery): void;
}

declare module "illya" {
    export = Illya;
}
