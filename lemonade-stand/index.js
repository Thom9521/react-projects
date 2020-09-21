//Action creators
const drink = () => ({ type: "DRINK" }); //increment action - without payload
const pay = () => ({ type: "PAY" }); //sets the value to 0
const no = () => ({ type: "NO" }); //shows an alert
const run = () => ({ type: "RUN" }); //changes the url

//Reducers
const lemonadeReducer = (amount = 0, action) => {
  if (action.type === "DRINK") {
    show = false;
    return amount + 10;
  }
  if (action.type === "PAY") {
    return (amount = 0);
  }
  if (action.type === "NO") {
    alert(":(");
  }
  if (action.type === "RUN") {
    window.location.href = "https://www.youtube.com/watch?v=MtN1YnoL46Q";
  }
  return amount;
};

//Store
const store = Redux.createStore(lemonadeReducer);

//update html
function render() {
  document.getElementById("value").innerHTML = store.getState();
}

//Subscribe to changes, ie callback function render () is called when store is updated
store.subscribe(render);
