
const Reason  = () => {
    return ( 
        <div className="im-rejection">
            <div className="im-rejectionText">
                <textarea className="im-reason" rows="20" cols="80 " placeholder="Write rejection reason here"></textarea>
            </div>

            <div className="im-submit">
                <button type="submit" className="im-submit-reason">Submit</button>
            </div>
            
        </div>
     );
}
 
export default Reason ;