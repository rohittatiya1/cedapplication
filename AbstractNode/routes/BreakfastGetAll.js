//......................................get all from shippers table............................................/


var breakfast=
    {
        BreakfastGetAll : function(req,res,next)
        {
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL getBreakfastlist()',function(err,employee_D) {

                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  breakfastData=JSON.stringify(employee_D);
          
                    var epr=JSON.parse(breakfastData);
                    console.log(epr);
                    
                    
                    
                     res.send(employee_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = breakfast;