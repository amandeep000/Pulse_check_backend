import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { UserModuleModule } from './user-module/user-module.module';
import { MonitorModuleModule } from './monitor-module/monitor-module.module';
import { ScheduleModuleModule } from './schedule-module/schedule-module.module';
import { CheckModuleModule } from './check-module/check-module.module';
import { IncidentModuleModule } from './incident-module/incident-module.module';
import { QueueModuleModule } from './queue-module/queue-module.module';
import { ReportingModuleModule } from './reporting-module/reporting-module.module';

@Module({
  imports: [AuthModuleModule, UserModuleModule, MonitorModuleModule, ScheduleModuleModule, CheckModuleModule, IncidentModuleModule, QueueModuleModule, ReportingModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
