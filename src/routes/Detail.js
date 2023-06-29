import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import { addItem } from './../store.js';
import { useDispatch } from 'react-redux';


function Detail(props){

    let {id}= useParams();
    let 찾은상품 = props.shoes.find(x=>x.id==id)
     
      console.log(찾은상품.id)

    let [alert, setAlert] = useState(true)
    let [탭, 탭변경] = useState(0)
    let dispatch = useDispatch()
    let 주문상품 = '{id : 1, name : "Red Knit", count : 1}'
    console.log('ordered?'+ 주문상품)

    useEffect(() => {
      let watchedList = localStorage.getItem('watched')
      if (!watchedList) {let data = [];
        localStorage.setItem('watched', JSON.stringify(data))}
  
      watchedList = localStorage.getItem('watched')
      watchedList = JSON.parse(watchedList)
      watchedList.push(찾은상품.id)
  
      watchedList = new Set(watchedList)
      watchedList = Array.from(watchedList)
      localStorage.setItem('watched', JSON.stringify(watchedList))
    }, []);

    // useEffect(()=>{
    //   let 꺼낸거= localStorage.getItem('watched')
    //   if (!꺼낸거= localStorage.getItem('watched')
    //   ) {let data = [];
    //     localStorage.setItem('watched',JSON.stringify(꺼낸거))

    //   꺼낸거 = JSON.parse(꺼낸거)
    //   꺼낸거.push('0')
      
    // }, [])
  

    return(
      

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
        <img src={'https://codingapple1.github.io/shop/shoes' +(Number(id)+1)+'.jpg'} width="100%"/> 
          {/* <img src="https://codingapple1.github.io/shop/shoes[id].jpg" width="100%" /> */}
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>          
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id : 1, name : "Red Knit", count : 1}))
            
          }}>주문하기</button> 
        </div>
      </div>
</div> 
 
    )
}

function TabContent({탭}){ 
  return (<div className="start end">
  
{ [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
</div> ) }



export default Detail;
