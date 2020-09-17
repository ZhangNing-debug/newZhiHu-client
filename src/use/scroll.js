import { ref, onMounted, onUnmounted } from 'vue';

export default function useScroll () {
  const scrollTop = ref(0);
  const update = () => {
    scrollTop.value =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  };
  onMounted(() => {
    window.addEventListener('scroll', update);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', update);
  });
  return {
    scrollTop
  };
}
