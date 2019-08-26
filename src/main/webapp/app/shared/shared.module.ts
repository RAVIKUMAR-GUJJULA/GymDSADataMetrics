import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  GymDsaDataMetricsSharedLibsModule,
  GymDsaDataMetricsSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [GymDsaDataMetricsSharedLibsModule, GymDsaDataMetricsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GymDsaDataMetricsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GymDsaDataMetricsSharedModule {
  static forRoot() {
    return {
      ngModule: GymDsaDataMetricsSharedModule
    };
  }
}
