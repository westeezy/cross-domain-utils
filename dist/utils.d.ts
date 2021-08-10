import type { CrossDomainWindowType, SameDomainWindowType, DomainMatcher } from './types';
export declare function isFileProtocol(win?: SameDomainWindowType): boolean;
export declare function isAboutProtocol(win?: SameDomainWindowType): boolean;
export declare function getParent(win?: CrossDomainWindowType): CrossDomainWindowType | null | undefined;
export declare function getOpener(win?: CrossDomainWindowType): CrossDomainWindowType | null | undefined;
export declare function canReadFromWindow(win: CrossDomainWindowType | SameDomainWindowType): boolean;
export declare function getActualDomain(win?: SameDomainWindowType): string;
export declare function getDomain(win?: SameDomainWindowType): string;
export declare function isBlankDomain(win: CrossDomainWindowType): boolean;
export declare function isActuallySameDomain(win: CrossDomainWindowType): boolean;
export declare function isSameDomain(win: CrossDomainWindowType | SameDomainWindowType): boolean;
export declare function assertSameDomain(win: CrossDomainWindowType | SameDomainWindowType): SameDomainWindowType;
export declare function getParents(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function isAncestorParent(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;
export declare function getFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function getAllChildFrames(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function getTop(win?: CrossDomainWindowType): CrossDomainWindowType | null | undefined;
export declare function getNextOpener(win?: CrossDomainWindowType): CrossDomainWindowType | null | undefined;
export declare function getUltimateTop(win?: CrossDomainWindowType): CrossDomainWindowType;
export declare function getAllFramesInWindow(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function getAllWindows(win?: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function isTop(win: CrossDomainWindowType): boolean;
export declare function isFrameWindowClosed(frame: HTMLIFrameElement): boolean;
export declare function isWindowClosed(win: CrossDomainWindowType, allowMock?: boolean): boolean;
export declare function linkFrameWindow(frame: HTMLIFrameElement): void;
export declare function getUserAgent(win: SameDomainWindowType | null | undefined): string;
export declare function getFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null | undefined;
export declare function findChildFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null | undefined;
export declare function findFrameByName(win: CrossDomainWindowType, name: string): CrossDomainWindowType | null | undefined;
export declare function isParent(win: CrossDomainWindowType, frame: CrossDomainWindowType): boolean;
export declare function isOpener(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;
export declare function getAncestor(win?: CrossDomainWindowType): CrossDomainWindowType | null | undefined;
export declare function getAncestors(win: CrossDomainWindowType): ReadonlyArray<CrossDomainWindowType>;
export declare function isAncestor(parent: CrossDomainWindowType, child: CrossDomainWindowType): boolean;
export declare function isPopup(win?: CrossDomainWindowType): boolean;
export declare function isIframe(win?: CrossDomainWindowType): boolean;
export declare function isFullpage(win?: CrossDomainWindowType): boolean;
export declare function getDistanceFromTop(win?: CrossDomainWindowType): number;
export declare function getNthParent(win: CrossDomainWindowType, n?: number): CrossDomainWindowType | undefined | null;
export declare function getNthParentFromTop(win: CrossDomainWindowType, n?: number): CrossDomainWindowType | null | undefined;
export declare function isSameTopWindow(win1: CrossDomainWindowType, win2: CrossDomainWindowType): boolean;
export declare function matchDomain(pattern: DomainMatcher, origin: DomainMatcher): boolean;
export declare function stringifyDomainPattern(pattern: DomainMatcher): string;
export declare function getDomainFromUrl(url: string): string;
export declare function onCloseWindow(win: CrossDomainWindowType, callback: (...args: Array<any>) => any, delay?: number, maxtime?: number): {
    cancel: () => void;
};
export declare function isWindow(obj: Record<string, any>): boolean;
export declare function isBrowser(): boolean;
export declare function isCurrentDomain(domain: string): boolean;
export declare function isMockDomain(domain: string): boolean;
export declare function normalizeMockUrl(url: string): string;
export declare function closeWindow(win: CrossDomainWindowType): void;
export declare function getFrameForWindow(win: CrossDomainWindowType): HTMLElement | null | undefined;