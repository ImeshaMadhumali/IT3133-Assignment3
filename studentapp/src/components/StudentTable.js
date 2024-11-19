import React from 'react'
import '../assests/css/compo.css';
import Profile from './Profile';
import {useState} from "react";

export default function StudentTable(props){
    const [stu,setStu]=useState(props.students[0]);
    const [fontSize, setFontSize] = useState('medium');

    const handleFontSizeChange = (size) => {
      setFontSize(size);
    };
    
    return(
        <div className="outerDiv">
            <div className="leftDiv">
            <div className={`font-${fontSize}`}>
    <div>
      <h6> Font Size  </h6>
      <button onClick={() => handleFontSizeChange('small')}>S</button>
      <button onClick={() => handleFontSizeChange('medium')}>M</button>
      <button onClick={() => handleFontSizeChange('large')}>L</button>
    </div> 
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
            <div className="rightDiv">
                        <Profile stu = {stu}/>
             </div>
        </div>
    );
}


