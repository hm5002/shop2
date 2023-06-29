import { Button, Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "./../store/userSlice.js"
import {addCount} from './../store.js'

function Cart(){
    let state = useSelector((state) => state )
      console.log(state.cart)
    let dispatch = useDispatch()

   
    return(
     <div>
	<Table> 
        <thead>
            <tr> 
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
	  <tbody>
        {
            state.cart.map((a,i)=>
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td><button onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button></td>
                </tr> 
            )
        }
	          
	  
	  </tbody>
	</Table> 

        </div>
    )
}

export default Cart