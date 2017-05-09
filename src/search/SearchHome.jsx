import React from 'react';

export default class SearchHome extends React.Component {
   render() {
      return (
         <html>
             <head>
               <title>Bhamiji Khadija</title>
               <base href="/" />
                 <link rel="stylesheet" href="./style.css" />
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
             </head>
             <body>
               <div>
                  <div>
                     <form className="form-inline" action="#" method="POST">
                        <input autocomplete="off" type="email" id="cf-email" name="email" className="form-control input-box" placeholder="Name" />
                        <button type="submit" class="btn btn-primary standard-button">
                           Check
                        </button>
                     </form>
                  </div>
               </div>
            </body>
         </html>
      );
   }
}
