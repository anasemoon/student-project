// requires
const fs=require('fs')
//addfunction
const addStudent=(sname,comment,degrees,id)=>{
    const data=loadData()    
    const duplicateid=data.find((element)=>{
        return element.id===id
    })
    if(!duplicateid){
        var total=0
        degrees.forEach(arg => {
        total += arg;
     });
        data.push({
                sname,
                comment,
                degrees,
                id,
                total,
            })
            saveData(data)
            console.log('saved successfully')
    }
    else{
        console.log('error dublicted data')
    }
}

//delete function
const deleteStudent=(id)=>{
    const data=loadData()
    const dataToKeep=data.filter((stu)=>{
        return stu.id!==id
    })
    if(data.length!==dataToKeep.length){
        console.log('this student is removed')
        saveData(dataToKeep)
        
    }
    else{
        console.log('this id is not found')
    }
}

//load-data function
const loadData=()=>{
    try{
        const data=fs.readFileSync('data.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return[]
    }

}

//save-data function
const saveData=(data)=>{
    const saveData=JSON.stringify(data)
    fs.writeFileSync('data.json',saveData)
}

//read-data function
const studentDetails=(id)=>{
    const data=loadData() 
    const student=data.find((el)=>{
        return el.id===id
    })
    if (student){
        console.log("the name is => ",student.sname)
        console.log("the sum of his degree is => ",student.total)

    }
    else{
        console.log('no student is found with thid id')
    }
}

//list-data function
const listOfStudents=()=>{
    const data=loadData()
    data.forEach((stu)=>{
        console.log('sname=> ',stu.sname)
        
    })
}

// exports
module.exports={
    addStudent,
    deleteStudent,
    studentDetails,
    listOfStudents,
}