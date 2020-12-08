<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-img
        src="../assets/main_header_img.jpg"
        :height="isMobile ? 'auto' : '100vh'"
      >
        <v-container
          class="d-flex flex-column"
          :class="isMobile ? 'px-3 py-3 ' : 'px-8'"
          style="height: 100%; max-width: 1000px"
        >
          <Header></Header>

          <v-card max-width="700" class="mx-auto">
            <v-container>
              <v-row>
                <v-col cols="5" md="3">
                  <v-select
                    :items="items"
                    outlined
                    dense
                    color="purple"
                  ></v-select>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" md="3">
                  <v-text-field label="제목+내용" color="purple">
                    <template v-slot:append>
                      <v-icon color="orange">arrow_forward</v-icon>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-data-table
                  style="width: 100%"
                  :headers="header"
                  :items="content"
                ></v-data-table>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-img>
    </v-container>
  </v-app>
</template>

<style>
tbody tr:nth-of-type(odd) {
  background-color: rgba(109, 45, 157, 0.1);
}
</style>

<script>
import Header from "@/components/Header.vue";
import mobile from "../mixins/mobile";

export default {
  components: { Header },

  mixins: [mobile],

  data() {
    return {
      rating: 4.8,

      items: ["최신순"],

      header: [
        {
          text: "No.",
          value: "no",
          class: "purple--text h5",
        },
        {
          text: "날짜",
          value: "date",
          class: "purple--text h5",
        },
        {
          text: "수강종류",
          value: "course",
          class: "purple--text h5",
        },
        {
          text: "제목",
          value: "title",
          class: "purple--text h5",
        },
        {
          text: "회원명",
          value: "name",
          class: "purple--text h5",
        },
        {
          text: "조회수",
          value: "views",
          class: "purple--text h5",
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
