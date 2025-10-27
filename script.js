mapboxgl.accessToken = 'pk.eyJ1IjoiYXNwZXJpdGFzIiwiYSI6ImNtaDljZWt4djExbnUya3BxNmFsZmgxODEifQ.WIRMWbspDy6r0DpcnxBfJg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/asperitas/cmh9cj70m009h01raeo7qajmz',
  center: [-122.2730, 37.8715], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 11 // starting zoom
    });