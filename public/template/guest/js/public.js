$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
function loadMore(){
    const page=$('#page').val();

    $.ajax({
        type:'POST',
        dataType:'Json',
        data:{page},
        url:'/services/load-products',
        success:function (result){
            if (result.html!==''){
                $('#loadProducts').append(result.html);
                $('#page').val(parseInt(page)+1);
            }
            else {
                alert("Load Xong Sản Phẩm");
                $('#btn_loadMore').css('display','none');
            }
            console.log(result.html);
        }
    });
}
