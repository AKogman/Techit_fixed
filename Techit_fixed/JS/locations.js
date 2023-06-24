function initMap() {
    // Eilat Location
    var eilat = { lat: 29.5581, lng: 34.9482 };
    var eilatMap = new google.maps.Map(document.getElementById('map'), {
        center: eilat,
        zoom: 12
    });
    var eilatMarker = new google.maps.Marker({
        position: eilat,
        map: eilatMap,
        title: 'Eilat'
    });

    // Tel Aviv Location
    var telAviv = { lat: 32.0853, lng: 34.7818 };
    var telAvivMap = new google.maps.Map(document.getElementById('map'), {
        center: telAviv,
        zoom: 12
    });
    var telAvivMarker = new google.maps.Marker({
        position: telAviv,
        map: telAvivMap,
        title: 'Tel Aviv'
    });

    // Haifa Location
    var haifa = { lat: 32.7940, lng: 34.9896 };
    var haifaMap = new google.maps.Map(document.getElementById('map'), {
        center: haifa,
        zoom: 12
    });
    var haifaMarker = new google.maps.Marker({
        position: haifa,
        map: haifaMap,
        title: 'Haifa'
    });
}