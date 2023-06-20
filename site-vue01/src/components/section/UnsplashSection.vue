<template>
  <section id="unsplashSection" class="unsplash__wrap section">
    <div class="unsplash__inner container">
      <div class="unsplash__text">
        <h3>이미지 다운로드 추천</h3>
        <p>
          더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요!
          부탁드립니다.
        </p>
        <a href="#">자세히 보기</a>
      </div>
      <div class="unsplash__item">
        <div><img src="@/images/port/port01.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port05.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port04.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port01.png" alt="유튜브" /></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
// unsplash__wrap
.unsplash__wrap {
}
.unsplash__inner {
  height: 600px;
  h3 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    font-size: 22px;
  }
  a {
    @include button(#ecaa52, #e7f1ee);
    border-radius: 30px;
  }
  .unsplash__item {
    position: absolute;
    margin-top: 70px;
    @include flex--between;

    > div {
      width: 400px;
      margin-right: 20px;

      img {
        width: 100%;
      }
    }
  }
}
// unsplashpage
#unsplashpage {
  .cont__title {
    h2 {
      color: #000000;
    }
  }
}
.unsplash__slider {
  display: none;
}
.unsplash__search {
  text-align: center;
  margin-bottom: 50px;
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    min-width: 300px;
    margin-right: 10px;
    @include border(50px);
  }
  button {
    @include button(#000000, #e7f1ee);
    @include border(50px);
  }
}
.unsplash__tag {
  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 100px;

    li {
      a {
        border: 1px solid #b6ccee;
        padding: 10px 20px;
        margin: 10px;
        color: #b6ccee;
        span {
          display: block;
          margin: 4px 0;
        }
      }
    }
  }
}
.unsplash__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 24.333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 10px 0;
      }
    }
  }
}
</style>
