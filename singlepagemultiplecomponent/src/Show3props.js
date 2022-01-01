// import React,{useEffect} from 'react'

// const Show3props = (props) => {

//     useEffect(() =>{
//         console.log("i am from child component")
//     },[])

//     return (
//         <div>
//             <h1>increment calculator </h1>
//             {props.count+1}<br />
//             {props.college}
//         </div>
//     )
// }

// export default Show3props



//////////////////////////////////////////////////


// import React,{useEffect} from 'react'

// const Show3props = (props) => {

//     useEffect(() =>{
//         console.log("i am from child component")
//     },[])

//     return (
//         <div>
//             <h1>increment calculator </h1>
//             {props.count+1}<br />
//             {props.college}
//         </div>
//     )
// }

// export default Show3props
       
       
//////////////////////////////////////////////////////


// import React,{useEffect} from 'react'

// const Show3props = (props) => {

//     const {count,college} = props

//     useEffect(() =>{
//         console.log("i am from child component")
//     },[])

//     return (
//         <div>
//             <h1>increment calculator </h1>
//             {count+6}<br />
//             {college}
//         </div>
//     )
// }

// export default Show3props










///////////////////////////////////////////////////


import React,{useEffect} from 'react'

const Show3props = ({count,college}) => {

    useEffect(() =>{
        console.log("i am from child component")
    },[])

    return (
        <div>
            <h1>increment calculator </h1>
            {count+7}<br />
            {college}
        </div>
    )
}

export default Show3props
