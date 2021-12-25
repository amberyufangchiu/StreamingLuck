const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});
//scrolling page

const find = (el, key) => el.querySelectorAll(key);
//找出檔案中的.tags button標籤

find(document, '.tags button').forEach(el => {
    el.addEventListener('click', () => randomSelect(el.closest('.tags')));
})
//找到後forEach迴圈，click的話，執行randomSelect的函式，找到最接近.tags的
//離click最近的.tags（class群）＝ el

const randomSelect = (el) => _randomSelect(find(el, 'span'));
//找到class群後再讓span標籤跑_randomSelect函式 

const _randomSelect = (tags) => {
    const times = 20;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag(tags);

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);
    // 讓class群裡的span標籤跑100毫秒隨機high/unhightlight

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag(tags);

            highlightTag(randomTag)
        }, 100);

    }, times * 100);
    //2秒後停止跑隨機，並選一個span標籤highlight

}
const pickRandomTag = (tags) => tags[Math.floor(Math.random() * tags.length)];
const highlightTag = (tag) => tag.classList.add('highlight');
const unhighlightTag = (tag) => tag.classList.remove('highlight');