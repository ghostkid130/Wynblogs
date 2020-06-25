const mongoose = require('mongoose');

console.log("Hello")

try{
    mongoose.connect(process.env.MONGODB_PRIME, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Connected to MongoDB');
} catch (e){
    console.log(e.toString())
}
