
import { ulEl, menuEl, categories, formEl, ULForTask } from "./modules/HTML-variables";
import renderHTML from "./modules/render-tasks";
import sideMenu  from './modules/side-menu';
import toogleStatus from './modules/modules-for-addEventListeners.ts/toogle-task';
import addTask from './modules/modules-for-addEventListeners.ts/add-task';
import filterSystem from "./modules/modules-for-addEventListeners.ts/filter-Task";
import removeOrEditTask from './modules/modules-for-addEventListeners.ts/remove-or-edit-task';

// ---------------------TOGGLE TASK AS FINNISHED OR NOT FINISHED-----------------------------
ulEl.addEventListener('click', (el: MouseEvent) => toogleStatus(el));

// ----------------------SIDE MENU---------------------
menuEl.addEventListener('click', sideMenu);

// ---------------------ADD TASKS----------------------
formEl.addEventListener('submit', (el: SubmitEvent) => addTask(el, ulEl));

// --------------------FILTER TASKS---------------------
categories.addEventListener('click', (el: MouseEvent) => filterSystem(el, ulEl));


// --------------------REMOVE TASK or EDIT TASK---------------------------
ULForTask.addEventListener('click', (el) => removeOrEditTask(el));


// ----------------Render Tasks-----------------------
renderHTML(ulEl); 
// --------------------------------------------------
