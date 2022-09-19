

    var myVar;

    $(document).ready(function () {
        console.log("ready!");
    });

   

    function pageLoad(sender, args) {

        //alert('ready');

        $(document).ready(function () {

            console.log("ready! (2)");
            //alert('do this');
            var i = 0;

            var inv = setInterval(function () {
                if (i < $('#ContentPlaceHolder1_hf_pro').val()) {
       
                    var aantal = ++i;
                    $('#ContentPlaceHolder1_Label_projects').html(aantal); 

          
                }
                else
                    clearInterval(inv);
            }, 6000 / 600);

            //users
            var i2 = 0;

            var inv2 = setInterval(function () {
                if (i2 < $('#ContentPlaceHolder1_hf_users').val()) {
       
                    //document.getElementById("counter").innerHTML = ++i;

                    var aantal2 = ++i2;
                    $('#ContentPlaceHolder1_lbl_users').html(aantal2); 

          
                }
                else
                    clearInterval(inv2);
            }, 6000 / 600);

            //days
            var i3 = 0;

            var inv3 = setInterval(function () {
                if (i3 < $('#ContentPlaceHolder1_hf_days').val()) {
       
                    //document.getElementById("counter").innerHTML = ++i;

                    var aantal3 = ++i3;
                    $('#ContentPlaceHolder1_Label10').html(aantal3); 

          
                }
                else
                    clearInterval(inv3);

                console.log("aantal3: "+ aantal3);
                console.log("aantal3: "+ $('#ContentPlaceHolder1_hf_days').val());
                //alert('#ContentPlaceHolder1_hf_days');
            }, 6000 / 600);
       
             
        //});


            //alert('ready');

            function check(object) {
                //alert('hi');
            }

            $(function () {
                $("label").on("click", function () {

                    if (jQuery) {
                        //alert("loaded");
                    }


                    //alert('hello world');
                    //$(this).parent().toggleClass("selected_type");

                    //var x = $(this).parent();
                    //var y = x.children(":first").children(":first");
                    //$(this).toggleClass("selected_type");
                    //alert($(this).attr("id"));
                    //var x = $(this).parent();
                    //alert(x.attr("id"));

                    //var x = $(this).closest("li");

                    //x.toggleClass("selected_type");



                    //alert(y);
                    //alert(y.attr("id"));

                    /*
                    var checked = y.is(':checked');
                    if (checked) {
                        //y.removeAttr('checked');
                        y.prop('checked', false);
                    } else {
                        //y.attr("checked", "checked");
                        y.prop('checked', true);
                    }*/

                    //var returnvalue = y.prop('checked');
                    //alert(returnvalue);



                    //y.click(function (e) { updateGrid7_new });

                    // y.onchange(); //no effect

                    //y.trigger('change');

                    //y.click(); // this should force a postback

                    //y.trigger('click');
               
                });
            });

        });

        
        var slides = document.getElementsByClassName("mySlides");
        if (slides.length == 0)
        {
            $("#sh_div").hide();
        }

        //temp disabled, check for null is new (27-11-17)
        if ($('#slideshow2').length) {

            currentSlide(1);
            slideIndex = 1;
            plusSlides2(0); //only change dots

            $("#slideshow2 > span:gt(0)").hide();

            myVar = setInterval(function () {

                setColor();

            }, 10000); //was 5000

            function setColor() {

                var slides = document.getElementsByClassName("mySlides");

                if (slides.length > 1) {

                    plusSlides2(1); //only change dots; disabled

                    $('#slideshow2 > span:first')
            .fadeOut(1)
            .next()
            .fadeIn(4000)
            .end()
            .appendTo('#slideshow2');
                }
            }
        }
    }

    var slideIndex = 1;
    function currentSlide(n) {
        //alert('currentSlide');
        clearInterval(myVar); //solution

        showSlidesNew(n);
    }

    //this works
    function plusSlides(n) {
        
        //alert('n: ' + n);

        clearInterval(myVar); //solution

        var x = slideIndex += n;
        //alert('x: ' + x);

        var slides = document.getElementsByClassName("mySlides");

        if (slides.length > 1)
        { 
        var value;

            //disabled 28-12-19
        /*if (x % slides.length) {
            value = 1;
        }
        else
            value = 2;*/

        value = x;
        if (x > slides.length)
        {
            value = 1;
            slideIndex = 1;
        }
        if (x < 1)
        {
            value = slides.length;
            slideIndex = slides.length;
        }

        showSlidesNew_(value, x);
        }
    }

    function showSlidesNew_(n, n2) {

        var slides = document.getElementsByClassName("mySlides");
        var i;

        var x;

        for (i = 0; i < slides.length; i++) {
            //disabled 28-12-19
            /*if (i != (n - 1)) {
                slides[i].style.display = "none";
            }
            else {
                slides[i].style.display = "block";
                x = i;
            }*/

            if(i == (n - 1))
            {
                slides[i].style.display = "block";
            }
            else {
                slides[i].style.display = "none";
                x = i;
            }

        }
        //disabled 28-12-19
        /*var id = slides[x].id;

        if (id == "slide1")
            n = 1;
        if (id == "slide2")
            n = 2;*/

        showSlides2(n);
    }

    //for dots only, alternative
    function showSlides2(n) {
        //alert('showSlides2');
        var i;

        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < dots.length; i++) {
            if (i == (n - 1)) {

                dots[i].className += " active";

            }
            else {

                dots[i].className = dots[i].className.replace(" active", "");
                dots[i].className = dots[i].className.replace("active", ""); //strange but works, dealing twice

            }

        }

    }

    function showSlidesNew(n) {
         
        var i;
        var slides = document.getElementsByClassName("mySlides");
        //alert('length: ' + slides.length);
        if (slides.length > 1)
            { 
        for (i = 0; i < slides.length; i++) {

            if (i == (n - 1)) {
                $("#slideshow2 > span:eq(" + i + ")").fadeIn();
            }
            else {
                $("#slideshow2 > span:eq(" + i + ")").fadeOut();
                //x = i;
            }

            //disabled 28-12-19
            /*var id = slides[i].id;
            //alert('id: ' + id);

            if (n == 2 && id == "ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1__slide2") {
                //alert('show slide 2');
                $("#slideshow2 > span:eq(" + i + ")").fadeIn();

                var x = slides.length - i - 1; //the other slide
                $("#slideshow2 > span:eq(" + x + ")").fadeOut();

            }
            if (n == 1 && id == "ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1__slide1") {
                //alert('show slide 1');
                $("#slideshow2 > span:eq(" + i + ")").fadeIn();

                var x = slides.length - i - 1; //the other slide
                $("#slideshow2 > span:eq(" + x + ")").fadeOut();

            }*/

        }
        slideIndex += 1; //new
        showSlides2(n); //new
        }
    }

    function plusSlides2(n) {

        showSlides(slideIndex += n);
    }

    //for dots only
    function showSlides(n) {
        $(document).ready(function () {

            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            dots[slideIndex - 1].className += " active";

            });
    }

