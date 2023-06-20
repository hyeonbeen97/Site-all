<template>
  <footer
    id="footer"
    role="contentinfo"
    class="footer__wrap section score3 bg-blue"
  >
    <div class="footer__inner container">
      <div class="footer__text">
        <h5>KIMHYEONBEEN</h5>
        <p>
          질문 환영 :'🎉': <br />
          궁금한 사항은 메일로 연락주세요!
          <router-link to="mailto:esansi@naver.com"
            >esansi@naver.com</router-link
          >
        </p>
        <ul class="sns">
          <li>
            <router-link to="/">
              <span class="ir">페이스북</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="ir">인스타</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="ir">유투브</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="ir">깃</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__menu">
        <div>
          <h4>사이트</h4>
          <ul>
            <li>
              <router-link to="/">웹표준 사이트</router-link>
            </li>
            <li>
              <router-link to="/">웹표준 사이트</router-link>
            </li>
            <li>
              <router-link to="/">웹표준 사이트</router-link>
            </li>
            <li>
              <router-link to="/">웹표준 사이트</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4>유형</h4>
          <ul>
            <li>
              <router-link to="/">이미지 유형</router-link>
            </li>
            <li>
              <router-link to="/">카드 유형</router-link>
            </li>
            <li>
              <router-link to="/">이미지/텍스트 유형</router-link>
            </li>
            <li>
              <router-link to="/">배너 유형</router-link>
            </li>
            <li>
              <router-link to="/">텍스트 유형</router-link>
            </li>
            <li>
              <router-link to="/">푸터 유형</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4>스크립트</h4>
          <ul>
            <li>
              <router-link to="/">검색 이펙트</router-link>
            </li>
            <li>
              <router-link to="/">퀴즈 이팩트</router-link>
            </li>
            <li>
              <router-link to="/">마우스 이펙트</router-link>
            </li>
            <li>
              <router-link to="/">슬라이드 이펙트</router-link>
            </li>
            <li>
              <router-link to="/">패럴랙스 이펙트</router-link>
            </li>
            <li>
              <router-link to="/">게임 이펙트</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4>레퍼런스</h4>
          <ul>
            <li>
              <router-link to="/">CSS</router-link>
            </li>
            <li>
              <router-link to="/">FONTS</router-link>
            </li>
            <li>
              <router-link to="/">HTML</router-link>
            </li>
            <li>
              <router-link to="/">JAVASCRIPT</router-link>
            </li>
            <li>
              <router-link to="/">REACT</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__right">
        Copyright 2023. All Rights Reserved. - Designed by KIMHYEONBEEN
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
// footer__inner
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .footer__text {
    width: 20%;
    h5 {
      font-size: 18px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      color: #808080;
    }
    .sns {
      li {
        display: inline;
        a {
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #fff;
          background-image: url(../../images/footer/sns01.svg);
        }
        &:nth-child(2) a {
          background-position: -45px 0;
        }
        &:nth-child(3) a {
          background-position: -90px 0;
        }
        &:nth-child(4) a {
          background-position: -135px 0;
        }
      }
    }
  }
  .footer__menu {
    width: 70%;
    display: flex;
    > div {
      width: 25%;
      h4 {
        font-size: 18px;
        color: #000;
        margin-bottom: 20px;
      }
      a {
        font-size: 14px;
        color: #808080;
        line-height: 1.8;
      }
    }
  }
  .footer__right {
    width: 100%;
    padding: 30px;
    text-align: center;
    border-top: 1px solid #e5e5e5;
    margin-top: 50px;
    color: #808080;
    font-size: 14px;
  }
}
</style>

<script>
export default {
  name: "FooterCont",
  props: {
    msg: String,
  },
};
</script>
