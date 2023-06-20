<template>
  <section id="moviesSection" class="movies__wrap section">
    <div class="movies__inner container">
      <div class="movies__text">
        <h3>개발자 추천 영화</h3>
        <p>
          더 다양한 강의는 유튜브를 통해 제공하고 있습니다.<br />구독과 좋아요!
          부탁드립니다.
        </p>
        <a href="#">자세히 보기</a>
      </div>
      <div class="movies__item">
        <div><img src="@/images/port/port03.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port03.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port03.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port03.png" alt="유튜브" /></div>
        <div><img src="@/images/port/port03.png" alt="유튜브" /></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
// movies__wrap
.movies__wrap {
}
.movies__inner {
  height: 900px;
  h3 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    font-size: 22px;
  }
  a {
    @include button(#007c0a, #e7f1ee);
    border-radius: 30px;
  }
  .movies__item {
    position: absolute;
    margin-top: 70px;
    @include flex--between;

    > div {
      width: 300px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 200%;
        border-radius: 30px;
        object-fit: cover;
      }
    }
  }
}
// moviepage
#moviePage {
  .cont__title {
    h2 {
      color: #49a85e;
    }
  }
}
.movie__slider {
  display: none;
}
.movie__search {
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
    @include button(#49a85e, #e7f1ee);
    @include border(50px);
  }
}
.movie__tag {
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
.movie__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 19.333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 10px 0;
      }
    }
  }
}
</style>
