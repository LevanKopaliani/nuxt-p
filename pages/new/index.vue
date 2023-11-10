<script setup>
const coll = ref([]);

onMounted(() => {
  const rame = document.querySelectorAll(".img_block");
  coll.value.push(rame);
});

console.log(coll.value);
</script>
<template>
  <div class="rooms_block">
    <div class="container">
      <div class="column_left">
        <div class="text_block">
          <h1 class="title">სპა და გაჯანსაღება</h1>
          <p class="subtitle">
            ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის
            ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს ცნობილი ფაქტია,
            რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის ყურადღება მიიზიდოს
            და დიზაინის აღქმაში ხელი შეუშალოს ცნობილი ფაქტია,
          </p>
          <button>გაიგე მეტი გაჯანსაღების შესახებ</button>
        </div>
        <div class="img_block">
          <div class="img_container1">
            <img src="../../assets/img/11.png" alt="image" />
          </div>
          <div class="img_container2">
            <img src="../../assets/img/12.png" alt="image" />
          </div>
        </div>
      </div>
      <div class="column_right">
        <div class="img_block">
          <div class="img_container3 active">
            <img src="../../assets/img/21.png" alt="image" />
          </div>
          <div class="img_container4">
            <img src="../../assets/img/22.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- &__image {
    margin-top: 88px;
    height: 0;
    padding-top: calc(100% / (632 / 949));
    clip-path: inset(0 0 0 100%);

    @include maxq(desktop) {
      padding-top: calc(100% / (472 / 709));
    }
    @include maxq(tablet) {
      padding-top: calc(100% / (376 / 565));
      margin-top: 32px;
    }
    @include maxq(tablet-sm) {
      padding-top: calc(100% / (416 / 625));
    }
    @include maxq(mobile) {
      order: 1;
      padding-top: calc(100% / (272 / 409));
    }
  } -->

<!-- .picture-cover {
    position: relative;
    height: auto;
    font-size: 0;
    overflow: hidden;
    padding-top: calc(100% / (1200 / 551));
  } -->
<style lang="scss" scoped>
.rooms_block {
  min-height: 100vh;
  background-color: #f9f9f8;
  .container {
    padding: 168px;
    @media (max-width: 1440px) {
      padding: 80px 24px;
    }
    // height: 100%;

    display: flex;
    justify-content: center;
    gap: 32px;

    .column_left {
      width: 46.85%;
      display: flex;
      flex-direction: column;

      .text_block {
        display: flex;
        flex-direction: column;
        gap: 24px;
        .title {
          font-size: 56px;
          font-weight: 300;
          line-height: 64px;
          text-transform: uppercase;
        }
        .subtitle {
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }
        button {
          font: inherit;
          color: #fff;
          line-height: 24px;
          font-weight: 500;
          letter-spacing: 0.32px;
          max-width: fit-content;
          justify-content: center;
          align-items: center;
          padding: 12px 24px;
          border-radius: 80px;
          border: none;
          background-color: #383026;
          cursor: pointer;
        }
      }
      .img_block {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        .img_container1 {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: calc(100% / (726 / 470));

          img {
            position: absolute;
            border-radius: 24px;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
          }
        }
        .img_container2 {
          // display: flex;
          // justify-content: flex-end;
          position: relative;
          width: 100%;
          height: 0;
          padding-top: calc(100% / (568 / 292));
          @media (max-width: 984px) {
            display: none;
          }
          img {
            position: absolute;
            border-radius: 24px;
            width: 78.23%;
            height: 100%;
            max-height: 292px;
            top: 0;
            right: 0;
            object-fit: cover;
          }
        }
      }
    }
    .column_right {
      width: 53.15%;
      display: flex;
      flex-direction: column;
      .img_block {
        display: flex;
        flex-direction: column;
        gap: 32px;
        .img_container3 {
          position: relative;
          width: 100%;
          height: 0;
          clip-path: inset(0 0 0 100%);
          padding-top: calc(100% / (826 / 540));

          img {
            position: absolute;
            border-radius: 24px;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
          }
          &.active {
            clip-path: inset(0 0 0 0);
            transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1) clip-path;
            transition-delay: 3s;
          }
        }
        .img_container4 {
          position: relative;
          width: 85.351%;
          height: 0;
          padding-top: calc(100% / (705 / 470));

          img {
            position: absolute;
            border-radius: 24px;
            width: 100%;
            // height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
