import { KeyCode } from "./KeyCode"

export type CharacterType = "NONE" | "LOWERCASE_LETTER" | "NUMBER" | "PUNCTUATION" | "SPECIAL" | "PROGRAMMING" | "WHITESPACE"

export type CharacterBehavior = "NONE" | "PREPEND" | "APPEND" | "PREPEND_OR_APPEND" | "SPLIT" | "BRACKET" | "OPERATOR"

export type Character = {
  code: KeyCode[]
  glyph: string
  bracketPair?: string
  type: CharacterType
  behavior: CharacterBehavior
}

export default class CharacterSet {
  private _letterSet: Character[]
  private _numberSet: Character[]
  private _punctSet: Character[]
  private _specialSet: Character[]
  constructor(private _characters: Character[]) {
    this._letterSet = this.ofType('LOWERCASE_LETTER')
    this._numberSet = this.ofType('NUMBER')
    this._punctSet  = this.ofType("PUNCTUATION")
    this._specialSet = this.ofType("SPECIAL")
  }
  get characters() {
    return this._characters
  }
  get letterSet() {
    return this._letterSet
  }
  get numberSet() {
    return this._numberSet
  }
  get punctSet() {
    return this._punctSet
  }
  get specialSet() {
    return this._specialSet
  }
  ofType(t: CharacterType): Character[] {
    return this._characters.filter(({type}) => t === type)
  }
  static uniqueGlyphs(cs: Character[]): string[] {
    return cs.reduce((uniqueGlyphs: string[], { glyph, bracketPair }) => {
      if (uniqueGlyphs.includes(glyph) || glyph.length > 1) return uniqueGlyphs
      uniqueGlyphs = uniqueGlyphs.concat(glyph)
      if (bracketPair == null || uniqueGlyphs.includes(bracketPair)) return uniqueGlyphs
      return uniqueGlyphs.concat(bracketPair)
    }, [])
  }

  static uniqueKeyCodes(cs: Character[]): KeyCode[] {
    return cs.reduce((arr: KeyCode[], character) => {
      for (const code of character.code) {
        if (!arr.includes(code)) {
          arr = arr.concat(code)
        }
      }
      return arr
    }, [])
  }

  mapGlyphToKeyCode(glyph: string): KeyCode {
    if (glyph == null) return "NONE"
    glyph = glyph.toLowerCase()
    for (const ch of this._characters) {
      if (glyph === ch.glyph) return ch.code[0]
      if (ch.bracketPair != null && glyph === ch.bracketPair) return ch.code[1]
    }
    return 'NONE'
  }

  filterByCode(code: KeyCode): Character[] {
    const arr = this._characters.filter(character => character.code.includes(code))
    if (arr == null) return []
    return arr
  }
}
