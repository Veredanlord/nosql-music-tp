

module.exports = {
  dir : "/home/remy/cours/i4/nosql/nosql-music-tp/music-app/src/assets/img/", //dossier où stoker les images
  mongo : { //les informations de mongodb
    host : '172.17.0.2',
    port : '27017',
    db : 'nosql_tp'
  },
  mysql : { //les informations de mysql
    host : '172.17.0.3',
    port : '3306',
    user : 'root',
    passwd : 'root',
    db : 'music_main'
  }

}
