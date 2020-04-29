export default function ({ store, redirect }) {
  if (!store.state.token) {
    return redirect('/login')
  }
  // TODO: Refresh token
}
