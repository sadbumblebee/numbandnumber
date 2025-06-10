<footer>
    <div class="content">
        <a class="kofi-link" href='https://ko-fi.com/U7U4AD5Y7' target='_blank'>
            <div class="kofi-button">
                <img height='25px' style='border:0px;height:25px;' src='/kofi/kofi-mug.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
                Support small journalism
            </div>
            
        </a>

        <div class="copyright">Built by Daniel Wolfe, 2025.</div>
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

    a.kofi-link {
        all: unset;
        cursor: pointer;
    }

    .kofi-button {
        background-color: $secondary;
        color: $white;
        font-weight: 500;
        font-size: 1rem;
        padding: 8px 16px 10px 12px;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        transition: background-color 250ms ease-in, transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
        &:hover {
            color: $body-black;
            background-color: $tertiary;
            transform: translateY(-5px);
        }
        img {
            padding-right: 4px;
        }
    }

    // Mobile
    @media screen and (max-width: $column) {
    footer {
        max-width: $column;
        padding: 5px;
    }
}
</style>