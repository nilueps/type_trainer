import { Character } from "../CharacterSet"

export interface ICharacterInserter {
  apply(str: string, character: Character): string
}


export class PrependCharacterInserter implements ICharacterInserter {
  apply(str: string, character: Character): string {
    if (character.behavior !== 'PREPEND') return str
    return character.glyph + str
  }
}

export class AppendCharacterInserter
 implements ICharacterInserter {
  apply(str: string, character: Character): string {
    if (character.behavior !== 'APPEND') return str
    return str + character.glyph
  }
}

export class PrependOrAppendCharacterInserter
 implements ICharacterInserter {
  apply(str: string, character: Character): string {
    if (character.behavior !== 'PREPEND_OR_APPEND') return str
    return Math.random() < 0.5 ? character.glyph + str : str + character.glyph
  }
}

export class BracketCharacterInserter
 implements ICharacterInserter {
  apply(str: string, character: Character): string {
    if (character.behavior !== 'BRACKET') return str
    if (character.bracketPair != null) return character.glyph + str + character.bracketPair
    return character.glyph + str + character.glyph
  }
}

export class SplitCharacterInserter  implements ICharacterInserter {
  constructor(private vowels: string[]) {}
  apply(str: string, character: Character): string {
    if (character.behavior !== 'SPLIT') return str
    if (str.length < 5) return str // ignore short strings
    const isVowel = (char: string): boolean => this.vowels.includes(char)
    // try to split somewhere after 2nd and before 2nd-to-last letters
    // and not between two vowels
    let splitIndices: number[] = []
    for (let i = 2; i < str.length - 3; i++) {
      if (!isVowel(str[i]) && !isVowel(str[i + 1])) {
        splitIndices.push(i)
      }
    }
    const noSplitFound = splitIndices.length === 0
    if (noSplitFound) return str

    const randomIndex = splitIndices.length > 1 ? splitIndices[Math.floor(Math.random() * splitIndices.length)] : splitIndices[0]
    let splitIndex = randomIndex
    
    return str.slice(0, splitIndex) + character.glyph + str.slice(splitIndex)
  }
}

export class OperatorCharacterInserter
 implements ICharacterInserter {
  apply(str: string, character: Character): string {
    if (character.behavior !== 'OPERATOR') return str
    return str + ' ' + character.glyph
  }
}


export default class CharacterInserter {
  constructor(private vowels: string[]) {}
  apply(str: string, character: Character): string {
    let inserter
    switch (character.behavior) {
      case 'PREPEND':
        inserter = new PrependCharacterInserter()
        break
      case 'APPEND':
        inserter = new AppendCharacterInserter()
        break
      case 'PREPEND_OR_APPEND':
        inserter = new PrependOrAppendCharacterInserter()
        break
      case 'BRACKET':
        inserter = new BracketCharacterInserter()
        break
      case 'SPLIT':
        inserter = new SplitCharacterInserter(this.vowels)
        break
      case 'OPERATOR':
        inserter = new OperatorCharacterInserter()
        break
      default:
        return str
    }
    return inserter.apply(str, character)
  }
}
