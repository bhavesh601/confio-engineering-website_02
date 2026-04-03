// const reveal = document.querySelectorAll(".home");

// window.addEventListener("scroll", () => {
//    reveal.forEach((element) =>{
//     const windowHeight = window.innerHeight;
//     const elementTop = element.getBoundingClientRect().top;
//     const revealPoint = 10;
//     if(elementTop < (windowHeight - revealPoint)){
//         element.classList.add("active");
//     }
//    })
// })
  

  // const video = document.getElementById("heroVideo");

  // document.getElementById("carouselExample")
  //   .addEventListener("slide.bs.carousel", function () {
  //     video.pause();
  //     video.currentTime = 0; // reset if slide changes
  //   });
 

const reveals = document.querySelectorAll(".Head");

window.addEventListener("scroll", () => {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});  

const reveal = document.querySelectorAll(".inner_content1");

window.addEventListener("scroll", () => {
  reveal.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}); 


const i2 = document.querySelectorAll(".inner_content2");

window.addEventListener("scroll", () => {
  i2.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
    else{
        element.classList.removed("active");
    }
  });
});
const i3 = document.querySelectorAll(".inner_content3");

window.addEventListener("scroll", () => {
  i3.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});


const reveald = document.querySelectorAll(".line");

window.addEventListener("scroll", () => {
  reveald.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});

const p1 = document.querySelectorAll(".point1");

window.addEventListener("scroll", () => {
  p1.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});


const p4 = document.querySelectorAll(".point4");

window.addEventListener("scroll", () => {
  p4.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});

const p2 = document.querySelectorAll(".point2");

window.addEventListener("scroll", () => {
  p2.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});

const p3 = document.querySelectorAll(".point3");

window.addEventListener("scroll", () => {
  p3.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});

const all = document.querySelectorAll(".all");

window.addEventListener("scroll", () => {
  all.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});

const ham = document.querySelector(".ham1");
const sidebar = document.querySelector(".sidebar");

ham.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.getElementById('I_form').addEventListener('submit',async function(event){
  event.preventDefault();

  const formDate = {
    name: document.getElementById('username').value,
    phone: document.getElementById('userphone').value,
    email : document.getElementById('useremail').value,
    message: document.getElementById('usermessage').value
  }
  try{

    const response = await fetch('https://confio-backend-production.up.railway.app/enquiry',{
      method : 'POST',
     
      headers :{
        'Content-type':'application/json'
      },
      body: JSON.stringify(formDate)
    });


    const result = await  response.json();
    if(response.ok){
      alert("Thanks! We will contact you soon.");
    }
    else{
      alert("Something went wrong");
    }
  }
  catch (error){
    console.error('Error',error);
  }
});

const response = await fetch('https://confio-backend-production.up.railway.app/enquiry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // Capital T in Type
  },
  credentials: 'include',
  body: JSON.stringify(formDate)
});
