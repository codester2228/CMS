import React, { useMemo,useState } from 'react'
import { useTable, useGlobalFilter,useAsyncDebounce,useRowSelect} from 'react-table'
import { format } from 'date-fns'
import "./CustomersStyle.css";


//  ***************************  Creating Data of the Row of the Table ***************************
const COLUMNS = [
  {Header: 'Id', accessor: 'id', disableFilters: true, sticky: 'center'},
  {Header: 'Client Name',accessor: 'Client_Name',sticky: 'center'},
  {Header: 'Mobile No', accessor: 'Mobile_No',sticky: 'center'},
  {Header: 'Shoot', accessor: 'Shoot',sticky: 'center'},
  {Header: 'Date',accessor: 'Date',sticky: 'center',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {Header: 'Quoted Amount',accessor: 'Quoted_Amount',sticky: 'center'},
  {Header: 'Status',accessor: 'Status',sticky: 'center'},
  {Header: 'Source',accessor: 'Source',sticky: 'center'},
]
// ***************************  Creating Data of the column of Table *************************************
const Row_Data = [
  {id:1,Client_Name:"Torie",   Mobile_No:"2465672576",Date:"1979-11-16T23:04:32Z",Shoot:"Pre/Post Wedding Shoot", Quoted_Amount:"bellTell",Status:"Confirmed", Source:"Website"},
  {id:2,Client_Name:"Kordula", Mobile_No:"7896541235",Date:"1997-08-06T21:07:34Z",Shoot:"Birthday Shoot",         Quoted_Amount:"80,6112", Status:"Cancelled", Source:"WedmeGood"},
  {id:3,Client_Name:"Vikki",   Mobile_No:"8659745896",Date:"2016-04-28T16:59:19Z",Shoot:"Baby Shower Shoot",      Quoted_Amount:"7,256",   Status:"Pending",   Source:"Weddingwire"},
  {id:4,Client_Name:"Burnaby", Mobile_No:"8469752389",Date:"2017-10-25T08:05:50Z",Shoot:"Equatorial Guinea",      Quoted_Amount:"42,596",  Status:"Confirmed", Source:"Referral"},
  {id:5,Client_Name:"Teddie",  Mobile_No:"7855964213",Date:"2015-04-20T11:45:34Z",Shoot:"Model Portfolio Shoot",  Quoted_Amount:"39,596",  Status:"Cancelled", Source:"Website"},
  {id:6,Client_Name:"Torie",   Mobile_No:"2465672576",Date:"1979-11-16T23:04:32Z",Shoot:"Pre/Post Wedding Shoot", Quoted_Amount:"6,200",   Status:"Confirmed", Source:"Website"},
  {id:7,Client_Name:"Kordula", Mobile_No:"7896541235",Date:"1997-08-06T21:07:34Z",Shoot:"Birthday Shoot",         Quoted_Amount:"80,6112", Status:"Cancelled", Source:"WedmeGood"},
  {id:8,Client_Name:"Vikki",   Mobile_No:"8659745896",Date:"2016-04-28T16:59:19Z",Shoot:"Baby Shower Shoot",      Quoted_Amount:"7,256",   Status:"Pending",   Source:"Weddingwire"},
  {id:9,Client_Name:"Burnaby", Mobile_No:"8469752389",Date:"2017-10-25T08:05:50Z",Shoot:"Equatorial Guinea",      Quoted_Amount:"42,596",  Status:"Confirmed", Source:"Referral"},
  {id:10,Client_Name:"Teddie",  Mobile_No:"7855964213",Date:"2015-04-20T11:45:34Z",Shoot:"Model Portfolio Shoot",  Quoted_Amount:"39,596", Status:"Cancelled", Source:"Website"},
  {id:1,Client_Name:"Torie",   Mobile_No:"2465672576",Date:"1979-11-16T23:04:32Z",Shoot:"Pre/Post Wedding Shoot", Quoted_Amount:"6,200",   Status:"Confirmed", Source:"Website"},
  {id:2,Client_Name:"Kordula", Mobile_No:"7896541235",Date:"1997-08-06T21:07:34Z",Shoot:"Birthday Shoot",         Quoted_Amount:"80,6112", Status:"Cancelled", Source:"WedmeGood"},
  {id:3,Client_Name:"Vikki",   Mobile_No:"8659745896",Date:"2016-04-28T16:59:19Z",Shoot:"Baby Shower Shoot",      Quoted_Amount:"7,256",   Status:"Pending",   Source:"Weddingwire"},
  {id:4,Client_Name:"Burnaby", Mobile_No:"8469752389",Date:"2017-10-25T08:05:50Z",Shoot:"Equatorial Guinea",      Quoted_Amount:"42,596",  Status:"Confirmed", Source:"Referral"},
  {id:5,Client_Name:"Teddie",  Mobile_No:"7855964213",Date:"2015-04-20T11:45:34Z",Shoot:"Model Portfolio Shoot",  Quoted_Amount:"39,596",  Status:"Cancelled", Source:"Website"},
  {id:6,Client_Name:"Torie",   Mobile_No:"2465672576",Date:"1979-11-16T23:04:32Z",Shoot:"Pre/Post Wedding Shoot", Quoted_Amount:"6,200",   Status:"Confirmed", Source:"Website"},
  {id:7,Client_Name:"Kordula", Mobile_No:"7896541235",Date:"1997-08-06T21:07:34Z",Shoot:"Birthday Shoot",         Quoted_Amount:"80,6112", Status:"Cancelled", Source:"WedmeGood"},
  {id:8,Client_Name:"Vikki",   Mobile_No:"8659745896",Date:"2016-04-28T16:59:19Z",Shoot:"Baby Shower Shoot",      Quoted_Amount:"7,256",   Status:"Pending",   Source:"Weddingwire"},
  {id:9,Client_Name:"Burnaby", Mobile_No:"8469752389",Date:"2017-10-25T08:05:50Z",Shoot:"Equatorial Guinea",      Quoted_Amount:"42,596",  Status:"Confirmed", Source:"Referral"},
  {id:10,Client_Name:"Teddie",  Mobile_No:"7855964213",Date:"2015-04-20T11:45:34Z",Shoot:"Model Portfolio Shoot",  Quoted_Amount:"39,596",  Status:"Cancelled", Source:"Website"}]


// {/********************** Partners Table ****************** *\}


function CustomerTable(){
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Row_Data, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
//    selectedFlatRows,
  } = useTable({
    columns,
    data
  }, useGlobalFilter,
  useRowSelect,
  hooks => {
    hooks.visibleColumns.push(columns => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <CheckboxTable {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => <CheckboxTable {...row.getToggleRowSelectedProps()} />
      },
      ...columns
    ])
  })
