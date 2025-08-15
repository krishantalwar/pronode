const sum =()=>{
    console.log("sum")
}
const product =()=>{
    console.log("product")
}




// different way  of export 
// exports.sum="fff"
// module.exports.sum="fff"
// module.exports="rrrrrrrrrr"
// module.exports={
//   sum,
//   product
// }

module.exports=[
  sum,
  product
]


// wrong
// exports={
//   sum,
//   product
// }


// console.log(module)



// {
//   id: '.',
//   path: '',
//   exports: {},
//   filename: '/index.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/node_modules',
//     '/runtime/javascript/node_modules',
//     '/runtime/node_modules',
//     '/node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kIsExecuting)]: true
// }




