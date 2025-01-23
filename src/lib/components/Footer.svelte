<footer>
    <div class="content">
        <a class="kofi" href='https://ko-fi.com/U7U4AD5Y7' target='_blank'>
            <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
        </a>

        <div class="copyright">Built by Daniel Wolfe, 2024.</div>
    </div>
</footer>

<style lang="scss">
    footer {
        margin-top: auto;
        padding: 25px 0 10px;
        width: 100%;
        height: 100%;
        background-color: $white;
    }
    .content {
        color: $primary;
        max-width: $column;
        margin: 0 auto;
    }
    .copyright {
        color: $body-black;
        font-size: .85rem;
        text-align: right;
    }

    // Mobile
    @media screen and (max-width: $column) {
    footer {
        max-width: $column;
        padding: 5px;
    }
}
</style>