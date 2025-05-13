import mongoose from "mongoose";

export const ConnectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(
      'mongodb+srv://raoshahbaz:RaoSHahbaz12@cluster0.dm8w0kn.mongodb.net/blog-app',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'blog-app',
      }
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};
