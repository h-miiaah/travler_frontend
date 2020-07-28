class Location {
  constructor(location, locationAttributes) {
    this.id = location.id;
    this.name = locationAttributes.name;
    this.description = locationAttributes.description;
    this.image_url = locationAttributes.image_url;
    this.destination = locationAttributes.destination;
    Location.all.push(this);
  }

  renderLocationCard() {
    return `
              <div data-id="${this.id}" class="card">
                  <h2>${this.name}</h2>
                  <em><h5>${this.destination.name}</h5></em>
                  <p>${this.description}</p>
                  <img src="${this.image_url}" height="400" width="500">
                  <br>
              </div>
              <br>
              <br>
            `;
  }
}

Location.all = [];

// edit button option for renderLocationCard -> <button data-id="${this.id}">Edit</button>
