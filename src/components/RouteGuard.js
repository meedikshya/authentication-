import React from 'react';
import { Route} from 'react-router-dom';
 
export const RouteGuard = ({ component: Component, ...rest }) => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
      
       return flag
   }
 
   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Component {...props} />
                   :
                   <redirect to={{ pathname: '/login' }} />
           )}
       />
   );
};
 
export default RouteGuard;