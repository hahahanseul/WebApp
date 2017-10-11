var app = {
    initialize : function(){
        document.addEventListener('deviceready',
        this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },
    onDeviceReady : function(){
        this.receiveEvent('deviceready');
    },
    receiveEvent : function(x){
        var parentElement = document.getElementById(x);
        var listeningElement = parentElement.querySelector('.listening');
        var receiveEvent = parentElement.querySelector('.received');
        listeningElement.setAttribute('style','display:none');
        receiveElement.setAttribute('style','display:block');
        console.log('Received Event : ' + x);
    }
};

app.member = (function(){
    var onCreate  = function(){
        setContentView();
        $('#signin-btn').click(()=>{
            var id = $('#id').val();
            hybrid.showToast(id);

        });
        $('#signup-btn').click(()=>{
           hybrid.showToast('회원가입');
        });
    };
    var setContentView = function(){
        var compUI={
        		br    :()=>{return $('<br/>');},
        		div   : x=>{return $('<div/>',{id:x});},
        		h1    : x=>{return $('<h1/>',{id:x});},
        		span  : x=>{return $('<span/>',{id:x});},
        		iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
        		aBtn  : x=>{return $('<a/>',{href:'#', role: 'button', id:x});},
        		iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
        		image : (x,y)=>{return $('<img/>',{id:x,src:y});},
        		input : (x,y)=>{return $('<input/>',{id:x,type:y});},
        		btn : x=>{return $('<button>',{id:x})},
        		nav: x=>{return $('<nav/>',{id: x});},
        		ul : x=>{return $('<ul/>',{id:x})},
        		li : ()=>{return $('<li/>')},
        		a : ()=>{return $('<a/>',{href:'#'})}
        };
        $('#content').html(
                        '<input type="text" id="id" class="id" placeholder="ID를 입력하세요"/>'+
                        '<input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요" />'
        );
        $('#content').append(compUI.btn('signin-btn'));
        $('#content').append(compUI.btn('signup-btn'));
        $('#signin-btn').text('로그인');
        $('#signup-btn').text('회원가입');
    };
    return{onCreate:onCreate};
})();
$(function(){
    app.initialize();
});