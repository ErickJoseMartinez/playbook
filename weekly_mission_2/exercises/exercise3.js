/*
    Ejercicio 3 de Mision NodeJS
    ERICK JOSÉ MARTÍNEZ LÓPEZ
    Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
    Ejercicios exercise1_1.js
    */

class TwitterUser{
    constructor(name, first_name,last_name,username,location,site,age,biography,photo){
        this.name = name,
        this.first_name = first_name,
        this.last_name = last_name,
        this.username = username,
        this.location = location,
        this.site = site,
        this.age = age,
        this.photo = photo,
        this.biography = biography,
        this.comment = {

        }
        this.creation_date = new Date()
    }   
    getName(){
        return `Explorer ${this.name}`
    }
}

class TwitterTrending extends TwitterUser{
    constructor(name, first_name,last_name,username,location,site,age,biography,photo, title, likes, retwitt, love_user, id_user, author_comment, username_comment, photo_comment, answer, comment_likes, comment_retwitt, comment_loves){
        super(name, first_name,last_name,username,location,site,age,biography,photo)
        this.title = title,
        this.likes = likes,
        this.retwitt = retwitt,
        this.loves = love_user,
        this.comment.id = id_user,
        this.comment.author_comment = author_comment,
        this.comment.username_comment = username_comment,
        this.comment.photo_comment = photo_comment,
        this.comment.answer = answer,
        this.comment.likes = comment_likes,
        this.comment.retwitt = comment_retwitt,
        this.comment.loves = comment_loves
    }
    getGeneralInfo(){
        let Names = this.getName()
        return ` Soy ${this.name} y mi comentario es el siguiente: ${this.title} y su primer answer es ${this.comment.answer}`
    }
}

const twittero = new TwitterTrending("Erick","Martinez","Lopez","@erickmalo02","CDMX", "https://", 28, "Soy yo", "https://image.com/1.png", "Mi primer post", 1000,1,1,null,null,null,null,"Primer Respuesta",null,null,null)
console.log("EOverrinding methods")
console.log(twittero)
console.log(twittero.getName()) // Método de la clase padre
console.log(twittero.getGeneralInfo()) // Método de la clase hija