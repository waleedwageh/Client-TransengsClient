import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { PropertyPostContainer } from 'src/app/host/host/Models/PropertyPostContainer';
import { PropertyInsertService } from '../../property-insert.service';
import { PropertyPost } from '../../Models/PropertyPost';
import { PropertyImagePost } from '../../Models/PropertyImagePost';
import { IStatePost } from 'src/app/shared/Models/IState';
import { LocationService } from 'src/app/shared/services/location.service';
import { ImagePost } from '../../Models/Images';
import { AmenityPost } from '../../Models/Amenity';

@Component({
  selector: 'app-host-insert',
  templateUrl: './host-insert.component.html',
  styleUrls: ['./host-insert.component.scss']
})
export class HostInsertComponent implements OnInit {

  property: PropertyPostContainer;
  // propertydto:IProperty;
  check: any = [];
  lng: any;
  lat: any;
  selectedFile: File[] = [];

  @ViewChild("file") imageFiles: ElementRef;




  onFileSelected(event) {


    this.selectedFile = event;
    
    for (const file of this.selectedFile) {
      var image = new ImagePost();
      image.image = file.name;
      this.property.propertyImages.push(image);
      console.log(this.property.propertyImages);
    }

  }
  // AmenityPost(event) {
  //   let ar = [];
  //   ar.push(event.target.value);
  //   console.log(ar);
  // }

  AmenityPost(selectElement) {
    let ar = [];

    for (var i = 0; i < selectElement.options.length; i++) {
      var optionElement = selectElement.options[i];
      var amenity = new AmenityPost();
      amenity.id = selectElement.options[i].ngvalue;
      if (optionElement.selected == true) {
        if (!this.property.amenities.find(x => x.id == selectElement.options[i].ngvalue))

          this.property.amenities.push(amenity)
      }




    }
    console.log(this.property.amenities);

  }

  onUpload() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.set('Authorization', `Bearer ${token}`);

    const fd = new FormData();

    for (const file of this.selectedFile) {
      // formData.append(file.name, file);
      console.log(this.selectedFile);

      fd.append(file.name, file);
      // var image = new ImagePost();
      // image.image = file.name;
      // this.property.propertyImages.push(image);
      // console.log(this.property.propertyImages);

    }
    // console.log(this.selectedFile.name);
    // this.property.propertyImages['name']=this.selectedFile.name
    const uploadReq = new HttpRequest('POST', 'https://localhost:44351/api/UploadImg' , fd, {
      headers
    });


    this.http.request(uploadReq).subscribe(event => { });


   

  }











  // public uploadFile = (files) => {
  //   if (files.length === 0) {
  //     alert("out")

  //     return;
  //   }

  //   let headers = new HttpHeaders();
  //   let token = localStorage.getItem('token');

  //   headers = headers.set('Authorization', `Bearer ${token}`)

  //   alert("in")
  //   let filesToUpload: File[] = files;
  //   const formData = new FormData();

  //   Array.from(filesToUpload).map((file, index) => {
  //     return formData.append('file' + index, file, file.name);

  //   });
  //   this.http.post('https://localhost:44351/api/UploadImg', formData, { reportProgress: true, observe: 'events', headers })
  //     .subscribe(event => {


  //       // if (event.type === HttpEventType.UploadProgress)
  //       // this.progress = Math.round(100 * event.loaded / event.total);
  //       // else if (event.type === HttpEventType.Response) {
  //       //   // this.message = 'Upload success.';
  //       //   // this.onUploadFinished.emit(event.body);
  //       // }
  //     });


  // }






  uploadFile(event) {

  }

  // getPosition(): Promise<any>
  // {
  //   return new Promise((resolve, reject) => {

  //     navigator.geolocation.getCurrentPosition(resp => {
  //         this.lng=resp.coords.longitude;
  //         this.lat=resp.coords.latitude;

  //       },
  //       err => {
  //         reject(err);
  //       });
  //   });
  // }









  insert(data: any) {

    this.service.postProperty(this.property).subscribe(result => {
      this.onUpload();
    },
      error => {
        console.log(error)
      }
    )










    //   this.property=data.value;
    //   console.log(this.property);
    //   this.service.postProperty(this.property).subscribe(result => {
    //     console.log("success");
    //     console.log(result);
    //     // this.service.getProperties()
    //   },
    //     error => {
    //       console.log("Failure");
    //       console.log(error)
    //     }
    //   )
    // }

  }



  //   property: Properties=new Properties();

  //   onFileSelected(event: any) {
  //     console.log(event);
  //   }
  //   constructor(public service: PropertiesService) { }
  //   ngOnInit(): void {

  //   }
  //   insert(data: any) {
  //     this.property=data.value;
  //     console.log(this.property);
  //     this.service.postProperty(this.property).subscribe(result => {
  //       console.log("success");
  //       console.log(result);
  //       // this.service.getProperties()
  //     },
  //       error => {
  //         console.log("Failure");
  //         console.log(error)
  //       }
  //     )
  //   }
  // }



  constructor(public service: PropertyInsertService, public http: HttpClient, private location: LocationService) {

    this.property = new PropertyPostContainer();
    this.property.propertydto = new PropertyPost();
    this.property.amenities = [];
    this.property.propertyImages = [];
    this.property.state = new IStatePost();




  }



  ngOnInit(): void {

    this.service.GetAmenity().subscribe(a => {
      console.log(a);

      this.check = a;
      console.log(this.check);

    })

    this.location.getUserLocation().subscribe(data => {

      console.log(data);
      // this.property.propertydto.countryName = data.country_name;
      this.property.state.countryName = data.country_name;
      this.property.state.name = data.city;
    });

    this.location.getMap();



    navigator.geolocation.getCurrentPosition((resp) => {
      this.lng = resp.coords.longitude;
      this.lat = resp.coords.latitude;
      console.log(resp.coords.longitude);
      console.log(this.lat, this.lng);
    })

  }
}
