import React, { Component, useState } from "react";
import "./NewCustomer.css";

import { BiRupee } from "react-icons/bi";

const ListData = [
  {
    // Id: "Srikanth",
    // Client_Name: "Srikanth",
    // Mobile_No: "2465672576",
    // Date: "1979-11-16",
    // Shoot: "Pre/Post Wedding Shoot",
    // Quoted_Amount: (
    //   <div className="Quoted_AmountStyle" style={{ color: "#5976E3" }}>
    //     <div className="RupeeIcon">
    //       <BiRupee />
    //     </div>
    //     96,256
    //   </div>
    // ),
    // Status: "Confirmed",
    // Source: "Website",
    // Color: true,
    // path: "/Leads/Customer/details/Srikanth",
    // Email: "Srikanth@gmail.com",
    QuotationDetails: [
      {
        id: 0,
        EventName: "Pre-Wedding",
        PhotoGrapher1: "Candid Photographer",
        PhotoGrapher2: "Traditional Videographer",
        PhotoGrapher3: "Traditional Photographer",
        PhotoGrapher4: "Cinematographer",
        PhotoGrapher5: "Drone",
        PhotoGrapher6: "Web Live Streaming",
        PhotoGrapher7: "LED Wall 8x12",
        DateAndDay: "Sun 07-Jan-2021",
        TimeDuration: "11am - 5pm (06 hours)",
        Location: "Begumpet, Hyderabad",
        Rate: "44000",
        tax: "9%",
        GSTamount: "3350",
        Amount: "44000",
        Count: "1",
      },
      {
        id: 1,
        EventName: "Engagement",
        PhotoGrapher1: "Candid Photographer",
        PhotoGrapher2: "Traditional Videographer",
        PhotoGrapher3: "Traditional Photographer",
        PhotoGrapher4: "Cinematographer",
        PhotoGrapher5: "Drone",
        PhotoGrapher6: "Web Live Streaming",
        PhotoGrapher7: "LED Wall 8x12",
        DateAndDay: "Fri 020-Jan-2021",
        TimeDuration: "11am - 5pm (06 hours)",
        Location: "Begumpet, Hyderabad",
        Rate: "24000.00",
        tax: "9%",
        GSTamount: "3350",
        Amount: "54000",
        Count: "1",
      },
    ],
  },
];
// function Table() {
//   const [PhotoGrapher1Count, setPhotoGrapher1Count] = useState("0");
//   return (

//   );
// }

