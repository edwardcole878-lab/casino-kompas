/**
 * Serialize a value for safe inclusion inside <script type="application/ld+json">.
 * Escapes characters that could break out of the script tag or be misinterpreted
 * by HTML parsers.
 */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
