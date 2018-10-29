(function neuralNet(input){
	var samples=[];
	for(var i=0;i<input.batches;i++){
		samples.push([]);
		for(var j=0;j<input.samples;j++){
			var out=Math.random();
			samples[i].push({in:[Math.round(out),Math.round(Math.random()),Math.round(Math.random())],out:Math.round(out)});
        }
    }
    function sigmoid(t) {
        return 1/(1+Math.pow(Math.E, -t));
    }
	console.log("Samples: ",samples,"\n");
})({batches:10,samples:10});
