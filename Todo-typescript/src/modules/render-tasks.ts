import { content, saveToLocalStorage } from "./save-text-content";

export default function renderHTML(ULcontainer: HTMLUListElement){
  content.forEach(textContent => {
    ULcontainer.innerHTML += HTML(textContent.content, textContent.id);
  }); 
}

export function displayTask(textContent: string | undefined, ULcontainer: HTMLUListElement, id: string){
  if(ULcontainer && textContent) {
    ULcontainer.innerHTML += HTML(textContent, id);
    content.push({id: id, content: textContent});
    console.log(content);
    saveToLocalStorage();
  }
}

export function HTML(textContent: string, id: string){
  return `<li data-id="${id}"><p class="text-content" data-text-id="${id}">${textContent}</p><div class="remove-edit-container"><img class="edit-btn edit-btn-${id}" src="svg-icons/edit-svgrepo-com (1).svg" title="Edit"><img class="remove-specific-task-${id}" src="svg-icons/remove-svgrepo-com.svg"></div></li>`;
}