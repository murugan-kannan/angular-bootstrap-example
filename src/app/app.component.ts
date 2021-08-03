import { AfterViewInit, Component, VERSION } from '@angular/core';
import { Toast } from 'bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    Array.from(document.querySelectorAll('.toast')).forEach(
      toastNode => new Toast(toastNode)
    );
  }

  showToast() {
    var myToastEl = document.getElementById('myToastEl');
    var myToast = Toast.getInstance(myToastEl);
    myToast.show();
  }
}
