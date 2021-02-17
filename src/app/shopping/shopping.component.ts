import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  @ViewChild("map",{ static: false }) mapElement: any;
//  access to the map element in DOM

  map: google.maps.Map;
  // instance of google maps API

  markers = [
    {
      title: 'Michaels',
      lat: '38.566170',
      lng: ' -90.498438',
      description: '15911 Manchester Rd, Ellisville, MO 63011',
    },
    {
      title: 'Hobby Lobby',
      lat: '38.56865',
      lng: ' -90.40831',
      description: '1215 S Kirkwood Rd, Kirkwood, MO 63122',
    },
    {
      title: 'Michaels',
      lat: '38.60342',
      lng: '-90.43471',
      description: '11945 Manchester Rd, Des Peres, MO 63131',
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
     this.loadMap();
  }

  // ngAfterViewInit() {
  //   this.loadMap();
  // }

  loadMap() {
    let mapOptions = {
      center: new google.maps.LatLng(
        +this.markers[0].lat,
        +this.markers[0].lng
      ),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Create and open InfoWindow.
    let infoWindow = new google.maps.InfoWindow();
    let data: {
      title: string;
      lat: string;
      lng: string;
      description: string;
    };
    //console.log(this.markers.length);

    for (let i = 0; i < this.markers.length; i++) {
      let data = this.markers[i];

      let myLatlng = new google.maps.LatLng(+data.lat, +data.lng);
      let marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: data.title,
      });

      (function (marker, data) {
        google.maps.event.addListener(marker, 'click', function (e) {
          //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
          infoWindow.setContent(
            "<div style = 'width:200px;min-height:40px'>" +
              data.description +
              '</div>'
          );
          infoWindow.open(map, marker);
        });
      })(marker, data);
    }
  }
}
