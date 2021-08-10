export declare const TYPES = true;
export declare type CrossDomainLocationType = Record<any, any>;
export declare type CrossDomainWindowType = Window;
export declare type SameDomainWindowType = Omit<Window, 'frames' | 'parent' | 'focus' | 'top' | 'opener' | 'postMessage'>;
export declare type DomainMatcher = string | ReadonlyArray<string> | ReadonlyArray<string> | RegExp;
