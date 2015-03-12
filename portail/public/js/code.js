$(function(){ // on dom ready

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
                'target-arrow-color': '#ddd'
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
              animationDuration: 500, // duration of animation in ms if enabled
              ready: undefined, // callback on layoutready
              stop: undefined // callback on layoutstop
            }
        });

        var bfs = cy.elements().bfs('#a', function(){}, true);
    }

    $("button").nextAll('button').prop('disabled', 'true');

    // Récupération du graphe généré par le service 1
    $( "#generation" ).click(function(event) {
        event.preventDefault();
        var nbSommet = $("#nbSommet").val(),
            densite  = $("#densite").val();

        $.ajax({
            url: 'http://localhost:8081/create/' + nbSommet + '/' + densite,
            dataType: 'json',
            crossDomain: true,
            success : function(obj, statut){
                console.log("Reçu :", obj);
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
    $( '#djikstra' ).click(function(event) {
        event.preventDefault();



        return false;
    });

}); // on dom ready