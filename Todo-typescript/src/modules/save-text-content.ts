interface Task {content: string; id: string}; 

export const content: Array<Task> = JSON.parse(localStorage.getItem('content') || '[]');  
export function saveToLocalStorage(){
  return localStorage.setItem('content', JSON.stringify(content));
}


