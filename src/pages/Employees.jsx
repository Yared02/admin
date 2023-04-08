import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />

      <GridComponent id='gridcomp' dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width='auto'>
        <ColumnsDirective>
        {/* ordersGrid is comming from dummy */}
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees