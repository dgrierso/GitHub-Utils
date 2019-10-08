var GitHub = require('github-api');

var gh = new GitHub({
   token: '<insert-api-token-here>'
});

const me = gh.getUser('<insert-username-here>');
me.listStarredRepos()
   .then(function({data: reposJson}) {
     console.log(`${reposJson.length} repos!`);
   });
