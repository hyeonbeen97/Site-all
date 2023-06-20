<template>
  <section id="memberSection" class="member__wrap section center">
    <h3>세계적인 선수 소개</h3>
    <p>세계적으로 인정받는 테니스 선수</p>
    <div class="member__inner container">
      <div class="member">
        <figure class="member__header">
          <img src="@/images/member/member01.jpg" alt="색을 고르는 법" />
        </figure>
        <div class="member__body">
          <h4 class="title">로저 페더러</h4>
          <p class="desc">(Roger Federer)</p>
          <a href="#" class="btn">자세히보기</a>
        </div>
      </div>
      <div class="member">
        <figure class="member__header">
          <img src="@/images/member/member02.jpg" alt="색을 고르는 법" />
        </figure>
        <div class="member__body">
          <h4 class="title">라파엘 나달</h4>
          <p class="desc">(Rafael Nadal)</p>
          <a href="#" class="btn">자세히보기</a>
        </div>
      </div>
      <div class="member">
        <figure class="member__header">
          <img src="@/images/member/member03.jpg" alt="색을 고르는 법" />
        </figure>
        <div class="member__body">
          <h4 class="title">노바크 조코비치</h4>
          <p class="desc">(Novak Djokovic)</p>
          <a href="#" class="btn">자세히보기</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
// member__wrap
.member__wrap {
}
.member__inner {
  @include flex--between;
  .member {
    width: 32%;
    .member__header {
      img {
        width: 100%;
      }
    }
    .member__body {
      position: relative;
      z-index: 100;
      margin-top: -100px;
      background-color: #000000;
      color: #fff;
      border: 1px solid #fff;
      padding: 5px;

      h4 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }

      a {
        font-size: 12px;
        color: #fff;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
}
</style>
