import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  constructor() { }
  private _showSidebar = false;
public get showSidebar(): boolean{
    return this._showSidebar;
}
public set showSidebar(v : boolean) {
    this._showSidebar = v;
}

}
