import React, {useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, AddStudent, ListStudent, AddInstructor, ListInstructor,AddStuff, ListStuff, AddBook, ListBook} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import EditStudent from './pages/EditStudent';
import './App.css';
import StudAttendas from './pages/AddAttendas';
import  AddCourse from './pages/AddCourse';
import Sample from  './pages/addAttendass'
import AddNums from './pages/Result';
import InstructorAction from'./pages/InstructorAttendas';
import EditInstructor from'./pages/Edit';
import CourseInstructor from './pages/CourseInstructor';
import InstAttendas from'./pages/AddIAttendas';
import EditStaff from './pages/EditStaff';
import StaffAttendas from './pages/StaffAttendas'
//comment

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings,currentColor,currentMode } = useStateContext();

    // const activeMenu = true;
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                <TooltipComponent content='Settings' position='Top'>
                    <button type='button' onClick={() => setThemeSettings(true)} className='text-3xl p-3 hover: drop-shadow-xl hover: bg-light-gray text-white' style={{background: currentColor, borderRadius: '50%'}}>
                        <FiSettings />
                    </button>

                </TooltipComponent>
                

            </div>

            {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar />
                </div>
            ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'>
                    <Sidebar />
                </div>
            )}

            <div className={ `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md: ml-72' : 'flex-2'}`}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar />

                </div>

            <div>
                {themeSettings && <ThemeSettings />}


                <Routes>
                    {/* Dashborad */}
                    <Route path='/' element={<Ecommerce/>} />
                    <Route path='/ecommerce' element={<Ecommerce/>} />

                    {/* Pages */}
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/employees' element={<Employees/>} />
                    <Route path='/customers' element={<Customers/>} />
                    <Route path='/student' element={<Customers/>} />

                    {/* student */}

                    <Route path='/add-student' element={<AddStudent/>} />
                    <Route path='/list-student' element={<ListStudent/>} />
                    <Route path='/EditStudent/:id' element={<EditStudent/>} />
                    <Route path='/AddAttendas' element={<StudAttendas/>} />
                    <Route path="/AddCourse/:id" element={<AddCourse />}></Route>
                    <Route path="/addAttendass/:id" element={<Sample/>}></Route>
                    <Route path="/Result/:id" element={<AddNums/>}></Route>

                    {/* Instructor */}

                    <Route path='/add-instructor' element={<AddInstructor/>} />
                    <Route path='/list-instructor' element={<ListInstructor/>} />
                    <Route path="/edit/:id" element={<EditInstructor />}></Route>
                    <Route path="InstructorAction" element={<InstructorAction />}></Route>
                    <Route path="/AddIattendas/:id" element={<InstAttendas />}></Route>
                    <Route path="/CourseInstructor/:id" element={<CourseInstructor />}></Route>
                    

                    {/* Add Stuff */}

                    <Route path='/add-stuff' element={<AddStuff/>} />
                    <Route path='/list-stuff' element={<ListStuff/>} />
                    <Route path="/EditStaff/:id" element={<EditStaff />}></Route>
                    <Route path="/AddAttendas" element={<StudAttendas />}></Route>

                    {/* Library */}
                    <Route path='/add-book' element={<AddBook />} />
                    <Route path='/list-book' element={<ListBook />} />

                    {/* Apps */}

                    <Route path='/kanban' element={<Kanban/>} /> 
                    <Route path='/editor' element={<Editor/>} /> 
                    <Route path='/calendar' element={<Calendar/>} /> 
                    <Route path='/color-picker' element={<ColorPicker/>} /> 

                    {/* Charts */}
                    <Route path='/line' element={<Line/>} /> 
                    <Route path='/area' element={<Area/>} /> 
                    <Route path='/bar' element={<Bar/>} /> 
                    <Route path='/pie' element={<Pie/>} /> 
                    <Route path='/financial' element={<Financial/>} /> 
                    <Route path='/color-mapping' element={<ColorMapping/>} /> 
                    <Route path='/pyramid' element={<Pyramid/>} /> 
                    <Route path='/stacked' element={<Stacked/>} /> 
                </Routes>
            </div>
            <Footer />
            
            </div>


        </div>
        </BrowserRouter>
    </div>
  )
}

export default App