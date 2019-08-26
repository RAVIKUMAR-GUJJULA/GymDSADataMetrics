import { NgModule } from '@angular/core';

import { GymDsaDataMetricsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GymDsaDataMetricsSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GymDsaDataMetricsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GymDsaDataMetricsSharedCommonModule {}
