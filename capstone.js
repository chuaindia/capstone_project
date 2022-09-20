/* eslint-disable quotes */
const speakers = [
    {
      name: "Miles Obi",
      post: "Principal",
      image: "/Images/personel 1.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
    },
    {
      name: "Ojong Joel",
      post: "Vice Principal",
      image: "/Images/personel 1.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
    },
    {
      name: "Tangdou Helen",
      post: "Discipline Master",
      image: "/Images/personel2.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
    },
    {
      name: "Mario Ajeba",
      post: "Vice Principal",
      image: "/Images/personel 1.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
    },
    {
      name: "Atangana Marie therese.F",
      post: "Vice Principal",
      image: "/Images/personel4.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
    },
    {
      name: "Tagne Kevin J.M",
      post: "Vice Principal",
      image: "/Images/personel 3.png",
      summary:
        "The Principal's main focus should be to develop and maintain effective educational programs within his/her school and to promote the improvement of teaching and learning with his/her school.",
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