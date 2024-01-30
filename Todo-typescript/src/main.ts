import filterSystem from "./modules/filter-Task";
import{ displayNewTask, renderHTML } from "./modules/render-tasks";
import { content, saveToLocalStorage } from "./modules/save-text-content";

const ulEl: HTMLUListElement | null = document.querySelector('ul');
if(ulEl){
  ulEl.addEventListener('click', (el: MouseEvent) => {
    const target: EventTarget | null = el.target; 
    const taskEl: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
    
    
    if(target){
      taskEl.forEach((element: HTMLLIElement, index: number) => {
        if(target === element){
          element.classList.toggle('task-done');
        } 
      })
    
    console.log(content)
  }
});
} else {
  console.error('Element är null, förmodligen fel klassnamn.')
}


// ---------------------ADD TASKS----------------------
const formEl: HTMLFormElement | null = document.querySelector('form');

if(formEl){
  formEl.addEventListener('submit', (el: SubmitEvent) => {
    el.preventDefault();
    const inputEl: HTMLInputElement | null = document.querySelector('form input');
    if(!inputEl) return console.log('Check if fomr input Element is null or if the input.value is undefined.'); 
    
    if(!inputEl.value){
      inputEl.placeholder = 'Your input is empty..' 
      setTimeout(() => {
        inputEl.placeholder = 'Add your Task'
      }, 5000);
    }

    if(ulEl) displayNewTask(inputEl.value, ulEl);
    inputEl.value = '';
  })

}

// --------------------FILTER TASKS---------------------
const categories: HTMLDivElement | null = document.querySelector('.categories');
if(categories)
  categories.addEventListener('click', (el: MouseEvent) => {
    const target: EventTarget | null = el.target;
    const removeBtn: HTMLButtonElement | null = document.querySelector('.remove-btn');
    const filterOptions: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.options')
    const tasks: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 

    if(target == removeBtn){
      localStorage.removeItem('content'); 
      if(ulEl) ulEl.innerHTML = ''; 
      return
    }

    filterOptions.forEach((option) => {
      filterSystem(target, option, tasks); 
    });


  });
// ----------------Rendering HTML-----------------------
if(ulEl) renderHTML(ulEl); 
// --------------------------------------------------
