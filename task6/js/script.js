const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]


let studentsAvarageMark = calculateStudentAverageMark(students[2]);
let groupAvarageMark = calculateGroupAverageMark(students);


function calculateStudentAverageMark(arr) {
    return arr.marks.reduce((acc,item)=>
    acc+item)/arr.marks.length
}
alert(studentsAvarageMark);

function calculateGroupAverageMark(students) {
    let all = []
    for(let i = 0; i<students.length; i++){
        all.push(students[i].marks)
    }
    all = all.flat()
    return all.reduce((acc,item)=>acc+item)/all.length
}
alert(groupAvarageMark);






