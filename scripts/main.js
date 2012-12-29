/********************************************************************
  main.js


********************************************************************/

var dmsg = dmsgFactory(true); // for Debug
//var dmsg = dmsgFactory(false);  // for Release

$(function(){
    var ts = new Date();


    // TODO: 初期化処理


    var te = new Date();
    dmsg("InitializedTime: " + (te-ts) + "[ms]");
});



