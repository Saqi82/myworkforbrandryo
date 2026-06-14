import { describe, expect, it } from 'vitest';

import { toRouteImportSpecifier } from '../../__create/route-import-path';

describe('toRouteImportSpecifier', () => {
  it('normalizes Windows route paths to Vite-compatible file URLs', () => {
    const routeFile = 'D:\\Ecat\\anything\\apps\\web\\src\\app\\api\\auth\\token\\route.js';

    expect(toRouteImportSpecifier(routeFile, 171)).toBe(
      'file:///D:/Ecat/anything/apps/web/src/app/api/auth/token/route.js?update=171',
    );
  });
});
