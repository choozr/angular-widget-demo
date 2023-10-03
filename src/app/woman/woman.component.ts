import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
declare var Choozr: any;

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements AfterViewInit, OnDestroy {

  @ViewChild('choozr', { static: false }) choozr!: ElementRef;



  product = {
    name: 'Cool T-Shirt',
    description: 'A comfortable and stylish T-shirt for everyday wear.',
    price: 19.99,
    images: [
      'assets/1.jpg',
      'assets/2.jpg',
      'assets/3.jpg' // Replace these paths with your image paths or placeholder URLs.
    ]
  };

  ngAfterViewInit(): void {
    try {
      console.log(this.choozr.nativeElement);
      (window as any).choozr = new Choozr({
        storeId: "demostore",
        product: {
          sku: "stormbreaker-1337"
        },
        target: '#choozr',
        // target: 'this.choozr.nativeElement',
        fontColor: "#222222", // font color of the link text
        fontSize: "12px", // font size of the link text
        brandName: "Brand Name", // brand name to be displayed
        primaryColor: "#FFFFFF", // primary color of the recommendation box
        languageCode: "en", // language code for the recommendation
        type: "size-recommendation",
        onRecommendation: (recommendation: any) => {
          const element = document.querySelector("select#size");
          if (element !== null) {
            (element as HTMLSelectElement).value = recommendation.main;
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize Choozr', error);
    }
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    (window as any).choozr.remove();
  }

  selectedImage = this.product.images[0];

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart() {
    alert('Product added to cart!');
  }
}
