import React from 'react'
import '../assests/css/compo.css';
import Profile from './Profile';
import {useState} from "react";

export default function StudentTable(props){
    const [stu,setStu]=useState(props.students[0]);
    const [fontSize, setFontSize] = useState('medium');
    const [theme, setTheme] = useState('light');

    const handleFontSizeChange = (size) => {
      setFontSize(size);
    };
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));  // Toggle between light and dark
      };
    
      const goToNextStudent = () => {
        const currentIndex = props.students.indexOf(stu);
        const nextIndex = (currentIndex + 1) % props.students.length;
        setStu(props.students[nextIndex]);
      };
    
      const goToPreviousStudent = () => {
        const currentIndex = props.students.indexOf(stu);
        const prevIndex = (currentIndex - 1 + props.students.length) % props.students.length;
        setStu(props.students[prevIndex]);
      };
    
      const goToFirstStudent = () => {
        setStu(props.students[0]);
      };
    
      const goToLastStudent = () => {
        setStu(props.students[props.students.length - 1]);
      };

    return(
        <div className="outerDiv">
            <div className={`font-${fontSize}`}>
            <div className="leftDiv">
            
    <div>
      <h6> Font Size  </h6>
      <button onClick={() => handleFontSizeChange('small')}>S</button>
      <button onClick={() => handleFontSizeChange('medium')}>M</button>
      <button onClick={() => handleFontSizeChange('large')}>L</button>
    </div> 
    <div>
            <button onClick={toggleTheme}>
              Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
          </div>
          <div>
            <button onClick={goToFirstStudent}>First</button>
            <button onClick={goToPreviousStudent}>Previous</button>
            <button onClick={goToNextStudent}>Next</button>
            <button onClick={goToLastStudent}>Last</button>
          </div>
                <table border="1">
                    <thead>
                        <tr>
                        <td> First name </td>
                        <td> Last name </td>
                        <td> Course </td>
                        <td> Country</td>
                        <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            props.students.map( student=>
                                <tr>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button id={student.studentId} onClick={()=>setStu(student)}>View</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
            <div className="rightDiv">
                        <Profile stu = {stu}/>
             </div>
        </div>
    );
}


