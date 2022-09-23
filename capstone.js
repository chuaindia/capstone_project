/* eslint-disable quotes */
const speakers = [
    {
      name: "Saha M.",
      post: "Professor,School of Nanophysics,Calcutta",
      image: "/image/three.webp",
      summary: "Introduction to the very <br> basic knowledge of LASER.",
    },

    {
      name: "Raha N. ",
      post: "Associate Professor,Delhi University,Delhi",
      image: "/image/one.webp",
      summary: "The day to day life <br> How we are using LASER.",
    },

    {
      name: "Mukhopadhyay S",
      post: "Associate Professor,Department of Chemistry,J.U.",
      image: "/image/sixth.jpg",
      summary: "The materials characteristics needed <br> for the production of LASER.",
    },

    {
      name: "Rouchoudhury A",
      post: "Associate Professor,Rajabazar Science College, Calcutta",
      image: "/image/five.jpg",
      summary: "Utilisation of Material Properties <br> for the impletation of LASER.",
    },

    {
      name: "Pan R. N.",
      post: "Professor, BHU, Benaras",
      image: "/image/four.webp",
      summary: "The artistic concept of Einstein <br>behind the birth of LASER.",
    },

    {
      name: "Sarkar A. K.",
      post: "Professor,BESU,Howrah",
      image: "/image/second.jpg",
      summary: "Commercial use of LASER <br>for the growth of Industry.",
    },
];
// eslint-disable-next-line no-unused-vars
function navclick(x) {
    x.classList.toggle("toggleAll");
    const navbar = document.querySelector(".NavBar");
    navbar.classList.toggle("toggleMenu");
}
function featureSpeakers() {
    const sectn3 = document.querySelector(".Speaker");
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < speakers.length; i++) {
        const li = document.createElement("li");
        const div1 = document.createElement("div");
        div1.className = "be4";
        const div2 = document.createElement("div");
        li.appendChild(div1);
        li.appendChild(div2);
        const img = document.createElement("img");
        div1.appendChild(img);
        const h4 = document.createElement("h4");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");
        div2.appendChild(h4);
        div2.appendChild(h5);
        div2.appendChild(p);
        sectn3.append(li);
        h4.innerHTML = speakers[i].name;
        h5.innerHTML = speakers[i].post;
        p.innerHTML = speakers[i].summary;
        img.src = speakers[i].image;
    }
}
window.addEventListener("DOMContentLoaded", (e) => featureSpeakers(e));
