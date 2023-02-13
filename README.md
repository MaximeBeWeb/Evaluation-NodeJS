EVALUATION NODEJS


Voici le code servant à gérer des opérations de CRUD pour la carte des boissons d'un bar .


La carte est classé dans le dossier à l'endroit:
```
src/model/bar.json
```

La carte est composée de 6 tableaux Json, dont les codes sources sont chacun classés dans un fichier distinct, à l'endroit:

```
src/controller/arrayName_ctrl
```

Tous les routers correspondants sont classés dans un dossier, à l'endroit:

```
src/routes/arrayName_route
```


Voici la liste des routes:

| Routes | Verbe | Exemple | Explications |
|:-------| :-------| :-------| ------------|
|/:arrayName | GET |    http:localhost:3000/aperitifs| Cette route permet de récupérer les données du tableau 'aperitifs' présent dans le fichier carte.json
|/:arrayName/:id | GET |    http:localhost:3000/aperitifs/1| Cette route permet de récupérer une donnée dans le tableau 'aperitifs' via son ID
|/:arrayName/find/:name | GET |    http:localhost:3000/aperitifs/find/pastis | Cette route permet de récupérer une donnée du tableau 'aperitifs' via son nom
|/:arrayName | POST |    http:localhost:3000/aperitifs| Cette route permet de créer des données dans le tableau 'aperitifs' en précisant le nom et le prix, l'ID est incrémenté automatiquement par rapport à la donnée précente présente dans le tableau. 
|/:arrayName/:id | PUT |    http:localhost:3000/aperitifs/1| Cette route permet de mettre à jour une donnée du tableau 'aperitifs' en récupérant son ID
|/:arrayName/:id | DELETE |    http:localhost:3000/aperitifs/1| Cette route permet d'écraser et donc de supprimer une donnée du tableau 'aperitifs' via son ID



Voici également la liste des librairies utilisées:

| Librairies | Versions | Utilisation |
|:-------| :-------| ------------|
| Express| 4.18.2| Manipulation des requêtes et des réponses
| fs| 0.0.1-security| Manipulation et lectures des fichiers json
| bodyParser| 1.20.1| Affiche les données dans le body lors des requêtes
| nodemon| 2.0.20| Relance le serveur automatiquement à chaque manipulation

### Installation du projet
* Mettez vous à la racine du projet
* Ouvrez un terminal
* Assurez vous d'avoir node d'installé via la commande 
```bash 
node-v
```
* Installez les dépendances avec la commande  
```bash
npm install
```
*
