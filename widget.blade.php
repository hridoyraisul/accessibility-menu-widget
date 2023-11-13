<div class="accessibility-menu">

    <button class="btn btn-sm crossBtn" onclick="handleAccessibilityOption('close')">❌</button>

    <div id="settings-list">
        <ul style="list-style: none;">
            <li>
                <div class="btn-group btn-block">
                    <button class="btn text-center btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('font-increase')" id="highlight-links">
                       <b>⬆️ A<sup>+</sup></b>
                    </button>
                    <button class="btn text-center btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('font-decrease')" id="highlight-links">
                        <b>⬇️ A<sup>-</sup></b>
                    </button>
                </div>
            </li>
            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">🔦</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('highlight-links')" id="highlight-links">
                        Highlight Links
                    </button>
                </div>
            </li>
            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">💡</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('highlight-heading')" id="highlight-heading">
                        Highlight Heading
                    </button>
                </div>
            </li>

            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">📖</button>
                    <button class="btn btn-sm accessibility-enable-button btn-block" onclick="handleAccessibilityOption('reading-guide')" id="reading-guide">
                        Reading Guide
                    </button>
                </div>
            </li>

            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">👉</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('big-cursor')" id="big-cursor">
                        Big Cursor
                    </button>
                </div>
            </li>

            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn"> 💫</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('invert-color')" id="invert-color">
                        Invert Color
                    </button>
                </div>
            </li>
            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">✒️</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('black-white')" id="black-white">
                        Black & White
                    </button>
                </div>
            </li>

            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn">🔊</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('screen-reader')" id="screen-reader">
                        Read Screen
                    </button>
                </div>
            </li>
            <li>
                <div class="btn-group btn-block">
                    <button class="btn btn-sm btn-info iconBtn"> 🚫</button>
                    <button class="btn btn-sm accessibility-enable-button" onclick="handleAccessibilityOption('reset')" id="reset">
                        Reset
                    </button>
                </div>
            </li>
        </ul>
    </div>
</div>
