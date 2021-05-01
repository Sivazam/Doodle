import React from "react"


function Result({Res,inputs} )
{
  

return(
   
    <div > 
        {Res!=="" && <div className ="ResultTab">
                        <div className ="Link">{Res.url.slice(0,30)}</div>
                        <div className ="Title" > <a href={Res.url} >{Res.Sword}</a> </div>
                        <div className= "Description"> <p>{Res.note}</p></div>
        </div>}
        {Res==="" && <div className ="NoResultTab">
            
                        <div className ="S1" > Your Search - <span className = "Nmatch_word">{inputs}  </span>- did not match any documents.</div>
                        <span className ="S2">Suggestions:</span>
                        <ul className = "sugList" >
                            <li>Make sure that all words are spelled correctly.</li>
                            <li>Try different keywords.</li>
                            <li>Try more general keywords.</li>
                        </ul>
                        
                        
                      
        </div>}
    </div>
)




}

export default Result;
