// Decorators
// value param: store the values of the definition it;s apply to
// context param: can change information of the definition itself
// function MenuItem(value, context) {}

// outer func accept value
function MenuItem(itemID: string) {
  // inner func interact with the target
  return function (value) {
    return class extends value {
      id = itemID;
    };
  };
}

@MenuItem("abc")
class Pizza {
  id: string;
}

@MenuItem("der")
class Hamburger {
  id: string;
}
console.log(new Pizza().id);
