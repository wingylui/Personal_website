// reading file and put to different list
d3.json("../Graph/clustering.json").then(function(data){
  console.log(data);
  let c1 = data.Cluster1;
  let c2 = data.Cluster2;
  let c3 = data.Cluster3;
  let c4 = data.Cluster4;
  let c5 = data.Cluster5;
  console.log(c1);

  var cluster1 = {
    x:c1.CBD, y: c1.COAST, z: c1.PRICE,
    name: "Cluster 1",
    mode: 'markers',
    hovertemplate: '<i>CBD Distance</i>: %{x}<br>' +
                        '<i>Coast Distance</i>: %{y:.2f}<br>' +
                        '<i>Price</i>: $%{z}',
    marker: {
      size: 2,
      color: '#1d4c78',
      opacity: 0.8},
    type: 'scatter3d'
  };
  
  var cluster2 = {
    x:c2.CBD, y: c2.COAST, z: c2.PRICE,
    name: "Cluster 2",
    mode: 'markers',
    hovertemplate: '<i>CBD Distance</i>: %{x}<br>' +
                        '<i>Coast Distance</i>: %{y:.2f}<br>' +
                        '<i>Price</i>: $%{z}',
    marker: {
      color: '#a6a5a4',
      size: 2,
      symbol: 'circle',
      opacity: 0.8},
    type: 'scatter3d'};

    var cluster3 = {
      x:c3.CBD, y: c3.COAST, z: c3.PRICE,
      name: "Cluster 3",
      mode: 'markers',
      hovertemplate: '<i>CBD Distance</i>: %{x}<br>' +
                        '<i>Coast Distance</i>: %{y:.2f}<br>' +
                        '<i>Price</i>: $%{z}',
      marker: {
        color: '#e8be27',
        size: 2,
        symbol: 'circle',
        opacity: 0.8},
      type: 'scatter3d'};

      var cluster4 = {
        x:c4.CBD, y: c4.COAST, z: c4.PRICE,
        name: "Cluster 4",
        mode: 'markers',
        hovertemplate: '<i>CBD Distance</i>: %{x}<br>' +
                        '<i>Coast Distance</i>: %{y:.2f}<br>' +
                        '<i>Price</i>: $%{z}',
        marker: {
          color: '#1d782c',
          size: 2,
          symbol: 'circle',
          opacity: 0.8},
        type: 'scatter3d'};

        var cluster5 = {
          x:c5.CBD, y: c5.COAST, z: c5.PRICE,
          name: "Cluster 5",
          mode: 'markers',
          hovertemplate: '<i>CBD Distance</i>: %{x}<br>' +
                        '<i>Coast Distance</i>: %{y:.2f}<br>' +
                        '<i>Price</i>: $%{z}',
          marker: {
            color: "#d63b27",
            size: 2,
            symbol: 'circle',
            opacity: 0.8},
          type: 'scatter3d'};
  
  var data = [cluster1, cluster2, cluster3, cluster4, cluster5];
  var layout = {margin: {l: 0,r: 0,b: 0,t: 0},
                width: 550,
                height: 400,
                paper_bgcolor: 'rgba(0,0,0,0)',
                scene: {xaxis: {title: "Perth CBD Distance (m)"}, yaxis: {title: "Coast Distance (m)"}, zaxis: {title: "Price ($)"}},
                        font: {family: "Arial", color: "#575757"},
                showlegend: false
                
                // plot_bgcolor: 'rgba(255,255,255,0.74)'
              };
  Plotly.newPlot('scatter', data, layout);
  });

  function back(){
    window.history.back(); 
  }

  function forward(){
    window.history.forward();
  }

