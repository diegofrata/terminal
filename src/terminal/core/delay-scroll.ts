export interface DelayScroll {
    delayScroll: boolean;
}

export function isDelayScroll(instance: any): instance is DelayScroll {
    return typeof instance.delayScroll === 'boolean';
}