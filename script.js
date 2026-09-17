// async function getuser() {
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   }catch(error){
//     console.log("خطا در دریافت اطلاعات ");
//   }
// }

// getuser();

const loadBtn = document.getElementById("loadBtn")
const loading = document.getElementById("loading")
const error = document.getElementById("error")
const userscontainr = document.getElementById("users")

loadBtn.addEventListener("click" ,getusers);

async function getusers() {
  userscontainr.innerText = "";
  error.innerText = "";
  loading.innerText = "در حال دریاف اطلاعات !!"
  
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(function(user){
      const userbox = document.createElement("div");

      userbox.classList.add("user");

      userbox.innerText =
       "نام : " + user.name +
       "\n ایمیل : " + user.email;

      userscontainr.appendChild(userbox);

    });
  }catch(error){
    error.innerText="دریافت اطلاعات با خطا مواجه شد  ... "
    console.log(error);
  }

  lo  ading.innerText = ""
};