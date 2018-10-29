(function neuralNet(input){
	var samples=[];
	for(var i=0;i<input.batches;i++){
		samples.push([]);
		for(var j=0;j<input.samples;j++){
			var out=Math.random();
			var inp=[Math.round(out)];
			for(var k=0;k<input.layers[0]-1;k++){
				inp.push(Math.round(Math.random()));
            }
			samples[i].push({in:inp,out:Math.round(out)});
        }
    }
	var layers=[];
	var connections=[[]];
	for(var i=0;i<input.layers.length;i++){
		layers.push([]);
		for(var j=0;j<input.layers[i];j++){
			layers[i].push({a:0,b:Math.random()*2-1});
        }
    }
	samples.forEach(batch=>{
		batch.forEach(sample=>{
            for(var i=0;i<layers.length;i++){
                for(var k=0;k<layers[i].length;k++){
                    if(i==0){
                        layers[i][k].a=sample.in[k];
                    }
                }
            }
        });
    });
    function sigmoid(t) {
        return 1/(1+Math.pow(Math.E, -t));
    }
	console.log("Samples: ",samples,"\n",
				"Layers: ",layers,"\n",
				"Connections: ",connections,"\n");
})({batches:10,samples:10,layers:[3,3,3,1]});
