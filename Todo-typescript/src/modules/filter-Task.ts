export default function filterSystem(target: EventTarget | null, option: HTMLParagraphElement, tasks: NodeListOf<HTMLLIElement>){
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
}