$(document).ready(function () {
    $('#ContentPlaceHolder1_LinkButton1b').click(function () {
        $("#unfold").toggle(500);


        var $this = $(this);
        $this.toggleClass('SeeMore3');
        if ($this.hasClass('SeeMore3')) {
            $this.text('Show key Features');
        } else {
            $this.text('Hide info');
        }

    });

    $('#ContentPlaceHolder1_LinkButton2b').click(function () {
        $("#unfold2").toggle(500);


        var $this = $(this);
        $this.toggleClass('SeeMore4');
        if ($this.hasClass('SeeMore4')) {
            $this.text('Show key Features');
        } else {
            $this.text('Hide info');
        }

    });

    $('#ContentPlaceHolder1_LinkButton5').click(function () {
        $("#unfold3").toggle(500);


        var $this = $(this);
        $this.toggleClass('SeeMore5');
        if ($this.hasClass('SeeMore5')) {
            $this.text('Show key Features');
        } else {
            $this.text('Hide info');
        }

    });

    $('#ContentPlaceHolder1_LinkButton8').click(function () {
        $("#unfold4").toggle(500);


        var $this = $(this);
        $this.toggleClass('SeeMore6');
        if ($this.hasClass('SeeMore6')) {
            $this.text('Show key Features');
        } else {
            $this.text('Hide info');
        }

    });

});

