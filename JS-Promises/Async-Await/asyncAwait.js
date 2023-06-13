// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