class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddNewDisp: "true",
      Client_FirstName: "",
      Client_LastName: "",
      Phone_No: "",
      Email_Id: "",
      Client_Source: "",
      Select_Shoot: "",
      prewedding: false,
      engagement: false,
      haldi: false,
      mehendi: false,
      wedding: false,
      reception: false,
      others: false,
      PhotoGrapher1Count: "0",
      rate1: "0",
      servicesBox: false,
    };
  }

  DisplyAddNewCustomer() {
    this.setState({ AddNewDisp: !this.state.AddNewDisp });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "Phone_No" || nam === "rate1") {
      if (Number(val) || val === "") {
        this.setState({ [nam]: val });
      }
    }
  };

  handleSubmit = (event) => {
    const { Client_FirstName, Client_LastName } = this.state;
    const NewData = {
      Client_Name: `${Client_FirstName} ${Client_LastName}`,
      Phone_No: this.state.Phone_No,
      Email_Id: this.state.Email_Id,
      Client_Source: this.state.Client_Source,
      Select_Shoot: this.state.Select_Shoot,
    };
    console.log(NewData);
    event.preventDefault();
  };
  render() {
    let AddingNewCustomer = this.state.AddNewDisp
      ? "AddingNewCustomer"
      : "AddingNewCustomer01";
    return (
      <div>
        <div
          className="AddNewCustomerBtn"
          onClick={this.DisplyAddNewCustomer.bind(this)}
        >
          {" "}
          <h1>+ New Customer</h1>
        </div>
        <div className={AddingNewCustomer}>
          <div className="CustomerHeader">
            <div className="CustomerHeaderName">New Customer</div>
            <div
              className="CustomerHeaderClose"
              onClick={this.DisplyAddNewCustomer.bind(this)}
            >
              {" "}
              <h1>+</h1>
            </div>
          </div>
          <span className="UnderLineHeader"></span>

          <div className="CustomerForm">
            <div className="FormBody" style={{ disply: "none" }}>
              <form onSubmit={this.handleSubmit} classname="FormBody">
                <div className="InputClientname">
                  <label className="InfoInput">Client Name :</label>
                  <input
                    type="text"
                    name="Client_FirstName"
                    onChange={this.myChangeHandler}
                    className="TypeInput"
                    placeholder="First Name"
                  />

                  <label className="InfoInput CilentLastName">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    name="Client_LastName"
                    onChange={this.myChangeHandler}
                    className="TypeInput LastName"
                    placeholder="Last Name"
                  />
                </div>

                <div className="InputPhoneNo">
                  <label className="InfoInput">Phone No :</label>
                  <input
                    type="text"
                    name="Phone_No"
                    onChange={this.myChangeHandler}
                    className="TypeInput"
                    value={this.state.Phone_No}
                  />
                </div>
                <div className="InputEmailId InputPhoneNo">
                  <label className="InfoInput">Email Id :</label>
                  <input
                    type="text"
                    name="Email_Id"
                    onChange={this.myChangeHandler}
                    className="TypeInput"
                  />
                </div>
                <div className="InputClientSource InputPhoneNo">
                  <label className="InfoInput">Client Source:</label>
                  <select
                    name="Client_Source"
                    onChange={this.myChangeHandler}
                    className="TypeInput"
                  >
                    <option name="Website">Website</option>
                    <option name="WedmeGood">WedmeGood</option>
                    <option name="Weddingwire">Weddingwire</option>
                    <option name="Referral">Referral</option>
                  </select>
                </div>
                <div className="InputSelectShoot InputPhoneNo">
                  <label className="InfoInput">Select Shoot :</label>
                  <select
                    name="Select_Shoot"
                    onChange={this.myChangeHandler}
                    className="TypeInputSelectShoot"
                  >
                    <option name="react">Pre/Post Wedding Shoot</option>
                    <option name="angular">Customer for Birthday Shoot</option>
                    <option name="vue">Customer for Baby Shower Shoot</option>
                    <option name="vue">
                      Customer for Model Portfolio Shoot
                    </option>
                  </select>
                </div>
                <button type="submit" className="SubmitButton">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="rectangleQuotation">
            <div className="quotationDetails">
              <p className="quotationDetailsText">Quotation Details</p>
            </div>

            <div
              className={`prewedding ${
                this.state.prewedding ? "selected" : ``
              }`}
              onClick={() => {
                !this.state.prewedding &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Pre-Wedding",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ prewedding: true });
              }}
            >
              <p className="preweddingText">Pre-Wedding</p>
            </div>
            <div
              className={`engagement ${
                this.state.engagement ? "selected" : ``
              }`}
              onClick={() => {
                !this.state.engagement &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Engagement",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ engagement: true });
              }}
            >
              <p className="engagementText">Engagement</p>
            </div>
            <div
              className={`haldi ${this.state.haldi ? "selected" : ``}`}
              onClick={() => {
                !this.state.haldi &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Haldi",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ haldi: true });
              }}
            >
              <p className="haldiText">Haldi</p>
            </div>
            <div
              className={`mehendi ${this.state.mehendi ? "selected" : ``}`}
              onClick={() => {
                !this.state.mehendi &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Mehendi",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ mehendi: true });
              }}
            >
              <p className="mehendiText">Mehendi</p>
            </div>
            <div
              className={`wedding ${this.state.wedding ? "selected" : ``}`}
              onClick={() => {
                !this.state.wedding &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Wedding",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ wedding: true });
              }}
            >
              <p className="weddingText">Wedding</p>
            </div>
            <div
              className={`reception ${this.state.reception ? "selected" : ``}`}
              onClick={() => {
                !this.state.reception &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Reception",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                this.setState({ reception: true });
              }}
            >
              <p className="receptionText">Reception</p>
            </div>
            <div
              className={`others ${this.state.others ? "selected" : ``}`}
              onClick={() => {
                !this.state.others &&
                  ListData[0].QuotationDetails.push({
                    id: ListData[0].QuotationDetails.length + 1,
                    EventName: "Others",
                    PhotoGrapher1: "Candid Photographer",
                    PhotoGrapher2: "Traditional Videographer",
                    PhotoGrapher3: "Traditional Photographer",
                    PhotoGrapher4: "Cinematographer",
                    PhotoGrapher5: "Drone",
                    PhotoGrapher6: "Web Live Streaming",
                    PhotoGrapher7: "LED Wall 8x12",
                    DateAndDay: "Sun 07-Jan-2021",
                    TimeDuration: "11am - 5pm (06 hours)",
                    Location: "varanasi",
                    Rate: "",
                    tax: "",
                    GSTamount: "",
                    Amount: "",
                    Count: "",
                  });
                console.log(ListData[0].QuotationDetails);
                this.setState({ others: true });
              }}
            >
              <p className="othersText">Others</p>
            </div>
          </div>
          <div>
            <div className="QuotationDetailTableNewCustomer">
              <table className="TableBody">
                <thead style={{ height: "41px" }}>
                  <tr style={{ padding: "0px", margin: "0px" }}>
                    <th
                      rowspan={2}
                      style={{
                        width: "170px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      EVENT DETAILS
                    </th>
                    <th
                      rowspan={2}
                      style={{
                        width: "125px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {" "}
                      EVENT DATE & TIME
                    </th>
                    <th
                      rowspan={2}
                      style={{
                        width: "122px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      LOCATION
                    </th>
                    <th
                      rowspan={2}
                      style={{
                        width: "78px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      RATE
                    </th>

                    <th
                      rowSpan="2"
                      style={{
                        width: "74px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      Tax
                    </th>
                    <th
                      rowspan={2}
                      style={{
                        width: "84px",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {" "}
                      AMOUNT
                    </th>
                  </tr>
                  <tr style={{ height: "5px" }}></tr>
                </thead>

                <tbody>
                  {ListData[0].QuotationDetails.map((AmtDetails) => (
                    <tr
                      classname="TableContent"
                      key={AmtDetails.id}
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      <td>
                        <div>{AmtDetails.EventName}</div>
                        <div
                          style={{
                            display: "flex",
                            flexFlow: "row",
                          }}
                          onClick={() => {
                            this.setState({
                              servicesBox: !this.state.servicesBox,
                            });
                          }}
                        >
                          {" "}
                          <h1>Select Services</h1>{" "}
                        </div>
                        {/* checkbox modal for services */}
                        <div
                          style={{ display: this.state.servicesBox && "none" }}
                        ></div>

                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher1 === "" ? "none" : "flex",
                            flexFlow: "row",
                          }}
                        >
                          {" "}
                          <h1>{AmtDetails.PhotoGrapher1}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              onChange={(event) => {
                                // this.setState({
                                //   PhotoGrapher1Count: event.target.value,
                                // });
                                AmtDetails.Count = event.target.value;
                                console.log(AmtDetails);
                                console.log(ListData[0].QuotationDetails);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher2 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher2}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });
                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher3 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher3}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });
                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher4 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher4}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });
                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher5 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher5}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });
                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher6 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher6}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });
                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                        <div
                          style={{
                            display:
                              AmtDetails.PhotoGrapher7 === "" ? "none" : "flex",
                          }}
                        >
                          <h1>{AmtDetails.PhotoGrapher7}</h1>{" "}
                          <h2 style={{ float: "right" }}>
                            <input
                              className="photographerCount"
                              type="number"
                              name="PhotoGrapher1Count"
                              min="0"
                              max="100"
                              step="1"
                              value={this.state.PhotoGrapher1Count}
                              onChange={(event) => {
                                this.setState({
                                  PhotoGrapher1Count: event.target.value,
                                });

                                console.log(this.state.PhotoGrapher1Count);
                              }}
                            />
                          </h2>
                        </div>
                      </td>
                      <td>
                        {" "}
                        {AmtDetails.DateAndDay} <br /> {AmtDetails.TimeDuration}
                      </td>
                      <td> {AmtDetails.Location}</td>
                      <td>
                        {" "}
                        <input
                          className="rateText"
                          type="text"
                          name="rate1"
                          value={this.state.rate1}
                          onChange={this.myChangeHandler}
                        />
                      </td>
                      <td>
                        {" "}
                        <select name="services" className="">
                          <option value="0">GST0 [0%]</option>
                          <option value="5">GST5 [5%]</option>
                          <option value="12">GST12 [12%]</option>
                          <option value="18">GST18 [18%]</option>
                          <option value="24">GST24 [24%]</option>
                        </select>
                      </td>
                      <td> {AmtDetails.Amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCustomer;
