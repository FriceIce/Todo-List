const ulEl: HTMLUListElement | null = document.querySelector('ul');

if(ulEl){
  ulEl.addEventListener('click', (el: MouseEvent) => {
    const target: EventTarget | null = el.target; 
    const taskEl: NodeListOf<HTMLLIElement> = document.querySelectorAll('ul li'); 
    console.log('inne i click-eventet')
    if(target){
      taskEl.forEach((element: HTMLLIElement) => {
        if(target === element) return element.classList.toggle('task-done')
      })
    }
  });
} else {
  console.error('Element är null, förmodligen fel klassnamn.')
}
