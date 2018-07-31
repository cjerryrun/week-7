//1. use fetch to get comments from https://us-central1-omg-codemygear.cloudfunctions.net/comments/<your_name>
//2. add the comments to the HTML
//3. Add a form to allows visitors to submit their email and message (hint: use POST)
//4. Bonus points: Display the count for how many people found a comment helpful or not and use PUT to allow users to specify is a comment is helpful or not helpful (edited)

const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/corniche';

var content = document.getElementById('content');
var text = document.getElementById('text');
var submit = document.getElementById('submit');
var email = document.getElementById('email');

getComments();

async function getComments() {
  var resp = await fetch(url);
  var comments = await resp.json();
  var html = "";
  console.log(comments);
  comments.forEach(function(comment){
    html = html + "<div>";
    html = html + `<span>${comment.message}</span>`;
    html = html + "</div>";
  });
  console.log(comments);
  content.innerHTML = html;
  console.log(html);
}
submit.addEventListener('click', function() {
  postComments([{
    "message": text.value,
    // "email": "test@gmail.com",
    "email": email.value
  }])
})


async function postComments(comment) {
  var resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  getComments();
}



















//const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/corniche';

//getComments();

//async function getComments() {
  //var resp = await fetch(url);
  //var comments = await resp.json();
  //var html = "";
  //comments.forEach((comment) => {
    //console.log(comment);
//  })
//}
//
// submit.addEventListener('click', function() {
//   postToDo([{
//     "task": text.value
//   }]);
// });

//
// async function postToDo(todo) {
//   var resp = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(todo),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//   });
//   text.value = "";
//   getToDos();
// }
//
// content.addEventListener('click', function() {
//   if (event.target.className === "completeTask") {
//     putToDo([{
//       id: event.target.id,
//       completed: true
//     }]);
//   }
// });
//
// async function putToDo(todo) {
//   var resp = await fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(todo),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//   });
//   getToDos();
// }
