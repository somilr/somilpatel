// import React, { Component } from 'react'

// export default class Data extends Component {
//         let Data =
//   [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ]

// let filterdata = Data.filter((d, i) => (d.status === true));

// let total = filterdata.reduce((acc, d) => acc + d.bonus + d.salary, 0)

// console.log(total)
// render() {
//   return (

//     <table border="1" style={{ textAlign: "center", margin: "200px", padding: "20px" }}>
//       <h1 style={{ textAlign: "center" }}>Employee Data:</h1>
//       <tr style={{ color: "red" }}>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Salary</th>
//         <th>Bonus</th>
//         <th>Status</th>
//         <th>salary+bonus</th>
//         <th>Total</th>

//       </tr>
//       {
//         filterdata.map((d, i) => {
//           return (
//             <>
//               <tr style={{ color: "blue", fontWeight: "500" }}>
//                 <td>{d.name}</td>
//                 <td>{d.age}</td>
//                 <td>{d.salary}</td>
//                 <td>{d.bonus}</td>
//                 <td>{d.status.toString()}</td>
//                 <td>{d.salary + d.bonus}</td>
//                 {i === 0 ? <td rowSpan={filterdata.length}>{total}</td> : null}
//               </tr>
//             </>
//           )
//         })
//       }
//     </table>
//   )
// }

