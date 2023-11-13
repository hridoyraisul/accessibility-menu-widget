<style>


    .inverted {
        filter: invert(1);
    }

    .highlight-links a {
        background-color: yellow;
        color: black; !important;
        text-decoration-color: #0d95ad;
    }

    .black-white {
        filter: grayscale(100%);
    }

    .highlight-heading {
        background-color: yellow;
        color: #0c1527; !important;
    }

    .highlighted {
        background-color: yellow;
        color: #0c1527; !important;
    }

    .big-cursor {
        cursor: url('{{asset('big-cursor.svg')}}'), auto !important;
    }

    .iconBtn{
        pointer-events: none;
        width: 20% !important;
        border-left:solid 3px lightcyan;
        border-top:solid 3px lightcyan;
        border-bottom:solid 3px lightcyan;
    }

    .accessibility-enable-button {
        background-image: linear-gradient(to right, #203a43, #2c5364);
        color: lightcyan;
        border: solid 3px lightcyan;
        border-radius: 5px;
        padding: 5px 10px;
        margin-right: 5px;
        margin-left: 5px;
    }

    .accessibility-enable-button:hover {
        background-image: linear-gradient(to right, #365969, #638791);
        color: #ffffff;
        border: solid 3px ghostwhite;
        border-radius: 5px;
        padding: 5px 10px;
    }


    .accessibility-menu {
        position: fixed;
        top: 50%;
        right: -250px;
        transform: translateY(-50%);
        background-image: linear-gradient(to right, #365969, #638791);
        padding: 10px;
        border: 5px solid lightcyan;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        z-index: 999;
    }

    .accessibility-menu:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .accessibility-menu ul {
        padding: 0;
    }
    .accessibility-menu li {
        margin-top: 10px;
    }
    .accessibility-menu li button {
        width: 100%;
        text-align: left;
    }

    .crossBtn {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        border-radius: 50%;
        padding: 5px 5px;
        font-size: 10px;
        border: solid 3px lightpink;
        outline: none;
        background-color: #ffffff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    .crossBtn:hover {
        background-color: lightpink;
    }

</style>