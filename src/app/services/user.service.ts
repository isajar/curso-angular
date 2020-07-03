import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    const headers = new HttpHeaders({
      Authorization: "Bearer CZLtrI9ROpbGLqvOX9v4mn7FyM5mqQZbgqy3",
    });
    return this.http.get("https://gorest.co.in/public-api/users", { headers });
  }
}
