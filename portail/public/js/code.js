

$(function(){ // on dom ready


    $( "#generation" ).click(function() {
        var nbSommet = $("#nbSommet").val(),
            densite  = $("#densite").val();

        console.log("Nombre de sommets : " + nbSommet + "\n Densité : " + densite);

        $.ajax({
            url: 'http://localhost:8081/create/45/5',
            dataType: 'json',
            crossDomain: true,
            success : function(code_html, statut){
                console.log(code_html);
            },
            error : function(test, err) {
                console.warn(err);
            }
        });
    });


    // --------------------------------------------------------------

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

        elements: {
            nodes: [
                { data: { id: 'a' } },
                { data: { id: 'b' } },
                { data: { id: 'c' } },
                { data: { id: 'd' } },
                { data: { id: 'e' } },
                { data: { id: 'f' } },
                { data: { id: 'g' } }
            ],

            edges: [
                { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
                { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
                { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
                { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
                { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
                { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
                { data: { id: 'de', weight: 7, source: 'd', target: 'e' } },
                { data: { id: 'ef', weight: 7, source: 'e', target: 'g' } },
                { data: { id: 'fg', weight: 7, source: 'g', target: 'f' } }
            ]
        },

        layout: {
            name: 'breadthfirst',
            directed: true,
            roots: '#a',
            padding: 10
        }
    });

    var bfs = cy.elements().bfs('#a', function(){}, true);

    var i = 0;
    var highlightNextEle = function(){
        bfs.path[i].addClass('highlighted');

        if( i < bfs.path.length ){
            i++;
            setTimeout(highlightNextEle, 1000);
        }
    };

    // kick off first highlight
    highlightNextEle();

}); // on dom ready