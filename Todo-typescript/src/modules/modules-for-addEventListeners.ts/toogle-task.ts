import { content } from "../save-text-content";

export default function toogleStatus(el: MouseEvent){
  const target = el.target as HTMLElement; 
  const taskEl: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
  
  if(target.tagName === 'LI'){
    taskEl.forEach((element: HTMLLIElement) => {
      if(target === element){
        element.classList.toggle('task-done');
      } 
    })
    console.log(content)
    return
  }
}