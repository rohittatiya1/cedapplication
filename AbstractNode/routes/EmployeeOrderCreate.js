//...................................get bi id suppliers create...........................*//

var OrderInsert={
    
        EmployeeOrderCreate :function(req,res,next)
        {
                 var EmpId=req.body.id;
                 var dte=req.body.date;
                 var stat=req.body.status;
                 
                
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL addOrder(?,?,?,?,?,?,?,?,?,?)',[EmpId,dte,stat],function(err,orderCrData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(orderCrData);
                    //  console.log(timeInMss);
                    res.send(orderCrData);
            
           

                    });

                });
        }
    

    
    
}

module.exports = OrderInsert;




/*var SuppliersD={
    
        suppliersGetById :function(req,res,next)
        {
                 var SupplierID=req.params.SupplierID;
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL SuppliersGetById(?)',[SupplierID],function(err,supplierData){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(supplierData);
                    //  console.log(timeInMss);
                    res.send(supplierData);
            
           

                    });

                });
        }
    
    
    
    
    
}

module.exports = SuppliersD;*/