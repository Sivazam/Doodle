import React, { useState ,useEffect, useRef} from "react"
import data from "./Data"
import {FaSistrix, FaMicrophone} from "react-icons/fa"
import Result from "./Result";



function SearchPage(props)
{
    
    const [inputs,setinputs] = useState(props.location.Swords? props.location.Swords : "");
    const [Res, setRes] = useState("");

    const value = props.location.Swords;

    
    
    
    const autocursor = useRef(null);
    
const Handlechange = (e) =>
{
    setinputs(e.target.value);

}

    const Home = () =>
    {
        props.history.push("/");
    }


    const Match = () =>
    {
       
        for(let i=0; i<data.length; i++){
            if(data[i].Sword.toLowerCase().includes(inputs.toLowerCase())){
                setRes(data[i]);
            
                break;
            }
            else{
                console.log("No match");
                setRes("");
            }
        }
        // data.filter(d => {
        //     if(d.Sword === inputs)
        //     {
        //         setRes(d);
        //     }
        //     else if(d.Sword !== inputs)
        //     {
        //         setRes("")
        //     }
        //   }); 
    }
    // const SearchArray =  (e) =>
    // {
    //  Match();
    // }

    const SearchArray1 = (e) => 
      {


    e.preventDefault();


     {inputs? Match() : props.history.push("/search")}
          
      }

    useEffect(() => {

        autocursor.current.focus()
        
        Match();
     
        
    }, [])

    

return <div >
                <div className = "Main-container">
                        <div className ="Sinput">
                            <div className ="Spage_logo">
                                <img src ="/images/Slogo.png" alt ="slogo" onClick= {Home}/>
                            </div>
                                <div className ="Spage-input ">
                                    <form  className = "search" onSubmit ={SearchArray1}>
                                        <input  className = "Sform" type= "text" placeholder={inputs} value = {inputs} onChange = {Handlechange} ref= {autocursor}></input>
                                            <FaSistrix className ="Sicon"/>
                                            <FaMicrophone className ="Micon"/>
                                    </form>
                                </div>
                            </div>  
                </div>

                        <div>
                            <Result   Res= {Res} inputs ={inputs} />
                        </div>
        </div>
      
    
}

export default SearchPage ;