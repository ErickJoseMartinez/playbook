//Twitter
    //user const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}
    //trending_topic
    //hashtag
//Facebook
    //user
    //post
    //biography
//Uber
    //profile
    //travel

    //Twitter
const twitter_user = {
    name: "Erick Jose",
    first_name: "Martinez",
    last_name:  "Lopez",
    username: "@erickmalo02",
    location: "cdmx",
    site: "https://github.com/ErickJoseMartinez",
    age: "28",
    biography: "Este usuario buscar convertirse en un gran programador",
    creation_date: "2016-01-01"
}

const twitter_trending = {
    author: "Erick Jose Martinez Lopez",
    username: "@erickmalo02",
    photo: "https://github.com/ErickJoseMartinez/img/profile.png",
    title: "Este twitt solo es para motivarme día con día",
    likes: 1000,
    retwitt: 10,
    loves: 1001,
        comment:{
            id: 10001,
            author_comment: "Erick Jose Martinez Lopez",
            username_comment: "@erickmalo02",
            photo_comment: "https://github.com/ErickJoseMartinez/img/profile.png",
            answer: "Motivate mi chavo",
            likes: 1,
            retwitt: 1,
            loves: 1
        }
}
//Facebook
const facebook_user = {
    name: "Erick Jose",
    first_name: "Martinez",
    last_name:  "Lopez",
    username: "@erickmalo02",
    password: "aksgd123",
    date_birth: "1993-07-02",
    gender: "male",
    email:"erickmalo02@gmail.com",
    number: "5535258306"
}

const facebook_biography = {
    username: "@erickmalo02",
    name: "Erick Jose",
    studies:{
        school: "UPIICSA"
    },
    live: "cdmx",
    civil_status: "SOLTERO",
    number: "5535258306",
    hobby:{
        name: "Music"
    }
}

const facebook_post = {
    name: "Erick Jose",
    group: 1,
    message: "Este post es para publicar acerca de tips en la programación",
    post:{
        foto_video:{
            status: false,
            data: "https://imagen/1.png"
        },
        feels:{
            status: true,
            data: 1
        },
        questions_answers:{
            status: false,
            data: null
        },
        gif:{
            status: false,
            data: null
        },
        person:{
            status: false,
            data: null
        },
        here:{
            status: true,
            data: "CDMX, México"
        },
        important:{
            status: false,
            data: null
        },
        video_live:{
            status: false,
            data: null
        }
    }
}

// UBER
const uber_user = {
    name: "Erick Jose",
    first_name: "Martinez",
    last_name:  "Lopez",
    username: "@erickmalo02",
    password: "aksgd123",
    date_birth: "1993-07-02",
    gender: "male",
    email:"erickmalo02@gmail.com",
    number: "5535258306"
}
const uber_travel = {
    date: "2022-04-18",
    car_id: "PBR-21-31",
    mount: "199.99",
    currency: "MXN",
    direction_initial: "NORTE 70 A ...",
    direction_final: "Cerrada 27",
    stars: 5,
    map:{
        data: "https:google.maps/1"
    }
}

console.log(uber_travel.map.data)