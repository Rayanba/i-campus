import LowerCard from '../LowerCard';
import styles from "./InstructorsCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar , Print} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../../../../../data/dummy';


function InstructorsCardLower (){
    // const toolbarOptions = ['Search', 'Print'];

    return (
        <LowerCard
        title={'Intstructor'}
        options={<FaEllipsisV/>}
        body={
            <div className={styles.instructorCardLowerConatiner}>
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
export default InstructorsCardLower;