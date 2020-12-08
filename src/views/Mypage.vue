<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-img
        src="../assets/main_header_img.jpg"
        :height="isMobile ? 'auto' : '100vh'"
      >
        <v-container
          class="d-flex flex-column"
          :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
          style="height: 100%"
        >
          <Header></Header>

          <v-card
            :class="isMobile ? 'mx-2' : 'mx-10'"
            class="rounded-xl mb-10 mx-auto my-10 animate__animated animate__fadeInDown"
            max-width="700"
            elevation="10"
          >
            <v-card-title class="nanum black white--text">
              <div class="h6 nanum">강의실</div>
              <div class="subtitle-2 nanum font-weight-bold">
                &nbsp;&nbsp; (수업전 단어장 먼저 확인후 강의실 입장)
              </div>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      block
                      height="20vh"
                      color="red"
                      class="white--text d-flex flex-column"
                      href="http://www.classcard.net/"
                      target="_blank"
                    >
                      <div class="h6 d-flex flex-column justify-center">
                        <v-icon large class="mb-2">fas fa-book</v-icon>
                        <span>수업 단어장</span>
                      </div>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      height="20vh"
                      color="red"
                      class="white--text"
                      href="https://us02web.zoom.us/j/84552629026"
                      target="_blank"
                    >
                      <div class="h6 d-flex flex-column justify-center">
                        <v-icon large class="mb-2">fas fa-sign-in-alt</v-icon>
                        <span>강의실 입장</span>
                      </div>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="success"
                      x-large
                      target="_blank"
                      href="http://bhen.co.kr/info/manual.html"
                    >
                      <v-icon>fas fa-search</v-icon>
                      <span class="ma-3 h6">사용방법 알아보기</span></v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      color="yellow"
                      x-large
                      target="_blank"
                      href="http://pf.kakao.com/_RgxjSxb/chat"
                    >
                      <v-icon>far fa-comment-alt</v-icon>
                      <span class="ma-3 h6">카톡 상담하기</span></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-img>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import mobile from "../mixins/mobile";
export default {
  components: { Header },
  mixins: [mobile],

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,

      items: ["최신순"],

      header: [
        {
          text: "No.",
          value: "no",
        },
        {
          text: "날짜",
          value: "date",
        },
        {
          text: "수강종류",
          value: "course",
        },
        {
          text: "제목",
          value: "title",
        },
        {
          text: "회원명",
          value: "name",
        },
        {
          text: "조회수",
          value: "views",
        },
      ],

      content: [
        {
          no: "2",
          date: "2020-04-15",
          course: "입문과정",
          title: "작품 활동을 위해 수강했습니다.",
          name: "강동원",
          views: "2",
        },
        {
          no: "1",
          date: "2020-04-12",
          course: "승무원영어",
          title: "리얼해서 활용도 높은",
          name: "이유리",
          views: "28",
        },
      ],
    };
  },

  created() {},
  destroyed() {},

  mounted() {},

  methods: {},
};
</script>
