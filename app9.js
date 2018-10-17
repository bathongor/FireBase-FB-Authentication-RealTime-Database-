

    //Initialize FireBase
     const config = {
		 apiKey: "AIzaSyByiVZCx2lMwJerAGR6TkgLXhozKvEwrO8",
	    authDomain: "silent-relic-219002.firebaseapp.com",
    	databaseURL: "https://silent-relic-219002.firebaseio.com",
    	projectId: "silent-relic-219002",
   		storageBucket: "silent-relic-219002.appspot.com",
    	messagingSenderId: "515739637546"
  		};
          firebase.initializeApp(config);

     //Initialize Facebook SDK
		window.fbAsyncInit = function() {
            FB.init({
              appId            : '517342465397969',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v3.1'
            });
              };
            
        (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'facebook-jssdk'));
    
    //Create Database
   // var increaseNum = document.getElementById('ClickMe').innerHTML;
    //console.log(increaseNum);

     //Create references
     var dbRefClickMe = firebase.database().ref().child('ClickMe');
     
      //Sync ClickMe changes  
    dbRefClickMe.on('value', snap => {
        console.log(snap.val());
        increaseNum = snap.val();
        document.getElementById('ClickMe').innerHTML = snap.val();
        });

    //Add Incremental Increase btn function
    document.getElementById('eventClick').onclick= function(){	
        increaseNum++;
        dbRefClickMe.set(increaseNum); 
		}
    
   
   




