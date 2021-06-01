import { format } from 'date-fns'

const COLUMNS = [
    {Header: 'Client Name',accessor: 'Client_Name',sticky: 'center'},
    {Header: 'Mobile No', accessor: 'Mobile_No',sticky: 'center'},
    {Header: 'Shoot', accessor: 'Shoot',sticky: 'center'},
    {Header: 'Date',accessor: 'Date',sticky: 'center',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
    },
    {Header: 'Quoted Amount',accessor: 'Quoted_Amount',sticky: 'center'},
    {Header: 'Status',accessor: 'Status',sticky: 'center',className: "frozen",headerClassName: "frozen"
    },
    {Header: 'Source',accessor: 'Source',sticky: 'center'},
  ]

  export default COLUMNS;