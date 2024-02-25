import  sideMenu  from "../side-menu.ts";
import { content } from "../save-text-content.ts";

export default function filterSystem(el: MouseEvent, ulEl: HTMLUListElement){
  const target = el.target;
  const removeBtn = document.querySelector('.remove-btn') as HTMLButtonElement;
  const filterOptions: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.options')
  const tasks: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
  
  if(target == removeBtn){
    while(content.length > 0) content.pop();
    localStorage.removeItem('content'); 
    ulEl.innerHTML = ''; 
    sideMenu();
    return;
  }
  
  filterOptions.forEach((option) => {
    filterTask(target, option, tasks); 
  });
}

function filterTask(target: EventTarget | null, option: HTMLParagraphElement, tasks: NodeListOf<HTMLLIElement>){
  if(target === option){
    option.classList.add('active-option');

    if(option.textContent === 'Pending'){
      tasks.forEach(task => {
        if(task.classList.contains('task-done')) return task.style.display = 'none';
        if(!task.classList.contains('task-done')) return task.style.display = '';
      })
      
    } else if(option.textContent === 'Completed'){
      tasks.forEach(task => {
        if(task.classList.contains('task-done')) return task.style.display = '';
        if(!task.classList.contains('task-done')) return task.style.display = 'none';
      })

    } else {
      tasks.forEach(task => task.style.display = '');
    }
    
  } else {
    option.classList.remove('active-option'); 
  }
  
  sideMenu();
}

