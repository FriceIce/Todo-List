import { v4 as uuidv4 } from 'uuid';
import filterSystem from "./modules/filter-Task";
import{ displayNewTask, renderHTML } from "./modules/render-tasks";
import { content, saveToLocalStorage } from "./modules/save-text-content";

const ulEl = document.querySelector('ul') as HTMLUListElement;
ulEl.addEventListener('click', (el: MouseEvent) => {
  const target= el.target; 
  const taskEl: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
  
  if(target){
    taskEl.forEach((element: HTMLLIElement) => {
      if(target === element){
        element.classList.toggle('task-done');
      } 
    })
    console.log(content)
  }
});

// ---------------------ADD TASKS----------------------
const formEl = document.querySelector('form') as HTMLFormElement;
formEl.addEventListener('submit', (el: SubmitEvent) => {
  el.preventDefault();
  const inputEl = document.querySelector('form input') as HTMLInputElement;
  
  if(inputEl.value){
    const id: string = uuidv4();
    displayNewTask(inputEl.value, ulEl, id);
    inputEl.value = '';
    return; 
  }
  
  inputEl.placeholder = 'Your input is empty..';
  setTimeout(() => {
    inputEl.placeholder = 'Add your Task';    
  }, 5000);
});

// --------------------FILTER TASKS---------------------
const categories = document.querySelector('.categories') as HTMLDivElement;
categories.addEventListener('click', (el: MouseEvent) => {
  const target = el.target;
  const removeBtn = document.querySelector('.remove-btn') as HTMLButtonElement;
  const filterOptions: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.options')
  const tasks: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
  
  if(target == removeBtn){
    while(content.length > 0) content.pop();
    localStorage.removeItem('content'); 
    ulEl.innerHTML = ''; 
    return;
  }
  
  filterOptions.forEach((option) => {
    filterSystem(target, option, tasks); 
  });
  
});


// --------------------REMOVE TASK---------------------------
const ULForTask = document.querySelector('ul') as HTMLUListElement;
ULForTask.addEventListener('click', (el)=> {
  const target = el.target as HTMLImageElement; 
  const liElement = target.closest('li') as HTMLLIElement; 
  const id = liElement.dataset.id; 
  const removeBtn = document.querySelector('.remove-specific-task-' + id);

  if(target === removeBtn){
    content.forEach((textContent,index) => {
      if(textContent.id === id){
        content.splice(index, 1); 
        liElement.remove(); 
        saveToLocalStorage();
      }
    })
  }
});

// ----------------Render Tasks-----------------------
renderHTML(ulEl); 
// --------------------------------------------------