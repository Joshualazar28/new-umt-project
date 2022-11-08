import {useState} from 'react';
import {Link} from 'react-router-dom';
const Importants = ({ important,user }) => {
    const [imps, setImps] = useState([
     
        
    ])
    return ( 
        <div className="importants">
            <div className="shortouter">
                {important.map(important =>(
                    <div className="impPreview" key={important._id}>
                        <Link to={`/lfblogs/${important._id}/${user}`}><h4>{important.title.toUpperCase()}</h4>
          <p><b>Publish Date:</b> {important.date}</p>
            
          </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Importants;