const content = document.querySelector('.content');
let inverted, linksHighlighted, highlightedHeading, blackWhite, readingGuide, isReading, bigCursor;

$(document).ready(()=>{

    $('#widgetInit').widgetBox(
        {
        features: ['screen-reader', 'invert-color'],
        position: 'left',
        closeButton: 'right',
        showFontSizeButtons: true,
        showResetButton: true,
    }
    );

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

function visibleWidget(){
    if(document.querySelector('.accessibility-menu-left') === null){
        const accessibilityMenuRight = document.querySelector('.accessibility-menu-right');
        accessibilityMenuRight.style.right = '10px';
        accessibilityMenuRight.style.transition = 'right 0.5s';
        accessibilityMenuRight.style.visibility = 'visible';
    } else {
        const accessibilityMenuLeft = document.querySelector('.accessibility-menu-left');
        accessibilityMenuLeft.style.left = '10px';
        accessibilityMenuLeft.style.transition = 'left 0.5s';
        accessibilityMenuLeft.style.visibility = 'visible';
    }
}

function handleAccessibilityOption(option) {
    switch (option) {
        case 'font-increase':
            fontSizeManipulate('increase');
            break;
        case 'font-decrease':
            fontSizeManipulate('decrease');
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
        cursorButton.style.color = 'yellow';
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
        readButton.textContent = '🔊  Stop Reading';
        readButton.style.color = 'yellow';
    } else {
        isReading = false;
        readButton.textContent = '🔊   Read Screen';
        readButton.style.color = 'lightcyan';
        speechSynthesis.cancel();
    }
    sessionStorage.setItem('isReading', isReading)
}

function readingGuideSettings(){
    const readGuideButton = document.getElementById('reading-guide');
    if (!readingGuide){
        readingGuide = true;
        readGuideButton.style.color = 'yellow';
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
        invertButton.style.color = 'yellow';
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
        highlightLinkButton.style.color = 'yellow';
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
        blackAndWhiteButton.style.color = 'yellow';
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
        highlightHeadingButton.style.color = 'yellow';
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

function fontSizeManipulate(option){
    let allText = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, td, th, label, input, textarea, select');
    allText.forEach(text => {
        let currentFontSize = text.style.fontSize;
        if (currentFontSize && currentFontSize.includes('px')){
            currentFontSize = parseFloat(currentFontSize) / 16 + 'em';
        }
        switch (option) {
            case 'increase':
                if (currentFontSize < '1.4em' || currentFontSize === '1em'){
                    text.style.fontSize = currentFontSize ? parseFloat(currentFontSize) + 0.1 + 'em' : '1.1em';
                }
                break;
            case 'decrease':
                if (currentFontSize > '0.7em' || currentFontSize === ''){
                    text.style.fontSize = currentFontSize ? parseFloat(currentFontSize) - 0.1 + 'em' : '0.9em';
                }
                break;
            default:
                text.style.fontSize = '1em';
                break;
        }
    });
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
    let widgetButtons = document.querySelectorAll('.widget-btn');
    widgetButtons.forEach(button => {
        button.style.color = '#fff';
    });
}

function closeAccessibilityMenu() {

    if(document.querySelector('.accessibility-menu-left') === null){
        const accessibilityMenuRight = document.querySelector('.accessibility-menu-right');
        accessibilityMenuRight.style.right = '-350px';
        accessibilityMenuRight.style.transition = 'right 0.5s';
        setTimeout(() => {
            accessibilityMenuRight.style.visibility = 'hidden';
        }, 300);
    } else {
        const accessibilityMenuLeft = document.querySelector('.accessibility-menu-left');
        accessibilityMenuLeft.style.left = '-350px';
        accessibilityMenuLeft.style.transition = 'left 0.5s';
        setTimeout(() => {
            accessibilityMenuLeft.style.visibility = 'hidden';
        }, 300);
    }



}


let voices = [];
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
        // voices.forEach(voice => {
        //     console.log(voice.name, voice.lang);
        // });
    };
} else {
    console.log('Your browser does not support the screen reader feature. Please use a different browser.');
}

function readText(text){
    let selectedVoice = voices[1]
    // console.log('Selected Voice: ', selectedVoice.name + ' ' + selectedVoice.lang);
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


const defaultWidget = '<div class="accessibility-menu">\n' +
    '    <button class="crossBtn" onclick="handleAccessibilityOption(\'close\')">❌</button>\n' +
    '    <div id="settings-list">\n' +
    '        <ul style="list-style: none;">\n' +
    '            <li>\n' +
    '                <div class="widget-toolbar" role="toolbar" aria-label="">\n' +
    '                    <div class="widget-group me-2" role="group" aria-label="">\n' +
    '                        <button type="button" class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'font-increase\')">\n' +
    '                            <b>A<sup>+</sup></b>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'font-decrease\')">\n' +
    '                            <b>A<sup>-</sup></b>\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'highlight-links\')" id="highlight-links">\n' +
    '                        <b>🔦</b>  Highlight Links\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'highlight-heading\')" id="highlight-heading">\n' +
    '                        <b>💡</b>  Highlight Heading\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'reading-guide\')" id="reading-guide">\n' +
    '                        <b>📖</b>  Reading Guide\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'big-cursor\')" id="big-cursor">\n' +
    '                        <b>👉</b>  Big Cursor\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'invert-color\')" id="invert-color">\n' +
    '                        <b>💫</b>  Invert Color\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'black-white\')" id="black-white">\n' +
    '                        <b>✒️️</b>  Black & White\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'screen-reader\')" id="screen-reader">\n' +
    '                        <b>🔉</b>  Read Screen\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <div class="widget-gap-2">\n' +
    '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'reset\')" id="reset">\n' +
    '                        <b>🚫</b>  Reset\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>';

const widgetItems = {
    'big-cursor': {
        name: 'Big Cursor',
        icon: '👉',
        action: 'bigCursorSettings'
    },
    'screen-reader': {
        name: 'Screen Reader',
        icon: '🔉',
        action: 'screenReaderSettings'
    },
    'invert-color': {
        name: 'Invert Color',
        icon: '💫',
        action: 'invertColor'
    },
    'highlight-links': {
        name: 'Highlight Links',
        icon: '🔦',
        action: 'highlightLink'
    },
    'highlight-heading': {
        name: 'Highlight Heading',
        icon: '💡',
        action: 'highlightHeading'
    },
    'reading-guide': {
        name: 'Reading Guide',
        icon: '📖',
        action: 'readingGuideSettings'
    },
    'black-white': {
        name: 'Black & White',
        icon: '✒️️',
        action: 'blackAndWhite'
    }
}

function fetchWidget(settings) {
    let crossbuttonClass = settings.closeButton === 'left' ? 'crossBtnLeft' : 'crossBtnRight';
    let widgetMenuClass = settings.position === 'left' ? 'accessibility-menu-left' : 'accessibility-menu-right';
    let widgetHTML = '<div class="'+widgetMenuClass+'">\n' +
        '    <button class="'+crossbuttonClass+'" onclick="handleAccessibilityOption(\'close\')">❌</button>\n' +
        '    <div id="settings-list">\n' +
        '        <ul style="list-style: none;">\n';
    if (settings.showFontSizeButtons){
        widgetHTML += ' <li>\n' +
            '                <div class="widget-toolbar" role="toolbar" aria-label="">\n' +
            '                    <div class="widget-group me-2" role="group" aria-label="">\n' +
            '                        <button type="button" class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'font-increase\')">\n' +
            '                            <b>A<sup>+</sup></b>\n' +
            '                        </button>\n' +
            '                        <button type="button" class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'font-decrease\')">\n' +
            '                            <b>A<sup>-</sup></b>\n' +
            '                        </button>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </li>\n';
    }
    settings.features.forEach(feature => {
        let widget = widgetItems[feature];
        widgetHTML +=  '<li>\n' +
            '                <div class="widget-gap-2">\n' +
            '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\''+feature+'\')" id="'+feature+'">\n' +
            '                        <b>'+widget['icon']+'</b>  '+widget['name']+'\n' +
            '                    </button>\n' +
            '                </div>\n' +
            '            </li>\n'
    });
    if (settings.showResetButton){
        widgetHTML += ' <li>\n' +
            '                <div class="widget-gap-2">\n' +
            '                    <button class="widget-btn widget-btn-outline-light" onclick="handleAccessibilityOption(\'reset\')" id="reset">\n' +
            '                        <b>🚫</b>  Reset\n' +
            '                    </button>\n' +
            '                </div>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </div>\n' +
            '</div>';
    }
    return widgetHTML;
}

(function ($) {
    $.fn.widgetBox = function (options) {
        const defaults = {
            features: ['big-cursor', 'screen-reader', 'invert-color', 'highlight-links', 'highlight-heading', 'reading-guide', 'black-white'],
            position: 'right',
            closeButton: 'left',
            showFontSizeButtons: true,
            showResetButton: true,
        };
        const settings = { ...defaults, ...options };
        $(this).append(fetchWidget(settings));
    };
})(jQuery);

