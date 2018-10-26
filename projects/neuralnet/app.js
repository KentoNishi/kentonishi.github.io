(function neuralNet(input){
	var samples=[];
	for(var i=0;i<100;i++){
		samples.push({in:[]});
		for(var j=0;j<input.neurons;j++){
			samples[i].in.push(Math.round(Math.random()));
        }
		samples[i].out=samples[i].in[0];
    }
	samples.forEach(sample=>{
        var layers=[];
        for(var i=0;i<input.layers;i++){
            layers.push([]);
            for(var j=0;j<input.layers;j++){
                layers[i].push({w:Math.random(),b:Math.random(),v:i==0?sample.in[j]:0});
            }
        }
		console.log(sample);
    });
})({layers:3,neurons:3});
