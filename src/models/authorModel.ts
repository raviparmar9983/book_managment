import mongoose,{Schema,Document}  from "mongoose";

export interface IAuthor extends Document{
    name: string;
    biography?: string;
    nationality?: string;
}

const authorSchema = new mongoose.Schema<IAuthor>({
  name: {
    type: String,
    required: true
  },
  biography: String,
  nationality: String
});

const Author = mongoose.model<IAuthor>('Author', authorSchema);

export default Author