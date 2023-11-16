const settingsToggle = document.getElementById('settings-toggle');
const accessibilityMenu = document.querySelector('.accessibility-menu');
settingsToggle.addEventListener('click', () => {
    accessibilityMenu.style.right = '10px';
    accessibilityMenu.style.transition = 'right 0.5s';
    accessibilityMenu.style.visibility = 'visible';
});

const content = document.querySelector('.content');
let inverted, linksHighlighted, highlightedHeading, blackWhite, readingGuide, isReading, bigCursor;

$(document).ready(()=>{
    if (sessionStorage.getItem('inverted') === 'true') {
        inverted = true;
        invertColor();
    } else{
        inverted = false;
    }
    if (sessionStorage.getItem('linksHighlighted') === 'true') {
        linksHighlighted = true;
        highlightLink();
    } else{
        linksHighlighted = false;
    }
    if (sessionStorage.getItem('headingHighlighted') === 'true') {
        highlightedHeading = true;
        highlightHeading();
    } else{
        highlightedHeading = false;
    }
    if (sessionStorage.getItem('blackWhite') === 'true') {
        blackWhite = true;
        blackAndWhite();
    } else{
        blackWhite = false;
    }
    if (sessionStorage.getItem('readingGuide') === 'true') {
        readingGuide = true;
        readingGuideSettings();
    } else{
        readingGuide = false;
    }
    if (sessionStorage.getItem('isReading') === 'true') {
        isReading = true;
        screenReaderSettings();
    } else{
        isReading = false;
    }
    if (sessionStorage.getItem('bigCursor') === 'true') {
        bigCursor = true;
        bigCursorSettings();
    } else{
        bigCursor = false;
    }
});

function handleAccessibilityOption(option) {
    switch (option) {
        case 'font-increase':
            let currentFontSize = content.style.fontSize;
            content.style.fontSize = currentFontSize ? parseFloat(currentFontSize) + 0.1 + 'em' : '1.1em';
            break;
        case 'font-decrease':
            let currentFontSize2 = content.style.fontSize;
            content.style.fontSize = currentFontSize2 ? parseFloat(currentFontSize2) - 0.1 + 'em' : '0.9em';
            break;
        case 'big-cursor':
            bigCursorSettings();
            break;
        case 'screen-reader':
            screenReaderSettings();
            break;
        case 'invert-color':
            invertColor();
            break;
        case 'highlight-links':
            highlightLink();
            break;
        case 'highlight-heading':
            highlightHeading();
            break;
        case 'reading-guide':
            readingGuideSettings();
            break;
        case 'black-white':
            blackAndWhite();
            break;
        case 'reset':
            resetAccessibilitySettings();
            break;
        case 'close':
            closeAccessibilityMenu();
            break;
        default:
            break;
    }
}


function bigCursorSettings(){
    const cursorButton = document.getElementById('big-cursor');
    if (!bigCursor){
        document.body.classList.toggle('big-cursor');
        bigCursor = true;
        cursorButton.style.color = 'orange';
    } else {
        document.body.classList.toggle('big-cursor');
        bigCursor = false;
        cursorButton.style.color = 'lightcyan';
    }
    sessionStorage.setItem('bigCursor', bigCursor)
}

function screenReaderSettings(){
    const readButton = document.getElementById('screen-reader');
    if (!isReading) {
        isReading = true;
        readButton.textContent = 'Stop Reading';
        readButton.style.color = 'orange';
    } else {
        isReading = false;
        readButton.textContent = 'Read Screen';
        readButton.style.color = 'lightcyan';
        speechSynthesis.cancel();
    }
    sessionStorage.setItem('isReading', isReading)
}

function readingGuideSettings(){
    const readGuideButton = document.getElementById('reading-guide');
    if (!readingGuide){
        readingGuide = true;
        readGuideButton.style.color = 'orange';
    } else {
        readingGuide = false;
        readGuideButton.style.color = 'lightcyan';

    }
    sessionStorage.setItem('readingGuide', readingGuide)
}

function invertColor(){
    const invertButton = document.getElementById('invert-color');
    if (!inverted){
        content.classList.toggle('inverted');
        inverted = true;
        invertButton.style.color = 'orange';
    } else {
        content.classList.toggle('inverted');
        inverted = false;
        invertButton.style.color = 'lightcyan';
    }
    sessionStorage.setItem('inverted', inverted)
}

function highlightLink(){
    const highlightLinkButton = document.getElementById('highlight-links');
    if (!linksHighlighted){
        content.classList.toggle('highlight-links');
        linksHighlighted = true;
        highlightLinkButton.style.color = 'orange';
    } else {
        content.classList.toggle('highlight-links');
        linksHighlighted = false;
        highlightLinkButton.style.color = 'lightcyan';
    }
    sessionStorage.setItem('linksHighlighted', linksHighlighted)
}

function blackAndWhite(){
    const blackAndWhiteButton = document.getElementById('black-white');
    if (!blackWhite){
        content.classList.toggle('black-white');
        blackWhite = true;
        blackAndWhiteButton.style.color = 'orange';
    } else {
        content.classList.toggle('black-white');
        blackWhite = false;
        blackAndWhiteButton.style.color = 'lightcyan';
    }
    sessionStorage.setItem('blackWhite', blackWhite)
}

