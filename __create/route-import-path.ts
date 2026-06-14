import { pathToFileURL } from 'node:url';

export function toRouteImportSpecifier(routeFile: string, update = Date.now()): string {
  const normalizedRouteFile = routeFile.replaceAll('\\', '/');

  return `${pathToFileURL(normalizedRouteFile).href}?update=${update}`;
}
