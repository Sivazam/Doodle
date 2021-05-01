import React , { useState , useRef, useEffect} from "react"
import {FaSistrix, FaMicrophone} from "react-icons/fa"



function Main(props) {


    
    const [Swords,setSwords] = useState("");



    const autocursor = useRef(null);
    useEffect(() => autocursor.current.focus() );

const Keyword = (e) =>
{

setSwords(e.target.value);

}

const handleSubmit = (e) =>
{
  {Swords? props.history.push({pathname: "/search", Swords}) : props.history.push("/") }

    e.preventDefault();
}


  return (
    <div className="Main">

      <div className="sub-cointainer">

            <div className = "Main_logo">
            
                <img  height= "92px" src ="/images/Mainlogo.png" alt ="Logo"></img>

            </div>

      <form className = "search" onSubmit = {handleSubmit}>
       
          <input onChange = {Keyword} className = "inputbar" type= "text" value = {Swords} ref= {autocursor}></input>
          
                <div className = "Searchbtn"> 
                    <input   type ="submit" className = "Sbtn" value ="Google Search"></input>
                    <input  type ="submit" className = "Sbtn" value ="I'm Feeling Lucky"></input>
                   
               </div>
               <FaSistrix className ="Sicon"/>
               <FaMicrophone className ="Micon"/>
      </form>


      </div>
    </div>
  );
};

export default Main;
