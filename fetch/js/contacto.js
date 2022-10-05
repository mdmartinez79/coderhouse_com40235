class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/?results=8&nat=es,us,br,gb';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }

    static renderUserData(data){
        // console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class = "card-head">
            <div class = "user-image">
                <img src = "${user.picture.large}" alt = "">
            </div>
            <div class = "card-head">
        <a href = "mailto:${user.email}"><i class = "fas fa-envelope"></i> Email</a>
        </div>
        </div>
        <div class = "card-body">
            <div class = "user-post-address">
            </div>
            <div class = "user-name">
                <span class = "user-name-full">${user.name.first} ${user.name.last}</span>
            </div>
            <div class = "user-location-address">
                <span>${user.location.country}</span>
            </div>
        </div>
        <div class = "card-foot">
            <div class = "user-contact-info">
                <span>
                    <i class = "fa-solid fa-mobile-button"></i> Celular: ${user.cell}
                </span>
            </div>
        </div>
        `;
    }
}


document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});

RandomUser.fetchFromAPI();