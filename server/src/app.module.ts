import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123321@cluster0.dzmxpag.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
