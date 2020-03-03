<template>
  <div id="app">
    <Header></Header>
    <p>{{count}}</p>
    <!-- <input type="text" v-model="n1"> +
    <input type="text" v-model="n2"> =
    <input type="text" v-model="n3"> -->
    <span>{{num1}}</span> +
    <span>{{num2}}</span> =
    <span>{{res}}</span>
  </div>
</template>

<script>
import Header from './views/Header'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
  // mapActions,
} from 'vuex'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      n1: 0,
      n2: 0
    }
  },
  mounted () {
    // console.log(this.$store.state.count)
    // console.log(this.num1)
    this.updateNum({
      num1: 2,
      num2: 3
    })
    this.updateCount({
      num: 1,
      time: 1000
    })
  },
  methods: {
    ...mapMutations(['updateNum']),
    ...mapActions(['updateCount'])
  },
  computed: {
    ...mapState(['count', 'num1', 'num2']),
    ...mapGetters({
      res: 'res'
    }),
    n3 () {
      return parseInt(this.n1) + parseInt(this.n2)
    }
  }
}
</script>

<style>

</style>
