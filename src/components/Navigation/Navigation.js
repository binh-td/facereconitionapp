import React from 'react'

const Navigation = ({ isLoggedIn,onRouteChange }) => {      
    if (isLoggedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('logout')}>Sign Out</p>
            </nav>
        )
    }else if(!isLoggedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('login')}>Login</p>
                <p className='f3 link dim black underline pa3 pointer' onClick={()=>onRouteChange('register')}>Register</p>
            </nav>
        ) 
    }
        
    
}

export default Navigation