import { defineComponent, reactive } from "vue";

export const Render = defineComponent({
  setup() {
    let Hello: any = null
    const data = reactive({
      loaded: false
    })
    console.log('mounted');
    const path = '/cacae890.system.js'
    System.import(path).then((module) => {
      setTimeout(() => {
        data.loaded = true
        console.log('res', module)
        Hello = module.default.component
        console.log('Hello', Hello)
      }, 1000);
      
    })
    return () => (
      <div>hello {data.loaded && <Hello />}</div>
    )
  }
})
