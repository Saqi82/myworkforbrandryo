// Stub for design-mode (only used in anything.com dev mode)
// For static SPA builds (e.g., Hostinger), this is not needed.

export type GetStyleInfo = Record<string, unknown>;

export function initDesignMode(_config?: unknown): void {
  // no-op for static builds
}

export function registerDesignModeElement(_el: HTMLElement): void {
  // no-op
}
