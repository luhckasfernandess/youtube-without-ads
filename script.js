const onclickButton = () => {
    const inputData = document.querySelector('input');
    const videoID = inputData.value.substring(32, 43);
    const videoLink = document.querySelector('iframe');
    videoLink.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&showinfo=0`;
    inputData.value = '';
}