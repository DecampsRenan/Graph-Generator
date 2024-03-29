$(function(){ // on dom ready

	var graph = null;

	function updateGraph(graph) {
		var cy = cytoscape({
			container: document.getElementById('cy'),

			style: cytoscape.stylesheet()
			.selector('node')
			.css({
				'content': 'data(id)'
			})
			.selector('edge')
			.css({
				'target-arrow-shape': '', //forme du trait triangle pour avoir une fleche
				'width': 4,
				'line-color': '#ddd',
				'target-arrow-color': '#ddd',
				'content': 'data(weight)'
			})
			.selector('.highlighted')
			.css({
				'background-color': '#61bffc',
				'line-color': '#61bffc',
				'target-arrow-color': '#61bffc',
				'transition-property': 'background-color, line-color, target-arrow-color',
				'transition-duration': '0.5s'
			}),

			elements: graph,

			layout: {
				name: 'circle',

				fit: true, // whether to fit to viewport
				padding: 30, // fit padding
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				animate: true, // whether to transition the node positions
				animationDuration: 250, // duration of animation in ms if enabled
			}
		});
		
	}

	$("button").nextAll('button').prop('disabled', 'true');

	// Récupération du graphe généré par le service 1
	$( "#generation" ).click(function(event) {
		event.preventDefault();
		var nbSommet = $("#nbSommet").val(),
			densite  = $("#densite").val();

		$.ajax({
			url: 'http://127.0.0.1:8081/create/' + nbSommet + '/' + densite,
			dataType: 'json',
			crossDomain: true,
			success : function(obj, statut){
				console.log("Reçu :", obj);
				graph = obj;
				updateGraph(obj);
				$("button").removeProp('disabled');
			},
			error : function(req, statut, err) {
				console.warn(err);
			}
		});

		return false;
	});



	// Envoi et récupération du chemin le plus court
	// géré par le service 2

	// Envoies du graphe et récupérations des graphes couvrant minimals
	var socket = io.connect('http://127.0.0.1:8083');

	$("#kruskal").click(function(event){
		event.preventDefault();
		socket.emit('graphe', graph);
		console.log("test");
		return false;
	});

	$( '#djikstra' ).click(function(event) {
		event.preventDefault();

		$.ajax({
			url: 'http://127.0.0.1:8082/get',
			data: {'graphe': graph},
			method: 'POST',
			dataType: 'json',
			crossDomain: true,
			success: function(obj, statut) {
				console.log('Reçu du service 2 : ', obj);
				$("#sssp tbody").remove();
				$("#sssp").append("<tbody>");
				for (var i = 0; i < obj.sommets.length; i++) {
					$("#sssp").append("<tr><td>" +
						obj.source + "</td><td>" +
						obj.sommets[i] + "</td><td>" +
						obj.distance[i] +
						"</td></tr>");
				}
				$("#sssp").append("</tbody>");
			},
			error: function(req, statut, err) {
				console.warn(err);
			}
		});
		return false;
	});

});