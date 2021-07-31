export function pathInEnv(path) {
  let link = ""
  const dev = process.env.NODE_ENV !== 'production'

  if(dev)
    link = `http://localhost:4000${path}`
  else
    link = path

  return link
}