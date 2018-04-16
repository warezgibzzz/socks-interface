import Vue from 'vue'
import Index from '@/components/Pages/Index'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.index-page h1').textContent)
      .toEqual('Hello socks')
  })
})
