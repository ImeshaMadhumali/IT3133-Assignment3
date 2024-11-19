import '../assest/css/compo.css';

export default function StudentTable(props){
    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table>
                    <thead>
                        <tr>
                        <td> First name </td>
                        <td> Last name </td>
                        <td> Course </td>
                        <td> Country</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}


