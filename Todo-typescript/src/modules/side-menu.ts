export default function sideMenu(){
  const categories = document.querySelector('.categories') as HTMLDivElement;
  const middleBar = document.querySelector('.hamburgare-menu input') as HTMLInputElement;

  if(!categories.classList.contains('show-menu')){
    categories.classList.add('show-menu');
    middleBar.checked = true;
  } else {
    categories.classList.remove('show-menu');
    middleBar.checked = false;
  }
}