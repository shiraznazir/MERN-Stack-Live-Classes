const mongoose = require("mongoose");
const db = "mongodb+srv://shiraz:kaalicharan@merncourse.h1j5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const Student = mongoose.model("Student", { 
    name: String, 
    email: String, 
    phone: String, 
    subjects: Array 
});

const stu = new Student({ 
    name: "Mohit", 
    email: "mohit@gmail.com", 
    phone:"9812345670" ,
    subjects: ["Maths", "English"]
});

stu.save().then(function(){
     console.log('meow')
});