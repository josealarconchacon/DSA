"strict";
// #1) Create a promise that resolves in 4 seconds and returns "success" string
// Run the promise and make it console.log "success"
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

promise
  .then((response) => {
    console.log(response); // success
  })
  // callback will be triggered if there is an error in the promise.
  .catch((error) => {
    console.log(error);
  });

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch(console.log("Oops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    fetch(url).then((people) => people.json());
  })
)
  .then((array) => {
    console.log("1 - ", array[0]);
    console.log("2 - ", array[1]);
    console.log("3 - ", array[2]);
    console.log("4 - ", array[3]);
  })
  .catch((error) => {
    console.log(`Something is not right: ${error}`);
  });
