<template>
  <section id="portSection" class="port__wrap section center">
    <h3>포트폴리오</h3>
    <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 포트폴리오</p>
    <div class="port__inner container">
      <div class="port__btn">
        <a href="#">21기</a>
        <a href="#">22기</a>
        <a href="#">23기</a>
        <a href="#">24기</a>
      </div>
      <div class="port__cont">
        <div class="port" v-for="(text, index) in texts" v-bind:key="index">
          <figure class="port__header">
            <img :src="text.Img" :alt="text.title" />
          </figure>
          <div class="port__body">
            <span class="pic">
              <img :src="text.icImg" alt="#" />
            </span>
            <div class="title">
              <h4>{{ text.title }}</h4>
              <p>{{ text.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      texts: [
        {
          Img: "./images/port/port01.png",
          icImg: "./images/member/member01.jpg",
          title: "김현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
        {
          Img: "./images/port/port02.png",
          icImg: "./images/member/member02.jpg",
          title: "현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
        {
          Img: "./images/port/port03.png",
          icImg: "./images/member/member03.jpg",
          title: "김현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
        {
          Img: "./images/port/port04.png",
          icImg: "./images/member/member01.jpg",
          title: "김현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
        {
          Img: "./images/port/port05.png",
          icImg: "./images/member/member02.jpg",
          title: "김현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
        {
          Img: "./images/port/port06.png",
          icImg: "./images/member/member03.jpg",
          title: "김현빈 포트폴리오",
          desc: "프론트앤드 개발자 포트폴리오",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
// port__wrap

.port__wrap {
  padding-bottom: 0;
}
.port__inner {
  .port__btn {
    a {
      display: inline-block;
      background-color: #af4242;
      border-radius: 30px;
      padding: 5px 40px;
      font-size: 25px;
      margin-bottom: 30px;
      margin-left: 15px;
      color: #fff;
      font-weight: 300;

      &:hover {
        background-color: darken($color: #db6b6b, $amount: 10);
      }
    }
  }

  .port__btn {
  }
  .port__cont {
    @include flex--between;
    flex-wrap: wrap;

    .port {
      width: 32.2222%;
      .port__header {
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
      .port__body {
        margin: 20px 0;
        display: flex;

        .pic {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #af4242;
          overflow: hidden;
        }
        .title {
          text-align: left;
          margin-left: 20px;

          h4 {
            font-size: 20px;
            margin-bottom: 5px;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
