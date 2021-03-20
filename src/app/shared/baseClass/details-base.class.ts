
import {switchMap} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToasterService } from '../../shared/services/toaster.service';
import { ServiceBase } from '../../shared/baseClass/services-base.class';
import { default_const } from '../../shared/constants/consts';

export class ManageDetailsBase implements OnInit {

    userId: string;

    hydrationUrl: string;

    userModel: any;

    loading: boolean;

    constructor(url: string, protected serviceBase: ServiceBase, protected lightbox: Lightbox,
        protected route: ActivatedRoute, protected toasterService: ToasterService) {
            this.hydrationUrl = url;
            this.loading = false;
            this.userModel = {};
        }

    ngOnInit() {
        this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
            this.userId = params.get('id');
            this.loading = true;
            return this.serviceBase.getDetails(this.hydrationUrl, this.userId);
        })).subscribe({
            next: (result: any) => {
                this.userModel = Object.assign({}, result.data);
                this.loading = false;
            },

            error: (err) => {
                this.toasterService.Error('while fetching data', 'Error');
                this.loading = false;
            },

        });
     }

     openLightBox(src) {
        if (!src) {
            src = default_const.NO_USER_IMAGE;
        }
        const album = [{
          src: src,
          thumb: src
        }];
        this.lightbox.open(album, 0);
      }
}
