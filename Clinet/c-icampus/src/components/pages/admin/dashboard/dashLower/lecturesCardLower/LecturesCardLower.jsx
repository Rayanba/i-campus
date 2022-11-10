import LowerCard from '../LowerCard';
import style from "./LecturesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar , Print} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../../../../../data/dummy';


function LecturesCardLower (){
    return (
        <LowerCard
        title={'Lectures Lower'}
        options={<FaEllipsisV/>}
        body={
            <div className={style.studentsCardLowerConatiner}>
                <div>
                    <GridComponent
                    dataSource={employeesData}
                    width="auto"
                    allowPaging
                    allowSorting
                    pageSettings={{ pageCount: 5 }}
                    toolbar={['Search', 'Print']}
        >
                    <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                    </ColumnsDirective>
                    <Inject services={[Search, Page, Toolbar, Print]} />

                    </GridComponent>
                </div>

            </div>
        
        }
        />
    )
}
export default LecturesCardLower;