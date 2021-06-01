import React from 'react';
import "./DetailScreenStyle.css";
import DeatilBody from "./DetailCenterBody"

class Detailsscreen extends React.Component {

    render() {
      
      return (
  
        <div>
            
            <div className="Detailsscreen01">
              <div style={{display:"flex", flexFlow:"row"}}>
              <div className="LeftCustomerMenuHeader"> 
              <select className="CustomersType2nd"> 
                        <option className="CustypeContents" value="" >All Customers</option>
                        <option className="CustypeContents" value="Confirmed" >Confirmed Customers </option>
                        <option className="CustypeContents" value="Pending" >Pending Customers</option>
                        <option className="CustypeContents" value="Cancelled" >Cancelled Customers</option>
                        <option className="CustypeContents" value="WedmeGood" >Customers WedmeGood </option>
                        <option className="CustypeContents" value="Weddingwire" >Customers from Weddingwire</option>
                        <option className="CustypeContents" value="Website" >Customers from Websites</option>
                        <option className="CustypeContents" value="Referral" >Referrals Customers </option>
                        <option className="CustypeContents" value="Wedding Photography" >Wedding Photography&Cinematography</option>
                        <option className="CustypeContents" value="Pre/Post Wedding Shoot" >Pre/Post Wedding Shoot</option>
                        <option className="CustypeContents" value="Birthday Shoot" >Customer for Birthday Shoot</option>
                        <option className="CustypeContents" value="Baby Shower Shoot" > Customer for Baby Shower Shoot</option>
                        <option className="CustypeContents" value="Model Portfolio Shoot" >Customer for Model Portfolio Shoot </option>
              </select>
              <div className="addNewCus"> <h1>+ New</h1></div>
              </div>
              <div className="LeftCustomerMenutotal">
              <DeatilBody/>
              <div >
            
            
            </div>
              </div>
              </div>
            </div>
        </div>
       
      );
    }
  }

export default Detailsscreen;






