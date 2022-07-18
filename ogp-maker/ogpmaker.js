document.getElementById('createOgp').onclick = function(){
    if(document.getElementById('result')){
        return;
    }
    const getPosition = document.querySelector('.acms-admin-table-entry');
    const OgpImg = document.createElement('div');
    const dataForm = document.createElement('input');
    dataForm.classList.add('js-img_resize_data');
    dataForm.setAttribute('type', 'hidden');
    dataForm.setAttribute('accept', 'image/*');
    dataForm.setAttribute('name','ogp-image');
    OgpImg.id = 'result';
    getPosition.appendChild(OgpImg);
    OgpImg.appendChild(dataForm);
    html2canvas(document.querySelector(".acms-img-responsive")).then(canvas => { 
        let canvasImage = canvas.toDataURL("image/png");
        const createdImg = document.createElement("img");
        createdImg.src = `${canvasImage}`;
        const jsImgResizePreview = document.querySelector('.js-img_resize_preview');
        jsImgResizePreview.src = `${createdImg.src}`;
        jsImgResizePreview.style.display = "initial";
        dataForm.value = createdImg.src;
    });
}