export default function hiraToKana(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, function (match: string): string {
    const chr: number = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}
