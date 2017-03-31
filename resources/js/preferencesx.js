//Please enter your personal details page ---------------------------------------------------------------------------------
//JQuery ------------------------------------------------------------------------------------------------------------------

function GetSelectedItem(){
                var radBtns = document.getElementsByName('RadioGroup1');
                for(i=0; i<radBtns.length; i++){
                    if(radBtns[i].checked){
                        document.forms[0].action = radBtns[i].value;
                        alert(radBtns[i].value);
                        i=radBtns.length;
                    }
                }
                return true; //allows the form to be submitted
            }

