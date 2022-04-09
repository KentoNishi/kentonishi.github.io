<script lang="ts">
  import pfp from '../img/pfp.png';
</script>

<div class="banner">
  <div class="profile">
    <img src={pfp} alt="Kento Nishi" class="pfp" />
    <div class="info">
      <div class="name">Kento Nishi</div>
      <div class="email">
        <a href="mailto:kento24gs@outlook.com">kento24gs@outlook.com</a>
      </div>
      <div class="affiliation">Harvard College</div>
    </div>
  </div>
</div>

<style>
  .banner {
    --banner-height: 150px;
    width: 100%;
    height: var(--banner-height);
    background-color: var(--gray-fill);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .pfp {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }
  .info * {
    color: rgb(224, 224, 224);
    font-family: inherit;
  }
  .name {
    font-family: inherit;
    font-size: 2rem;
    font-weight: bold;
  }
  a {
    color: var(--blue-accent) !important;
    text-decoration: none;
  }
  :root {
    --gray-fill: #171717;
    --blue-accent: #1b98ff;
  }
</style>
