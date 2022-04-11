// import React, { Component } from 'react'

// export default class Medicine extends Component {
//   let Medicine =
//   [
//     {
//       id: 101,
//       name: 'Abacavir',
//       quantity: 25,
//       price: 150,
//       expiry: 2022,
//       status: true
//     },
//     {
//       id: 102,
//       name: 'Eltrombopag',
//       quantity: 90,
//       price: 550,
//       expiry: 2021,
//       status: true
//     },
//     {
//       id: 103,
//       name: 'Meloxicam',
//       quantity: 85,
//       price: 450,
//       expiry: 2025,
//       status: false
//     },
//     {
//       id: 104,
//       name: 'Allopurinol',
//       quantity: 50,
//       price: 600,
//       expiry: 2023,
//       status: true
//     },
//     {
//       id: 105,
//       name: 'Phenytoin',
//       quantity: 63,
//       price: 250,
//       expiry: 2021,
//       status: false
//     }
//   ];

// let filterdata = Medicine_Data.filter((d, i) => (d.price > 200 && d.expiry > 2021));

// let total = filterdata.reduce((acc, d) => acc+d.price, 0)

// console.log(filterdata)
//   render() {
//     return (
//       <table border="1" >
//       <h1>Medicine Data:</h1>
//       <tr>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Quantity</th> 
//         <th>Price</th>
//         <th>Expiry</th>
//         <th>Status</th>
//         <th>total</th>
//       </tr>
//       {
//       filterdata.map((d, i) => {
//       return (
//       <>
//         <tr>
//           <th>{d.id}</th>
//           <th>{d.name}</th>
//           <th>{d.quantity}</th>
//           <th>{d.price}</th>
//           <th>{d.expiry}</th>
//           <th>{d.status.toString()}</th>
//           {i === 0 ? <td rowSpan={filterdata.length}>{total}</td> : null}
//         </tr>
//       </>
//       )
//       }
//     }
//     </table>
//     )
//   }
// }

