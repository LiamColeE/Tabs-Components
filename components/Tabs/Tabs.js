class TabManager {
  constructor(tabs){
    this.tabs = [];
    tabs.forEach((element) => {
      this.tabs.push(new TabLink(element));
    });

    this.selectedTab = this.tabs[0];
  }

  selectTab(tab){
    this.deselectTab();
    this.selectedTab = tab;
    this.selectedTab.element.classList.add("tabs-link-selected");
    this.selectedTab.tabItem.element.classList.add("tabs-item-selected");
  }

  deselectTab(tab){
    this.selectedTab.element.classList.remove("tabs-link-selected");
    this.selectedTab.tabItem.element.classList.remove("tabs-item-selected");
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", this.select.bind(this));
  };

  select() {
    tabsManager.selectTab(this);
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll(".tabs-link");

let tabManager = new Tabs(links);