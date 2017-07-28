import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntityLineComponent } from "angularm";

@Component({
    selector: 'div [mgEntityLine]',
    template:
        `<p *ngFor="let property of entity.mountProperties()"> <span class="w3-tag w3-blue">{{property.value}}</span> </p>`,
})
export class CustomEntityLineComponent extends EntityLineComponent {}

 
