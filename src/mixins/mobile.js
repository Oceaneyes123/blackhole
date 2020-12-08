import AOS from "aos";
import "aos/dist/aos.css";

export default {
   data() {
    return {
      screenWidth: "",
      isMobile: false,
    }
   },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

    mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

    AOS.init();
    AOS.refresh();
  },

   methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    },
  },
}