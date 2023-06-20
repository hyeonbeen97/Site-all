<template>
  <header class="header">
    <header
      id="header"
      class="header__wrap score3 bg-blue"
      role="heading"
      aria-level="1"
    >
      <div class="header__inner container">
        <div class="header__logo score9">
          <router-link to="/"> HB<em>site</em> </router-link>
        </div>
        <div class="header__nav" role="navigation">
          <ul>
            <li>
              <router-link to="/intro">소개</router-link>
            </li>
            <li>
              <router-link to="/member">멤버</router-link>
            </li>
            <li>
              <router-link to="/port">포트폴리오</router-link>
            </li>
            <li>
              <router-link to="/youtube">유튜브</router-link>
            </li>
            <li>
              <router-link to="/unsplash">이미지</router-link>
            </li>
            <li>
              <router-link to="/movie">영화</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </header>
</template>
<style lang="scss">
// header__wrap
.header__wrap {
  background: var(--bg_section);
}
.header__inner {
  text-align: center;

  .header__logo {
    width: 100%;

    a {
      font-size: 30px;
      display: inline-block;
      padding: 5px 5px 0 5px;
      margin: 5px 5px 0 5px;
      text-transform: uppercase;
      font-weight: 800;

      em {
        text-transform: lowercase;
        font-weight: 500;
      }
    }
  }
  .header__nav {
    width: 100%;

    ul {
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
    }

    li {
      a {
        display: inline-block;
        padding: 10px;
        margin: 2px;
        position: relative;

        &::before {
          content: "";
          width: calc(100% - 20px);
          height: 2px;
          background-color: var(--color_body);
          position: absolute;
          left: 10px;
          bottom: 4px;
          transform: scaleX(0);
          transition: all 0.3s ease;
        }

        &:hover::before {
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "HeaderCont",
  props: {
    msg: String,
  },
};
</script>
