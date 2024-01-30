import { content, saveToLocalStorage } from "./save-text-content";

export function renderHTML(ULcontainer: HTMLUListElement){
  console.log('PP')
  content.forEach(textContent => {
    ULcontainer.innerHTML += `<li>${textContent.content}</li>`
  }); 

}

export function displayNewTask(textContent: string | undefined, ULcontainer: HTMLUListElement){
  if(ULcontainer && textContent) {
    ULcontainer.innerHTML += `<li>${textContent}</li>`; 
    content.push({id: (content.length + 1), content: textContent, done: false})
    console.log(content)
    saveToLocalStorage()
    // localStorage.removeItem('content')
  }
}