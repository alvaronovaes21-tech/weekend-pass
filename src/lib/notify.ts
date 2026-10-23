type Listener = (message: string | null) => void

const listeners = new Set<Listener>()

/** Mini "store" para exibir avisos curtos (toast) sem precisar de biblioteca. */
export const notify = {
  show(message: string) {
    listeners.forEach((l) => l(message))
  },
  clear() {
    listeners.forEach((l) => l(null))
  },
  subscribe(listener: Listener) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
}
