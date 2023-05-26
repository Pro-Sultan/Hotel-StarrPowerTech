$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enablePagination: false,
        transitionEffectSpeed: 500,
        labels: {
            current: ""
        }
    });

    // Custome Button Jquery Step
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })

    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
    dp1.selectDate(new Date());
    var dp2 = $('#dp2').datepicker().data('datepicker');
    dp2.selectDate(new Date());
    var dp3 = $('#dp3').datepicker().data('datepicker');
    dp3.selectDate(new Date());
    var dp4 = $('#dp4').datepicker().data('datepicker');
    dp4.selectDate(new Date());

    // Select Dropdown
    $('html').click(function() {
        $('.select .dropdown').hide(); 
    });
    $('.select').click(function(event){
        event.stopPropagation();
    });
    $('.select .select-control').click(function(){
        $(this).parent().next().toggle();

    }) 
    
    $('.select .drop1 li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        document.querySelector(".number2").innerHTML= text;
        document.querySelector(".num2").innerHTML= text;
        $(this).parent().prev().find('div').text(text);

    }) 

    

    $('.select .drop2 li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        document.querySelector(".number1").innerHTML= text;
        document.querySelector(".num1").innerHTML= text;
        $(this).parent().prev().find('div').text(text);
    }) 


    $('.select .drop3 li').click(function(){
        $(this).parent().toggle();
        var text = $(this).attr('rel');
        document.querySelector(".type").innerHTML= text
        $(this).parent().prev().find('div').text(text);

        if (text== "Queens Room") {
            document.querySelector(".price").innerHTML= "$20";
            document.querySelector(".total").innerHTML = "$110";
            document.querySelector(".sub").innerHTML = "$100";
        } else if(text== "Special Room"){
            document.querySelector(".price").innerHTML= "$40";
            document.querySelector(".total").innerHTML= "$130";
            document.querySelector(".sub").innerHTML = "$120";
        }
        else{
            document.querySelector(".price").innerHTML= "$60";
            document.querySelector(".total").innerHTML= "$150";
            document.querySelector(".sub").innerHTML = "$140";
        }
    }) 


  

})


    







