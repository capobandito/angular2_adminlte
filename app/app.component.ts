import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SidebarComponent} from './sidebar.component';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, SidebarComponent]
})

export class AppComponent implements OnInit{
    ngOnInit() {

        //Easy access to options
        var o = $.AdminLTE.options;

        jQuery.AdminLTE.layout.activate();

        //Enable control sidebar
        if (o.enableControlSidebar) {
            $.AdminLTE.controlSidebar.activate();
        }
    }
}