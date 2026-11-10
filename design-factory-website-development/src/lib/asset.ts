// Helpers for static hosting (GitHub Pages). All empty/false by default,
// so the normal server deployment is unchanged.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const IS_STATIC = process.env.NEXT_PUBLIC_STATIC === "true";
export const asset = (path: string) => `${BASE_PATH}${path}`;
