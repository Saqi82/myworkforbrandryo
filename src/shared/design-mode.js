export function initDesignMode() {
  // Stub used for builds outside the anything.com environment
  return {
    isDesignMode: false,
    enable: () => {},
    disable: () => {},
  };
}
