import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(){
  this.callJs();
};
  async callJs(): Promise<void> {
    await Promise.all([
      this.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"),
      this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"),
      this.loadScript("assets/js/plugins.js"),
      this.loadScript("assets/js/theme.js")
    ])
  }

private loadScript(scriptUrl: string) {
  return new Promise((resolve, reject) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = scriptUrl;
  scriptElement.onload = resolve;
  document.body.appendChild(scriptElement);
 })
}
}
