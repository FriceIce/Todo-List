import { content } from "../save-text-content";
import { saveToLocalStorage } from "../save-text-content";
import handleLongWord from "../word-break-identifier";

export default function removeOrEditTask(el: MouseEvent){
  const target = el.target as HTMLImageElement; 
  const liElement = target.closest('li') as HTMLLIElement; 
  const id: string | undefined = (liElement.dataset.id) ? liElement.dataset.id : undefined; 
  const textContainer: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.text-content'); 
  const removeBtn = document.querySelector('.remove-specific-task-' + id) as HTMLImageElement;
  const editBtn = document.querySelector('.edit-btn-' + id) as HTMLImageElement;

  if(!id) return 
  if(target === removeBtn){
    content.forEach((textContent,index) => {
      if(textContent.id === id){
        content.splice(index, 1); 
        liElement.remove(); 
        saveToLocalStorage();
      }
    })
    return
  }

  if(target === editBtn){
    console.log('Edit button clicked!!')
    editBtn.title = (editBtn.title === 'Edit') ? 'Save' : 'Edit';

    textContainer.forEach((text => {
      if(text.dataset.textId === id && text.contentEditable !== 'true'){
        text.style.background = 'rgba(250, 250, 210, 0.466)'; 
        text.contentEditable = 'true'; 
      } else {
        text.style.background = 'transparent'; 
        text.contentEditable = 'false'; 
      } 
    }));

    textContainer.forEach((text, index) =>{
      if(text.textContent !== content[index].content){
        content[index].content = handleLongWord(text.textContent!.trim());
        // console.log(content[index].content)
        text.innerHTML = content[index].content; // This removes the unnecessary space after editing content.
        saveToLocalStorage();
      } 
    })
  }
} 