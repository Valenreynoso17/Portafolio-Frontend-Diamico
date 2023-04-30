import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/model/Persona';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() persona: Persona;

  linkGithub: String = "";
  linkLinkedIn: String = "";
  linkInstagram: String = "";

  navBarTitle: String = "Argentina Programa - Portafolio";

  constructor(public dialog: MatDialog, public authService: AuthorizationService) {}

  ngOnInit(): void {
    this.linkGithub = this.persona.linkGithub;
    this.linkLinkedIn = this.persona.linkLinkedIn;
    this.linkInstagram = this.persona.linkInstagram;
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: false
    });
  }

  logout() {
    this.authService.logout();
  }

}
