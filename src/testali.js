var str =[
	'Ali Sarmadi',
	' sarmadi Ali'
    
]
var n = ''
var list =[]
let data = require('./cities.json')

data.map(item =>{
	n = item.match(/^A/m);
    if(n !==null) list.push(n)
	
})
console.log(list)

