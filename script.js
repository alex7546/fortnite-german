const cards = document.querySelectorAll('.card');
var ST1_choosen = false;
var ST2_choosen = false;
var LM_choosen = false;
var RM_choosen = false;
var CM1_choosen = false;
var CM2_choosen = false;
var CB1_choosen = false;
var CB2_choosen = false;
var LB_choosen = false;
var RB_choosen = false;
var GK_choosen = false;

function close_pop_up(){
    document.querySelector('#choose_player').className = "cssanimation pushReleaseTo";
            setTimeout(()=>{
                document.querySelector('#choose_player').className = "cssanimation pushReleaseFrom";
                document.querySelector('#choose_player').style.display = 'none';
                document.querySelector('#dark_bg').style.display = 'none';
            },1000);
}


function final(){
    if(ST1_choosen && ST2_choosen && LM_choosen && RM_choosen && CM1_choosen && CM2_choosen && CB1_choosen && CB2_choosen && LB_choosen && RB_choosen && GK_choosen){
        document.querySelector('.btn1').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('#final_pop_up').style.display = 'block';
            document.querySelector('#dark_bg').style.display = 'block!important';
        },1000);
    }
}

document.querySelector('#dark_bg').addEventListener('click',close_pop_up);


cards.forEach((elt)=>{
    elt.addEventListener('click',(e)=>{
        var player_position = e.target.id;

        //ST 1
        if(player_position == 'ST1'){
            var in_ST1 = true;
            document.querySelector('#player1').src='ST1.png';
            document.querySelector('#player2').src='ST2.png';
            document.querySelector('#player3').src='ST3.png';
            document.querySelector('#player4').src='ST4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_ST1){document.querySelector('#ST1').src='ST1.png';in_ST1 = false;ST1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_ST1){document.querySelector('#ST1').src='ST2.png';in_ST1 = false;ST1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_ST1){document.querySelector('#ST1').src='ST3.png';in_ST1 = false;ST1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_ST1){document.querySelector('#ST1').src='ST4.png';in_ST1 = false;ST1_choosen=true;final();close_pop_up();}});
        }


        //ST 2
        if(player_position == 'ST2'){
            var in_ST2 = true;
            document.querySelector('#player1').src='ST5.png';
            document.querySelector('#player2').src='ST6.png';
            document.querySelector('#player3').src='ST7.png';
            document.querySelector('#player4').src='ST8.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_ST2){document.querySelector('#ST2').src='ST5.png';in_ST2 = false;ST2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_ST2){document.querySelector('#ST2').src='ST6.png';in_ST2 = false;ST2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_ST2){document.querySelector('#ST2').src='ST7.png';in_ST2 = false;ST2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_ST2){document.querySelector('#ST2').src='ST8.png';in_ST2 = false;ST2_choosen=true;final();close_pop_up();}});
        }



        //CB 1
        if(player_position == 'CB1'){
            var in_CB1 = true;
            document.querySelector('#player1').src='CB1.png';
            document.querySelector('#player2').src='CB2.png';
            document.querySelector('#player3').src='CB2.png';
            document.querySelector('#player4').src='CB4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_CB1){document.querySelector('#CB1').src='CB1.png';in_CB1 = false;CB1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_CB1){document.querySelector('#CB1').src='CB2.png';in_CB1 = false;CB1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_CB1){document.querySelector('#CB1').src='CB3.png';in_CB1 = false;CB1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_CB1){document.querySelector('#CB1').src='CB4.png';in_CB1 = false;CB1_choosen=true;final();close_pop_up();}});
        }


        //CB 2
        if(player_position == 'CB2'){
            var in_CB2 = true;
            document.querySelector('#player1').src='CB5.png';
            document.querySelector('#player2').src='CB6.png';
            document.querySelector('#player3').src='CB7.png';
            document.querySelector('#player4').src='CB8.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_CB2){document.querySelector('#CB2').src='CB5.png';in_CB2 = false;CB2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_CB2){document.querySelector('#CB2').src='CB6.png';in_CB2 = false;CB2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_CB2){document.querySelector('#CB2').src='CB7.png';in_CB2 = false;CB2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_CB2){document.querySelector('#CB2').src='CB8.png';in_CB2 = false;CB2_choosen=true;final();close_pop_up();}});
        }



        //GK
        if(player_position == 'GK'){
            var in_GK = true;
            document.querySelector('#player1').src='GK1.png';
            document.querySelector('#player2').src='GK2.png';
            document.querySelector('#player3').src='GK3.png';
            document.querySelector('#player4').src='GK4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_GK){document.querySelector('#GK').src='GK1.png';in_GK = false;GK_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_GK){document.querySelector('#GK').src='GK2.png';in_GK = false;GK_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_GK){document.querySelector('#GK').src='GK3.png';in_GK = false;GK_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_GK){document.querySelector('#GK').src='GK4.png';in_GK = false;GK_choosen=true;final();close_pop_up();}});
        }


        //LB
        if(player_position == 'LB'){
            var in_LB = true;
            document.querySelector('#player1').src='LB1.png';
            document.querySelector('#player2').src='LB2.png';
            document.querySelector('#player3').src='LB3.png';
            document.querySelector('#player4').src='LB4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_LB){document.querySelector('#LB').src='LB1.png';in_LB = false;LB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_LB){document.querySelector('#LB').src='LB2.png';in_LB = false;LB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_LB){document.querySelector('#LB').src='LB3.png';in_LB = false;LB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_LB){document.querySelector('#LB').src='LB4.png';in_LB = false;LB_choosen=true;final();close_pop_up();}});
        }


        //RB
        if(player_position == 'RB'){
            var in_RB = true;
            document.querySelector('#player1').src='RB1.png';
            document.querySelector('#player2').src='RB2.png';
            document.querySelector('#player3').src='RB3.png';
            document.querySelector('#player4').src='RB4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_RB){document.querySelector('#RB').src='RB1.png';in_RK = false;RB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_RB){document.querySelector('#RB').src='RB2.png';in_RK = false;RB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_RB){document.querySelector('#RB').src='RB3.png';in_RK = false;RB_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_RB){document.querySelector('#RB').src='RB4.png';in_RK = false;RB_choosen=true;final();close_pop_up();}});
        }



        //CM1
        if(player_position == 'CM1'){
            var in_CM1 = true;
            document.querySelector('#player1').src='CM1.png';
            document.querySelector('#player2').src='CM2.png';
            document.querySelector('#player3').src='CM3.png';
            document.querySelector('#player4').src='CM4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_CM1){document.querySelector('#CM1').src='CM1.png';in_CM1 = false;CM1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_CM1){document.querySelector('#CM1').src='CM2.png';in_CM1 = false;CM1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_CM1){document.querySelector('#CM1').src='CM3.png';in_CM1 = false;CM1_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_CM1){document.querySelector('#CM1').src='CM4.png';in_CM1 = false;CM1_choosen=true;final();close_pop_up();}});
        }


        //CM2
        if(player_position == 'CM2'){
            var in_CM2 = true;
            document.querySelector('#player1').src='CM5.png';
            document.querySelector('#player2').src='CM6.png';
            document.querySelector('#player3').src='CM7.png';
            document.querySelector('#player4').src='CM8.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_CM2){document.querySelector('#CM2').src='CM5.png';in_CM2 = false;CM2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_CM2){document.querySelector('#CM2').src='CM6.png';in_CM2 = false;CM2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_CM2){document.querySelector('#CM2').src='CM7.png';in_CM2 = false;CM2_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_CM2){document.querySelector('#CM2').src='CM8.png';in_CM2 = false;CM2_choosen=true;final();close_pop_up();}});
        }



        //RM
        if(player_position == 'RM'){
            var in_RM = true;
            document.querySelector('#player1').src='RM1.png';
            document.querySelector('#player2').src='RM2.png';
            document.querySelector('#player3').src='RM3.png';
            document.querySelector('#player4').src='RM4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_RM){document.querySelector('#RM').src='RM1.png';in_RM = false;RM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_RM){document.querySelector('#RM').src='RM2.png';in_RM = false;RM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_RM){document.querySelector('#RM').src='RM3.png';in_RM = false;RM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_RM){document.querySelector('#RM').src='RM4.png';in_RM = false;RM_choosen=true;final();close_pop_up();}});
        }



        //LM
        if(player_position == 'LM'){
            var in_LM = true;
            document.querySelector('#player1').src='LM1.png';
            document.querySelector('#player2').src='LM2.png';
            document.querySelector('#player3').src='LM3.png';
            document.querySelector('#player4').src='LM4.png';

            document.querySelector('#player1').addEventListener('click',()=>{if(in_LM){document.querySelector('#LM').src='LM1.png';in_LM = false;LM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player2').addEventListener('click',()=>{if(in_LM){document.querySelector('#LM').src='LM2.png';in_LM = false;LM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player3').addEventListener('click',()=>{if(in_LM){document.querySelector('#LM').src='LM3.png';in_LM = false;LM_choosen=true;final();close_pop_up();}});
            document.querySelector('#player4').addEventListener('click',()=>{if(in_LM){document.querySelector('#LM').src='LM4.png';in_LM = false;LM_choosen=true;final();close_pop_up();}});
        }




        document.querySelector('#choose_player').style.display = 'block';
        document.querySelector('#dark_bg').style.display = 'block';
    });
});



document.querySelector('#myForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location.href = 'https://www.locked3.com/cl.php?id=aac248083fec2d91f10cc40007368208';
});