const { globelFilter} = state
  return (
    <>
    <CustomerFilter filter={globelFilter} setFilter={setGlobalFilter} />
    <div className="PartnersTable">
    <table {...getTableProps()}>
        <thead >
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} >{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{textAlign: 'center'}}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} >
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()} className={cell.render('Cell')}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
     {/* **************** path for the selected rows, currently not used ************ */}
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre> */}
    </>
  )
}
export default CustomerTable;


// *********************** Leads -> partners  part- >  table filter and top header **************************//
const CustomerFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <div className="PartnerTopHed">
    
      <select value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);}}  className="PartnersType"> 
          
          <option className="CustypeContents" value="" >All Partners</option>
          <option className="CustypeContents" value="Confirmed" >Confirmed Partners </option>
          <option className="CustypeContents" value="Pending" >Pending Partners</option>
          <option className="CustypeContents" value="Cancelled" >Cancelled Partners</option>
          <option className="CustypeContents" value="WedmeGood" >Partners WedmeGood </option>
          <option className="CustypeContents" value="Weddingwire" >Partners from Weddingwire</option>
          <option className="CustypeContents" value="Website" >Partners from Websites</option>
          <option className="CustypeContents" value="Referral" >Referrals Partners </option>
          <option className="CustypeContents" value="Wedding Photography" >Wedding Photography&Cinematography</option>
          <option className="CustypeContents" value="Pre/Post Wedding Shoot" >Pre/Post Wedding Shoot</option>
          <option className="CustypeContents" value="Birthday Shoot" >Partners for Birthday Shoot</option>
          <option className="CustypeContents" value="Baby Shower Shoot" >Partners for Baby Shower Shoot</option>
          <option className="CustypeContents" value="Model Portfolio Shoot" >Partners for Model Portfolio Shoot </option>
          </select>

    </div>
  )
};

// *********** Check Box function for the partners *******************
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