document.getElementById('createOgp').onclick = function(){
    if(document.getElementById('result')){
        return;
    }
    var getPosition = document.querySelector('.acms-admin-table-entry');
    var OgpImg = document.createElement('div');
    var dataForm = document.createElement('input');
    dataForm.classList.add('js-img_resize_data');
    dataForm.setAttribute('type', 'hidden');
    dataForm.setAttribute('accept', 'image/*');
    dataForm.setAttribute('name','ogp-image');
    OgpImg.id = 'result';
    getPosition.appendChild(OgpImg);
    OgpImg.appendChild(dataForm);
    html2canvas(document.querySelector(".acms-img-responsive")).then(canvas => { 
        var canvasImage = canvas.toDataURL("image/png");
        let createdImg = document.createElement("img");
        createdImg.src = `${canvasImage}`;
        var jsImgResizePreview = document.querySelector('.js-img_resize_preview');
        jsImgResizePreview.src = `${createdImg.src}`;
        jsImgResizePreview.style.display = "initial";
        dataForm.value = createdImg.src;
    });
}