# Service 1 - Générateur de graphe

Permet de générer un graphe aléatoire.
Un graphe est généralement décrit à l'aide d'une liste d'arêtes.
Un algorithme peu ensuite lire la liste des arêtes et créer le graphe dans ses structures de données internes.

Les graphes générés ne sont pas des graphes dirigés (undirect graph).

Les demandes:
- Lorsque l'usager utilise le service de générateur de graphe, il doit entrer le **nombre de sommets**
  du graphe et la **densité** de ce graphe. La densité est un nombre entier entre **0** et **100**. Une densité
  de 50 signifie tout simplement qu'il y a une chance de 50% qu'il y ait une arête entre le sommet A et B.
- Le générateur de graphe doit s'assurer que le graphe est connecté et qu'il n'y ait qu'une seule arête
  par paire de sommets.
- Un graphe connecté signifie que tous les sommets ont au moins un chemin vers les autres sommets.

## Exemple de format de description de graphe simple

Voici un exemple de format de description de graphe simple. La première ligne contient
deux valeurs entières : **le nombre de sommets (*n*)** et **le nombre d'arêtes (*m*)**. Les
*m* lignes suivantes décrivent les arêtes de la façon suivante:

`sommet1 sommet2 poids`

Exemple

```
6 9
0 4 3
0 1 1
0 3 10
...
3 5 1
3 4 4
```


## Format adopté

Le format adopté pour les échanges entre les services et le portail est le format [JSON](http://www.w3schools.com/json/json_syntax.asp "Syntaxe JSON").

Exemple

```json
{
	"nbSommets" : 6,
	"nbAretes"  : 9,
	"aretes" : {
		"0" : [
			{
				"nom"   : 4,
				"poids" : 3
			},
			{
				"nom"   : 1,
				"poids" : 1
			},
			{
				"nom"   : 3,
				"poids" : 10
			}
		]
	}
}
```