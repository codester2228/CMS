import { BiRupee } from 'react-icons/bi';
import "./CustomersStyle.css";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import DeatilData from './CustomerDetail/DetailMainIndex'
const Row_Data = [
    {
        Id:"Srikanth",
        Client_Name: 
        <Router> 
            <Link to="/Leads/Customer/details/Srikanth" style={{textDecoration:"none", color:"#595959"}}> Srikanth</Link> 
            <Switch> 
                <Route exact path='/Leads/Customer/details/Srikanth'>
                    <div className="DetailDataSrikanth">
                        <DeatilData /> 
                    </div> 
                </Route>
            </Switch>
        </Router>,   
        Mobile_No:"2465672576",Date:"1979-11-16",
        Shoot:"Pre/Post Wedding Shoot", 
        Quoted_Amount: <div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
             <div className="RupeeIcon"><BiRupee /></div>
             96,256
             </div>,   
        Status:"Confirmed" ,
        Source:"Website",
        Color: true ,
        path:"/Leads/Customer/details/Srikanth",
        Email: "Srikanth@gmail.com", },
    {
        Id:"Kordula",
        Client_Name: 
        <Router> 
            <Link to="/Leads/Customer/details/Kordula" style={{textDecoration:"none", color:"#595959"}}>Kordula</Link> 
            <Switch> 
                <Route exact path='/Leads/Customer/details/Kordula'>
                    <div className="DetailDataKordula">
                        <DeatilData /> 
                    </div> 
                </Route>
            </Switch>
        </Router>,   
        Mobile_No:"7896541235",Date:"1997-08-06",
        Shoot:"Birthday Shoot",         
        Quoted_Amount:<div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
        <div className="RupeeIcon"><BiRupee /></div>
        56,785
        </div>,  
        Status:"Cancelled", 
        Source:"WedmeGood",
        Color: true ,
        path:"/Leads/Customer/details/Kordula",
        Email: "Kordula@gmail.com",},
    {
        Id:"Vikki",
        Client_Name: 
        <Router> 
            <Link to="/Leads/Customer/details/Vikki" style={{textDecoration:"none", color:"#595959"}}> Vikki</Link> 
            <Switch> 
                <Route exact path='/Leads/Customer/details/Vikki'>
                    <div className="DetailDataVikki">
                        <DeatilData /> 
                    </div> 
                </Route>
            </Switch>
        </Router>,    
        Mobile_No:"8659745896",
        Date:"2016-04-28",
        Shoot:"Baby Shower Shoot",      
        Quoted_Amount:<div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
        <div className="RupeeIcon"><BiRupee /></div>
        45,960
        </div>,     
        Status: "pending" , 
        Source:"Weddingwire",
        Color: true ,
        path:"/Leads/Customer/details/Vikki",
        Email: "Vikki@gmail.com",},
    {
        Id:"Burnaby",
        Client_Name: 
        <Router> 
            <Link to="/Leads/Customer/details/Burnaby" style={{textDecoration:"none", color:"#595959"}}> Burnaby</Link> 
            <Switch> 
                <Route exact path='/Leads/Customer/details/Burnaby'>
                    <div className="DetailDataBurnaby">
                        <DeatilData /> 
                    </div> 
                </Route>
            </Switch>
        </Router>,   
        Mobile_No:"8469752389",
        Date:"2017-10-25",
        Shoot:"Equatorial Guinea",      
        Quoted_Amount:<div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
        <div className="RupeeIcon"><BiRupee /></div>
        85,300
        </div>,    
        Status:"Confirmed", 
        Source:"Referral",
        path:"/Leads/Customer/details/Burnaby",
        Email: "Burnaby@gmail.com",},
    ]

export default Row_Data;

