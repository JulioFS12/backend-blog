const Subject = require('./model');

const subjectExist = async( name ) => {

    try {
        
        const existResult = await Subject.findOne({name: name});
        return Promise.resolve( existResult );


    } catch (error) {
        console.log(error);
        return Promise.reject('Ups, anything was wrong...!');
    }

}

const addSubject = ( subject ) => {

    try {

        const addResult = new Subject(subject);
        addResult.save();

        return Promise.resolve('Subject saved success..!');

        
    } catch (error) {
        console.log(error);
        return Promise.reject('Ups, anything was wrong...!')
    }

}

module.exports = { subjectExist, addSubject };