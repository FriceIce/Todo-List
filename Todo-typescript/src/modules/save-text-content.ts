export const content: [{id: number; content: string;}] = JSON.parse(localStorage.getItem('content') || '[]');  

export function saveToLocalStorage(){
  return localStorage.setItem('content', JSON.stringify(content));
}

