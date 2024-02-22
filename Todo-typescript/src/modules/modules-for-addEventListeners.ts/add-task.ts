import { v4 as uuidv4 } from 'uuid';
import handleLongWord from "../word-break-identifier.ts"; 
import { displayTask } from '../render-tasks.ts';

export default function addTask(el: SubmitEvent, ulEl: HTMLUListElement){
  el.preventDefault();
  const inputEl = document.querySelector('form input') as HTMLInputElement;
  
  // Checks if the input value starts with an HTML tag opening or are blatant HTML tags. 
  if(/<[a-z][\s\S]*>|<\/[a-z]+>|<[a-z][\s\S]*\s/i.test(inputEl.value)){
    alert('HTML tags or words starting with HTML tags are not allowed in the input!'); 
    inputEl.value = '';    
    return 
  }

  if(inputEl.value){
    const inputValue = handleLongWord(inputEl.value); 
    const id: string = uuidv4();
    displayTask(inputValue, ulEl, id);
    inputEl.value = '';
    return; 
  }
  
  inputEl.placeholder = 'Your input is empty..';
  setTimeout(() => {
    inputEl.placeholder = 'Add your Task';    
  }, 5000);
}