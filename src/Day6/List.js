// export default function List()
// {
//     const animals=["dog","cat","lion","tiger"]
//     const result=animals.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
//     return(
//         <div>
//             <ul>
//                 {result}
//             </ul>
//         </div>
//     )
// }
// function DisplayName(props)
// {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }

// export default function List()
// {
//     const studentName=["Panvith","Sumanth","Ashwin","Ajay"]
//     const stName=studentName.map((stu)=> <DisplayName name={stu}></DisplayName>)
//     return (
//         <div>{stName}</div>
//     )
// }

import React from 'react'

export default function List() {

    const college=[{id:1,stuName:"sachin",age:26},
    {id:2,stuName:"surya",age:24},
    {id:3,stuName:"Panvith",age:29},]

    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)

    return (
        <div>
            <h1>List of Students</h1>
            {display}
        </div>
    )
}
