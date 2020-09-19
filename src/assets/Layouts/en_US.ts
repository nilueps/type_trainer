import { CharacterBehavior, CharacterSet, CharacterType, KeyboardVisualLayout } from "../kb_types"

export const QWERTY_labels: KeyboardVisualLayout = {
  NONE: { main: "" },
  Backquote: { main: "`", shift: "~" },
  Digit1: { main: "1", shift: "!" },
  Digit2: { main: "2", shift: "@" },
  Digit3: { main: "3", shift: "#" },
  Digit4: { main: "4", shift: "$" },
  Digit5: { main: "5", shift: "%" },
  Digit6: { main: "6", shift: "^" },
  Digit7: { main: "7", shift: "&" },
  Digit8: { main: "8", shift: "*" },
  Digit9: { main: "9", shift: "(" },
  Digit0: { main: "0", shift: ")" },
  Minus: { main: "-", shift: "_" },
  Equal: { main: "=", shift: "+" },
  Backspace: { main: "Backspace" },
  Tab: { main: "Tab" },
  KeyQ: { main: "q", shift: "Q" },
  KeyW: { main: "w", shift: "W" },
  KeyE: { main: "e", shift: "E" },
  KeyR: { main: "r", shift: "R" },
  KeyT: { main: "t", shift: "T" },
  KeyY: { main: "y", shift: "Y" },
  KeyU: { main: "u", shift: "U" },
  KeyI: { main: "i", shift: "I" },
  KeyO: { main: "o", shift: "O" },
  KeyP: { main: "p", shift: "P" },
  BracketLeft: { main: "[", shift: "{" },
  BracketRight: { main: "]", shift: "}" },
  Backslash: { main: "\\", shift: "|" },
  CapsLock: { main: "CapsLock" },
  KeyA: { main: "a", shift: "A" },
  KeyS: { main: "s", shift: "S" },
  KeyD: { main: "d", shift: "D" },
  KeyF: { main: "f", shift: "F" },
  KeyG: { main: "g", shift: "G" },
  KeyH: { main: "h", shift: "H" },
  KeyJ: { main: "j", shift: "J" },
  KeyK: { main: "k", shift: "K" },
  KeyL: { main: "l", shift: "L" },
  Semicolon: { main: ";", shift: ":" },
  Quote: { main: "'", shift: '"' },
  Enter: { main: "Enter" },
  ShiftLeft: { main: "Shift" },
  KeyZ: { main: "z", shift: "Z" },
  KeyX: { main: "x", shift: "X" },
  KeyC: { main: "c", shift: "C" },
  KeyV: { main: "v", shift: "V" },
  KeyB: { main: "b", shift: "B" },
  KeyN: { main: "n", shift: "N" },
  KeyM: { main: "m", shift: "M" },
  Comma: { main: ",", shift: "<" },
  Period: { main: ".", shift: ">" },
  Slash: { main: "/", shift: "?" },
  ShiftRight: { main: "Shift" },
  ControlLeft: { main: "Ctrl" },
  AltLeft: { main: "Alt" },
  Space: { main: "" },
  AltRight: { main: "Alt" },
  ControlRight: { main: "Ctrl" }
}

export const QWERTY_CharSet: CharacterSet = [
  { code: "KeyA", glyph: "a", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyB", glyph: "b", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyC", glyph: "c", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyD", glyph: "d", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyE", glyph: "e", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyF", glyph: "f", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyG", glyph: "g", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyH", glyph: "h", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyI", glyph: "i", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyJ", glyph: "j", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyK", glyph: "k", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyL", glyph: "l", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyM", glyph: "m", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyN", glyph: "n", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyO", glyph: "o", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyP", glyph: "p", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyQ", glyph: "q", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyR", glyph: "r", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyS", glyph: "s", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyT", glyph: "t", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyU", glyph: "u", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyV", glyph: "v", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyW", glyph: "w", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyX", glyph: "x", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyY", glyph: "y", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "KeyZ", glyph: "z", type: CharacterType.LOWERCASE_LETTER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit0", glyph: "0", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit1", glyph: "1", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit2", glyph: "2", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit3", glyph: "3", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit4", glyph: "4", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit5", glyph: "5", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit6", glyph: "6", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit7", glyph: "7", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit8", glyph: "8", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Digit9", glyph: "9", type: CharacterType.NUMBER, behavior: CharacterBehavior.SEQUENTIAL },
  { code: "Comma", glyph: ",", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Period", glyph: ".", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Digit1", glyph: "!", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Slash", glyph: "?", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Semicolon", glyph: ";", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Semicolon", glyph: ":", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: ["Quote", "KeyS"], glyph: "'s", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.APPEND },
  { code: "Quote", glyph: "'", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.SPLIT },
  { code: "Minus", glyph: "-", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.SPLIT },
  {
    code: ["Digit9", "Digit0"],
    glyph: "(", bracketPair:")",
    type: CharacterType.PUNCTUATION,
    behavior: CharacterBehavior.BRACKET,
  },
  { code: "Quote", glyph: "'", type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.BRACKET },
  { code: "Quote", glyph: '"', type: CharacterType.PUNCTUATION, behavior: CharacterBehavior.BRACKET },
  { code: "Digit2", glyph: "@", type: CharacterType.SYMBOL, behavior: CharacterBehavior.SPLIT },
  { code: "Digit3", glyph: "#", type: CharacterType.SYMBOL, behavior: CharacterBehavior.PREPEND },
  { code: "Digit4", glyph: "$", type: CharacterType.SYMBOL, behavior: CharacterBehavior.APPEND },
  { code: "Digit5", glyph: "%", type: CharacterType.SYMBOL, behavior: CharacterBehavior.APPEND },
  { code: "Digit7", glyph: "&", type: CharacterType.SYMBOL, behavior: CharacterBehavior.OPERATOR },
  { code: "Digit8", glyph: "*", type: CharacterType.SYMBOL, behavior: CharacterBehavior.APPEND },
  { code: "Slash", glyph: "/", type: CharacterType.SYMBOL, behavior: CharacterBehavior.SPLIT },
  { code: "Backquote", glyph: "~", type: CharacterType.SYMBOL, behavior: CharacterBehavior.PREPEND },
  { code: "Backquote", glyph: "`", type: CharacterType.PROGRAMMING, behavior: CharacterBehavior.BRACKET },
]

export const Vowels = ['a', 'e', 'i', 'o', 'u']