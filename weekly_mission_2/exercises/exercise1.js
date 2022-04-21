const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
  title:  "Revision de Errores",
  repositoryNameAssociated: "Ejercicio 1 de Node",
  status: "Activo",
  numberOfComments: 3140,
  labels: "Arial",
  author: "Erick Martinez",
  dateCreated: "2022-04-20",
  dateCreated: "2022-04-21",
  getTitleAndAuthor: function(){
    return `El titulo: ${this.title} y fue escritor por: ${this.author}`
  },
  getGeneralInfo: function(){
    return `El estatus es: ${this.status}`
  }
}
const pullRequest = {
  title:  "Request 001",
  branchName: "",
  dateCreated: "",
  status: "",
  repositoryNameAssociated: "",
  getStatus: function(){
    return `El estatus es: ${this.status}`
  },
  getTitleAndAuthor: function(){
    return `El titulo: ${this.title} creador por: ${this.author}`
  }
}