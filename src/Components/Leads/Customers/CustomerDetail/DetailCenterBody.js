import React from 'react';
import "./DetailScreenStyle.css";
import { MdEdit} from "react-icons/md";
import { RiDeleteBinLine} from "react-icons/ri";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { BiRupee } from 'react-icons/bi';
import {FiDownload } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
class CustomersList extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        //********************** Complete Data for all Customer in Deatils ************************
        //*************** */ additoin of New Data will atomatically adds new page in details screen ***********************
        persent: "5",
        ListData: [{
          Id:"Srikanth",
          Client_Name:"Srikanth",   
          Mobile_No:"2465672576",
          Date:"1979-11-16",
          Shoot:"Pre/Post Wedding Shoot", 
          Quoted_Amount: <div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
               <div className="RupeeIcon"><BiRupee /></div>
               96,256
               </div>,   
          Status:"Confirmed", 
          Source:"Website",       //* Used to color Status part *******************
          path:"/Leads/Customer/details/Srikanth",
          Email: "Srikanth@gmail.com",
          SubtotalGST: (parseInt(44000.00)) + (parseInt(24000.00))+ (parseInt(54000.00)),
          QuotationDetails: [   
               //********************** Quotation Details Table Data ************************
            {
              EventName:"Pre-Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "Candid Photographer",
              PhotoGrapher4: "",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm (06 hours)",
              Location:"Begumpet, Hyderabad",
              Rate: 44000.00,
              GSTpercent: 10,
              SGSTpercent: 9,
              Amount: 44000.00,
              Count: "1"
            },
            {
              EventName:"Engagement",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "",
              PhotoGrapher3: "",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Fri 020-Jan-2021",
              TimeDuration: "11am - 5pm (06 hours)",
              Location:"Begumpet, Hyderabad",
              Rate: 24000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 24000.00,
              Count: "1",
            },
            {
              EventName:"Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm (06 hours)",
              Location:"Begumpet, Hyderabad",
              Rate: 54000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 54000.00,
              Count: "1"
            }
          ]
          
        },
      {
          Id:"Kordula",
          Client_Name:"Kordula", 
          Mobile_No:"7896541235",
          Date:"1997-08-06",
          Shoot:"Birthday Shoot",         
          Quoted_Amount:<div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
          <div className="RupeeIcon"><BiRupee /></div>
          56,785
          </div>,  
          Status:"Cancelled", 
          Source:"WedmeGood",
          path:"/Leads/Customer/details/Kordula",
          Email: "Kordula@gmail.com",
          SubtotalGST: (parseInt(94000)) + (parseInt(75000.00)),
          QuotationDetails: [
            {
              EventName:"Pre-Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "",
              PhotoGrapher3: "Candid Photographer",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm 6hours",
              Location:"Begumpet, Hyderabad",
              Rate: 94000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 94000.00,
              Count: "1"

            },
            {
              EventName:"Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "",
              PhotoGrapher4: "",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm (06 hours)",
              Location:"Begumpet, Hyderabad",
              Rate: 75000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 75000.00,
              Count: "1"
            }]},
      {
          Id:"Vikki",
          Client_Name:"Vikki",   
          Mobile_No:"8659745896",
          Date:"2016-04-28",
          Shoot:"Baby Shower Shoot",      
          Quoted_Amount:<div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
          <div className="RupeeIcon"><BiRupee /></div>
          45,960
          </div>,     
          Status: "pending" , 
          Source:"Weddingwire",
          path:"/Leads/Customer/details/Vikki",
          Email: "Vikki@gmail.com",
          SubtotalGST: (parseInt(63000.00)) + (parseInt(59000.00))+ (parseInt(68000.00)),
          QuotationDetails: [
            {
              EventName:"Pre-Wedding",
              PhotoGrapher1: "",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm 6hours",
              Location:"Begumpet, Hyderabad",
              Rate: 63000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 93000.00,
              Count: "1"
            },
            {
              EventName:"Pre-Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm 6hours",
              Location:"Begumpet, Hyderabad",
              Rate: 58000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 58000.00,
              Count: "1"

            },
            {
              EventName:"Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "",
              PhotoGrapher4: "",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm (06 hours)",
              Location:"Begumpet, Hyderabad",
              Rate: 69000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 69000.00,
              Count: "1"
            }]},
      {
          Id:"Burnaby",
          Client_Name:"Burnaby", 
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
          Email: "Burnaby@gmail.com",
          SubtotalGST: (parseInt(44000.00)),
          QuotationDetails: [
            {
              EventName:"Pre-Wedding",
              PhotoGrapher1: "Traditional Photographer",
              PhotoGrapher2: "Cinematographer",
              PhotoGrapher3: "Candid Photographer",
              PhotoGrapher4: "Traditional Videographer",
              DateAndDay: "Sun 07-Jan-2021",
              TimeDuration: "11am - 5pm 6hours",
              Location:"Begumpet, Hyderabad",
              Rate: 44000.00,
              GSTpercent: 9,
              SGSTpercent: 9,
              Amount: 44000.00,
              Count: "1"

            }]},{
              Id:"Sivamani",
              Client_Name:"Sivamani",   
              Mobile_No:"26985478965",
              Date:"1963-11-16",
              Shoot:"Pre/Post Wedding Shoot", 
              Quoted_Amount: <div className="Quoted_AmountStyle" style={{color:'#5976E3'}}>
                   <div className="RupeeIcon"><BiRupee /></div>
                   96,586
                   </div>,   
              Status:"Cancelled", 
              Source:"Website",       //* Used to color Status part *******************
              path:"/Leads/Customer/details/Sivamani",
              Email: "Sivamani@gmail.com",
              SubtotalGST: (parseInt(44000.00)) + (parseInt(54000.00)),
              QuotationDetails: [   
                   //********************** Quotation Details Table Data ************************
                {
                  EventName:"Pre-Wedding",
                  PhotoGrapher1: "Traditional Photographer",
                  PhotoGrapher2: "Cinematographer",
                  PhotoGrapher3: "Candid Photographer",
                  PhotoGrapher4: "",
                  DateAndDay: "Sun 07-Jan-2021",
                  TimeDuration: "11am - 5pm (06 hours)",
                  Location:"Begumpet, Hyderabad",
                  Rate: 44000.00,
                  GSTpercent: 9,
                  SGSTpercent: 9,
                  Amount: 44000.00,
                  Count: "1"
                },
                {
                  EventName:"Wedding",
                  PhotoGrapher1: "Traditional Photographer",
                  PhotoGrapher2: "Cinematographer",
                  PhotoGrapher3: "",
                  PhotoGrapher4: "Traditional Videographer",
                  DateAndDay: "Sun 07-Jan-2021",
                  TimeDuration: "11am - 5pm (06 hours)",
                  Location:"Begumpet, Hyderabad",
                  Rate: 54000.00,
                  GSTpercent: 9,
                  SGSTpercent: 9,
                  Amount: 54000.00,
                  Count: "1"
                }
              ]
              
            },
          ]
      
      }
      this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(event) {
      this.setState({persent: event.target.value});
    }
   
    render() {
      //const SubtotalFun(Amt01, Amt2, Amt3) = parseInt(Amt01) + parseInt(Amt2) + parseInt(Amt3);
      return (
        <div style={{display: 'flex', flexFlow: 'row'}}>
        <Router>
               <div className="LeftCustomerMenu">     {/************* Left side Details Se;ection part which as in loop with  above ListData   ********/ }
              {this.state.ListData.map(item => (
              
              <div className="CustomerDetails"  key={item.id}>
              <CheckboxTable className="CheckBoxDetails" />
              <Link className="CustomerDetailsLink" to={item.Id} >    {/************* Assigning Routing Links to all Each Detail ********  */}
                      <div className="NameAndDate">
                        <h1>{item.Client_Name}</h1>
                      <h2>{item.Date} <span></span> {item.Quoted_Amount}</h2>
                      
                      </div>
                      <div className="StatusAnsSource">
                      <h1 >{item.Source}</h1>
                      <h2 style={{color: item.Status === "Confirmed"?'#05888D': item.Status ==="pending" ? '#8175C7':"#D85C60" }}>{item.Status}</h2>
                       
                      </div>
                      </Link>
                </div>  
              
            ))}
              </div>
      
              <Switch>
              {this.state.ListData.map(item => (
              <Route path={item.path} key={item.id}>  {/************  Assigning path and inner part to assigned above Link and will run in loop with ListData ********************* */}
                  <div className="ContentBody"> 
                  <h1 className="CustomerName">
                      {item.Id}
                  </h1>
                  <div className="EDitAndDelete">
                      <MdEdit className="EditIcon "/>
                      <RiDeleteBinLine className="DeleteIcon " /> 
                  </div>
                  <span className="DetHorizantalLine"></span>
                   <div className="FewDeatilsCustomer">
                    <div style={{display: 'flex', flexFlow: 'row'}}><h1>Phone No      : </h1> <h2> {item.Mobile_No}</h2></div> 
                    <div style={{display: 'flex', flexFlow: 'row'}}><h1>Email Id      :  </h1> <h2>   {item.Email}</h2></div> 
                    <div style={{display: 'flex', flexFlow: 'row'}}><h1>Lead Source   :  </h1> <h2>{item.Source}</h2></div>
                    <div style={{display: 'flex', flexFlow: 'row'}}><h1>Shoot         : </h1> <h2>{item.Shoot}</h2></div>
                   </div>

                    <div className="QuotationDetailHeading">
                        <h1>Quotation Details</h1>
                    </div>
                    <div className="QuotationDetailTable">   
                    {/***************************Quotation Detail Table, 
                     * its Data is a sublist of ListData and 
                     * Table bady rows will run in lopp according to subList in ListData
                     *  *******************/}
                    <table className="TableBody">  
                      <thead style={{height:"41px"}}>
                      <tr style={{padding:"0px",margin:"0px"}}>
                          <th rowspan={2} style={{width: "170px",padding:"0px",margin:"0px",paddingLeft: "10px"}}>EVENT DETAILS</th>
                          <th rowspan={2} style={{width: "125px",padding:"0px",margin:"0px",paddingLeft: "10px"}}> EVENT DATE & TIME</th>
                          <th rowspan={2} style={{width: "122px",padding:"0px",margin:"0px",paddingLeft: "10px"}}>LOCATION</th>
                          <th rowspan={2}style={{width: "78px"  ,padding:"0px",margin:"0px",paddingLeft: "10px"}}>RATE</th>
                          <th colspan="2" style={{width: "140px" ,padding:"0px",margin:"0px",paddingLeft: "10px"}}>GST</th>
                          <th rowspan={2}style={{width: "84px"  ,padding:"0px",margin:"0px",paddingLeft: "10px"}}> AMOUNT</th>
                        </tr>
                        <tr style={{height:"5px"}}>
                        <th style={{width: "70px",padding:"0px",margin:"0px",paddingLeft: "10px"}}>%</th>
                        <th style={{width: "70px",padding:"0px",margin:"0px",paddingLeft: "10px"}}>Amt</th>
                        </tr>
                        </thead>
                    
                      <tbody>
                      {item.QuotationDetails.map(AmtDetails => (
                        <tr classname="TableContent"key={AmtDetails.id} style={{padding:"0px",margin:"0px"}}> 
                        <td style={{paddingBottom:"10px"}}> 
                          <div >{AmtDetails.EventName}</div>
                          <div  style={{display: AmtDetails.PhotoGrapher1 === ""? "none":"flex" , flexFlow:"row"}}> <h1>{AmtDetails.PhotoGrapher1}</h1> <h2 style={{float: "right"}}>{AmtDetails.Count}</h2></div>
                          <div  style={{display: AmtDetails.PhotoGrapher2 === ""? "none":"flex" }}><h1>{AmtDetails.PhotoGrapher2}</h1> <h2 style={{float: "right"}}>{AmtDetails.Count}</h2></div>
                          <div  style={{display: AmtDetails.PhotoGrapher3 === ""? "none":"flex" }}><h1>{AmtDetails.PhotoGrapher3}</h1> <h2 style={{float: "right"}}>{AmtDetails.Count}</h2></div>
                          <div style={{display: AmtDetails.PhotoGrapher4 === ""? "none":"flex" }}><h1>{AmtDetails.PhotoGrapher4}</h1> <h2 style={{float: "right"}}>{AmtDetails.Count}</h2></div>
                        </td>
                        <td > {AmtDetails.DateAndDay} <br/> {AmtDetails.TimeDuration}</td>
                        <td > {AmtDetails.Location}</td>
                        <td > {AmtDetails.Rate}.00</td>
                        <td > {AmtDetails.GSTpercent}%</td>
                        <td > {(parseInt(AmtDetails.Rate)/100 ) * + parseInt(AmtDetails.GSTpercent)}.00</td>
                        <td > {AmtDetails.Amount}.00</td>

                        </tr>
                    ))} 
                    
      
                      </tbody>
                      
                      </table>
                      
                        
                        <div className="SubtotalBox" > 

                            <div className="TotalAmount"> <h1 >Subtotal:  </h1>
                            <NumberFormat value={item.SubtotalGST} className="foo" displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" renderText={(value, props) => <h2 {...props}>{value}.00</h2>} />
                              
                            </div>
                            {/* ************************ Invoice Download with  GST ******************* */}
                              <div className="DownloadInvoiceGSt">
                                  <h1>Invoice Amount with GST</h1> <h2><FiDownload/></h2>
                              </div> 
                              <div className="CalcutionsSGT">
                                  <h1> 
                                   <label>Subtotal</label> 
                                   <label>
                                     <NumberFormat 
                                          value={item.SubtotalGST} 
                                          className="foo" 
                                          displayType={'text'} 
                                          thousandSeparator={true} 
                                          thousandsGroupStyle="lakh" 
                                          renderText={(value, props) => <div {...props}>{value}.00</div>} />
                                   </label>
                                  </h1>
                                  <h1> 
                                    <label>Discount</label> 
                                    <select value={this.state.persent} onChange={this.handleChange} className="SelectPercent" >
                                        <option value="5">5%</option>
                                        <option value="10">10%</option>
                                    </select>
                                   <label className="DisCountLable">
                                      <NumberFormat 
                                            value={(parseInt(item.SubtotalGST))/100 * this.state.persent} 
                                            className="foo" displayType={'text'} 
                                            thousandSeparator={true} 
                                            thousandsGroupStyle="lakh" renderText={(value, props) => <div {...props}>-{value}.00</div>} />
                                   </label>
                                 </h1>
                                 <h1> 
                                   <label>GST[18%]</label> 
                                   <label>
                                      <NumberFormat 
                                          value={item.SubtotalGST/100 * 18} 
                                          className="foo" 
                                          displayType={'text'} 
                                          thousandSeparator={true} 
                                          thousandsGroupStyle="lakh" 
                                          renderText={(value, props) => <div {...props}>{value}.00</div>} />
                                   </label>
                                  </h1>
                                  <h2> 
                                   <label>Total('₹')</label> 
                                   <label>
                                     <NumberFormat 
                                          value={item.SubtotalGST - item.SubtotalGST/100 * this.state.persent + item.SubtotalGST/100 * 18} 
                                          className="foo" 
                                          displayType={'text'} 
                                          thousandSeparator={true} 
                                          thousandsGroupStyle="lakh" 
                                          renderText={(value, props) => <div {...props}>{value}.00</div>} />
                                   </label>
                                  </h2>
                              </div>            
                              {/* ************************ Invoice Download without  GST ******************* */}
                              <div className="DownloadInvoice">
                                  <h1>Invoice Amount without GST</h1> <h2><FiDownload/></h2>
                              </div> 
                              <div className="Calcutions">
                                  <h1> 
                                   <label>Subtotal</label> 
                                   <label>
                                     <NumberFormat 
                                          value={item.SubtotalGST} 
                                          className="foo" 
                                          displayType={'text'} 
                                          thousandSeparator={true} 
                                          thousandsGroupStyle="lakh" 
                                          renderText={(value, props) => <div {...props}>{value}.00</div>} />
                                   </label>
                                  </h1>
                                  <h1> 
                                    <label>Discount</label> 
                                    <select value={this.state.persent} onChange={this.handleChange} className="SelectPercent" >
                                        <option value="5">5%</option>
                                        <option value="10">10%</option>
                                    </select>
                                   <label className="DisCountLable">
                                      <NumberFormat 
                                            value={(parseInt(item.SubtotalGST))/100 * this.state.persent} 
                                            className="foo" displayType={'text'} 
                                            thousandSeparator={true} 
                                            thousandsGroupStyle="lakh" renderText={(value, props) => <div {...props}>-{value}.00</div>} />
                                   </label>
                                 </h1>
                                 
                                  <h2> 
                                   <label>Total('₹')</label> 
                                   <label>
                                     <NumberFormat 
                                          value={item.SubtotalGST - item.SubtotalGST/100 * this.state.persent } 
                                          className="foo" 
                                          displayType={'text'} 
                                          thousandSeparator={true} 
                                          thousandsGroupStyle="lakh" 
                                          renderText={(value, props) => <div {...props}>{value}.00</div>} />
                                   </label>
                                  </h2>
                              </div>         
                     </div>
                    </div>
                   </div> 
               </Route> 
              ))}
                </Switch>
              </Router>
            
            
        </div>
      )
    }
  }
  
 export default CustomersList; 
  
  
  //************* Inbuilt  React CheckBox ***************** */ 
  const CheckboxTable = React.forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef
  
    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])
  
    return (
      <>
        <input type='checkbox' ref={resolvedRef} {...rest} />
      </>
    )
  })