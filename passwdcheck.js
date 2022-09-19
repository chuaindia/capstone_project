function PwdStrength(oV) {
            //alert("hello");
            //alert(oV + ".");
            var res = EvalPwdStrength(oV); //does not work, why?
            //alert("res = " + res);

            //testing:
            var id1 = ContentPlaceHolder1_LabelPasswordCheck;
            //alert(id1.ID + "");
            //alert(id1);
            //alert(id1.value + "");
            var test2 = ContentPlaceHolder1_pswWeak;
            //alert(test2.value);

            var id1 = ContentPlaceHolder1_LabelPasswordCheck;
            //alert(id1);

            switch (res) {
                case 0:
                    getid("ContentPlaceHolder1_LabelPasswordCheck").innerHTML = "";
                    break;
                case 1:
                    getid("ContentPlaceHolder1_LabelPasswordCheck").innerHTML = getid("ContentPlaceHolder1_pswWeak").value;
                    getid("ContentPlaceHolder1_LabelPasswordCheck").style.color = "red";
                    break;
                case 2:
                    getid("ContentPlaceHolder1_LabelPasswordCheck").innerHTML = getid("ContentPlaceHolder1_pswMedium").value;
                    getid("ContentPlaceHolder1_LabelPasswordCheck").style.color = "brown";
                    break;
                case 3:
                    getid("ContentPlaceHolder1_LabelPasswordCheck").innerHTML = getid("ContentPlaceHolder1_pswStrong").value;
                    getid("ContentPlaceHolder1_LabelPasswordCheck").style.color = "green";
                    break;
                case 4:
                    getid("ContentPlaceHolder1_LabelPasswordCheck").innerHTML = getid("ContentPlaceHolder1_pswBest").value;
                    getid("ContentPlaceHolder1_LabelPasswordCheck").style.color = "green";
                    break;
            }
        }