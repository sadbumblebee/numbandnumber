<script>
    import Divider from '$lib/components/Divider.svelte';
</script>

<Divider />
<form
  action="https://buttondown.com/api/emails/embed-subscribe/sadbumblebee"
  method="post"
  target="popupwindow"
  on:submit={() => window.open('https://buttondown.com/sadbumblebee', 'popupwindow')}
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Join the newsletter for the latest stories and updates: </label>
  <input type="email" class="input-field" name="email" id="bd-email" value="email@you.com" />
  <input type="submit" class="submit-button" value="Subscribe" />
</form>

<style lang="scss">
    label {
        display: block;
        margin: 0rem auto .75rem;
    }
    input {
        font-size: 1rem;
        padding: 10px 16px 10px 12px;
        border: none;
    }
    input.input-field {
        color: $body-gray;
        border: $body-gray 1px solid;
        height: 40px;
        margin-right: .25rem;
    }
    input.submit-button {
        background-color: $secondary;
        cursor: pointer;
        color: $white;
        font-weight: 500;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        transition: background-color 250ms ease-in, transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
        &:hover {
            color: $body-black;
            background-color: $tertiary;
            transform: translateY(-5px);
        }
    }
</style>