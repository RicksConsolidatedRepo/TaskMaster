import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = data.name;
    this.items = data.items;
    this.id = data.id || generateId();
    this.color = data.color;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    let template = '';

    this.items.forEach(item => {
      template += `
        <div class="item-container m-1 p-1">
        <span><input type="checkbox" value="done" class="form-check-input">${item}</span><i class="fas fa-trash-alt removeIcon" onclick="app.listController.removeListItem('${item}', '${this.id}')" title="remove item from list"></i>
        </div>
      `
    });

    return `
    <div class="card" style="width: 15rem;">
      <div class="card-body">
      <header style="background-color: ${this.color};">
      <form action="" id="add-item" onsubmit="app.listController.addListItem(event, '${this.id}')">
      <i class="fa fa-times removeIcon" onclick="app.listController.removeList('${this.id}')"></i>
      <div class="listBtns m-1">
      <h5 class="card-title">${this.name}</h5>
      <button class="btn btn-light" type="submit" title="Add a task"><i class="fas fa-plus add-item-btn"></i></button></div>
        <div class="form-group">
        </header>
          <input type="text" class="form-control" id="listItemName" name="listItemName"
            placeholder="Add Task..." required="true">
        </div>
      </form>
        <div>${template}</div>
      </div>
    </div>
  </div>
    `
  }
}