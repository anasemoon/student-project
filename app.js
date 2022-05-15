const yargs=require('yargs')
const student=require('./student')
//add command
yargs.command({
    command:'add',
    describe:'this command is to add new student',
    builder:{
            sname:{
                describe:"this is the student name",
                type:'string',
                demandOption:true

            },
            comment:{
                describe:"this is the student evaluation",
                type:'string',

            },
            degrees:{
                describe:"this is the student degrees",
                type:'array',
                demandOption:true

            },
            id:{
                describe:"this is the unique student id",
                type:'number',
                demandOption:true

            },
            total:{
                describe:"this is the sum of student degrees",
                type:'number',
            }



    },
    handler:()=>{
        student.addStudent(yargs.argv.sname,yargs.argv.comment,yargs.argv.degrees,yargs.argv.id)
    }
})
//delete commant
yargs.command({
    command:'delete',
    describe:"delete note",
    builder:{
        id:{
            describe:"this is the unique student id",
            type:'number',
            demandOption:true

        },

    },
    handler:()=>{
        student.deleteStudent(yargs.argv.id)
        // totalDegrees

    }
})
//read command
yargs.command({
    command:'read',
    describe:"read student details",
    builder:{
        id:{
            describe:"this is the unique student id",
            type:'number',
            demandOption:true

        },

    },
    handler:()=>{
        student.studentDetails(yargs.argv.id,yargs.argv.total)
        // totalDegrees

    }
})
//list command
yargs.command({
    command:'list',
    describe:"list of students",
    handler:()=>{
        student.listOfStudents()
        // totalDegrees

    }
})
// totalDegrees()
yargs.parse()