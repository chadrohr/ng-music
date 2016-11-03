angular.module('ng-music')
    .config(function($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

        //You should only need two states
        //One for showing all of the albums
        //and another for each album that renders
        //more details about that one album
        //including an option to play the songs
        //for that paticular album

        //You will need to utilize a route parameter to pass
        //the album id to the album component


        $stateProvider
            

            .state('albums', {
                url: '/albums',
                component: 'albums' //Get the right component here and go look at your page
            })
        
            .state('album',{
                url: '/albums/:id',
                component: 'album'

            })
            $urlRouterProvider.otherwise('/albums')


            //You will notice the more dets button is broken look at your dev tools. Now its time to add that next state
            //The next state needs to be named *** album ***
            //It will need to be setup to accept a route parameter. 
            //This is just like it was in node/express routing 
            //but its not optional so no ? needed

            //Once you get your album state done you will need to fix the AlbumController 

            //^^^ this guy defaults the page to albums if a bad url is given
    })