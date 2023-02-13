import { App } from 'vue'

export default {
  install (app: App) {
    const modules = import.meta.glob('./**/*.vue')
    for (const path in modules) {
      modules[path]().then((mod:any) => {
        let name = path.split('/')[1]
        name = name.replace(name[0], name[0].toUpperCase())
        app.component(name, mod.default)
      })
    }
  }
}
