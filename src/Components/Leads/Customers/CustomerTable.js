import React, { useMemo,useState } from 'react'
import { useTable, useGlobalFilter,useAsyncDebounce,useRowSelect} from 'react-table'
import COLUMNS from './ColumnData'
import "./CustomersStyle.css";
import AddNewCustomer from './NewCustomer'
import Row_Data from './RowData';

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
    <AddNewCustomer/>
    <CustomerFilter filter={globelFilter} setFilter={setGlobalFilter} />
    <div className="CustomerTable">
      <table {...getTableProps()}  >
        <thead >
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className={column.render('Header')}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} >
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
            
                   return (
                       <td
                           {...cell.getCellProps()}
                       >
                         <div style={{color: cell.render("Cell") === "Date" ? "#fff":"#595959"}}>{cell.render('Cell')}</div>
                       </td>
                   )
                 })}
               </tr>
            )
          })}
        </tbody>
      </table> </div>
      {/* ******************** path for the selected row in table, currently not used *********************** */}
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



// ********************** leads -> Customer - table Filter and top header ********************************//
const CustomerFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <div className="CustomerTopHed">
      <select value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);}}  className="CustomersType"> 
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

    </div>
  )
};


// **********************************  Defining CheckBox for the Customer Table ****************************************** // 
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



