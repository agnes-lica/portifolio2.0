import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skill-card",
  templateUrl: "./skill-card.component.html",
  styleUrls: ["./skill-card.component.css"],
})
export class SkillCardComponent implements OnInit {
  skills = [
    {
      title: "Languages",
      list: "TypeScript|Python|JavaScript|HTML|CSS",
    },
    {
      title: "Database",
      list: "SQLite3|PostgreSQL",
    },
    {
      title: "Tools",
      list: "VSCode|Linux|Figma|Trello|Jira|Git|Font Awesome|React Icons|React Toastify|React Hooks|Docker",
    },
    {
      title: "Libs",
      list: "NodeJS|ExpressJS|Yup|Axios|JWT|Decode|Vite",
    },
    {
      title: "Frameworks",
      list: "Django|Django Rest Framework|React|ORM|TypeORM",
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
