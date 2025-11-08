mapboxgl.accessToken = 'pk.eyJ1IjoiYXNwZXJpdGFzIiwiYSI6ImNtaDljZWt4djExbnUya3BxNmFsZmgxODEifQ.WIRMWbspDy6r0DpcnxBfJg';

const assessment3Map = new mapboxgl.Map({
  container: 'map-assessment3', // container ID
  style: 'mapbox://styles/asperitas/cmhpi98ce006901sr1qn4c7f9',
  center: [-122.360, 37.815], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 11 // starting zoom
});


assessment3Map.on('load', function () {
  assessment3Map.addSource('points-data', {
    type: 'geojson',
    data: 'data/housingdevelopmentdata.geojson'
  });

  assessment3Map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
            'circle-color': '#c989a8',
            'circle-radius': 3.5,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#ffffff',
            'circle-emissive-strength': 1,
            'circle-opacity': 0.7,
            'circle-stroke-opacity': 0.8
    }
  });

  assessment3Map.on('click', 'points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;

    const popupContent = `
            <div>
                <h3>${properties.original_STREET_ADDRESS}</h3>
                <p><strong>City:</strong> ${properties.city}</p>
                <p><strong>Units:</strong> ${properties.original_HOUSING_UNITS}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(assessment3Map);
  });


 // Change cursor to pointer when hovering over points
    assessment3Map.on('mouseenter', 'points-layer', () => {
        assessment3Map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    assessment3Map.on('mouseleave', 'points-layer', () => {
        assessment3Map.getCanvas().style.cursor = '';
    });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}