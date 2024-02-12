import { content, saveToLocalStorage } from "./save-text-content";

export function renderHTML(ULcontainer: HTMLUListElement){
  console.log('PP')
  content.forEach(textContent => {
    ULcontainer.innerHTML += `<li data-id="${textContent.id}">${textContent.content} <div class="remove-edit-container"><img class="edit-btn-${textContent.id}" src="svg-icons/edit-svgrepo-com.svg"><img class="remove-specific-task-${textContent.id}" src="svg-icons/remove-svgrepo-com.svg"></div></li>`;
  }); 

}

export function displayNewTask(textContent: string | undefined, ULcontainer: HTMLUListElement, id: string){
  if(ULcontainer && textContent) {
    ULcontainer.innerHTML += `<li data-id="${id}">${textContent} <div class="remove-edit-container"><img class="edit-btn-${id}" src="svg-icons/edit-svgrepo-com.svg"><img class="remove-specific-task-${id}" src="svg-icons/remove-svgrepo-com.svg"></div></li>`;
    content.push({id: id, content: textContent});
    console.log(content);
    saveToLocalStorage();
    // localStorage.removeItem('content')
  }
}