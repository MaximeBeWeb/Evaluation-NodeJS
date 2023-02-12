

//on declare la constante pour l'export du module fs
const fs = require('fs');


//on definit la methode Get pour recuperer un tableau dans le fichier menu.json
exports.getData = (request, response) => {
    //on utilise la methode readFile du module fs pour lire le fichier bar.json
    fs.readFile("./src/model/bar.json", (err, data) => {
        if (err) {
            //si erreur de lecture, on renvoit le statut 500 et un message d'alerte
            response.status(500).json({
                message: "il y a une erreur de lecture",
                error: err
            })
        } else {
            //sinon, on renvoit le statut 200 et le tableau
            response.status(200).json(JSON.parse(data).vins)
        }
    }
    );
};


//on definit la methode GET BY ID pour recuperer une data par son ID
exports.getDataById = (request, response) => {
    //on lit le fichier json avec readFile du module fs
    fs.readFile("./src/model/bar.json", (err, data) => {
        //s'il y a une erreur de lecture, on renvoit le statut 500 avec un message
        if (err) {
            response.status(500).json({
                message: "Il y a eu une erreur lors de la lecture du fichier bar.json",
            });
        } else {
            //sinon on met dans une constante la data transformée en json manipulable 
            const manipData = JSON.parse(data)
            //et on recherche dans le fichier si l'Id demandée est présente dans le fichier
            const dataById = manipData.vins.find(
                (obj) => obj.id === parseInt(request.params.id)
            );
            //si on retrouve l'id
            if (dataById) {
                //on renvoie la reponse avec statut 200 et la data
                response.status(200).json(dataById)
            } else {
                //sinon on renvoie un message disant qu'on ne l'a pas trouvé et le statut 404
                response.status(404).json({
                    message: "je n'ai pas trouvé d'objet avec cet id",
                    error: err
                });
            }
        }
    });
}

//On définit la methode GET BY NAME pour recuperer une data par son nom
exports.getDataByName = (request, response) => {
    //on utilise la methode readFile pour lire le fichier
    fs.readFile("./src/model/bar.json", (err, data) => {
        //si erreur on renvoie le statut 500 et un message d'erreur
        if (err) {
            response.status(500).json({
                message: "Il y a eu un probleme de lecture du fichier"
            })
        } else {
            //sinon on transforme les infos du fichier en json manipulable
            const manipData = JSON.parse(data)
            //et on recherche dans le fichier si le nom de la data est présent 
            const dataByName = manipData.vins.find(
                (obj) => obj.name === request.params.name
            );
            //si on trouve ce nom on renvoie la data avec le status 200
            if (dataByName) {
                response.status(200).json(dataByName)
            } else {
                //sinon on renvoie le statut 404 avec un message d'erreur
                response.status(404).json({
                    message: "la data n'a pas pu être trouvée",
                    error: error
                });
            }
        }
    });
}

//On definit la methode POST pour ajouter une data avec son ID
exports.post = (request, response) => {
    //on lit la data
    fs.readFile("./src/model/bar.json", (err, data) => {
        //on renvoie un message d'erreur si on arrive pas à lire
        if (err) {
            response.status(500).json({
                message: "erreur lecture impossible",
                error: err
            })
        } else {
            //on stocke la donnée en Json manipulable
            const existingData = JSON.parse(data)
            //on ajoute la donnée
            existingData.vins.push(request.body)
            //réécrit le fichier stringify
            //on écrit la donnée sur le fichier et on écrase l'ancien
            fs.writeFile("./src/model/bar.json", JSON.stringify(existingData), (writeErr) => {
                //si on arrive pas
                if (writeErr) {
                    //erreur statut 500
                    response.status(500).json({
                        message: "Erreur lors de l'ecriture",
                        error: err
                    });
                    //sinon
                } else {
                    response.status(200).json({
                        message: "la data a été rajouté avec succès."
                    });
                }
            });
        }
    });

}

//On définit la methode UPDATE qui permet de mettre à jour une data sur base de son ID
exports.modif =  (request, response) => {
    //lecture du fichier
    fs.readFile("./src/model/bar.json", (err, data) => {
        if (err) {
            response.status(500).json({
                message: "il y a une erreur de lecture",
                error: err,
            })
  //Sinon
        } else {
            //stocker les données existantes
            const existing_data = JSON.parse(data);
            //rechercher via l'id si parametre existant
            const data_id = existing_data.vins.find(
                (obj) => obj.id === parseInt(request.params.id)
            );
            //condition si on trouve pas l'objet par l'id
            if (!data_id) {
                //statut 404 si on ne le trouve pas 
                response.status(404).json({
                    //message d'erreur de recherche
                    message: "Aucun objet avec cet id!",
                    error: err,
                });
                //sinon on trouve l'objet donc
            } else {
                //la nouvelle donnée sera la requete executée dans le body thunder
                data_id.name = request.body.name;
                fs.writeFile("./src/model/bar.json", JSON.stringify(existing_data), (writeErr) => {
                        if (writeErr){
                            response.status(500).json({
                                message: "Une erreur est survenue lors de la réécriture des données",
                            })
                        } else{
                            response.status(200).json({
                                message: "les données ont été mises à jour avec succès"
                            });
                        }
                    });
            }
        }
    });
  };

  
//On définit la methode pour supprimer une data par son ID
exports.deleteDataById = (request, response) => {
    // On vas lire le fichier
    fs.readFile("./src/model/bar.json" , (err, data) => {
        // si une erreur sur la lecture du fichier
        if (err) {
          response.status(500).json({
            message: "Une erreur est survenue lors de la lecture des données",
          });
        } else {
          // stocker les données existante
          const existingData = JSON.parse(data);
          // Je vais cherchez dans ce fichier si l'id correspondants en paramètres existe dans le contenue
          const dataById = existingData.vins.find(
            (obj) => obj.id === parseInt(request.params.id)
          );
          // Si on ne trouve pas un objet avec cet id
          if (!dataById) {
            // On renvoie une réponse avec un status 404 avec un message d'erreur
            response.status(404).json({
              message: "Aucun objet trouvé avec cet id",
            });
          } else {
            //sinon
            //on recupere l'objet avec l'id définit et on réécrit la variable sans cet objet (d'où le filter)
            existingData.vins = existingData.vins.filter(
                (obj) => obj.id != parseInt(request.params.id));
            fs.writeFile("./src/model/bar.json", JSON.stringify(existingData), (writeErr) => {
                // si il ya une erreur au moment de l'écriture
                if (writeErr) {
                  response.status(500).json({
                    message:
                      "Une erreur est survenue lors de l'écriture des données",
                  });
                } else {
                  response.status(200).json({
                    message: "Les données ont été mise à jour avec succès",
                  });
                }
              }
            );
          }
        }
      }
    );
  }


  