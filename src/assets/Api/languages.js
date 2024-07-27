import img1 from '../Project/Project-1.webp'
import img2 from '../Project/Project2.jpeg'
import img3 from '../Project/project3.jpeg'
import img4 from '../Project/Project4.jpg'
import img5 from '../Project/Project5.jpg'


export const skills = [
  {
    id:1,
    name:"HTML",
    complete:75,
    color:"red",
    dataAos:"fade-down",
    dataAosDelay:"400"
  },
  {
    id:2,
    name:"CSS",
    complete:70,
    color:"blue",
    dataAos:"fade-down",
    dataAosDelay:"450"
  },
  {
    id:3,
    name:"JAVASCRIPT",
    complete:65,
    color:"orange",
    dataAos:"fade-down",
    dataAosDelay:"500"
  },
  {
    id:4,
    name:"TAILWIND CSS",
    complete:80,
    color:"crimson",
    dataAos:"fade-down",
    dataAosDelay:"550"
  },
  {
    id:5,
    name:"BOOTSTRAP",
    complete:50,
    color:"violet",
    dataAos:"fade-down",
    dataAosDelay:"600"
  },
  {
    id:6,
    name:"REACT JS",
    complete:70,
    color:"purple",
    dataAos:"fade-down",
    dataAosDelay:"650"
  },
  {
    id:7,
    name:"GSAP",
    complete:40,
    color:"fuchsia",
    dataAos:"fade-down",
    dataAosDelay:"700"
  },{
    id:8,
    name:"NEXT JS",
    complete:70,
    color:"indigo",
    dataAos:"fade-down",
    dataAosDelay:"750"
  },{
    id:9,
    name:"NODE JS",
    complete:60,
    color:"gray",
    dataAos:"fade-down",
    dataAosDelay:"800"
  },
  {
    id:10,
    name:"EXPRESS JS",
    complete:70,
    color:"teal",
    dataAos:"fade-down",
    dataAosDelay:"850"
  },{
    id:11,
    name:"MONGODB",
    complete:60,
    color:"brown",
    dataAos:"fade-down",
    dataAosDelay:"900"
  },
  {
    id:12,
    name:"SQL",
    complete:60,
    color:"crimson",
    dataAos:"fade-down",
    dataAosDelay:"950"
  },
]

export const projects = [
  {
    id:1,
    img:img1,
    url:"https://react-shopping-1.netlify.app/",
    name:"E Commerce website",
    desc:"Developed responsive animated website with add to cart functionality and light-dark theme",
    technologies:["React js","Tailwind css","AOS animation"],
  },
  {
    id:2,
    img:img2,
    url:"https://ochireact.netlify.app/",
    name:"Ochi clone website",
    desc:"Responsive animated ochi clone website using React js and Tailwind css",
    technologies:["React js","Tailwind css","AOS animation"],
  },
  {
    id:3,
    img:img3,
    url:"https://github.com/dhruviksavaliya1212/Printerest_clone",
    name:"Printerest clone website",
    desc:"Developed responsive website with functionalites such as login and register, upload images etc.",
    technologies:["Ejs","Tailwind css","Node js","MongoDB","Express js"],
  },
  {
    id:4,
    img:img4,
    url:"https://food-delivery-frontend-g5ja.onrender.com/",
    name:"Food Delivery website",
    desc:"Developed fullstack responsive animated website with functionalities such as login and register, add to cart, place order, payment gateway etc.",
    technologies:["React js","Tailwind css","Node js","Express js","Mongo DB","AOS animation"],
  },
  {
    id:5,
    img:img5,
    url:"https://spotify-clone-frontend-5eur.onrender.com/",
    name:"Spotify clone website",
    desc:"Developed fullstack responsive website with functionalities such as play and pause the song, next and previous song, search etc.",
    technologies:["React js","Tailwind css","Node js","Express js","Mongo DB"],
  }
]