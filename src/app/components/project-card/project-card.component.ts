import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"],
})
export class ProjectCardComponent implements OnInit {
  projects = [
    {
      banner: "../../../assets/motorShop.png",
      technologies: "HTML, Typescript, React",
      title: "MotorShop",
      description: "Vehicles e-commerce application",
      libsAndFrameworks:
        "axios|chakra-ui|emotion|framer-motion|jwt-decode|react-hook-form|react-icons|react-router-dom|yup",
      gitHub: "https://github.com/Grupo12-M6/front-end",
    },
    {
      banner: "../../../assets/motorShopAPI.png",
      technologies: "NodeJS, Typescript, PostgreSQL",
      title: "MotorShop API",
      description: "API for vehicles e-commerce application",
      libsAndFrameworks:
        "JWT|uuid|bcrypt|cors|dotenv|typeORM|pg|reflect-metadata|express-async-errors|class-transformer|nodemon|Swagger IU",
      gitHub: "https://github.com/Grupo12-M6/back-end",
    },
    {
      banner: "../../../assets/deviews.png",
      technologies: "Python, Django",
      title: "Deviews",
      description: "Social media for developers",
      libsAndFrameworks:
        "django rest framework|drf-spectacular|gunicorn|ipdb|jsonschema|PyJWT",
      gitHub: "https://github.com/agnes-lica/Deviews-Python",
    },
    {
      banner: "../../../assets/linkeDev.png",
      technologies: "HTML, Typescript, React",
      title: "LinkeDev",
      description: "Social media for recruiters and developers",
      libsAndFrameworks:
        "Styled components|React router dom|React icons|React forms|Yup|React toastify|Axios|React Framer Motion",
      gitHub: "https://github.com/projeto-frontend/linkedev",
    },
    {
      banner: "../../../assets/Portfolio.png",
      technologies: "HTML, Typescript, Angular",
      title: "Portifolio",
      description: "My portifolio",
      libsAndFrameworks: "Google Fonts ",
      gitHub: "https://github.com/agnes-lica/portifolio2.0",
    },
    {
      technologies: "Python, PostgreSQL, Django",
      title: "BandKamp",
      description: "Backend of music plataform.",
      libsAndFrameworks:
        "jango rest framework|simple jwt|drf-spectacular|gunicorn|ipdb|jsonschema|",
      gitHub: "https://github.com/agnes-lica/Bandkamp-Python",
    },
    {
      technologies: "Python, Django, PostgreSQL",
      title: "Buster",
      description: "Backend of movie plataform.",
      libsAndFrameworks:
        "django rest framework|simple jwt|drf-spectacular|gunicorn|ipdb|jsonschema|",
      gitHub: "https://github.com/agnes-lica/Buster-Python",
    },
    {
      technologies: "Python, SqLite3",
      title: "PetKare",
      description: "API and python studies.",
      libsAndFrameworks: "django rest framework",
      gitHub: "https://github.com/agnes-lica/petKare-Python",
    },
    {
      technologies: "Typescript, NodeJS, PostgreSQL",
      title: "PetVida",
      description:
        "MAPI made to facilitate the pet care for owners and vet clinics.",
      libsAndFrameworks:
        "Docker|bcrypt|express|jest|jsonwebtoken|parseurl|class-transformer|express-async-errors|pg|reflect-metadata|typeorm|uuidv4",
      gitHub: "https://github.com/agnes-lica/petVida-Typescript",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
