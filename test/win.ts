import type { CrossDomainWindowType, SameDomainWindowType } from '../src/types';

export function getCrossDomainWindow(
    options: Record<string, any>
): CrossDomainWindowType {
    // @ts-ignore not a true window type
    return {
        ...options
    };
}
export function getSameDomainWindow(
    options: Record<string, any>
): SameDomainWindowType {
    // @ts-ignore not a true window type
    return {
        ...options
    };
}
