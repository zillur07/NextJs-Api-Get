import { log } from 'console';
import { User, Address, Company } from './models/users';
// Api Get -1 


// const getPost = async () => {
//     try {
//         const res = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json;

//     } catch (error) {
//         console.log('error');
//     }
// };
//..............................................


// Api Get -2 //...............

const getUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) {

            throw new Error('Some thing wrong');
        } else {
            return await res.json();

        }

    } catch (error) {
        console.log('error dekha geche ')
    }
};

export default async () => {
    const users: User[] = await getUsers();
    users.forEach((velu) => {
        console.log(velu.name);

        console.log('--------------------------');

        console.log(velu.address)
    });
    return (
        <section>
            {users.map(user =>
                <div className='bg-slate-400 max-w-sm rounded overflow-hidden shadow-lg'>
                    <h1><b>Name : {user.name}</b></h1>
                    <h2>Address </h2>
                    <h2>City : {user.address.city}</h2>
                    <h3>Mobile: {user.phone}</h3>
                    <h3>Company Name:  {user.company.name}</h3>
                    <p>Email Address: {user.email}</p>
                    <hr></hr>
                </div>
            )};



        </section>


    )
}











///Example page




// const getPost = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!res.ok) {
//             throw new Error('some thing wring')
//         } else {
//             return await res.json();
//         }

//     } catch (error) {
//         console.log('error');
//     }
// };


// export default () => {
//     return (
//         <div>
//             <h1>Api GET  All Post </h1>
//         </div>
//     )
// }


// export default function Product() {
//     return (
//         <div>
//             <h1>Product Page </h1>
//             <h4 className="text-white bg-gray-500">All Product</h4>
//         </div>
//     )
// }


// export default () => {
//     return (
//         <div><h1>Product_1</h1></div>
//     )
// }

// const users = () => {
//     return (
//         <div><h1>All Users</h1></div>
//     );
// }
// export default users;