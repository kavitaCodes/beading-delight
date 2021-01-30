import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
   @ViewChild("map",{ static: false }) mapElement: any;
  
    map: google.maps.Map;
     locations = [
        {lat:38.598864, lng: -90.564538 },
        {lat:38.602629, lng: -90.434214}
      ];

      contentStrings = ['Hobby Lobby','Michaels'];
 //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.loadMap();
  }



  loadMap() {

   const St_Louis = { lat: 38.565865, lng: -90.546682};
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: St_Louis,
  });


   let markers = this.locations.map((location) => {
    return new google.maps.Marker({
      position: location,
      map:map

    });
  });

  // let infowindow = this.contentStrings.map(contentString => {
  //   return new google.maps.InfoWindow({
  //     content: contentString,
  //   });
  // });

 }

}
