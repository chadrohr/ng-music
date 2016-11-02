(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/album.html',
            controller: AlbumController
        })

    AlbumController.$inject = ['$stateParams', 'MusicService']

    function AlbumController($stateParams, MusicService) {
        let id = $stateParams.id;
        this.album = MusicService.getAlbumById(id)
        
        // you will need to utilize the $stateParams and MusicService to get the correct album by its id
        //Be sure to get the desired album on some property that you can use in the view

        //Once you get the basics built out can you modify the MusicService to use the Itunes API???
    }
    window.addEventListener("play", function (evt) {
    if (window.$_currentlyPlaying) {
        window.$_currentlyPlaying.pause();
    }
    window.$_currentlyPlaying = evt.target;
}, true);
} ())
