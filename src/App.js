
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'

function App() {

let [shoes, setShoes] = useState(data)

  return (
  
  <div className="App">

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link><Link to = "/cart" >Cart </Link></Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
      <Routes>
        <Route path="/" element={<div>
          <div className='main-bg'></div>
            <div className="container">
               <div className="row">          
                 {shoes.map(function(a,i){
                  console.log(i)
                  return(
                    <Card shoes={shoes[i]} i={i+1}> </Card>) })  }
               </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                console.log(결과.data)
              let copy=[...shoes, ...결과.data];
              setShoes(copy);
              console.log(copy)
            })
              .catch(()=>{
                console.log('Fail to connect')
              })
            }}>상품더보기</button>
          </div>}>
        </Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>          
        

        <Route path="/about" element={<div>about페이지</div>}>          
        </Route>

        <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
        
      
      
    </div>
  );
}

function Card(props){
  return(
        <div className="col-md-4">
           <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
          </div>     
  )   
      }


export default App;
