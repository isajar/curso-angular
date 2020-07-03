import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { IUser } from "../models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  usuarios: IUser[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((usrs: any) => {
      this.usuarios = usrs.result;
    });
  }
}
