import { defineComponent, reactive } from "vue";

export const Render = defineComponent({
  setup() {
    let Hello: any = null
    const data = reactive({
      loaded: false
    })
    console.log('mounted');
    
    System.import('/5c44bf6a.system.js').then((module) => {
      data.loaded = true
      console.log('res', module)
      Hello = module.default.component
    })
    return () => (
      <div>hello {data.loaded && <Hello />}</div>
    )
  }
})