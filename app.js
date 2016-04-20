'use strict';

function onLinkedInLoad() {
    IN.Event.on(IN, 'auth', onLinkedInAuth);
}

function onLinkedInAuth() {

    IN.API.Profile('me').fields('first-name', 'last-name', 'email-address', 'num-connections', 'summary', 'positions', 'industry', 'location', 'headline', 'public-profile-url', 'picture-url').result(function (data) {
        console.log(data.values[0]);
        updatePage(data.values[0]);
    }).error(function (data) {
        console.log(data);
    });
}

function updatePage(userData){
    $('#profile-data').fadeIn();
    $('#greetings').fadeOut();
    $('#profile-pic').attr('src',userData.pictureUrl);
    $('#name').html(userData.firstName + ' ' + userData.lastName);
    $('#headline').html(userData.headline);
    $('#location').html(userData.location.name);
    $('#num-connections').html(userData.numConnections);
    $('#summary').html(userData.summary);
    $('#email-address').html(userData.emailAddress);
    for(var i in userData.positions.values){
        $('#positions').html($('#positions').html() +userData.positions.values[i].company.name+', ');
    }
    $('#industry').html(userData.industry);
    $('#profile-url').html('<a href="'+userData.publicProfileUrl+'">'+userData.publicProfileUrl+'</a>');
    
    
}






