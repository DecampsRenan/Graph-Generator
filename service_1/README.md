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
6 9
---
0 4 3
-----
0 1 1
-----
0 3 10


## Format adopté

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