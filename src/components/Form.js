import React,{useState} from 'react';

const Form = ({dataConsult}) => {
const [search, saveSearch]=useState({
    city:'',
    country:''
})
const handleChange = e =>{
saveSearch({...search, [e.target.name]:e.target.value})
}

const weatherConsult = e =>{
    e.preventDefault()
    dataConsult(search)
}

    return (
        <form onSubmit={weatherConsult}>
            <div className="input-field col s12">
                <input type="text" name='city' id='city' onChange={handleChange}/>
                <label htmlFor="ciudad"> Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country" onChange={handleChange} >
                    <option value="">-- Select a Countriy -- </option>  
                    <option value="US">United State </option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>  
                    <option value="CO">Colombia</option>  
                    <option value="CR">Costa Rica</option>  
                    <option value="ES">Spain</option>  
                    <option value="PE">Peru</option>  
                    <option value="VE">Venezuela</option>  
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className='waves-effect waves-light btn-large btn-block yellow accent-4' value="Find Weather"/>
            </div>
        </form>
    );
};

export default Form;