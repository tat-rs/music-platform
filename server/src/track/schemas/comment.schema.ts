import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  id: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' })
  trackId: Track;

  @Prop()
  userName: string;

  @Prop()
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
