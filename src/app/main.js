define(['three','preload','world','scene1','scene2'],function(THREE,Preload,World,Scene1,Scene2) {
	
	    var preload, stats;
	    
	    var world;
	    
	    var scene1, scene2;
	    
	    var debug = true;
	    
	    window.baseUrl = debug ? "src/app/assets/" : "dist/app/assets/";
	    
	    initStats();
	    
	    loadAssets();
	    
	    function onLoadComplete(){
	    	
	    	initWold();
	    	
	    	scene1 = new Scene1(world,preload);
	    	
	    	scene2 = new Scene2(world,preload);
	    	
	    	scene1.init(function(){
	    		scene2.init();
	    	});
	    	
	    	animate();
	    	
	    }
		
		
		
		function loadAssets() {
          
	    	preload = new Preload(false);
	      
	        preload.addEventListener("complete", onLoadComplete);
	      
	        preload.addEventListener("progress", handleProgress);
	      
	        preload.loadFile({src: baseUrl + "img/p5.jpg",id:"logo"});
	      
        }
		
	    function initWold(){
	    	
	    	var oriCamera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,2000);
	    	
	    	oriCamera.name = 'oriCamera';
	    	
	        oriCamera.position.set(0,0,100);
	    	
	    	world = new World();
	    	
		  	world.init(null,oriCamera);
		  	
		  	world.removeAxis();
		  	
	    }
	    
	    function initStats() {
	    	
	    	stats = new Stats();
	    
			stats.showPanel(0);
		
			document.body.appendChild(stats.dom);	
			
	    }
	    
		    
        
		function animate() {
			
		  stats.begin();
		  
          stats.end();
          
		  TWEEN.update();
		  
		  scene1.update();
		  
		  scene2.update();
		  
		  world.render();
		  
		  requestAnimationFrame(animate);
		  
	    }
        
        function handleProgress() {
          var percent = Math.floor(preload.progress * 100);
          console.log(percent + '%');
        }
        
       
});
