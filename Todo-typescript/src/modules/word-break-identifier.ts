export default function handleLongWord(text: string): string{
  const MAX_WORD_LENGTH = 24;
    const allWords: string[] = text.split(' '); 
    const checkedWords = allWords.map((word) => {
      if(word.length >= MAX_WORD_LENGTH) return `<span style="word-break: break-all;">${word}</span>`
      if(word.length < MAX_WORD_LENGTH) return word; 
    }).join(' ')

    return checkedWords; 
} 