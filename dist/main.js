const storeManager = new StorageManager()
const renderer = new Renderer()
// const constants = new Constants()

$(document).ready(function () {
    $('.sidenav').sidenav()
    $('.materialboxed').materialbox()
})

// const initMap = async (locations) => {
//     $.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAFcXE6cDommhdcYCNWC5fF7FJ-L-SmdaI`, renderer.renderMap(locations))
// }

const handleLocationSearch = async function (city, spaceRequested = "") {
    await storeManager.getData(city, spaceRequested)
    renderer.renderLocations(storeManager.getLocations())  
    renderer.renderMap(storeManager.sendGeoLocations())
}

$('#search-city-button').click(() => handleLocationSearch($("#search-input").val()))

$("#search-input").keypress((event) => {
    if(event.which == 13) {
        handleLocationSearch($("#search-input").val())
    }
})


// $()

// $('#submit-btn').onclick, () => {
//     let firstName = $(this).closest('form').find('#first_name').val()
//     let lastName = $(this).closest('form').find('#last_name').val()
//     let street = $(this).closest('form').find('#street').val()
//     let city = $(this).closest('form').find('#city').val()
//     let country = $(this).closest('form').find('#country').val()
//     storeManager.somefunction(firstName, lastName, street, city, country)
// };

