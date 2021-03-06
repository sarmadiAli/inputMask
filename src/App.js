import React, { useEffect, useState } from 'react';
import Input from './Input'


const data = require('./cities.json')


function App() {
   const [hint, setHinit] = useState('')
   const handler_setData = (data1) => {

      const list = []
      var n = ''
      if (data1 !== '') {
         var regex = new RegExp(`^${data1}`)

         data.map(item => {

            n = item.match(regex);
            if (n !== null && n[0] !== '') {
               list.push(n)
               return 0
            }




         })
         setHinit(list?.[0]?.input)
         
         return 0
      }
      setHinit('')



   }
   return <div>
      <Input hint={hint} handleChange={(e) => handler_setData(e.target.value)} />
   </div>
}

export default App;
