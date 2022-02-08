var rows=[];
    var html;
    function myFunction()
   {
           var pId = document.getElementById("productId").value;
           var pName = document.getElementById("productName").value;
           var pPrice = document.getElementById("productPrice").value;
           if (rows.length===0)
           {
            cArray(pId,pName,pPrice); 
           }
           else{
            checkId(pId,pName,pPrice);
           }
          
          
          
    }
        function checkId(PID,PNAME,PPRICE)
        {
            for (var j = 0; j < rows.length; j++) 
              { console.log(rows)
                 if(rows[j].ID===PID)
                 {
                    document.getElementById("output").innerHTML = html + "id alread exist" ;
                   return ;
                 }
                 
                 
              }
              cArray(PID,PNAME,PPRICE);
        }


       function cArray(pAId,pAName,pAPrice)
       {   
            rows.push({ID:pAId, Name:pAName, Price:pAPrice});
            console.log(rows);
            html = "<table >";
                html+="<tr><th>product ID</th><th>product name</th><th>product price</th></tr>";
            for (var i = 0; i < rows.length; i++) 
            {
              html+="<tr>";
              html+="<td>"+rows[i].ID+"</td>";
              html+="<td>"+rows[i].Name+"</td>";
              html+="<td>"+rows[i].Price+"</td>";
              html+="</tr>";

            }
              html+="</table>";
              document.getElementById("output").innerHTML = html;
              console.log(html);


       }
       