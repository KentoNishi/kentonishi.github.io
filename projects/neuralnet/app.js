function neuralNet(input){
	var layers=[];
	for(var i=0;i<input.layers;i++){
		layers.push([]);
		for(var j=0;j<input.layers;j++){
			layers[i].push({w:Math.random(),b:Math.random(),v:0});
        }
    }
	
}({layers:3,neurons:3});