function highlightHeading(){
    const highlightHeadingButton = document.getElementById('highlight-heading');
    if (!highlightedHeading){
        let headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.classList.toggle('highlight-heading');
        });
        highlightedHeading = true;
        highlightHeadingButton.style.color = 'orange';
    } else {
        let headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.classList.toggle('highlight-heading');
        });
        highlightedHeading = false;
        highlightHeadingButton.style.color = 'lightcyan';
    }
    sessionStorage.setItem('highlightedHeading', highlightedHeading)
}

function resetAccessibilitySettings(){
    content.classList.remove('inverted', 'big-cursor', 'highlight-links','highlight-heading', 'black-white', 'reading-guide', 'screen-reader');
    if (highlightedHeading){
        let headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            heading.classList.remove('highlight-heading');
        });
    }
    inverted = false;
    linksHighlighted = false;
    highlightedHeading = false;
    blackWhite = false;
    isReading = false;
    readingGuide = false;
    bigCursor = false;
    sessionStorage.setItem('inverted', inverted);
    sessionStorage.setItem('linksHighlighted', linksHighlighted);
    sessionStorage.setItem('highlightedHeading', highlightedHeading);
    sessionStorage.setItem('blackWhite', blackWhite);
    sessionStorage.setItem('isReading', isReading);
    sessionStorage.setItem('readingGuide', readingGuide);
    sessionStorage.setItem('bigCursor', bigCursor);
    content.style.fontSize = '1em';
    speechSynthesis.cancel();
}

function closeAccessibilityMenu() {
    const accessibilityMenu = document.querySelector('.accessibility-menu');
    accessibilityMenu.style.right = '-250px';
    accessibilityMenu.style.transition = 'right 0.5s';
    setTimeout(() => {
        accessibilityMenu.style.visibility = 'hidden';
    }, 300);
}


let voices = [];
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
        voices.forEach(voice => {
            console.log(voice.name, voice.lang);
        });
    };
} else {
    console.log('Your browser does not support the screen reader feature. Please use a different browser.');
}

function readText(text){
    let selectedVoice = voices[1]
    console.log('Selected Voice: ', selectedVoice.name + ' ' + selectedVoice.lang);
    if ('speechSynthesis' in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance();
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;
        utterance.text = text;
        utterance.voiceURI = selectedVoice.voiceURI;
        utterance.lang = selectedVoice.lang;
        synthesis.speak(utterance);
    } else {
        alert('Your browser does not support the screen reader feature. Please use a different browser.');
    }
}

document.body.addEventListener('mouseover', (event) => {

    let textElementList = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TEXTAREA'];
    let highlightedElements = document.querySelectorAll('.highlighted');
    highlightedElements.forEach(element => {
        element.classList.remove('highlighted');
    });
    const target = event.target;
    if (readingGuide === true){
        if (textElementList.includes(target.tagName)) {
            target.classList.add('highlighted');
        }
    }
    if (isReading === true) {
        speechSynthesis.cancel();
        if (textElementList.includes(target.tagName)) {
            target.classList.add('highlighted');
            target.classList.add('highlighted');
            const text = target.textContent.trim();
            if (text) {
                readText(text);
            }
        }
    }
});
//
// function inject_html_to_dom() {
//     let html = '<div class="accessibility-menu">\n' +
//         '\n' +
//         '    <button class="btn btn-sm crossBtn" onclick="handleAccessibilityOption(\'close\')">❌</button>\n' +
//         '\n' +
//         '    <div id="settings-list">\n' +
//         '        <ul style="list-style: none;">\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn text-center btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'font-increase\')">\n' +
//         '                        <b>⬆️ A<sup>+</sup></b>\n' +
//         '                    </button>\n' +
//         '                    <button class="btn text-center btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'font-decrease\')">\n' +
//         '                        <b>⬇️ A<sup>-</sup></b>\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">🔦</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'highlight-links\')" id="highlight-links">\n' +
//         '                        Highlight Links\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">💡</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'highlight-heading\')" id="highlight-heading">\n' +
//         '                        Highlight Heading\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">📖</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button btn-block" onclick="handleAccessibilityOption(\'reading-guide\')" id="reading-guide">\n' +
//         '                        Reading Guide\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">👉</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'big-cursor\')" id="big-cursor">\n' +
//         '                        Big Cursor\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn"> 💫</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'invert-color\')" id="invert-color">\n' +
//         '                        Invert Color\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">✒️</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'black-white\')" id="black-white">\n' +
//         '                        Black & White\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn">🔊</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'screen-reader\')" id="screen-reader">\n' +
//         '                        Read Screen\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '            <li>\n' +
//         '                <div class="btn-group btn-block">\n' +
//         '                    <button class="btn btn-sm btn-info iconBtn"> 🚫</button>\n' +
//         '                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption(\'reset\')" id="reset">\n' +
//         '                        Reset\n' +
//         '                    </button>\n' +
//         '                </div>\n' +
//         '            </li>\n' +
//         '        </ul>\n' +
//         '    </div>\n' +
//         '</div>';
//     let dom = document.getElementById('heart-widget');
//     dom.innerHTML = html;
//     if (dom.hasAttribute('data-widgetButton') && dom.getAttribute('data-widgetButton') === 'true') {
//         dom.innerHTML += '<button class="btn btn-outline-dark m-4 accessibility-menu-btn" id="settings-toggle">🤖</button>';
//     }
//}