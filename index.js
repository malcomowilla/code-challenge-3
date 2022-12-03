 function getSpeed()
              {
                var value = document.form.speed.value
                if(isNaN(value)){
                    alert("input should only include numbers");
                      return false;
                }
                  if(value.length=="") {
                      alert("messagebox is empty");
                      return false;
                  }
                  if (parseInt(value)<0 || parseInt(value)>240) {
                    alert("values should range between 0 - 240");
                      return false;
                  }
                  switch (true) {
                    case (value<=70):
                        alert("OK")
                        break;
                    default:
                         getDemerits(value);
                        break;
                  }
                  return false;
              }
             function getDemerits(speed){
                var extra_kmh = parseFloat(speed)-70.0;
                var demerits = extra_kmh/5;
                alert(Math.round(demerits));
                return false;
             }