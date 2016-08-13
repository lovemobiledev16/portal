import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'footer',
  templateUrl: './app/Common/Footer/footer.common.html',
  styleUrls: ['']
})
export class CommonFooter {
  constructor(private router:Router) {}
}
